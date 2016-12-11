import {Component} from "@angular/core";
import * as $ from "jquery";

require('./footer-section.component.scss');

@Component({
    selector: 'footer-section',
    template: `
     <section class="screen-size section-content">

        <header>
            <h3>Was wird über die <strong>LieferHeld App</strong> gesagt</h3>
              
            <div class="carousel-element">
                <span *ngFor="let item of quotes; let i = index;">
                    <div class="name-text">{{item.user}}</div>
                    <div class="quote-text">{{item.quote}}</div>
                  </span>
            </div>
            
            <div class="download-app-wrapper">
                  <button class="btn btn-default download-app-btn">HOL DIR DIE APP</button>
            </div>
        </header>

        <div class="footer-content">
       </div>
  </section> <!-- HEADER SECTION -->
`
})
export class FooterSectionComponent {

    private quotes = [
        {
            user: "Claire C",
            quote: "Quick and easy, fantastic! I can order food on the go when I've left work!!"
        },
        {
            user: "Alonso C",
            quote: "Brilliant, quick and easy! Downloaded, chose my food and paid all in 5 minutes!"
        },
        {
            user: "Magedelna S",
            quote: "I love Liferheld, great idea. Fast and good quality service. Love the app too."
        },
        {
            user: "Claire C",
            quote: "Quick and easy, fantastic! I can order food on the go when I've left work!!"
        },
        {
            user: "Alonso C",
            quote: "Brilliant, quick and easy! Downloaded, chose my food and paid all in 5 minutes!"
        },
        {
            user: "Magedelna S",
            quote: "I love Liferheld, great idea. Fast and good quality service. Love the app too."
        }
    ];

    constructor() { }

    ngAfterViewInit() {

        $('.carousel-element').slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: "<span class='glyphicon glyphicon-chevron-left left-arrow'></span>",
            nextArrow: "<span class='glyphicon glyphicon-chevron-right right-arrow'></span>",
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
