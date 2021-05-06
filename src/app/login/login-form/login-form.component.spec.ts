import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateFakeLoader
        }
      }),
      ],
      providers: [FormBuilder,]
    });

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
  });

  it('should render loading animation button', () => {
    component.loading = true;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.animate-pulse'));
    const el: HTMLElement = de.nativeElement;

    expect(el).not.toBeNull();
  });

  it('should show red border on password invalid', () => {
    component.passwordValid = false;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('#password'));

    expect(de.classes.invalid).toBeTruthy();
  });

  it('should show red border on email invalid', () => {
    component.emailValid = false;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('#email'));

    expect(de.classes.invalid).toBeTruthy();
  });

  it('should send form', async () => {
    const email = 'test@email.com';
    fixture.debugElement.query(By.css('#email')).nativeElement.value = email;
    const password = '123456';
    fixture.debugElement.query(By.css('#password')).nativeElement.value = password;

    let formEmmittled = null;
    component.login.subscribe((value) => formEmmittled = value);


    const de = fixture.debugElement.query(By.css('button'));
    de.triggerEventHandler('click', null);

    fixture.whenStable().then(() => {
      expect(formEmmittled.email).toBe(email);
      expect(formEmmittled.password).toBe(password);
    });
  });

});
