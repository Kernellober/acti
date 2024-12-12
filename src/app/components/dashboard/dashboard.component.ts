import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatRadioModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  formGroup: FormGroup;
  isLinear: boolean = true;

  constructor(private readonly _formBuilder: FormBuilder) {
    this.formGroup = this._formBuilder.group({
      firstFormGroup: this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      }),
      secondFormGroup: this._formBuilder.group({
        understood: ['', Validators.required],
        secondCtrl: ['', Validators.required]
      })
    });
  }

  get firstFormGroup() {
    return this.formGroup.get('firstFormGroup') as FormGroup;
  }

  get secondFormGroup() {
    return this.formGroup.get('secondFormGroup') as FormGroup;
  }

  saveRadioValue() {
    if (this.formGroup.valid) {
      const formValues = this.formGroup.value;
      const understoodValue = formValues.secondFormGroup.understood;
      console.log('Selected value:', understoodValue);

      // Save the value to a property
      // this.myProperty = understoodValue;

      // Perform any other necessary actions (e.g., submit to a server)
    } else {
      console.error('Form is not valid');
    }
  }
}