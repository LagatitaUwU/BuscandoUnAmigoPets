import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComoAdoptarComponent } from './como-adoptar/como-adoptar.component';
import { ComoDarAdopcionComponent } from './como-dar-adopcion/como-dar-adopcion.component';
import { AcercaComponent } from './acerca/acerca.component';
import { CatalagoAmigosComponent } from './catalago-amigos/catalago-amigos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComoAdoptarComponent,
    ComoDarAdopcionComponent,
    AcercaComponent,
    CatalagoAmigosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
