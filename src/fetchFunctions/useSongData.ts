import { useQuery } from "@tanstack/react-query";
import { API, API_AUTH } from "../config";
type songDataReturn = {
  response: {
    song: {
      id: string;
      title: string;
      stats: { accepted_annotations: number };
    };
  };
};
export const useSongData = (songID: string) => {
  const geniusPageQuery = useQuery<songDataReturn>(
    ["geniusPage", songID],
    async () => {
      const data = await fetch(
        `${API}/songs/${songID}?text_format=plain&${API_AUTH}`
      );
      return data.json();
    }
  );
  return geniusPageQuery;
};
