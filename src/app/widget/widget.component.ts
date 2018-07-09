import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../_models/Widget';


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  @Input() widget: Widget;

  constructor() { }

  ngOnInit() {
  }

}
