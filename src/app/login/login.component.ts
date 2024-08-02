import { Component, Inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UsersService } from "../users/users.service";
import { Route, Routes } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  email: string="";
  password: string="";

  constructor(public userService: UsersService, public router: Router) {}

  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe({
      next: (data) => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.log(error);
      },
    });
    }
    }
