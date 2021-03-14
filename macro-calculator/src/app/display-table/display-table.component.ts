import { Component, Input, OnInit } from '@angular/core';
import {MacroDataService, Macros} from '../services/macro-data.service'

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.scss'],
})
export class DisplayTableComponent implements OnInit {

  @Input() macros: Macros = this.macroDataService;
  

  constructor(private macroDataService: MacroDataService) {}  

  ngOnInit(): void {}
}
