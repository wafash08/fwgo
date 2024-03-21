function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
	if (typeof nilaiAwal !== 'number' || typeof nilaiAkhir !== 'number') {
		return 'Nilai akhir harus lebih besar dari nilai awal';
	} else if (nilaiAwal > nilaiAkhir) {
		return 'Nilai awal dan nilai akhir harus berupa number';
	} else if (dataArray.length <= 5) {
		return 'Jumlah angka dalam dataArray harus lebih dari 5';
	} else {
		const semuaAngka = dataArray.every(n => typeof n === 'number');
		if (!semuaAngka) {
			return 'semua item array harus berupa angka';
		}

		const hasil = [];
		for (let i = 0; i < dataArray.length; i++) {
			const nilai = dataArray[i];

			if (nilai > nilaiAwal && nilai < nilaiAkhir) {
				hasil.push(nilai);
			}
		}

		if (hasil.length === 0) {
			return 'Nilai tidak ditemukan';
		}
		return hasil.sort((a, b) => a - b);
	}
}

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, '8']));
// Output:
// [8, 14, 17]

// console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
// Output:
// “Nilai akhir harus lebih besar dari nilai awal”

// console.log(seleksiNilai(5, 17, [2, 25, 4]));
// Output:
// “Jumlah angka dalam dataArray harus lebih dari 5”

// console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));
// Output:
// “Nilai tidak ditemukan”

// console.log(seleksiNilai(5, 17, [2, 25, 4, '1', 30, 18]));
// Output:
// "semua item array harus berupa angka”
