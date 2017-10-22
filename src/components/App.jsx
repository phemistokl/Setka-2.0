import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

export default class App extends Component {
    render() {
        return (
          <div>
              <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Setka 2.0</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                  <Nav>
                      <LinkContainer to='/dashboard'>
                          <NavItem>Dashboard</NavItem>
                      </LinkContainer>
                      <LinkContainer to='/tickets'>
                          <NavItem>Tickets</NavItem>
                      </LinkContainer>
                  </Nav>
                </Navbar>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
