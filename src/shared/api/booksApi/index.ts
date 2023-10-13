import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book, Category, GetBooksParams } from "./types";
import { ListResponse } from "../../types";

const key = import.meta.env.VITE_APP_BOOKS_API_KEY;

const concatQueryAndCategory = (query: string, category: Category) => {
  if (category === "all") {
    return query;
  }

  return `${query.split(" ").join("+")}+subject:${category}`;
};

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/books/v1" }),
  endpoints: builder => ({
    getBooks: builder.query<ListResponse<Book>, GetBooksParams>({
      query: params => ({
        url: "/volumes",
        params: {
          q: concatQueryAndCategory(params.q, params.category || "all"),
          orderBy: params.orderBy || "relevance",
          startIndex: params.startIndex || 0,
          maxResults: params.maxResults || 30,
          key
        }
      })
    }),
    getBook: builder.query<Book, string>({
      query: id => `/volumes/${id}?key=${key}`
    })
  })
});

export const { useGetBooksQuery, useGetBookQuery } = booksApi;
