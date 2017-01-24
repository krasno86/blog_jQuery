function ready() {
	$(document).on('click', '#addComent', addComent);

	$(function () {
		$('#createComent').click(function () {
			var b = $(this).parents('.coment_partial')
			b.find('textarea.hidden').removeClass('hidden').focus();
			var a = b.find('button#createComent').toggleClass('hidden');
			var textarea = b.find('textarea#partial')
			textarea.blur(createComent);
		})
	})

	function createComent() {
		var coment = $('textarea#partial').val();
		console.log(coment);
		$.ajax({
			url: window.location.pathname+'/coments/',
			type: 'Post',
			data: {coment:{ text: coment} },
			success: function (result) {
			  $('.comments').append(result);
				$('textarea#partial').toggleClass('hidden');
			}
		})
	}

	function addComent() {
		var button = $(this);''
		var coment_text = $('textarea').val();
		console.log(coment_text);
		$.ajax({
			url: window.location.pathname+'/coments/',
			type: 'Post',
			data: {coment:{ text: coment_text} },
			success: function (result) {
				var p = $('<p>'+ result.text +'</p>');
				console.log(result);
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