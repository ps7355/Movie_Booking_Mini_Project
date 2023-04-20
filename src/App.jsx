//login screen

import React, { useState } from 'react'
import {signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from './firebase-config'
import { useNavigate,Link } from 'react-router-dom'
import { Spinner,useToast} from '@chakra-ui/react'
import './App.css'


function App(){
  const[loginEmail,setloginEmail]=useState("");
  const[loginPassword,setloginPassword]=useState("");
  const[loading,setloading]=useState(false);
  const navigate = useNavigate();
  const toast=useToast();

  
 
  const loginUser = async(event)=>{
    event.preventDefault();
    setloading(true);
    try{
      await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
      navigate('/home');
    }catch(e){
      console.log(e);
    }finally{
      setloading(false);
      toast({
        position: 'top',
        title: 'Login Sucessfull',
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
      <form action="">
          <h2>Log in to BookMyShow</h2>
          <label htmlFor="">Email</label>
          <input onChange={(event)=>{setloginEmail(event.target.value)}} type="email" name="" id="" />
          <label htmlFor="">Password</label>
          <input onChange={(event)=>{setloginPassword(event.target.value)}} type="password" name="" id="" />
          {loading ? <Spinner thickness='4px'speed='0.65s'  emptyColor='gray.200'color='blue.500' size='xl' marginLeft={40}/>: <button type="submit" onClick={loginUser}>Login</button>}
          <p>Not a member yet? <Link to="/signup">Sign up for free</Link></p>
      </form>
  </div>
</div>
}

export default App
