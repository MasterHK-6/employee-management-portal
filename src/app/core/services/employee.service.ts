import { Injectable } from '@angular/core';
import { Employee } from '../../shared/models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  getEmployees(): Employee[] {
    const EMPLOYEES: Employee[] = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@company.com',
        department: 'IT',
        role: 'Developer',
        salary: 70000,
        isActive: true
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@company.com',
        department: 'HR',
        role: 'Manager',
        salary: 85000,
        isActive: true
      }
    ];

    return EMPLOYEES;
  }
}
