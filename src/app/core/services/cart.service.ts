import { Injectable } from '@angular/core';
import {Pizza} from '../../pizza.model';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private pizzas: Pizza[] = [];
  private cart = new BehaviorSubject<Pizza[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }
addCart(pizza: Pizza){
  this.pizzas = [...this.pizzas , pizza];
  this.cart.next(this.pizzas)
}

}
