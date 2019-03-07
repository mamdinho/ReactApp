import React, { Component } from 'react';
import MainContainer from './MainContainer';
import moment from 'moment';

class Employee extends Component{
    constructor(props){
        super(props);
        this.state = {
            employees : []
        }
    }

    componentDidMount(){
                //fetch operation
                fetch("https://thawing-wildwood-69422.herokuapp.com/Employees") //Team API
                .then(res => res.json())
                .then(returnedData => {
                    console.log(returnedData); //debugger
                    this.setState({ 
                        employees: returnedData 
                    });
                }).catch(err => {
                    console.log(err);
                });
    }
    render(){
        return(
            <MainContainer sidebar="Employees">
            <h1 className="page-header">Employees</h1>
            <div className="row">
            <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                       <th>Name & Position </th>
                       <th>Address </th>
                       <th>Phone Num </th>
                       <th>Hire Date </th>
                       <th>Salary Bonus </th>
                       </tr>
                        </thead>
                        <tbody>
                        {this.state.employees.map((employee, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{employee.FirstName + " "+ employee.LastName + " - "+ employee.Position.PositionName}</td>
                                                <td>{employee.AddressStreet + " "+ employee.AddressCity + ""+ employee.AddressState +", "+ employee.AddressZip}</td> 
                                                <td>{employee.PhoneNum + " ext. " + employee.Extension} </td>
                                                <td>{moment(employee.HireDate).format('LL')}</td>
                                                <td>{"$"+ employee.SalaryBonus}</td>  
                                            </tr>
                                        );
                                    })}
                            </tbody>
            </table>
            </div>
          </MainContainer>
        );
    }
}

export default Employee;