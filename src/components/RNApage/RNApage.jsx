import { useState } from "react";
import { useParams } from "react-router-dom";
import { deconstructRefs } from "../../helpers/deconstructRefs";

import { useReferentData } from "../../fetchFunctions/useReferentData";
import { BackToHomepageBtn } from "./BackToHomepageBtn";
import RefOrAnn from "./RefOrAnn";
const RNApage = () => {
  const { id } = useParams();
  const [pageIndex, setPageIndex] = useState(0);
  const { data, error, isLoading, isFetching } = useReferentData(pageIndex, id);

  return (
    <div className="rna-page">
      <div className="rna-page_header">
        <BackToHomepageBtn />
        <button
          onClick={() => {
            setPageIndex(pageIndex + 1);
          }}
          style={{
            boxShadow: isFetching
              ? "0px 0px 115px 16px rgba(255,162,13,0.95)"
              : "",
          }}
        >
          {isFetching ? `Loading...` : `Give me different idioms`}
        </button>
      </div>
      <div className="rna-container">
        {error ? (
          <h2>{error.message}</h2>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : (
          deconstructRefs(data.referents).map((RNA) => {
            return (
              <div key={RNA.rnaID} className="rna-page_item">
                <RefOrAnn textBody={RNA.refBody} type="referent" />
                <RefOrAnn textBody={RNA.annBody} type="annotation" />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RNApage;
