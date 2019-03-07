import React, { Component } from 'react';
import MainContainer from './MainContainer';
import moment from 'moment';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects : []
        }
    }

    componentDidMount(){
                //fetch operation
                fetch("https://thawing-wildwood-69422.herokuapp.com/Projects") //Team API
                .then(res => res.json())
                .then(returnedData => {
                    console.log(returnedData); //debugger
                    this.setState({ 
                        projects: returnedData 
                    });
                }).catch(err => {
                    console.log(err);
                });
    }
    render(){
        return(
            <MainContainer sidebar="Projects">
            <h1 className="page-header">Projects</h1>
            <div className="row">
            <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                       <th>Name </th>
                       <th>Description </th>
                       <th>Start Date </th>
                       <th>End Date </th>
                       </tr>
                        </thead>
                        <tbody>
                        {this.state.projects.map((project, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{project.ProjectName}</td>
                                                <td>{project.ProjectDescription}</td> 
                                                <td>{moment(project.ProjectStartDate).format('LL')}</td>
                                                <td>n/a</td>  
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

export default Projects;