import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { UiModule } from '../../shared/ui/ui.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CoreModule } from '@app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    LoginPageRoutingModule,
    UiModule
  ],
  declarations: [LoginPage, LoginFormComponent]
})
export class LoginPageModule {}
