import React, {useState} from 'react';
import './AbsentForm.css';
import { db } from '../../scripts/database';
import {collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js';
function EarlyDismissal() {
  const earlyCollectionRef = collection(db, "EarlyDismissal");
  const[addStudentData, setStudentData] = useState({
    DateToday:'',
    firstName:'',
    lastName:'',
    timeDismissed:'',
    reason:'',
    GuardName:'',
    Phone:'',
    freeform:''
  })

  const handleAddStudentChange = (event) =>{
    event.preventDefault();
    const fieldID = event.target.getAttribute('id');
    const fieldValue = event.target.value;
    console.log("Field ID: " +fieldID+"\nField Value: "+ fieldValue);
    const newStudentData={...addStudentData};
    newStudentData[fieldID] = fieldValue;
    setStudentData(newStudentData);
  }

  const handleSubmit = (event) =>{
  event.preventDefault();
  const newStudent = {
    DateToday:addStudentData.DateToday,
    firstName:addStudentData.firstName,
    lastName:addStudentData.lastName,
    timeDismissed:addStudentData.timeDismissed,
    reason:addStudentData.reason,
    GuardName:addStudentData.GuardName,
    Phone:addStudentData.Phone,
    freeform:addStudentData.freeform
  }

  const DateToday=newStudent.DateToday;
  const firstName=newStudent.firstName;
  const lastName=newStudent.lastName;
  const timeDismissed=newStudent.timeDismissed;
  const reason=newStudent.reason;
  const GuardName=newStudent.GuardName;
  const Phone=newStudent.Phone;
  const freeform=newStudent.freeform;
  const addStudentToDatabase = async () =>{
    await addDoc(earlyCollectionRef, {
      DateToday,
      GuardName,
      Phone,
      firstName,
      freeform,
      lastName,
      reason,
      timeDismissed
    })
  }
  addStudentToDatabase();
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
        <header className = "excused-font">Early Dismissmal</header>

        <div>
        <label className = "Fname">Today's Date</label>
        <input type="date" id="DateToday" name="Date" className = "input" onChange={handleAddStudentChange}></input>
        </div>

        <div className = "FLNameGrid">
          <div className = "Fname">
            <label>First Name</label>
            <input type="text" id="firstName" name="Name" className = "input" onChange={handleAddStudentChange}></input>
          </div>

          <div className = "Fname">
            <label>Last Name</label>
            <input type="text" id="lastName" name="Name" className = "input" onChange={handleAddStudentChange}></input>
          </div>

          <div className = "Fname">
            <label>Time Dismissed</label>
            <input type="text" id="timeDismissed" name="Name" className = "input" onChange={handleAddStudentChange}></input>
          </div>
        </div>

        <div className = "Fname">
        <label>Reason</label>
        <input type="text" id="reason" name="reason" placeholder="Enter Reason Here" className = "input" onChange={handleAddStudentChange}></input>
        </div>

        <div className = "Fname">
        <label>Parent/Guardian Name</label>
        <input type="text" id="GuardName" name="GuardianName" className = "input" onChange={handleAddStudentChange}></input>
        </div>

        <div className = "Fname">
        <label>Telephone Number</label>
        <input type="text" id="Phone" className = "input" onChange={handleAddStudentChange}></input>
        </div>

        <div className = "Fname">
          <label>Comment</label>
          <textarea id="freeform" name="freeform" cols="50" rows="6" className = "input" placeholder='Type in Comments' onChange={handleAddStudentChange}></textarea>
        </div>

        <div className = "FLNameGrid">
        <button className = "button-2" name="button">Cancel</button>
        <button className="button-1" name="button" onClick={handleSubmit} >Submit</button>
        </div>

      </div>
    </div>
  );
}

export default EarlyDismissal;