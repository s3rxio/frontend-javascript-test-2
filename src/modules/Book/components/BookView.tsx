import React, { FC, useEffect, useState } from "react";
import { ListResponse } from "../../../shared/types";
import { Book } from "../../../shared/api/booksApi/types";
import { Box, Typography } from "@mui/material";
import BookList from "./BookList";
import { Loader } from "../../../shared/components";

export interface BookViewProps {
  data: ListResponse<Book> | undefined;
  isFetching: boolean;
  isError: boolean;

  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
}

const BookViewBox: FC<{ children: React.ReactNode }> = ({ children }) => {
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
      {children}
    </Box>
  );
};

const BookView: FC<BookViewProps> = (props: BookViewProps) => {
  const { data, isFetching, isError } = props;

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setBooks(data?.items || []);
  }, [data]);

  if (!data || isError) {
    return (
      <BookViewBox>
        <Typography variant="body1">No data</Typography>
      </BookViewBox>
    );
  }

  return (
    <BookViewBox>
      <Typography variant="body1">Found {data?.totalItems} books</Typography>
      {isError && (
        <Typography color={"error"} variant="body1">
          Error
        </Typography>
      )}
      <BookList books={books} />
      {isFetching && <Loader />}
    </BookViewBox>
  );
};

export default BookView;
