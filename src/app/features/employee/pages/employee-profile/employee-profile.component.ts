import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../../shared/models/employee.model';

@Component({
  selector: 'app-employee-profile',
  imports: [],
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.css',
})
export class EmployeeProfileComponent {
  employee = input.required<Employee>();

  // private route = inject(ActivatedRoute);

  // employeeId = signal(0);

  // ngOnInit() {
  //   this.route.params.subscribe((params) => {
  //     this.employeeId.set(params['id']);
  //   });
  // }
}
