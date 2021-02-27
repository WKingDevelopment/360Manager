import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Appbar } from '../components/shared components/appbar/Appbar';
import { ISignedInRouteProps } from './SignedInRoute';

function TeamRoute({ component: Component, ...rest }: ITeamRouteProps) {
    const [authenticated, setAuthenticated] = useState<boolean>(rest.authenticated)
    const [teamId, setTeamId] = useState<string|undefined>(rest.teamId)

    useEffect(() => {
        setAuthenticated(rest.authenticated)
        setTeamId(rest.teamId)
    },[rest.authenticated])

    if (!Component) return null;
    if (authenticated) {
        if (teamId) {
            return (
                <Route
                    {...rest}
                    render={(props) => {
                        return (
                            <div>
                                <Appbar authenticated={authenticated}  />
                                <Component {...props} />
                            </div>
                        )
                    }
                    }
                />
            );
        } else {
            return <Redirect to="/TeamSelection" />
        }
    } else {
        return <Redirect to="/" />
    }
}

export interface ITeamRouteProps extends ISignedInRouteProps {
    teamId:string|undefined
}

export { TeamRoute }