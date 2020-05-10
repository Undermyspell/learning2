import { ImageClassDirective } from './image-class.directive';
import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

@Component({
  template: `
    <div imageClass></div>
    <div imageClass></div>
    `
})
class TestComponent { }

describe('ImageClassDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let actualElements: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ImageClassDirective, TestComponent]
    }).createComponent(TestComponent);

    fixture.detectChanges();

    actualElements = fixture.debugElement.queryAll(By.directive(ImageClassDirective));
  });

  it("should set correct stylings of html elements", () => {
    // Assert
    expect(actualElements.length).toBe(2);
    for (let i = 0; i < actualElements.length; i++) {
      expect(actualElements[i]).toBeDefined();
      if (actualElements[i].nativeElement.classList.length > 0) {
        const contains = actualElements[i].nativeElement.classList.contains("card-tall") ||
        actualElements[i].nativeElement.classList.contains("card-wide") ||
        actualElements[i].nativeElement.classList.contains("card-big");
        expect(contains).toBeTrue();
      }
    }
  });
});
