function checkPalindrom(word) {
	let left = 0;
	let right = word.length - 1;

	while (left < Math.floor(word.length / 2)) {
		if (word[left] !== word[right]) {
			return 'bukan palindrom';
		}
		left++;
		right--;
	}

	return 'palindrom';
}

console.log(checkPalindrom('malam')); // palindrom
// console.log(checkPalindrom('belajar')); // bukan palindrom
console.log(checkPalindrom('kasurrusak')); // palindrom
// console.log(checkPalindrom('pemrograman')); // bukan palindrom

function reverseWords(words) {
	return words.split(' ').reverse().join(' ');
}

console.log(reverseWords('saya belajar javascript')); // javascript belajar saya
console.log(reverseWords('web development')); // development web
