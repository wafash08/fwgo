/**
 *
 * @param {string[]} names
 * @param {number} length
 * @returns {string[]}
 */
function getNames(names, length) {
	return names.slice(0, length);
}

/**
 *
 * @param {string} name
 * @param {number} length
 * @param {getNames} cb
 * @returns {string[]}
 */

function searchName(name, length, cb) {
	if (name.length === 0) {
		return 'kamu harus sediakan karakter yang ingin dicari';
	}

	const nameToSearch = names.filter(n => n.toLowerCase().includes(name));

	if (nameToSearch.length === 0) {
		return `nama yang mengandung "${name}" tidak ditemukan`;
	} else {
		return cb(nameToSearch, length);
	}
}

const names = [
	'Abigail',
	'Alexandra',
	'Alison',
	'Amanda',
	'Angela',
	'Bella',
	'Carol',
	'Caroline',
	'Carolyn',
	'Deirdre',
	'Diana',
	'Elizabeth',
	'Ella',
	'Faith',
	'Olivia',
	'Penelope',
];

console.log(searchName('an', 3, getNames)); // [ 'Alexandra', 'Amanda', 'Angela' ]
