'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let currentSum = 0;
  let result;

  return (a) => {
    if (a === undefined) {
      result = currentSum;
      currentSum = 0;

      return result;
    }
    currentSum += a;

    const f = (b) => {
      if (b !== undefined) {
        currentSum += b;

        return f;
      } else {
        result = currentSum;

        currentSum = 0;

        return result;
      }
    };

    return f;
  };
}

module.exports = makeInfinityAdder;
