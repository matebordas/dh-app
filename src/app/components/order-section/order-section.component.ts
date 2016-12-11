import {Component} from '@angular/core';

@Component({
    selector: 'order-section',
    template: `    
   <section class="screen-size section-content grey-background">
        <div class="row">
              
              <span class="col-sm-6">
                  <div class="image-container align-right">
                      <img src="../../assets/icons/rich_icon_4@2x.png"
                           alt="Map icon"
                           class="image-icon">
            
                      <h4 class="image-description">
                        Ganz einfach vorherige <br>
                        <strong>Bestellungen wiederholen</strong>
                
                        </h4>
                    </div>
                    
              </span> <!-- left side -->
        
              <span class="col-sm-6">
                     <img src="../../assets/images/phone_4.png"
                       alt="Phone 1"
                       class="phone-image align-left">
              </span> <!-- rigth side -->
        
        </div> <!--row -->
    </section>
`
})
export class OrderSectionComponent {

}
