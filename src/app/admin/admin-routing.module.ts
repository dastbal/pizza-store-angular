import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaFormComponent} from './components/pizza-form/pizza-form.component';
import {NavComponent} from './components/nav/nav.component';
import {TableComponent} from './components/table/table.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { PizzasListComponent } from './components/pizzas-list/pizzas-list.component';

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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
