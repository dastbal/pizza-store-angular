import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { PizzasListComponent } from './components/pizzas-list/pizzas-list.component';

@NgModule({
  declarations: [
    PizzaFormComponent,
    NavComponent,
    DashboardComponent,
    TableComponent,
    PizzasListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
