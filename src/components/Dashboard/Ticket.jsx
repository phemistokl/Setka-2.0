import React, { Component } from 'react';
import { connect } from 'react-redux';

import { currentTicket, toggleModal } from '../../actions';

@connect(undefined, { currentTicket, toggleModal })
export default class Ticket extends Component {
    constructor(props) {
        super(props);

        this.currentTicket = this.currentTicket.bind(this);
    }

    currentTicket() {
        this.props.currentTicket(this.props.id);
        this.props.toggleModal();
    }

    render() {

          const { title, description, date, editor, author, designer, photo_editor, status, like } = this.props;

          return (
            <div className="ticketBox" onClick={this.currentTicket.bind(this)}>
              <div>{title}</div>
            </div>
          );
    }
}
