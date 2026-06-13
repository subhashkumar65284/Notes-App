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
        return {...state , notes:[...state.notes,{title:state.title,desc:state.desc,id:uuid()}]}
    default:
      return state;
  }
};

export default notesReducer;