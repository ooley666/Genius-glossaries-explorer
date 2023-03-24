type ReferentObj = {
  fragment: string;
  annotations: [{ body: { plain: string } }];
  id: string;
};

type referentsCallResponse = {
  referents: Array<ReferentObj>;
};

type referentPlain = {
  refBody: string;
  annBody: string;
  rnaID: string;
};
