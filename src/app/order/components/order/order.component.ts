import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza  } from '../../../pizza.model';
import { CartService  } from '../../../core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
   pizzas$ : Observable<Pizza[]>;
  constructor(
    private cartService :CartService
  ) {
    this.pizzas$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

}
