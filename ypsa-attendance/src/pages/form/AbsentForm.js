import React from 'react';
import './AbsentForm.css';
function App() {
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
        <input type="date" id="DateToday" name="Date" className = "input"></input>
        </div>

        <div className = "FLNameGrid">
          <div className = "Fname">
            <label>First Name</label>
            <input type="text" id="FirstName" name="Name" className = "input"></input>
          </div>
        
          <div className = "Fname">
            <label>Last Name</label>
            <input type="text" id="LastName" name="Name" className = "input"></input>
          </div>
        
          <div className = "Fname">
            <label>Date of Absence</label>
            <input type="date" id="AbsenceDate" name="Date" className = "input"></input>
          </div>
        </div>

        <div className = "Fname">
        <label>Due To</label>
        <input type="text" id="Reason" name="reason" placeholder="Enter Reason Here" className = "input"></input>
        </div>

        <div className = "Fname">
        <label>Parent/Guardian Name</label>
        <input type="text" id="GuardName" name="GuardianName" className = "input"></input>
        </div>

        <div className = "Fname">
        <label>Telephone Number</label>
        <input type="text" id="Phone" className = "input"></input>
        </div>

        <div className = "Fname">
          <label>Comment</label>
          <textarea id="freeform" name="freeform" cols="50" rows="6" className = "input">Comment</textarea>
        </div>

        <div className = "FLNameGrid">
        <button className = "button-2" name="button">Cancel</button>
        <button className="button-1" name="button">Submit</button>
        </div>

      </div>
    </div>
  );
}

export default App;