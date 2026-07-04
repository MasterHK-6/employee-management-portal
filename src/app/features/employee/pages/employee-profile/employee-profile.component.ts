import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-profile',
  imports: [],
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.css',
})
export class EmployeeProfileComponent implements OnInit {
  private route = inject(ActivatedRoute);

  employeeId = signal(0);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.employeeId.set(params['id']);
    });
  }
}
