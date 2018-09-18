import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit, OnDestroy {
  @Input('group') registrationForm: FormGroup;
  personForm = this.fb.group({
    name: [""],
    address: [""],
    age: [""]
  });
  constructor(protected fb: FormBuilder) { }
  ngOnInit() {
    // Register the companyForm when the component initializes.
    this.registrationForm.addControl("person", this.personForm);
  }
  ngOnDestroy() {
    // Unregister the companyForm when the component destroys.
    this.registrationForm.removeControl("person");
  }
}