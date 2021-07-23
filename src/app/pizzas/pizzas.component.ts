import { Component, OnInit } from '@angular/core';
import {Pizza} from '../pizza.model';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  pizzas : Pizza[] =[

    {
      id:'1',
      image: 'assets/images/pizza.jpg',
      title: 'Hawaiana',
      price: 10,
      description :'Jamón y piña acaramelada',
    },
    {
      id:'2',
      image: 'assets/images/pizza.jpg',
      title: 'Tocino',
      price: 10,
      description :'Jamón y piña acaramelada',
    },
    {
      id:'3',
      image: 'assets/images/pizza.jpg',
      title: 'Pepperoni',
      price: 10,
      description :'Jamón y piña acaramelada',
    },
    {
      id:'4',
      image: 'assets/images/pizza.jpg',
      title: 'Jamón',
      price: 10,
      description :'Jamón y piña acaramelada',
    },

  ];
  clickPizza(id:number){
    console.log('pizza',id);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
