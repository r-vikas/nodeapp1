//this will return a function, but wont call the function
module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
