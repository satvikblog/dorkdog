import { isDomain } from './validators';

export const formatSearchQuery = (query: string, input: string): string => {
  const prefix = isDomain(input) ? `site:${input} ` : '';
  
  if (!input) {
    return query.replace('{prefix}', '');
  }
  
  return query.replace('{prefix}', prefix);
};