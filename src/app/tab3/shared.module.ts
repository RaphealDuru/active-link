import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [Tab3Page],
  exports: [Tab3Page]
})
export class SharedModule {}
