import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { Geolocation } from '@ionic-native/geolocation';
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
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  

})
export class Tab1Page {
  map: GoogleMap;
  constructor(private platform: Platform, public toastController: ToastController, public modalController: ModalController,private splashScreen: SplashScreen) {}


  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
    console.log('Map works bro!');
  }

  // locate(){

  
  // this.geolocation.getCurrentPosition().then((resp) => {
  //   console.log(resp.coords.latitude);
  //   // resp.coords.longitude
  //  }).catch((error) => {
  //    console.log('Error getting location', error);
  //  });
   
  //  let watch = this.geolocation.watchPosition();
  //  watch.subscribe((data) => {
  //   // data can be a set of coordinates, or an error (if an error occurred).
  //   // data.coords.latitude
  //   // data.coords.longitude
  //  });

  // }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();

    
  }

// async presentToast() {
//     const toast = await this.toastController.create({
//       message: 'Your settings have been saved.',
//       duration: 1000
//     });
//     toast.present();
//   }

//   async presentToastWithOptions() {
//     const toast = await this.toastController.create({
//       header: 'this is a park!',
//       message: 'Click to Close',
//       position: 'bottom',
//       cssClass: 'toast-css',
//       buttons: [
//         {
//           side: 'start',
//           icon: 'football',
//           text: 'Address:6x6x6 usc high ways,90054,los angeles',
          
//           handler: () => {
//             console.log('Favorite clicked');
//           }
//         }, {
//           text: 'Done',
//           role: 'cancel',
//           handler: () => {
//             console.log('Cancel clicked');
//           }
//         }
//       ]
//     });
//     toast.present();
//   }



    loadMap() {

      // This code is necessary for browser
      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyA8wilaTznFX29Fv93qtLMQA_QT9CRevD4',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyA8wilaTznFX29Fv93qtLMQA_QT9CRevD4'
      });
  
      let mapOptions: GoogleMapOptions = {
        camera: {
           target: {
             lat:33.9617 , 
             lng: -118.3531
           },
           zoom: 10.5,
           tilt: 30
         }
      };
  
      this.map = GoogleMaps.create('map_canvas', mapOptions);

let marker : Marker = this.map.addMarkerSync({
 title: 'State Park',
 icon: '#0F9D37',
 animation: 'DROP',
 position: {
     lat: 34.021489 ,
     lng: -118.287571
     
 }



});

let marker_two : Marker = this.map.addMarkerSync({
  title: 'STAPLES',
  icon: '#0F9D37',
  animation: 'DROP',
  position: {
      lat: 34.03916651 ,
      lng: -118.266998932
      
  }
 
 
 
 });
 let marker_three : Marker = this.map.addMarkerSync({
  title: ' LOS ANGELES ',
  icon: '#0F9D37',
  animation: 'bounce',
  position: {
      lat: 34.0522 ,
      lng: -118.2437
      
  }
 
 
 
 });

 let marker_four : Marker = this.map.addMarkerSync({
  title: ' VENICE',
  icon: '#0F9D37',
  animation: 'drop',
  position: {
      lat: 33.9850 ,
      lng: -118.4695 
      
  }
 
 
 
 });


 let marker_five : Marker = this.map.addMarkerSync({
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


marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
this.presentModal();
 });

// marker_two.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
//   this.presentToastWithOptions();
//  });

//  marker_three.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
//   this.presentToastWithOptions();
//  });



  
  }
  
}





  