
// Tabs Jquery

$(document).ready(function(){
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})

// DataTable
$(document).ready(function() {
	$('#DataTable1, #DataTable2').DataTable({
		"searching": false,
		"language": {
            "lengthMenu": "_MENU_ Jogos por página",
            "zeroRecords": "Ops! Nenhum jogo encontrado...",
            "info": "Vendo _PAGE_ de _PAGES_",
			"infoEmpty": "Vendo 0 de 0"
		},
		"infoFiltered": "(filtered from _MAX_ total records)",
		responsive: true
	});
});

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

