import React, { FC, useEffect, useState } from "react";
import { ListResponse } from "../../../shared/types";
import { Book } from "../../../shared/api/booksApi/types";
import { Box, Typography } from "@mui/material";
import BookList from "./BookList";

export interface BookViewProps {
  data: ListResponse<Book> | undefined;
  isFetching: boolean;
  isError: boolean;

  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
}

const BookView: FC<BookViewProps> = (props: BookViewProps) => {
  const { data, isFetching, isError } = props;

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setBooks(data?.items || []);
  }, [data]);

  return (
    <Box
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2
      }}
    >
      {isError && (
        <Typography color={"error"} variant="body1">
          Error
        </Typography>
      )}
      <BookList books={books} />
      {isFetching && <Typography variant="body1">Fetching...</Typography>}
    </Box>
  );
};

export default BookView;
