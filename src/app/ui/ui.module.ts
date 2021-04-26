import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemiamInputComponent } from './itemiam-input/itemiam-input.component';
import { IonicModule, IonIcon } from '@ionic/angular';
import { IteriamButtonComponent } from './iteriam-button/iteriam-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const EXPORTED_COMPONENTS = [ItemiamInputComponent, IteriamButtonComponent];
const EXPORTED_IMPORTS = [FormsModule, ReactiveFormsModule, IonicModule];

@NgModule({
  declarations: [...EXPORTED_COMPONENTS],
  imports: [
    CommonModule, ...EXPORTED_IMPORTS
  ],
  exports: [...EXPORTED_IMPORTS, ...EXPORTED_COMPONENTS]
})
export class UiModule { }
