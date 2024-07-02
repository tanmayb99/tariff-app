import { Component, Input } from '@angular/core';
import { Tariff } from '../../models/tariff.model';

@Component({
  selector: 'app-tariff-item',
  templateUrl: './tariff-item.component.html',
  styleUrls: ['./tariff-item.component.scss']
})
export class TariffItemComponent {
  @Input() tariff!: Tariff;

  formatSpeed(speed: number): string {
    return (speed / 1000000).toFixed(2);
  }
}
