import React, { useState } from "react";
import { Aside } from "../../aside/Aside";
import { Box, Grid, IconButton, Stack, TextField } from "@mui/material";
import { Avatar } from "@material-ui/core";
import generateUuid from "../../../utils/Uuidv4";
import { FaMinus } from "react-icons/fa";

const Volume_range_unit = () => {
  const [collection, set_collection] = useState([]);
  const [new_data, set_new_data] = useState({
    uuid: generateUuid(),
    min_value: "",
    max_value: "",
    unit: "",
  });

  const add_more_volume = () => {
    set_collection((prev) => [...prev, new_data]);
    set_new_data({
      uuid: generateUuid(),
      min_value: "",
      max_value: "",
      unit: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    set_new_data({ ...new_data, [name]: value });
  };
  const handle_initial_value = (index, field, value) => {
    set_collection((prev) => {
      const newValues = [...prev];
      if (newValues[index]) {
        newValues[index] = { ...newValues[index], [field]: value };
      }
      return newValues;
    });
  };

  console.log(collection);
  return (
    <>
      <div className="admin-page">
        <div className="admin-page-area">
          <Aside />
          <div id="ad-body">
            <div className="ad-cont">
              <section className="page-section">
                <Box sx={{ width: "100%", padding: 2 }}>
                  <Grid
                    container
                    rowSpacing={1}
                    sx={{ margin: 0 }}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid
                      p
                      xs={6}
                      sx={{
                        padding: 1,
                        boxShadow: 2,

                        bgcolor: (theme) =>
                          theme.palette.mode === "dark" ? "#101010" : "#fff",
                        color: (theme) =>
                          theme.palette.mode === "dark"
                            ? "grey.300"
                            : "grey.800",

                        borderRadius: 2,
                        textAlign: "center",
                        fontSize: "0.875rem",
                        fontWeight: "700",
                      }}
                    >
                      {collection &&
                        collection.map((item, i) => (
                          <Grid
                            container
                            rowSpacing={0}
                            columnSpacing={{ xs: 0, sm: 0, md: 0 }}
                          >
                            <Grid p xs={3.4}>
                              <TextField
                                placeholder="Min Value"
                                id="outlined-size-small"
                                size="small"
                                style={{ width: "100%" }}
                                name="min_value"
                                value={item.min_value}
                                onChange={(e) =>
                                  handle_initial_value(
                                    i,
                                    "min_value",
                                    e.target.value
                                  )
                                }
                              />
                            </Grid>
                            <Grid p xs={3.4}>
                              <TextField
                                placeholder="Max Value"
                                id="outlined-size-small"
                                size="small"
                                style={{ width: "100%" }}
                                name="max_value"
                                value={item.max_value}
                                onChange={(e) =>
                                  handle_initial_value(
                                    i,
                                    "max_value",
                                    e.target.value
                                  )
                                }
                              />
                            </Grid>
                            <Grid p xs={3.4}>
                              <TextField
                                placeholder="Max Value"
                                id="outlined-size-small"
                                size="small"
                                style={{ width: "100%" }}
                                name="unit"
                                value={item.unit}
                                onChange={(e) =>
                                  handle_initial_value(
                                    i,
                                    "unit",
                                    e.target.value
                                  )
                                }
                              />
                            </Grid>
                            <Grid p xs={1.5}>
                              <Stack direction="row" spacing={2}>
                                <IconButton
                                  onClick={() => add_more_volume()}
                                  aria-label="Add"
                                  style={{
                                    width: "42px",
                                    height: "42px",
                                    background: "rgba(0, 0, 0, 0.04)",
                                    fontSize: "16px",
                                  }}
                                >
                                 <FaMinus/>
                                </IconButton>
                              </Stack>
                            </Grid>
                          </Grid>
                        ))}

                      <Grid
                        container
                        rowSpacing={0}
                        columnSpacing={{ xs: 0, sm: 0, md: 0 }}
                      >
                        <Grid p xs={3.4}>
                          <TextField
                            placeholder="Min Value"
                            id="outlined-size-small"
                            size="small"
                            style={{ width: "100%" }}
                            name="min_value"
                            value={new_data.min_value}
                            onChange={(e) => handleInputChange(e)}
                          />
                        </Grid>
                        <Grid p xs={3.4}>
                          <TextField
                            placeholder="Max Value"
                            id="outlined-size-small"
                            size="small"
                            style={{ width: "100%" }}
                            value={new_data.max_value}
                            name="max_value"
                            onChange={(e) => handleInputChange(e)}
                          />
                        </Grid>
                        <Grid p xs={3.4}>
                          <TextField
                            placeholder="Max Value"
                            id="outlined-size-small"
                            size="small"
                            style={{ width: "100%" }}
                            value={new_data.unit}
                            name="unit"
                            onChange={(e) => handleInputChange(e)}
                          />
                        </Grid>
                        <Grid p xs={1.5}>
                          <Stack direction="row" spacing={2}>
                            <IconButton
                              onClick={() => add_more_volume()}
                              aria-label="Add"
                              style={{
                                width: "42px",
                                height: "42px",
                                background: "rgba(0, 0, 0, 0.04)",
                                fontSize: "30px",
                              }}
                            >
                              +
                            </IconButton>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid p xs={6}>
                      <p>2dddd</p>
                    </Grid>
                  </Grid>
                </Box>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Volume_range_unit;
