export class User {
  created_at: Date;
  constructor(
    public login: string,
    public avatar_url,
    public public_repos: any,
    public html_url: any, ) {}
    // public created_at: Date) {}
}
