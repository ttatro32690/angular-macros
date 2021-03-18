import { Injectable } from '@angular/core';
import { Gender } from '../../__types__';

export enum ActivityLevel {
  LOW,
  LIGHT,
  MODERATE,
  HEAVY,
  EXTRA,
}

export interface Macros {
  activityLevel: ActivityLevel;
  fatRatio: number;
  proteinRatio: number;
}

@Injectable({
  providedIn: 'root',
})
export class MacroDataService {
  activityLevel = ActivityLevel.LOW;
  fatRatio = 1.0;
  proteinRatio = 1.0;

  setActivityLevel(activityLevel: ActivityLevel) {
    this.activityLevel = activityLevel;
  }

  setFatRatio(fatRatio: number) {
    this.fatRatio = fatRatio;
  }

  setProteinRatio(proteinRatio: number) {
    this.proteinRatio = proteinRatio;
  }

  setMacros({
    activityLevel,
    fatRatio,
    proteinRatio,
  }: Macros) {
    this.setActivityLevel(activityLevel);
    this.setFatRatio(fatRatio);
    this.setProteinRatio(proteinRatio);
  }

  getMacros(): Macros {
    return {
      activityLevel: this.activityLevel,
      fatRatio: this.fatRatio,
      proteinRatio: this.proteinRatio,
    };
  }
}
