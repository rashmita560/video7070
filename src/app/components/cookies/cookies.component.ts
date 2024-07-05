import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesComponent {
  introduction = 'Welcome to VIBSO’s Cookies Policy. Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners.';
  privacyPolicyLink = '/privacy-policy';
  strictlyNecessaryCookies = 'These cookies are essential for the operation of our website.';
  functionalityCookies = 'These cookies enhance the functionality and user experience of our website.';
  performanceAndAnalyticsCookies = 'These cookies help us analyze how our website is used and improve its performance.';
  advertisingCookies = 'These cookies are used to deliver advertisements that are relevant to you based on your interests.';
  cookieManagement = 'You can manage your cookie preferences through the cookie consent banner displayed when you first visit our website. You can also disable or delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.';
  browserSettingsLink = 'https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop';
  thirdPartyCookie1 = 'This third-party cookie is used to provide analytics services.';
  thirdPartyCookie1Policy = 'https://developers.google.com/privacy-sandbox/blog/cookie-countdown-2024jan';
  changesToCookiesPolicy = 'We will notify you of any changes to this cookies policy.';
  contactInformation = 'If you have any questions or concerns about this cookies policy, please contact us at [Your Contact Information].';
}


