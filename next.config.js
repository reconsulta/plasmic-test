
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['dcCChaA5UfS4hgSoe8wobj'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  