import React, { FC } from "react";
import { Book } from "../../../shared/api/booksApi/types";
import {
  Badge,
  Box,
  Chip,
  Container,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
  colors
} from "@mui/material";

const BookDetails: FC<Book["volumeInfo"]> = props => {
  const { title, authors, categories, imageLinks } = props;

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        padding: 2,
        "@media (max-width: 720px)": {
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }
      }}
    >
      {imageLinks?.thumbnail && (
        <Box
          component="img"
          src={imageLinks.thumbnail}
          alt={title}
          sx={{
            width: "auto",
            height: 256,
            border: "3px solid black",
            "@media (max-width: 720px)": { width: 256, height: "auto" }
          }}
        />
      )}
      <Box>
        <Typography variant="h4">{title}</Typography>

        <Typography variant="body1" gutterBottom>
          {authors ? authors.join(", ") : "No authors"}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{
            flexWrap: "wrap",
            "@media (max-width: 720px)": {
              justifyContent: "center",
              overflow: "scroll",
              maxHeight: "200px"
            }
          }}
        >
          {categories
            ? categories.map((category, index) => (
                <Chip key={index} label={category} variant="outlined" />
              ))
            : "No categories"}
        </Stack>

        <Typography variant="body1" mt={2}>
          {props.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default BookDetails;
