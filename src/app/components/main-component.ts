import {Component} from '@angular/core';

require('./main-component.scss');
require('./section-content.scss');

@Component({
  selector: 'main-component',
  template: `
    <div id="content-wrapper">
   
    <head-section></head-section>
    
    <map-section></map-section>
    <restaurant-section></restaurant-section>
    <live-updates></live-updates>
    <order-section></order-section>
    
    <footer-section></footer-section>
    
</div>
`
})
export class MainComponent {

  constructor() {
  }
}
