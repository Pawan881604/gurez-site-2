import { convertToRaw,ContentState, EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { Box, Container } from "@mui/material";

const Draft_wysiwyg = ({ box_class,getcontent,value }) => {
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const _contentState = ContentState.createFromText('Sample content state')
  const raw = convertToRaw(_contentState) // RawDraftContentState JSON
   const [editorState, setEditorState] = useState(raw);

  const onEditorStateChange = function (editorState) {
    setEditorState(editorState);
    // const data = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    // getcontent(draftToHtml(convertToRaw(editorState.getCurrentContent())))
  };
  return (
    <>
      <Container maxWidth="lg" className="control-editor-content-containor">
        <Box
          className={box_class}
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <Editor
                  defaultContentState={editorState}
            // editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
            mention={{
              separator: " ",
              trigger: "@",
              suggestions: [
                { text: "APPLE", value: "apple" },
                { text: "BANANA", value: "banana", url: "banana" },
                { text: "CHERRY", value: "cherry", url: "cherry" },
                { text: "DURIAN", value: "durian", url: "durian" },
                { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
                { text: "FIG", value: "fig", url: "fig" },
                { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
                { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
              ],
            }}
          />
        </Box>
      </Container>
    </>
  );
};
export default Draft_wysiwyg;
