import { SkillBase } from ".";

export enum SkillTypeCustom {
  webApi = '#Microsoft.Skills.Custom.WebApiSkill',
}

export enum HttpMethod {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE',
  head = 'HEAD',
  patch = 'PATCH',
}

export interface HttpHeaders {
  [key: string]: string;
}

export interface WebApiSkill extends SkillBase<SkillTypeCustom.webApi, string, string> {
  uri: string;
  httpHeaders?: HttpHeaders;
  httpMethod?: HttpMethod;
  batchSize?: number;
  timeout?: number;
}
