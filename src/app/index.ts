import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {MainComponent} from "./components/main-component";
import {HeadSectionComponent} from "./components/header-section/header-section.component";

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeadSectionComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
