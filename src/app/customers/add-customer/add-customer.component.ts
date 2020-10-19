import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class AddCustomerComponent implements OnInit {
  basicInfoFormGroup: FormGroup;
  addressInfoFormGroup: FormGroup;
  phoneInfoFormGroup: FormGroup;
  emailInfoFormGroup: FormGroup;
  identityInfoFormGroup: FormGroup;
  educationalInfoFormGroup: FormGroup;
  otherInfoFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createAddCustomerForm();
  }

  createAddCustomerForm() {
    this.basicInfoFormGroup = this.fb.group({
      firstName: [null, Validators.required],
      middleName: [null, Validators.required],
      lastName: [null, Validators.required],
      customerType: [null, Validators.required],
      title: [null, Validators.required],
      gender: ['m', Validators.required],
      religion: [null, Validators.required],
      nationality: [null, Validators.required],
      lga: [null, Validators.required],
      birthDate: [null, Validators.required],
      birthPlace: [null, Validators.required],
      tin: [null, Validators.required],
      bvn: [null, Validators.required],
    });

    this.addressInfoFormGroup = this.fb.group({
      street: [null],
      city: [null],
      state: [null],
      dispatch: [null],
      postalCode: [null, Validators.required],
    });

    this.phoneInfoFormGroup = this.fb.group({
      telNo: [null, Validators.required],
      extension: [null, Validators.required]
    });

    this.emailInfoFormGroup = this.fb.group({
      emailAddress: [null, Validators.required],
      primary: [null, Validators.required]
    });

    this.identityInfoFormGroup = this.fb.group({
      idType: [null, Validators.required],
      idNo: [null, Validators.required],
      issuer: [null, Validators.required],
      expiryDate: [null, Validators.required],
    });

    this.educationalInfoFormGroup = this.fb.group({
      eduLevel: [null, Validators.required],
      cert: [null, Validators.required],
      institution: [null, Validators.required],
    });

    this.otherInfoFormGroup = this.fb.group({
      relatedType: [null, Validators.required],
      relatedFN: [null],
      relatedMN: [null],
      relatedSN: [null],
    });
  }

  customerView = {
    vCustomerId: null,
    vFirstName: null,
    vMiddleName: null,
    vLastName: null,
    vCustomerType: null,
    vTtitle: null,
    vGender: null,
    vReligion: null,
    vNationality: null,
    vLga: null,
    vBirthDate: null,
    vBirthPlace: null,
    vTin: null,
    vBvn: null,
    vStreet: null,
    vCity: null,
    vState: null,
    vDispatch: null,
    vPostalCode: null,
    vTelNo: null,
    vExtension: null,
    vEmailAddress: null,
    vPrimary: null,
    vIdType: null,
    vIdNo: null,
    vIssuer: null,
    vExpiryDate: null,
    vEduLevel: null,
    vCert: null,
    vInstitution: null,
    vRelatedType: null,
    vRelatedFN: null,
    vRelatedMN: null,
    vRelatedSN: null
  };
}
