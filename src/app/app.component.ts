import { MiddleEarthMapComponent } from './components/middle-earth-map/middle-earth-map.component';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MiddleEarthMapComponent
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'middle-earth-map';
}
