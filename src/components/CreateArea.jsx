import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { TextField, Button } from "@radix-ui/themes";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
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

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <TextField.Input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="today's date"
            type="date"
          />
        )}

        <Button radius="full" variant="soft">
          Edit profile
        </Button>

        <Button gray>
          <label htmlFor="imageUpload" className="ImageUploadLabel">
            {selectedImage ? "uploaded" : "upload image"}
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </Button>

        <TextField.Input
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="fit description"
          rows={isExpanded ? 3 : 1}
        />

        <button className="Button gray">
          <label htmlFor="imageUpload" className="ImageUploadLabel">
            {selectedImage ? "uploaded" : "upload image"}
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </button>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
