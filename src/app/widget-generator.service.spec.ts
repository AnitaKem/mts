import { TestBed, inject } from '@angular/core/testing';

import { WidgetGeneratorService } from './widget-generator.service';

describe('WidgetGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetGeneratorService]
    });
  });

  it('should be created', inject([WidgetGeneratorService], (service: WidgetGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
