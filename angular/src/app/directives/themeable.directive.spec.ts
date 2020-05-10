import { Theme } from 'src/app/enums/theme.enum';
import { ThemeableDirective } from './themeable.directive';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

@Component({
  template: `
    <div [themeable]="themeDark"></div>
    <div [themeable]="themeLight"></div>
    `
})
class TestComponent {
   themeDark: Theme = Theme.dark;
   themeLight: Theme = Theme.light;
}
describe('ThemeableDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let actualElements: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ThemeableDirective, TestComponent]
    }).createComponent(TestComponent);

    fixture.detectChanges();

    actualElements = fixture.debugElement.queryAll(By.directive(ThemeableDirective));
  });

  it("should set correct stylings of html elements", () => {

    // Arrange
    const expected: { className: string }[] = [
      { className: "dark" },
      { className: "light" },
    ];

    // Assert
    expect(actualElements.length).toBe(2);
    for (let i = 0; i < actualElements.length; i++) {
      console.log(actualElements[i].classes);
      expect(actualElements[i]).toBeDefined();
      expect(actualElements[i].nativeElement.classList.contains(expected[i].className)).toBeTruthy();
    }
  });
});
