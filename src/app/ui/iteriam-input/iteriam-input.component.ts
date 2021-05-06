import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-iteriam-input',
  templateUrl: './iteriam-input.component.html',
  styleUrls: ['./iteriam-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IteriamInputComponent {
  @Input() placeholder = '';
  @Input() inputType = 'text';
  @Input() icon: string | null = null;
  @Input() control: FormControl | null = null;
  @Input() isValid = true;

}
