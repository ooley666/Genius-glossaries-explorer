import SongThumbnail from "./SongThumbnail.jsx";
import { litGlossariesIDs, sportsGlossariesIDs } from "../../config.js";
import { useState } from "react";
import { QzPopup } from "./QzPopup";
const HomePage = () => {
  const [popupIsVisible, setPopupVisibility] = useState(false);
  return (
    <div className="selection-panel">
      <QzPopup
        popupIsVisible={popupIsVisible}
        closePopup={() => setPopupVisibility(false)}
      />
      <div className="welcome-heading">
        <p>
          Welcome! With the help of this app you can explore <br /> a variety of
          glossaries available below.{" "}
        </p>
        <p>
          Or you can make up a Quizlet study set by pressing the corresponding
          button{" "}
        </p>
      </div>
      <div className="container">
        <div className="litThumbnails">
          {litGlossariesIDs.map((id, i) => {
            return (
              <SongThumbnail
                key={id}
                songID={`${id}`}
                showPopup={() => setPopupVisibility(true)}
                isDisabled={popupIsVisible}
              />
            );
          })}
        </div>
        <div className="sportsThumbnails">
          {sportsGlossariesIDs.map((id, i) => {
            return (
              <SongThumbnail
                key={id}
                songID={`${id}`}
                showPopup={() => setPopupVisibility(true)}
                isDisabled={popupIsVisible}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
