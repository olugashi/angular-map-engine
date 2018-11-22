import { TestBed } from '@angular/core/testing';

import { WebsocketServiceService } from './websocket-service.service';

describe('WebsocketServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebsocketServiceService = TestBed.get(WebsocketServiceService);
    expect(service).toBeTruthy();
  });
});
