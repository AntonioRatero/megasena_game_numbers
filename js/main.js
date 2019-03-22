
// Tabs Jquery

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$('ul.tabs li').css("border-top","none")
		$(this).css("border-top","2px solid #20986a")

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

//Animação

Visibility.onVisible(function(){
	setTimeout(function () {
		$(".introducao h1").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao blockquote").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".introducao a").addClass("animated fadeInDown");
	}, 1200);
	setTimeout(function () {
		$(".animar").addClass("animated fadeInDown");
	}, 1600);	
	setTimeout(function () {
		$(".introducao-interna h1").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao-interna p").addClass("animated fadeInDown");
	}, 800);		
});	
