const url = 'https://jsonplaceholder.typicode.com/users';

async function printNames() {
	try {
		const response = await fetch(url);
		const names = await response.json();
		return names.map(({ name }) => console.log(name));
	} catch (error) {
		console.log(error.message);
	}
}

printNames();

// fetch(url)
// 	.then(res => res.json())
// 	.then(users => users.map(({ name }) => console.log(name)))
// 	.catch(err => console.log(err.message));
