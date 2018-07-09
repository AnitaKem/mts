import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../_models/Photo';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() isSmall: boolean = false;
  @Input() image: Photo;

  ngOnInit() {
  }

}
