import { routes } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core"; 
import { provideHttpClient } from "@angular/common/http";

import { AppComponent } from "./app.component"; 
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { RouterModule } from "@angular/router";


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    providers: [provideHttpClient(), CookieService],
})
export class AppModule {}