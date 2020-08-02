import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { FormValid } from "src/app/shared/decorators/form-valid.decorator";
import { AuthService } from "src/app/shared/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";
import { trigger, transition, animate, keyframes, style } from "@angular/animations";
import { User } from "src/app/user/models";
import { BROWSER_STORAGE } from "src/app/shared/injectables";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  animations: [
    trigger('swiggle', [
      transition('false => true', animate('500ms ease-in',
        keyframes([
          style({ transform: 'translate3d(-1px, 0, 0)', offset: 0.1 }),
          style({ transform: 'translate3d(2px, 0, 0)', offset: 0.2 }),
          style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.3 }),
          style({ transform: 'translate3d(4px, 0, 0)', offset: 0.4 }),
          style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.5 }),
          style({ transform: 'translate3d(4px, 0, 0)', offset: 0.6 }),
          style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.7 }),
          style({ transform: 'translate3d(2px, 0, 0)', offset: 0.8 }),
          style({ transform: 'translate3d(-1px, 0, 0)', offset: 0.9 })
        ])
      ))
    ])
  ]
})
export class LoginComponent implements OnInit, AfterViewInit {
  returnUrl: string;
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  @ViewChild('mailInput') private mailInput: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly formbuilder: FormBuilder,
    private readonly authService: AuthService,
    @Inject(BROWSER_STORAGE) private readonly storage: Storage) { }

  ngAfterViewInit(): void {
    this.mailInput.nativeElement.focus();
  }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get email(): string {
    return this.loginForm.controls["email"].value;
  }

  get password(): string {
    return this.loginForm.controls["password"].value;
  }


  @FormValid("loginForm")
  onLogin() {
    this.invalidLogin = false;
    console.log(this.invalidLogin);
    this.authService.login(this.email, this.password)
      .pipe(catchError(() => of(undefined)))
      .subscribe((user: User) => {
        if (user) {
          this.storage.setItem("user", JSON.stringify(user));
          this.router.navigateByUrl(this.returnUrl);
        } else {
          this.invalidLogin = true;
          console.log(this.invalidLogin);

          setTimeout(() => this.invalidLogin = false, 2000);
        }
      })
  }
}
