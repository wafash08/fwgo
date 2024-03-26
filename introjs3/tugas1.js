/*
Buatlah sambungan program menggunakan then catch dan juga
try catch untuk mengecek hari kerja dari kode Asynchronous
di bawah dan jelaskan penggunaan then catch dan try catch
dengan memberikan komentar di bawahnya:
*/

const cekHariKerja = day => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];

			let cek = dataDay.find(item => item === day);
			if (cek) {
				resolve(cek);
			} else {
				reject(new Error('Hari ini bukan hari kerja'));
			}
		}, 3000);
	});
};

// then catch
// cekHariKerja('sabtu')
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err.message));
/*
then catch merupakan salah satu cara untuk mengkonsumsi promise. blok kode then akan dieksekusi jika, dalam kasus ini, nama hari yang dimasukkan sebagai parameter termasuk dalam hari kerja (resolve). dan sebaliknya blok kode catch akan dieksekusi jika, dalam kasus ini, nama hari yang dimasukkan bukan hari kerja (reject)
*/

async function main() {
	try {
		const day = await cekHariKerja('senin');
		console.log(day);
	} catch (error) {
		console.log(error.message);
	}
}

/*
try catch juga merupakan salah satu cara mengkonsumsi promise bila digabungkan dengan kata kunci async await. blok kode try akan dieksekusi terlebih dahulu dan jika terjadi pengecualian (exception) maka blok kode catch akan dieksekusi.
*/

main();
