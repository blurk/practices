function myPromieAll(promises) {
	return new Promise((res, rej) => {
		if (!Array.isArray(promises)) {
			rej(new TypeError("Input must be an array"))
		}

		if (promises.length === 0) res([]);

		const result = [];
		let count = promises.length;

		promises.forEach((p, i) => {
			Promise.resolve(p).then((val) => {
				result[i] = val
				count--;

				if (count === 0) {
					res(result)
				}
			}).catch(err => {
				rej(err);
			})

		})


	})
}

let p = myPromieAll([0, Promise.resolve(10), new Promise((res) => setTimeout(res, 1000, 100))])
p.then(console.log).catch(console.log)

p = myPromieAll([0, Promise.reject("ERR"), new Promise((res) => setTimeout(res, 1000, 100))])
p.then(console.log).catch(console.log)

p = myPromieAll(100)
p.then(console.log).catch(console.log)