import { of } from 'rxjs';
import { TariffListComponent } from './tariff-list.component';
import { TariffService } from '../../services/tariff.service';
import { Tariff } from '../../models/tariff.model';

describe('TariffListComponent', () => {
  let component: TariffListComponent;
  let tariffServiceMock: jest.Mocked<TariffService>;

  beforeEach(() => {
    // Given:
    tariffServiceMock = {
      getTariffs: jest.fn(() => of([
        {
          id: 1,
          name: 'Tariff Name A',
          downloadSpeed: 12000000,
          uploadSpeed: 6000000,
          price: 123.45,
          benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3']
        }
      ]))
    } as unknown as jest.Mocked<TariffService>;

    // When
    component = new TariffListComponent(tariffServiceMock);
  });

  it('should create', () => {
    // Then
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should fetch tariffs on initialization', () => {
      // When
      component.ngOnInit();

      // Then
      expect(component.tariffs$).toBeDefined();
      component.tariffs$.subscribe((tariffs) => {
        expect(tariffs.length).toBe(1);
        expect(tariffs[0].name).toBe('Tariff Name A');
      });
    });
  });

  describe('setSortAttribute', () => {
    it('should set sortAttribute correctly', () => {
      // Given
      const attribute: keyof Tariff = 'name';

      // When
      component.setSortAttribute(attribute);

      // Then
      expect(component.sortAttribute).toEqual(attribute);
    });
  });
});
