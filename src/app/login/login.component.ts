import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: LoginService, private router: Router) { }
  username = "";
  password = "";
  errorpasswordMsg = "";
  errorusernameMsg = "";
  IP = ""
  ngOnInit(): void {

  }
  setUrl(): void {
    localStorage.setItem('api', this.IP)
  }
  login(signIn: boolean) {
    if (this.username.trim().length === 0 && this.password.trim().length === 0) {
      this.errorusernameMsg = "Username is required";
      this.errorpasswordMsg = "Password is required";
    }
    else if (this.username.trim().length === 0 && this.password.trim().length !== 0) {
      this.errorusernameMsg = "Username is required";
      this.errorpasswordMsg = "";
    }
    else if (this.password.trim().length === 0 && this.username.trim().length !== 0) {
      this.errorusernameMsg = "";
      this.errorpasswordMsg = "Password is required";
    } else {
      this.errorpasswordMsg = "";
      this.errorusernameMsg = "";
      if (signIn == true) {
        this.auth.login(this.username, this.password).subscribe({
          next: data => {
            if (data.code == 0) {
              console.log("Invalid credentials")
            }
            if (data.code == 1) {
              localStorage.setItem('token', data.object.jwtToken);
              localStorage.setItem('user', data.object.username);
              this.router.navigate(['/home']);
              console.log(data.object.jwtToken)
            }
          }
        });
      }
      if (signIn == false) {
        this.auth.register(this.username, this.password, "ROLE_USER").subscribe({
          next: data => {
            if (data.code == 0) {
              console.log("Invalid credentials")
            }
            if (data.code == 1) {
              this.login(true)
            }
          }
        });
      }
    }
  }
}
