import React, { Component } from 'react';
import MainContainer from './MainContainer';

class Teams extends Component{
    constructor(props){
        super(props);
        this.state = {
            teams : []
        }
    }

    componentDidMount(){
        //fetch operation
        fetch("https://thawing-wildwood-69422.herokuapp.com/Teams") //Team API
        .then(res => res.json())
        .then(returnedData => {
            console.log(returnedData); //debugger
            this.setState({ 
                teams: returnedData 
            });
        }).catch(err => {
            console.log(err);
        });
}

render(){
    return(
        <MainContainer sidebar="Teams">
            <h1 className="page-header">Teams</h1>
            <div className="row">
            <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                       <th>Name </th>
                       <th>Projects </th>
                       <th>Employees </th>
                       <th>Team Lead </th>
                       </tr>
                        </thead>
                        <tbody>
                        {this.state.teams.map((team, index) => {
                                        return (
                                            <tr key={team._id}>
                                                <td>{team.TeamName}</td>
                                                <td>
                                                    <ul>
                                                    {team.Projects.map((project, index) => {
                                        return (
                                            <li key={index}> {project.ProjectName}</li>
                                        );
                                    })} 
                                                        </ul>
                                                    </td> 
                                                <td>{team.Employees.length}</td>
                                                <td>{team.TeamLead.FirstName + " " + team.TeamLead.LastName}</td>  
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

export default Teams;