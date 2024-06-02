import { memo, useEffect, useState } from "react";
import ImgUploader from "../../components/admin/ImageGellery/uploadimage/ImageTabToggle";
import { getAllImages } from "../../actions/imageGelleryAction";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import {
  ClearError,
  CreatePostCategory,
  create_new_post_sub_categore,
} from "../../actions/BlogCategoryAction";
import generateUuid from "../Uuidv4";
import { server_url } from "../Url";
import { IMAGE_ID_RESET } from "../../constants/imageGelleryCartConstants";
import {
  CREATE_CATEGORY_REQUEST,
  NEW_SUB_POST_CATEGORIE_REQUEST,
} from "../../constants/BlogCategoryConstant";
import { useAlert } from "react-alert";

const Common_categorie_form = ({
  category,
  add_parent_caregorie,
  add_sub_categorie,
  reset_type_parent_cat,
  reset_type_sub_cat,
  admin_status,
}) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, success, error } = admin_status;
  const { images } = useSelector((state) => state.selectedImages);
  const [open, setOpen] = useState(false);
  const [active_img, set_active_img] = useState(null);
  const [img_id, set_img_id] = useState(null);
  const [inputValue, setInputValue] = useState({
    Title: "",
    slug: "",
    Parent_category: "None",
    description: "",
  });
  const handelInputValue = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputValue.Parent_category === "None") {
      dispatch(add_parent_caregorie(inputValue, generateUuid(), img_id));
      return;
    }
    dispatch(add_sub_categorie(inputValue, generateUuid(), img_id));
  };

  //--------------handleImageClickOpen
  const handleImageClickOpen = () => {
    setOpen(true);
    dispatch(getAllImages());
  };

  const set_image_handler = (image_id, index) => {
    set_active_img(index);
    set_img_id(image_id._id);
  };

  useEffect(() => {
    if (images && images.length === 1) {
      set_img_id(images && images[0] && images[0]._id);
    }
    if (error) {
      alert.error(error);
      dispatch(ClearError());
    }
    if (success) {
      setInputValue({
        Title: "",
        slug: "",
        Parent_category: "None",
        description: "",
      });
      alert.success("Categore successfuly created");

      dispatch({ type: IMAGE_ID_RESET });
      dispatch({ type: reset_type_parent_cat });
      dispatch({ type: reset_type_sub_cat });
    }
  }, [images, alert, error, dispatch, success]);

  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 550,
            padding: "10px 10px 10px",
          }}
        >
          <Typography style={{ textAlign: "start !important" }}>
            {" "}
            Add new category
          </Typography>
          <Box component="form" noValidate>
            <TextField
              margin="normal"
              fullWidth
              size="small"
              type="text"
              id="Title"
              style={{ fontSize: "14px" }}
              label="Name"
              name="Title"
              autoComplete="Title"
              autoFocus
              value={inputValue.Title}
              onChange={(e) => handelInputValue(e)}
            />
            <Typography style={{ fontSize: "14px", lineHeight: "16px" }}>
              The name is how it appears on your site.
            </Typography>
            <TextField
              margin="normal"
              fullWidth
              label="Slug"
              size="small"
              type="text"
              id="slug"
              name="slug"
              autoFocus
              value={inputValue.slug}
              onChange={(e) => handelInputValue(e)}
            />
            <Typography style={{ fontSize: "14px", lineHeight: "16px" }}>
              The “slug” is the URL-friendly version of the name. It is usually
              all lowercase and contains only letters, numbers, and hyphens.
            </Typography>
            <TextField
              margin="normal"
              fullWidth
              size="small"
              id="Parent_category"
              select
              label="Parent Category"
              style={{ width: "100%" }}
              name="Parent_category"
              defaultValue="None"
              value={inputValue.Parent_category}
              onChange={(e) => handelInputValue(e)}
              SelectProps={{
                native: true,
              }}
            >
              {" "}
              <option value="None">None</option>
              {Array.isArray(category) &&
                category.map((item, i) => (
                  <option key={i} value={item.blog_category_uuid}>
                    {item.blog_category_title}
                  </option>
                ))}
            </TextField>
            <Typography style={{ fontSize: "14px", lineHeight: "16px" }}>
              Assign a parent term to create a hierarchy. The term Jazz, for
              example, would be the parent of Bebop and Big Band.
            </Typography>
            <TextField
              margin="normal"
              fullWidth
              size="small"
              id="description"
              label="Description"
              style={{ width: "100%" }}
              name="description"
              value={inputValue.description}
              onChange={(e) => handelInputValue(e)}
            ></TextField>
            <Typography style={{ fontSize: "14px", lineHeight: "16px" }}>
              The description is not prominent by default; however, some themes
              may show it.
            </Typography>
            <div className="col-md-12 spacer">
              <label className="block-p xsm-font-size" htmlFor="thumbnail">
                Thumbnail
              </label>

              <div style={{ gap: 5 }} className="Thumbnail row">
                {images &&
                  images.map((item, i) => (
                    <img
                      key={i}
                      onClick={() => set_image_handler(item, i)}
                      className={`cursor-pointer ${
                        active_img === i ? "active-border" : ""
                      }`}
                      src={`${server_url()}/${item.path}`}
                    />
                  ))}
              </div>
              {images && images.length > 0 ? (
                images &&
                images.length > 1 &&
                active_img === null && (
                  <p style={{ color: "red" }} className="block-p xsm-font-size">
                    Please select one.
                  </p>
                )
              ) : (
                <div className="Thumbnail ">
                  <img
                    className="active-border"
                    src="/placeholder.webp"
                    alt="placeholder"
                  />
                </div>
              )}
              <Button
                className="spacer"
                variant="outlined"
                size="small"
                onClick={() => handleImageClickOpen()}
              >
                Add Thumbnail
              </Button>
              <ImgUploader open={open} close={() => setOpen(false)} />
            </div>
            <Button
              onClick={(e) => submitHandler(e)}
              size="small"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                mt: 3,
                mb: 2,
                color: "#fff",
                backgroundColor: "#73c631",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#73c631",
                },
              }}
              startIcon={!loading}
            >
              {loading ? (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress size={24} color="inherit" />
                </div>
              ) : (
                "Submit"
              )}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default memo(Common_categorie_form);
