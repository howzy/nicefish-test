import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { appRouting } from './app.routes';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserRegisterService } from './user/user-register/services/user-register.service';
import { AuthGuard } from './user/user-login/services/auth-guard';
import { UserLoginService } from './user/user-login/services/user-login.service';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { ForgetPwdService } from './user/forget-pwd/services/forget-pwd.service';

import { EqualValidator } from './utils/equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    EqualValidator,
    ForgetPwdComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    appRouting,
    ReactiveFormsModule,
    ToastModule.forRoot()
  ],
  providers: [UserRegisterService, UserLoginService, AuthGuard, ForgetPwdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
