import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IteriamInputComponent } from './iteriam-input/iteriam-input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IteriamToggleComponent } from './iteriam-toggle/iteriam-toggle.component';
import { ToastComponent } from './toast/toast.component';

const EXPORTED_COMPONENTS = [IteriamInputComponent,IteriamToggleComponent, ToastComponent];
const EXPORTED_IMPORTS = [FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [...EXPORTED_COMPONENTS],
  imports: [
    CommonModule, ...EXPORTED_IMPORTS
  ],
  exports: [...EXPORTED_IMPORTS, ...EXPORTED_COMPONENTS]
})
export class UiModule { }
