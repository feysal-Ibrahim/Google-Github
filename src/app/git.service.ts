import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
import { Repo } from './repo';
@Injectable({
  providedIn: 'root'
})
export class GitService {
  name: string;

  profiles: User;
  repos: Repo;
  users: any;
  results: any;

  constructor(private http: HttpClient) {
    this.profiles = new User('', '', 0, '', new Date());
    this.repos = new Repo('', '', '', new Date());
    this.name = 'feysal-Ibrahim';
   }

   userRequest(identity: string) {
     interface UserResponse {
       login: string;
       avatar_url: any;
       public_repos: number;
       html_url: any;
       created_at: Date;
     }
     const promise = new Promise((resolve, reject) => {
       this.http.get<UserResponse>(environment.apiUrl + this.name + environment.token).toPromise().then(
         res => {
           this.profiles.login = res.login;
           this.profiles.avatar_url = res.avatar_url;
           this.profiles.public_repos = res.public_repos;
           console.log(this.profiles.login);

           this.profiles.html_url = res.html_url;
           this.profiles.created_at = res.created_at;

         }
       );
     });
     return promise;
   }
  repoRequest(identity: string) {
    interface Repositories {
      name: string;
      repo_url: any;
      description: any;
      created_at: Date;
    }
    const promise = new Promise((resolve, reject) => {
      this.http.get<Repositories>(environment.apiUrl + identity + '/repos' + environment.token).toPromise().then(
        res => {
          this.results = res;
          this.repos.repo_url = res.repo_url;
          this.repos.description = res.description;
          this.repos.created_at = res.created_at;

          resolve();
        }
      );
    });
    return promise;
  }
}
