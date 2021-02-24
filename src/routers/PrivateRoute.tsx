
import React from 'react';
import { Route, RouteProps } from 'react-router';
import { Redirect } from 'react-router-dom';
import { IAuthenticatedProps } from '../App';
import { Appbar } from '../components/shared components/appbar/Appbar';

function PrivateRoute({ component: Component, ...rest }: IRouteProps) {
    if (!Component) return null;
    if (rest.authenticated) {
        return (
            <Route
                {...rest}
                render={(props) => {
                    return (
                        <div>
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

export interface IRouteProps extends IAuthenticatedProps, RouteProps {
}

export { PrivateRoute }