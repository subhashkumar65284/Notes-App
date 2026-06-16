import { v4 as uuid } from "uuid";

const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return { ...state, title: payload };
    case "DESC":
      return { ...state, desc: payload };
    case "RESET":
      return { ...state, desc: "", title: "" };
    case "ADD":
      return {
        ...state,
        notes: [
          ...state.notes,
          { title: state.title, desc: state.desc, starred: false, id: uuid() },
        ],
      };
    case "DELETE":
         const noteToDelelte = state.notes.find((note) => note.id === payload);
      return {
        ...state,
        bin: [...state.bin, noteToDelelte ],
        notes: state.notes.filter((note) => note.id !== payload),
      };
    case "DELETE_FOREVER":
      return {
        ...state,
        bin: state.bin.filter((note) => note.id !== payload),
      };
    case "RECYCLE":
         const noteToRecycle = state.bin.find((note) => note.id === payload);
      return {
        ...state,
        notes: [...state.notes, noteToRecycle ],
        bin: state.bin.filter((note) => note.id !== payload),
      };
    case "STARRED":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload ? { ...note, starred: !note.starred } : note,
        ),
      };
    case "ARCHIVE": {
      const noteToArchive = state.notes.find((note) => note.id === payload);
      return {
        ...state,
        archive: [...state.archive, noteToArchive ],
        notes: state.notes.filter((note) => note.id !== payload),
      };
    }
    case "UNARCHIVE": {
      const noteToUnarchive = state.archive.find((note) => note.id === payload);
      return {
        ...state,
        notes: [...state.notes, noteToUnarchive ],
        archive: state.archive.filter((note) => note.id !== payload),
      };
    }
    default:
      return state;
  }
};

export default notesReducer;
