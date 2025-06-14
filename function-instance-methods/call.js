//The call() method of Function instances calls this function with a given this value and arguments provided individually.

//polyfill
Function.prototype.myCall = function (context = {}, ...args) {
  context = context || globalThis;

  const fnSymbol = Symbol(); //a symbol to not override existing property in context
  context[fnSymbol] = this;

  let result = context[fnSymbol](...args);
  delete context[fnSymbol]; //delete property as it is no longer needed

  return result;
};
