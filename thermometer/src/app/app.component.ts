import { Component } from '@angular/core';
import { ThermometerComponent } from './components/thermometer/thermometer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ThermometerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'thermometer';
}
