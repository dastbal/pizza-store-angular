import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { ContactComponent } from './contact/contact.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule} from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    ContactComponent,
    PizzasComponent,
    PageNotFoundComponent,
    PizzaDetailComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
