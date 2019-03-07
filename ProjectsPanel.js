import React, { Component } from 'react';
import moment from 'moment';

class ProjectsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [] //empty projects state
        };
    }

    componentDidMount() {
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

    componentWillUnmount(){

    }
//figure out the active part
    render() {
        return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Projects</h3>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive overview-table">
                            <table className="table table-striped table-bordered">
                                <tbody>

                                    {this.state.projects.map((project, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{project.ProjectName}</td>
                                                <td>Active {moment(new Date()).diff(project.ProjectStartDate , 'days')} Days</td>    
                                            </tr>
                                        );
                                    })}

                                </tbody>
                            </table>
                        </div>
                        <a href="/projects" className="btn btn-primary form-control">View All Project Data</a>
                    </div>
                </div>
            );
    }
}

export default ProjectsPanel;