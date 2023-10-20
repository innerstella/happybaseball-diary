import * as firebase from "firebase/app";
import * as auth from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  //   apiKey: "AIzaSyBTSc8FxJVeG670q0Hihc5Qu9lBRCulHvA",
  //   authDomain: "happybaseball-diary.firebaseapp.com",
  //   projectId: "happybaseball-diary",
  //   storageBucket: "happybaseball-diary.appspot.com",
  //   messagingSenderId: "613806071594",
  //   appId: "1:613806071594:web:6f104709241d302804c853",
  //   measurementId: "G-G6T6FEC0DB",
};

// Initialize Firebase
export const firbaseInstance = firebase;
export const fbase = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const authService = auth.getAuth(fbase);

// google auth
export const signInGoogle = () => {
  const provider = new GoogleAuthProvider();
  auth.setPersistence(authService, auth.browserSessionPersistence).then(() => {
    return auth
      .signInWithPopup(authService, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
