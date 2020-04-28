$(window).on('load', function(){
	if($(window).width() < 768) return;

	$('.mainMenu ul li a').on('click', function(e){
		var hash = e.originalEvent.currentTarget.hash;
		if(!hash) return;

		e.originalEvent.preventDefault();
		$('html, body').animate({
			scrollTop: $(hash).offset().top - 70
		}, 600, 'linear');
	});


	var menuItems = $('.mainMenu').find('a[href^="#"]').map(function(i, a){
		var href = a.getAttribute('href');
		return {
			id: href,
			top: $(href).offset().top - 70
		};
	});
	menuItems = [].slice.call(menuItems).reverse();

	$(window).on('scroll', function(){
		$('.mainMenu li').removeClass('act');
		var item;
		menuItems.forEach(function(n){ !item && n.top < $(window).scrollTop() && (item = n) });
		item && $('.mainMenu').find('a[href="'+item.id+'"]').parent().addClass('act');
	});
});