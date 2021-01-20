import { TestBed } from '@angular/core/testing';

import { CurrencyExchangeRatesService } from './exchange-rates.service';

describe('ExchangeRatesService', () => {
  let service: CurrencyExchangeRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyExchangeRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
