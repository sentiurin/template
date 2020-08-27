const env = process.env.NODE_ENV;
const serve = process.env.SERVE;

const configPath = () => {
  if (serve) {
    return `./serve/${env}.config`;
  }

  return `./${env}.config`;
};

module.exports = require(configPath())({
  paths: {
    js: './dist',
  },
});
