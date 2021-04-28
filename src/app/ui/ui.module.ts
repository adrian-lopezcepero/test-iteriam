import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IteriamInputComponent } from './iteriam-input/iteriam-input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IteriamToggleComponent } from './iteriam-toggle/iteriam-toggle.component';

const EXPORTED_COMPONENTS = [IteriamInputComponent,IteriamToggleComponent];
const EXPORTED_IMPORTS = [FormsModule, ReactiveFormsModule, IonicModule];

@NgModule({
  declarations: [...EXPORTED_COMPONENTS, IteriamToggleComponent],
  imports: [
    CommonModule, ...EXPORTED_IMPORTS
  ],
  exports: [...EXPORTED_IMPORTS, ...EXPORTED_COMPONENTS]
})
export class UiModule { }
