import React from "react";

export interface LabelledInterface {
  label: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export interface BlogType {
  authorName?: string;
  title?: string;
  content?: string;
  createdAt?: string;
  author?: {
    name?: string;
  };
  id?: string;
  imageUrl?: string;
}
export interface BulkBlogResponseType {
  data: BlogType[];
}
export interface SingleBlogPropType {
  data: BlogType;
}
export interface BlogPayloadType {
  published?: boolean;
  title?: string;
  content?: string;
}
export interface BlogBodyInterface extends BlogType {
  published: boolean;
  loading?: boolean;
  error?: string | null;
  success?: boolean;
}
export interface CreatedBlogResponseBody {
  data: {
    message: string;
  };
}
export interface uploadBlogImageResponseBody {
  data: {
    message: string;
    url: string;
  };
}
export type BlogStoreType = {
  loading: boolean;
  error: string | null;
  blogs: BlogType[];
  imageUrl: string;
  bulkBlogsAction: () => Promise<BulkBlogResponseType | undefined>;
  createBlogAction: (payload: BlogPayloadType) => void;
  individualBlogAction: (blogId: string) => Promise<BlogType | undefined>;
  uploadBlogImageAction: (
    formdata: any
  ) => Promise<uploadBlogImageResponseBody | undefined>;
};
