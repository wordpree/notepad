import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCK3qVnAYjXV9WJPAABgpxskR9ojmXwR4g",
  authDomain: "notepad-b5762.firebaseapp.com",
  databaseURL: "https://notepad-b5762.firebaseio.com",
  projectId: "notepad-b5762",
  storageBucket: "notepad-b5762.appspot.com",
  messagingSenderId: "147878116265"
};

export default firebase.initializeApp(config);
