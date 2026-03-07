/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function (s, minJump, maxJump) {
  const L = s.length;
  const visited = new Set([0]);
  const queue = [0];
  let head = 0;
  let lastEnd = 0;

  while (head < queue.length) {
    const size = queue.length - head;

    for (let i = 0; i < size; i++) {
      const idx = queue[head++];

      if (idx === L - 1) return true;

      const start = Math.max(idx + minJump, lastEnd);
      const end = Math.min(idx + maxJump, L - 1);

      for (let j = start; j <= end; j++) {
        if (s[j] === '0' && !visited.has(j)) {
          visited.add(j);
          queue.push(j);
        }
      }

      lastEnd = end;
    }
  }

  return false
};