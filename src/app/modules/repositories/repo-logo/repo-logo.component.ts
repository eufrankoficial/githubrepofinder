import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-logo',
  templateUrl: './repo-logo.component.html',
  styleUrls: ['./repo-logo.component.css']
})
export class RepoLogoComponent {
  @Input() src!: string;
  @Input() height!: string;
  @Input() width!: string;
}
