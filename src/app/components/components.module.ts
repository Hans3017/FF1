import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DessertComponent } from './dessert/dessert.component';
import { LoginComponent } from './login/login.component';
import { CreaeditaDessertComponent } from './dessert/creaedita-dessert/creaedita-dessert.component';
import { ListarDessertComponent } from './dessert/listar-dessert/listar-dessert.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { CreaeditaIngredientComponent } from './ingredient/creaedita-ingredient/creaedita-ingredient.component';
import { ReporteComponent } from './reporte/reporte.component';
import { Reporte01Component } from './reporte/reporte01/reporte01.component';

@NgModule({
  declarations: [
    DessertComponent,
    LoginComponent,
    CreaeditaDessertComponent,
    ListarDessertComponent,
    IngredientComponent,
    CreaeditaIngredientComponent,
    ReporteComponent,
    Reporte01Component,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatListModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgChartsModule,
    MatFormFieldModule,
  ],
})
export class ComponentsModule {}
