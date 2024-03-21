// 10 method selain split, reverse, join, foreach, filter

const nilai = [80, 82, 85, 81, 90];

// 1. method map
// digunakan untuk melakukan iterasi pada sebuah array dan pada setiap iterasi method ini akan memanggil callback function yang disediakan
// const angkaGanjil = [1, 3, 5, 7, 9];
// const angkaGanjilDikaliTiga = angkaGanjil.map(n => n * 3);
// console.log(angkaGanjil);
// console.log(angkaGanjilDikaliTiga);

// 2. method reduce
// digunakan untuk melakukan iterasi pada sebuah array dan pada setiap iterasi method ini akan memanggil callback function dan mengakumulasikan setiap item menjadi value tunggal
// const totalNilai = nilai.reduce((previousValue, currentValue) => {
// console.log('previousValue >> ', previousValue);
// console.log('currentValue >> ', currentValue);
// 	return previousValue + currentValue;
// }, 0);
// console.log(totalNilai);

// 3. method sort
// digunakan untuk mengurutkan item-item dari sebuah array secara in-place dan mengembalikan referensi ke array yang sama dalam keadaan sudah terurut
// const sortNilaiByAsc = nilai.sort((a, b) => a - b);
// console.log(nilai);
// console.log(sortNilaiByAsc);
// console.log(sortNilaiByAsc === nilai);

// 4. method fill
// digunakan untuk mengubah semua elemen dalam rentang tertentu menjadi nilai tertentu
// const nilaiKosong = nilai.fill(0, 1);
// console.log(nilaiKosong);
// console.log(nilai);
// console.log(nilaiKosong === nilai);

// 5. method find
// digunakan untuk mencari sebuah elemen dan akan mengembalikan elemen pertama yang memenuhi kondisi yang disediakan di callback function
// const nilaiToFind = nilai.find(n => n > 80);
// console.log(nilaiToFind);

// 6. method concat
// digunakan untuk menggabungkan dua atau lebih array dan mengembalikan sebuah array baru
// const nilaiGabungan = nilai.concat([76, 79, 98, 65, 70]);
// console.log(nilaiGabungan);

// 7. method every
// digunakan untuk memeriksa apakah semua elemen dari sebuah array memenuhi kondisi yang ada pada callback function
// const isAboveTreshold = nilai.every(n => n > 75);
// console.log(isAboveTreshold);

const paragraph = 'saya senang belajar pemrograman';

// 8. method replace
// digunakan untuk mengganti string yang cocok dengan pola yang diinginkan dan mengembalikan string baru
// const paragraphBaru = paragraph.replace('saya', 'kami');
// console.log(paragraph);
// console.log(paragraphBaru);

// 9. method endsWith
// digunakan untuk memeriksa apakah sebuah string berakhir dengan sebuah karakter tertentu
// const endedWithPemrograman = paragraph.endsWith('pemrograman');
// console.log(endedWithPemrograman);

// 10. method startsWith
// digunakan untuk memeriksa apakah sebuah string dimulai dengan sebuah karakter tertentu
// const startedWithSaya = paragraph.endsWith('Saya');
// console.log(startedWithSaya);
