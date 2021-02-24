import { isEmptyOrSpace } from "../functions/validations_Functions";

export class Alert {
    constructor (private _text: string, public red:boolean) { }

    public get text() {
        const d = new Date();
        return isEmptyOrSpace(this._text) ? '' : `${this._text} - ${d.getHours().toString()}:${d.getMinutes().toString()}:${d.getSeconds().toString()}`
    }
}
