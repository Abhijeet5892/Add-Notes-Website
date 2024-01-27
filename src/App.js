import React, { useState } from 'react';
import Header from './Componants/Header';
import Footer from './Componants/Footer';
import CreateNote from './Componants/CreateNote';
import Note from './Componants/Note';
import './App.css';  // Import your main CSS file

const App = () => {
  const [additem, setAdditem] = useState([]);

  const addNote = (note) => {
    setAdditem((prevdata) => {
      return [...prevdata, note];
    });
  };

  const ondelete = (id) => {
    setAdditem((olddata) => {
      return olddata.filter((currdata, index) => {
        return index !== id;
      })
    })

  }

  return (
    <>
      <Header />
      <div className="app-container">
        <CreateNote passnote={addNote} />

        <div className="notes-container">
          {additem.map((val, index) => (
            <Note key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteitem={ondelete} />

          ))}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default App;
