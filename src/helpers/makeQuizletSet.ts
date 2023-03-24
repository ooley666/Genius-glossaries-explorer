import { Dispatch, SetStateAction } from "react";
import { useFullList } from "../fetchFunctions/getFullGlossary";
import { deconstructRefs } from "./deconstructRefs";

export async function makeQuizletSet(
  glossaryID: string,
  availableAnnotations: number,
  setReadyState: Dispatch<SetStateAction<boolean>>
) {
  setReadyState(false);
  const response = await useFullList(glossaryID, availableAnnotations);
  const allReferentsArray = response.reduce(
    (
      accArr: referentPlain[],
      currentReferent: referentsCallResponse
    ): referentPlain[] => {
      const deconstructed = deconstructRefs(currentReferent.referents);
      return [...accArr, ...deconstructed];
    },
    []
  );

  function formatForQzImport(rnaArray: referentPlain[]) {
    return rnaArray.map((rna) => `${rna.refBody}---${rna.annBody}`).join(`|||`);
  }

  return formatForQzImport(allReferentsArray);
}
