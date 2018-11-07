import * as React from 'react';
import './App.css';

// import logo from "./logo.svg";
import { Col, Container, Row, Alert, Input, Button } from 'reactstrap';
import OrderList from './order/OrderList';
import { MenuListApp } from './menubar/reducer';

// const menuitems = [
//   { id: 'dashboard', title: 'Dashboard' },
//   { id: 'orders', title: 'Order Management' },
//   { id: 'shipping', title: 'Shipping' },
// ];

class App extends React.Component {
  public menuClicked = (id: string) => (event: any) => {
    console.log('clicked ' + id);
  };

  public render() {
    const Content = OrderList;
    return (
      <Container>
        <Row>
          <Col xs="3" style={{backgroundColor: "#00B1E1"}}>
            <MenuListApp />
          </Col>
          <Col xs="9">
            <h1>Order Management</h1>
            <Row>
              <Col xs="11"><Input type="email" name="email" id="exampleEmail" placeholder="Search sales order or customer name..." /></Col>
              <Col xs="1"><Button color="secondary">Print</Button></Col>
            </Row>
            <Row>
              <Col xs="2"><Button>Date</Button></Col>
              <Col xs="2"><Button>Status</Button></Col>
              <Col xs="2"><Button>Channel</Button></Col>
              <Col xs="2"><Button>Apply Filter</Button></Col>
              <Col xs="2"><Button>Clear Filter</Button></Col>
            </Row>
            <Content />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
