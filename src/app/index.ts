import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {MainComponent} from "./components/main-component";

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    MainComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
