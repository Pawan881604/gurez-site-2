import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import customTheme from "../ui/theme/theme.config";

export const Filter_size_form = () => {
  const [unit_type, set_unit_type] = useState("");
  const [input_value, set_input_value] = useState({
    L_inch: "",
    W_inch: "",
    H_inch: "",
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
      const { L_inch, W_inch, H_inch, Type } = input_value;
      const length = parseFloat(L_inch) || 0;
      const width = parseFloat(W_inch) || 0;
      const height = parseFloat(H_inch) || 0;

      const area = length + width;
      const area_2 = width + height;
      const sum = (area * 2) * area_2;

      const filtered = Products.filter((product) => {
        const productLength = parseFloat(product.size.l) || 0;
        const productWidth = parseFloat(product.size.b) || 0;
        const productHeight = parseFloat(product.size.h) || 0;

        const value = productLength + productWidth;
        const value_2 = productWidth + productHeight;
        const value_sum = (value * 2) * value_2;
        console.log(productLength,productWidth,productHeight)
        // Compare calculated sums
        return value_sum >= sum;
      });

      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [input_value]);

  return (
    <>
      <div>
        <Container
          maxWidth="sm"
          style={{
            maxWidth: [customTheme.screens.lg],
            padding: [customTheme.themes.layout.padding.screen_large],
          }}
        >
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              alignItems: "center",
              autoComplete: "on",
              // boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <img src="https://www.upack.in/media/wysiwyg/size_lbh.webp" />
            <Box>
              <FormControl>
                <FormLabel size="small" id="demo-radio-buttons-group-label">
                  Unit
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Inch"
                  size="small"
                  onChange={(e) => set_unit_type(e.target.value)}
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Inch"
                    size="small"
                    control={<Radio />}
                    label="Inch"
                  />
                  <FormControlLabel
                    value="Centimetre"
                    size="small"
                    control={<Radio />}
                    label="Centimetre"
                  />
                </RadioGroup>
              </FormControl>
              <Box
                component="form"
                noValidate
                sx={{
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
                  label="L inch"
                  name="L_inch"
                  autoComplete="L_inch"
                  autoFocus
                  InputLabelProps={{
                    sx: {
                      fontSize: "0.8rem", // Adjust the size as needed
                      paddingTop: "4px",
                    },
                  }}
                  value={input_value.L_inch}
                  onChange={(e) => change_input_handler(e)}
                />
                <TextField
                  margin="normal"
                  type="text"
                  fullWidth
                  id="W_inch"
                  label="W inch"
                  size="small"
                  name="W_inch"
                  autoComplete="W_inch"
                  autoFocus
                  InputLabelProps={{
                    sx: {
                      fontSize: "0.8rem", // Adjust the size as needed
                      paddingTop: "4px",
                    },
                  }}
                  value={input_value.W_inch}
                  onChange={(e) => change_input_handler(e)}
                />
                <TextField
                  margin="normal"
                  type="text"
                  fullWidth
                  label="H inch"
                  name="H_inch"
                  size="small"
                  autoComplete="H_inch"
                  autoFocus
                  InputLabelProps={{
                    sx: {
                      fontSize: "0.8rem", // Adjust the size as needed
                      paddingTop: "4px",
                    },
                  }}
                  value={input_value.H_inch}
                  onChange={(e) => change_input_handler(e)}
                />
                <TextField
                  margin="normal"
                  required
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
              </Box>
            </Box>
          </Box>

          <Box>
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
          </Box>
        </Container>
      </div>
    </>
  );
};
