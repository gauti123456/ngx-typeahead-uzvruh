//our root app component
import {Component} from '@angular/core';

@Component({
  selector: 'http-list',
  template: `
  <h3 class="alert alert-success">example using HTTP</h3>
  <section class="col-sm-12">
    <div class="search-results style-http style-3">
      <input type="text" [value]="query" placeholder="type to see http response"
        ngxTypeahead  class="col-sm-12 form-control"
        [taUrl]="url"
        [taParams]="params"
        [taApi]="api"
        (taSelected)="handleHttpResultSelected($event)"
      >
    </div>
  </section>
  `
})
export class HttpListComponent {
  public url = 'mock/data.json';
  public api = 'http';
  public params = {};
  public query = '';

  public handleHttpResultSelected (result) {
    this.query = result;
  }

}