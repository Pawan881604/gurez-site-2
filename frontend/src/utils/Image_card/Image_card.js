import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllImages, imagePrimary } from "../../actions/imageGelleryAction";
import { Button } from "@mui/material";
import ImageUploaderForm from "../../components/admin/ImageGellery/uploadimage/ImageTabToggle";
const Image_card = ({selectedImage}) => {
  const [open, setOpen] = useState(false);
  const [checkPrimary, setcheckPrimary] = useState("");
  const [isVisibal, setIsVisibal] = useState(null);
  const dispatch = useDispatch();
  const { images } = useSelector((state) => state.selectedImages);
  // const [ParentCat, setParentCat] = useState([]);

  const handlePrimary = (item, i) => {
    setIsVisibal(i);
    setcheckPrimary(item._id);
    dispatch(imagePrimary(item._id));
  };

  //--------------handleImageClickOpen
  const handleImageClickOpen = () => {
    setOpen(true);

    dispatch(getAllImages());
  };
  //----------------handleImageClickClose

  const handleImageClickClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleImageClickOpen}>
        Image upload
      </Button>
      <ImageUploaderForm open={open} close={handleImageClickClose} />
      <div className="non-Primary-containor">
          {images
            ? images &&
              images.map((item, i) => (
                <div key={i}>
                  {item._id !== checkPrimary ? (
                    <img src={item.url} alt="jgjg" />
                  ) : null}
                </div>
              ))
            : selectedImage &&
              selectedImage.map((item, i) => (
                <div
                  className={isVisibal === i ? "non-Primary-inactive" : null}
                  onClick={() => {
                    handlePrimary(item, i);
                  }}
                  key={i}
                >
                  {item._id !== checkPrimary ? (
                      <img src={item.url} alt="jgjg" />
                  ) : null}
                </div>
              ))}
        </div>
    </>
  );
};

export default Image_card;
