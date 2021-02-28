import { User } from "../clientModels/User"
import { InitialUserType } from "../contexts/user-context"

const userReducer = (state:InitialUserType, action:IUserAction): InitialUserType => {
    switch (action.type) {
        case UserReducerTypes.setUser:
            return {
                ...state,
                user: action.user,
            }
        case UserReducerTypes.clearUser:
            return {
                ...state,
                user: undefined,
            }
        case UserReducerTypes.setActiveTeam:
            return {
                ...state,
                activeTeamId: action.activeTeamId,
            }
        case UserReducerTypes.clearActiveTeam:
            return {
                ...state,
                activeTeamId: undefined,
            }
        case UserReducerTypes.setUserAndActiveTeam:
            return {
                ...state,
                user: action.user,
                activeTeamId: action.activeTeamId,
            }
        case UserReducerTypes.state:
            console.log(state)
        }
        return state
}
type IUserAction = {
    type: UserReducerTypes,
    user: User | undefined,
    activeTeamId: string | undefined
}

enum UserReducerTypes {
    setUser,
    clearUser,
    setActiveTeam,
    clearActiveTeam,
    state,
    setUserAndActiveTeam
  }

export { userReducer, UserReducerTypes } 