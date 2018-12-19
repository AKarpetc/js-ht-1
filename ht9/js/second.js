let age = document.getElementById('age'),
	clickme = document.querySelector('.clickme');

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
clickme.addEventListener('click', function () {
	showUser.call(age, 'Иван', 'Иванович');

});

function hello() {

	console.log(this)

}

hello()