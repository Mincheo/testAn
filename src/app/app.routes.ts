import { Routes } from '@angular/router';
import { TableComponent } from './table.component';
import { FormComponent } from './form.component';

export const routes: Routes = [
    { path: '', component: TableComponent },
    { path: 'edit/:id', component: FormComponent }
];
