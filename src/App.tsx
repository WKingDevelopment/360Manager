import React, { useEffect, useReducer, useState } from 'react';
import './styling/styles.scss'
import { firebase } from './firebase/firebase';
import { Routers } from './routers/Routers';
import { getUser } from './firebase/cRUD_Functions';
import { userReducer, UserReducerTypes } from './reducers/user-Reducer';
import { InitialUserType, UserContext } from './contexts/user-context';
import history from './history/history';
import { PhasesContext, InitialPhasesType } from './contexts/phases-context';
import { Phases } from './data classes/Phases';
import { phasesReducer } from './reducers/phases-Reducer';

export const App = () => {
 const initUser: InitialUserType = { user: undefined, activeTeamId:undefined };
 const initPhases: InitialPhasesType = { phases:new Phases() };
 const [user, userDispatch] = useReducer(userReducer, initUser);
 const [phasesConfig, phasesDispatch] = useReducer(phasesReducer, initPhases)
 const [email, setEmail] = useState<string|undefined>(undefined)

 useEffect(() => {
   if(email) {
      getUser(email).then((userData) => {
        if(userData) {
          if(userData.defaultTeamId) {
            userDispatch({user:userData, activeTeamId:userData.defaultTeamId ,type:UserReducerTypes.setUserAndActiveTeam})
            history.push('/NoticeBoard')
          } else {
            userDispatch({user:userData, activeTeamId:undefined ,type:UserReducerTypes.setUser}) 
          }
        } 
      })
   } else {
    userDispatch({user:undefined, activeTeamId:undefined, type: UserReducerTypes.clearUser})
   }
 },[email])

  firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
    if (user && user.email) {
      console.log('Logged in from firebase')
      setEmail(user.email);
    } else {
      console.log('Logged out')
      setEmail(undefined)
    }
  })
  console.log('authenticated', email !== undefined)
  return (
    <div>
      <PhasesContext.Provider value={{phasesConfig, phasesDispatch}}>
      <UserContext.Provider value={{user,userDispatch}}>
        <Routers authenticated={email !== undefined} />
      </UserContext.Provider>
      </PhasesContext.Provider>
    </div>
  );
}


export interface IAuthenticatedProps {
  authenticated:boolean
}

