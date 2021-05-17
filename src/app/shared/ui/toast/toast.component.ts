import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent implements OnInit {

  @Input() errors: string[];

  private hide = false;

  constructor() { }

  ngOnInit(): void { }

  close(): void {
    this.errors = [];
  }

}
