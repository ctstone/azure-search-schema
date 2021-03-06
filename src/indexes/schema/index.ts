import { Analyzer, AnalyzerName, CharFilter, TokenFilter, Tokenizer } from "./analyzers";
import { ScoringProfile } from "./scoring";

export * from './scoring';
export * from './analyzers';

export enum FieldType {
  string = 'Edm.String',
  stringCollection = 'Collection(Edm.String)',
  int32 = 'Edm.Int32',
  int64 = 'Edm.Int64',
  double = 'Edm.Double',
  boolean = 'Edm.Boolean',
  dateTimeOffset = 'Edm.DateTimeOffset',
  geographyPoint = 'Edm.GeographyPoint',
}

export enum SuggestSearchMode {
  analyzingInfixMatching = 'analyzingInfixMatching',
}

export interface Index {
  name: string;
  fields: Field[];
  suggesters?: Suggester[];
  scoringProfiles?: ScoringProfile[];
  analyzers?: Analyzer[];
  charFilters?: CharFilter[];
  tokenizers?: Tokenizer[];
  tokenFilters?: TokenFilter[];
  defaultScoringProfile?: string;
  corsOptions?: {
    allowedOrigins: [ '*' ] | string[];
    maxAgeInSeconds?: number;
  };
}

export interface Field {
  name: string;
  type: FieldType;
  searchable?: boolean;
  filterable?: boolean;
  sortable?: boolean;
  facetable?: boolean;
  key?: boolean;
  retrievable?: boolean;
  analyzer?: AnalyzerName;
  searchAnalyzer?: AnalyzerName;
  indexAnalyzer?: AnalyzerName;
  synonymMaps?: [ string ];
}

export interface Suggester {
  name: string;
  searchMode: SuggestSearchMode;
  sourceFields: string[];
}
