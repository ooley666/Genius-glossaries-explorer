import { Link } from "react-router-dom";

export function BackToHomepageBtn() {
  return (
    <>
      <Link style={{ display: `block` }} to={`/`}>
        <button> Back to homepage</button>
      </Link>
    </>
  );
}
