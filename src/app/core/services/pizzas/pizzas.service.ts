import { isNgTemplate } from '@angular/compiler';
import { HttpClient} from '@angular/common/http';
import { Injectable, IterableDiffers } from '@angular/core';
import {Pizza} from '../../../pizza.model';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PizzasService {



  constructor(
    private http:HttpClient
  ) { }
  getAllPizzas(){
    return this.http.get<Pizza[]>( `${environment.url_api}/products`);
  }
  getPizza(id:string) {
    return this.http.get<Pizza>(`${environment.url_api}/products/${id}`);
  }
  createPizza(pizza: Pizza){
    return this.http.post(`${environment.url_api}/products`, pizza);
  }
  updatePizza(id: string , changes: Partial<Pizza>){
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }
  deletePizza(id:string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
