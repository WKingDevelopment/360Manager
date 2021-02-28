import React, { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Appbar } from '../components/shared components/appbar/Appbar';
import { UserContext } from '../contexts/user-context';
import { ISignedInRouteProps } from './SignedInRoute';

function TeamRoute({ component: Component, ...rest }: ISignedInRouteProps) {
    const [authenticated, setAuthenticated] = useState<boolean>(rest.authenticated)
    const { user, userDispatch } = useContext(UserContext);
    useEffect(() => {
        setAuthenticated(rest.authenticated)
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