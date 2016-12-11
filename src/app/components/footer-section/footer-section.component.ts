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
        
            <nav class="navigation">
                <ul class="nav nav-pills">
                  <li role="presentation"><a>Über uns</a></li>
                  <li role="presentation"><a>Kontakt</a></li>
                  <li role="presentation"><a>AGB</a></li>
                  <li role="presentation"><a>Datenshutz</a></li>
                  <li role="presentation"><a>Presse</a></li>
                  <li role="presentation"><a>Jobs</a></li>
                  <li role="presentation"><a>Affiliate Programm</a></li>
                  <li role="presentation"><a>Sitemap</a></li>
                  
                   <li role="presentation">
                      <a><i class="fa fa-facebook" aria-hidden="true"></i></a>
                  </li>
                  
                  <li role="presentation">
                      <a><i class="fa fa-twitter" aria-hidden="true"></i></a>
                  </li> 
                  
                </ul>
            </nav>
        
            <div class="links-section row">
                      <div class="col-md-4 link-wrapper" *ngFor="let linkItem of links; let i = index;">
                            <div class="link-title">{{linkItem.title}}</div>
                            
                            <div class="link-group">
                                <a *ngFor="let link of linkItem.content; let j = index; let last = last">
                                    {{link}} {{!last? ', ': ' '}}
                                </a>
                            </div>
                      </div> <!-- column-->
           
            </div> <!-- links-->
       </div> <!-- footer -->
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

    private links = [
        {
            title: "Beliebeste Städte",
            content: [
                "Lieferservice Berlin", "Lieferservice Hamburg", "Lieferservice Frankfurt", "Lieferservice Nürnberg",
                "Lieferservice Cottbus", "Lieferservice Dresden", "Lieferservice Bochum", "Lieferservice Magdeburg"
            ]
        },
        {
            title: "Lieferservices bei Dir",
            content: [
                "Lieferservice Berlin", "Lieferservice Hamburg", "Lieferservice Frankfurt", "Lieferservice Nürnberg",
                "Lieferservice Cottbus", "Lieferservice Dresden", "Lieferservice Bochum", "Lieferservice Magdeburg"
            ]
        },
        {
            title: "Essen bestellen",
            content: [
                "Essen bestellen Berlin", "Essen bestellen Hamburg", "Essen bestellen Frankfurt", "Essen bestellen Nürnberg",
                "Essen bestellen Cottbus", "Essen bestellen Dresden", "Essen bestellen Bochum", "Essen bestellen Magdeburg"
            ]
        },
        {
            title: "Top Restaurants",
            content: [
                "Restaurant Berlin", "Restaurant Hamburg", "Restaurant Frankfurt", "Restaurant Nürnberg",
                "Restaurant Cottbus", "Restaurant Dresden", "Restaurant Bochum", "Restaurant Magdeburg"
            ]
        },
        {
            title: "Top Services",
            content:  [
                    "Essen online bestellen", "Pizza bestellen", "Asia bestellen", "Berlin Pizza",
                    "Dean and David", "Dean and David  München", "Online bestellen"
                ]
        },
        {
            title: "Unsere Empfehlugen",
            content:  [
                    "Leitfaden Restaurantgründung"
                ]
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
