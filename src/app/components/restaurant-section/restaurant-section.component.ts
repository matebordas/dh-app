import {Component} from '@angular/core';

@Component({
    selector: 'restaurant-section',
    template: `
    <section class="screen-size section-content grey-background">
    
    <main>
        <div class="row">
              
              <span class="col-sm-6">
                  <div class="image-container align-right">
                      <img src="../../assets/icons/rich_icon_2@2x.png"
                           alt="Map icon"
                           class="image-icon">
            
                      <h4 class="image-description">
                        Dein Zugang zu über <strong>10 000+</strong> Restaurants <br>
                        und mehr als <strong>60</strong> verschiedenen Küchen
                      </h4>
                    </div>
                    
              </span> <!-- left side -->
        
              <span class="col-sm-6">
                     <img src="../../assets/images/phone_2.png"
                       alt="Phone 1"
                       class="phone-image align-left">
              </span> <!-- rigth side -->
        
        </div> <!--row -->
    </main>
        
    </section>
`
})
export class RestaurantSectionComponent {

}
