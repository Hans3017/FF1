import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dessert } from 'src/app/models/Dessert';
import { Ingredient } from 'src/app/models/Ingredient';
import { DessertService } from 'src/app/services/dessert.service';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-creaedita-ingredient',
  templateUrl: './creaedita-ingredient.component.html',
  styleUrls: ['./creaedita-ingredient.component.css']
})
export class CreaeditaIngredientComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  i: Ingredient = new Ingredient();

  mensaje: string = '';

  listaPostres:Dessert[]=[]

  constructor(
    private iS:IngredientService,
    private dS: DessertService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      hryeNameIngredient: ['', Validators.required],
      hryeQuantityIngredient: ['', Validators.required],
      hryeDessert: ['', Validators.required],
    });

    this.dS.list().subscribe(data=>{
      this.listaPostres=data;
    })
  }
  navegar() {
    this.router.navigate(['components']);
  }
  aceptar(): void {
    if (this.form.valid) {
      this.i.hryeNameIngredient = this.form.value.hryeNameIngredient;
      this.i.hryeQuantityIngredient =this.form.value.hryeQuantityIngredient;
      this.i.hryeDessert.hryeIdDessert = this.form.value.hryeDessert;

      this.iS.insert(this.i).subscribe((data) => {
      });
      
      this.form.reset();

    } else {
      this.mensaje = 'Ingrese todos los campos!!';
    }
  }
  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }

}

