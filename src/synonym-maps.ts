export enum SynonymMapFormat {
  solr = 'solr',
}

export interface SynonymMapSchema {
  name: string;
  format: SynonymMapFormat;
  synonyms: string;
}
