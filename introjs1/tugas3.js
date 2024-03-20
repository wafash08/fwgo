function printSegitiga(n) {
	let segitiga = '';

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= i; j++) {
			segitiga += `${j}`;
		}

		segitiga += '\n';
	}

	return segitiga;
}

console.log(printSegitiga(7));
