import { getRandPagesArray } from "../helpers/randomisers";
import { loadReferentsData } from "./useReferentData";

export async function useFullList(glossaryID, availableAnnotations) {
  const pagesArr = getRandPagesArray(50, availableAnnotations);

  const responses = await Promise.all(
    pagesArr.map((page) => loadReferentsData(glossaryID, page, 50))
  );
  return responses;
}
