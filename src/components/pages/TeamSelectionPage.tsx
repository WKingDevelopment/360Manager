import React, { useContext, useEffect } from 'react'
import { FieldsContext } from '../../contexts/fields-context';
import { PhasesContext } from '../../contexts/phases-context';
import { UserContext } from '../../contexts/user-context';
import { Phases } from '../../data classes/Phases';
import { getPhasesConfig } from '../../firebase/cRUD_Functions';
import history from '../../history/history';
import { phasesReducerTypes } from '../../reducers/phases-Reducer';
import { UserReducerTypes } from '../../reducers/user-Reducer';

const TeamSelectionPage = () => {
    const { user, userDispatch } = useContext(UserContext);
    const {phasesConfig, phasesDispatch} = useContext(PhasesContext)
    const {fieldsConfig, fieldsDispatch} = useContext(FieldsContext)

    const onTeamSelected = async (teamId:string) => {
        let collected = false;
        await getPhasesConfig(teamId).then((phases:Phases|undefined) => {
            if(phases) {
                userDispatch({type:UserReducerTypes.setActiveTeam, activeTeamId:teamId})
                phasesDispatch({type:phasesReducerTypes.set,action:phases})
                collected = true;   
            }
        })
        // getFieldsConfig
        if (collected) {
            history.push('/NoticeBoard')
        }
    }

    return (
        <div>
            <div className='page'>
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
        </div>
    )
}

export { TeamSelectionPage }