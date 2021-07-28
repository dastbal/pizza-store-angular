import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';


import { HighlightDirective} from './directives/highlight/highlight.directive'
import { HeaderComponent} from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { MaterialModule } from '../material/material.module'

@NgModule({
  declarations: [
    HighlightDirective,
    HeaderComponent,
    FooterComponent,

  ],
  exports:[HighlightDirective,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
