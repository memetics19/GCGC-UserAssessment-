import React,{Component} from "react";
import {Table} from "reactstrap";
// import BootstrapTable from 'react-bootstrap-table-next';
// import Axios from "axios";
// import Students from './AllRecordsList';

class UserAssessment extends Component {
  constructor(props) {
        super(props);
        // this.state={students: [],login:this.props.login};
    }
    // componentDidMount() {
    //     Axios.get("http://localhost/login-backend/leaderboard.php?id="+this.props.login)
    //         .then(responses => {
    //             this.setState({students: responses.data});
    //             console.log(this.state.students);
    //         })
    //         .catch(function (error){
    //             console.log(error);
    //         })
    // }
    //  StudentsList(){
    //     return this.state.students.map(function (object,i){
    //         return <Students obj={object} key={i} login={321710303054}/>;
    //     });
    // }

    
  render() {
    return (
      <div className="lb">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th  scope="row">Rank</th>
              <th scope="row">Roll Number</th>
              <th scope="row">Name</th>
              <th scope="row">Branch & Section</th>
              <th scope="row">CoCubes</th>
              <th scope="row">Amcat</th>
              <th scope="row">Internal</th>
            </tr>
          </thead>
          <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        </tbody>
        </Table>
   </div>
    );
  }
}

export default UserAssessment;