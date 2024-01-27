import React, { useState } from 'react';
import '../Componants/CreateNote.css';
import 'bootstrap/dist/css/bootstrap.css';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const CreateNote = (props) => {
    const [hide, setHide] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: "",
    })

    const InputEvent = (e) => {
        // const value = e.target.value;
        // const name = e.target.name;

        const { value, name } = e.target;
        setNote((prevdata) => {
            return {
                ...prevdata,
                [name]: value,
            }

        })

    }

    const addEvent = () => {
        props.passnote(note);
        setNote({
            title: "",
            content: "",
        })

    }

    const expandit = () => {
        setHide(true)
    }

    const hideall = () => {
        setHide(false)
    }


    return (
        <div className="note-card" onDoubleClick={hideall}>
            <form>
                <input
                    type='text'
                    name='title'
                    value={note.title}
                    onChange={InputEvent}
                    placeholder='Title'
                    autoComplete='off'
                    required
                    onClick={expandit} />
                <br />
                <br />
                {hide ?
                    <textarea
                        rows=''
                        cols=''
                        name='content'
                        value={note.content}
                        onChange={InputEvent}
                        placeholder='Write Note..'
                        required


                    />
                    : null}
            </form>
            {hide ?
                <button type="button" onClick={addEvent} className="btn btn-warning"><NoteAddIcon /></button>
                : null}
        </div>
    );
}

export default CreateNote;
