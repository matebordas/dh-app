import {Component} from '@angular/core';

@Component({
    selector: 'order-section',
    template: `    
   <section class="screen-size section-content grey-background">
        <div class="row">
              
              <span class="col-sm-6">
                  <div class="image-container align-right">
                      <img src="../../assets/icons/rich_icon_4@2x.png"
                           alt="Order icon"
                           class="image-icon"
                           id="order-icon">
            
                      <h4 class="image-description"
                            data-aos="zoom-in-down"
                            data-aos-offset="50"
                            data-aos-anchor="#order-icon"
                            data-aos-easing="ease-in-cubic"
                            data-aos-duration="600">
                            
                        Ganz einfach vorherige <br>
                        <strong>Bestellungen wiederholen</strong>
                
                        </h4>
                    </div>
                    
              </span> <!-- left side -->
        
              <span class="col-sm-6">
                     <img src="../../assets/images/phone_4.png"
                       alt="Phone 1"
                       class="phone-image align-left"
                       id="order-phone-image">
              </span> <!-- rigth side -->
        
        </div> <!--row -->
    </section>
`
})
export class OrderSectionComponent {

}
