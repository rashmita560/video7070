import { Routes } from '@angular/router';
import { ConversionComponent } from './components/conversion/conversion.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { SecurityComponent } from './components/security/security.component';
import { GoogleApiComponent } from './components/google-api/google-api.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'conversion',component:ConversionComponent},
    {path:'reviews',component:ReviewsComponent},
    {path:'privacy-policy',component:PrivacyPolicyComponent},
    {path:'cookies',component:CookiesComponent},
    {path:'security',component:SecurityComponent},
    {path:'google-api',component:GoogleApiComponent},
    {path:'terms-of-use',component:TermsOfUseComponent},


];
