import React, { useEffect, useState } from 'react';
import './styling/styles.scss'
import { firebase } from './firebase/firebase';
import { Appbar } from './components/shared components/appbar/Appbar';
import { Routers } from './routers/Routers';

export const App = () => {
 const [authenticated, setAuthenticated] = useState<boolean>(false)
  useEffect(() => {
  }, []);

  firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
    if (user) {
      setAuthenticated(true);
    } else {
      console.log('Logged out')
      setAuthenticated(false);
    }
  })

  return (
    <div>
      <Routers authenticated={authenticated} />
    </div>
  );
}


export interface IAuthenticatedProps {
  authenticated:boolean
}

