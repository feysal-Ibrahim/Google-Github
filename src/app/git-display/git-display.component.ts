import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
import { User } from '../user';
import { Repo } from '../repo';


@Component({
  selector: 'app-git-display',
  providers: [GitService],
  templateUrl: './git-display.component.html',
  styleUrls: ['./git-display.component.css']
})
export class GitDisplayComponent implements OnInit {

  profiles: User;
  repos: Repo;
  users: any;
  results: any;

  SearchTerm(identity) {

    // console.log(identity);
    this.gitService.userRequest(identity);
  }
  userRequest(identity) {
    this.gitService.userRequest(identity);
  }

  constructor(private gitService: GitService) {
  }

  ngOnInit() {

    this.profiles = this.gitService.profiles;
  }

}
