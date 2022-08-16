import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PersonaRoutingModule } from './persona-routing.module';
import { UpdateComponent } from './components/update/update.component';
import { ShowComponent } from './components/show/show.component';
import { AddComponent } from './components/add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ShowComponent, UpdateComponent, AddComponent],
  imports: [
    PersonaRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class PersonaModule {}
