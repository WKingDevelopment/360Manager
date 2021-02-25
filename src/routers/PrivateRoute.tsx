
import React, { useEffect, useState } from 'react';
import { Route, RouteProps } from 'react-router';
import { Redirect } from 'react-router-dom';
import { IAuthenticatedProps } from '../App';
import { Appbar } from '../components/shared components/appbar/Appbar';

function PrivateRoute({ component: Component, ...rest }: IRouteProps) {
    const [authenticated, setAuthenticated] = useState<boolean>(rest.authenticated)
    useEffect(() => {
        setAuthenticated(rest.authenticated)
    },[rest.authenticated])

    if (!Component) return null;
    if (authenticated) {
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
        return <Redirect to="/" />
    }
}

export interface IRouteProps extends IAuthenticatedProps,RouteProps {
}

export { PrivateRoute }