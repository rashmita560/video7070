import { Component } from '@angular/core';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [],
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent {
  dataEncryption = 'We use industry-standard encryption protocols to protect data transmission (in-transit) and stored data (at-rest). All communication with VIBSO is encrypted using HTTPS/TLS, and sensitive data such as video files and user information are stored using strong encryption algorithms.';
  accessControls = 'Access to sensitive data is restricted to authorized personnel only. We implement multi-factor authentication (MFA) to secure access to administrative and user accounts.';
  secureCodingPractices = 'We adhere to secure coding guidelines and best practices (e.g., OWASP Top 10) to prevent common vulnerabilities such as SQL injection, cross-site scripting (XSS), and others.';
  regularSecurityAuditsAndTesting = 'We conduct regular security audits and vulnerability assessments of our website and infrastructure. We also perform penetration testing to identify and mitigate potential security weaknesses.';
  dataMinimizationAndRetention = 'We collect and retain only the necessary amount of data required for VIBSO’s operation and legal compliance. We establish data retention policies and procedures to ensure data is not kept longer than necessary.';
  incidentResponsePlan = 'We have developed an incident response plan to promptly detect, respond to, and recover from security incidents. This plan includes procedures for notifying affected users and relevant authorities as required.';
  userEducationAndAwareness = 'We provide guidance to users on best practices for maintaining security (e.g., strong passwords, recognizing phishing attempts). We educate users about the security measures we have in place to protect their data.';
  complianceWithLegalRequirements = 'We ensure compliance with relevant data protection laws and regulations (e.g., GDPR, CCPA) concerning security and data protection.';


}
