import {
  FormControl,
  IconButton,
  Icon,
  TextField,
  Select,
  MenuItem,
  FormGroup
} from "@mui/material";
import React, { FC } from "react";
import { Category, OrderBy } from "../../../shared/api/booksApi/types";

type SetState<S = any> = React.Dispatch<React.SetStateAction<S>>;

export interface BookSearchProps {
  setQuery: SetState<string>;
  setCategory: SetState<Category>;
  setOrderBy: SetState<OrderBy>;
}

const BookSearchForm: FC<BookSearchProps> = (props: BookSearchProps) => {
  const { setQuery, setCategory, setOrderBy } = props;

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setQuery(event.currentTarget.query.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl
        fullWidth
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2
        }}
      >
        <TextField placeholder="Search book" name="query" fullWidth />
        <IconButton
          type="submit"
          size="large"
          sx={{ position: "absolute", right: 14 }}
        >
          <Icon fontSize="medium">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </Icon>
        </IconButton>
      </FormControl>

      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 2,
          width: "100%",
          mt: 1
        }}
      >
        <FormControl
          sx={{
            flex: "1"
          }}
        >
          <Select
            name="category"
            defaultValue={"all"}
            onChange={e => setCategory(e.target.value as Category)}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"art"}>Art</MenuItem>
            <MenuItem value={"biography"}>Biography</MenuItem>
            <MenuItem value={"computers"}>Computers</MenuItem>
            <MenuItem value={"history"}>History</MenuItem>
            <MenuItem value={"medical"}>Medical</MenuItem>
            <MenuItem value={"poetry"}>Poetry</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <Select
            name="orderBy"
            defaultValue={"relevance"}
            onChange={e => setOrderBy(e.target.value as OrderBy)}
          >
            <MenuItem value={"relevance"}>Relevance</MenuItem>
            <MenuItem value={"newest"}>Newest</MenuItem>
          </Select>
        </FormControl>
      </FormGroup>
    </form>
  );
};

export default BookSearchForm;
