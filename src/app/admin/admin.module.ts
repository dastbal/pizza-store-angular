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
import { FormPizzaComponent } from './components/form-pizza/form-pizza.component';
import { PizzaEditComponent } from './components/pizza-edit/pizza-edit.component';

@NgModule({
  declarations: [
    PizzaFormComponent,
    NavComponent,
    DashboardComponent,
    TableComponent,
    PizzasListComponent,
    FormPizzaComponent,
    PizzaEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
