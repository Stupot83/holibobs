import React, { Component } from 'react';

class DataTable extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.startDate}
                </td>
                <td>
                    {this.props.obj.endDate}
                </td>
                <td>
                    {this.props.obj.location}
                </td>
            </tr>
        );
    }
}

export default DataTable;