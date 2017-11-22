import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTicket, editTicket, updateTicket, deleteTicket, toggleModal } from '../../actions';

@connect(mapStateToModalProps, { addTicket, editTicket, updateTicket, deleteTicket, toggleModal })
export default class Modal extends Component {
    constructor(props) {
        super(props);

        if (!this.props.newEntry) {
          this.state = ({
            title: props.title,
            description: props.description,
            date: props.date,
            editor: props.editor,
            author: props.author,
            designer: props.designer,
            photo_editor: props.photo_editor,
            status: props.status,
            like: props.like,
            dash: props.dash
          });
        } else {
          this.state = ({
            title: '',
            description: '',
            date: '',
            editor: '',
            author: '',
            designer: '',
            photo_editor: '',
            status: '',
            like: '',
            dash: ''
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
          date: this.state.date,
          editor: this.state.editor,
          author: this.state.author,
          designer: this.state.designer,
          photo_editor: this.state.photo_editor,
          status: this.state.status,
          like: this.state.like,
          dash: this.state.dash,
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

    handleAuthorChange(e) {
      e.preventDefault();
      this.setState({
        author: e.target.value
      });
    }

    handleDesignerChange(e) {
      e.preventDefault();
      this.setState({
        designer: e.target.value
      });
    }

    handlePhotoEditorChange(e) {
      e.preventDefault();
      this.setState({
        photo_editor: e.target.value
      });
    }

    handleStatusChange(e) {
      e.preventDefault();
      this.setState({
        status: e.target.value
      });
    }

    handleDashChange(e) {
      e.preventDefault();
      this.setState({
        dash: e.target.value
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

                <div className="input-form-group">
                  <label htmlFor="ticket-author">Ticket author</label>
                  <input type="text"
                    onChange={this.handleAuthorChange.bind(this)}
                    id="ticket-author"
                    className="form-control"
                    value={this.state.author}
                  />
                </div>

                <div className="input-form-group">
                  <label htmlFor="ticket-designer">Ticket designer</label>
                  <input type="text"
                    onChange={this.handleDesignerChange.bind(this)}
                    id="ticket-designer"
                    className="form-control"
                    value={this.state.designer}
                  />
                </div>

                <div className="input-form-group">
                  <label htmlFor="ticket-photo_editor">Photo editor</label>
                  <input type="text"
                    onChange={this.handlePhotoEditorChange.bind(this)}
                    id="ticket-photo_editor"
                    className="form-control"
                    value={this.state.photo_editor}
                  />
                </div>

                <div className="input-form-group">
                  <label htmlFor="ticket-status">Status</label>
                  <input type="text"
                    onChange={this.handleStatusChange.bind(this)}
                    id="ticket-status"
                    className="form-control"
                    value={this.state.status}
                  />
                </div>

                <div className="input-form-group">
                  <label htmlFor="ticket-dash">Dashboard</label>
                  <select value={this.state.dash} onChange={this.handleDashChange.bind(this)} id="ticket-dash">
                    <option value="false">false</option>
                    <option value="true">true</option>
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
    date: state.tickets.current[0].date,
    editor: state.tickets.current[0].editor,
    author: state.tickets.current[0].author,
    designer: state.tickets.current[0].designer,
    photo_editor: state.tickets.current[0].photo_editor,
    status: state.tickets.current[0].status,
    like: state.tickets.current[0].like,
    dash: state.tickets.current[0].dash,
    isOpen: state.modal.isOpen,
    newEntry: state.modal.newEntry
  };
}
