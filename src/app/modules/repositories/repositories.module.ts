import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { RepoLogoComponent } from './repo-logo/repo-logo.component';



@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    SearchRepoComponent,
    LoadingComponent,
    RepoLogoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RepositoriesModule { }
