"use client";

import { getPostsBySearch } from "@/servises/getPosts";
import { FormEventHandler, useState } from "react";

type Props = {
  onSearch: (value: any[]) => void;
};

const PostSearch = ({ onSearch }: Props) => {
  const [search, setSeach] = useState("");
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);
    onSearch(posts);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSeach(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export { PostSearch };
