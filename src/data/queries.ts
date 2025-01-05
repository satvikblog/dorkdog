export const queries = {
  'General Vulnerabilities': {
    'Directory Listing': 'site:{domain} intitle:index.of',
    'Config Files': 'site:{domain} ext:conf OR ext:cnf OR ext:config',
    'Database Files': 'site:{domain} ext:sql OR ext:db OR ext:sqlite',
    'Log Files': 'site:{domain} ext:log OR ext:txt',
    'Backup Files': 'site:{domain} ext:bkf OR ext:bkp OR ext:bak OR ext:old OR ext:backup',
    'Sensitive Files': 'site:{domain} ext:env OR ext:json OR ext:yaml OR ext:yml',
    'Admin Portals': 'site:{domain} inurl:admin OR inurl:login OR intitle:"admin login"',
    'Login Pages': 'site:{domain} inurl:login',
    'SQL Errors': 'site:{domain} "SQL syntax error" OR "mysql_fetch" OR "error in query"',
    'Public Documents': 'site:{domain} ext:pdf OR ext:docx OR ext:xlsx'
  },
  'Advanced Vulnerabilities': {
    'RCE Endpoints': 'site:{domain} inurl:shell OR inurl:cmd OR inurl:execute',
    'PHP Info': 'site:{domain} ext:php intitle:phpinfo',
    'SSRF Endpoints': 'site:{domain} inurl:redirect OR inurl:url= OR inurl:fetch OR inurl:proxy',
    'Open Ports': 'site:{domain} inurl:8080 OR inurl:8443 OR inurl:8000 OR inurl:port',
    'SQL Injection Points': 'site:{domain} inurl:id= OR inurl:pid= OR inurl:cid=',
    'SQL Errors': 'site:{domain} "error in your SQL syntax"',
    'Debug Files': 'site:{domain} ext:log OR ext:txt inurl:debug',
    'AWS Buckets': 'site:s3.amazonaws.com "{domain}"',
    'GCP Storage': 'site:storage.googleapis.com "{domain}"',
    'IoT Devices': 'site:{domain} intitle:"IoT" OR inurl:/cgi-bin/',
    'Exposed APIs': 'site:{domain} inurl:api OR inurl:v1 OR ext:json OR ext:yaml',
    'Cloud Instances': 'site:ec2.amazonaws.com "{domain}" OR site:cloud.google.com "{domain}"'
  },
  'CMS Specific': {
    'WordPress Install': 'site:{domain} inurl:wp- OR inurl:wordpress',
    'WP Config': 'site:{domain} inurl:wp-config.php',
    'WP Uploads': 'site:{domain} inurl:wp-content/uploads',
    'WP Backups': 'site:{domain} ext:sql OR ext:bak OR ext:backup',
    'Joomla Files': 'site:{domain} inurl:joomla',
    'Drupal Login': 'site:{domain} inurl:drupal'
  },
  'Email OSINT': {
    'Email Discovery': 'site:{domain} "@{domain}"',
    'LinkedIn Emails': 'site:linkedin.com inurl:@{domain}',
    'GitHub Emails': 'site:github.com "@{domain}"',
    'Pastebin Leaks': 'site:pastebin.com "{domain}"',
    'Email Patterns': 'site:{domain} intext:"email" OR intext:"contact"',
    'Breach Check': 'site:haveibeenpwned.com "{domain}"'
  },
  'Social Media Intelligence': {
    'LinkedIn Profiles': 'site:linkedin.com "{domain}"',
    'Twitter Mentions': 'site:twitter.com "{domain}"',
    'Facebook Pages': 'site:facebook.com "{domain}"',
    'Social Secrets': 'site:twitter.com "{domain}" ext:json OR ext:yaml',
    'Reddit Discussions': 'site:reddit.com "{domain}"',
    'GitHub Activity': 'site:github.com "{domain}" AND "password"'
  },
  'Phone & Contact OSINT': {
    'Phone Numbers': 'site:{domain} intext:"phone" OR intext:"contact"',
    'Pastebin Numbers': 'site:pastebin.com "{domain}" AND "phone"',
    'Truecaller': 'site:truecaller.com "{domain}"',
    'Who Calls': 'site:whocallsme.com "{domain}"'
  },
  'Infrastructure': {
    'Subdomains': 'site:*.{domain} -www',
    'DNS Records': 'site:securitytrails.com "{domain}"',
    'IP Info': 'site:ipinfo.io "{domain}" OR site:arin.net "{domain}"',
    'Nameservers': 'site:{domain} "nameserver"',
    'SSL Certificates': 'site:crt.sh "{domain}" OR site:shodan.io ssl.cert.subject.CN="{domain}"'
  },
  'Dark Web & Leaks': {
    'Ahmia Search': 'site:ahmia.fi "{domain}"',
    'Leaked Credentials': 'site:pastebin.com "{domain}" AND "password"',
    'GitHub Secrets': 'site:github.com "{domain}" AND "password"',
    'Config Leaks': 'site:{domain} ext:env OR ext:json AND "password"'
  },
  'Reconnaissance': {
    'Subdomains': 'site:*.{domain}',
    'LinkedIn Employees': 'site:linkedin.com "@{domain}"',
    'Pastebin Entries': 'site:pastebin.com "{domain}"',
    'ThreatCrowd': 'site:threatcrowd.org "{domain}"',
    'Certificate Transparency': 'site:crt.sh "{domain}"',
    'Censys': 'site:censys.io "{domain}"',
    'Shodan': 'site:shodan.io "{domain}"',
    'Web Archives': 'site:web.archive.org "{domain}"'
  }
};