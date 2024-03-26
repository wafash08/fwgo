/*
Diberikan sebuah variabel yang berisikan bilangan integer
dengan ketentuan angka 0 (nol) dalam variabel tersebut
merupakan pemisah antara satu bilangan dengan bilangan
lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan
berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu,
bilangan hasil pengurutan akan digabung kembali dengan tanpa
pemisah dengan output berupa bilangan integer. Buatlah
method/function yang menerima parameter hanya deret angka
dan menghasilkan output seperti keterangan di atas.
*/

function divideAndSort(n) {
	return Number(
		String(n)
			.split('0')
			.map(number =>
				number
					.split('')
					.sort((a, b) => a - b)
					.join('')
			)
			.join('')
	);
}

console.log(divideAndSort(5956560159466056)); // 55566914566956
console.log(typeof divideAndSort(5956560159466056)); // number
