/*
1. program untuk menyajikan kopi
*/

const COFFEE_LIST = [
	{
		name: 'Espresso',
		quantity: 10,
	},
	{
		name: 'Latte',
		quantity: 0,
	},
	{
		name: 'Americano',
		quantity: 10,
	},
];

function serveCoffe(coffeeName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const isCoffeeAvailable = COFFEE_LIST.find(
				coffee => coffee.name === coffeeName
			);
			if (!isCoffeeAvailable) {
				reject(
					new Error('Maaf, kopi yang anda pesan belum tersedia di toko kami')
				);
			} else {
				const { name, quantity } = isCoffeeAvailable;
				resolve({
					name,
					quantity,
				});
			}
		}, 1000);
	});
}

async function runServeCoffe() {
	try {
		const { name, quantity } = await serveCoffe('mdakmfa');
		// const { name, quantity } = await serveCoffe('Latte');
		// const { name, quantity } = await serveCoffe('Espresso');
		if (quantity === 0) {
			return console.log(`Maaf kopi ${name} sudah habis`);
		}
		console.log('Kopi anda sedang dibuat');
		setTimeout(() => {
			console.log('Kopi sudah siap');
			console.log('Terima kasih sudah memesan');
		}, 1000);
	} catch (error) {
		console.log(error.message);
	}
}

/*
2. program untuk tebak-tebakan angka
*/
function getRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessNumberBetweenOneAndThree(yourGuess) {
	return new Promise((resolve, reject) => {
		const answer = getRandomNumber(1, 3);

		console.log('the answer >> ', answer);
		console.log('yourGuess >> ', yourGuess);

		setTimeout(() => {
			if (yourGuess === answer) {
				resolve('Selamat, tebakan kamu benar');
			} else {
				reject(new Error('Tebakanmu belum benar, coba lagi'));
			}
		}, 1500);
	});
}

// guessNumberBetweenOneAndThree(2)
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err.message));

function main() {
	runServeCoffe();
}

main();
