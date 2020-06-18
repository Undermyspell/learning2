import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInlineComponent } from './table-inline.component';

describe('TableInlineComponent', () => {
  let component: TableInlineComponent;
  let fixture: ComponentFixture<TableInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
