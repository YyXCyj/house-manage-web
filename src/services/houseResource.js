import request from '@/utils/request';
import { stringify } from 'qs';

export async function queryResource(params) {
  return request(`/haoke/house/resource?${stringify(params)}`);
}
