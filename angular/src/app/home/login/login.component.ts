import { User } from './../../shared/gql/login.gql';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { FormValid } from "src/app/shared/decorators/form-valid.decorator";
import { AuthService } from "src/app/shared/services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";
import { trigger, transition, animate, keyframes, style } from "@angular/animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  animations: [
    trigger('swiggle', [
      transition('false => true', animate('500ms ease-in',
        keyframes([
          style({ transform: 'translate3d(-100px, 0, 0)', offset: 0.1 })
        ])
      ))
    ])
  ]
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  loginForm: FormGroup;
  invalidLogin: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly formbuilder: FormBuilder,
    private readonly authService: AuthService) { }

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
    this.authService.login(this.email, this.password)
      .pipe(catchError(() => of(undefined)))
      .subscribe((user: User) => {
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          this.router.navigateByUrl(this.returnUrl);
        } else {
          this.invalidLogin = true;
        }
      })
  }
}
