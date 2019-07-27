import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  // selector: 'slides-example',
  // template: `
  //   <ion-slides pager="true" [options]="slideOpts">
  //     <ion-slide>
  //       <h1>Slide 1 oh </h1>
  //     </ion-slide>
  //     <ion-slide>
  //       <h1>Slide 1</h1>
  //     </ion-slide>
  //     <ion-slide>
  //       <h1>Slide 3</h1>
  //     </ion-slide>
  //   </ion-slides>
  //   `
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController, public router: Router) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss({
      'dismissed':true
    })
  }

  navigate(url){
    console.log(url);
    this.router.navigate([url])
  }

}
