
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

var editor; // use a global for the submit and return data rendering in the examples
 
$(document).ready(function() {
    editor = new $.fn.dataTable.Editor( {
        ajax: "../php/staff.php",
        table: "#example",
        fields: [ {
                label: "First name:",
                name: "first_name"
            }, {
                label: "Last name:",
                name: "last_name"
            }, {
                label: "Position:",
                name: "position"
            }, {
                label: "Office:",
                name: "office"
            }, {
                label: "Extension:",
                name: "extn"
            }, {
                label: "Start date:",
                name: "start_date",
                type: "datetime"
            }, {
                label: "Salary:",
                name: "salary"
            }
        ]
    } );
 
    $('#example').DataTable( {
        dom: "Bfrtip",
        ajax: "../php/staff.php",
        columns: [
            { data: null, render: function ( data, type, row ) {
                // Combine the first and last names into a single table field
                return data.first_name+' '+data.last_name;
            } },
            { data: "position" },
            { data: "office" },
            { data: "extn" },
            { data: "start_date" },
            { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) }
        ],
        select: true,
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ]
    } );
} );

/*
$(document).ready(function() {
	$('#DataTable1, #DataTable2').DataTable({
		"searching": false,
		"language": {
            "lengthMenu": "_MENU_ Jogos por página",
            "zeroRecords": "Ops! Nenhum jogo encontrado...",
            "info": "Vendo _PAGE_ de _PAGES_",
			"infoEmpty": "Ops! Nenhum Jogo disponível...",
			"paginate": {
			"next": "Proxima",
			"previous": "Anterior"
			}
		},
		"infoFiltered": "(filtered from _MAX_ total records)",
		responsive: true
	});
});
*/

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
