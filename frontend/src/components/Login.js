import React,{useState} from "react";
import { Button } from "@mui/base";
import '../Styles/Login.css'


 function Login() {
    const [isRPActive, setIsRPActive] = useState(false);


    const handleClick = () => {
        
        setIsRPActive(current => !current);
      };
      

    return(
      <div className="login">

<div className="container" id="container">
        <div className="form-container sign-up-container">
            <form action="#">
                <h1>Sign Up</h1>
               
                <span>Use your Email for registration</span>
                <label>
                    <input type="text" placeholder="Name"/>
                </label>
                <label>
                    <input type="email" placeholder="Email"/>
                </label>
                <label>
                    <input type="password" placeholder="Password"/>
                </label>
                <button >Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
                
                <span> Or sign in using E-Mail Address</span>
                <label>
                    <input type="email" placeholder="Email"/>
                </label>
                <label>
                    <input type="password" placeholder="Password"/>
                </label>
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Log in</h1>
                    <p>Sign in here if you already have an account </p>
                    <button onClick={handleClick} className={isRPActive ? 'right-panel-active':'' } id="signIn">Sign In</button>
                    {/* <Button onClick={handleClick}></Button> */}
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Create, Account!</h1>
                    <p>Sign up if you still don't have an account ... </p>
                    <button onClick={handleClick} className={isRPActive ? 'right-panel-active':''} id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>


      </div>  
    )
}


export default Login;