import React, { Component } from 'react';
import { connect } from 'react-redux';

import { currentTicket, toggleModal } from '../../actions';

@connect(undefined, { currentTicket, toggleModal })
export default class Board extends Component {
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
            <div className="dashBox" onClick={this.currentTicket.bind(this)}>
              <div>{title}</div>
              <div>{status}</div>
            </div>
          );
    }
}
