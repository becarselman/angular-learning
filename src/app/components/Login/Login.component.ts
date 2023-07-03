import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Login } from './modules/actions';
import { ActionsSubject } from '@ngrx/store';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'Login Page';

constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private actionListener$: ActionsSubject
  ) {}

   loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });

onSubmit(): void {
    this.click(this.loginForm.value.email!, this.loginForm.value.password!)
    console.log('Submit form with values', this.loginForm.value);
  }
   
  click(email: string, password: string) {
    console.log(email, password);
  this.store.dispatch(new Login({ email: email, password: password }));
}
ngOnInit() {
    this.actionListener$.pipe(
      skip(1) // optional: skips initial logging done by ngrx
    ).subscribe((action) => console.info('ngrx action', action));
  }

}
