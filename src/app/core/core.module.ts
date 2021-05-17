import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicModule } from '@ionic/angular';
import { AuthApiInterface } from './data-access-auth/service/auth-api.interface';
import { FirebaseApiService } from './data-access-auth/service/firebase-api.service';
import { AuthFacade } from './data-access-auth/+state/auth.facade';


// AoT requires an exported function for factories
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/');
}


@NgModule({
  declarations: [],
  imports: [
    // angular
    HttpClientModule,
    // ionic
    IonicModule.forRoot(),

    // third party forRoot()
    TranslateModule.forRoot({
      defaultLanguage: environment.defaultLanguage,
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [IonicModule],
  providers: [
    AuthFacade,
    { provide: AuthApiInterface, useClass: FirebaseApiService }
  ]
})
export class CoreModule { }
