import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

import Ticket from './Ticket.jsx';
import Modal from './Modal.jsx';

import { updateTicket, createTicket, toggleModal } from '../../actions';

@connect(mapStateToProps, { updateTicket, createTicket, toggleModal })
export default class TicketsBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickets: []
        };

        this.createTicket = this.createTicket.bind(this);
    }

    createTicket() {
        this.props.createTicket();
        this.props.toggleModal();
    }

    render() {
        return (

            <div>
              { this.props.isOpen ? <Modal /> : null }
              <Row className="show-grid">
                <Col xs={12} sm={12} md={12} lg={12}><h1>Ideas</h1><Button className="addTicket" onClick={this.createTicket}>Add Ticket</Button></Col>
              </Row>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Likes</th>
                  </tr>
                </thead>
                <tbody>
                        {
                        	this.props.tickets.map(ticket =>
                        		<Ticket
                        			key={ticket.id}
                        			id={ticket.id}
                        			title={ticket.title}
                        			description={ticket.description}
                        			date={ticket.date}
                              editor={ticket.editor}
                        			author={ticket.author}
                        			designer={ticket.designer}
                        			photo_editor={ticket.photo_editor}
                              status={ticket.status}
                              like={ticket.like}
                              dash={ticket.dash}
                        	   />
                        	)
                        }
                  </tbody>
                </Table>
             </div>
        );
    }
}

function mapStateToProps(state) {
	return {
		tickets: state.tickets.tickets,
    isOpen: state.modal.isOpen
	};
}
