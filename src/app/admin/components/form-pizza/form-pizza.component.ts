import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { PizzasService  } from '../../..//core/services/pizzas/pizzas.service';
import { MyValidators  } from '../../../utils/validators';
import { Observable, pipe } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form-pizza',
  templateUrl: './form-pizza.component.html',
  styleUrls: ['./form-pizza.component.scss']
})
export class FormPizzaComponent implements OnInit {
  form:FormGroup;
  image$: Observable<any>;
  constructor(
    private formBuilder:FormBuilder,
    private pizzaService :PizzasService,
    private router : Router,
    private storage : AngularFireStorage,
  ) {
    this.buildForm();

  }

  ngOnInit(): void {
  }
  savePizza(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    if(this.form.valid){
      const pizza= this.form.value
      this.pizzaService.createPizza(pizza)
      .subscribe(newPizza=>{
        console.log(newPizza);
        this.router.navigate(['./admin/pizzas'])

      })
    }
  }
  uploadFile(event){
    const file = event.target.files[0];
    console.log(file);
    const name = 'image';
    const fileRef = this.storage.ref(name);
    const task =  this.storage.upload(name,file);
    task.snapshotChanges()
    .pipe(
      finalize(()=>{
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url=>{
          console.log(url);
          this.form.get('image').setValue(url)
        });
      })
    )
    .subscribe();
  }


  private buildForm(){
    this.form = this.formBuilder.group({
      id:['', [Validators.required]],
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
