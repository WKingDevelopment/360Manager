import { constants } from "../constants/constants";
import { isEmptyOrSpace } from "../functions/validations_Functions";

export class Phases {
    constructor(public phaseList: string[] = constants.disabledPhases) {}

    //#region Public Methods & Functions
    public insertPhase = (phase:string):Phases => {
        let clone = new Phases(this.phaseList)
        this.addPhaseToList(phase,clone)
        return clone;
    }

    public setPhases = (phases:string[]):Phases => {
        const result = new Phases(phases)
        return result;
    }

    public checkNewPhase = (phase:string) => {
        if (isEmptyOrSpace(phase)) {
            return 'Label cannot be empty.'
        }
        if (this.phaseList.includes(phase)) {
            return `Phase ${phase} already exists in list.`
        }
        if (phase.includes('*')) {
            return `Phase includes invalid character.`
        }

        if (phase.length > maxPhaseLength) {
            return `Phase has too many characters. Max: ${maxPhaseLength.toString()} `
        }
        return undefined
    }

    public removePhaseByIndex = (index:number):Phases => {
        let list: string[] = []
        for (let i=0;i<this.phaseList.length;i++) {
            if (i !== index) {
                list = list.concat([this.phaseList[i]])
            }
        }
        return new Phases(list)
    }

    // Check if the first and last phases the immovable values
    public postOrderChangeChecks = (newPhases: string[]): boolean => {
        if ((newPhases[0] === 'Unphased') && (newPhases[newPhases.length-1] === 'Complete')) {
            return true;
        }
        return false;
    }
    //#endregion

    private addPhaseToList = (phase:string,phaseObj:Phases) => {
        let result:string[] = [];
        for (let i=0;i<phaseObj.phaseList.length;i++) {
            if (i === phaseObj.phaseList.length-1) {
                result = result.concat([phase])
            }
            result = result.concat([phaseObj.phaseList[i]])
        }
        phaseObj.phaseList = result;
    }
}

const maxPhaseLength = 15;
