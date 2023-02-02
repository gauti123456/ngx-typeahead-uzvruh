//our root app component
import {Component} from '@angular/core';

@Component({
  selector: 'custom-template-list',
  template: `
  <h3 class="alert alert-warning">Custom Item Template</h3>
  <section class="col-sm-12 custom">
    <div class="search-results style-3">
      <input type="text" [value]="query" placeholder="type to see item template"
        ngxTypeahead class="col-sm-12 form-control"
        [taUrl]="url"
        [taParams]="params"
        [taItemTpl]="itemTpl"
        (taSelected)="handleResultSelected($event)"
      >
    </div>
    <ng-template #itemTpl let-result class="list-item">
      <div class="bg-danger">
        <i class="fa fa-heart"></i> <strong>{{ result.result }}</strong>
      </div>
    </ng-template>
  </section>
  `
})
export class CustomTemplateListComponent {
  public url = '//suggestqueries.google.com/complete/search';
  public params = {
    hl: 'en',
    ds: 'yt',
    xhr: 't',
    client: 'youtube'
  };
  public query = '';

  public handleResultSelected (result) {
    this.query = result;
  }

}