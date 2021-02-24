import { Company } from "./Company";
import { Email } from "./Email";
import { UserSummary } from "./UserSummary";

export class User extends UserSummary {
  constructor(
    public firstName: string,
    public lastName: string,
    public emailObj: Email,
    public id:number,
    public createdCompanyCount: number,
    public defaultCompanyId: number 
  ) {
    super(firstName, lastName, emailObj);
  }
}