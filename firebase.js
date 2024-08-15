import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'; // Or other Firebase services you need

const firebaseConfig = {
    apiKey: "AIzaSyCF91hSf8SwrzhPTK2qdxBkpPleGxs6lbg",
    authDomain: "leovegas-ea66e.firebaseapp.com",
    projectId: "leovegas-ea66e",
    storageBucket: "leovegas-ea66e.appspot.com",
    messagingSenderId: "1076945219876",
    appId: "1:1076945219876:web:04e3d877ea2cf2a7b043b1",
    measurementId: "G-2JZC6SL1RS"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

