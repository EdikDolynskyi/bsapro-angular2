import { Component } from '@angular/core';

@Component({
	selector: "my-app",
	template: `<div class="container">
				  <div class="row">
					<div class="col-sm-6 col-sm-offset-3">
					  <simple-form></simple-form>
					</div>
				  </div>
				  <div class="row">
					<div class="col-sm-6 col-sm-offset-3">
					  <complex-form></complex-form>
					</div>
				  </div>
				  <div class="row">
					<div class="col-sm-6 col-sm-offset-3">
					  <form-validation></form-validation>
					</div>
				  </div>
				</div>`
})

export class AppComponent {
  constructor(){}
}