import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {MainComponent} from "./components/main-component";
import {HeadSectionComponent} from "./components/header-section/header-section.component";
import {MapSectionComponent} from "./components/map-section/map-section.component";
import {RestaurantSectionComponent} from "./components/restaurant-section/restaurant-section.component";
import {LiveUpdatesSectionComponent} from "./components/live-updates-section/live-updates-section-component";
import {OrderSectionComponent} from "./components/order-section/order-section.component";
import {FooterSectionComponent} from "./components/footer-section/footer-section.component";

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeadSectionComponent,
    MapSectionComponent,
    RestaurantSectionComponent,
    LiveUpdatesSectionComponent,
    OrderSectionComponent,
    FooterSectionComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
