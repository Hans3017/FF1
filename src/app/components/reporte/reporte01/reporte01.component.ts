import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { DessertService } from 'src/app/services/dessert.service';

@Component({
  selector: 'app-reporte01',
  templateUrl: './reporte01.component.html',
  styleUrls: ['./reporte01.component.css']
})
export class Reporte01Component implements OnInit{
  
  barChartOptions:ChartOptions={
    responsive:true
  }

  barChartLabels:string[]=[]
  barChartType:ChartType='bar'
  barChartLegend=true;
  barChartData:ChartDataset[]=[];
  
  constructor(private dS:DessertService){

  }

  ngOnInit(): void {
    this.dS.getQuantityByDifficultDessert().subscribe((data)=>{
      this.barChartLabels=data.map(item=>item.hryeDifficultyDessert);
      this.barChartData=[
        {
          data:data.map(item=>item.hryeQuantityIngredients),
          label:'Cantidad de Ingredientes',
          backgroundColor: ['rgba(255, 0, 0, 0.7)', 'rgba(0, 255, 0, 0.7)', 'rgba(0, 0, 255, 0.7)']
    }]
    })
  }
}
