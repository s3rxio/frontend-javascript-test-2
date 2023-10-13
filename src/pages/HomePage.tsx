import { Container } from "@mui/material";
import { useGetBooksQuery } from "../shared/api/booksApi";
import { FC, useState } from "react";
import { BookSearchForm, BookView } from "../modules/Book";
import { Category, OrderBy } from "../shared/api/booksApi/types";

const HomePage: FC = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [orderBy, setOrderBy] = useState<OrderBy>("relevance");
  const [startIndex, setStartIndex] = useState(0);

  const { data, isFetching, isError } = useGetBooksQuery(
    {
      q: query,
      category,
      orderBy,
      startIndex,
      maxResults: 30
    },
    {
      skip: !query,
      refetchOnMountOrArgChange: true
    }
  );

  return (
    <Container sx={{ py: 2 }}>
      <BookSearchForm
        setQuery={setQuery}
        setCategory={setCategory}
        setOrderBy={setOrderBy}
        category={category}
        orderBy={orderBy}
      />
      <BookView
        data={data}
        isFetching={isFetching}
        isError={isError}
        startIndex={startIndex}
        setStartIndex={setStartIndex}
      />
    </Container>
  );
};

export default HomePage;
