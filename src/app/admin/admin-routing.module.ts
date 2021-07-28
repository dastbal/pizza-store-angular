import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaFormComponent} from './components/pizza-form/pizza-form.component';
import {NavComponent} from './components/nav/nav.component';
import {TableComponent} from './components/table/table.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { PizzasListComponent } from './components/pizzas-list/pizzas-list.component';
import { FormPizzaComponent } from './components/form-pizza/form-pizza.component';
import { PizzaEditComponent } from './components/pizza-edit/pizza-edit.component';


const routes: Routes = [

  {
    path:'',
    component: NavComponent,
    children: [
      {
        path:'create',
        component:PizzaFormComponent,
      },
      {
        path:'table',
        component:TableComponent,
      },
      {
        path:'',
        component:DashboardComponent,
      },
      {
        path:'pizzas',
        component:PizzasListComponent,
      },
      {
        path:'pizzas/create',
        component:FormPizzaComponent,
      },
      {
        path:'pizzas/edit/:id',
        component:PizzaEditComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
