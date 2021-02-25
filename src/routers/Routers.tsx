import React, { useEffect, useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { IAuthenticatedProps } from '../App';
import { RouteInfo } from '../clientModels/RouteInfo';
import { AboutPage } from '../components/pages/about/AboutPage';
import { ConfigurationPage } from '../components/pages/ConfigurationPage';
import { HomePage } from '../components/pages/HomePage';
import { NoticeBoardPage } from '../components/pages/NoticeBoardPage';
import history from '../history/history';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const Routers = (props: IAuthenticatedProps) => {
    const [authenticated, setAuthentication] = useState<boolean>(props.authenticated);

    useEffect(() => {
        setAuthentication(props.authenticated)
    }, [props.authenticated])


    return (
        <Router history={history}>
            <Switch>
                {getRoutes(authenticated)}
            </Switch>
        </Router>
    )
};

const getRoutes = (authenticated: boolean) => {
    const rtn = routesInfo.map((rt,i) => {
        if (!rt.open) {
            return <PrivateRoute key={i} authenticated={authenticated} exact path={rt.path} component={rt.component} />
        } else if (rt.label) {
            return <PublicRoute key={i} authenticated={authenticated} exact path={rt.path} component={rt.component} />
        }
        else {
            return <PublicRoute key={i} authenticated={authenticated} component={rt.component} />
        }
    })
    return rtn;
}
const routesInfo: RouteInfo[] = [
    new RouteInfo('Configuration', '/Configuration', false, ConfigurationPage),
    new RouteInfo('NoticeBoard', '/NoticeBoard', false, NoticeBoardPage),
    new RouteInfo('About us', '/About', true, AboutPage),
    // This one has to be last
    new RouteInfo(undefined, undefined, true, HomePage)
]

export { Routers, routesInfo };