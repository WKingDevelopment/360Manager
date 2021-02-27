import React, { useEffect, useState } from 'react';
import { Router, Switch } from 'react-router-dom';
import { IAuthenticatedProps } from '../App';
import { RouteInfo } from '../clientModels/RouteInfo';
import { AboutPage } from '../components/pages/about/AboutPage';
import { ConfigurationPage } from '../components/pages/ConfigurationPage';
import { HomePage } from '../components/pages/HomePage';
import { NoticeBoardPage } from '../components/pages/NoticeBoardPage';
import history from '../history/history';
import { SignedInRoute } from './SignedInRoute';
import { PublicRoute } from './PublicRoute';
import { TeamRoute } from './TeamRoute';
import { TeamSelectionPage } from '../components/pages/TeamSelectionPage';

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
    return routesInfo.map((rt:RouteInfo,i) => {
        if (rt.restriction === RouteRestriction.team) {
            return <TeamRoute teamId={undefined} key={i} authenticated={authenticated} exact path={rt.path} component={rt.component} />
        } else if (rt.restriction === RouteRestriction.signedIn)  {
            return <SignedInRoute key={i} authenticated={authenticated} exact path={rt.path} component={rt.component} />
        } else if (rt.restriction === RouteRestriction.open) {
            if (rt.label) {
                return <PublicRoute key={i} authenticated={authenticated} exact path={rt.path} component={rt.component} />
            } else {
                return <PublicRoute key={i} authenticated={authenticated} component={rt.component} />
            }
        }
    });
}

enum RouteRestriction {
    open,
    signedIn,
    team //User required teamId to see these pages
  }

// Use this to add new routes, this populates the appbar in this order
const routesInfo: RouteInfo[] = [
    new RouteInfo('Your Teams', '/TeamSelection', RouteRestriction.signedIn, TeamSelectionPage),
    new RouteInfo('Notice Board', '/NoticeBoard', RouteRestriction.team, NoticeBoardPage),
    new RouteInfo('Configuration', '/Configuration', RouteRestriction.team, ConfigurationPage),
    new RouteInfo('About us', '/About', RouteRestriction.open, AboutPage),
    // This one has to be last
    new RouteInfo(undefined, undefined, RouteRestriction.open, HomePage)
]

export { Routers, routesInfo, RouteRestriction };