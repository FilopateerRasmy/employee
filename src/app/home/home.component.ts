import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialComponentsModule } from '../shared/angular-material-components.module';
import { SidebarFilterComponent } from '../sidebar-filter/sidebar-filter.component';
import { EmployeesListComponent } from '../employees-list/employees-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AngularMaterialComponentsModule, SidebarFilterComponent, EmployeesListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  hideFilter = false;

}
