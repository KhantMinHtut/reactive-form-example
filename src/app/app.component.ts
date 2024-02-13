import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  signupForm!: FormGroup;

  forbiddenProjectname = ['Test'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      projectname: new FormControl(null, [
        Validators.required,
        this.forbiddenNames.bind(this),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('stable'),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    // if the value is not found, if returns -1;
    if (
      control.value &&
      this.forbiddenProjectname.indexOf(control.value) !== -1
    ) {
      return { nameIsForbidden: true };
    }
    return null;
  }
}
