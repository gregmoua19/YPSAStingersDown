// Import the functions you need from the SDKs you need
// Using CDN Firebase JS SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set, get, child } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA7SdBu2uR6zsdHFaWs0PGIVlHaugUnyMA",
	authDomain: "ypsa-attendance-system.firebaseapp.com",
	databaseURL: "https://ypsa-attendance-system-default-rtdb.firebaseio.com",
	projectId: "ypsa-attendance-system",
	storageBucket: "ypsa-attendance-system.appspot.com",
	messagingSenderId: "389299417537",
	appId: "1:389299417537:web:816f3ca81473f16765ff40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

function writeData(id, var1, var2) {
	const reference = ref(db, 'test/' + id);

	set(reference, {
		data1: var1,
		data2: var2
	}).then(() => {
		document.getElementById('response').innerText = 'Successfully added to the DB.';
	}).catch((error) => {
		console.log(error);
	});


}

function getData(id) {
	const reference = ref(db);
	get(child(reference, 'test/' + id)).then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
			let jsonObj = JSON.parse(JSON.stringify(snapshot));
			let keys = Object.keys(jsonObj);
			document.getElementById('response').innerText = keys[0] + ": " + jsonObj[keys[0]] + "\n" + keys[1] + ": " + jsonObj[keys[1]];
		}
		else {
			document.getElementById('response').innerText = "No data";
		}
	}).catch((error) => {
		console.error(error);
	});
}

document.getElementById('db_form').onsubmit = function () {
	let id = document.getElementById('id').value;
	let data1 = document.getElementById('data1').value;
	let data2 = document.getElementById('data2').value;
	writeData(id, data1, data2);
	return false;
};

document.getElementById('db_req').onsubmit = function () {
	let id = document.getElementById("id_req").value;
	getData(id);
	return false;
};