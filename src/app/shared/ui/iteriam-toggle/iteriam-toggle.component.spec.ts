import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteriamToggleComponent } from './iteriam-toggle.component';

describe('IteriamToggleComponent', () => {
  let component: IteriamToggleComponent;
  let fixture: ComponentFixture<IteriamToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteriamToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteriamToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
