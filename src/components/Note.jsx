import React from "react";
import { TrashIcon } from "@radix-ui/react-icons";
import { Card, Inset, Strong, Text, Flex } from "@radix-ui/themes";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Card size="3" style={{ maxWidth: 500 }}>
      <Flex direction="column" gap="3">
        <Inset clip="padding-box" side="top" pb="current">
          {props.image && ( // Check if an image is provided
            <img
              src={props.image} // Use the image from the props
              alt={props.content} // Set an appropriate alt text
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                backgroundColor: "var(--gray-5)",
              }}
            />
          )}
        </Inset>
        <Text as="p" size="3">
          <Strong>{props.date}</Strong> <br></br>
          {props.content}
        </Text>

        {/* Version 2 should include multi select dropdown of tags */}
        {/* <Flex gap="2">
          <Badge color="orange">tag orange</Badge>
          <Badge color="blue">tag blue</Badge>
          <Badge color="green">tag green</Badge>
        </Flex> */}

        <button
          className="IconButton"
          onClick={handleClick}
          aria-label="Update dimensions"
          mt="3"
        >
          <TrashIcon />
        </button>
      </Flex>
    </Card>
  );
}

export default Note;
