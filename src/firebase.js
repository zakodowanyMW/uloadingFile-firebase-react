import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB7dv0841NzSfzA4N6_zx2vm7NOWInF_mE",
  authDomain: "uploadingfile-b7ae1.firebaseapp.com",
  projectId: "uploadingfile-b7ae1",
  storageBucket: "uploadingfile-b7ae1.appspot.com",
  messagingSenderId: "262934578463",
  appId: "1:262934578463:web:081374783de375fd2adc2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const strage = getStorage(app)