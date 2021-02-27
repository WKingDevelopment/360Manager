import React, { useEffect, useReducer, useState } from 'react';
import './styling/styles.scss'
import { firebase } from './firebase/firebase';
import { Routers } from './routers/Routers';
import { getUser } from './firebase/CRUD_Functions';
import { userReducer, userReducerTypes } from './reducers/user-Reducer';
import { InitialUserType, UserContext } from './contexts/user-context';

export const App = () => {
 const initUser: InitialUserType = { user: undefined };
 const [user, userDispatch] = useReducer(userReducer, initUser)
 const [email, setEmail] = useState<string|undefined>(undefined)

 useEffect(() => {
   if(email) {
      getUser(email).then((userData) => {
        if(userData) {
          userDispatch({user:userData, type: userReducerTypes.set})
        }
      })
   } else {
    userDispatch({user:undefined, type: userReducerTypes.set})
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

  return (
    <div>
      <UserContext.Provider value={{user,userDispatch}}>
        <Routers authenticated={email !== undefined} />
      </UserContext.Provider>
    </div>
  );
}


export interface IAuthenticatedProps {
  authenticated:boolean
}

