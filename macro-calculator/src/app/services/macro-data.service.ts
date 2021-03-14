import { Injectable } from '@angular/core';
import { Gender } from '../__types__';

export enum ActivityLevel {
  LOW,
  LIGHT,
  MODERATE,
  HEAVY,
  EXTRA,
}

export interface Macros {
  gender: Gender;
  age: number;
  height: number;
  weight: number;
  activityLevel: ActivityLevel;
  fatRatio: number;
  proteinRatio: number;
}

@Injectable({
  providedIn: 'root',
})
export class MacroDataService {
  gender = Gender.FEMALE;
  age = 0;
  height = 70;
  weight = 115;
  activityLevel = ActivityLevel.LOW;
  fatRatio = 1.0;
  proteinRatio = 1.0;

  setGender(gender: Gender) {
    this.gender = gender;
  }

  setAge(age: number) {
    this.age = age;
  }

  setHeight(height: number) {
    this.height = height;
  }

  setWeight(weight: number) {
    this.weight = weight;
  }

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
    gender,
    age,
    height,
    weight,
    activityLevel,
    fatRatio,
    proteinRatio,
  }: Macros) {
    this.setGender(gender);
    this.setAge(age);
    this.setHeight(height);
    this.setWeight(weight);
    this.setActivityLevel(activityLevel);
    this.setFatRatio(fatRatio);
    this.setProteinRatio(proteinRatio);
  }

  getMacros(): Macros {
    return {
      gender: this.gender,
      age: this.age,
      height: this.height,
      weight: this.weight,
      activityLevel: this.activityLevel,
      fatRatio: this.fatRatio,
      proteinRatio: this.proteinRatio,
    };
  }
}
