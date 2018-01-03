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
            <tr className="ticketBox">
              <td>{title}</td>
              <td><Date date={date} /></td>
              <td><div className="flex-td-container"><div className="like-box"><div className="like-text-box">{like}</div><div className="like-icon-box"><a className="like-icon"></a><a className="unlike-icon"></a></div></div><div className="button-box"><a onClick={this.currentTicket.bind(this)}>Edit</a></div></div></td>
            </tr>
          );
    }
}
