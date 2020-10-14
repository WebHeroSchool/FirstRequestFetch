// fetch('https://api.github.com/users/AnnaSiawa')
// 	.then(response => response.json())
// 	.then(json => console.log(json));
	// .then(json => console.log(json.avatar_url));
	// .then(json => console.log(json.name));
	// .then(json => console.log(json.company));
	// .then(json => console.log(json.html_url));
	
fetch('https://api.github.com/users/AnnaSiawa')
	.then(response => response.json())
	.then(json => {
		let avatarUser = document.createElement('img');
		avatarUser.className = 'img';
		avatarUser.src = json.avatar_url;
		document.body.append(avatarUser);

		let nameUser = document.createElement('h2');
		nameUser.className = 'name';
		nameUser.innerHTML = json.name;
		document.body.prepend(nameUser);

		let discUser = document.createElement('p');
		discUser.className = 'disc';
		discUser.innerHTML = json.company;
		document.body.append(discUser);

		let linkUser = document.createElement('a');
		linkUser.className = 'link';
		linkUser.innerHTML = json.html_url;
		linkUser.href = json.html_url;
		document.body.append(linkUser);
	})
	.catch(function(error) {
		document.body.innerHTML = `Информация о пользователе недоступна.<br> ${error}`;
	})
