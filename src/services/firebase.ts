import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithRedirect,
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  signInAnonymously,
  User,
  UserCredential
} from "firebase/auth";
import { getDatabase, get, ref, onValue } from "firebase/database";

import ENV from '../../configFirebase';

const firebaseConfig = {
  apiKey: ENV.APP_ENV_APIKEY,
  authDomain: ENV.APP_ENV_AUTHDOMAIN,
  databaseURL: ENV.APP_ENV_DATABASEURL,
  projectId: ENV.APP_ENV_PROJECTID,
  storageBucket: ENV.APP_ENV_STORAGEBUCKET,
  messagingSenderId: ENV.APP_ENV_MESSAGINGSENDERID,
  appId: ENV.APP_ENV_APPID,
};

initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase();

export {
  User,
  UserCredential,
  auth,
  database,
  get,
  ref,
  onValue,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithRedirect,
  signInWithCredential,
  GoogleAuthProvider,
  signInAnonymously,
};
