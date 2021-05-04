import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseApiService } from './service/firebase-api.service';
import { AuthApiInterface } from './service/auth-api.interface';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './+state/reducers/auth.reducer';
import * as fromAuth from './+state/auth.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuth.authsFeatureKey, fromAuth.reducer)
  ]
})
export class DataAccessAuthModule { }
