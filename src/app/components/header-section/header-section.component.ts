import {Component} from '@angular/core';

require('./header-section.component.scss');

@Component({
    selector: 'head-section',
    template: `
     <section class="screen-size header-section">

        <main>
    
          <div class="title-container">
            <h3 class="secondary-title">Die Liferheld App</h3>
            <h1 class="main-title">Lecker liefern lassen</h1>
          </div>
    
       </main>

    <footer class="head-footer row">
    
          <span class="left-side col-sm-6">
            Bestelle dein Lieblingsessen <br>
            mit <strong>Android</strong> oder  <strong>iOS</strong>
          </span>
    
          <span class="right-side col-sm-6">
            <button class="btn btn-default">HOL DIR DIE APP</button>
          </span>

    </footer>
  </section> <!-- HEADER SECTION -->
`
})
export class HeadSectionComponent {

    constructor() {
    }
}
