let input = prompt("Введите число");
let num = +input;
if(typeof(num) == 'number') {
	if(isNaN(num)) {
		console.log('Упс, кажется, вы ошиблись');
	}
	else {
		if(num % 2 == 0) {
			console.log('Четное');
		} else {
			console.log('Нечетное');
		}
	}
} else {
	console.log('Упс, кажется, вы ошиблись');
}
