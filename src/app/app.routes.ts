import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/pages/dashboard/dashboard.component';
import { EmployeeListComponent } from './features/employee/pages/employee-list/employee-list.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EmployeeProfileComponent } from './features/employee/pages/employee-profile/employee-profile.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'profile/:id', component: EmployeeProfileComponent },
    { path: '**', component: PageNotFoundComponent }
];
