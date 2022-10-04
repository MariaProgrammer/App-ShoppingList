$(function(){
	$('#first').focus()
	$('#button').on('click', function(event) {
 		event.preventDefault();

		let $arr = $('input').filter(':checked').parent().text();
		let parts = $arr.trim().split(/\s+/);
		console.log(parts);

		$('h2 > span').html(parts.length).css('opacity', '1');
		for (i=0; i<parts.length; i++) {
			$('ul').append('<li class="hot">' + parts[i] + '</li>' + '<input type="number" class ="number">')
		}
		
			
		$('#form').hide('slow', 'linear');
		$('.cheked__list').show('slow', 'linear');
});

$('#back').on('click', function(event) {
	event.preventDefault();

	$('.cheked__list').hide('slow', 'linear');
	$('#form').show('slow', 'linear');
	$('li').remove();
	$('.number').remove();
});

$('.cheked__list').on('click', 'li', function() {
		var $this = $(this);
		$this.toggleClass('complete');
});

}); 
