import React, {Component} from 'react';
import SingleStudent from './SingleStudent'
import axios from 'axios'


export default class StudentList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedStudent: {}
      };
      this.handleClick = this.handleClick.bind(this)
    }
  handleClick = (event) => {
      event.preventDefault()
      var id = Number(event.target.getAttribute('id'))
      // console.log('students:', this.props.students)
      const selected = this.props.students.find(student => student.id === id)
    this.setState({selectedStudent: selected}, () => console.log('state is:', this.state))
  //   let bob = this.state.selectedStudent.map(elem => {return elem})

  //   this.setState( {selectedStudent : bob})
    console.log(this.state.selectedStudent)
      }

    // handleClick(event) {
    //     let val = event.target.value;
    //     let grades = [];
    //     let subjects = [];
    //     axios
    //         .get('/test/')
    //         .then(data => data.data)
    //         .then(test => {
    //         test.map(obj => {
    //             if (obj.studentId === Number(val)) {
    //             grades.push(obj.grade);
    //             subjects.push(obj.subject);
    //             console.log(obj.subject)
    //             }
    //         });
    //         this.setState({ grades, subjects });
                
    //         });
    //     }       
                             

    render(){
    return (
      <div>
          <h1>inside SL</h1>
            <ul>
        {this.props.students.map(student => (
          <li  onClick ={this.handleClick} key={student.id} id = {student.id} name={student.firstName}>
            {student.firstName}
          </li>

        ))}
            </ul>
            
      </div>
    )
  }
}

