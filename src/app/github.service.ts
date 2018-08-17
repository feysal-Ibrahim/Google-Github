import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { Repo} from './repo';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  // profiles: any;
  repos: Repo;
  users: User;
  results: any;


constructor(private http: HttpClient) {
  this.users = new User('', '', '', '');
  // this.repos = new Repo('', '', '',  );
 }

 userRequest(identity: string) {
   interface UserResponse {
     login: string;
     avatar_url: any;
    //  public_repos: number;
     html_url: any;
   }
   const promise = new Promise((resolve, reject) => {
     this.http.get<UserResponse>(environment.apiUrl + identity + environment.token).toPromise().then(
       res => {
         this.users.login = res.login;
         this.users.avatar_url = res.avatar_url;
         this.users.html_url = res.html_url;
        //  this.profiles.login = res.login;
        //  this.profiles.avatar_url = res.avatar_url;
        //  this.profiles.public_repos = res.public_repos;
        //  console.log(this.profiles.login)

        //  this.profiles.html_url = res.html_url;
        //  this.profiles.created_at = res.created_at;

       }
     );
   });
   return promise;
 }
// repoRequest(identity:string){
//   interface Repositories{
//     name:string;
//     repo_url:any;
//     description:any;
//     created_at: Date
//   }
//   const promise = new Promise((resolve, reject) => {
//     this.http.get<Repositories>(environment.apiUrl+ identity + '/repos'+ environment.).toPromise().then(
//       res=>{
//         this.results = res;
//         this.repos.repo_url = res.repo_url;
//         this.repos.description = res.description;
//         this.repos.created_at = res.created_at;

//         resolve();
//       }
//     );
//   });
//   return promise;
// }
// }
