import { useContext, createContext, useReducer } from "react";
import notesReducer from "../reducers/notesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialState = {
    id: "",
    title: "",
    desc: "",
    notes: [],
  };

  const [{ id, title, desc, notes }, notesDispatch] = useReducer(
    notesReducer,
    initialState,
  );

  return (
  <NotesContext.Provider
    value={{ id, title, desc, notes, notesDispatch }}
  > 
    {children}
  </NotesContext.Provider>
  )
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
