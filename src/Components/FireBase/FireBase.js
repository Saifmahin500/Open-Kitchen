// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTwAAN7GpMB_uoufHv0GDRAAQ7_15Uwco",
  authDomain: "coffee-store-1fd2f.firebaseapp.com",
  projectId: "coffee-store-1fd2f",
  storageBucket: "coffee-store-1fd2f.appspot.com",
  messagingSenderId: "653422645067",
  appId: "1:653422645067:web:b463b49de326369cfba2ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;