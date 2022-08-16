import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ShowComponent } from './components/show/show.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  { path: 'show', component: ShowComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'add', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
