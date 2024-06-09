import React from "react";
import Cards from "../ui/Cards";
import { Box, Container, Grid, Typography } from "@mui/material";
import customTheme from "../ui/theme/theme.config";

const Product_cards = (props) => {
  const Products = [
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 4W X 6H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/b/u/bubble_pouch_upack.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 7W X 8H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf1.jpg",
      title: "Kraft Mailer Box - 7 x 5.75 x 2 Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf5.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 6W X 6H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/t/h/thumbnail-cp002-1-b2_6.jpg",
      title: "Kraft Mailer Box - 6.25 x 3.25 x 2 Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 10W X 8H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 4W X 6H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/b/u/bubble_pouch_upack.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 7W X 8H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf1.jpg",
      title: "Kraft Mailer Box - 7 x 5.75 x 2 Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf5.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 6W X 6H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/t/h/thumbnail-cp002-1-b2_6.jpg",
      title: "Kraft Mailer Box - 6.25 x 3.25 x 2 Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 10W X 8H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 4W X 6H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/b/u/bubble_pouch_upack.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 7W X 8H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf1.jpg",
      title: "Kraft Mailer Box - 7 x 5.75 x 2 Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf5.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 6W X 6H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/t/h/thumbnail-cp002-1-b2_6.jpg",
      title: "Kraft Mailer Box - 6.25 x 3.25 x 2 Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 10W X 8H Inch",
      price: 2.5,
    },
  ];
  return (
    <>
      <Container
        style={{
          maxWidth: [customTheme.screens.lg],
          padding: [customTheme.themes.layout.padding.screen_large],
        }}
      >
        <Box sx={{marginBottom:5}}>
          <Typography component="h2">Packing Material</Typography>
          <Typography component="body">
            Check all our popular packing materials
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {Products.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                <Cards item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Product_cards;
