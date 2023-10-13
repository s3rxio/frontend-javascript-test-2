import { FC } from "react";
import { useGetBookQuery } from "../shared/api/booksApi";
import { Container, Link } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Loader } from "../shared/components";
import { BookDetails } from "../modules/Book";

const BookPage: FC = () => {
  const { id } = useParams();
  const { data: book, isFetching } = useGetBookQuery(id || "");

  if (isFetching) {
    return <Loader />;
  }
  if (!book) {
    return (
      <div>
        No data.{" "}
        <RouterLink to="/">
          <Link component={"span"}>Back to home</Link>
        </RouterLink>
      </div>
    );
  }
  return (
    <Container>
      <BookDetails {...book.volumeInfo} />
    </Container>
  );
};

export default BookPage;
