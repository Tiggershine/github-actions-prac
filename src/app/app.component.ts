import { Component } from '@angular/core';
import { AuthService } from 'src/service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bageloauth';
  private authUrl ='http://localhost:8080/auth/google'

  googleLogin() {
    // const googleCallback$ = window.location.href = `${this.authUrl}`
    window.location.href = `${this.authUrl}`;

  }

 
}
