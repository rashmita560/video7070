// .ts
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbAccordionModule, NgbDropdownModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgbRatingModule,NgbAccordionModule,NgbDropdownModule,FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  faCoffee = faCoffee;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;

  rating = 9.5;
	items = [
    {
      "head":"What is video to text transcription?",
      "content":"Video to text transcription is the process of converting a video into a text file. From journalists needing to select a quote for their article from a recent interview, to businessmen needing a written record of a meeting, to a student wanting study notes from a lecture, there are plenty of scenarios where having a text file is more convenient than a video recording."
    },
    {
      "head":"What are the main ways to convert video to text?",
      "content":"There are three main methods to do so; doing it yourself (DIY), using an AI video to text transcription software, or using a human transcription service. Happy Scribe offers all three options. Manually converting your video to text is the free method, but also extremely time-consuming. Our AI transcription software uses the state-of-the-art speech recognition technology to transcribe your video in a few minutes with 85% accuracy.  Our human transcription service provides the highest accuracy rate and delivers in 24 hours."
    },
    {
      "head":"How can I transcribe a video on VIBSO",
      "content":"If you want to transcribe your video, you should use Happy Scribe's transcription services. With the automatic transcription software, the first 10 minutes are free and you can expect to receive the transcript in a few minutes. If you prefer to have a more professional transcript with 99% accuracy, you can choose our human service."
    },
    {
      "head":"Can I transcribe a YouTube Video?",
      "content":"Yes, of course, you can! With Happy Scribe, you can easily copy and paste the video link that you want to transcribe into our editor and convert your YouTube Video to text instantly."
    },
  ];

}
