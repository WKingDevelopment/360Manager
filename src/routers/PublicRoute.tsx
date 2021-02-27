import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { Appbar } from '../components/shared components/appbar/Appbar';
import { ISignedInRouteProps } from './SignedInRoute';

function PublicRoute({ component: Component, ...rest }: ISignedInRouteProps) {
    const [authenticated, setAuthenticated] = useState<boolean>(rest.authenticated)

    console.log(rest.path)

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