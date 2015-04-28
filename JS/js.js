$(document).raedy(function(){
	$('.wrapper').append('<p>hello</p>');
	alert('huhiu');

	for (var count = 1; count <=100; count++ ){

		if (count % 3 == 0) {
			/*$('.wrapper').append('<p>Fizz</p>');	*/
			console.log('Fizz')
		};
		eles if (count % 5 == 0){
			/*$('.wrapper').append('<p>Buzz</p>');*/
			console.log('Buzz')
		};
		eles if ((count % 5 == 0)&&(count % 3 == 0)) {
			/*$('.wrapper').append('<p>FizzBuzz</p>');*/
			console.log('FizzBuzz')
		};
		eles {
			/*$('.wrapper').append('count');*/
			console.log(count)
		};


	};
});

