import { FC } from "react";
import { Book } from "../../../shared/api/booksApi/types";
import { List } from "@mui/material";
import BookCard from "./BookCard";

const BookList: FC<{ books: Book[] }> = ({ books }) => {
  return (
    <List
      component={"div"}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        width: "100%"
      }}
    >
      {books.map((book, index) => (
        <BookCard key={book.id + index} {...book} />
      ))}
    </List>
  );
};

export default BookList;
