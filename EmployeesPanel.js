import React, { Component } from 'react';

class EmployeesPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            employees: [] //empty projects state
        };
    }

    componentDidMount() {
        //fetch operation
        fetch("https://thawing-wildwood-69422.herokuapp.com/Employees") //Team API
        .then(res => res.json())
        .then(returnedData => {
            this.setState({ 
                employees: returnedData 
            });
        }).catch(err => {
            console.log("Error "+err);
        });
    }

    componentWillUnmount(){
        
    }
//figure out the active part
    render() {
        return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Employees</h3>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive overview-table">
                            <table className="table table-striped table-bordered">
                                <tbody>

                                    {this.state.employees.map((employee, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{employee.FirstName + " " + employee.LastName}</td>
                                                <td>{employee.Position.PositionName}</td>    
                                            </tr>
                                        );
                                    })}

                                </tbody>
                            </table>
                        </div>
                        <a href="/employees" className="btn btn-primary form-control">View All Employee Data</a>
                    </div>
                </div>
        );
    }
}

export default EmployeesPanel;