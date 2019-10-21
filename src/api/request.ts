import { ApiResponse } from './types';
import { buildUrl } from './build-url';
import fetch from 'node-fetch';

export const request = async ({
  url, query, method = 'GET',
}: RequestProps): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      buildUrl(`/${ url }`, query),
      { method }
    );
    return await response.json() as Promise<ApiResponse>;
  } catch (err) {
    return err;
  }
};

interface RequestProps {
  url: string;
  query?: Record<string, string | number>;
  method?: 'GET' | 'POST';
  credentials?: 'include';
}
