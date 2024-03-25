/*
Demy membeli makanan menggunakan aplikasi PijarFood.
Dimana terdapat 2 buah kode promo:
- Promo ‘PIJARFOOD5’ dengan ketentuan pemesanan minimal
50rb akan mendapat diskon 50%, dengan maksimal
potongan sebesar 50rb.
- Promo ‘DITRAKTIRPIJAR’ dengan ketentuan pemesanan
minimal 25rb akan mendapatkan diskon 60%, dengan
maksimal potongan sebesar 30rb.
- Jika tidak menggunakan kode promo ‘false’

Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb,
dan setiap satu kilometer selanjutnya dikenakan penambahan
3rb. Untuk beberapa restoran dikenakan pajak yakni 5% dari
harga makanan yang dipesan (true), jika tidak dikenakan pajak
(false).
Example:
Input: PijarFood(75000, ‘PIJARFOOD5’, 5, true)
Output :
Harga : 75000
Potongan : 37500
Biaya Antar : 14000
Pajak : 3750
SubTotal : 55250
*/

// 7 = 5 + (7 - 2) * 3 = 20;
// 6 = 5 + (6 - 2) * 3 = 17;
// 5 = 5 + (5 - 2) * 3 = 14;
// 4 = 5 + (4 - 2) * 3 = 11;
// 3 = 5 + (3 - 2) * 3 = 8;
// 2 = 5 + 0 = 5;
// 1 = 5 + 0 = 5;
// didapatkan pola (n * 3) - 1, berlaku jika n >= 2

function pijarFood(price, voucher = 'false', distance, tax) {
	if (typeof price !== 'number' || typeof distance !== 'number') {
		return 'price and distance have to be a number';
	}

	let discount = 0;

	if (voucher === 'PIJARFOOD5' && price >= 50000) {
		const MAX_DISCOUNT = 50000;
		discount = Math.min(price * 0.5, MAX_DISCOUNT);
	} else if (voucher === 'DITRAKTIRPIJAR' && price >= 25000) {
		const MAX_DISCOUNT = 30000;
		discount = Math.min(price * 0.6, MAX_DISCOUNT);
	}

	const delivery = distance >= 2 ? distance * 3 - 1 : 5;
	const deliveryFee = delivery * 1000;
	const taxCost = tax ? price * 0.05 : 0;
	const subTotal = price + deliveryFee + taxCost - discount;

	return `Harga: ${price}\nPotongan: ${discount}\nBiaya Antar: ${deliveryFee}\nPajak: ${taxCost}\nSubtotal: ${subTotal}`;
}

console.log(pijarFood(75000, 'PIJARFOOD5', 5, true));
// Output :
// Harga : 75000
// Potongan : 37500
// Biaya Antar : 14000
// Pajak : 3750
// SubTotal : 55250
