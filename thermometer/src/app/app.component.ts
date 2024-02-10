import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThermometerComponent } from './components/thermometer/thermometer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThermometerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'thermometer';
}
