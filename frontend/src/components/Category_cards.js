import React from "react";
import Category_MediaCard from "../ui/Category_MediaCard";
import { Box, Container, Grid } from "@mui/material";
import customTheme from "../ui/theme/theme.config";

const Category_cards = () => {
  const images = [
    {
      img: "https://www.upack.in/media/wysiwyg/printed_mailer_boxes_c.webp",
      text: "MAILER BOXES",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/kraft_boxes_c.webp",
      text: "KRAFT SHIPPING BOXES",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/white_boxes_c.webp",
      text: "WHITE SHIPPING BOXES",
    },

    {
      img: "https://www.upack.in/media/wysiwyg/folding_cartons_c.webp",
      text: "FOLDING CARTONS",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/tapes_c.webp",
      text: "PACKING TAPES",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/corrugated_sheets_c.webp",
      text: "CORRUGATED SHEETS",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/colour_boxes_c.webp",
      text: "COLOUR SHIPPING BOXES",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/honeycomb_bubble_c.webp",
      text: "HONEYCOMB PAPER BUBBLE",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/mailing_tubes_c.webp",
      text: "MAILING TUBES",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/shopping_bags_c.webp",
      text: "CARRY BAGS",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/shredded_tissue_c.webp",
      text: "SHREDDED TISSUE",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/bubble_c.webp",
      text: "BUBBLE ROLL WRAP",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/courier_bags_c.webp",
      text: "COURIER BAGS",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/preprinted_mailers_c.webp",
      text: "PREPRINTED MAILERS",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/colour_mailer_boxes_c.webp",
      text: "COLOUR MAILER BOXES",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/stretch_film_c.webp",
      text: "STRETCH FILM",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/2ply_rolls_c.webp",
      text: "CORRUGATED ROLLS",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/foam_rolls_c.webp",
      text: "EPE FOAM ROLLS",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/bubble_mailers_c.webp",
      text: "PADDED ENVELOPES",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/bubble_pouch_c.webp",
      text: "BUBBLE BAGS",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/foam_pounc_c.webp",
      text: "FOAM POUCH",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/kraft_paper_c.webp",
      text: "KRAFT PAPER ROLLS",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/rigid_mailers_c.webp",
      text: "RIGID MAILERS",
    },
    {
      img: "https://www.upack.in/media/wysiwyg/color_paper.webp",
      text: "COLOUR PAPERS",
    },
  ];

  return (
    <>
      <div
        style={{
          background: [customTheme.themes.colors.green.green_100],
        }}
      >
        <Container
          style={{
            maxWidth: [customTheme.screens.lg],
            padding: [customTheme.themes.layout.padding.screen_large],
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 5, sm: 8, md: 12 }}
            >
              {/* {Array.from(Array(6)).map((_, index) => ( */}
              {images.map((item, index) => (
                <Grid item xs={5} sm={2} md={2.4} key={index}>
                  <Category_MediaCard item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Category_cards;
