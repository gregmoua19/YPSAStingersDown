import React, {useState} from 'react';
import './AbsentForm.css';
import { db } from '../../scripts/Database';
import {collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js';

function AbsentForm() {

  const excusedAbsenceRef = collection(db, "ExcusedAbsences");
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
    AbsenceDate:addStudent.AbsenceDate,
    Reason:addStudent.Reason,
    GuardName:addStudent.GuardName,
    Phone:addStudent.Phone,
    CommentBox:addStudent.CommentBox
  }
  const DateToday = student.DateToday;
  const FirstName = student.FirstName;
  const LastName = student.LastName;
  const AbsenceDate = student.AbsenceDate;
  const Reason = student.Reason;
  const GuardName = student.GuardName;
  const Phone = student.Phone;
  const CommentBox = student.CommentBox;

  const addStudentToDatabase = async () =>{
    await addDoc(excusedAbsenceRef, {
      DateToday,
      FirstName,
      LastName,
      AbsenceDate,
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
          <div className = "YPSAT">YPS Attendance Tracker</div>
          <div>Home</div>
          <div className = "logout">Logout</div>
      </div>
      
      <div className = "Div1">
        <div className = "parent"></div>
      </div>

      <div className = "Div3">
        <header className = "excused-font">Excused Absence</header>
        
        <div>
        <label className = "Fname">Today's Date</label>
        <input type="date" id="DateToday" name="Date" className = "input" onChange={studentInput}></input>
        </div>

        <div className = "FLNameGrid">
          <div className = "Fname">
            <label>First Name</label>
            <input type="text" id="FirstName" name="Name" className = "input" onChange={studentInput}></input>
          </div>
        
          <div className = "Fname">
            <label>Last Name</label>
            <input type="text" id="LastName" name="Name" className = "input" onChange={studentInput}></input>
          </div>
        
          <div className = "Fname">
            <label>Date of Absence</label>
            <input type="date" id="AbsenceDate" name="Date" className = "input" onChange={studentInput}></input>
          </div>
        </div>

        <div className = "Fname">
        <label>Due To</label>
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
          <textarea id="CommentBox" name="freeform" cols="50" rows="6" className = "input" onChange={studentInput}  >Comment</textarea>
        </div>

        <div className = "FLNameGrid">
        <button className = "button-2" name="button">Cancel</button>
        <button className="button-1" name="button" onClick={handleSubmit}>Submit</button>
        </div>

      </div>
    </div>
  );
}

export default AbsentForm;
