import React from 'react'
import { Fields } from '../data classes/Fields'
import { Phases } from '../data classes/Phases'

export type InitialFieldsType = {
    fields: Fields
  }

const initialState = {
    fields: new Fields()
}

const FieldsContext = React.createContext<
{
    fieldsConfig:InitialFieldsType,
    fieldsDispatch: React.Dispatch<any>;
}>
(
    {
        fieldsConfig:initialState,
        fieldsDispatch: () => null
    }
)

export { FieldsContext }


