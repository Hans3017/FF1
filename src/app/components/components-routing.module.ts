import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DessertComponent } from './dessert/dessert.component';
import { CreaeditaDessertComponent } from './dessert/creaedita-dessert/creaedita-dessert.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { CreaeditaIngredientComponent } from './ingredient/creaedita-ingredient/creaedita-ingredient.component';
import { ReporteComponent } from './reporte/reporte.component';
import { Reporte01Component } from './reporte/reporte01/reporte01.component';


const routes: Routes = [
  {
    path: 'postres',
    component: DessertComponent,
    children: [
      { path: 'nuevo', component: CreaeditaDessertComponent },
      { path: 'ediciones/:id', component: CreaeditaDessertComponent },
    ],
  },
  {
    path: 'ingredientes',
    component: IngredientComponent,
    children: [
      { path: 'nuevo', component: CreaeditaIngredientComponent },
    ],
  },
  {
    path: 'reporte',
    component: ReporteComponent,
    children: [
      { path: 'reporte01', component: Reporte01Component },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
