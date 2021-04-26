import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-itemiam-input',
  templateUrl: './itemiam-input.component.html',
  styleUrls: ['./itemiam-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemiamInputComponent implements OnInit {

  @Input()
  label = '';
  @Input()
  inputType = 'text';
  @Input()
  control: FormControl | null = null;
  @Input()
  icon: string | null = null;
  @Input()
  className: string | null;

  constructor() { }

  ngOnInit(): void {
  }

}
