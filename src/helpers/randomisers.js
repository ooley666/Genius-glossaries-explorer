import { useSearchParams } from "react-router-dom";

export function randomise(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandPagesArray(per_page, availableAnnotations) {
  if (!availableAnnotations) {
    const [queryParams, _] = useSearchParams();

    availableAnnotations = queryParams.get("annCount");
  }
  const arrayLength = Math.ceil(availableAnnotations / per_page);

  const arr = Array.from({ length: arrayLength }, (_, i) => i + 1);

  return arr.sort(() => Math.random() - 0.5);
}
