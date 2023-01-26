import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularMaterialComponentsModule } from '../shared/angular-material-components.module';
import { FiltersService } from '../services/filters.service';
import { IFilter } from '../model/ifilter';
import { concatMap, tap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastMessageComponent } from '../shared/toast-message/toast-message.component';
import { of } from 'rxjs';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-sidebar-filter',
  standalone: true,
  imports: [CommonModule, SharedModule, ReactiveFormsModule, AngularMaterialComponentsModule],
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.scss']
})
export class SidebarFilterComponent {
  filters$ = this.filtersService.getFilters$.pipe(
    tap(res => {
      this.formInit(res)
    }),
    // in case you want to populate form from queryparameters
    // concatMap(res => this.initFormWithExisitingQuerParams(res) )
  )
  countries$= this.coutriesService.getCountries$.pipe(tap(res => console.log))

  filterForm = new FormGroup({})
  constructor(private filtersService: FiltersService, private router: Router, private snackBar: MatSnackBar, private route:ActivatedRoute, private coutriesService:CountriesService) { }

  getFormField(fieldName: string) {
    return this.filterForm.get(fieldName) as FormControl;
  }

  formInit(data: IFilter[]) {
    data.forEach(el => {
      if (el.type !== 'Date') {
        this.filterForm.addControl(el.title, new FormControl<string>(''))
        el.title.toLowerCase() === 'email' ? this.filterForm.get(el.title)?.addValidators([Validators.email]) : null
      } else {
        this.filterForm.addControl(el.title, new FormControl<Date | string>(new Date()))
      }
    })
  }

  filter() {

    if (this.filterForm.invalid) {
      this.snackBar.openFromComponent(ToastMessageComponent, { duration: 5000, horizontalPosition: 'center', verticalPosition: 'top', data:{title:'Invalid Form Data!!'} })
      return
    }

    let date = this.getFormField('Date').value
     date ? this.getFormField('Date').setValue(new Date(date).toLocaleDateString()) : null
    this.addFilterQueryParams(this.filterForm.value)
    this.filterForm.reset()
  }

  clear(){
    this.filterForm.reset()
    this.router.navigate([], {queryParams:{}})
  }

  addFilterQueryParams(filterObj:any){
    let filters:any = {}
    Object.keys(filterObj).forEach((el) => {
      if(filterObj[el]){
        filters[el.toLowerCase().trim()] = filterObj[el]
      }
    })
    // this line to prevent the filter button clear url if there is no data in the url
    if(Object.keys(filters).length){
      this.router.navigate([], {queryParams:filters})
    }
  }
// in case you want to populate form values from queryparameters
//   initFormWithExisitingQuerParams(data:IFilter[]){
//  return   this.route.queryParamMap.pipe(
//       tap((params:ParamMap) => {
//         data.forEach(el => {
//          const value = params.get(el.title.toLowerCase())
//          const key = el.title
//          this.getFormField(key).setValue(value)

//         })
//       })
//    , concatMap(res => of(data)) )
//   }
}
