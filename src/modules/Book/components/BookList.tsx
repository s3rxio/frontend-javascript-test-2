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
        gap: 2,
        justifyContent: "space-between",
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
