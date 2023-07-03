import { Action } from '@ngrx/store';

export class Login implements Action {
  readonly type = 'LOGIN';

  constructor(public payload: { email: string; password: string }) {}

}