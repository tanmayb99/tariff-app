import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MOCK_TARIFFS } from '../data/mock-data';
import { Tariff } from '../models/tariff.model';

@Injectable({
  providedIn: 'root'
})
export class TariffService {
  getTariffs(): Observable<Tariff[]> {
    return of(MOCK_TARIFFS).pipe(delay(1000)); // Simulate an API call with a delay
  }
}
