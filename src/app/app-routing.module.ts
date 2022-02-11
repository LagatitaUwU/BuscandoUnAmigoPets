import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalagoAmigosComponent } from './catalago-amigos/catalago-amigos.component';
import { ComoAdoptarComponent } from './como-adoptar/como-adoptar.component';
import { ComoDarAdopcionComponent } from './como-dar-adopcion/como-dar-adopcion.component';
import { AcercaComponent } from './acerca/acerca.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:'CatalagoAmigo',
   component:CatalagoAmigosComponent
  },
  {path:'ComoAdoptar',
   component:ComoAdoptarComponent
  },
  {path:'ComoDarAdopcion',
   component:ComoDarAdopcionComponent
  },
  {path:'Acerca',
   component:AcercaComponent
  },
  {path:'inicio',
   component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
