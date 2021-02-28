import { isEmptyOrSpace } from "../functions/validations_Functions";

export class User {
  constructor(
    public displayName: string,
    public email: string,
    public associatedTeams: string[],
    public defaultTeamId: string
  ) { }

  public get isValid(): boolean {
    return re.test(String(this.email).toLowerCase());
  }
  //#endregion

  //#region Public Functions
  public emailCheck = (): string => {
    if (isEmptyOrSpace(this.email)) { return 'Please enter an email.'; }
    if (!this.isValid) { return `'${this.email}' is not in the correct format for an email.`; }
    return '';
  }
  //#endregion
}

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;