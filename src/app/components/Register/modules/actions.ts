import { Action } from '@ngrx/store';

export class Register implements Action {
  readonly type = 'REGISTER';

  constructor(public payload: { email: string, firstName: string, lastName: string, password: string}) {}

}