import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ModalPage } from '../modal/modal.page';
import { ModalPageModule } from '../modal/modal.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ModalPageModule,
    RouterModule.forChild([
      { path: '', component: Tab1Page },
      { path: '../modal/modal.page', component: ModalPage}
    ])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
