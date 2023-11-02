import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { PlusIcon, Cross2Icon } from "@radix-ui/react-icons";
import "../index.css";

function AddOOTD(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [note, setNote] = useState({
    date: "",
    content: "",
    image: null, //add image property to the note
  });

  const handleImageChange = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(file);
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      date: "",
      content: "",
      image: selectedImage, //reset the image property
    });
    //event.preventDefault();
    setSelectedImage(null); // Reset the selectedImage
  }

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is 0-based
    const day = String(currentDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton" aria-label="Update dimensions">
          <PlusIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p className="Text" style={{ marginBottom: 10 }}>
              add fit of the day
            </p>

            <button className="Button violet">
              <label htmlFor="imageUpload" className="ImageUploadLabel">
                {selectedImage ? "uploaded" : "upload fit"}
              </label>
              <input
                type="file"
                id="imageUpload"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </button>

            <fieldset className="Fieldset">
              <label className="Label" htmlFor="width">
                date
              </label>
              <input
                className="Input"
                name="date"
                onChange={handleChange}
                value={note.date}
                defaultValue={getCurrentDate()}
                type="date"
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label">fit description</label>
              <input
                name="content"
                className="Input"
                onChange={handleChange}
                value={note.content}
                placeholder="off shoulder short sleeve"
              />
            </fieldset>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                className="IconButton"
                onClick={submitNote}
                aria-label="Update dimensions"
              >
                <PlusIcon />
              </button>
            </div>
          </div>
          <Popover.Close className="PopoverClose" aria-label="Close">
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default AddOOTD;
