import { Component, OnInit } from '@angular/core';
import { GithubRepoModel } from '../models/github-repo-model';
import octokit from 'app/infra/request';
import { GithubService } from 'app/modules/services/github.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public repositories: Array<GithubRepoModel> = [];
  public loading: boolean = true;
  constructor(
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    this.get(); 
    console.log('iniciado...')
  }


  async get(search?: string): Promise<any> {
    this.changeLoadingComponent(true)
    this.repositories = await this.githubService.get(search);
    this.changeLoadingComponent(false);
  }

  changeLoadingComponent(loading: boolean): void {
    this.loading = loading;    
  }

}
