/*
Buat program menggunakan callback function untuk melanjutkan
dan menampilkan semua bulan menggunakan method map
*/
const getMonth = callback => {
	setTimeout(() => {
		let error = false;
		let month = [
			'Januari',
			'Februari',
			'Maret',
			'April',
			'Mei',
			'Juni',
			'Juli',
			'Agustus',
			'September',
			'Oktober',
			'November',
			'Desember',
		];
		if (!error) {
			callback(null, month);
		} else {
			callback(new Error('Sorry, data is not found', []));
		}
	}, 4000);
};

const printMonths = (error, months) => {
	if (error) {
		return console.log(error.message);
	}
	return months.map(month => console.log(month));
};

getMonth(printMonths);
