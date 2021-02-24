import { InitialSessionType } from "../contexts/session-context"
import { Session } from "../data classes/Session"

const sessionReducer = (state:InitialSessionType,action:ISessionAction): InitialSessionType => {
    switch (action.type) {
        case 'State':
            return {
                ...state
            }
        }
        return state
}
type ISessionAction = {
    type: string,
    session:Session
}



export { sessionReducer } 