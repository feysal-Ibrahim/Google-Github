import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-git-repo',
  providers: [GitService],
  templateUrl: './git-repo.component.html',
  styleUrls: ['./git-repo.component.css']
})
export class GitRepoComponent implements OnInit {

  repos: Repo;

  SearchTerm(identity) {

    // console.log(identity);
    this.reposRequest(identity);
  }
  reposRequest(identity) {
    this.gitService.repoRequest(identity);
  }

  constructor(private gitService: GitService) { }

  ngOnInit() {

    this.repos = this.gitService.repos;

  }

}
