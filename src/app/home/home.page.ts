import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/data-access-auth/service/auth.service';
import { untilDestroyed } from '../shared/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {

  user$ = this.authService.user;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnDestroy(): void { }

  logout() {
    this.authService.logout();
    this.authService.logged$.pipe(
      untilDestroyed(this)
    ).subscribe(
      () => {
        this.router.navigateByUrl('/login', {
          replaceUrl: true
        });
      }
    );
  }

}
