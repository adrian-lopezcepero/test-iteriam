import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IteriamInputComponent } from './iteriam-input/iteriam-input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const EXPORTED_COMPONENTS = [IteriamInputComponent,];
const EXPORTED_IMPORTS = [FormsModule, ReactiveFormsModule, IonicModule];

@NgModule({
  declarations: [...EXPORTED_COMPONENTS],
  imports: [
    CommonModule, ...EXPORTED_IMPORTS
  ],
  exports: [...EXPORTED_IMPORTS, ...EXPORTED_COMPONENTS]
})
export class UiModule { }
