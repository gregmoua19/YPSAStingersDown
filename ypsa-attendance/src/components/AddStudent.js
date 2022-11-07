import React from 'react';
import '../css/popup.css';

const AddStudent = props => {
  return (
    <div className="popup-box">
      <div className="box">
        
        
        {props.content}
      </div>
    </div>
  );
};
 
export default AddStudent;