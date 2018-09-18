import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
})
export class VatComponent implements OnInit, OnDestroy {
  @Input("group") companyForm: FormGroup;
  vat = this.fb.group({
    vatNumber: [""],
  });
  constructor(protected fb: FormBuilder) {}
  ngOnInit() {
    this.companyForm.addControl("vat", this.vat);
  }
  ngOnDestroy() {
    this.companyForm.removeControl("vat");
  }
}