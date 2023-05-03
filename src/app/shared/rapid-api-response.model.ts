import { RapidApiMeta } from './rapid-api-meta-response.model';

export interface RapidApiResponse<T> {
  data: T[];
  meta: RapidApiMeta;
}
