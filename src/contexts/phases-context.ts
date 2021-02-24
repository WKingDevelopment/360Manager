import React from 'react'
import { Phases } from '../data classes/Phases'

export type InitialPhasesType = {
    phases: Phases
  }

const initialState = {
    phases: new Phases()
}

const PhasesContext = React.createContext<
{
    phasesConfig:InitialPhasesType,
    phasesDispatch: React.Dispatch<any>;
}>
(
    {
        phasesConfig:initialState,
        phasesDispatch: () => null
    }
)

export { PhasesContext }


