import { Box, Container, TextField } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import customTheme from "../ui/theme/theme.config";

export const Filter_size_form = () => {
  const theme = useTheme();

  return (
    <>
      <div>
        <Container maxWidth="sm">
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              autoComplete: "on",
              // boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <img src="https://www.upack.in/media/wysiwyg/size_lbh.webp" />

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
                label="L-inch"
                name="L-inch"
                autoComplete="L-inch"
                autoFocus
                InputLabelProps={{
                  sx: {
                    fontSize: "0.8rem", // Adjust the size as needed
                    paddingTop: "4px",
                  },
                }}
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                type="W-inch"
                fullWidth
                id="W-inch"
                label="W-inch"
                size="small"
                name="W-inch"
                autoComplete="W-inch"
                autoFocus
                InputLabelProps={{
                  sx: {
                    fontSize: "0.8rem", // Adjust the size as needed
                    paddingTop: "4px",
                  },
                }}
                // value={email}
                // onChange={(e) => setemail(e.target.value)}
              />
              <TextField
                margin="normal"
                type="text"
                fullWidth
                label="H-inch"
                name="H-inch"
                size="small"
                autoComplete="H-inch"
                autoFocus
                InputLabelProps={{
                  sx: {
                    fontSize: "0.8rem", // Adjust the size as needed
                    paddingTop: "4px",
                  },
                }}
                // value={phone_number}
                // onChange={(e) => setphone_number(e.target.value)}
              />
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};
