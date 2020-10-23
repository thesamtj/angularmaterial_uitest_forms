import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
  iBasicInfoFormGroup: FormGroup;
  cBasicInfoFormGroup: FormGroup;
  addressInfoFormGroup: FormGroup;
  phoneInfoFormGroup: FormGroup;
  emailInfoFormGroup: FormGroup;
  identityInfoFormGroup: FormGroup;
  educationalInfoFormGroup: FormGroup;
  otherInfoFormGroup: FormGroup;
  typeOfAccount = 'Individual';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createAddCustomerForm();
  }

  createAddCustomerForm() {
    this.iBasicInfoFormGroup = this.fb.group({
      firstName: [null, Validators.required],
      middleName: [null, Validators.required],
      lastName: [null, Validators.required],
      customerType: [null, Validators.required],
      title: [null, Validators.required],
      gender: [null, Validators.required],
      religion: [null, Validators.required],
      maritalStatus: [null, Validators.required],
      nationality: [null, Validators.required],
      soo: [null, Validators.required],
      lga: [null, Validators.required],
      birthDate: [null, Validators.required],
      birthPlace: [null, Validators.required],
      tin: [null, Validators.required],
      bvn: [null, Validators.required],
    });

    this.cBasicInfoFormGroup = this.fb.group({
      cFullName: [null, Validators.required],
      cCustomerType: [null, Validators.required],
      title: [null, Validators.required],
      gender: [null, Validators.required],
      religion: [null, Validators.required],
      cNationality: [null, Validators.required],
      cSor: [null, Validators.required],
      cLga: [null, Validators.required],
      cRegDate: [null, Validators.required],
      cRegPlace: [null, Validators.required],
      cTin: [null, Validators.required],
      bvn: [null, Validators.required],
      cBSector: [null, Validators.required],
      vBType: [null, Validators.required],
      cOin: [null, Validators.required],
      dOin: [null, Validators.required],
      certIssuer: [null, Validators.required],
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
    vMaritalStatus: null,
    vReligion: null,
    vNationality: null,
    vLga: null,
    vSoo: null,
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
    vRelatedSN: null,
    vCFullName: null,
    vCCustomerType: null,
    vCNationality: null,
    vCSor: null,
    vCLga: null,
    vCRegDate: null,
    vCRegPlace: null,
    vCTin: null,
    vCBSector: null,
    vCBType: null,
    vCOin: null,
    vDOin: null,
    vCertIssuer: null,
  };
}
