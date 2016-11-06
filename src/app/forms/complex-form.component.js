import { Component } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';

@Component({
	selector: 'complex-form',
	templateUrl : './app/forms/complex-form.component.html'
})
export class ComplexFormComponent {
	constructor(fb: FormBuilder){
		this.complexForm = fb.group({
			'firstName' : '',
			'lastName': '',
			'gender' : ['Female'],
			'hiking' : false,
			'running' : false,
			'swimming' : false
		})
	}

	submitForm(value){
		console.log('Reactive Form Data: ')
		console.log(value);
	}
}