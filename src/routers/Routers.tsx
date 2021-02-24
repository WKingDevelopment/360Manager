import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { IAuthenticatedProps } from '../App';
import { RouteInfo } from '../clientModels/RouteInfo';
import { ConfigurationPage } from '../components/pages/ConfigurationPage';
import { HomePage } from '../components/pages/HomePage';
import { NoticeBoardPage } from '../components/pages/NoticeBoardPage';
import history from '../history/history';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const Routers = (props:IAuthenticatedProps) => (
    <Router history={history}>
      <Switch>
        {routesInfo.map((rt) => {
            if(rt.open && rt.label !== 'home') {
                return <PublicRoute exact path={rt.path} component={rt.component}/> 
            } else {
                return <PrivateRoute authenticated={props.authenticated} exact path={rt.path} component={rt.component} />
            }
        })}
        <PublicRoute component={HomePage}/> 
      </Switch>
    </Router>
);

{/* <PrivateRoute authenticated={props.authenticated} exact path='/NoticeBoard' component={NoticeBoardPage} />
        <PrivateRoute authenticated={props.authenticated} exact path='/Configuration' component={ConfigurationPage} />
        <PublicRoute component={HomePage}/> */}

const routesInfo:RouteInfo[] = [
    new RouteInfo('Home','/',true, HomePage),
    new RouteInfo('Configuration','/Configuration',false, ConfigurationPage),
    new RouteInfo('NoticeBoard','/NoticeBoard',false, NoticeBoardPage),
]

export { Routers, routesInfo };