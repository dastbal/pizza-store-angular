import { isNgTemplate } from '@angular/compiler';
import { Injectable, IterableDiffers } from '@angular/core';
import {Pizza} from '../../../pizza.model';


@Injectable({
  providedIn: 'root'
})
export class PizzasService {
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



  constructor() { }
  getAllPizzas(){
    return this.pizzas
  }
  getPizza(id:string):Pizza {
    return this.pizzas.find( pizza => id === pizza.id)
  }
}
