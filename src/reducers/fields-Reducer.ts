import { reducerConstants } from "../constants/reducer-Constants"
import { InitialFieldsType } from "../contexts/fields-context"
import { Fields } from "../data classes/Fields"

const fieldsReducer = (state:InitialFieldsType,action:fieldsAction): InitialFieldsType => {
    switch (action.type) {
        case reducerConstants.state:
            console.log(state)
        case fieldsReducerTypes.setFields:
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

const fieldsReducerTypes = {
    setFields: "SET_FIELDS",
}

export { fieldsReducer, fieldsReducerTypes} 