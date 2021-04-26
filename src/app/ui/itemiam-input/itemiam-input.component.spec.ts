import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemiamInputComponent } from './itemiam-input.component';

describe('ItemiamInputComponent', () => {
  let component: ItemiamInputComponent;
  let fixture: ComponentFixture<ItemiamInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemiamInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemiamInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
