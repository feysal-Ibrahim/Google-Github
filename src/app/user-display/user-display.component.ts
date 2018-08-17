import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Repo } from '../repo';
import { User } from '../user';


@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  profiles: User;
  repos: Repo;
  users: any;
  results: any;
  constructor() { }

  ngOnInit() {
  }

}
