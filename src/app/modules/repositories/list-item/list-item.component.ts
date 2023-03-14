import { Component, Input } from '@angular/core';
import { GithubRepoModel } from '../models/github-repo-model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() repo!: GithubRepoModel;
}
