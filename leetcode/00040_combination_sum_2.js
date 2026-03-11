var combinationSum2 = function (C, T) {
  const n = C.length;
  const rs = [];

  C.sort();

  const backtrack = (i, r, s) => {
    if (r === 0) {
      rs.push([...s]);
      return;
    }

    if (r < 0) {
      return;
    }

    for (let j = i; j < n; j++) {
      if (j > i && C[j] === C[j - 1]) continue;

      s.push(C[j]);
      backtrack(j + 1, r - C[j], s);
      s.pop();
    }
  };

  backtrack(0, T, []);

  return rs;
};