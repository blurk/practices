var minJumps = function (arr) {
	const n = arr.length;
	const visited = new Set([0]);
	const queue = [0];
	let steps = 0;
	let head = 0;

	const map = new Map();
	for (let i = 0; i < n; i++) {
		if (!map.has(arr[i])) {
			map.set(arr[i], [])
		}
		map.get(arr[i]).push(i)
	}

	while (queue.length !== 0) {
		const size = queue.length - head;

		for (let i = 0; i < size; i++) {
			const idx = queue[head++];

			if (idx === n - 1) return steps;

			const nextMoves = [idx + 1, idx - 1];
			for (const next of nextMoves) {
				while (next >= 0 && next < n && !visited.has(next)) {
					queue.push(next);
					visited.add(next);
				}
			}

			if (map.has(arr[idx])) {
				for (const next of map.get(arr[idx])) {
					if (!visited.has(next)) {
						queue.push(next);
						visited.add(next);
					}
				}
				map.delete(arr[idx])
			}
		}

		steps++;
	}

	return steps;
}