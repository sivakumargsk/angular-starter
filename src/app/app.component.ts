import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Google Maps Project';
  lat = -25.274449;
  lng = 133.77506;
  zoom = 5;

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
