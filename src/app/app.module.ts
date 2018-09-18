import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { CompanyComponent } from './register/company/company.component';
import { VatComponent } from './register/company/vat/vat.component';
import { PersonComponent } from './register/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CompanyComponent,
    VatComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
