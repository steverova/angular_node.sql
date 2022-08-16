import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  constructor(
    private service: PersonaService,
    private router: Router,
    private activate: ActivatedRoute
  ) {}

  formPerson = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    cedula: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9),
    ]),
  });

  updatePerson() {
    console.log('actualizar comentario');
    console.log(this.formPerson.value);
    this.service.updatePerson(this.formPerson.value).subscribe((result) => {
      console.log('actualizado!!');
      this.router.navigate(['person/show']);
    });
  }

  getCurrentPerson() {
    const id = this.activate.snapshot.params['id'];
    this.service.getCurrentPerson(id).subscribe((result) => {
      this.formPerson.patchValue({
        id: result[0]['id'],
        nombre: result[0]['nombre'],
        apellido: result[0]['apellido'],
        cedula: result[0]['cedula'],
      });
    });
  }

  ngOnInit(): void {
    this.getCurrentPerson();
  }
}
