export const deconstructRefs = (referentsArr: Array<ReferentObj>) => {
  const RefAnnArray = referentsArr.map((ref) => {
    return {
      refBody: ref.fragment,
      annBody: ref.annotations[0].body.plain,
      rnaID: ref.id,
    };
  });

  return RefAnnArray;
};
