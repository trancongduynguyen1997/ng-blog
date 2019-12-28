import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [DashboardComponent, ListComponent, DetailComponent],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
