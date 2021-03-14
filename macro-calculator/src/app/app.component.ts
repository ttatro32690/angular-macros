import { Component } from '@angular/core';
import { Macros, MacroDataService } from './services/macro-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'macro-calculator';
  macros = this.macroDataService.getMacros();

  updatesMacros(event: any) {
    this.macros = event;
  }

  constructor(private macroDataService: MacroDataService) {}
}
