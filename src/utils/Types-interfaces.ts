import React from "react";

export interface LabelledInterface {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
}
export interface BlogBodyInterface extends BlogType {
  published: boolean;
  loading?: boolean;
  error?: string | null;
  success?: boolean;
}
export interface CreatedBlogResponseBody {
  data: {
    authorId: string;
    content: string;
    createdAt: string;
    id: string;
    published: boolean;
    title: string;
    updatedAt: string;
  };
}
