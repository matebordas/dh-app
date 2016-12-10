import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {MainComponent} from "./components/main-component";
import {HeadSectionComponent} from "./components/header-section/header-section.component";
import {MapSectionComponent} from "./components/map-section/map-section.component";

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeadSectionComponent,
    MapSectionComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
