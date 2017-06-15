$(function() {
	function changeMenu () {
		var curUrl = ($(location).attr('href'));
		curPage = curUrl.substring(curUrl.indexOf('#') + 1, curUrl.length);
		$("#menu li").css({"background-color": "rgba(157, 167, 183, 0.5)"});
		$("." + curPage).css({"background-color": "rgba(157, 167, 183, 0.9)"})
	}
	changeMenu();

	$(window).on('hashchange', function(e){
		changeMenu();	
	});
});