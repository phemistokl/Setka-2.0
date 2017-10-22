import React, { Component } from 'react';
import { connect } from 'react-redux';

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
              <div className="addTicket" onClick={this.createTicket}>Add Ticket</div>
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
                        	   />
                        	)
                        }
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
