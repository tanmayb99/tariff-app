import { SortTariffPipe } from './sort-tariff.pipe';
import { Tariff } from '../models/tariff.model';

describe('SortTariffPipe', () => {
  let pipe: SortTariffPipe;
  let tariffs: Tariff[];

  beforeEach(() => {
    pipe = new SortTariffPipe();
    tariffs = [
      {
        id: 3,
        name: 'Tariff Name C',
        downloadSpeed: 8000000,
        uploadSpeed: 4000000,
        price: 300.00,
        benefits: ['Tariff Benefit 7', 'Tariff Benefit 8', 'Tariff Benefit 9']
      },
      {
        id: 1,
        name: 'Tariff Name A',
        downloadSpeed: 12000000,
        uploadSpeed: 6000000,
        price: 123.45,
        benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3']
      },
      {
        id: 2,
        name: 'Tariff Name B',
        downloadSpeed: 10000000,
        uploadSpeed: 5000000,
        price: 200.00,
        benefits: ['Tariff Benefit 4', 'Tariff Benefit 5', 'Tariff Benefit 6']
      }
    ];
  });

  it('should return an empty array if tariffs is null', () => {
    // Given
    const nullTariffs = null;

    // When
    const result = pipe.transform(nullTariffs, 'price');

    // Then
    expect(result).toEqual([]);
  });

  it('should sort tariffs by id in ascending order', () => {
    // Given
    const sortAttribute = 'id';

    // When
    const result = pipe.transform(tariffs, sortAttribute);

    // Then
    expect(result).toEqual([
      {
        id: 1,
        name: 'Tariff Name A',
        downloadSpeed: 12000000,
        uploadSpeed: 6000000,
        price: 123.45,
        benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3']
      },
      {
        id: 2,
        name: 'Tariff Name B',
        downloadSpeed: 10000000,
        uploadSpeed: 5000000,
        price: 200.00,
        benefits: ['Tariff Benefit 4', 'Tariff Benefit 5', 'Tariff Benefit 6']
      },
      {
        id: 3,
        name: 'Tariff Name C',
        downloadSpeed: 8000000,
        uploadSpeed: 4000000,
        price: 300.00,
        benefits: ['Tariff Benefit 7', 'Tariff Benefit 8', 'Tariff Benefit 9']
      }
    ]);
  });

  it('should sort tariffs by name in ascending order', () => {
    // Given
    const sortAttribute = 'name';

    // When
    const result = pipe.transform(tariffs, sortAttribute);

    // Then
    expect(result).toEqual([
      {
        id: 1,
        name: 'Tariff Name A',
        downloadSpeed: 12000000,
        uploadSpeed: 6000000,
        price: 123.45,
        benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3']
      },
      {
        id: 2,
        name: 'Tariff Name B',
        downloadSpeed: 10000000,
        uploadSpeed: 5000000,
        price: 200.00,
        benefits: ['Tariff Benefit 4', 'Tariff Benefit 5', 'Tariff Benefit 6']
      },
      {
        id: 3,
        name: 'Tariff Name C',
        downloadSpeed: 8000000,
        uploadSpeed: 4000000,
        price: 300.00,
        benefits: ['Tariff Benefit 7', 'Tariff Benefit 8', 'Tariff Benefit 9']
      }
    ]);
  });

  it('should sort tariffs by downloadSpeed in ascending order', () => {
    // Given
    const sortAttribute = 'downloadSpeed';

    // When
    const result = pipe.transform(tariffs, sortAttribute);

    // Then
    expect(result).toEqual([
      {
        id: 3,
        name: 'Tariff Name C',
        downloadSpeed: 8000000,
        uploadSpeed: 4000000,
        price: 300.00,
        benefits: ['Tariff Benefit 7', 'Tariff Benefit 8', 'Tariff Benefit 9']
      },
      {
        id: 2,
        name: 'Tariff Name B',
        downloadSpeed: 10000000,
        uploadSpeed: 5000000,
        price: 200.00,
        benefits: ['Tariff Benefit 4', 'Tariff Benefit 5', 'Tariff Benefit 6']
      },
      {
        id: 1,
        name: 'Tariff Name A',
        downloadSpeed: 12000000,
        uploadSpeed: 6000000,
        price: 123.45,
        benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3']
      }
    ]);
  });

  it('should return the same array if all values for sortAttribute are equal', () => {
    // Given
    const equalTariffs: Tariff[] = [
      {
        id: 1,
        name: 'Tariff Name A',
        downloadSpeed: 12000000,
        uploadSpeed: 6000000,
        price: 123.45,
        benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3']
      },
      {
        id: 2,
        name: 'Tariff Name B',
        downloadSpeed: 12000000,
        uploadSpeed: 6000000,
        price: 123.45,
        benefits: ['Tariff Benefit 4', 'Tariff Benefit 5', 'Tariff Benefit 6']
      },
      {
        id: 3,
        name: 'Tariff Name C',
        downloadSpeed: 12000000,
        uploadSpeed: 6000000,
        price: 123.45,
        benefits: ['Tariff Benefit 7', 'Tariff Benefit 8', 'Tariff Benefit 9']
      }
    ];
    const sortAttribute = 'price';

    // When
    const result = pipe.transform(equalTariffs, sortAttribute);

    // Then
    expect(result).toEqual(equalTariffs);
  });
});
