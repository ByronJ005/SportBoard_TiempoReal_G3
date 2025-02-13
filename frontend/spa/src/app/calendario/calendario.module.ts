import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarioRoutingModule } from './calendario-routing.module';
import { MatchtableComponent } from './matchtable/matchtable.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarioRoutingModule,
    CalendarComponent,
    MatchtableComponent,
  ],
  exports: []
})
export class CalendarioModule { }
