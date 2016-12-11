import {Component, ViewChild, ElementRef} from '@angular/core';
import * as $ from 'jquery';

require('./footer-section.component.scss');

@Component({
    selector: 'footer-section',
    template: `
     <section class="screen-size section-content">

        <header>
              <h3>Was wird über die <strong>LieferHeld App</strong> gesagt</h3>
              
              <div class="carousel-wrapper">
                  
               </div>
               
                <div class="carousel-element">
                      <div><h3>1</h3></div>
                      <div><h3>2</h3></div>
                      <div><h3>3</h3></div>
                      <div><h3>4</h3></div>
                      <div><h3>5</h3></div>
                      <div><h3>6</h3></div>
               </div>
        </header>

        <main class="main-content">
       </main>
  </section> <!-- HEADER SECTION -->
`
})
export class FooterSectionComponent {

    constructor() { }

    ngOnInit() {
        $('.carousel-element').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

    }
}
