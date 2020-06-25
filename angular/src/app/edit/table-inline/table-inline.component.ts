import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from "@angular/forms";
import { EditableComponent } from "src/app/shared/components/editable/editable.component";

@Component({
  selector: 'app-table-inline',
  templateUrl: './table-inline.component.html',
  styleUrls: ['./table-inline.component.sass']
})
export class TableInlineComponent implements OnInit {
  isRowInEditMode: { [index: number]: any } = {};

  entities: any[] = [{
    id: 1,
    orgId: "10001529",
    bgbk: "R211",
    orderNo: 9704257731,
    orderPosNo: 1,
    qualifier: "G=61975500*W=ST.PV.T.0030.S.00",
    LS: "LS1+LS2",
    Comment: "Comment1"
  }, {
    id: 2,
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

  @ViewChildren(EditableComponent) editableComponent: QueryList<EditableComponent>;

  ngOnInit(): void {
    const toGroups = this.entities.map(entity => {
      return new FormGroup({
        id: new FormControl(entity.id),
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
    if (!!this.isRowInEditMode[rowIndex]) {
      this.controls.at(rowIndex).reset(this.isRowInEditMode[rowIndex])
      delete this.isRowInEditMode[rowIndex];
      this.editableComponent.filter(x => +x.elementRef.nativeElement.getAttribute("index") === rowIndex).forEach(x => x.view());
    } else {
      this.isRowInEditMode[rowIndex] = this.controls.at(rowIndex).value;
      this.editableComponent.filter(x => +x.elementRef.nativeElement.getAttribute("index") === rowIndex).forEach(x => x.edit());
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

  save(index: number) {
    this.isRowInEditMode = {};
    this.editableComponent.filter(x => +x.elementRef.nativeElement.getAttribute("index") === index).forEach(x => x.view());
  }
}
