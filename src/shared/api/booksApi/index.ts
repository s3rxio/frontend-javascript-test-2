import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book, GetBooksParams } from "./types";
import { ListResponse } from "../../types";

const key = import.meta.env.VITE_APP_BOOKS_API_KEY;

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/books/v1" }),
  endpoints: builder => ({
    getBooks: builder.query<ListResponse<Book>, GetBooksParams>({
      query: params => ({
        url: "/volumes",
        params: {
          q: params.q,
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
