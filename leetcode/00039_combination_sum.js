var combinationSum = function (C, T) {
  const n = C.length;
  const rs = [];

  const backtrack = (i, r, s) => {
    if (r === 0) {
      rs.push([...s]);
      return;
    }

    if (r < 0) {
      return;
    }

    for (let j = i; j < n; j++) {
      s.push(C[j]);
      backtrack(j, r - C[j], s);
      s.pop();
    }
  };

  backtrack(0, T, []);

  return rs;
};
