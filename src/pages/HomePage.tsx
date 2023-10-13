import { Container } from "@mui/material";
import { useGetBooksQuery } from "../shared/api/booksApi";
import { FC, useEffect, useState } from "react";
import { BookSearchForm, BooksView } from "../modules/Book";
import { Category, OrderBy } from "../shared/api/booksApi/types";

const HomePage: FC = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [orderBy, setOrderBy] = useState<OrderBy>("relevance");
  const [startIndex, setStartIndex] = useState(0);
  const [formEffect, setFormEffect] = useState(0);
  const [maxResults] = useState(30);

  useEffect(() => {
    setFormEffect(formEffect + 1);
  }, [query, category, orderBy]);

  const { data, isFetching, isError } = useGetBooksQuery(
    {
      q: query,
      category,
      orderBy,
      startIndex,
      maxResults
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
      <BooksView
        data={data}
        formEffect={formEffect}
        isFetching={isFetching}
        isError={isError}
        maxResults={maxResults}
        startIndex={startIndex}
        setStartIndex={setStartIndex}
      />
    </Container>
  );
};

export default HomePage;
