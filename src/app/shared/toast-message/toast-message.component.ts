import { Component, Inject } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent {
constructor (private snackbar:MatSnackBar, @Inject(MAT_SNACK_BAR_DATA) public data: {title: ''} ){}

close(){
  this.snackbar.dismiss()
}
}
