import { FC } from "react";
import { useGetBookQuery } from "../shared/api/booksApi";
import { Link } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";

const BookPage: FC = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetBookQuery(id || "");

  if (isFetching) {
    return <div>Fetching...</div>;
  }
  if (!data) {
    return (
      <div>
        No data.{" "}
        <RouterLink to="/">
          <Link component={"span"}>Back to home</Link>
        </RouterLink>
      </div>
    );
  }
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default BookPage;
