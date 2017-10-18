import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTicket, editTicket, updateTicket, deleteTicket, toggleModal } from '../actions';

@connect(mapStateToModalProps, { addTicket, editTicket, updateTicket, deleteTicket, toggleModal })
export default class Modal extends Component {
    constructor(props) {
        super(props);

        if (!this.props.newEntry) {
          this.state = ({
            title: props.title,
            description: props.description,
            editor: props.editor
          });
        } else {
          this.state = ({
            title: '',
            description: '',
            editor: ''
          });
        }
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

    handleDelete() {
        if (this.props.id && !this.props.newEntry) {
          this.props.deleteTicket(this.props.id);
        }
        this.closeModal();
    }

    handleCreate() {
      const ticket = {
          title: this.state.title,
          description: this.state.description,
          editor: this.state.editor,
      };


        if (!this.props.newEntry) {
          this.props.updateTicket(this.props.id, ticket);
        }
        else {
          this.props.addTicket(ticket);
        }

      this.closeModal();
    }

    handleTitleChange(e) {
      e.preventDefault();
      this.setState({
        title: e.target.value
      });
    }

    handleDescriptionChange(e) {
      e.preventDefault();
      this.setState({
        description: e.target.value
      });
    }

    handleEditorChange(e) {
      e.preventDefault();
      this.setState({
        editor: e.target.value
      });
    }

    render() {
      console.log(this.props.title);
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
                {
                  !this.props.newEntry ?
                  <h4 className="modal-title">Edit Ticket</h4>
                  : <h4 className="modal-title">Create Ticket</h4>
                }
              </div>
              <div className="modal-body">
                <div className="input-form-group">
                  <label htmlFor="ticket-title">Ticket title</label>
                  <input type="text"
                    onChange={this.handleTitleChange.bind(this)}
                    id="ticket-title"
                    className="form-control"
                    value={this.state.title}
                  />
                </div>

                <div className="input-form-group">
                  <label htmlFor="ticket-description">Ticket description</label>
                  <input type="text"
                    onChange={this.handleDescriptionChange.bind(this)}
                    id="ticket-description"
                    className="form-control"
                    value={this.state.description}
                  />
                </div>
                <div className="input-form-group">
                  <label htmlFor="ticket-editor">Ticket editor</label>
                  <input type="text"
                    onChange={this.handleEditorChange.bind(this)}
                    id="ticket-editor"
                    className="form-control"
                    value={this.state.editor}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default mystyle">
                    Cancel
                </button>
                <button onClick={this.handleCreate.bind(this)} type="button" className="btn btn-primary">
                  Save changes
                </button>
                <button onClick={this.handleDelete.bind(this)} type="button" className="btn btn-danger bottom-left">
                  Delete
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
    editor: state.tickets.current[0].editor,
    isOpen: state.modal.isOpen,
    newEntry: state.modal.newEntry
  };
}
