import { Component } from '@angular/core';
import { Widget } from './_models/Widget';
import { WidgetGeneratorService } from './widget-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  widgets: Array<Widget> = [];

  constructor(private widgetGeneratorService: WidgetGeneratorService){}

  createNewWidget():void{
    this.widgets.push(this.widgetGeneratorService.createRandomWidget());
  }
}
