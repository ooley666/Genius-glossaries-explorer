import { useQuery } from "@tanstack/react-query";
import { API, API_AUTH } from "../config";

export const useSongData = (songID) => {
  const geniusPageQuery = useQuery(["geniusPage", songID], async () => {
    const data = await fetch(
      `${API}/songs/${songID}?text_format=plain&${API_AUTH}`
    );
    return await data.json();
  });
  return geniusPageQuery;
};
