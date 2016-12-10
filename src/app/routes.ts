/// <reference path="../../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./components/main-component";

@Component({
  selector: 'root-component',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

export const routing = RouterModule.forRoot(routes);
