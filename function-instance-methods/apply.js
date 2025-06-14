//The apply() method of Function instances is used to call a function with a given this value and an array of arguments provided to it

//polyfill
Function.prototype.myApply = function (context = {}, args) {
  context = context || globalThis;

  const fnSymbol = Symbol(); //a symbol to not override existing property in context
  context[fnSymbol] = this;

  let result = context[fnSymbol](...(args || []));
  delete context[fnSymbol]; ////delete property as it is no longer needed

  return result;
};
