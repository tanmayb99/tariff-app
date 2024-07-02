import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tariff } from '../../models/tariff.model';
import { TariffService } from '../../services/tariff.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss']
})
export class TariffListComponent implements OnInit {
  tariffs$: Observable<Tariff[]>;
  sortAttribute: keyof Tariff = 'price';

  constructor(private tariffService: TariffService) { }

  ngOnInit(): void {
    this.tariffs$ = this.tariffService.getTariffs();
  }

  setSortAttribute(attribute: keyof Tariff): void {
    this.sortAttribute = attribute;
  }
}
