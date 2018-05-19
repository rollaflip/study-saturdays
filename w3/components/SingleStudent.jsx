import React from 'react';

const SingleStudent = props => {
  return (
    <div>
      <h1>SINGLE STUDENT</h1>
      {props.grades.map(grade => <p>{grade}</p>)}
      {props.subjects.map(subject => <p>{subject}</p>)}
    </div>
  );
};
export default SingleStudent;