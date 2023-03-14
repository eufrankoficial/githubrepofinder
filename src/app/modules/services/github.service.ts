import { Injectable } from '@angular/core';
import { GithubRepoModel } from '../repositories/models/github-repo-model';
import octokit from 'app/infra/request';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  repositories: Array<GithubRepoModel> = [];
  
  async get(term?: string) {
    await octokit.request("GET /search/repositories", {
      q: this.returnQueryTermToSearch(term),
    }).then(result => {
      this.fillRepos(result.data);
    });

    return this.repositories;
  }

  fillRepos(repos: any) {
    this.repositories = [];
    repos.items.map((item: any) => {
      this.repositories.push({
        id: item.id,
        name: item.name,
        full_name: item.full_name,
        url: item.html_url,
        owner: {
          id: item.owner?.id,
          login: item.owner?.login,
          url: item.owner?.html_url,
          avatar_url: item.owner?.avatar_url
        }
      })
    });
  }

  returnQueryTermToSearch(query?: string) {
    console.log(query);
    return query ?? 'angular';
  }
}
