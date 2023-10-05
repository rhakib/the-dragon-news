// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD15YLpJ98TcaRHlqfqQKq390NG4Ytvffo",
  authDomain: "dragon-news-react-69712.firebaseapp.com",
  projectId: "dragon-news-react-69712",
  storageBucket: "dragon-news-react-69712.appspot.com",
  messagingSenderId: "526983903960",
  appId: "1:526983903960:web:d380d0a419992596bc75ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;