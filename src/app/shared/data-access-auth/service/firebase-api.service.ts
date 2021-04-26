import { Injectable } from '@angular/core';
import { defer, from, Observable } from 'rxjs';
import { User } from '../../util';
import { AuthApiInterface } from './auth-api.interface';
import { map, tap } from 'rxjs/operators';

import firebase from 'firebase/app';
// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

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

  login(email: string, password: string): Observable<User> {
    return defer(() => firebase.auth().signInWithEmailAndPassword(email, password)).pipe(
      map((user: firebase.auth.UserCredential) => ({ email: user.user.email, password: '' } as User))
    );
  }

  logout(user: User): Observable<boolean> {
    return defer(() => firebase.auth().signOut()).pipe(
      map(() => Boolean(true))
    );
  }
}
