import { Injectable } from '@angular/core';
import { defer, from, Observable, of } from 'rxjs';
import { untilDestroyed, User } from '../../../shared/util';
import { AuthApiInterface } from './auth-api.interface';
import { catchError, exhaustMap, map, mergeMap, switchMap, takeUntil, tap } from 'rxjs/operators';

import firebase from 'firebase/app';
// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import { LoginResponse } from '../models/login-response.model';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBtzx1irO8TpZzKIxWVdQQgz8U6UXm8KL0',
  authDomain: 'iteriam-app.firebaseapp.com',
  databaseURL: 'https://iteriam-app-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'iteriam-app',
  storageBucket: 'iteriam-app.appspot.com',
  messagingSenderId: '480819739139',
  appId: '1:480819739139:web:b93362f18a955f963bac36',
  measurementId: 'G-W4ZPTLEVJ7'
};


@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService implements AuthApiInterface {

  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return defer(() => firebase.auth().signInWithEmailAndPassword(email, password)).pipe(
      exhaustMap((user) => (
        user.user.getIdToken().then((token) => ({
          email: user.user.email,
          token
        } as LoginResponse)))));
  }

  logout(user: User): Observable<boolean> {
    return defer(() => firebase.auth().signOut()).pipe(
      map(() => Boolean(true))
    );
  }
}
