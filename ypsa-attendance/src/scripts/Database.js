//#region Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'
import { getFirestore, collection, getDocs, setDoc, addDoc, doc, serverTimestamp, Timestamp, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'
// import { getAuth } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'

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
const db = getFirestore(app)
// const auth = getAuth(app);
//#endregion


//#region Global vars and objects
const Entry = {
	code: 'nil',
	date: 'nil',
	desc: '',
	reason: 0,
	status: 0,
	time: 'nil',
	/**
	 * Set's the date and time of the entry to match the required type in Firebase
	 * 
	 * @param {Number} year 
	 * @param {Number} month 
	 * @param {Number} day 
	 * @param {Number} hours 
	 * @param {Number} minutes 
	 */
	setDateAndTime(year, month, day, hours, minutes)
	{
		var newDate = new Date()
		newDate.setFullYear(year)
		newDate.setMonth(month)
		newDate.setDate(day)
		newDate.setHours(hours)
		newDate.setMinutes(minutes)
		newDate.setSeconds(0)
		this.date = newDate
	}
}

const idReg = /^\w+$/
const nameReg = /^[A-Za-z-]+$/
//#endregion


//#region Functions
/**
 * Returns a newly created entry object
 * 
 * @returns {Entry}
 */
function createEntryObj()
{
	return Object.create(Entry)
}

/**
 * Gets all of the student objects
 * 
 * @returns {Promise<Object>}
 */
function getAll() 
{
	return new Promise((resolve, reject) =>
	{
		getDocs(collection(db, "entries")).then(snapshot =>
		{
			resolve(snapshot)
		}).catch(() => {
			reject()
		})
	})
}

/**
 * Gets the student's info
 * 
 * @param {String} id The student ID
 * @returns {Promise<Object>}
 */
function getStudentByID(id)
{
	return new Promise((resolve, reject) =>
	{
		getDocs(collection(db, "entries")).then(snapshot =>
		{
			snapshot.forEach(doc =>
			{
				if (doc.id === id)
				{
					resolve(doc.data())
				}
			})
			reject()
		})
	})
}

/**
 * Gets the student's info
 * 
 * @param {String} id The student ID
 * @returns {Promise<JSON>}
 */
function getStudentInfoByID(id)
{
	return new Promise((resolve, reject) => 
	{
		getStudentByID(id).then(data => 
		{
			resolve(JSON.parse(JSON.stringify(data)))
		}).catch(() =>
		{
			reject()
		})
	})
}

/**
 * Gets the student's entries
 * 
 * @param {String} id The student ID
 * @returns {Promise<JSON>}
 */
function getEntriesByID(id)
{
	return new Promise((resolve, reject) =>
	{
		getDocs(collection(db, 'entries', id, 'entries')).then(snapshot =>
		{
			var jsonData = '{'
			var i = 0
			snapshot.forEach(doc =>
			{
				if (i != 0)
				{
					jsonData += ','
				}
				i++
				jsonData += '"' + doc.id + '":' + JSON.stringify(doc.data())
			})
			jsonData += '}'
			resolve(JSON.parse(jsonData))
		}).catch(() =>
		{
			reject()
		})
	})
}

/**
 * Adds a new student to the database
 * 
 * @param {String} id Student's ID
 * @param {String} fName First name
 * @param {String} mName Middle name
 * @param {String} lName Last name
 */
function addNewStudent(id, fName, mName, lName)
{
	return new Promise((resolve, reject) =>
	{
		id = id.trim()
		fName = fName.trim()
		mName = mName.trim()
		lName = lName.trim()

		if (idReg.test(id) && nameReg.test(fName) && nameReg.test(mName) && nameReg.test(lName))
		{
			const data = {
				f_name: fName,
				m_name: mName,
				l_name: lName
			}
			setDoc(doc(db, 'entries', id), data, { merge: true }).then(() => {
				resolve()
			}).catch(() => {
				reject()
			})
		} else {
			reject()
		}
	})
}

/**
 * Add a new entry for the specfiied ID
 * 
 * @param {String} id The student's ID
 * @param {Entry} entry The entry data
 */
function addEntry(id, entry)
{
	return new Promise((reject, resolve) => {
		id = id.trim()
		getStudentByID(id).then(() =>
		{
			addDoc(collection(db, 'entries/' + id + '/entries'), {
				code: entry.code,
				date: Timestamp.fromDate(entry.date),
				desc: entry.desc,
				reason: entry.reason,
				status: entry.status,
				timestamp: serverTimestamp()
			}).then(() =>
			{
				console.log('Successfully added entry.')
				resolve()
			}).catch(() =>
			{
				console.log('Adding failed.')
				reject()
			})
		}).catch(() =>
		{
			console.log('User does not exist')
			reject()
		})
	})
}

/**
 * Delete the entire student and all of their data
 * 
 * @param {String} id The student's ID
 */
function removeStudent(id)
{

}

/**
 * Delete all the entries of the student
 * 
 * @param {String} id The student's ID
 */
function removeAllEntriesForID(id)
{

}

/**
 * Deletes an entry for a student
 * 
 * @param {String} id The student's ID
 * @param {String} entryId The entry ID
 */
function removeEntry(id, entryId)
{
	id = id.trim()
	getStudentByID(id).then(() =>
	{
		deleteDoc(doc(db, 'entries/' + id + '/entries', entryId)).then(() =>
		{
			console.log('Successfully deleted entry.')
		}).catch(() =>
		{
			console.log('Deleting failed.')
		})
	}).catch(() =>
	{
		console.log('User does not exist')
	})
}
//#endregion


export
{
	app,
	db,
	getAll,
	getStudentInfoByID,
	getEntriesByID,
	addNewStudent,
	addEntry,
	createEntryObj,
	removeStudent,
	removeAllEntriesForID,
	removeEntry
}