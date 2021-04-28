import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-iteriam-input',
  templateUrl: './iteriam-input.component.html',
  styleUrls: ['./iteriam-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IteriamInputComponent implements OnInit {

  @Input()
  label = '';
  @Input()
  inputType = 'text';
  @Input()
  control: FormControl | null = null;
  @Input()
  icon: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
