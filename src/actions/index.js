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
		status: ticket.status,
		like: 0,
		dash: ticket.dash
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
		status: ticket.status,
		like: ticket.like,
		dash: ticket.dash
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

// export const dashBoard = () => {
// 		return {
//     		type: 'DASHBOARD'
// 		};
// };

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

export const setSort = sort => {
		return {
				type: 'SET_SORT',
				sort
		}
}
