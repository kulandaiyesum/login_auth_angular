import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'login-auth';
  user: any;
  loggedIn: any;

  constructor(private authService: SocialAuthService) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      console.log(this.user);
    });
  }
  signInWithFB(): void {
    //Facebook Login
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signWithGoogle(): void {
    console.log('googlesignin');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log('googlesignin1');
  }
}
