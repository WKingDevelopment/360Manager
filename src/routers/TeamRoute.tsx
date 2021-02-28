import React, { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Appbar } from '../components/shared components/appbar/Appbar';
import { PhasesContext } from '../contexts/phases-context';
import { UserContext } from '../contexts/user-context';
import { Phases } from '../data classes/Phases';
import { getPhasesConfig } from '../firebase/cRUD_Functions';
import { phasesReducerTypes } from '../reducers/phases-Reducer';
import { UserReducerTypes } from '../reducers/user-Reducer';
import { ISignedInRouteProps } from './SignedInRoute';

function TeamRoute({ component: Component, ...rest }: ISignedInRouteProps) {
    const [authenticated, setAuthenticated] = useState<boolean>(rest.authenticated)
    const { user, userDispatch } = useContext(UserContext);
    const { phasesConfig, phasesDispatch} = useContext(PhasesContext);
    useEffect(() => {
        setAuthenticated(rest.authenticated)
        if (!phasesConfig) {
            getPhasesConfig(user.activeTeamId).then((phases:Phases|undefined) => {
                if(phases) {
                    phasesDispatch({type:phasesReducerTypes.set,action:phases}) 
                }
            })
        }
    },[rest.authenticated])

    if (!Component) return null;
    if (authenticated) {
        if (user.activeTeamId) {
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

export { TeamRoute }