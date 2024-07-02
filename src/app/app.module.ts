import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TariffListComponent } from './components/tariff-list/tariff-list.component';
import { TariffItemComponent } from './components/tariff-item/tariff-item.component';
import { TariffService } from './services/tariff.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SortTariffPipe } from './pipes/sort-tariff.pipe';

@NgModule({
  declarations: [
    TariffListComponent,
    TariffItemComponent,
    SortTariffPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  exports: [
    TariffListComponent,
    TariffItemComponent,
    SortTariffPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TariffService],
})
export class AppModule { }
