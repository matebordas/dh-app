import {Component} from '@angular/core';

require('./main-component.scss');

@Component({
  selector: 'main-component',
  template: require('./main-component.html')
})
export class MainComponent {

  constructor() {
  }
}
