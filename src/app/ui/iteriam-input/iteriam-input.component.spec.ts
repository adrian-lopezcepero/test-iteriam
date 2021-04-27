import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteriamInputComponent } from './iteriam-input.component';

describe('ItemiamInputComponent', () => {
  let component: IteriamInputComponent;
  let fixture: ComponentFixture<IteriamInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteriamInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteriamInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
