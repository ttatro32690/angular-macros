import { Component } from '@angular/core';
import { Macros, MacroDataService } from './services/macro-data.service';
import { calculateBmr } from './services/calculateMacros/basalMetabolicRate';
import { calculateMacroRatios } from './services/calculateMacros/macroRatios';
import { Biometrics, BiometricsService } from './biometrics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'macro-calculator';
  macros = this.macroDataService.getMacros();
  biometrics = this.biometricsService.getBiometrics();

  updatesMacros(event: Macros) {
    this.macros = event;
    this.handleMetricChange();
  }

  updatesBiometrics(event: Biometrics) {
    this.biometrics = event;
    this.handleMetricChange();
  }

  handleMetricChange() {
    const bmrCalculation = calculateBmr({
      ...this.macros,
      ...this.biometricsService,
    });
    const macroCalculation = calculateMacroRatios({
      weight: this.biometricsService.weight,
      basalMetabolicRate: bmrCalculation,
      activityLevel: this.macros.activityLevel,
      ratios: {
        fat: this.macros.fatRatio,
        protein: this.macros.proteinRatio,
      },
    });

    console.log(macroCalculation);
  }

  constructor(
    private macroDataService: MacroDataService,
    private biometricsService: BiometricsService
  ) {}
}
