import { TestBed } from '@angular/core/testing';

import { ActionCardFormService } from './action-card-form.service';

describe('ActionCardFormService', () => {
  let service: ActionCardFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionCardFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
