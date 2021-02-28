import React, { useEffect, useState } from 'react';
import { Redirect, Route, useLocation } from 'react-router';
import { Appbar } from '../components/shared components/appbar/Appbar';
import { ISignedInRouteProps, LocationState } from './SignedInRoute';

function PublicRoute({ component: Component, ...rest }: ISignedInRouteProps) {
    const [authenticated, setAuthenticated] = useState<boolean>(rest.authenticated)
    const location = useLocation<LocationState>();
    const { priorPath } = location.state;
    
    useEffect(() => {
        setAuthenticated(rest.authenticated)
    },[rest.authenticated])

    if (!Component) return null;
    if (authenticated && priorPath) {
        return <Redirect to={priorPath}
        />
    }
    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    <div>
                        <Appbar authenticated={authenticated}  />
                        <Component {...props}/>
                    </div>
                )
            }
            }
        />
    );
}


export { PublicRoute }