import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/user-context';

const TeamSelectionPage = () => {
    const { user } = useContext(UserContext);
    return (
        <div>
            Team Selection Page
            {(user.user?.associatedTeams && user.user?.associatedTeams.length > 0) ? user.user?.associatedTeams.map((team,i) => {
                return (
                <div key={i}>
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