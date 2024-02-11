import { Component } from '@angular/core';

@Component({
    selector: 'app-thermometer',
    standalone: true,
    imports: [],
    templateUrl: './thermometer.component.html',
    styleUrl: './thermometer.component.css',
})
export class ThermometerComponent {
    minTemp: number = 10;
    maxTemp: number = 2000;
    currentTemp: number = 2000;

    getAngle(): number {
        let minAngle: number = -222;
        let maxAngle: number = 41;

        let angle =
            minAngle +
            (maxAngle - minAngle) *
                ((this.currentTemp - this.minTemp) /
                    (this.maxTemp - this.minTemp));

        return angle;
    }
}
