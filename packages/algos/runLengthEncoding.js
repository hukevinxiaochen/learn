/**
 * EXAMPLE
 */
const example1 = "ddddggrieeeddddd";

/**
 * APPROACH
 *
 * Keep track of the last character seen, initialized to empty string.
 * Keep track of a run count, i.e. number of times the last character has been seen.
 *   Initialize to 0.
 * Allocate an array to push little output fragments onto.
 * Iterate through the string character by character STOP when all characters have been iterated through.
 *   Check if it matches last character seen.
 *   If true => increment run count by 1; additionally
 *     If it is the final character =>
 *       if runCount > 1 => `${runCount}${lastCharacter}`
 *       else => `${lastCharacter}`
 *     PUSH onto the output array a string
 *       if runCount > 1 => `${runCount}${lastCharacter}`
 *       else => `${lastCharacter}`
 *       reset run count to 1
 *       reset lastChar to the current character
 * Output a string that is the result of calling Array.prototype.join('')
 */
const run = (string) => {
  let lastChar = "";
  let runCount = 0;
  const outputArray = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char === lastChar) {
      runCount += 1;
      if (i === string.length - 1) {
        let frag = runCount > 1 ? `${runCount}${lastChar}` : `${lastChar}`;
        outputArray.push(frag);
      }
    } else {
      let frag = runCount > 1 ? `${runCount}${lastChar}` : `${lastChar}`;
      outputArray.push(frag);
      runCount = 1;
      lastChar = char;
    }
  }

  return outputArray.join("");
};


/**
 * TEST
 */
console.log(run(example1)); // 4d2gri3e5d

/**
 * OPTIMIZATION
 *
 * This should be O(n) time. We iterate once through the input array.
 */
