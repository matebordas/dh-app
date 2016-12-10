import {Component} from '@angular/core';

//require('./map-section.component.scss');

@Component({
    selector: 'map-section',
    template: `
    <section class="screen-size section-content">
    <div class="row">
      
      <span class="col-sm-6">
          <img src="../../assets/images/phone_1.png"
               alt="Phone 1"
               class="phone-image align-right">
      </span> <!--left -->

      <span class=" col-sm-6">
      
        <div class="image-container align-left">
              <img src="../../assets/icons/rich_icon_1@2x.png"
                   alt="Map icon"
                   class="image-icon">
    
              <h4 class="image-description">
                Dein Zugang zu über <strong>10 000+</strong> Restaurants <br>
                und mehr als <strong>60</strong> verschiedenen Küchen
              </h4>
        </div>
      </span> <!--right -->

    </div> <!--row-->
    </section> <!-- SECOND SECTION -->
`
})
export class MapSectionComponent {

    constructor() {
    }
}
