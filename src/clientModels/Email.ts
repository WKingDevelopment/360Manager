import { isEmptyOrSpace } from "../functions/validations_Functions";

class Email {
    constructor (public email:string) { }
    //#region Fields and Props
    
    public get isValid () : boolean {
        return re.test(String(this.email).toLowerCase());
    }
    //#endregion

    //#region Public Functions
    public emailCheck = (emailList:Email[]):string => {
        if (isEmptyOrSpace(this.email)) { return 'Please enter an email.';}
        if (!this.isValid) { return `'${this.email}' is not in the correct format for an email.`;}
        return '';
    }
    //#endregion
}

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export { Email }
