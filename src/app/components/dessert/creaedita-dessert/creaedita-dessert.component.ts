import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Dessert } from 'src/app/models/Dessert';
import { DessertService } from 'src/app/services/dessert.service';

@Component({
  selector: 'app-creaedita-dessert',
  templateUrl: './creaedita-dessert.component.html',
  styleUrls: ['./creaedita-dessert.component.css'],
})
export class CreaeditaDessertComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  de: Dessert = new Dessert();
  mensaje: string = '';
  dificultad: { value: string; viewValue: string }[] = [
    { value: 'Dificil', viewValue: 'Dificil' },
    { value: 'Facil', viewValue: 'Facil' },
    { value: 'Intermedio', viewValue: 'Intermedio' },
  ];
  id: number = 0;
  edicion: boolean = false;


  constructor(
    private dS: DessertService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      hryeIdDessert:[''],
      hryeNameDesert: ['', Validators.required],
      hryePreparationTimeDessert: ['', Validators.required],
      hryeDifficultyDessert: ['', Validators.required],
    });
  }
  navegar() {
    this.router.navigate(['components']);

  }
  aceptar(): void {
    if (this.form.valid) {
      this.de.hryeIdDessert=this.form.value.hryeIdDessert;
      this.de.hryeNameDesert = this.form.value.hryeNameDesert;
      this.de.hryePreparationTimeDessert =this.form.value.hryePreparationTimeDessert;
      this.de.hryeDifficultyDessert = this.form.value.hryeDifficultyDessert;

      if (this.edicion) {
      this.dS.update(this.de).subscribe(() => {
        this.dS.list().subscribe((data) => {
          this.dS.setList(data);
        });
      });
    }else{
      this.dS.insert(this.de).subscribe((data) => {
        this.dS.list().subscribe((data) => {
          this.dS.setList(data);
        });
      });
    }

      this.router.navigate(['components/postres']);
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
  init() {
    if (this.edicion) {
      this.dS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hryeIdDessert: new FormControl(data.hryeIdDessert),
          hryeNameDesert: new FormControl(data.hryeNameDesert),
          hryePreparationTimeDessert: new FormControl(data.hryePreparationTimeDessert),
          hryeDifficultyDessert:new FormControl(data.hryeDifficultyDessert),
        });
      });
    }
  }
}
