import React, {useState} from 'react';
import '../css/StudentAdd.css';
import data from '../components/mock-data.json'
// const idTest = '';

const PopupContent = (props) => {

  const[students, setStudents] = useState(data);
  const[addStudentData, setStudentData] = useState({
    id:'',
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
      id:addStudentData.id,
      LName:addStudentData.LName,
      FName:addStudentData.FName,
      Date:addStudentData.Date,
      Time:addStudentData.Time,
      Reason:addStudentData.Reason,
      Type:addStudentData.Type,
      Status:addStudentData.Status
    }

    const newStudents = [...students, newStudent];
    setStudents(newStudents);
    console.log(newStudent.LName);
  }

  function handleInput(e){
    
  }

  return (
    <div className="poppup-container">
      <div className="poppup-header">
        <h1>Add Entry</h1>
      </div>
      <div className="poppup-content">
        <div className="first-row">
          <h3>Type</h3>
          <div className="buttons-row">
            <button className="button-2" id="Type" value="Tardy"
              onClick={handleAddStudentChange}
            >Tardy</button>
            <button className="button-2"
              

            >Excused Absence</button>
            <button className="button-2"
              
            >Early Dismissal</button>
          </div>
        </div>
        <div className="second-row">
          <div className="info-1">
            <h3>ID#</h3>
            <input type="text" placeholder="Student ID#" className="input-area" id="id"
              onChange={handleAddStudentChange}
            ></input>
          </div>
          <div className="info-2">
            <h3>Last Name</h3>
            <input type="text" placeholder="Last Name"  className="input-area" id="LName"
              onChange={handleAddStudentChange}
            ></input>
          </div><div className="info-2">
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
            onClick={() => console.log("clicked")}>
            Cancel
          </button>
          <button className="button" id="add-button" onClick={handleSubmit}>Add</button>
        </div>
        
      </div>
    </div>
  )
}
export const idTest = '123213';
export default PopupContent;