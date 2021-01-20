import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeRatesResponse } from './payloads/exchange-rates-response';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeRatesService {
  // Dependency Injection of 'HttpClient'
  constructor(private httpclient: HttpClient) { }

  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.httpclient.get<ExchangeRatesResponse>(`https://api.exchangeratesapi.io/latest?base=${base}`)
  }
}
