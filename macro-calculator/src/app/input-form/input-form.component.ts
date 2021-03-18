import { EventEmitter, Output, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MacroDataService, Macros } from '../services/macro-data/macro-data.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {
  @Output() updatesMacros = new EventEmitter<Macros>();
  calculatorForm = this.formBuilder.group({ ...this.macroDataService });

  constructor(
    private formBuilder: FormBuilder,
    private macroDataService: MacroDataService,
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { controls } = this.calculatorForm;
    const macros = {
      proteinRatio: controls.proteinRatio.value,
      fatRatio: controls.fatRatio.value,
      activityLevel: controls.activityLevel.value,
    };

    this.macroDataService.setMacros(macros);
    this.updatesMacros.emit(macros);
  }
}
