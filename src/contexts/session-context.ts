import React from 'react'
import { Session } from '../data classes/Session'

export type InitialSessionType = {
    session: Session
  }

const initialState: InitialSessionType = {
    session: new Session()
}

const SessionContext = React.createContext<
{
    session:InitialSessionType,
    sessionDispatch: React.Dispatch<any>;
}>
(
    {
        session:initialState,
        sessionDispatch: () => null
    }
)

export { SessionContext }
