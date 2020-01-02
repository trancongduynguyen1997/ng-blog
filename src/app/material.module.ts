import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
