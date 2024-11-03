import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarioRoutingModule } from './calendario-routing.module';
import { SorteoComponent } from './sorteo/sorteo.component';
import { MatchtableComponent } from './matchtable/matchtable.component';
import { TabpartidosComponent } from './tabpartidos/tabpartidos.component';
import { MatchesComponent } from './matches/matches.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    CalendarComponent,
    SorteoComponent,
    MatchtableComponent,
    TabpartidosComponent,
    MatchesComponent,
  ],
  exports: [SorteoComponent]
})
export class CalendarioModule { }
