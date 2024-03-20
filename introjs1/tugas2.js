const scores = [
	{
		pelajaran: 'bahasa indonesia',
		nilai: 90,
	},
	{
		pelajaran: 'bahasa inggris',
		nilai: 89,
	},
	{
		pelajaran: 'matematika',
		nilai: 80,
	},
	{
		pelajaran: 'ipa',
		nilai: 69,
	},
];
/**
 *
 * @param {scores} scores
 * @returns string
 */
function hitungRataRataNilaiUN(scores) {
	for (const { nilai, pelajaran } of scores) {
		if (nilai === undefined || nilai === null) {
			return `${pelajaran} belum memiliki nilai. pastikan semua pelajaran sudah memiliki nilai`;
		}
	}

	const sum = scores.reduce((acc, curr) => acc + curr.nilai, 0);
	const rataRata = sum / scores.length;

	let grade = '';

	if (rataRata >= 90) {
		grade = 'A';
	} else if (rataRata >= 80 && rataRata < 90) {
		grade = 'B';
	} else if (rataRata >= 70 && rataRata < 80) {
		grade = 'C';
	} else if (rataRata >= 60 && rataRata < 70) {
		grade = 'D';
	} else {
		grade = 'E';
	}

	return `Rata-rata = ${rataRata}\nGrade = ${grade}`;
}

console.log(hitungRataRataNilaiUN(scores));
