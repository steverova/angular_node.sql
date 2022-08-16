import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Person from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  personList: Person[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  constructor(private service: PersonaService, private router: Router) {}

  getAll() {
    this.service
      .getAllPerson()
      .subscribe((personList) => (this.personList = personList));
  }

  deletePerson(id: number) {
    this.service.deletePerson(id).subscribe((result) => {
      console.log('eliminado');
      this.getAll();
    });
  }

  getCurrent(id: number) {
    this.router.navigate([`/person/update/${id}`]);
  }
}
