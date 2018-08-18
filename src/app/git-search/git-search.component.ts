import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  username: string;

  @Output() user = new EventEmitter<any>();

  searchUser() {
    // console.log(this.username);
    this.user.emit(this.username);
    this.username = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
