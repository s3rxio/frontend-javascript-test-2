import { FC } from "react";
import { Book } from "../../../shared/api/booksApi/types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";

const BookCard: FC<Book> = ({ id, volumeInfo }: Book) => {
  const { title, authors, categories, imageLinks } = volumeInfo;

  return (
    <Card
      component={Link}
      to={`/${id}`}
      variant="outlined"
      sx={{
        width: "356px",
        transitionProperty: "transform, box-shadow",
        transitionDuration: "0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 2px 2px 1px rgba(0,0,0,0.15)"
        }
      }}
    >
      {imageLinks?.thumbnail && (
        <CardMedia
          component="img"
          image={imageLinks.thumbnail}
          sx={{
            width: "auto",
            height: 256,
            margin: "8px auto"
          }}
        />
      )}
      <CardContent>
        {categories && (
          <Typography variant="body2" gutterBottom>
            {categories.join(", ")}
          </Typography>
        )}
        <Typography variant="h5">{title}</Typography>
        {authors && (
          <Typography variant="caption">{authors.join(", ")}</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default BookCard;
