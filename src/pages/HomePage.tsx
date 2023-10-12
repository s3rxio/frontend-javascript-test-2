import { useGetBooksQuery } from "../shared/api/booksApi";
import { FC } from "react";

const HomePage: FC = () => {
  const { data, isFetching } = useGetBooksQuery({
    q: "React"
  });

  if (isFetching) {
    return <div>Fetching...</div>;
  }
  if (!data) {
    return <div>No data</div>;
  }
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default HomePage;
