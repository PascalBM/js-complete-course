const tvshows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

const wrapWithTag = (content, tagname) => 
  `<${tagname}>${content}</${tagname}>`;



document.write(`<ol>`);
tvshows.forEach(shows => document.write(wrapWithTag(shows, `li`)));
document.write(`</ol>`);
