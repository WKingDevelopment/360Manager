import { reducerConstants } from "../constants/reducer-Constants"
import { InitialFieldsType } from "../contexts/fields-context"
import { Fields } from "../data classes/Fields"

const fieldsReducer = (state:InitialFieldsType,action:fieldsAction): InitialFieldsType => {
    switch (action.type) {
        case reducerConstants.state:
            return {
                ...state
            }
        case reducerConstants.setFields:
            return {
                ...state,
                fields: action.fields
            }
        }
        return state
}
type fieldsAction = {
    type: string,
    fields:Fields,
}

export { fieldsReducer } 