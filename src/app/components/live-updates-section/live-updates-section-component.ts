import {Component} from '@angular/core';

@Component({
    selector: 'live-updates',
    template: `
   <section class="screen-size section-content">
    <div class="row">
      
      <span class="col-sm-6">
          <img src="../../assets/images/phone_3.png"
               alt="Phone 1"
               class="phone-image align-right">
      </span> <!--left -->

      <span class=" col-sm-6">
      
        <div class="image-container align-left">
              <img src="../../assets/icons/rich_icon_3@2x.png"
                   alt="Updates icon"
                   class="image-icon"
                   id="updates-icon">
    
              <h4 class="image-description"
                    data-aos="updates-anim"
                    data-aos-offset="75"
                    data-aos-anchor="#updates-icon"
                    data-aos-easing="ease-in"
                    data-aos-duration="600">
                <strong>Live Updates</strong> zu Bestellungen
              </h4>
        </div>
      </span> <!--right -->

    </div> <!--row-->
    </section>
`
})
export class LiveUpdatesSectionComponent {

}
