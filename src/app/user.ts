export class User {
  constructor(
    public login: string,
    public avatar_url: any,
    public public_repos: number,
    public html_url: any,
    public created_at: Date) {}
}
