import { useFullList } from "../fetchFunctions/getFullGlossary";
import { deconstructRefs } from "./deconstructRefs";

export async function makeQuizletSet(
  glossaryID,
  availableAnnotations,
  setReadyState
) {
  setReadyState(false);
  const response = await useFullList(glossaryID, availableAnnotations);

  const allRefsArray = response.reduce((accArr, nextPage) => {
    const deconstructed = deconstructRefs(nextPage.referents);
    return [...accArr, ...deconstructed];
  }, []);

  function formatForQzImport(rnaArray) {
    return rnaArray.map((rna) => `${rna.refBody}---${rna.annBody}`).join(`|||`);
  }

  return formatForQzImport(allRefsArray);
}
