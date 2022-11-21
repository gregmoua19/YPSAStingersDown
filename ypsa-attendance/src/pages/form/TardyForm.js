import React, {useState} from 'react';
import './AbsentForm.css';
import { db } from '../../scripts/database';
import {collection, addDoc} from 'firebase/firestore';
function TardyForm() {

	const tardyRef = collection(db, "Tardy");
	const[addStudent, setStudent] = useState({
	  DateToday:'',
	  firstName:'',
	  lastName:'',
	  date:'',
	  reason:'',
	  GuardName:'',
	  Phone:'',
	  CommentBox:''
	})
  
	const studentInput = (event) =>{
	  event.preventDefault();
	  const type = event.target.getAttribute('id');
	  const value = event.target.value;
	  console.log("Field ID: " + type +"\nField Value: "+ value);
	  const newStudent={...addStudent}; 
	  newStudent[type] = value;
	  setStudent(newStudent);
	}
  
	const handleSubmit = (event) =>{
	event.preventDefault(); 
	const student = {
	  DateToday:addStudent.DateToday,
	  FirstName:addStudent.FirstName,
	  LastName:addStudent.LastName,
	  timeDismissed:addStudent.timeDismissed,
	  Reason:addStudent.Reason,
	  GuardName:addStudent.GuardName,
	  Phone:addStudent.Phone,
	  CommentBox:addStudent.CommentBox
	}
	const DateToday = student.DateToday;
	const FirstName = student.FirstName;
	const LastName = student.LastName;
	const timeDismissed = student.timeDismissed;
	const Reason = student.Reason;
	const GuardName = student.GuardName;
	const Phone = student.Phone;
	const CommentBox = student.CommentBox;
  
	const addStudentToDatabase = async () =>{
	  await addDoc(tardyRef, {
		DateToday,
		FirstName,
		LastName,
		timeDismissed,
		Reason,
		GuardName,
		Phone,
		CommentBox,
	  })
	}
	addStudentToDatabase();
	// reloadPage();
	}
  
	return (
	  <div className = "Container">
		<div className = "Div2">
			{/* <div className = "YPSAT">YPS Attendance Tracker</div>
			<div>Home</div>
			<div className = "logout">Logout</div> */}
		</div>
		
		<div className = "Div1">
		  <div className = "parent"></div>
		</div>
  
		<div className = "Div3">
		  <header className = "excused-font">Tardy</header>
		  
		  <div>
			  <label className = "Fname">Today's Date</label>
			  <input type="date" id="DateToday" name="Date" className = "input" onChange={studentInput}></input>
        	</div>
  
		  <div className = "FLNameGrid">
			<div className = "Fname">
			  <label>First Name</label>
			  <input type="text" id="FirstName" name="Name" placeholder="Student First Name" className = "input" onChange={studentInput}></input>
			</div>
		  
			<div className = "Fname">
			  <label>Last Name</label>
			  <input type="text" id="LastName" name="Name" className = "input" placeholder="Student Last Name" onChange={studentInput}></input>
			</div>
		  
			<div className = "Fname">
              <label>Time Dismissed</label>
              <input type="text" placeholder="Enter time dismissed" id="timeDismissed" name="Name" className = "input" onChange={studentInput}></input>
          	</div>
		  </div>
  
		  <div className = "Fname">
		  <label>Reason</label>
		  <input type="text" id="Reason" name="reason" placeholder="Enter Reason Here" className = "input" onChange={studentInput}></input>
		  </div>
  
		  <div className = "Fname">
		  <label>Parent/Guardian Name</label>
		  <input type="text" id="GuardName" name="GuardianName" className = "input" onChange={studentInput}></input>
		  </div>
  
		  <div className = "Fname">
		  <label>Telephone Number</label>
		  <input type="text" id="Phone" className = "input" onChange={studentInput}></input>
		  </div>
  
		  <div className = "Fname">
			<label>Comment</label>
			<textarea id="CommentBox" name="freeform" cols="50" rows="6" className = "input" onChange={studentInput}  placeholder="Type in Comments"></textarea>
		  </div>
  
		  <div className = "FLNameGrid">
		  <button className = "button-2" name="button">Cancel</button>
		  <button className="button-1" name="button" onClick={handleSubmit}>Submit</button>
		  </div>
  
		</div>
	  </div>
	);
  }
  
export default TardyForm;
