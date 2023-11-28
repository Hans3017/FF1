import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Dessert } from 'src/app/models/Dessert';
import { DessertService } from 'src/app/services/dessert.service';

@Component({
  selector: 'app-listar-dessert',
  templateUrl: './listar-dessert.component.html',
  styleUrls: ['./listar-dessert.component.css']
})
export class ListarDessertComponent implements OnInit {

  dataSource: MatTableDataSource<Dessert> = new MatTableDataSource();
  displayedColumns: string[] =
    ['codigo', 'postre', 'tiempo', 'dificultad','accion01','accion02'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private dS: DessertService) {

  }
  ngOnInit(): void {
    this.dS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.dS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.dS.delete(id).subscribe((data) => {
      this.dS.list().subscribe((data) => {
        this.dS.setList(data);
      });
    });
  }
}
