var count = 0;

$('#clickable').click(function(){
	count++;
	$('#count').text(count);
})