import React, {useEffect, useState} from 'react';
import '../css/landingpage.css';
import AddStudent from './AddStudent';
import PopupContent from './PopupContent';
import data from '../components/mock-data.json';
// import { DatabaseConnect } from '../scripts/firebase-connect';
import {collection, getDocs, addDoc} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import user from '../assets/user.png'
import ypsalogo from '../assets/ypsalogo.png'
const LandingPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  //taking in the data from data, and setting it to students
  const[students, setStudents] = useState(data);
  const[addStudentData, setStudentData] = useState({
    StudentId:'',
    LName:'',
    FName:'',
    Date:'',
    Time:'',
    Reason:'',
    Type:'',
    Status:'Not Confirmed'
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
      StudentId:addStudentData.StudentId,
      LName:addStudentData.LName,
      FName:addStudentData.FName,
      Date:addStudentData.Date,
      Time:addStudentData.Time,
      Reason:addStudentData.Reason,
      Type:addStudentData.Type,
      Status:addStudentData.Status,
    }
    // setStudentID(addStudentData.id);
    const newStudents = [...students, newStudent];
    setStudents(newStudents);
    console.log(newStudent.LName);
    togglePopup();
    const StudentId = newStudent.StudentId;
    const LName = newStudent.LName;
    const FName = newStudent.FName;
    const Date = newStudent.Date;
    const Time = newStudent.Time;
    const Reason = newStudent.Reason;
    const Status = newStudent.Status;
    // const addStudentToDatabase = async () =>{
    //   await addDoc(studentsCollectionRef, {
    //     StudentId,
    //     LName,
    //     FName,
    //     Date,
    //     Time,
    //     Reason,
    //     Status
    //   })
    // }
    // addStudentToDatabase();
  }

  const [studentTest, setTest] = useState({
    StudentId:'',
    LName:'',
    FName:'',
    Date:'',
    Time:'',
    Reason:'',
    Type:'',
    Status:'Not Confirmed'
  });
  // const studentsCollectionRef = collection(DatabaseConnect, "Students");

  // useEffect(() =>{
  //   const getStudents = async () =>{
  //     const data = await getDocs(studentsCollectionRef);
  //     // const dataid = '';
  //     // console.log(data);
  //     // setTest(data.docs.map( (doc) => ({...doc.data()})));
  //     data.forEach( doc =>{
  //       console.log(doc.data());
  //     })
  //   }
    
  //   getStudents();
  // }, [])

  // try{
  //   const getStudents = async () =>{
  //     const docsSnap = await getDocs(studentsCollectionRef);
  //     docsSnap.forEach(doc=>{
  //       const data = doc.data();
  //       console.log(data.FName);
  //     })

  //     // setTest(docsSnap.docs.map( (docsSnap) => ({...docsSnap.data()})));
  //   }
  //   getStudents();
  // }catch(error){
  //   console.log(error);
  // }


  return (
    
    <div className="container">
      <div className="dash">
        <div className = "YPSAT">YPS Attendance Tracker</div>
              <div>Home</div>
              <div className = "logout">Logout</div>
      </div>

      <div className="logo">
        <img src={ypsalogo} height="100px"></img>
      </div>
      <div className="info">
        <img src={user}></img>
        <label>Hello, Staff</label>
      </div>

      <div className="content">
        <div className="table-box">
          <div className="search-box">
            <input type="textarea" className="search-text"
              placeholder="Type To Search"></input>
            <div className="button-area">
              <button className="button" id="export-button">Export</button>
              <button className="button" id="add-button" onClick={togglePopup}>Add</button>
                {isOpen && <AddStudent
                  content={<>
                    <div className="poppup-container">
                      <div className="poppup-header">
                        <h1>Add Entry</h1>
                      </div>
                      <div className="poppup-content">
                      <div className="first-row">
                        <h3>Type</h3>
                        <div className="buttons-row">
                        <button className="button-2" value="Tardy" onClick={handleAddStudentChange} id="Type"
              
                        >Tardy</button>
                        <button className="button-2" value="Excused Absence" onClick={handleAddStudentChange} id="Type"

                        >Excused Absence</button>
                        <button className="button-2" value="Early Dismissal" onClick={handleAddStudentChange} id="Type"
              
                        >Early Dismissal</button>
                      </div>
                    </div>
                    <div className="second-row">
                      <div className="info-1">
                        <h3>ID#</h3>
                        <input type="text" placeholder="Student ID#" className="input-area" id="StudentId"
                          onChange={handleAddStudentChange}
                        ></input>
                      </div>
                      <div className="info-2">
                        <h3>Last Name</h3>
                        <input type="text" placeholder="Last Name"  className="input-area" id="LName"
                          onChange={handleAddStudentChange}
                        ></input>
                      </div>
                      <div className="info-2">
                        <h3>First Name</h3>
                        <input type="text" placeholder="First Name"  className="input-area" id="FName"
                          onChange={handleAddStudentChange}
                        ></input>
                      </div>
                    </div>
                    <div className="third-row">
                      <div>
                        <h3>Date</h3>
                        <input type="Date" className="input-area" id="Date"
                          onChange={handleAddStudentChange}
                        ></input>
                      </div>
                    <div>
                      <h3>Time</h3>
                      <input type="text" placeholder="Time"  className="input-area" id="Time" 
                        onChange={handleAddStudentChange}
                      ></input>
                    </div>
                    <div className="info-2">
                      <h3>Reason</h3>
                      <input type="text" placeholder="Reason"  className="input-area" id="Reason"
                        onChange={handleAddStudentChange}
                      ></input>
                    </div>
          
                  </div>

                </div>
                <div className="poppup-footer">
                  <div className="button-box">
                    <button className="button" id="cancel-button" 
                      onClick= {togglePopup}>
                      Cancel
                    </button>
                    <button className="button" id="add-button" onClick={handleSubmit}>Add</button>
                  </div>
                  </div>
                </div>
                  </>}
                  handleClose={togglePopup}
              />}
            </div>
          </div>
          <table className="info-table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Reason</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* {studentTest.map( (studentTest) =>{
                <tr>
                  <td>{studentTest.StudentID}</td>
                  <td>{studentTest.LName}</td>
                  <td>{studentTest.FName}</td>
                  <td>{studentTest.Date}</td>
                  <td>{studentTest.Time}</td>
                  <td>{studentTest.Reason}</td>
                  <td>{studentTest.Type}</td>
                  <td>{studentTest.Status}</td>
                </tr>
              })} */}
              {students.map( (student) =>(
                <tr>
                  <td>{student.StudentId}</td>
                  <td>{student.LName}</td>
                  <td>{student.FName}</td>
                  <td>{student.Date}</td>
                  <td>{student.Time}</td>
                  <td>{student.Reason}</td>
                  <td>{student.Type}</td>
                  <td>{student.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default LandingPage;


