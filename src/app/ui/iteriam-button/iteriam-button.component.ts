import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-iteriam-button',
  templateUrl: './iteriam-button.component.html',
  styleUrls: ['./iteriam-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IteriamButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
