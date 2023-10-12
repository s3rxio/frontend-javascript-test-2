export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
  title: string;
  authors?: string[];
  categories?: string[];
  description: string;
  imageLinks?: {
    thumbnail: string;
    smallThumbnail: string;
  };
}

export interface GetBooksParams {
  q: string;
  orderBy?: "relevance" | "newest";
  startIndex?: number;
  maxResults?: number;
}
