import React from "react"
import { User } from "../clientModels/User"

export type InitialUserType = {
    user: User | undefined
    activeTeamId: string | undefined
  }

const initialState: InitialUserType = {
    user: undefined,
    activeTeamId:undefined
}

const UserContext = React.createContext<
{
    user:InitialUserType,
    userDispatch: React.Dispatch<any>;
}>
(
    {
        user:initialState,
        userDispatch: () => null
    }
)

export { UserContext }
