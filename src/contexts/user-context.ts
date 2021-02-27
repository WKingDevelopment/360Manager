import React from "react"
import { User } from "../clientModels/User"

export type InitialUserType = {
    user: User | undefined 
  }

const initialState: InitialUserType = {
    user: undefined
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
