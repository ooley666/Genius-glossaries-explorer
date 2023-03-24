import { useRef } from "react";
import { getRandPagesArray } from "./randomisers";

export const getCurrentPage = (pageIndex: number, per_page: number) => {
  const pagesArr = useRef(getRandPagesArray(per_page));
  const page = pagesArr.current[pageIndex];
  return page;
};
