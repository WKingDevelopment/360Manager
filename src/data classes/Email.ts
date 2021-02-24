import { isEmptyOrSpace } from "../functions/validations_Functions";

class Email {
    constructor (public email:string = '') { }
    //#region Fields and Props
    
    public get isValid () : boolean {
        return re.test(String(this.email).toLowerCase());
    }
    //#endregion

    //#region Public Functions
    public emailCheck = (emailList:Email[]):string => {
        if (isEmptyOrSpace(this.email)) { return 'Please enter an email.';}
        if (!this.isValid) { return `'${this.email}' is not in the correct format for an email.`;}
        if (arrayContainsEmail(this,emailList)) { return `'${this.email}' already exists in your list of emails to add.`;}
        return '';
    }
    //#endregion
}

const arrayContainsEmail = (email:Email,array:Email[]) => {
    let result = false;
    for (let i=0;i<array.length;i++) {
        if(email.email === array[i].email) {
            return true
        }
    }
    return result
}

const arrayRemoveEmail = (email:Email, array:Email[]) => {
    let result = [];
    for (let i=0;i<array.length;i++) {
        const temp = array[i]
        if(email.email !== temp.email) {
            result.push(temp)
        }
    }
    return result
}

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export { Email,arrayRemoveEmail, arrayContainsEmail}
