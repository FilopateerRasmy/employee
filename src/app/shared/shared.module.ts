import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedInputComponent } from './shared-input/shared-input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SharedInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ]
})
export class SharedModule { }
