$(document).ready(function(){
	$("a").click(function(){
		var smoothscr = this.hash

		$("html, body").animate(
			{
				scrollTop: $(smoothscr).offset().top - 20
			},
			800
		)
	})
})

// $(function(){
//     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// 	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
// 		return new bootstrap.Tooltip(tooltipTriggerEl)
// 	})
// });