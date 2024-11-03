import { Component } from '@angular/core';
import { TabpartidosComponent } from '../tabpartidos/tabpartidos.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';


@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [TabpartidosComponent, SharedModule
   , CoreModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent {

}
