import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  updateUser(username: string): any {
    throw new Error('Method not implemented.');
  }
  gitProfile(): any {
    throw new Error('Method not implemented.');
  }
  gitRepos(): any {
    throw new Error('Method not implemented.');
  }
  githubProfile(): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
