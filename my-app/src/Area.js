import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

// Get the proops properties of the MakeArea component
function MakeArea(props) {
  function notesubmitted(event) {
    //call the onadd note props from the app componet this function handles adding new properites
    props.onAdd(note);
    setnote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  //create sttate to handle what is be tyoe in the box area
  const [note, setnote] = useState({
    title: "",
    content: "",
  });
  const [EXPANABLW, setEXPANABLW] = useState();

  //update what is be type in the title and textarea box

  function UpdateNote(event) {
    const { name, value } = event.target;
    setnote((newnote) => ({ ...newnote, [name]: value }));
  }
  //this is the function that help the zoom efffect to expand
  function EXPANABE() {
    setEXPANABLW(true);
  }
  return (
    <>
      <div className="form">
        <form>
          {/* if it false show only it untill it is true display the other */}
          {EXPANABLW && (
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={note.title}
              onChange={UpdateNote}
            />
          )}

          <textarea
            name="content"
            value={note.content}
            placeholder="Take note..."
            rows={EXPANABLW ? 3 : 1}
            onClick={EXPANABE}
            onChange={UpdateNote}
          />
          {/* //callthe add function when click */}
          <Zoom in={EXPANABLW}>
            <Fab onClick={notesubmitted} >
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    </>
  );
}

export default MakeArea;
