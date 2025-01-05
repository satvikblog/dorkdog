export const directoryQueries = {
  'Directory Reconnaissance': {
    'Apache Directory': '{prefix}intitle:index.of',
    'Open Directory': '{prefix}"Index of /" -inurl:(jsp|pl|php|html|aspx)',
    'Parent Directory': '{prefix}inurl:"/parent directory"',
    'Directory Traversal': '{prefix}intitle:"index of" "parent directory"',
    'Public Files': '{prefix}intitle:index.of "parent directory"',
    'Exposed Directories': '{prefix}"Index of /" "Name" "Last modified" "Size" "Description"',
    'File Listings': '{prefix}intitle:"index of" "name" "last modified" "size"',
    'Directory Browser': '{prefix}"directory listing for" "Name" "Last modified"',
    'Server Status': '{prefix}intitle:"Index of" "server at"',
    'FTP Directory': '{prefix}intitle:"index of" inurl:ftp',
  }
};