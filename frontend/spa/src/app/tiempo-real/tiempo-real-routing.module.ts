import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Los componentes del modulo
import { HomeTiempoRealComponent } from './home-tiempo-real/home-tiempo-real.component';
import { SelecPartidoComponent } from './selec-partido/selec-partido.component';
import { CronologiaComponent } from './cronologia/cronologia.component';
import { TrEstadisticaComponent } from './tr-estadistica/tr-estadistica.component';
import { ArbitroComponent } from './arbitro/arbitro.component';

const routes: Routes = [
  {path: '', component: SelecPartidoComponent},
  {path: 'cronologia', component: CronologiaComponent},
  {path: 'estadistica', component: TrEstadisticaComponent},
  {path: 'arbitro', component: ArbitroComponent},
  {path: 'selec-partido', component: SelecPartidoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiempoRealRoutingModule { }
