import { useRef } from "react";
import { getRandPagesArray } from "./randomisers";

export const getCurrentPage = (pageIndex, per_page) => {
  const pagesArr = useRef(getRandPagesArray(per_page));
  const page = pagesArr.current[pageIndex];
  return page;
};
