let data = {
	id: 1,
	name: 'Leanne Graham',
	username: 'Bret',
	email: 'sincere@april.biz',
	address: {
		street: 'Kulas Light',
		suite: 'Apt. 556',
		city: 'Gwenborough',
		zipcode: '92998-3874',
	},
	phone: '1-770-736-8031 x56442',
	website: 'hildegard.org',
};

console.log('sebelum diubah >> ', data);

data = {
	...data,
	name: 'M. Wafa Saeful Haq',
	email: 'saefulhaqwafa@gmail.com',
	hobby: 'membaca',
};

console.log('setelah diubah >> ', data);

const { city, street } = data.address;
console.log('street >> ', street);
console.log('city >> ', city);
