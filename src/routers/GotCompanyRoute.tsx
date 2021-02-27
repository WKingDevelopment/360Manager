import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Appbar } from '../components/shared components/appbar/Appbar';
import { ISignedInRouteProps } from './SignedInRoute';

function GotCompanyRoute({ component: Component, ...rest }: IGotCompanyRouteProps) {
    const [authenticated, setAuthenticated] = useState<boolean>(rest.authenticated)
    const [companyId, setCompanyId] = useState<string|undefined>(undefined)

    useEffect(() => {
        setAuthenticated(rest.authenticated)
        setCompanyId(rest.companyId)
    },[rest.authenticated])

    if (!Component) return null;
    if (authenticated) {
        if (companyId) {
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
            return <Redirect to="/CompanySelection" />
        }
    } else {
        return <Redirect to="/" />
    }
}

export interface IGotCompanyRouteProps extends ISignedInRouteProps {
    companyId:string  
}

export { GotCompanyRoute }