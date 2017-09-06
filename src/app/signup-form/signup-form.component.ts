import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
  };
}

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  user: User = {
    name: '',
    account: {
      email: '',
      confirm: ''
    }
  };
  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    console.log(value, valid);
  }
}
