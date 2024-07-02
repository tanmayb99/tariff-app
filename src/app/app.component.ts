import { Component } from '@angular/core';
import { AppModule } from "./app.module";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [AppModule]
})
export class AppComponent {
  title = 'tariff-list-app';
}
