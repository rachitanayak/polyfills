//The bind() method of Function instances creates a new function with a specified this value and optional arguments

//polyfill
Function.prototype.myBind = function (...args) {
  const obj = this;
  const params = args.slice(1);

  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]); //use apply method of Function isntance
  };
};
