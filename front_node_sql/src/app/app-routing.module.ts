import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './pages/persona/components/show/show.component';
import { UpdateComponent } from './pages/persona/components/update/update.component';

const routes: Routes = [
  {
    path: 'person',
    loadChildren: () =>
      import('../app/pages/persona/persona.module').then(
        (m) => m.PersonaModule
      ),
  },
  {
    path: '',
    component: ShowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
