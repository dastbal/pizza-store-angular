import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute ,Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { PizzasService  } from '../../../core/services/pizzas/pizzas.service';
import { MyValidators  } from '../../../utils/validators';
@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.scss']
})
export class PizzaEditComponent implements OnInit {

  form:FormGroup;
  id: string;
  constructor(
    private formBuilder:FormBuilder,
    private pizzaService :PizzasService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
  ) {
    this.buildForm();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params:Params)=>{
      this.id = params.id;

      this.pizzaService.getPizza(this.id)
      .subscribe(pizza=>{
        console.log(pizza);
        this.form.patchValue({
          title: pizza.title,
          price:pizza.price,
          description: pizza.description,
        });
      })
    })
  }

  savePizza(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    if(this.form.valid){
      const pizza= this.form.value
      this.pizzaService.updatePizza(this.id ,pizza)
      .subscribe(newPizza=>{
        console.log(newPizza);
        this.router.navigate(['./admin/pizzas'])

      })
    }
  }
  private buildForm(){
    this.form = this.formBuilder.group({
      title:['', [Validators.required]],
      price:['', [Validators.required, ,MyValidators.isPriceValid]],
      image:[''],
      description:['', [Validators.required]],
    })
  }
  get priceField(){
    return this.form.get('price');
  }

}
