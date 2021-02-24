import { isEmptyOrSpace } from "../functions/validations_Functions";

export { Field, fieldArrayRemoveByIndex }
class Field {
    //Object { id: 1, seq: 0, mandatoryPhase: "Complete", label: "House Number", type: "Number", size: "Small", summary: true, companyId: 0 }
    constructor (public label: string, public mandatoryPhase: string, public type:string, public size:string, public summary: boolean) { }

    //#region Public Methods
    public ValidityCheck = (fields:Field[]):string => {
        let error = '';
        if(isEmptyOrSpace(this.label)) {
            error = 'Field label cannot be empty.';
        } else if(isEmptyOrSpace(this.type)) {
            error = 'Field type cannot be empty.';
        } else if(isEmptyOrSpace(this.size)) {
            error = 'Field size cannot be empty.';
        } else if(this.labelInList(fields)) {
            error = `Field ${this.label} already exists`;
        }
        return error 
    }

    public containsFieldLabel = (list:string[]):boolean => {
        let result = false;
        for (let i=0;i<list.length;i++) {
            if(list[i] === this.label) {
                return true;
            };
        };
        return result;
    }
    //#endregion

    //#region Private Methods
    private labelInList = (list:Field[]):boolean => {
        let result = false;
        for (let i=0;i<list.length;i++) {
            if(list[i].label === this.label) {
                return true;
            };
        };
        return result;
    }
    //#endregion
}

const fieldArrayRemoveByIndex = (fields: Field[], index: number): Field[] => {
   let res:Field[] = [];
   for(let i=0;i<fields.length;i++) {
       if(i !== index) {
        res = res.concat(fields[i])
       }
   }
   return res;
}