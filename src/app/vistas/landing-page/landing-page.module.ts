import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { PaginaWebIglesiaComponent } from './pagina-web-iglesia/pagina-web-iglesia.component';


@NgModule({
  declarations: [
    PaginaWebIglesiaComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
