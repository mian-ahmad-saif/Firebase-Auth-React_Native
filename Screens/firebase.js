// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    // apiKey: "AIzaSyAdaZ4lXurV3zGRYn8AB9PEEarwn8ht7_8",
    // authDomain: "csg1-d8421.firebaseapp.com",
    // projectId: "csg1-d8421",
    // storageBucket: "csg1-d8421.appspot.com",
    // messagingSenderId: "881558113515",
    // appId: "1:881558113515:web:4e65deb9bb527854a3c2ae",
    // measurementId: "G-GZV2HS8YKK"
    apiKey: "AIzaSyCRVELlaDdZxnIO5TUevS3I6t4sATJ5O3I",
    authDomain: "my-app-222d4.firebaseapp.com",
    projectId: "my-app-222d4",
    storageBucket: "my-app-222d4.appspot.com",
    messagingSenderId: "889486876002",
    appId: "1:889486876002:web:cc5d0a950e3eaf06dae03b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};