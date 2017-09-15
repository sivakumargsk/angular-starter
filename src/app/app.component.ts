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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Simple AGM Components';
  public lat = 12.8493485;
  public lng = 29.1296884;
  public zoom = 3;
  public searchControl: FormControl;

  @ViewChild('search') public searchElementRef: ElementRef;

  geoJsonObject = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          letter: 'G',
          color: 'blue',
          rank: '7',
          ascii: '71'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [123.61, -22.14],
              [122.38, -21.73],
              [121.06, -21.69],
              [119.66, -22.22],
              [119.0, -23.4],
              [118.65, -24.76],
              [118.43, -26.07],
              [118.78, -27.56],
              [119.22, -28.57],
              [120.23, -29.49],
              [121.77, -29.87],
              [123.57, -29.64],
              [124.45, -29.03],
              [124.71, -27.95],
              [124.8, -26.7],
              [124.8, -25.6],
              [123.61, -25.64],
              [122.56, -25.64],
              [121.72, -25.72],
              [121.81, -26.62],
              [121.86, -26.98],
              [122.6, -26.9],
              [123.57, -27.05],
              [123.57, -27.68],
              [123.35, -28.18],
              [122.51, -28.38],
              [121.77, -28.26],
              [121.02, -27.91],
              [120.49, -27.21],
              [120.14, -26.5],
              [120.1, -25.64],
              [120.27, -24.52],
              [120.67, -23.68],
              [121.72, -23.32],
              [122.43, -23.48],
              [123.04, -24.04],
              [124.54, -24.28],
              [124.58, -23.2],
              [123.61, -22.14]
            ]
          ]
        }
      }
    ]
  };

  markerClusterData = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.7737, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438 },
    { lat: -43.999792, lng: 170.463352 }
  ];

  geoData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          name: 'Van Dorn Street',
          'marker-color': '#0000ff',
          'marker-symbol': 'rail-metro',
          line: 'blue'
        },
        geometry: {
          type: 'Point',
          coordinates: [-77.12911152370515, 38.79930767201779]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: 'Franconia-Springfield',
          'marker-color': '#0000ff',
          'marker-symbol': 'rail-metro',
          line: 'blue'
        },
        geometry: {
          type: 'Point',
          coordinates: [-77.16797018042666, 38.766521892689916]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: 'Congress Heights',
          'marker-color': '#008000',
          'marker-symbol': 'rail-metro',
          line: 'green'
        },
        geometry: {
          type: 'Point',
          coordinates: [-76.98851193260715, 38.84565770287511]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: 'Naylor Road',
          'marker-color': '#008000',
          'marker-symbol': 'rail-metro',
          line: 'green'
        },
        geometry: {
          type: 'Point',
          coordinates: [-76.95626270945314, 38.8513013835867]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: 'Branch Ave',
          'marker-color': '#008000',
          'marker-symbol': 'rail-metro',
          line: 'green'
        },
        geometry: {
          type: 'Point',
          coordinates: [-76.91146421773884, 38.82644634832078]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: 'Braddock Road',
          'marker-color': '#0000ff',
          'marker-symbol': 'rail-metro',
          line: 'blue'
        },
        geometry: {
          type: 'Point',
          coordinates: [-77.05366757406264, 38.81414366728901]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: 'Ronald Reagan Washington National Airport',
          'marker-color': '#0000ff',
          'marker-symbol': 'rail-metro',
          line: 'blue'
        },
        geometry: {
          type: 'Point',
          coordinates: [-77.04404229438322, 38.85341638599062]
        }
      }
    ]
  };

  paths = [
    { lat: 0, lng: 10 },
    { lat: 0, lng: 20 },
    { lat: 10, lng: 20 },
    { lat: 10, lng: 10 },
    { lat: 0, lng: 10 }
  ];
  // Nesting paths will create a hole where they overlap;
  nestedPaths = [
    [
      { lat: 0, lng: 10 },
      { lat: 0, lng: 20 },
      { lat: 10, lng: 20 },
      { lat: 10, lng: 10 },
      { lat: 0, lng: 10 }
    ],
    [
      { lat: 0, lng: 15 },
      { lat: 0, lng: 20 },
      { lat: 5, lng: 20 },
      { lat: 5, lng: 15 },
      { lat: 0, lng: 15 }
    ]
  ];

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
    // set google maps defaults
    this.zoom = 4;
    this.lat = 39.8282;
    this.lng = -98.5795;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();
    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: ['address']
        }
      );
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 5;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  clicked(clickEvent) {
    console.log(clickEvent);
  }

  styleFunc(feature) {
    return {
      clickable: false,
      fillColor: feature.getProperty('color'),
      strokeWeight: 1
    };
  }
  infoWindowClose(event) {
    console.log(event);
  }
}
