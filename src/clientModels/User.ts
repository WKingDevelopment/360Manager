import { Email } from "./Email";

export class User {
    constructor(
      public displayName: string,
      public email: Email,
      public associatedCompanies: string[]
    ) { }
  }