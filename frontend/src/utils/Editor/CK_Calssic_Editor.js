import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./editor.css";
import { useDispatch } from "react-redux";
import { getAllImages } from "../../actions/imageGelleryAction";
import ImgUploader from "../../components/admin/ImageGellery/uploadimage/ImageTabToggle";

const CK_Calssic_Editor = ({style_editor}) => {
  const dispatch = useDispatch();

  const [editorData, setEditorData] = useState("");

  const [open, setOpen] = useState(false);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);

    // console.log({ event, editor, data });
  };

  const handleImageClickOpen = () => {
    setOpen(true);

    dispatch(getAllImages());
  };
  const handleImageClickClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // Function to execute when the toolbar is ready
    function setupCustomButton() {
      // Select the toolbar items
      const toolbarItems = document.querySelector(".ck-toolbar__items");

      // Check if the toolbar items exist in the DOM
      if (toolbarItems) {
        const customButton = document.createElement("img");

        customButton.src = "/img_upload.png";
        customButton.className = "custom-image-uploader-btn";

        // Append the custom button to the toolbar items
        toolbarItems.appendChild(customButton);

        // Add click event listener to the custom button
        customButton.addEventListener("click", () => {
          handleImageClickOpen();
        });
      } else {
        console.error("Toolbar items not found.");
      }
    }

    // Check if the toolbar items are available periodically
    const checkToolbarInterval = setInterval(() => {
      const toolbar = document.querySelector(".ck-toolbar__items");
      if (toolbar) {
        // If toolbar is found, clear the interval and set up the custom button
        clearInterval(checkToolbarInterval);
        setupCustomButton();
      }
    }, 100);

    // Clean up the interval when the component unmounts
    return () => clearInterval(checkToolbarInterval);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <ImgUploader open={open} close={handleImageClickClose} />
      <div className={`control-editor-${style_editor}`} style={{ margin: "8px", width: "100%" }}>
        <CKEditor
          editor={ClassicEditor}
          data={editorData}
          onChange={handleEditorChange}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "blockQuote",
              "insertTable",
              "|",
              "undo",
              "redo",
            ],
            table: {
              contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
            },

            heading: {
              options: [
                {
                  model: "paragraph",
                  title: "Paragraph",
                  class: "ck-heading_paragraph",
                },
                {
                  model: "heading1",
                  view: "h1",
                  title: "Heading 1",
                  class: "ck-heading_heading1",
                },
                {
                  model: "heading2",
                  view: "h2",
                  title: "Heading 2",
                  class: "ck-heading_heading2",
                },
                {
                  model: "heading3",
                  view: "h3",
                  title: "Heading 3",
                  class: "ck-heading_heading3",
                },
                {
                  model: "heading4",
                  view: "h4",
                  title: "Heading 4",
                  class: "ck-heading_heading4",
                },
                {
                  model: "heading5",
                  view: "h5",
                  title: "Heading 5",
                  class: "ck-heading_heading5",
                },
                {
                  model: "heading6",
                  view: "h6",
                  title: "Heading 6",
                  class: "ck-heading_heading6",
                },
              ],
            },
          }}
        />
      </div>
    </>
  );
};

export default CK_Calssic_Editor;
