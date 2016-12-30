var url = 'https://www.googleapis.com/youtube/v3/search';


$('document').ready(function(){
	$('form').on('submit',function(e){
		$('.js-search-results').remove();
		e.preventDefault();
		$.getJSON(url,{
			part: 'snippet',
			q: $('.js-query').val(),
			key: "AIzaSyBTgPAdE8QnBxQX1Y8of7EGbg-1km4EiDI",
			maxResults: 5
		},function(data){
			$.each(data.items,function(i, item){
				var result = "<div class='js-search-results'>";
				result += '<img src =' + item.snippet.thumbnails.medium.url +'>';
				result += "</div>";
				console.log(result);
				$('body').append(result);
			})
		});
	})	
})






