import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[phoneDirective]'
})
export class phoneDirective {
@Input() phoneDirective = ''
  constructor() { }
  @HostListener('keypress', ['$event'])
  onKeyPress($event:KeyboardEvent){
    if(this.phoneDirective === 'phone'){
      let allowedcharacters = ['-','(',')','+',' ']
      if(($event.key >= '0' && $event.key <= '9') || allowedcharacters.includes($event.key))return;
      else $event.preventDefault()
    }
  }

}
