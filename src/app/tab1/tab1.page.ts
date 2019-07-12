import { Component } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  map: GoogleMap;
  constructor(private platform: Platform) {}

  

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
    console.log('Map works bro!');
  }
    loadMap() {

      // This code is necessary for browser
      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyA8wilaTznFX29Fv93qtLMQA_QT9CRevD4',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyA8wilaTznFX29Fv93qtLMQA_QT9CRevD4'
      });
  
      let mapOptions: GoogleMapOptions = {
        camera: {
           target: {
             lat: 34.021489, 
             lng: -118.287571
           },
           zoom: 0.5,
           tilt: 30
         }
      };
  
      this.map = GoogleMaps.create('map_canvas', mapOptions);

let marker : Marker = this.map.addMarkerSync({
 title: 'State Park',
 icon: 'red',
 animation: 'DROP',
 position: {
     lat: 34.021489 ,
     lng: -118.287571
     
 }



});



marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
 alert('This is an active links marker');
});

  
  }
  
}





  