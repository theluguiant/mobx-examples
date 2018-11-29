import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>
        Welcome to your bank account manager!
      </h1>
      <div class="content">
        <app-balance></app-balance>
        <app-actions></app-actions>
        <app-transactions></app-transactions>
      </div>
    </div>
  `,
  styles: [
    `.content {
      padding-left: 20px;
    }`
  ]
})
export class AppComponent {
}
