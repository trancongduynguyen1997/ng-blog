import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { PostService } from '../post.service';
import {Post} from '../post';

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

  constructor(private authService: AuthService, private postService: PostService) { }

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

}
