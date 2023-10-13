export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
  title: string;
  authors?: string[];
  categories?: Exclude<Category, "all">[];
  description: string;
  imageLinks?: {
    thumbnail: string;
    smallThumbnail: string;
  };
}

export interface GetBooksParams {
  q: string;
  category?: Category;
  orderBy?: OrderBy;
  startIndex?: number;
  maxResults?: number;
}

export type Category =
  | "all"
  | "art"
  | "biography"
  | "computers"
  | "history"
  | "medical"
  | "poetry";

export type OrderBy = "relevance" | "newest";
