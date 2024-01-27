import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../Componants/Note.css';

const Note = (props) => {

  const deleteNote = () => {
    props.deleteitem(props.id);
  }
  return (
    <div className="note-card">
      <h1>{props.title}</h1>
      <br />
      <p>{props.content}</p>
      <button type="button" onClick={deleteNote} className="btn btn-danger">
        <DeleteForeverIcon />
      </button>
    </div>
  );
};

export default Note;
