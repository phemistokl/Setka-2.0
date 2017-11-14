import React, { Component } from 'react';
import { connect } from 'react-redux';

import Date from './Date.jsx';

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

          const { title, description, date, editor, author, designer, photo_editor, status, like, dash } = this.props;

          return (
            <tr className="ticketBox" onClick={this.currentTicket.bind(this)}>
              <td>{title}</td>
              <td><Date date={date} /></td>
              <td>{like}</td>
            </tr>
          );
    }
}
