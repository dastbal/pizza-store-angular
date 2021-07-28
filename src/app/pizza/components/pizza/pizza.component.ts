import {Component ,Input, Output ,EventEmitter,OnChanges ,SimpleChanges } from '@angular/core'
import {Pizza} from '../../../pizza.model'
import { CartService} from '../../../core/services/cart.service'

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls:['./pizza.component.scss'],
})


export class PizzaComponent implements OnChanges{

  constructor(
    private cartService : CartService
  ){

  }

  ngOnChanges(changes:SimpleChanges){
    console.log('Onchange')
    console.log(changes)
  }

  @Output() pizzaClicked: EventEmitter<any> = new EventEmitter() ;
  @Input() pizza: Pizza = {
    id: 'ss',
  image:'ss',
  title:'jj',
  price:3,
  description:'ss'}  ;

  addCart(){
    console.log(' added to the cart')
    this.pizzaClicked.emit(this.pizza.id);
    this.cartService.addCart(this.pizza);
  }

}

