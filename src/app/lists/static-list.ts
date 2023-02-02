//our root app component
import {Component} from '@angular/core';

@Component({
  selector: 'static-list',
  template: `
  <h3 class="alert alert-info">Using STATIC list</h3>
  <section class="col-sm-12">
    <div class="search-results style-3">
      <input type="text" placeholder="type a value from the list below"
        ngxTypeahead class="col-sm-12 form-control"
        [value]="query3"
        [taList]="staticList" 
        (taSelected)="handleStaticResultSelected($event)">
    </div>
  </section>
  <pre><code>{{ staticList | json }}</code></pre>
  `
})
export class StaticListComponent {
  public query3 = '';
  public staticList = [
    "guitar",
    "drums",
    "bass",
    "electric guitars",
    "keyboards",
    "mic",
    "bass guitars",
    "trumpet",
    "horns",
    "guitar workshops",
    "pedals"
  ];

  public handleStaticResultSelected (result) {
    this.query3 = result;
  }

}