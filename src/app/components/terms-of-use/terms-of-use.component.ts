import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.css'
})
export class TermsOfUseComponent {
  introduction = 'Welcome to VIBSO, a service that converts video files into text. By using VIBSO, you agree to comply with these terms and conditions.';
  serviceDescription = 'VIBSO offers a video-to-text conversion service that allows users to upload video files and receive a text transcription.';
  userRightsAndResponsibilities = 'You must be at least 18 years old to use VIBSO. You agree to use the service only for lawful purposes and in a way that does not infringe on the rights of others.';
  privacyPolicy = 'We collect and process personal data as described in our Privacy Policy. By using VIBSO, you consent to our data practices.';
  intellectualPropertyRights = 'You retain ownership of any content you upload to VIBSO. By uploading content, you grant us a license to use, modify, and distribute the text and video for the purpose of providing the service.';
  limitationOfLiability = 'VIBSO is provided \'as is\' without warranties of any kind. We are not liable for any direct, indirect, incidental, or consequential damages arising out of your use of the service.';
  prohibitedActivities = 'You agree not to engage in any illegal activities, spamming, or other prohibited activities on the platform.';
  termination = 'We may suspend or terminate your access to VIBSO if you violate these terms. Upon termination, your right to use the service will cease immediately.';
  governingLaw = 'These terms and conditions are governed by the laws of [Your Jurisdiction].';
  changesToTerms = 'We reserve the right to modify these terms with notice to users.';
  contactInformation = 'If you have any questions or concerns, please contact us at [Your Contact Information].';
  miscellaneous = 'This agreement constitutes the entire agreement between you and VIBSO. If any provision of these terms is found to be invalid or unenforceable, it will be severed and the remaining provisions will remain in effect.';


}
