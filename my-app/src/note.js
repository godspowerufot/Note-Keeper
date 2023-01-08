import React from "react";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function Note(props) {
  function deletes(id) {
    props.ondelete(props.id);
  }
  const [item, setnotes] = useState([
    new Date().toLocaleTimeString("en-GB", {
      time: "numeric",
    }),
  ]);
  const [dateitem, setDate] = useState([
    new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  ]);

  // store the notes in a local storage so as when the user come back it does not refreshes
  useEffect(() => {
    let Timedatass = localStorage.getItem("itemss");
    if (Timedatass != null) {
      setDate(JSON.parse(Timedatass));
    }
  }, []);
  useEffect(() => {
    let Timedata = localStorage.getItem("items");
    if (Timedata != null) {
      setnotes(JSON.parse(Timedata));
    }
  }, []);
  useEffect(() => {
    let Time = localStorage.setItem("items", JSON.stringify(dateitem));
  }, [dateitem]);

  // store the notes in a local storage so as when the user come back it does not refreshes
  useEffect(() => {
    let Timedatas = localStorage.setItem("items", JSON.stringify(item));
  }, [item]);

  return (
    <>
      <div className="note">
        <p style={{ color: "rgb(84, 84, 161)", fontSize: "10px" }}>
          {dateitem}
        </p>
        <h1>{props.title}</h1>
        <p>{props.content}</p>

        <button onClick={deletes}>
          <DeleteIcon />
        </button>

        <p style={{ color: "rgb(84, 84, 161)", fontSize: "10px" }}>{item}</p>
      </div>
    </>
  );
}

export default Note;
