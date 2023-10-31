import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import {
  PlusIcon,
  MagnifyingGlassIcon,
  Cross2Icon,
} from "@radix-ui/react-icons";
import "../index.css";
import {
  Theme,
  Flex,
  TextField,
  Card,
  Inset,
  Strong,
  Text,
  Button,
} from "@radix-ui/themes";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function AddOOTD(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const onSubmitForm = (FormData) => {
    const formData = new FormData();
    formData.append("email", formData.email);
    formData.append("question", formData.question);
    formData.append("image", selectedImage);

    // Your custom function with additional information
    // You can pass formData and any other data you need
    customSubmitFunction(formData);
  };

  const customSubmitFunction = (FormData, additionalInfo) => {
    // Perform your custom actions with the formData and additionalInfo
    // This can include making API requests, handling the form data, etc.
  };

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

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
      title: "",
      content: "",
    });
    event.preventDefault();
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
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p className="Text" style={{ marginBottom: 10 }}>
              add fit of the day
            </p>

            <TextField.Input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="today's date"
              type="date"
            />

            <TextField.Input
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="fit description"
            />

            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>

            <fieldset className="Fieldset">
              <label className="Label" htmlFor="width">
                date
              </label>
              <input
                className="Input"
                id="date"
                type="date"
                defaultValue="100%"
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="description">
                fit description
              </label>
              <input
                className="Input"
                id="description"
                defaultValue="off shoulder short sleeve"
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="weather">
                weather
              </label>
              <input
                className="Input"
                id="weather"
                defaultValue="80 degrees, warm, sunny"
              />
            </fieldset>

            <Button radius="full" variant="soft">
              Edit profile
            </Button>
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
