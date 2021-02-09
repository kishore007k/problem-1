import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyBmO0ElhRzJZ4X0A7YhFmFdWQJM-BjXs4c",
	authDomain: "interview-problem-b8b81.firebaseapp.com",
	projectId: "interview-problem-b8b81",
	storageBucket: "interview-problem-b8b81.appspot.com",
	messagingSenderId: "836753908206",
	appId: "1:836753908206:web:136e996e2e0aae6860eeff",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp, fire };
