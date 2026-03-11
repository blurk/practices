import { deepStrictEqual } from "node:assert";
import { inspect } from "node:util";

var combinationSum3 = function (k, n) {
  const rs = [];

  // index, remaining, subset
  const backtrack = (i, r, s) => {
    if (r === 0 && s.length === k) {
      rs.push([...s]);
      return;
    }

    if (s.length > k || r < 0) {
      return;
    }

    for (let j = i; j <= 9; j++) {
      s.push(j);
      backtrack(j + 1, r - j, s);
      s.pop();
    }
  };

  backtrack(1, n, []);

  return rs;
};

const testCases = [
  {
    input: { k: 3, n: 7 },
    expected: [[1, 2, 4]],
  },
  {
    input: { k: 3, n: 9 },
    expected: [
      [1, 2, 6],
      [1, 3, 5],
      [2, 3, 4],
    ],
  },
  {
    input: { k: 4, n: 1 },
    expected: [],
  },
];

function runTestCases() {
  for (const testCase of testCases) {
    const actual = combinationSum3(testCase.input.k, testCase.input.n);
    let status = "\x1b[32mPASS\x1b[0m";

    try {
      deepStrictEqual(actual, testCase.expected);
    } catch (e) {
      status = "\x1b[31mNOT PASS\x1b[0m";
    }

    console.log(`${status} k: ${testCase.input.k}, n: ${testCase.input.n}`);
    console.log("Actual: ", inspect(actual, { colors: true }));
    console.log("Expected: ", inspect(testCase.expected, { colors: true }));
  }
}

runTestCases();
