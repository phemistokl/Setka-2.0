export const addTicket = ticket => {
	return {
		type: "ADD_TICKET",
		id: Date.now(),
		title: ticket.title,
		description: ticket.description,
		date: new Date(),
		editor: ticket.editor,
		author: ticket.author,
		designer: ticket.designer,
		photo_editor: ticket.photo_editor,
		status: ticket.status
	};
};

export const updateTicket = (id, ticket) => {
	return {
		type: "UPDATE_TICKET",
		id,
		title: ticket.title,
		description: ticket.description,
		date: new Date(),
		editor: ticket.editor,
		author: ticket.author,
		designer: ticket.designer,
		photo_editor: ticket.photo_editor,
		status: ticket.status
	};
};

export const deleteTicket = id => {
    return {
        type: 'DELETE_TICKET',
        id
    };
};

export const createTicket = () => {
		return {
    		type: 'CREATE_TICKET'
		};
};

export const currentTicket = id => {
		return {
    		type: 'CURRENT_TICKET',
				id
		};
};

export const toggleModal = () => {
		return {
    		type: 'TOGGLE_MODAL'
		};
};
