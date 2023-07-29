import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaWebIglesiaComponent } from './pagina-web-iglesia/pagina-web-iglesia.component';

const routes: Routes = [

  {path: '', component: PaginaWebIglesiaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
