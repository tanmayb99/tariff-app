import { Pipe, PipeTransform } from '@angular/core';
import { Tariff } from '../models/tariff.model';

@Pipe({
  name: 'sortTariff'
})
export class SortTariffPipe implements PipeTransform {
  transform(tariffs: Tariff[] | null, sortAttribute: keyof Tariff): Tariff[] {
    if (!tariffs) {
      return [];
    }

    return tariffs.sort((a, b) => {
      if (a[sortAttribute] < b[sortAttribute]) {
        return -1;
      } else if (a[sortAttribute] > b[sortAttribute]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
