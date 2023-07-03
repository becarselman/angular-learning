import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  baseUrl: any;
 
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api';
  }
 
  loginApi(data: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, data.payload)
      .pipe(catchError((error: any) => throwError(error.message)));
  }
    registerApi(data: any) {
      console.log(data, 2342);
    return this.http.post(`${this.baseUrl}/auth/register`, data.payload)
      .pipe(catchError((error: any) => throwError(error.message)));
  }
}