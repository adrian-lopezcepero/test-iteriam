import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade } from '../shared/data-access-auth/+state/auth.facade';
import { AuthService } from '../shared/data-access-auth/service/auth.service';
import { untilDestroyed } from '../shared/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {

  user$ = this.authFacade.user$;

  constructor(private authFacade: AuthFacade) { }

  ngOnDestroy(): void { }

  logout() {
    this.authFacade.logOut();
  }

}
