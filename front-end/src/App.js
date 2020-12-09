import React, { Component } from "react";
import { Container, Table } from "reactstrap";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import update from "./update";


class App extends Component {

  constructor(props){

    super(props);
    this.state = {students: []};
    this.editStudent = this.editStudent.bind(this);
  }

  componentDidMount(){
    
     fetch("/students", {
      headers: {
			  "Access-Control-Allow-Origin": "http://localhost:8080",
			  "Accept": "application/json",
			  "Content-Type": "application/json"
			}
     }).then(response =>
      response
        .json()
        .then(data => this.setState({students: data,current:0}))
    );
    const r = 4;  
  }

  editStudent(Student) {

  const index = this.state.Students.findIndex(Student);
  this.setState({...this.state,current:index})
  this.props.history.push('/update');  
  }

  render(){
    const Students = this.state.students;

    if (Students == undefined) {
      return <p>Failed to load data.</p>;
    }
    const StudentList = Students.map(Student => {
      return (
        <tr scope="row">
          <td>{Student.firstName}</td>
          <td>{Student.lastName}</td>
          <td>{Student.matriculationNumber}</td>
          <td>{Student.address}</td>
          <button onClick={ () => this.editStudent(Student)} className="btn btn-info">Update </button>
        </tr>
      );
    });

    return (
      <Router>    
      <div>
        <Container fluid>
        <Table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mtr. Number</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>{StudentList}</tbody>
    </Table>
        </Container>
  </div>
  <Switch>
    <Route path = "/update">
      <update  firstN ={this.state.students[this.state.current].firstName} lastN = {this.state.students[this.state.current].lastName} mn = {this.state.students[this.state.current].matriculationNumber} ads = {this.state.students[this.state.current].address}  > </update>
    </Route>
  </Switch>
  </Router>
    );
  }
}

export default App;
