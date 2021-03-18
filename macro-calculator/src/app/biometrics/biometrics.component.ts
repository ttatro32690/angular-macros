import { EventEmitter, Output, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Biometrics, BiometricsService } from '../services/biometrics/biometrics.service';

@Component({
  selector: 'app-biometrics',
  templateUrl: './biometrics.component.html',
  styleUrls: ['./biometrics.component.scss'],
})
export class BiometricsComponent implements OnInit {
  @Output() updatesBiometrics = new EventEmitter<Biometrics>();
  biometricsForm = this.formBuilder.group({ ...this.biometricsService });

  constructor(
    private formBuilder: FormBuilder,
    private biometricsService: BiometricsService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { controls } = this.biometricsForm;
    const biometrics = {
      age: controls.age.value,
      height: controls.height.value,
      weight: controls.weight.value,
      gender: controls.gender.value,
    };

    this.biometricsService.updateBiometrics(biometrics);
    this.updatesBiometrics.emit(biometrics);
  }
}
