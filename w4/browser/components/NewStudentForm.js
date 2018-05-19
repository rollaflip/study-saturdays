import React, { Component } from 'react';


export default class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.props.addStudent = this.props.addStudent.bind(this)
  }
  handleChange(evt){
    // this.state
    this.setState({
      [evt.target.name]: evt.target.value
    }, () => console.log(this.state))
  }

  handleSubmit(evt){
    // console.log(this.state)
    evt.preventDefault()
    this.props.addStudent(this.state)

    this.setState({
      firstName:'',
      lastName: '',
      email:''
    })
   console.log('submit button')
  }


  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value= {this.state.firstName} onChange = {this.handleChange} />
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" value= {this.state.lastName} onChange = {this.handleChange} />
        </label>

        <label>
          Email:
          <input type="email" name="email" value= {this.state.email} onChange = {this.handleChange} />
        </label>

        <button type="submit" >Submit New Student</button>
      </form>
    );
  }
}
