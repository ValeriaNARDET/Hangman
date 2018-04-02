"use strict"
$(document).ready(function() {

	$('#play').click(function newGame() {
		$('#theGame').css("animation","foo 3s 0s, bar 2s 0s")
		$(".wrapper").css("animation", "my-background 3s 0s forwards");
		$("header").css("animation", "fine 1s 0s forwards");
		$('#play').css('animation','plum 1s 0s forwards');
		$('#play').text('New Game');
		$('#theGame').empty();

		var words = ['карапуз', 'транспортация', 'телескоп', 'канарейка', 'ябеда', 'наследование',
			'пароход', 'велосипед', 'мажор', 'двоеточие', 'ласточка', 'полиморфизм', 'балалайка',
			'лягушка', 'спорт', 'траектория', 'пенсионер', 'массажист', 'тайна', 'мозаика', 'кот',
			'космонавт', 'ветеринар', 'клякса', 'пятно', 'кошка', 'бобер', 'матрешка', 'двойка'];

		var word = words[Math.floor(Math.random() * words.length)];
				console.log(word);

		var answerArray = [];
			for (var i = 0; i < word.length; i++) {
				answerArray[i] = "_"
			};

		var remainingLetters = answerArray.length;

		var counter = 12;

		var enteredLeters = [];

		$('#theGame').append(`
			<div>
				<input type="text" name="word" id="answer" readonly><br>
				<p id="propose">Введите букву:</p>
					<input type="text" id="leter" placeholder="_"><br>
				<button id="enter">Enter</button><br>
				<p  id="count"></p>
				<p  id="leterArray"></p>
				<button id="out">Out the game</button>
			</div> 
		`);

		$('#count').text("Осталось " + counter + " попыток!");

		$('#answer').val(answerArray.join(" "));

		$('#out').click(function cansel() {
			$("header").css("animation", "de-fine 1s 0s forwards");
			$('#play').css('animation','de-plum 1s 0s forwards');
			$('#play').text('Play the Game');
			$('#theGame').empty()

		})

		$('#enter').click(function newGame() {

			var guess = $('#leter').val();

			var guess = guess.toLowerCase();

			if (enteredLeters.indexOf(guess) == -1 &&  word.indexOf(guess) == -1 && guess.length === 1) {
				enteredLeters.push(guess);
			}

			$('#leter').val('');

			if (guess.length > 1) {
				$('#propose').text('Введите только одну букву.')
			} else if (guess.length !== 1) {
				$('#propose').text('Пожалуйста, введите одиночную букву.')
			} else { 
				var test = 0;
				for (var j = 0; j < word.length; j++) {
					if (word[j] === guess) {
							test++;
						if (answerArray[j] !== "_") {
							$('#propose').text('Такая буква уже угаданна! Попробуй снова.');
						} else {
							answerArray[j] = guess;							remainingLetters--;
							$('#answer').val(answerArray.join(" "));
							$('#propose').text('Введите следующую букву:');
						} 
					}  
				}
				if (!test) {
					$('#propose').text('Такой буквы нет.');
					counter--;
					console.log(counter)
				}
			};
				// if () {
				// 
				// 	}

				if (remainingLetters == 0) {
					$('#propose').text('Было загадано слово: <<');
					$('p').append(word);
					$('p').append('>>');
				}
				$('#count').text("Осталось " + counter + " попыток!");

				if (counter <= 0) {
					$('#theGame').empty()
					$('#theGame').append('Вы не угадали ((')
				}

			$('#leterArray').text(enteredLeters.join(', '))
		});
	})
})