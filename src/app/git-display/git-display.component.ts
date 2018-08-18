import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GithubService } from '../github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
  users: any = [];
  repos: any = [];
  username: string;

  constructor(private gitService: GithubService) { }

  ngOnInit() {
    this.newMethod()
      .subscribe(res => {
        // console.log(res)
        this.users = res;
      });

    this.gitService.gitRepos()
      .subscribe(data => {
        // console.log(data)
        this.repos = data;
      });
  }

  private newMethod() {
    return this.gitService.githubProfile();
  }

  searchUser() {
    this.gitService.updateUser(this.username);

    this.gitService.gitProfile()
      .subscribe(res => {
        // console.log(res);
        this.users = res;
      });

    this.gitService.gitRepos()
      .subscribe(data => {
        // console.log(data)
        this.repos = data;
      });
  }

}
