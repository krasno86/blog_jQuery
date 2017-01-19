function ready() {

// $(document).on('click', '#addComent', addComent);

function updateComent() {
	var input = $(this);
	console.log(this);
	var a = input.val();
	console.log(a);
	var articleId = input.data().articleId;
	console.log(articleId);
	$.ajax({
		url: '/surveys/' + surveyId,
		type: 'Put',
		data: {survey:{ name: a} },
		success: function (result) {
			var parent = input.parents('.survey-' + result.id);
			$(parent).find('input').toggleClass('hidden');
			$(parent).find('h4.page-header span').html(a);
			$(parent).find('h4').removeClass('hidden');
			}
		});
	}
}
$(document).on('turbolinks:load', ready());