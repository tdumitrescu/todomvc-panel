const ghpages = require(`gh-pages`);

ghpages.publish(`static-out`, err => err && console.error(err));
