import React, { useState } from "react";
import Header from "./Header.js";
import Note from "./note.js";
import MainArea from "./Area.js";
import Footer from "./Footer.js";
import style from "./style.css";
import Fab from "@mui/material/Fab";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useEffect } from "react";

function App() {
  //updatenote by using and array
  const [notes, setnote] = useState([]);
  const [toggle, settoggle] = useState(true);

  const styling = {};

  // store the notes in a local storage so as when the user come back it does not refreshes
  useEffect(() => {
    let data = localStorage.getItem("notes");
    if (data != null) {
      setnote(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    let datas = localStorage.setItem("notes", JSON.stringify(notes));
    console.log(datas);
  }, [notes]);
  useEffect(() => {
    let toggledata = localStorage.getItem("toggle");
    if (toggledata!= null) {
      settoggle(JSON.parse(toggledata));
    }
  }, []);
  useEffect(() => {
    let toggledatas = localStorage.setItem("toggle", JSON.stringify(toggle));
  }, [toggle]);

  function hi() {
    settoggle((p) => !p);
    console.log(toggle);
  }
  // this function add note when it is be clicked by passing a note argument from the area component
  function Addnote(note) {
    //updataenote to render it a note conponent when it is be clicked ,giving an array of note
    setnote((addingNote) => [...addingNote, note]);
  }

  // the delete function pass an id which is gotten from the note key an id
  function deleting(id) {
    //update the note
    setnote((prevs) => {
      // and filter all index that is not equal to the id i.e all array that has the same id and index must be deleted
      return prevs.filter((items, index) => {
        return index !== id;
      });
    });
  }
  //The mappingNote maps all notes item to the Note component so aas to create new Note component whenever the Addnote function is call
  const mappingNote = notes.map((items, index) => (
    <Note
      key={index}
      id={index}
      title={items.title}
      content={items.content}
      ondelete={deleting}
    />
  ));

  return (
    <div
      className="body"
      style={{
        backgroundColor: toggle ? "#fff" : "rgba(9, 9, 9, 0.878)",
        Height: "200vh",
        minHeight: "100vh",
      }}
    >
      <Header />
      <div style={{ marginTop: "10px" }}>
        <Fab onClick={hi}>{toggle ? <LightModeIcon /> : <DarkModeIcon />}</Fab>
      </div>
      {/* addfunction is call on the area component */}
      <MainArea onAdd={Addnote} />
      {mappingNote}
      <Footer />
    </div>
  );
}

export default App;
