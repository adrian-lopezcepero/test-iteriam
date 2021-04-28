import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-iteriam-toggle',
  templateUrl: './iteriam-toggle.component.html',
  styleUrls: ['./iteriam-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IteriamToggleComponent implements OnInit {

  @Input() label = '';

  @Input()
  control: FormControl | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
