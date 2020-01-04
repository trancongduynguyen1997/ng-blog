import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  title: string;
  content: string;
  image: string = null;
  btnText: string = 'Create Post';

  uploadPercent: Observable<number>;
  downloadUrl: Observable<string>;

  constructor(
    private authService: AuthService, 
    private postService: PostService,
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit() {
  }

  createPost() {
    const data = {
      title: this.title,
      author: this.authService.authState.displayName || this.authService.authState.email,
      authorId: this.authService.currentUserId,
      content: this.content,
      image: this.image,
      published: new Date()
    };
    this.postService.create(data);
    this.title = '';
    this.content = '';
    this.btnText = 'Post Created';
    setTimeout(() => {
      this.btnText = 'Create Post'
    }, 2000);
  }

  uploadImage($event) {
    // upload image to Firebase Storage
    const file = $event.target.files[0];
    const path = `posts/${file.name}`;

    if(file.type.split('/')[0] !== 'image') {
      return alert('only image files');
    }
    else {
      const fileRef = this.afStorage.ref(path);
      const task = this.afStorage.upload(path, file);

      this.uploadPercent = task.percentageChanges();
      
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadUrl = fileRef.getDownloadURL();
          // get url for the post document in database
          this.downloadUrl.subscribe((url) => {
            this.image = url;
          });
        })
      )
      .subscribe();
    }
  }

}
