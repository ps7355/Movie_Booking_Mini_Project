import React from "react";
import {Link,useNavigate} from 'react-router-dom';
import './signup.css'
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useToast,Spinner } from "@chakra-ui/react";

function SignUp(){

    const[registeremail,setregisteremail]=useState("");
    const[registerpassword,setregisterpassword]=useState("");
    const navigate = useNavigate();
    const toast = useToast();
    const[loading,setloading]=useState(false);

    const Signup = async(event)=>{
        event.preventDefault();
        setloading(true);
        try{
            await createUserWithEmailAndPassword(auth,registeremail,registerpassword);
            navigate("/home");
        }catch(e){
            console.log(e);
        }finally{
            setloading(false);
            toast({
                position: 'top',
                title: 'Account created.',
                description: "We 've created your account for you.",
                status: 'success',
                duration: 2000,
                isClosable: true,
              });
        }
    }

    return <div>
    <div className="header">
    </div>
    <div className="login">
        <form onSubmit={Signup}>
            <h2>SignUp to BookMyShow</h2>
            <label htmlFor="">Email</label>
            <input onChange={(event)=>{setregisteremail(event.target.value)}} type="email" name="" id="" />
            <label htmlFor="">Password</label>
            <input onChange={(event)=>{setregisterpassword(event.target.value)}}type="password" name="" id="" />
            {loading ? <Spinner thickness='4px'speed='0.65s'  emptyColor='gray.200'color='blue.500' size='xl' marginLeft={40}/>: <button type="submit">Login</button>}
            <p>Already a member? <Link to="/auth">Log In</Link></p>
        </form>
    </div>
</div>
}

export default SignUp;