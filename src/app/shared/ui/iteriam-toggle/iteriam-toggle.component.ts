import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CheckboxControlValueAccessor, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-iteriam-toggle',
  templateUrl: './iteriam-toggle.component.html',
  styleUrls: ['./iteriam-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: IteriamToggleComponent,
    }]
})
export class IteriamToggleComponent extends CheckboxControlValueAccessor {

  @Input() label = '';

}
