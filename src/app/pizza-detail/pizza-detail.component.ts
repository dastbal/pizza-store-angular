import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; // para enviarle el id dinamicamente a la ruta
import { PizzasService} from '../core/services/pizzas/pizzas.service'
import {Pizza} from '../pizza.model';


@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent implements OnInit {
  pizza: Pizza  = {id:'4',
  image: 'assets/images/pizza.jpg',
  title: 'Jamón',
  price: 10,
  description :'Jamón y piña acaramelada',};
  constructor(
    private route:ActivatedRoute,
  private pizzasService:PizzasService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      const id: string= params.id
      this.pizza = this.pizzasService.getPizza(id);
    });

  }

}
