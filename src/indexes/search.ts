import { Point } from 'geojson';

import { List } from '..';

export type FieldValue = string | number | boolean | string[] | Point | Date | any;

export enum QueryType {
  simple = 'simple',
  full = 'full',
}

export enum SearchMode {
  any = 'any',
  all = 'all',
}

export interface Query {
  count?: boolean;
  facets?: string[];
  filter?: string;
  highlight?: string;
  highlightPreTag?: string;
  highlightPostTag?: string;
  minimumCoverage?: number;
  orderby?: string;
  scoringParameters?: string[];
  scoringProfile?: string;
  search?: string;
  searchFields?: string;
  searchMode?: SearchMode;
  select?: string;
  skip?: number;
  top?: number;
  queryType?: QueryType;
}

export interface Facets {
  [field: string]: Array<Facet & FacetRange>;
}

export interface Highlights {
  [field: string]: string[];
}

export interface FacetRange {
  value: FieldValue;
  from: number;
  to: number;
}

export interface Facet {
  value: FieldValue;
  count: number;
}

export interface Document {
  [field: string]: FieldValue;
}

export interface SearchDocument {
  '@search.score': number;
  '@search.highlights'?: Highlights;
}

export interface SearchResults<T extends Document = Document> extends List<T & SearchDocument> {
  '@odata.count'?: number;
  '@odata.nextLink'?: string;
  '@search.facets'?: Facets;
  '@search.nextPageParameters'?: Query;
  '@search.coverage'?: number;
}
