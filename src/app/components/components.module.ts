import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AddBtnComponent } from './add-btn/add-btn.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AddBtnComponent
  ],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AddBtnComponent
  ]
})
export class ComponentsModule { }
