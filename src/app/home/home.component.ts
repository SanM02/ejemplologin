import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users/users.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html", // Replace with the correct path to the template file
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(public userService: UsersService) {}
  ngOnInit() {
    this.getUserLogged();
  }
  getUserLogged() {
    this.userService.getUser().subscribe((user) => {
      console.log(user);
    });
  }
}