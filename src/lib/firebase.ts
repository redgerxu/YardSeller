// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { doc, getFirestore } from 'firebase/firestore';
import type { User } from 'firebase/auth';
import type { DocumentReference } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDdhq55klDU9C0Q9f4xRgQ9wh_8Pj6OShg',
	authDomain: 'yardseller-721ca.firebaseapp.com',
	projectId: 'yardseller-721ca',
	storageBucket: 'yardseller-721ca.appspot.com',
	messagingSenderId: '129861560051',
	appId: '1:129861560051:web:85d48a4e87105e4be1f986',
	measurementId: 'G-N2GH9XHMNJ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const userDoc = (user: User): DocumentReference => {
	return doc(db, 'users/' + user.uid);
};
