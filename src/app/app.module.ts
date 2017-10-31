import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rotas
import { Routing, RoutingProviders } from './app.routing';

// Root
import { AppComponent } from './app.component';

// Shared
import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CouponsComponent } from './components/coupons/coupons.component';


// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

// Services
import { AuthService } from './services/auth.service';
import { ReportCustomersComponent } from './report-customers/report-customers.component';
import { ReportAdwardsComponent } from './report-adwards/report-adwards.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';




@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    SubMenuComponent,
    HomePageComponent,
    LoginPageComponent,
    FooterComponent,
    SignupPageComponent,
    CouponsComponent,
    ReportCustomersComponent,
    ReportAdwardsComponent,
    CreateCouponComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
