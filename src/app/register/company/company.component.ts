import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
})
export class CompanyComponent implements OnInit, OnDestroy {
  @Input('group') registrationForm: FormGroup;
  companyForm = this.fb.group({
    name: [""],
    address: [""],
    contactPerson: [""],
    vatRegistered: ["no"]
  });
  constructor(protected fb: FormBuilder) { }
  ngOnInit() {
    // Register the companyForm when the component initializes.
    this.registrationForm.addControl("company", this.companyForm);
  }
  ngOnDestroy() {
    // Unregister the companyForm when the component destroys.
    this.registrationForm.removeControl("company");
  }
}