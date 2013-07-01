/**
 * Global variables and functions
 */
var ProjectName = (function($, window, undefined){	 	
    var privateVar = 1;
	
	function privateMethod1(){

	};
	
	return {        
		publicVar: 1,
		publicObj: {
			var1: 1,
			var2: 2
		},
		publicMethod1: privateMethod1
	};
})(jQuery, window);

/**
 * Website start here
 */
jQuery(document).ready(function($){  
	var nav = $('.nav');
	var liTag = nav.find('li');  
	var liNav = nav.children('li');
	var liSubnav = $('.sub-nav').children('li');
	/*cau 1*/
    $('#countLi').unbind('click').bind('click', function(){
		alert(liTag.length);	
	});
	/*cau 2*/
	$('#addClass').unbind('click').bind('click', function(){
		 nav.children('li:even').addClass('highlight');
		 //liSubnav.each(function(index, element) {
			$('.sub-nav').children('li:even').addClass('highlight');
			$('.sub-nav').children('li:odd').addClass('highlight-red');
		//});
		nav.children('li:odd').addClass('highlight-red');
	});
	/*cau 3*/
	$('#openTab').unbind('click').bind('click', function(){
		liTag.each(function(index, element) {
			var aTag = $(element).children('a');
			var text = aTag.text();
			aTag.attr({
				'href':'https://www.google.com.vn/search?q='+text,
				'target':'_blank'
			});
		});
		
	});
	/*cau 4*/
	$('#sortMenu').unbind('click').bind('click', function(){
		var array = new Array();
		liNav.each(function(index, element) {
			array.push($(element).children('a').text());
        });
		array.sort();
		$(array).each(function(index, element) {
			liNav.eq(index).children('a').text(element);
        });
		console.log(array);
	});
	/*cau 5*/
	$('#boldElement').unbind('click').bind('click', function(){
		var array = new Array();
		liNav.each(function(index, element) {
			if($(element).children('a').text().toLowerCase().indexOf('b')>-1){
				$(element).children('a').css('font-weight','bold');
			}
			if($(element).children('a').text().toLowerCase().indexOf('no')>-1){
				$(element).children('a').wrapInner('<strike></strike>');
			}
			if($(element).children('a').text().toLowerCase().indexOf('khong')>-1){
				$(element).children('a').wrapInner('<strike></strike>');
			}
        });
	});
	
	$('.block').eq(0).animate({top:5},2000);
	$('.block').eq(1).animate({top:50},1500);
	$('.block').eq(2).animate({top:100},1000);
	var block ;
	$('.content-animate').delegate('.block', 'click', function(){
		block = $(this);
		console.log(block);
		var wBlock = $(this).width();
		var hBlock = $(this).height();;
		var wWindow = $(document).width();
		if (block.width() > 100){
			block.animate({
				'opacity':0,
				'left': '-600px'
			},4000);
		}
		block.siblings().css('z-index','').animate({
			'width': 50,
			'height': 50
		},1000);
		block.addClass('expand').css('z-index',99).animate({
			'width': wBlock + 20,
			'height': hBlock + 20 	
		},1000);
		block.siblings().removeClass('expand');
	});
	$('.content-animate').delegate('.block', 'hover', function(){
		$(this).hover(function(){$(this).addClass('active')}, function(){$(this).removeClass('active');});
	});
	$('.content-animate').bind('click',function(e){
		if(block){
			wBlock = $('.content-animate').find('.expand').width();
			hBlock = $('.content-animate').find('.expand').height();
			if($(e.target).hasClass('content-animate')){
				block.animate({
					'width': wBlock - 10,
					'height': wBlock - 10
				});
			};
		}
		
	});
	var newButton = $('.list-button').children().eq(0).clone().appendTo('.list-button');
	newButton.attr({
		'id': 'createButton',
		'name' : 'createButton',
		'value' : 'Create Button'
	});
	var wContent = $('.content-animate').width();
	var hContent = $('.content-animate').height();
	$('#createButton').unbind('click').bind('click', function(){
		if($('.content-animate').children().hasClass('new-block')){
			return false;
		};
		$('.content-animate').children().eq(0).clone().appendTo('.content-animate').addClass('new-block');
		var hue = 'rgb('
			+ (Math.floor(Math.random() * 256)) + ','
			+ (Math.floor(Math.random() * 256)) + ','
			+ (Math.floor(Math.random() * 256)) + ')';
		if (hue == 'rgb(000,000,000)' || hue == 'rgb(255,255,255)'){
			var hue = 'rgb('
				+ (Math.floor(Math.random() * 256)) + ','
				+ (Math.floor(Math.random() * 256)) + ','
				+ (Math.floor(Math.random() * 256)) + ')';
		}
		var topRandom = Math.floor(Math.random()* (hContent-50));
		var leftRandom = Math.floor(Math.random()* (wContent-50));
		$('.new-block').css({
			'background':hue,
			'top': '-800px',
			'left': leftRandom
		}).animate({'top':topRandom},1000);		
	});
	
});
