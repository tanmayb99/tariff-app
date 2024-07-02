import { TariffService } from './tariff.service';
import { of, throwError } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';
import { MOCK_TARIFFS } from '../data/mock-data';

describe('TariffService', () => {
  let service: TariffService;

  beforeEach(() => {
    service = new TariffService();
  });

  describe('getTariffs', () => {
    it('should return tariffs', (done) => {
      // Given (setup)
      const expectedTariffs = MOCK_TARIFFS;

      // When (action)
      const observable = service.getTariffs();

      // Then (assertion)
      observable.subscribe((tariffs) => {
        expect(tariffs).toEqual(expectedTariffs);
        done();
      });
    });

    it('should simulate delay correctly', (done) => {
      // Given (setup)
      const startTime = performance.now();

      // When (action)
      const observable = service.getTariffs();

      // Then (assertion)
      observable.subscribe(() => {
        const endTime = performance.now();
        const elapsedTime = endTime - startTime;

        // Check if delay is approximately 1000ms (within a tolerance)
        expect(elapsedTime).toBeGreaterThanOrEqual(1000);
        done();
      });
    });

    it('should handle error from Observable', (done) => {
      // Given (setup)
      const error = new Error('Observable error');

      // Mocking the observable to throw an error
      jest.spyOn(service as any, 'getTariffs').mockReturnValueOnce(
        throwError(error)
      );

      // When (action)
      const observable = service.getTariffs();

      // Then (assertion)
      observable.pipe(
        catchError((err) => {
          expect(err).toBe(error);
          return of([]); // Return a default value or handle the error here
        })
      ).subscribe({
        next: () => {
          // This should not execute since there's an error
          fail('Expected error but received next value');
        },
        error: () => {
          // Error should be handled inside catchError
          done();
        }
      });
    });
  });
});
