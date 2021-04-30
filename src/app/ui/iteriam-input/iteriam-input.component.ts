import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-iteriam-input',
  templateUrl: './iteriam-input.component.html',
  styleUrls: ['./iteriam-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IteriamInputComponent {

  @Input()
  placeholder = '';
  @Input()
  inputType = 'text';
  @Input()
  icon: string | null = null;
  @Input() control: FormControl | null = null;
  @Input() isValid = true;

  maxLength: number;
  minLength: number;


}
