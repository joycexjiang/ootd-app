import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Theme, Card, Inset, Strong, Text, Button } from "@radix-ui/themes";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Card size="2" style={{ maxWidth: 240 }}>
      <Inset clip="padding-box" side="top" pb="current">
        {/* props.image? */}
        <img
          src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          alt="Bold typography"
          // props.description
          style={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: 140,
            backgroundColor: "var(--gray-5)",
          }}
        />
      </Inset>
      <Text as="p" size="3">
        <Strong>{props.title}</Strong> {props.content}
      </Text>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </Card>
  );
}

export default Note;
