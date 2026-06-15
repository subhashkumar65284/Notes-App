import {v4 as uuid} from "uuid"

const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
        return {...state , title:payload};
    case "DESC":
        return {...state , desc:payload};
    case "RESET":
        return {...state , desc:"",title:""};
    case "ADD":
        return {...state , notes:[...state.notes,{title:state.title,desc:state.desc,starred:false,id:uuid()}]}
    case "DELETE":
        return {...state , notes: state.notes.filter(note => note.id !== payload)}
    case "STARRED":
        return {...state ,  notes: state.notes.map((note) => note.id===payload?{...note,starred:!note.starred}:note)}
    default:
      return state;
  }
};

export default notesReducer;