function askQuestions() {

	var firstName = prompt('What is your first  name?');
	var lastName = prompt('What is your last name?');
	alert('Hello, '+ firstName + ' ' + lastName)

	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		alert ('You are an adult.');
	} else if (age >= 13) {
		alert ('You are a teenager.')
	} else {
		alert ('You are a child.');
	}

	if (firstName.toLowerCase().trim() ==='General' && lastName.toLowerCase().trim() !== 'Assembly') {
		alert ('Greetings, general!');
	}

	var faveColour = prompt ('What is your favourite colour?');

	faveColour = faveColour.toLowerCase().trim();

	var colourList = ['red', 'blue', 'green', 'yellow'];

	for (var i = 0; i < colourList.length; i++) {

		if (faveColour === colourList[i]) {

			$('h1').css('color', faveColour);
		}
	};
}

// when the page has loaded
$(function () {

	$('img').on('click', askQuestions);

		//when user clicks an h3
		$('h3').on('click', function () {
			
			//toggle the next element
			$(this).next().slideToggle(500);


		});

});