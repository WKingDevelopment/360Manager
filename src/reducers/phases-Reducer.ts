import { reducerConstants } from "../constants/reducer-Constants"
import { InitialPhasesType } from "../contexts/phases-context"
import { Phases } from "../data classes/Phases"

const phasesReducer = (state:InitialPhasesType,action:phasesAction): InitialPhasesType => {
    switch (action.type) {
        case "STATE":
            console.log(state)
        case reducerConstants.setPhases:
            return {
                ...state,
                phases: action.phases
            }
        }
        return state
}
type phasesAction = {
    type: string,
    phases:Phases,
}

const phasesReducerTypes = {
    set: "SET_FIELDS",
}

export { phasesReducer, phasesReducerTypes } 