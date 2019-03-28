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
	$('#DataTable1').DataTable({
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

	// Ativa o Segundo DataTable
	var sentinela = false;
	$(".segunda-tab").on("click",function(){
		if(sentinela == false){
			sentinela = true;
			$('#DataTable2').DataTable({
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
		}
	});
});

//Animação
Visibility.onVisible(function(){
	setTimeout(function () {
		$(".js .jogar_area_jogos .titulo, .js .arte img").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".js .form_jogar").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".js .btn-feito").addClass("animated fadeInDown");
	}, 1200);


	setTimeout(function () {
		$(".js .jogos_resultados .titulo-interno, .js .jogos_detalhes .titulo-interno").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".js .jogos_resultados .container-tabs, .js .jogos_detalhes .concurso").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".js .jogos_detalhes .bolas-sorte").addClass("animated fadeInDown");
	}, 1200);
});	

