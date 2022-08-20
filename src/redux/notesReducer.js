const initialState = {
    notes: [],
}

export const ActionTypes ={
    SETNOTES: 'SETNOTES',
    DELETENOTE: 'DELETENOTE',
    NEWNOTE: 'NEWNOTE',
    EDITNOTE: 'EDITNOTE'
}

export const ActionCreators = {
    setNotes: payload => ({type: ActionTypes.SETNOTES, payload}),
    deleteNote: payload => ({type: ActionTypes.DELETENOTE, payload}),
    newNote: payload => ({type: ActionTypes.NEWNOTE, payload}),
    editNote: payload => ({type: ActionTypes.EDITNOTE, payload}),
}

export default function NotesReducer(state = initialState, action){
    switch(action.type){
        case ActionTypes.SETNOTES:
            return {...state, notes: [...action.payload]};
        case ActionTypes.DELETENOTE:
            // for(let i =0; i < state.notes.length; i++){
            //     if(state.notes[i].id === action.payload.id){
            //         state.notes.splice(i, 1);
            //         break;
            //     }
            // }
            // return {...state, notes: [...state.notes]}
            return {
                ...state, notes: [...state.notes.filter(note =>
                    note.id !== action.payload.id)]
            }

        case ActionTypes.NEWNOTE:
            return {...state, notes: [...state.notes, action.payload]}
        case ActionTypes.EDITNOTE:
            let notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    note = action.payload
                }
                return note;
            })
            return { ...state, notes: [...notes] }

            // for(let i =0; i < state.notes.length; i++){
            //     if(state.notes[i].id === action.payload.id){
            //         state.notes[i].value = action.payload.value;
            //     }
                
            // }
            // return {...state, notes: [...state.notes]}
        default:
            return state;
    }
}