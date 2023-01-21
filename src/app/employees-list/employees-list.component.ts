import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialComponentsModule } from '../shared/angular-material-components.module';
import { EmployeesService } from '../services/emplyees.service';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';
import { map, switchMap } from 'rxjs';
import { Employees } from '../model/employees';
import { ActivatedRoute, ParamMap } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule, AngularMaterialComponentsModule],
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
 @Output() toggleFilterEmitter = new EventEmitter()

  displayedColumns: string[] = ['name', 'phone', 'email', 'date', 'country', 'salary', 'company'];

  dataSource = this.employeesWithFilter()

  constructor(private employeesSerivece: EmployeesService, private route: ActivatedRoute) { }

  @ViewChild(MatSort) sort!: MatSort;

  employeesWithFilter() {
    return this.route.queryParamMap.pipe(
      switchMap((params:ParamMap) => {
        let queryParamsValues = params.keys
        if (queryParamsValues.length === 0) {
          return this.employees()
        }


        // dealing with api would be cleaner and easier
        return this.employees().pipe(
          map(result => {
            const uniqueData = new Set<Employees>();
            result.data.filter((employee: any) => {
              queryParamsValues.forEach(el => {
                console.log(params.get(el))
                if (employee[el] === params.get(el)) {

                  uniqueData.add(employee)
                }
              })
            })

            let dataSource = new MatTableDataSource<Employees>()
            dataSource.data = [...uniqueData]
            dataSource.sort = this.sort
            return dataSource

          })
        )

      })
    )
  }

  employees() {
    return this.employeesSerivece.getEmployees().pipe(
      map(res => {
        let dataSource = new MatTableDataSource<Employees>(res);
        dataSource.sort = this.sort
        return dataSource
      })
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource = this.dataSource.pipe(
      map(res => {
        res.filter = filterValue.trim().toLowerCase()
        return res;
      })
    )
  }

  toggleFilter(){
    this.toggleFilterEmitter.emit()
  }
}
