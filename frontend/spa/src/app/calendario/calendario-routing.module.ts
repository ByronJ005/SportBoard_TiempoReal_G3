import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SorteoComponent } from './sorteo/sorteo.component'; // Componente de sorteo
import { CalendarComponent } from './calendar/calendar.component';
import { MatchtableComponent } from './matchtable/matchtable.component';

const routes: Routes = [  
  {
    path: '',
    component: CalendarComponent
  },
  {
    path: 'sorteo',
    component: SorteoComponent
  },
  {
    path: 'matchable',
    component: MatchtableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioRoutingModule { }
