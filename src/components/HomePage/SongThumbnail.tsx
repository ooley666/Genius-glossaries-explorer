import { useState } from "react";
import { Link } from "react-router-dom";
import { useSongData } from "../../fetchFunctions/useSongData";
import { makeQuizletSet } from "../../helpers/makeQuizletSet";

type SongThumbnailProps = {
  songID: string;
  showPopup: () => void;
  isDisabled: boolean;
};

const SongThumbnail = ({
  songID,
  showPopup,
  isDisabled,
}: SongThumbnailProps) => {
  const [isReady, setReadyState] = useState(true);

  const songQuery = useSongData(songID);
  if (songQuery.isLoading) return <p>Loading...</p>;
  if (songQuery.isError) return <p>Error occurred</p>;
  const {
    id,
    title,
    stats: { accepted_annotations },
  } = songQuery.data.response.song;
  return (
    <div className="thumbnail">
      {" "}
      <p>{title}</p>
      <Link
        className="thumb-link"
        to={`/${id}?annCount=${accepted_annotations}`}
      >
        <button disabled={isDisabled}>Explore glossary</button>
      </Link>
      <button
        disabled={isDisabled}
        onClick={async () => {
          const quizletSet = await makeQuizletSet(
            id,
            accepted_annotations,
            setReadyState
          );
          await navigator.clipboard.writeText(quizletSet);
          setReadyState(true);
          showPopup();
        }}
      >
        {isReady ? `Get quizlet version` : `Formatting...`}
      </button>
    </div>
  );
};
export default SongThumbnail;
