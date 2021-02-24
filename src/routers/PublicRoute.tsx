import React, { useState } from 'react';
import { Route, RouteProps } from 'react-router';
import { Appbar } from '../components/shared components/appbar/Appbar';

function PublicRoute({ component: Component, ...rest }: RouteProps) {
    if (!Component) return null;
    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    <div>
                        <Component {...props}/>
                    </div>
                )
            }
            }
        />
    );
}

export { PublicRoute }