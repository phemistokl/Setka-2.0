import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';

import Board from './Board.jsx';
import Modal from './Modal.jsx';

import { updateTicket, toggleModal, dashBoard } from '../../actions';

@connect(mapStateToProps, { updateTicket, toggleModal, dashBoard })
export default class DashboardBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickets: []
        };
    }

    componentDidMount() {
        this.props.dashBoard();
    }

    render() {
        return (

            <div>
              { this.props.isOpen ? <Modal /> : null }
              <Row className="show-grid">
                <Col xs={12} sm={12} md={12} lg={12}><h1>Dashboard</h1></Col>
              </Row>
                        {
                        	this.props.dashboard.map(ticket =>
                        		<Board
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
                        	   />
                        	)
                        }
             </div>
        );
    }
}

function mapStateToProps(state) {
	return {
		dashboard: state.tickets.dashboard,
    isOpen: state.modal.isOpen
	};
}
