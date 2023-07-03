import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActionsSubject } from '@ngrx/store';
import { skip } from 'rxjs/operators';
import { Register } from './modules/actions';

@Component({
  selector: 'register-page',
  templateUrl: './register.component.html',
  styleUrls: ['../Login/login.component.scss']
})
export class RegisterComponent {
  title = 'Register Page';

constructor(
    private formBuilder: FormBuilder,
    private store: Store<any>,
    private actionListener$: ActionsSubject
  ) {}

   registerForm = this.formBuilder.group({
     firstName: '',
    lastName: '',
    email: '',
    password: '',
confirmPassword: '',

  });

onSubmit(): void {
    if(this.registerForm.value.password! === this.registerForm.value.confirmPassword!){

        this.click(this.registerForm.value.email!, this.registerForm.value.firstName!, this.registerForm.value.lastName!, this.registerForm.value.password!)
    }
  }
   
  click(email: string, firstName: string, lastName: string, password: string) {
    console.log(1);
  this.store.dispatch(new Register({email, firstName, lastName, password}));
}
ngOnInit() {
    this.actionListener$.pipe(
      skip(1) // optional: skips initial logging done by ngrx
    ).subscribe((action) => console.info('ngrx action', action));
  }

}
