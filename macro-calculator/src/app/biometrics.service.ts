import { Injectable } from '@angular/core';
import { Gender } from './__types__';

export interface Biometrics {
  gender: Gender;
  age: number;
  height: number;
  weight: number;
}

@Injectable({
  providedIn: 'root',
})
export class BiometricsService {
  gender = Gender.FEMALE;
  age = 0;
  height = 70;
  weight = 115;

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

  updateBiometrics({ gender, age, height, weight }: Biometrics) {
    this.setGender(gender);
    this.setAge(age);
    this.setHeight(height);
    this.setWeight(weight);
  }

  getBiometrics(): Biometrics {
    return {
      gender: this.gender,
      age: this.age,
      height: this.height,
      weight: this.weight,
    };
  }

  constructor() {}
}
