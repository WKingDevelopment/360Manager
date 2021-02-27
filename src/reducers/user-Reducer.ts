import { User } from "../clientModels/User"
import { InitialUserType } from "../contexts/user-context"

const userReducer = (state:InitialUserType, action:IUserAction): InitialUserType => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'State':
            return {
                ...state
            }
        }
        return state
}
type IUserAction = {
    type: string,
    user: User | undefined
}

const userReducerTypes = {
    set:"SET_USER"
}

export { userReducer, userReducerTypes } 