import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina1Component } from './paginas/pagina1/pagina1.component';
import { Pagina2Component } from './paginas/pagina2/pagina2.component';
import { Pagina3Component } from './paginas/pagina3/pagina3.component';
import { HomeComponent } from './paginas/home/home.component';


const routes: Routes = [
  {path: 'pagina1', component:  Pagina1Component },
  {path: 'pagina2', component:  Pagina2Component },
  {path: 'pagina3', component:  Pagina3Component },
  {path: '', component:  HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


