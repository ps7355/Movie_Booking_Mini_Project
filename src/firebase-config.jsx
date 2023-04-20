import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA-6CXKE0d3TMkYXDy0eK-zPk7nwZB7gxU",
    authDomain: "react-demo-c9dad.firebaseapp.com",
    projectId: "react-demo-c9dad",
    storageBucket: "react-demo-c9dad.appspot.com",
    messagingSenderId: "600409479064",
    appId: "1:600409479064:web:130e8c5b5293bebb627ded"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

