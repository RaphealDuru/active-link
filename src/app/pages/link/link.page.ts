import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../modal /modal.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
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


@Component({
  selector: 'app-link',
  templateUrl: './link.page.html',
  styleUrls: ['./link.page.scss'],
})
export class LinkPage implements OnInit {

  map: GoogleMap;

  constructor(private platform: Platform, public modalController: ModalController, private geolocation: Geolocation) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();


  }

  addMarker(){
    console.log('works');
    let marker_five: Marker = this.map.addMarkerSync({
      title: 'INGLEWOOD',
      icon: '#0F9D37',
      animation: 'bounce',
      position: {
        lat: 34.009380,
        lng: -118.247464

      }
    });
  }
  loadMap() {

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyA8wilaTznFX29Fv93qtLMQA_QT9CRevD4',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyA8wilaTznFX29Fv93qtLMQA_QT9CRevD4'
    });



    // console.log ('hello norld');

    navigator.geolocation.getCurrentPosition(function(position) {
      (position.coords.latitude, position.coords.longitude);
    });


    this.geolocation.getCurrentPosition().then((position) => {
      console.log('moo!' + position.coords.latitude)


      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          zoom: 10.5,
          tilt: 30
        }
      };

      this.map = GoogleMaps.create('map_canvas', mapOptions);

      let marker: Marker = this.map.addMarkerSync({
        title: 'YOUR LOCATION',
        icon: '#0F9D37',
        animation: 'DROP',
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude

        }
      })


      let marker_two: Marker = this.map.addMarkerSync({
        title: 'STAPLES',
        icon: '#0F9D37',
        animation: 'DROP',
        position: {
          lat: 34.03916651,
          lng: -118.266998932
        }
      });


      let marker_three: Marker = this.map.addMarkerSync({
        title: ' LOS ANGELES ',
        icon: '#0F9D37',
        animation: 'bounce',
        position: {
          lat: 34.0522,
          lng: -118.2437
        }
      });

      let marker_four: Marker = this.map.addMarkerSync({
        title: ' VENICE',
        icon: '#0F9D37',
        animation: 'drop',
        position: {
          lat: 33.9850,
          lng: -118.4695
        }
      });


      let marker_five: Marker = this.map.addMarkerSync({
        title: 'INGLEWOOD',
        icon: '#0F9D37',
        animation: 'bounce',
        position: {
          lat: 33.9617,
          lng: -118.3531

        }
      });

      let marker_six: Marker = this.map.addMarkerSync({
        title: 'BEVERLY HILLS',
        icon: '#0F9D37',
        animation: 'drop',
        position: {
          lat: 34.0736,
          lng: -118.4004

        }
      });
    });
  }

  

}
