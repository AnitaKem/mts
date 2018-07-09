import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { ImageComponent } from './image/image.component';
import { WidgetGeneratorService } from './widget-generator.service';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WidgetGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
