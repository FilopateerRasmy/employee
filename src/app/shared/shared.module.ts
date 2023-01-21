import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedInputComponent } from './shared-input/shared-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialComponentsModule } from './angular-material-components.module';
import { ToastMessageComponent } from './toast-message/toast-message.component';
import { phoneDirective } from './directives/onlynumber.directive';




@NgModule({
  declarations: [
    SharedInputComponent,
    ToastMessageComponent,
    phoneDirective
  ],
  imports: [
    CommonModule,
    AngularMaterialComponentsModule,
    ReactiveFormsModule,
  ],
  exports:[SharedInputComponent, ToastMessageComponent,phoneDirective]
})
export class SharedModule { }
