import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const login = (e) => {
        e.preventDefault(); // this stops the refresh
        auth.signInWithEmailAndPassword(email, password)
          .then(auth => {
              history.push("/")
          })
          .catch(err => alert(err.message))
    }

    const register = (e) => {
        e.preventDefault(); // this stops the refresh
        auth.createUserWithEmailAndPassword(email, password)
          .then(auth => {
            history.push("/")
          })
          .catch(err => alert(err.message))
    }

    return (
        <div className="login">
            <Link to="/">
               <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo"/>
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                   <h5>Email</h5>
                   <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                   <h5>Password</h5>
                   <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)}/>

                   <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
                </form>

                <p>By signing-in you agree to Amazon's Conditions of use & Sale. Pls see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
