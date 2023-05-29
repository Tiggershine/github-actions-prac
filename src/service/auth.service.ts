import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const callbackUrl = window.location.href;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl ='http://localhost:8080/auth/google'

  constructor(private http: HttpClient) { }

  private callbackUrl$ = new BehaviorSubject<string>('');

  setCallbackUrl(callbackUrl: string) {
    this.callbackUrl$.next(callbackUrl)
  }

  getCallbackUrl() {
    return this.callbackUrl$.asObservable;
  }
  


}
