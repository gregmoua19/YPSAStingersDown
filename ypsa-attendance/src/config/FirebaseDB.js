import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, get, child, remove } from 'firebase/database'
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA7SdBu2uR6zsdHFaWs0PGIVlHaugUnyMA',
	authDomain: 'ypsa-attendance-system.firebaseapp.com',
	databaseURL: 'https://ypsa-attendance-system-default-rtdb.firebaseio.com',
	projectId: 'ypsa-attendance-system',
	storageBucket: 'ypsa-attendance-system.appspot.com',
	messagingSenderId: '389299417537',
	appId: '1:389299417537:web:816f3ca81473f16765ff40',
}
const app = initializeApp(firebaseConfig)
const db = getDatabase()
const auth = getAuth(app)
//#endregion


//#region Exported global variables
export {
	app as FirebaseApp,
	db as FirebaseDb,
    auth as FirebaseAuth
}