$(function(){
	var $c = $('#content');
	
	function show(s) { return function() { $c.addClass(s); }}
	function hide(s) { return function() { $c.removeClass(s); }}
	
	var last = 0;
	setTimeout(show('s1'),last += 0);
	setTimeout(hide('s1'),last += 1800 + 3000);
	setTimeout(show('s2'),last += 2160);
});
