import { useSearchParams } from "react-router-dom";

export function getRandPagesArray(
  per_page: number,
  availableAnnotations?: number
) {
  if (!availableAnnotations) {
    const [queryParams, _] = useSearchParams();

    availableAnnotations = Number(queryParams.get("annCount"));
  }
  const arrayLength = Math.ceil(availableAnnotations / per_page);

  const arr = Array.from({ length: arrayLength }, (_, i) => i + 1);

  return arr.sort(() => Math.random() - 0.5);
}
