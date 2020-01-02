import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {path: 'blog', component: PostListComponent},
  {path: 'blog/:id', component: PostDetailComponent},
  {path: 'dashboard', component: PostDashboardComponent}
]

@NgModule({
  declarations: [PostListComponent, PostDashboardComponent, PostDetailComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PostModule { }
