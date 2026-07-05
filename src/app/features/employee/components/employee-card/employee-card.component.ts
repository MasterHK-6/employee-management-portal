import { Component, input, output } from '@angular/core';
import { Employee } from '../../../../shared/models/employee.model';

@Component({
  selector: 'app-employee-card',
  imports: [],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css',
})
export class EmployeeCardComponent {
  employee = input.required<Employee>();
  selected = output<Employee>();

  selectEmployee() {
    this.selected.emit(this.employee());
  }
}