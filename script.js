// fetch('https://api.github.com/users/AnnaSiawa')
// 	.then(response => response.json())
// 	.then(json => console.log(json));
	// .then(json => console.log(json.avatar_url));
	// .then(json => console.log(json.name));
	// .then(json => console.log(json.company));
	// .then(json => console.log(json.html_url));

setTimeout(() => {
	let preloader = document.getElementById('cube-loader');
	let wrap = document.getElementById('wrap');
	preloader.classList.add('hidden');
}, 3000);

let url = 'https://api.github.com/users/AnnaSiawa';
let currentDate = new Date().toLocaleDateString();

let getDate = new Promise((resolve, reject) => {
	setTimeout(() => currentDate ? resolve(currentDate) : reject('Значение не найдено'), 3000);
});
let getUser = new Promise((resolve, reject) => {
	setTimeout(() => url ? resolve(url) : reject('Данные не найдены'), 3000);
});

Promise.all([getDate, getUser])
	.then(([currentDate, url]) => {
		let wrap = document.getElementById('wrap');
		let newDate = document.createElement('div');
		newDate.className = 'disc-date';
		newDate.innerHTML = currentDate;
		wrap.prepend(newDate);

		fetch(url)
			.then(response => response.json())
			.then(json => {
				let avatarUser = document.createElement('img');
				avatarUser.className = 'img';
				avatarUser.src = json.avatar_url;
				wrap.appendChild(avatarUser);

				let nameUser = document.createElement('h2');
				nameUser.className = 'name';
				nameUser.innerHTML = json.name;
				wrap.prepend(nameUser);

				let discUser = document.createElement('p');
				discUser.className = 'disc-user';
				discUser.innerHTML = json.company;
				wrap.appendChild(discUser);

				let linkUser = document.createElement('a');
				linkUser.className = 'link';
				linkUser.innerHTML = json.html_url;
				linkUser.href = json.html_url;
				wrap.appendChild(linkUser);
			})
			.catch(function(error) {
				document.body.innerHTML = `Информация о пользователе недоступна.<br> ${error}`;
			});
	});

