import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {

  userForm: FormGroup; // Change to single FormGroup, not an array

  isFormSubmitted: boolean = false;

  constructor() {
    this.userForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.isFormSubmitted = true;
      console.log('Email:', this.userForm.value.email);

      setTimeout(() => {
        this.isFormSubmitted = false;
        this.userForm.reset();
      }, 3000);
    } else {
      // Mark all fields as touched to display validation errors
      Object.values(this.userForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}
