import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as CONSTANTS from '../shared/constants';
import {AppValidators} from '../shared/validators/app.validator';
import {NitValidator} from '../shared/validators/nit.validator';
import {CaptureFormService} from './capture-form.service';

@Component({
  selector: 'app-capture-form',
  templateUrl: './capture-form.component.html',
  styleUrls: ['./capture-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [CaptureFormService]
})
export class CaptureFormComponent implements OnInit {

  constants = CONSTANTS;

  genderList: any[] = [];
  documentTypeList: any[] = [];
  occupationList: any[] = [];
  countryList: any[] = [];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;

  selectedStatus = true;

  dataSource = [
    {a1: null, a2: null, a3: null, a4: null},
    {a1: null, a2: null, a3: null, a4: null}
  ];
  dataSourceValidate = false;

  listCountry: any = [
    {id: 1, value: 'Guatemala'},
    {id: 2, value: 'Estados unidos'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private service: CaptureFormService
  ) {
  }

  ngOnInit(): void {
    this.firstFormGroup = new FormGroup({
      nit: new FormControl('',
        [AppValidators.varchar, NitValidator.verifyNIT(false), Validators.required,
          Validators.pattern(this.constants.NIT_SAT)]),
      status: new FormControl(null),
      date: new FormControl(new Date()),
      incomeExit: new FormControl(''),
      lastName: new FormControl(''),
      names: new FormControl(''),
      documentType: new FormControl(null),
      documentTypeNumber: new FormControl(''),
      sex: new FormControl(null),
      occupation: new FormControl(''),
      nationality: new FormControl(''),
      residence: new FormControl(''),
      countryOfBirth: new FormControl(''),
      birthDate: new FormControl(new Date()),
      foreseenAddress: new FormControl('')
    });
    this.secondFormGroup = new FormGroup({
      field11: new FormControl(''),
      field12: new FormControl(''),
      field13: new FormControl(null),
      field14: new FormControl(null),
      field15: new FormControl('')
    });
    this.thirdFormGroup = new FormGroup({
      field16: new FormControl(null),
      field17: new FormControl(null)
    });
    this.fourFormGroup = new FormGroup({
      field18: new FormControl(null)
    });

    this.service.queryGender().subscribe(data => {
      this.genderList = data;
    });

    this.service.queryDocumentType().subscribe(data => {
      data.forEach(item => {
        this.documentTypeList.push(item);
      });
    });

    this.service.querySubDocumentType().subscribe(data => {
      if (data && data.length > 0) {
        this.fieldDataUnified(this.documentTypeList, data);
      }
    });

    this.service.queryOccupation().subscribe(data => {
      if (data && data.length > 0) {
        this.occupationList = data;
      }
    });

    this.service.queryPais().subscribe(data => {
      if (data && data.length > 0) {
        this.countryList = data;
      }
    });
  }

  fieldDataUnified(unifiedList, data): void {
    unifiedList.forEach(i => {
      const tempArray = [...data];
      const subTemp = tempArray.filter(t => t.idTipoDocto === i.id);
      i.subType = subTemp;
      i.lengthType = subTemp.length;
    });

    this.documentTypeList = unifiedList;
    console.log(unifiedList)
  }

  verifyValue(): void {
    this.dataSourceValidate = this.dataSource
      .some(item => item.a1 !== null && item.a2 !== null && item.a3 !== null && item.a4 !== null);
    /*    console.log(this.dataSource)
        console.log(this.dataSourceValidate)*/
  }

}
