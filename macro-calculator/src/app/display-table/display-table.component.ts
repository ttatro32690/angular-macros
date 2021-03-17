import { Component, Input, OnInit } from '@angular/core';
import { Biometrics, BiometricsService } from '../biometrics.service';
import { MacroDataService, Macros } from '../services/macro-data.service';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.scss'],
})
export class DisplayTableComponent implements OnInit {
  @Input() macros: Macros = this.macroDataService;
  @Input() biometrics: Biometrics = this.biometricsService;

  constructor(
    private macroDataService: MacroDataService,
    private biometricsService: BiometricsService
  ) {}

  ngOnInit(): void {}
}
