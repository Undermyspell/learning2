import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-table-inline',
  templateUrl: './table-inline.component.html',
  styleUrls: ['./table-inline.component.sass']
})
export class TableInlineComponent implements OnInit {
  isRowInEditMode: { [index: number]: boolean } = {};

  entities: any[] = [{
    orgId: "10001529",
    bgbk: "R211",
    orderNo: 9704257731,
    orderPosNo: 1,
    qualifier: "G=61975500*W=ST.PV.T.0030.S.00",
    LS: "LS1+LS2",
    Comment: "Comment1"
  }, {
    orgId: "A4050126",
    bgbk: "R305",
    orderNo: 9705242964,
    orderPosNo: 1,
    qualifier: "W=PS.1001.009.003*G=61799700",
    LS: "LS1",
    Comment: "Comment2 :)"
  }];

  controls: FormArray;

  constructor() { }

  ngOnInit(): void {
    const toGroups = this.entities.map(entity => {
      return new FormGroup({
        orgId: new FormControl(entity.orgId, Validators.required),
        bgbk: new FormControl(entity.bgbk),
        orderNo: new FormControl(entity.orderNo)
      });
    });
    this.controls = new FormArray(toGroups);
  }

  getControl(index: number, field: string): FormControl {
    return this.controls.at(index).get(field) as FormControl;
  }

  getFormGroup(index: number): FormGroup {
    return this.controls.at(index) as FormGroup;
  }

  toggleEditMode(rowIndex: number): void {
    if (this.isRowInEditMode[rowIndex]) {
      delete this.isRowInEditMode[rowIndex];
    } else {
      this.isRowInEditMode[rowIndex] = true;
    }
  }

  updateField(index: number, field: string) {
    const control = this.getControl(index, field);
    if (control.valid) {
      this.entities = this.entities.map((e, i) => {
        if (index === i) {
          return {
            ...e,
            [field]: control.value
          }
        }
        return e;
      })
    }
  }

  clear() {
    this.entities = [];
  }

  save(index: number) {
    this.isRowInEditMode = {};
    console.log(this.controls.at(index).value);
  }

}
