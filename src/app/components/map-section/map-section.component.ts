import {Component} from '@angular/core';

require('./map-section.component.scss');

@Component({
    selector: 'map-section',
    template: `
    <section class="screen-size second-section">
    <div class="row">
      <span class="left-side-content col-sm-6">
          <img src="../../assets/images/phone_1.png"
               alt="Phone 1"
               class="phone-img">
      </span>

      <span class="right-side-content col-sm-6">

        <div class="map-container">
          <img src="../../assets/icons/rich_icon_1@2x.png"
               alt="Map icon"
               class="map-img">

          <h4 class="map-description">
            Dein Zugang zu über <strong>10 000+</strong> Restaurants <br>
            und mehr als <strong>60</strong> verschiedenen Küchen
          </h4>
        </div>

      </span>

    </div>
    </section> <!-- SECOND SECTION -->
`
})
export class MapSectionComponent {

    constructor() {
    }
}
