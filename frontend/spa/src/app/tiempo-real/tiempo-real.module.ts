//imports de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
//El routing module
import { TiempoRealRoutingModule } from './tiempo-real-routing.module';

//Colocar todos los components del modulo
import { SelecPartidoComponent } from './selec-partido/selec-partido.component';
import { HomeTiempoRealComponent } from './home-tiempo-real/home-tiempo-real.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    //Los componentes del modulo
    //SelecPartidoComponent,
    HomeTiempoRealComponent],
  providers: [
    //El archivo de los servicios del modulo
  ],
  imports: [
    CommonModule,
    TiempoRealRoutingModule,
    SharedModule,
    MatCardModule
  ],
})
export class TiempoRealModule { }
