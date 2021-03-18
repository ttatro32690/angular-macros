import { Component, Input, OnInit } from '@angular/core';
import {
  Biometrics,
  BiometricsService,
} from '../services/biometrics/biometrics.service';
import {
  MacroDataService,
  Macros,
} from '../services/macro-data/macro-data.service';
import { AllMacroValues } from '../services/calculateMacros/macroRatios';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.scss'],
})
export class DisplayTableComponent implements OnInit {
  @Input() macros: Macros = this.macroDataService;
  @Input() biometrics: Biometrics = this.biometricsService;
  @Input() macroCalculation: AllMacroValues = {
    protein: {
      grams: 0,
      calories: 0,
    },
    fat: {
      grams: 0,
      calories: 0,
    },
    carb: {
      grams: 0,
      calories: 0,
    },
  };

  constructor(
    private macroDataService: MacroDataService,
    private biometricsService: BiometricsService,
  ) {}

  ngOnInit(): void {}
}
