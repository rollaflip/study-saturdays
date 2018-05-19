import React, { Component } from 'react';
import Axios from 'axios';

export default class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: {}
    };
    this.studentList = this.studentList.bind(this)
  }


  render() {
    return (
      <div>
          <h1>inside SL</h1>
        {this.state.students.map(student => (
          <li key={student.id} value={student.firstName}>
            {student.firstName}
          </li>
        ))}
      </div>
    );
  }
}
