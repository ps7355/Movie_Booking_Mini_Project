import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "./firebase-config";

function CheckUser() {
    const navigate = useNavigate();


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            navigate('/home');
          } else {
            navigate('/auth');
          }
        });
        return unsubscribe;
      }, [navigate]);
    

    return null;
}

export default CheckUser;