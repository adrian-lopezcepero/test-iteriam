import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataAccessAuthModule } from './shared/data-access-auth/data-access-auth.module';
import { AuthApiInterface } from './shared/data-access-auth/service/auth-api.interface';
import { FirebaseApiService } from './shared/data-access-auth/service/firebase-api.service';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';


export const httpTranslateLoader = (http: HttpClient) => (new TranslateHttpLoader(http));

export const initialActionsTranslate = (translate: TranslateService) =>
  () => {
    translate.setDefaultLang('es');
    return translate.use('es').toPromise();
  };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
    DataAccessAuthModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
        strictActionTypeUniqueness: true
      }
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initialActionsTranslate,
      multi: true,
      deps: [TranslateService]
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: AuthApiInterface, useClass: FirebaseApiService }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

