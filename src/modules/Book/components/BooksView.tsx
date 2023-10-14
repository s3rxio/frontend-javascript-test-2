import React, { FC, useEffect, useState } from "react";
import { ListResponse } from "../../../shared/types";
import { Book } from "../../../shared/api/booksApi/types";
import { Box, Button, Typography } from "@mui/material";
import BooksList from "./BooksList";
import { Loader } from "../../../shared/components";

export interface BookViewProps {
  data: ListResponse<Book> | undefined;
  isFetching: boolean;
  formEffect: number;
  isError: boolean;

  maxResults: number;
  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
}

const BooksViewBox: FC<{ children: React.ReactNode }> = ({ children }) => {
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

const BooksView: FC<BookViewProps> = (props: BookViewProps) => {
  const {
    data,
    isFetching,
    formEffect,
    isError,
    maxResults,
    startIndex,
    setStartIndex
  } = props;

  const [books, setBooks] = useState<Book[]>([]);
  const [showMore, setShowMore] = useState(true);

  /* IDK why Google Books API increases totalItems if you load more books ;-; */
  const handleLoadMore = () => {
    if (startIndex >= data?.totalItems!) {
      return;
    }

    setStartIndex(prev => prev + maxResults);
  };

  useEffect(() => {
    if (!data) {
      return;
    }

    setBooks([]);
    setStartIndex(0);
  }, [formEffect]);

  useEffect(() => {
    if (!data) {
      return;
    }


    setBooks(prev => [...prev, ...(data.items || [])]);
    setShowMore(books.length < data.totalItems && maxResults < data.totalItems);
  }, [data]);

  if (!data) {
    return null;
  }

  if (isError) {
    return (
      <BooksViewBox>
        <Typography variant="body1" color={"error"}>
          Error while loading, please try again
        </Typography>
      </BooksViewBox>
    );
  }

  return (
    <BooksViewBox>
      <Typography variant="body1">Found {data.totalItems} books</Typography>

      <BooksList books={books} />
      {isFetching && <Loader />}

      {showMore && (
        <Button
          variant="contained"
          onClick={() => handleLoadMore()}
          disabled={isFetching || isError || !data}
        >
          Load more
        </Button>
      )}
    </BooksViewBox>
  );
};

export default BooksView;
