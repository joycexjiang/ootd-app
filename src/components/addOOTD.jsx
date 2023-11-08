import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { PlusIcon, Cross2Icon, CaretDownIcon } from "@radix-ui/react-icons";
import "../index.css";
import { Theme, DropdownMenu, Button } from "@radix-ui/themes";

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
    props.onAdd({
      date: note.date,
      content: note.content,
      image: selectedImage, // set the image from selectedImage
    });
    setNote({
      date: "",
      content: "",
      image: null, // reset the image property
    });
    setSelectedImage(null);
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton">
          <PlusIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={10}>
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
                placeholder="description"
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
