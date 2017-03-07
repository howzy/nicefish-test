import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { appRouting } from './app.routes';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserRegisterService } from './user/user-register/services/user-register.service';
import { UserLoginService } from './user/user-login/services/user-login.service';

import { EqualValidator } from './utils/equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    EqualValidator,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    appRouting,
    ReactiveFormsModule
  ],
  providers: [UserRegisterService, UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
