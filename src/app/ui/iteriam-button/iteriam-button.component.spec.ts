import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteriamButtonComponent } from './iteriam-button.component';

describe('IteriamButtonComponent', () => {
  let component: IteriamButtonComponent;
  let fixture: ComponentFixture<IteriamButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteriamButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteriamButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
