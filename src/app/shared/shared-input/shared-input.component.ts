import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shared-input',
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.scss']
})
export class SharedInputComponent {
@Input() control = new FormControl<string>('');
@Input() placeholder = '';
@Input() type = '';
@Input() title = '';


getControlError(errorName:string){
  return this.control.hasError(errorName)
}
}
