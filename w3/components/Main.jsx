import React, { Component } from "react";
import Axios from "axios";
import StudenList from './StudentList'
import SingleStudent from './SingleStudent'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }
  componentDidMount() {
    Axios.get("/student")
      .then(res => {
        const students = res.data;
        this.setState({ students });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // async componentDidMount(){
  //     try {
  //     const res = await Axios.get('/student')
  //     const students = res.data
  //     this.setState({ students })

  //     } catch (error) {
  //         console.log(error)
  //     }

  // }

  render() {
    return (
      <div>
        <StudenList students = {this.state.students}/>
        
      </div>
    );
  }
}
