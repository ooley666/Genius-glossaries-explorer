import { useState } from "react";
import { Link } from "react-router-dom";
import { useSongData } from "../../fetchFunctions/useSongData.js";
import { makeQuizletSet } from "../../helpers/makeQuizletSet.js";

const SongThumbnail = ({ songID, showPopup, isDisabled }) => {
  const [isReady, setReadyState] = useState(true);
  const { data, isLoading } = useSongData(songID);
  if (isLoading) return <p>Loading...</p>;
  const {
    id,
    title,
    stats: { accepted_annotations },
  } = data.response.song;
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
