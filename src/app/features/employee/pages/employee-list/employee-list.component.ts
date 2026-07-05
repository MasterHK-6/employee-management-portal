import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../../core/services/employee.service';
import { Employee } from '../../../../shared/models/employee.model';
import { EmployeeCardComponent } from '../../components/employee-card/employee-card.component';
import { EmployeeProfileComponent } from "../employee-profile/employee-profile.component";

@Component({
  selector: 'app-employee-list',
  imports: [EmployeeCardComponent, EmployeeProfileComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  private _router = inject(Router);
  private _employeeService = inject(EmployeeService);

  employees = signal<Employee[]>([]);
  selectedEmployee!: Employee;

  // employeeName = signal("");

  ngOnInit(): void {
    this.employees.set(this._employeeService.getEmployees());
  }

  goToProfile(employeeId: number) {
    this._router.navigate(['profile', employeeId]);
  }

  employeeSelected(employee: Employee) {
    this.selectedEmployee = employee;
  }

  // setValue(name: string) {
  //   this.employeeName.set(name);
  // }
}
