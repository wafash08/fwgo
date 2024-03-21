const ajax = new XMLHttpRequest();

function getPost(method, url) {
	return new Promise((resolve, reject) => {
		ajax.open(method, url);
		ajax.send();
		ajax.onload = function () {
			if (ajax.status === 200) {
				const hasil = JSON.parse(ajax.responseText);
				resolve(hasil);
			} else {
				reject('ada error bro...');
			}
		};
	});
}

async function printTitle() {
	try {
		const result = await getPost(
			'GET',
			'https://jsonplaceholder.typicode.com/posts'
		);
		return result.map(post => {
			console.log(post.title);
		});
	} catch (error) {
		console.log(error);
	}
}

printTitle();

// function getPost(method, url) {
// 	return new Promise((resolve, reject) => {
// 		ajax.open(method, url);
// 		ajax.send();
// 		ajax.onload = function () {
// 			if (ajax.status === 200) {
// 				const hasil = JSON.parse(ajax.responseText);
// 				resolve(hasil);
// 			} else {
// 				reject('ada error bro...');
// 			}
// 		};
// 	});
// }

// getPost('GET', 'https://jsonplaceholder.typicode.com/posts')
// 	.then(res => {
// 		res.map(r => {
// 			console.log(r.title);
// 		});
// 	})
// 	.catch(err => {
// 		console.log(err);
// 	});

// function getPostWithCb(method, url, cb) {
// 	return new Promise((resolve, reject) => {
// 		ajax.open(method, url);
// 		ajax.send();
// 		ajax.onload = function () {
// 			if (ajax.status === 200) {
// 				const hasil = JSON.parse(ajax.responseText);
// 				cb(null, hasil);
// 			} else {
// 				cb('ada error bro...', null);
// 			}
// 		};
// 	});
// }

// getPost(
// 	'GET',
// 	'https://jsonplaceholder.typicode.com/posts',
// 	(error, result) => {
// 		if (error) {
// 			console.log(error);
// 			return;
// 		}
// 		result.forEach(r => {
// 			console.log(r.title);
// 		});
// 	}
// );
