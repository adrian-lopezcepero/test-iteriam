import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataAccessAuthModule } from './shared/data-access-auth/data-access-auth.module';
import { AuthApiInterface } from './shared/data-access-auth/service/auth-api.interface';
import { FirebaseApiService } from './shared/data-access-auth/service/firebase-api.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    TranslateModule.forRoot({ defaultLanguage: 'en' }),
    IonicModule.forRoot(), AppRoutingModule, DataAccessAuthModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: AuthApiInterface, useClass: FirebaseApiService }

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
