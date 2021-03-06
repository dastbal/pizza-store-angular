import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPizzaComponent } from './form-pizza.component';

describe('FormPizzaComponent', () => {
  let component: FormPizzaComponent;
  let fixture: ComponentFixture<FormPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
