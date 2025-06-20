import React, { useEffect, useState } from 'react'
import axios from "axios";

import SignUp from "../../assets/images/signup.png";
import "./signup.css"

function Signup() {

    const [userLoginMethod, setUserLoginMethod] = useState(false);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:3030/register", {name, username, email, password});
        window.location.href = "http://localhost:5174/";
        
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:3030/login", {email, password});
        window.location.href = "http://localhost:5174/";
        
    }

    return ( 
        
        <div className="container p-3 mt-5 p-5">            

            <div className="row cardContainer-login">
                <div className="col-6 cardContainer_left-login">

                    <p className="cardleft_heading-login"> {userLoginMethod ? "Sign In" : "Sign Up"} </p>

                    <form onSubmit={handleSignup} className="inputContainers-login">
                                        
                        {!userLoginMethod && <div className="inputRow-login">
                        <input className="inputFiled-login" type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                        <input className="inputFiled-login" type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />                     
                        </div>}


                        <input className="inputFiled-login" placeholder="Enter email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <input className="inputFiled-login" placeholder="Enter password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                            
                                            
                        <button type="submit" className="buttonWithOutline-login" onClick={(e) => {
                            if(userLoginMethod) {
                                handleLogin(e);
                                console.log("login");
                            } else {
                                handleSignup(e);
                                console.log("signup");
                            }
                        }}>
                            {userLoginMethod ? "Sign In" : "Sign Up"}
                        </button>
                    </form>                        
                </div>

                <div className="col-6 cardContainer_right-login">
                    {userLoginMethod ? <p>Dont't Have An Account?</p> : <p>Already Have An Account?</p>}

                    <div style={{textAlign : "center"}} onClick={() => {
                        setUserLoginMethod(!userLoginMethod)
                        }} className="buttonWithOutline-login"
                    >

                        <p>{userLoginMethod ? "Sign up" : "Sign In"}</p>   
                    
                    </div>
                </div>
            </div>
                        
           

            <div className="row mb-5 p-5">
                    <img src={SignUp} alt="SignUp Image"/>
            </div>

            <div  className="text-muted pl-5 mt-5" style={{textAlign : "center"}}>
            <p>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.</p>

            <p>By submitting your contact details, you authorize Zerodha to contact you even if you are registered on DND & conduct online KYC for trading & demat account opening as per KRA regulations and PMLA guidelines.</p>

            <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
            </div>

            
        </div>

    );
}

export default Signup;