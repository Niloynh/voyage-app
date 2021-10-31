import React, { useState } from 'react';
import initializeAuthentication from '../../Firebase/Firebase.init';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

// Firebase Auth
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import useAuth from '../../AuthProvider/useAuth';

// initialize Authentication
initializeAuthentication()

// firebase auth
const auth = getAuth()

const Login = () => {
    // State
    const [user, setUser] = useState([])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false)


// distructuring 
    const {signInUsingGoogle} = useAuth()

    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const handleSignIn = ()=>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_url)
        })
    }

// reload hanlder
const handleReload = e => {
    e.preventDefault()
    console.log(user)

    // error handle
    if(password < 6){
        setError('Password must be at least 6 character')
    }

    // user hanlde
    if(isLogin){
        userSignIn(email, password)
    }
    else{
        newUser(email, password);
    }
   
}
// update Profile
const userUpdate = () => {
    updateProfile(auth.currentUser, {displayName:name})
    .then(result => { })
}

// user sign up
const newUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
        setUser(result)

        setError('')
        userUpdate()
    })
    .catch(error =>{
        setError(error.message)
    })
    
} 

// user sign in
const userSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(result =>{
        setUser(result)
        setError('')
    })
    .catch(error =>{
        setError(error.message)
    })
}

// sign handler 
const handleName = e => {
    setName(e.target.value)
}

const  handleEmail = e => {
    setEmail(e.target.value)
}
const  handlePassword = e => {
    setPassword(e.target.value)
}

const toggleHandle = e => {
    setIsLogin(e.target.checked)
}


    return (
        // login section
        <div className="form-container">
            <div className="mt-3 text-center">
                <h1 className=" text-uppercase">Sign <span className="sign-up">{isLogin ? "In" : "Up"}</span></h1>
                <form className="full-form" onSubmit={handleReload}>
                    <div className="input-level">
                        {!isLogin &&
                            <input onBlur={handleName}  type="text" name="" id="" placeholder="Name" className="form-control"/>}
                        <br />
                        <input onBlur={handleEmail} type="email" name="" id="" placeholder="Email" className="form-control" required/>
                        <br />
                        <input onBlur={handlePassword} type="password" name="" id="" placeholder="Password" className="form-control mb-3" required/>
                    </div>
                        <input onChange={toggleHandle} type="checkbox" className="form-check-input fs-5" id="exampleCheck1" />
                        <label className="form-check-label mx-3 fw-bold fs-5"  for="exampleCheck1">Already <span className="sign-up">Register</span> ?</label>
                         <br />
                         <span id="liveAlertPlaceholder" className="error-style   mx-auto mt-3 text-danger">{error}</span>
                         <br />
                        <button className="login-btn mb-3" id="liveAlertBtn">{isLogin ? "Login" : "Register"}</button>
                </form> 

                <div><span className="fw-bold">----------------or----------------</span></div>

                    <button onClick={handleSignIn} className="google-btn mt-3"><img  className="google-icon" src="https://i.ibb.co/1mvVhk6/google.png" alt="" /> GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;