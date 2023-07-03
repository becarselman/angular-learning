import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoginService } from '../../../services/auth';
import { Router } from '@angular/router';
 
@Injectable()
export class RegisterEffects {
 
  registerEffects$ = createEffect(() => this.actions$.pipe(
    ofType('REGISTER'),
    mergeMap((data) => this.loginService.registerApi(data)
      .pipe(
        map(data => {
          console.log(data);
          localStorage.setItem('accessToken', (<any>data).accessToken)
           this.router.navigate(['/parent-profile'])
            return({ type: '[Register Api] Register success', payload: data })}),
        catchError(e => of({ type: 'FAIL', payload: e})
      ))
    ))
  );
 
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router,
  ) {}
}