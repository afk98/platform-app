import { faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'platform-loader-screen',
  templateUrl: './loader-screen.component.html',
  styleUrls: ['./loader-screen.component.scss']
})
export class LoaderScreenComponent implements OnInit {

  fafaTwitter: IconDefinition = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
