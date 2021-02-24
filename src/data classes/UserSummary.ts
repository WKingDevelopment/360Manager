import { Email } from "./Email";

export class UserSummary {
    constructor(public firstName:string, public lastName:string, public emailObj:Email) {}

    //#region Public Properties
    public get fullName():string {
        return `${this.firstName} ${this.lastName}`
    }

    public get displayDetails():string {
        return `${this.fullName} (${this.emailObj.email})`
    }
    //#endregion
    
}