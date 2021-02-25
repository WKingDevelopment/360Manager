import React, { useEffect, useState } from 'react';
import { Route, RouteProps } from 'react-router';
import { Appbar } from '../components/shared components/appbar/Appbar';
import { IRouteProps } from './PrivateRoute';

function PublicRoute({ component: Component, ...rest }: IRouteProps) {
    const [authenticated, setAuthenticated] = useState<boolean>(rest.authenticated)
    useEffect(() => {
        setAuthenticated(rest.authenticated)
    },[rest.authenticated])

    if (!Component) return null;
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