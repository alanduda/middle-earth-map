import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-middle-earth-map',
  templateUrl: './middle-earth-map.component.html',
  styleUrl: './middle-earth-map.component.scss'
})
export class MiddleEarthMapComponent implements AfterViewInit {
  private map!: L.Map;

  ngAfterViewInit(): void {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('Elemento do mapa não encontrado!');
      return;
    }
    
    this.map = L.map(mapElement, {
      center: [0, 0],
      zoom: 2,
      minZoom: 0,
      maxZoom: 6,
      attributionControl: false,
    });

    L.tileLayer('/assets/map-tiles/{z}/{x}/{y}.png', {
      noWrap: true,
    }).addTo(this.map);

    this.map.fitWorld();
  }
}
