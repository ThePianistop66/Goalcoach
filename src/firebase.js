import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCEURS65U_Kxnf7BzCY5R5ynObSEZWExa8",
  authDomain: "goalcoach-45ccc.firebaseapp.com",
  databaseURL: "https://goalcoach-45ccc.firebaseio.com",
  projectId: "goalcoach-45ccc",
  storageBucket: "",
  messagingSenderId: "1028381337487"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals')
