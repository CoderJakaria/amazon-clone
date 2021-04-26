import React, { useEffect } from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header__component/Header';
import Home from './pages/home/Home';
import Checkout from './pages/checkout__page/Checkout';
import Login from './pages/login__page/Login';
import { useStateValue } from './lib/StateProvider';
import { auth } from './firebase';

function App() {
  
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

 

  return (
    <div className="App">
       <Switch>
          <Route exact path="/checkout">
              <Header />
              <Checkout />
          </Route>

          <Route path="/login">
              <Login />
          </Route>
          
          <Route path="/">
              <Header />
              <Home />
          </Route>
       </Switch>
    </div>
  );
}

export default App;