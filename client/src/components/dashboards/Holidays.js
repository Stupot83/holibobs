import React, { Component } from 'react';
import axios from 'axios';
import DataTable from './DataTable';

export default class Holidays extends Component {

    constructor(props) {
        super(props);
        this.state = { holidays: [] };
    }

    componentDidMount() {
        axios.get('/api/holidays/')
            .then(res => {
                this.setState({ holidays: res.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    dataTable() {
        return this.state.holidays.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>StartDate:</td>
                                <td>EndDate:</td>
                                <td>Location:</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}