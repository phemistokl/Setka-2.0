import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux'

const InitialState = [
	{
		id: 0,
		title: "Ticket 1",
		description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
		date: new Date('2017-03-23T12:00:00Z'),
		editor: "Ivan Petrov",
		author: "Sergei Sidorov",
		designer: "Katy Ivanova",
		photo_editor: "Peter Gabriel",
		status: "Текст готов",
		like: 100500,
		dash: true,
	},
	{
		id: 1,
		title: "Ticket 2",
		description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
		date: new Date('2017-03-23T12:00:00Z'),
		editor: "Ivan Petrov",
		author: "Sergei Sidorov",
		designer: "Katy Ivanova",
		photo_editor: "Peter Gabriel",
		status: "Текст готов",
		like: 100500,
		dash: false,
	},
	{
		id: 2,
		title: "Ticket 3",
		description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
		date: new Date('2017-03-23T12:00:00Z'),
		editor: "Ivan Petrov",
		author: "Sergei Sidorov",
		designer: "Katy Ivanova",
		photo_editor: "Peter Gabriel",
		status: "Текст готов",
		like: 100500,
		dash: true,
	},
	{
		id: 3,
		title: "Ticket 4",
		description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
		date: new Date('2017-03-23T12:00:00Z'),
		editor: "Ivan Petrov",
		author: "Sergei Sidorov",
		designer: "Katy Ivanova",
		photo_editor: "Peter Gabriel",
		status: "Текст готов",
		like: 100500,
		dash: false,
	},
	{
		id: 4,
		title: "Ticket 5",
		description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
		date: new Date('2017-03-23T12:00:00Z'),
		editor: "Ivan Petrov",
		author: "Sergei Sidorov",
		designer: "Katy Ivanova",
		photo_editor: "Peter Gabriel",
		status: "Текст готов",
		like: 100500,
		dash: false,
	},
	{
		id: 5,
		title: "Ticket 6",
		description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
		date: new Date('2017-03-23T12:00:00Z'),
		editor: "Ivan Petrov",
		author: "Sergei Sidorov",
		designer: "Katy Ivanova",
		photo_editor: "Peter Gabriel",
		status: "Текст готов",
		like: 100500,
		dash: false,
	},
	{
		id: 6,
		title: "Ticket 7",
		description: "Lorem Ipsum - это текст, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
		date: new Date('2017-03-23T12:00:00Z'),
		editor: "Ivan Petrov",
		author: "Sergei Sidorov",
		designer: "Katy Ivanova",
		photo_editor: "Peter Gabriel",
		status: "Текст готов",
		like: 100500,
		dash: true,
	},
];

function ticket(state = {}, action) {
	switch (action.type) {
		case 'ADD_TICKET': {
			return {
					id: action.id,
					title: action.title,
					description: action.description,
					date: action.date,
					editor: action.editor,
					author: action.author,
					designer: action.designer,
					photo_editor: action.photo_editor,
					status: action.status,
					like: action.like,
					dash: action.dash
				}
		}

		case 'DASHBOARD': {
        return state.dash == true;
    }

		case 'CURRENT_TICKET': {
        return state.id == action.id;
    }

		case 'UPDATE_TICKET': {
			if (state.id == action.id) {
				return {
					id: action.id,
					title: action.title,
					description: action.description,
					date: action.date,
					editor: action.editor,
					author: action.author,
					designer: action.designer,
					photo_editor: action.photo_editor,
					status: action.status,
					like: action.like,
					dash: action.dash
					}
				} else {
					return state
				}
    }

		case 'DELETE_TICKET': {
        return state.id !== action.id;
    }

		default: {
			return state;
		}
	}
};

function tickets(state = { tickets: InitialState, current: [{id: ""}], dashboard:[{}] }, action) {
	switch (action.type) {
		case 'ADD_TICKET': {
			return {
        ...state,
        tickets: [...state.tickets,
					ticket(undefined, action)
				]
      }
		}

		case 'DASHBOARD': {
      return {
				...state,
				dashboard: state.tickets.filter(item => ticket(item, action))
			}
    }

		case 'CURRENT_TICKET': {
      return {
				...state,
				current: state.tickets.filter(item => ticket(item, action))
			}
    }

		case 'UPDATE_TICKET': {
      return {
				...state,
				tickets: state.tickets.map(item => ticket(item, action))
			}
    }

		case 'DELETE_TICKET': {
      return {
				...state,
				tickets: state.tickets.filter(item => ticket(item, action))
			}
    }

		default: {
			return state;
		}
	}
};

function modal( state = { isOpen: false, newEntry: false }, action) {
    switch(action.type) {
      case 'TOGGLE_MODAL':
        return {
          ...state,
          isOpen: !state.isOpen
        };
      case 'CREATE_TICKET':
        return {
          ...state,
          newEntry: true
        };
      case 'CURRENT_TICKET':
        return {
          ...state,
          newEntry: false
        };
      default:
        return state
    }
};

export default combineReducers({ tickets, ticket, modal, routing });
