import { getRandPagesArray } from "../helpers/randomisers";
import { loadReferentsData } from "./useReferentData";

type Test = {
  arrayOfObjects: {
    key1: string;
    key2: number;
    key3: { nestedKey: number }[];
  }[];
};

export async function useFullList(
  glossaryID: string,
  availableAnnotations: number
) {
  // const foo: Test = {
  //   arrayOfObjects: [
  //     {
  //       key1: `aaaa`,
  //       key2: 4444,
  //       key3: [{ nestedKey: 5555 }, { nestedKey: 6666 }],
  //     },
  //   ],
  // };

  // const foo2: Test = {
  //   arrayOfObjects: [
  //     {
  //       key1: `baas`,
  //       key2: 423,
  //       key3: [{ nestedKey: 1005 }, { nestedKey: 2343246 }],
  //     },
  //   ],
  // };

  // const  = ;

  const pagesArr = getRandPagesArray(50, availableAnnotations);

  const responses = await Promise.all(
    pagesArr.map((page) => loadReferentsData(glossaryID, page, 50))
  );
  console.log(responses);
  return responses;
}
