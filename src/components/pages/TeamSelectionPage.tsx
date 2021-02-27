import React, { useContext, useEffect } from 'react'
import { Configuration } from '../../clientModels/Configuration';
import { FieldsContext } from '../../contexts/fields-context';
import { PhasesContext } from '../../contexts/phases-context';
import { UserContext } from '../../contexts/user-context';
import { getTeamConfig } from '../../firebase/cRUD_Functions';
import { phasesReducerTypes } from '../../reducers/phases-Reducer';

const TeamSelectionPage = () => {
    const { user } = useContext(UserContext);
    const {phasesConfig, phasesDispatch} = useContext(PhasesContext)
    const {fieldsConfig, fieldsDispatch} = useContext(FieldsContext)

    const onTeamSelected = (teamId:string) => {
        getTeamConfig(teamId).then((config:Configuration|undefined) => {
            phasesDispatch({type:phasesReducerTypes.setPhases,action:config?.phases})
        })
    }

    return (
        <div>
            Team Selection Page
            {(user.user?.associatedTeams && user.user?.associatedTeams.length > 0) ? user.user?.associatedTeams.map((team,i) => {
                return (
                <div key={i} onClick={() => {onTeamSelected(team)}}>
                    {team}
                </div>
            )}) : 
            <p>
                You are not a member of any teams. Contact your team admin to add you to the team.
            </p>}
        </div>
    )
}

export { TeamSelectionPage }