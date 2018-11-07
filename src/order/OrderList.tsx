import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

export default class OrderList extends Component {
  public render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>SO Number</th>
            <th>Status</th>
            <th>DO Date</th>
            <th>Customer Name</th>
            <th>Channel</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SO123456001</td>
            <td>OPEN</td>
            <td>Sat, 11 Okt 2018</td>
            <td>Ade Muhammad</td>
            <td>B2C</td>
            <td><Button>View</Button></td>
          </tr>
          <tr>
            <td>SO123456002</td>
            <td>NOT SCHEDULED</td>
            <td>Sat, 10 Okt 2018</td>
            <td>Furika Arkani</td>
            <td>B2C</td>
            <td><Button>View</Button></td>
          </tr>
          <tr>
            <td>SO123456003</td>
            <td>SCHEDULED</td>
            <td>Thu, 22 Sep 2018</td>
            <td>Ashar Setiawan</td>
            <td>B2B</td>
            <td><Button>View</Button></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
