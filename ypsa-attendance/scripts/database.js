//#region Firebase
// Using CDN Firebase JS SDKs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'
import { getDatabase, ref, set, get, child, remove } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js'
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'

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
const auth = getAuth(app);
//#endregion


//#region Exported global variables
export {
	app as FirebaseApp,
	db as FirebaseDb
}

//#endregion

//#region Global variables
const idReg = /^\d+$/
const nameReg = /^[A-Z][a-z]+$/ // Needs to be refined in the case of special characters
const stdPath = 'students/'
const dataPath = 'data/'

//#region Objects

/**
 * An Entry object with all the necessary functions and parameters
 */
const Entry = {
	code: 'nil',
	date: 'nil',
	desc: '',
	reason: 0,
	status: 0,
	time: 'nil',
	setDate(/**@type {String}*/ date)
	{
		date = date.toLowerCase().replace(' ', '')
		const dateReg = /^([0-2][0-9])|(3[01])\-(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\-20[0-9]{2}$/
		if (dateReg.test(date))
		{
			this.date = date
			return true
		}
		return false
	},
	setTime(/**@type {String}*/ time)
	{
		time = time.replace(' ', '')
		const timeReg = /^(([01][0-9])|(2[0-3])):[0-5][0-9]:[0-5][0-9]$/
		if (timeReg.test(time))
		{
			this.time = time
			return true
		}
		return false
	}
}
//#endregion

//#endregion

//#region Exported functions

/**
 * Gets the info of the student by using their ID
 *
 * @param {String} id
 * @returns {Promise<Object>} JSON student object
 */
export async function getStudentByID(id)
{
	const reference = ref(db)
	const snapshot = await get(child(reference, stdPath + id))
	if (snapshot.exists())
	{
		return JSON.parse(JSON.stringify(snapshot))
	}
}

/**
 * Gets the entries of the student by using their ID
 *
 * @param {String} id
 * @returns {Promise<Object>} JSON entry data object
 */
export async function getEntriesByID(id)
{
	const reference = ref(db)
	const snapshot = await get(child(reference, dataPath + id))
	if (snapshot.exists())
	{
		return JSON.parse(JSON.stringify(snapshot))
	}
}

/**
 * Creates a new student in the database
 * 
 * @param {String} id ID for the new student (numbers only)
 * @param {String} fName First name
 * @param {String} mName Middle name
 * @param {String} lName Last name
 * @return {Promise<boolean>} Returns true if student successfully added
 */
export async function addNewStudent(id, fName, mName, lName)
{
	id = id.replace(' ', '')
	// fName = fName.replace(' ', '')
	// lName = lName.replace(' ', '')
	// if (idReg.test(id) && nameReg.test(fName) && nameReg.test(lName)) {
	if (idReg.test(id))
	{
		const reference = ref(db, stdPath + id)
		return await set(reference, {
			f_name: fName,
			m_name: mName,
			l_name: lName
		}).then(() =>
		{
			return true
		}).catch((error) =>
		{
			console.log(error)
			return false
		})
	}
	else
	{
		return false
	}
}

/**
 * Adds an entry for the student
 * 
 * @param {String} id ID of the student (numbers only)
 * @param {STring} key Unique key
 * @param {Entry} entry Entry object
 * @return {Promise<boolean>} Returns true if entry succesfully added
 */
export async function addData(id, key, entry)
{
	id.replace(' ', '')
	key.replace(' ', '')
	if (idReg.test(id))
	{
		const reference = ref(db, stdPath + id + '/' + key)
		return await set(reference, {
			code: entry.code,
			date: entry.date,
			desc: entry.desc,
			reason: entry.reason,
			status: entry.status,
			time: entry.time
		}).then(() =>
		{
			return true
		}).catch((error) =>
		{
			console.error(error)
			return false
		})
	}
	else
	{
		return false
	}
}

/**
 * Removes the student based on the ID
 * 
 * @param {String} id ID of the student (numbers only)
 * @returns {Promise<boolean>} Returns true if student succesfully deleted
 */
export async function removeStudent(id)
{
	const reference = ref(db, stdPath + id)
	if ((await get(child(ref(db), stdPath + id))).exists())
	{
		return await remove(reference).then(() =>
		{
			return true
		}).catch((error) =>
		{
			console.error(error)
			return false
		})
	}
	else
	{
		return false
	}
}

/**
 * Removes the data entries based on the ID
 * 
 * @param {String} id ID of the student (numbers only)
 * @returns {Promise<boolean>} Returns true if entries succesfully deleted
 */
export async function removeAllDataForID(id)
{
	const reference = ref(db, dataPath + id)
	if ((await get(child(ref(db), dataPath + id))).exists())
	{
		return await remove(reference).then(() =>
		{
			return true
		}).catch((error) =>
		{
			console.error(error)
			return false
		})
	}
	else
	{
		return false
	}
}

/**
 * Remove a data entry for a specific ID
 * 
 * @param {String} id ID of the student (numbers only)
 * @param {String} key Unique key of the entry
 * @returns {Promise<boolean>} Returns true if entries succesfully deleted
 */
export async function removeData(id, key)
{
	const reference = ref(db, dataPath + id + '/' + key)
	if ((await get(child(ref(db), dataPath + id + '/' + key))).exists())
	{
		return await remove(reference).then(() =>
		{
			return true
		}).catch((error) =>
		{
			console.error(error)
			return false
		})
	}
	else
	{
		return false
	}
}

/**
 * Creates an entry object to be used with {@link addData}
 * 
 * @returns {Entry} An Entry object
 */
export function createEntryObj()
{
	return Object.create(Entry)
}

//#endregion 

//#region Functions 



//#endregion