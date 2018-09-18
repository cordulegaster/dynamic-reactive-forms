import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html"
})
export class RegisterComponent {
  registrationForm = this.fb.group({
    registrationType: ["person"]
  });
  constructor(protected fb: FormBuilder) {}
  onSubmit() {
    console.log("Submitting", this.registrationForm.value);
  }
}