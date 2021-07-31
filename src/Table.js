import React, { Component } from 'react'

class Table extends Component {
   render(){
    return (
       
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John</td>
                    <td>Developer</td>
                </tr>
                <tr>
                    <td>Adam</td>
                    <td>Bouncer</td>
                </tr>
                <tr>
                    <td>Dee</td>
                    <td>Actress</td>
                </tr>
                <tr>
                    <td>Anna</td>
                    <td>Teacher</td>
                </tr>
            </tbody>
        </table>

    )
   }
    
}

export default Table
