import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { MatchtableComponent } from '../matchtable/matchtable.component';


@Component({
    selector: 'app-tabpartidos',
    standalone: true,
    imports: [CoreModule, SharedModule, CommonModule, MatchtableComponent],
    templateUrl: './tabpartidos.component.html',
    styleUrl: './tabpartidos.component.scss',
})
export class TabpartidosComponent {}
