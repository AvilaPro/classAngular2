import { TestBed } from '@angular/core/testing';

import { ErrorRequestInterceptor } from './error-request.interceptor';

describe('ErrorRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorRequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorRequestInterceptor = TestBed.inject(ErrorRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
