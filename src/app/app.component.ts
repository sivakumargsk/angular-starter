import {
  Component,
  ElementRef,
  NgModule,
  NgZone,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';

import { GoogleMapDirectionsDirective } from './google-map-directions.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple AGM Components';
  lat = 12.8493485;
  lng = 29.1296884;
  zoom = 3;
  origin = {
    latitude: 17.491961,
    longitude: 78.3929628
  };
  destination = {
    latitude: 17.7990072,
    longitude: 83.3591898
  };
}
