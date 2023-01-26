import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnChanges {
  @Input() data:any[] = []
  @Input() control = new FormControl()
  @Input() placeholder=""
  pageLength = this.data.length
  paginatedData:any[] = []

ngOnChanges(){
  this.pageLength = this.data.length
  this.paginatedData = this.data.slice(0, 10)
}
  pageChange($event:PageEvent){
    let page = $event.pageIndex * 10
    console.log(this.data.slice(page, page+10 ))
    this.paginatedData = this.data.slice(page, page+10 )
  }

}
