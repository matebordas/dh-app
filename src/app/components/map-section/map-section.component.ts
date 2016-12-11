import {Component} from '@angular/core';

@Component({
    selector: 'map-section',
    template: `
    <section class="screen-size container-fluid">
    <div class="row">
      
      <span class="col-sm-6">
          <img src="../../assets/images/phone_1.png"
               alt="Phone 1"
               class="phone-image align-right">
      </span> <!--left -->

      <span class="col-sm-6">
      
        <div class="image-container align-left" id="map-image-container">
              <img src="../../assets/icons/rich_icon_1@2x.png"
                   alt="Map icon"
                   class="image-icon"
                   id="map-image">
    
              <h4 class="image-description"
                    data-aos="zoom-in-left"
                    data-aos-offset="50"
                    data-aos-anchor="#map-image"
                    data-aos-easing="ease-in"
                    data-aos-duration="600">
                    
                Dein Zugang zu über <strong>10 000+</strong> Restaurants <br>
                und mehr als <strong>60</strong> verschiedenen Küchen
              </h4>
        </div>
      </span> <!--right -->

    </div> <!--row-->
    </section>
`
})
export class MapSectionComponent {

}
