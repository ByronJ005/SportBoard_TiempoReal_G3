import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/breadcrumb/breadcrumb.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-home-tiempo-real',
  templateUrl: './home-tiempo-real.component.html',
  styleUrl: './home-tiempo-real.component.scss',
  standalone: false,
})
export class HomeTiempoRealComponent {
  breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Tiempo Real', url: '/tiempo-real' }
  ];
}
