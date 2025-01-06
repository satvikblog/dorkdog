import { isDomain } from './validators';

const formatKeywordQuery = (query: string, keyword: string): string => {
  // For directory reconnaissance queries, add intitle:index.of for keywords
  if (query.includes('{prefix}')) {
    return query
      .replace('{prefix}', '')
      .replace(/intitle:index.of/, `intitle:index.of ${keyword}`)
      .replace(/inurl:"\/parent directory"/, `inurl:"\/parent directory" ${keyword}`);
  }

  // For other categories when given a keyword is 
  if (query.includes('site:{domain}')) {
    return query
      .replace(/site:\{domain\}\s+/g, '')
      .replace(/\{domain\}/g, keyword);
  }

  return query.replace(/\{domain\}/g, keyword);
};

export const formatSearchQuery = (query: string, input: string): string => {
  // Handle empty input
  if (!input) {
    // For directory queries, keep the basic intitle:index.of structure
    if (query.includes('{prefix}')) {
      return query.replace('{prefix}', '');
    }
    // For other queries, remove the site: part
    return query
      .replace(/site:\{domain\}\s+/g, '')
      .replace(/\{domain\}/g, '');
  }

  // Handle domain input
  if (isDomain(input)) {
    if (query.includes('{prefix}')) {
      return query.replace('{prefix}', `site:${input} `);
    }
    return query
      .replace(/\{domain\}/g, input)
      .replace(/site:\{domain\}/g, `site:${input}`);
  }

  // Handle keyword input
  return formatKeywordQuery(query, input);
};