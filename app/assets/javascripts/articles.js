function ready() {

	function deleteSurvey() {
			var button = $(this);
			var surveyId = button.data().surveyId;
			$.ajax({
				url: '/surveys/'+surveyId,
				type: 'DELETE',
				success: function (result) {
					var parent = button.parents('.survey-' + result.id);
					parent.fadeOut('slow');
				}
			});
	}

	function addComent() {
		var button = $(this);
		var surveyId = button.data().surveyId;
		$.ajax({


		});
	}

	$(function () {
		$('h2').click(function () {
			var s = $(this).parents('.article');
			s.find('h2').toggleClass('hidden');
			var articleName = $(this).find('span').html();
			console.log(articleName+'!!!!!!!!!!!!!!');
			s.find('input').val(articleName).removeClass('hidden').focus();
			var inp = s.find('input');
			console.log(inp);
			inp.blur(updateArticle);
		});
	})

	function updateArticle() {
		var input = $(this);
		var article_new_name = input.val();
		console.log(article_new_name);
		var articleId = input.data().articleId;
		$.ajax({
			url: '/articles/' + articleId,
			type: 'Put',
			data: {article:{ name: article_new_name} },
			success: function (result) {
				var parent = input.parents('.article-' + result.id);
				$(parent).find('input').toggleClass('hidden');
				$(parent).find('h2 span').html(article_new_name);
				$(parent).find('h2').removeClass('hidden');
				}
			});
		}

}
// $(document).on('click', '#addComent', addComent);

// $(function () {
// 	$('h2').click(function () {
// 		var s = $(this).children('.survey');
// 		s.find('h2').toggleClass('hidden');
// 		var articleName = $(this).find('span').html();
// 		s.find('input').val(surveyName).removeClass('hidden').focus();
// 		var input = s.find('input');
// 		input.blur(updateSurvey);
// 	});
// })

$(document).on('turbolinks:load', ready());