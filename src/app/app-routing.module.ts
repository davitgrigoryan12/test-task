import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component'
import { FormComponent } from './form/form.component'

const routes: Routes = [
  { path: 'create', component: FormComponent, pathMatch: 'full' },
  { path: 'table', component: TableComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
