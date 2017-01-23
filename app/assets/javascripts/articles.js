function ready() {
	$(document).on('click', '#addComent', addComent);

	function addComent() {
		console.log('click')
		var button = $(this);
		var coment_text = $('textarea').val();
		console.log(coment_text);
		$.ajax({
			url: window.location.pathname+'/coments/',
			type: 'Post',
			data: {coment:{ text: coment_text} },
			success: function (result) {
				var p = $('<p>'+ result.text +'</p>');
				// $('p.hidden#new_text').append(p).removeClass('hidden');
			$('.comments').append(p);
			}
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

$(document).on('turbolinks:load', ready());