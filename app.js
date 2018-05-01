console.log("Hello World!");

$('input').focus();
$('button').click(addElement);
$('input').keypress(function(event) {
	const key = event.which;
	if (key === 13){
		addElement();
	}
});

function addElement() {
	const jello = $('.target').clone();
	const inputValue = $('input').val();
	console.log(inputValue);

	jello.removeClass('target');
	jello.text(inputValue);

	$('.container').append(jello);
	$('input').val("");
}