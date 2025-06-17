//Array.prototype.reduce is a way of "reducing" elements in an array by calling a "reducer" callback function on each element of the array in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

Array.prototype.myReduce = function (callbackFn, initialValue) {
  const noInitialValue = initialValue === undefined;
  const len = this.length;

  if (noInitialValue && len === 0) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let acc = noInitialValue ? this[0] : initialValue;
  let startingIndex = noInitialValue ? 1 : 0;

  for (let k = startingIndex; k < len; k++) {
    // Ignore index if value is not defined for index (e.g. in sparse arrays).
    if (Object.hasOwn(this, k)) {
      acc = callbackFn(acc, this[k], k, this);
    }
  }

  return acc;
};
