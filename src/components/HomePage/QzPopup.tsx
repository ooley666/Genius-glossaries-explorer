import quizletSettings from "../../assets/quizletSettings.jpg";
import quizletStudySet from "../../assets/quizletStudySet.jpg";

type QzPopupProps = {
  popupIsVisible: boolean;
  closePopup: () => void;
};

export function QzPopup({ popupIsVisible, closePopup }: QzPopupProps) {
  return (
    <div className="popup-box" hidden={!popupIsVisible}>
      <div className="popup-instructions">
        <div>
          <p className="popup-text">
            The whole glossary has been succesfully formatted and
            <span> added to your clipboard</span>
            <br />
            <br />
            Please, visit {""}
            <a
              href="https://quizlet.com/create-set"
              target="_blank"
              className="popup-link"
            >
              Quizlet import page
            </a>
          </p>
        </div>
        <div>
          <img
            className="popup-img"
            src={quizletStudySet}
            alt={` use \"---\" as a term/definition divider;  \"|||\" as a line divider`}
          />
        </div>

        <div>
          <p className="popup-text">
            Paste the data into the box and apply the following settings: <br />
            <br /> use "---" as a term/definition divider <br />
            <br /> use "|||" as a line divider
          </p>
        </div>
        <div>
          <img
            className="popup-img"
            src={quizletSettings}
            alt={` use \"---\" as a term/definition divider;  \"|||\" as a line divider`}
          />
        </div>
      </div>
      <button onClick={() => closePopup()} className="popup-close">
        GOT IT
      </button>
    </div>
  );
}
