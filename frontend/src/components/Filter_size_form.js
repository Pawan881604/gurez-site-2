import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import customTheme from "../ui/theme/theme.config";

export const Filter_size_form = () => {
  const [unit_type, set_unit_type] = useState("");
  const [input_value, set_input_value] = useState({
    Length: "",
    Breadth: "",
    Height: "",
    Type: "Corrugated box",
  });

  const change_input_handler = (e) => {
    const { name, value } = e.target;
    set_input_value({ ...input_value, [name]: value });
  };

  const currencies = [
    {
      value: "Corrugated box",
      label: "",
    },
    {
      value: "Flap box",
      label: "",
    },
    {
      value: "MAILER BOXES",
      label: "",
    },
    {
      value: "WHITE SHIPPING BOXES",
      label: "",
    },
    {
      value: "HONEYCOMB PAPER BUBBLE",
      label: "",
    },
    {
      value: "MAILING TUBES",
      label: "",
    },
    {
      value: "BUBBLE ROLL WRAP",
      label: "",
    },
  ];

  const Products = [
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 4W X 6H Inch",
      price: 2.5,
      size: {
        l: 3.5,
        b: 3.5,
        h: 3.5,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/b/u/bubble_pouch_upack.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 7W X 8H Inch",
      price: 2.5,
      size: {
        l: 4,
        b: 4,
        h: 4,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf1.jpg",
      title: "Kraft Mailer Box - 7 x 5.75 x 2 Inch",
      price: 2.5,
      size: {
        l: 5,
        b: 4,
        h: 2.5,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf5.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 6W X 6H Inch",
      price: 2.5,
      size: {
        l: 7,
        b: 7,
        h: 7,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/t/h/thumbnail-cp002-1-b2_6.jpg",
      title: "Kraft Mailer Box - 6.25 x 3.25 x 2 Inch",
      price: 2.5,
      size: {
        l: 8,
        b: 5,
        h: 2,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 10W X 8H Inch",
      price: 2.5,
      size: {
        l: 9,
        b: 3,
        h: 3,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 4W X 6H Inch",
      price: 2.5,
      size: {
        l: 5,
        b: 5,
        h: 5,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/b/u/bubble_pouch_upack.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 7W X 8H Inch",
      price: 2.5,
      size: {
        l: 4.5,
        b: 4.5,
        h: 2,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf1.jpg",
      title: "Kraft Mailer Box - 7 x 5.75 x 2 Inch",
      price: 2.5,
      size: {
        l: 12,
        b: 10,
        h: 8,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf5.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 6W X 6H Inch",
      price: 2.5,
      size: {
        l: 9,
        b: 4,
        h: 2,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/t/h/thumbnail-cp002-1-b2_6.jpg",
      title: "Kraft Mailer Box - 6.25 x 3.25 x 2 Inch",
      price: 2.5,
      size: {
        l: 7.5,
        b: 4.5,
        h: 3.5,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 10W X 8H Inch",
      price: 2.5,
      size: {
        l: 11,
        b: 6,
        h: 5,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 4W X 6H Inch",
      price: 2.5,
      size: {
        l: 8,
        b: 8,
        h: 3,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/b/u/bubble_pouch_upack.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 7W X 8H Inch",
      price: 2.5,
      size: {
        l: 2,
        b: 5,
        h: 6,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf1.jpg",
      title: "Kraft Mailer Box - 7 x 5.75 x 2 Inch",
      price: 2.5,
      size: {
        l: 7,
        b: 7,
        h: 7,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf5.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 6W X 6H Inch",
      price: 2.5,
      size: {
        l: 5,
        b: 5,
        h: 5,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/t/h/thumbnail-cp002-1-b2_6.jpg",
      title: "Kraft Mailer Box - 6.25 x 3.25 x 2 Inch",
      price: 2.5,
      size: {
        l: 5,
        b: 4.5,
        h: 3,
      },
      type: "corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 10W X 8H Inch",
      price: 2.5,
      size: {
        l: 12,
        b: 4,
        h: 3,
      },
      type: "corrugated box",
    },
  ];

  const [products, setProducts] = useState(Products);
  const [filteredProducts, setFilteredProducts] = useState(Products);

  useEffect(() => {
    const filterProducts = () => {
      const { Length, Breadth, Height, Type } = input_value;
      const length = parseFloat(Length) || 0;
      const width = parseFloat(Breadth) || 0;
      const height = parseFloat(Height) || 0;

      const area = length + width;
      const area_2 = width + height;
      const sum = area * 2 * area_2;

      const filtered = Products.filter((product) => {
        const productLength = parseFloat(product.size.l) || 0;
        const productWidth = parseFloat(product.size.b) || 0;
        const productHeight = parseFloat(product.size.h) || 0;

        const value = productLength + productWidth;
        const value_2 = productWidth + productHeight;
        const value_sum = value * 2 * value_2;
        console.log(productLength, productWidth, productHeight);
        // Compare calculated sums
        return value_sum >= sum;
      });

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [input_value]);

  return (
    <>
      <div
        style={{
          background: [customTheme.themes.colors.default.default_100],
          boxShadow: [customTheme.themes.layout.boxShadows.bs_100],
        }}
      >
        <Container
          maxWidth="lg"
          style={{
            padding: [customTheme.themes.layout.padding.screen_large],
          }}
        >
          <Typography component={"h2"}>Box Finder</Typography>
          <Box
            component="form"
            noValidate
            sx={{
              maxWidth: [customTheme.screens.lg],
              mt: 1,
              display: "flex",
              alignItems: "center", // Align items in the center
              justifyContent: "center", // Justify content in the center
              gap: 2, // Add some spacing between children
            }}
          >
            <TextField
              margin="normal"
              type="text"
              size="small"
              fullWidth
              label="Length"
              name="Length"
              autoComplete="Length"
              sx={{ background: customTheme.themes.colors.white }}
              autoFocus
              InputLabelProps={{
                sx: {
                  fontSize: "0.8rem", // Adjust the size as needed
                  paddingTop: "4px",
                },
              }}
              value={input_value.Length}
              onChange={(e) => change_input_handler(e)}
            />
            <TextField
              margin="normal"
              type="text"
              fullWidth
              id="Breadth"
              label="Breadth"
              size="small"
              name="Breadth"
              sx={{ background: customTheme.themes.colors.white }}
              autoComplete="Breadth"
              autoFocus
              InputLabelProps={{
                sx: {
                  fontSize: "0.8rem", // Adjust the size as needed
                  paddingTop: "4px",
                },
              }}
              value={input_value.Breadth}
              onChange={(e) => change_input_handler(e)}
            />
            <TextField
              margin="normal"
              type="text"
              fullWidth
              label="Height"
              name="Height"
              sx={{ background: customTheme.themes.colors.white }}
              size="small"
              autoComplete="Height"
              autoFocus
              InputLabelProps={{
                sx: {
                  fontSize: "0.8rem", // Adjust the size as needed
                  paddingTop: "4px",
                },
              }}
              value={input_value.Height}
              onChange={(e) => change_input_handler(e)}
            />
            <TextField
              margin="normal"
              required
              sx={{ background: customTheme.themes.colors.white }}
              style={{
                fontSize: [customTheme.themes.layout.fontSize.tiny], // Adjust the size as needed
                paddingTop: "4px",
              }}
              fullWidth
              select
              //  style={{ width: "50%", paddingRight: 5 }}
              label="Type"
              name="Type"
              defaultValue="Corrugated box"
              size="small"
              value={input_value.Type}
              onChange={(e) => change_input_handler(e)}
              SelectProps={{
                native: true,
              }}
            >
              {currencies.map((option) => (
                <option
                  style={{
                    fontSize: [customTheme.themes.layout.fontSize.tiny], // Adjust the size as needed
                    paddingTop: "4px",
                  }}
                  key={option.value}
                  value={option.value}
                >
                  {option.value}
                </option>
              ))}
            </TextField>
            <Button
              variant="contained"
              sx={{
                marginTop: 1,
                padding: "5px 15px",
                backgroundColor: "#354200",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#354200",
                  border: "1px solid #354200",
                },
              }}
            >
              SEARCH
            </Button>
          </Box>

          {/* <Box>
            {filteredProducts.length}
            {filteredProducts.map((product, index) => (
              <Box key={index} sx={{ margin: 2 }}>
                <img src={product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <p>Price: {product.price}</p>
                <p>
                  Size: {product.size.l} x {product.size.b} x {product.size.h}{" "}
                  inches
                </p>
              </Box>
            ))}
          </Box> */}
        </Container>
      </div>
    </>
  );
};
