import { TariffItemComponent } from './tariff-item.component';
import { Tariff } from '../../models/tariff.model';

describe('TariffItemComponent', () => {
  let component: TariffItemComponent;

  beforeEach(() => {
    component = new TariffItemComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format speed correctly', () => {
    // Then
    expect(component.formatSpeed(1000000)).toBe('1.00');

    // Then
    expect(component.formatSpeed(1500000)).toBe('1.50');
  });
});
