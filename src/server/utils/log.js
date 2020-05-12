const { DEBUG } = process.env;

module.exports = (message) => {
  if (DEBUG === 'true') {
    console.log(message);
  }
};
