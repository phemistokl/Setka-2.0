import React, { Component } from 'react';
import { connect } from 'react-redux';

import Date from './Date.jsx';

import { editTicket, updateTicket, toggleModal } from '../../actions';

@connect(mapStateToModalProps, { editTicket, updateTicket, toggleModal })
export default class Modal extends Component {
    constructor(props) {
        super(props);

          this.state = ({
            status: props.status
          });
    }

    componentDidMount() {
        $('#editTickets').modal('show');
    }

    closeModal() {
        // need to have component inside different this context
        let modalComponent = this;
        $('#editTickets').modal('hide');
        // Make sure bootstrap modal close finishes before
        // changing modal isOpen to false otherwise background gets stuck
        $('#editTickets').on('hidden.bs.modal', function () {
          modalComponent.props.toggleModal();
        });
    }

    handleCreate() {
      const ticket = {
          status: this.state.status
      };

      this.props.updateTicket(this.props.id, ticket);

      this.closeModal();
    }

    handleStatusChange(e) {
      e.preventDefault();
      this.setState({
        status: e.target.value
      });
    }

    render() {
      const { title, description, date, editor, author, designer, photo_editor, like, dash } = this.props;

      if (!this.props.isOpen) {
        this.closeModal();
      }
      return <div
        id={"editTickets"}
        className="modal fade"
        data-backdrop="static"
        tabIndex="-1"
        role="dialog"
          >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={this.closeModal.bind(this)}
                  type="button" className="close"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                  <h4 className="modal-title">Dash</h4>
              </div>
              <div className="modal-body">

                <div>{title}</div>
                <div>{description}</div>
                <div><Date date={date} /></div>
                <div>{editor}</div>
                <div>{author}</div>
                <div>{designer}</div>
                <div>{photo_editor}</div>

                <div className="input-form-group">
                  <label htmlFor="ticket-status">Status</label>
                  <select value={this.state.status} onChange={this.handleStatusChange.bind(this)} id="ticket-dash">
                    <option value="Верстаеться">Верстаеться</option>
                    <option value="Картинки готовы">Картинки готовы</option>
                    <option value="Текст готов">Текст готов</option>
                    <option value="Утвержден">Утвержден</option>
                  </select>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default mystyle">
                    Cancel
                </button>
                <button onClick={this.handleCreate.bind(this)} type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
      </div>
    }
}

function mapStateToModalProps(state) {
  return {
    id: state.tickets.current[0].id,
    title: state.tickets.current[0].title,
    description: state.tickets.current[0].description,
    date: state.tickets.current[0].date,
    editor: state.tickets.current[0].editor,
    author: state.tickets.current[0].author,
    designer: state.tickets.current[0].designer,
    photo_editor: state.tickets.current[0].photo_editor,
    status: state.tickets.current[0].status,
    dash: state.tickets.current[0].dash,
    isOpen: state.modal.isOpen,
    newEntry: state.modal.newEntry
  };
}
