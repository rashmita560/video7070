import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {

  
  introduction = 'Welcome to VIBSO’s Privacy Policy. Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our service.';
  informationCollected = {
    personalInformation: 'We collect personal information such as your name and email address when you create an account.',
    videoFiles: 'We also collect video files you upload for conversion into text.',
    usageData: 'We collect usage data such as IP addresses and browser type.'
  };
  useOfInformation = {
    personalInformation: 'We use your personal information to create and manage your account, and to communicate with you.',
    videoFiles: 'Video files are used solely for the purpose of converting them into text.',
    usageData: 'Usage data helps us analyze and improve our service.'
  };
  dataSharing = 'We may share your data with third-party service providers, or as required by law or to protect VIBSO’s legal rights.';
  dataSecurity = 'We implement industry-standard security measures to protect your information, including encryption of sensitive data and strict access controls.';
  userRights = {
    access: 'You have the right to access your personal information.',
    correction: 'You have the right to correct or delete your personal information.',
    optOut: 'You have the right to opt-out of certain data processing activities.'
  };
  cookiesAndTracking = 'We use cookies for authentication and analytics purposes. By using VIBSO, you consent to the use of cookies as described in this policy.';
  thirdPartyLinks = 'VIBSO is not responsible for the privacy practices of third-party websites or services linked to our service.';
  changesToPrivacyPolicy = 'We will notify you of any changes to this privacy policy.';
  contactInformation = 'If you have any questions or concerns about this privacy policy, please contact us at [Your Contact Information].';

}
