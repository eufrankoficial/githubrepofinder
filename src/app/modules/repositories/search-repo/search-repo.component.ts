import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit{
  @Output() emitSearchRepo = new EventEmitter();
  
  public repo: string = "";
  
  constructor() {}

  ngOnInit(): void {
    
  }

  onSubmitSearchRepo() {
    if(this.repo) {
      this.emitSearchRepo.emit(this.repo.trim());
    }
  }
}
