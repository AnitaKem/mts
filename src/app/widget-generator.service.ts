import { Injectable } from '@angular/core';
import { Widget } from './_models/Widget';
import { Fixtures } from './fixtures';
import { Photo } from './_models/Photo';

@Injectable({
  providedIn: 'root'
})
export class WidgetGeneratorService {

  constructor() { }

  public createRandomWidget(): Widget{    
    return new Widget(
      {
        avatars: this.getImages(3),
        followers: this.getImages(this.getRandomNumber(5)),
        followersCount: this.getRandomNumber(1000),
        isFavourite: this.getRandomBoolean(),
        header: this.getRandomHeader(),
        creator: this.getRandomCreator()
      });
  }

  private getRandomNumber(count: number): number{
    return Math.floor(Math.random() * count);
  }

  private getRandomBoolean(): boolean{
    return Math.random() >= 0.5;
  }

  private getImages(count: number): Array<Photo>{
    let images = [];
    for(let i = 0; i < count; i++){      
      images.push(
        new Photo({ 
          url: Fixtures.imagesUrls[this.getRandomNumber(Fixtures.imagesUrls.length)],
          isRound: this.getRandomBoolean()
        }));
    }
    return images;
  }

  private getRandomHeader(): string{
    return Fixtures.headers[this.getRandomNumber(Fixtures.headers.length)];
  }

  private getRandomCreator(): string{
    return Fixtures.creators[this.getRandomNumber(Fixtures.creators.length)];
  }
}
