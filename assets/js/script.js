$(function(){
	$("a").click(function(){
		var smoothscr = this.hash

		$("html, body").animate(
			{
				scrollTop: $(smoothscr).offset().top - 20
			},
			800
		)
	})

	$("#botonEnviar").click(function(){
		alert("Mensaje enviado exitosamente")
	})
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// $(function(){
//     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// 	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
// 		return new bootstrap.Tooltip(tooltipTriggerEl)
// 	})
// });