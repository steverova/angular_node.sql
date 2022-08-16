import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private service: PersonaService, private router: Router) {}

  formPerson = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    cedula: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10)
    ])),
  });

  get registerFormControl() {
    return this.formPerson.controls;
  }

  addPerson() {
    console.log('agregar comentario');
    console.log(this.formPerson.value);
    if (this.formPerson.valid) {
      this.service.addPerson(this.formPerson.value).subscribe((result) => {
        console.log('Agregado!!');
        this.router.navigate(['person/show']);
      });
    }
  }

  prueba(){
    console.log(this.account_validation_messages.cedula);
  }

  ngOnInit(): void {
    console.log(this.formPerson.value); // {first: 'Nancy', last; 'Drew'}
    console.log(this.formPerson.status);
    console.log(this.account_validation_messages.cedula);
  }

  account_validation_messages = {
    nombre: [
      { type: 'required', message: 'Username is required' },
      {
        type: 'minlength',
        message: 'Username must be at least 5 characters long',
      },
      {
        type: 'maxlength',
        message: 'Username cannot be more than 25 characters long',
      },
      {
        type: 'pattern',
        message: 'Your username must contain only numbers and letters',
      },
      {
        type: 'validUsername',
        message: 'Your username has already been taken',
      },
    ],
    cedula: [
      {type: 'required', message: 'cedula is required'},
      {type: 'minlength',message: 'cedula must be at least 5 characters long'},
      {type: 'maxlength',message: 'cedula cannot be more than 25 characters long'},
    ],
  };
}
