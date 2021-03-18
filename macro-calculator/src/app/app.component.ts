import { Component } from '@angular/core';
import {
  Macros,
  MacroDataService,
} from './services/macro-data/macro-data.service';
import { calculateBmr } from './services/calculateMacros/basalMetabolicRate';
import { calculateMacroRatios } from './services/calculateMacros/macroRatios';
import {
  Biometrics,
  BiometricsService,
} from './services/biometrics/biometrics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'macro-calculator';
  macros = this.macroDataService.getMacros();
  biometrics = this.biometricsService.getBiometrics();
  macroCalculation = calculateMacroRatios({
    weight: this.biometricsService.weight,
    basalMetabolicRate: calculateBmr({
      ...this.macroDataService.getMacros(),
      ...this.biometricsService.getBiometrics(),
    }),
    activityLevel: this.macroDataService.activityLevel,
    ratios: {
      fat: this.macroDataService.fatRatio,
      protein: this.macroDataService.proteinRatio,
    },
  });

  updatesMacros(event: Macros) {
    this.macroDataService.setMacros(event);
    this.macros = this.macroDataService.getMacros();
    this.macroCalculation = this.handleMetricChange();
  }

  updatesBiometrics(event: Biometrics) {
    this.biometricsService.updateBiometrics(event);
    this.biometrics = this.biometricsService.getBiometrics();
    this.macroCalculation = this.handleMetricChange();
  }

  handleMetricChange() {
    return calculateMacroRatios({
      weight: this.biometricsService.weight,
      basalMetabolicRate: calculateBmr({
        ...this.macroDataService.getMacros(),
        ...this.biometricsService.getBiometrics(),
      }),
      activityLevel: this.macroDataService.activityLevel,
      ratios: {
        fat: this.macroDataService.fatRatio,
        protein: this.macroDataService.proteinRatio,
      },
    });
  }

  constructor(
    private macroDataService: MacroDataService,
    private biometricsService: BiometricsService
  ) {}
}
