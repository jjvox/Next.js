import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "2cb696213df43fb94f082d6d3f8fce46";

type MovieType = {
  id: number;
  original_title: string;
};

export default function Home() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/movies`);
      const { results } = await response.json();
      setMovies(results);
    })();
  }, []);
  return (
    <>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </>
  );
}
