import React, { Component } from 'react';

class TeamsPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            teams: [] //empty projects state
        };
    }

    componentDidMount() {
        //fetch operation
        fetch("https://thawing-wildwood-69422.herokuapp.com/Teams") //Team API
        .then(res => res.json())
        .then(returnedData => {
            this.setState({ 
                teams: returnedData 
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
                        <h3 className="panel-title">Teams</h3>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive overview-table">
                            <table className="table table-striped table-bordered">
                                <tbody>

                                    {this.state.teams.map((team, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{team.TeamName}</td>
                                                <td>{team.Employees.length} Employees</td>    
                                            </tr>
                                        );
                                    })}

                                </tbody>
                            </table>
                        </div>
                        <a href="/teams" className="btn btn-primary form-control">View All Team Data</a>
                    </div>
                </div>
        );
    }
}

export default TeamsPanel;