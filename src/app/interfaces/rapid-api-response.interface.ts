import { RapidApiMeta } from './rapid-api-meta-response.interface';

export interface RapidApiResponse<T> {
  data: T[];
  meta: RapidApiMeta;
}
