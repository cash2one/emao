// Load the HTML4 version if there's not CSS transform
yepnope({
	test : Modernizr.csstransforms,
	yep: ['js/turn.min.js'],
	nope: ['js/turn.html4.min.js'],
	both: ['css/basic.css','js/basic.js'],
	complete: loadApp
});

// loadApp
function loadApp() {
	
	$('.flipbook').turn({
			width:988,
			height:580,
			gradients: true, // !$.isTouch
			pages: 13,
			autoCenter: false,
		when: {
		start: function (even, pages) {
			var book = $(this),
			currentPage = book.turn('page'),
			pages = book.turn('pages');
			if(currentPage==1){
				showBackground('close');
				}else{
				showBackground('open');
			}
		}
	}	
	});
	
	// Events for click to page Start
	
	$('.opentushuo').click(function() {
		showBackground('open');
		$('.flipbook').turn("page", 2);
	});

	$('.start-button').click(function() {
		showBackground('open');
		$('.flipbook').turn("page", 2);
	});

	$('.next-button').click(function() {
		$('.flipbook').turn('next');
	});
	
	$('.previous-button').click(function() {
		$('.flipbook').turn('previous');
	});
	
	$('.get-zongshu').click(function() {
		$('.flipbook').turn("page", 2);
	});
	
	$('.go-waiguan').click(function() {
		showBackground('open');		
		$('.flipbook').turn("page", 4);
	});

	$('.go-neishi').click(function() {
		showBackground('open');		
		$('.flipbook').turn("page", 6);
	});

	$('.go-peizhi').click(function() {
		showBackground('open');		
		$('.flipbook').turn("page", 8);
	});

	$('.go-dongli').click(function() {
		showBackground('open');		
		$('.flipbook').turn("page", 10);
	});
	
	$('.get-zongjie').click(function() {
		$('.flipbook').turn("page", 12);
	});

	// Events for click to page End

	if($('.flipbook').turn('page')==1){
		showBackground('close');		
		}else{
		showBackground('open');
		}

	  //turned event start
	  
	$(".flipbook").bind("turned", function(event, page) {
	  if (page==1) {
		showBackground('close');
			}else{
		showBackground('open');
	  }
		
		//click button even for page1,2,3,12,13	  
		//previous-button
		if(page==1||page==2||page==3){
			$('.previous-button').click(function() {
				showBackground('close');	
			});
				}else{
			$('.previous-button').click(function() {
				showBackground('open');	
			});
				} 
				
		//next-button		
		if(page==1||page==12 || page==13){
			$('.next-button').click(function() {
				showBackground('close');
			});
				}else{
			$('.next-button').click(function() {
				showBackground('open');	
			});
				}  
			  
	});
	
	//turned event End
		
	$(document).keydown(function(e){
		
	//full screen for keydown
		if($('#lightbox').css('display')!=='none'){
			return;
			}
			
			//default for keydown
		var previous = 37, next = 39;
		switch (e.keyCode) {
			case previous:
				$('.flipbook').turn('previous');
			break;
			case next:
				
		if( $('.flipbook').turn('page')==12 || $('.flipbook').turn('page')==13){
			$('.flipbook').turn("page", 1);
			}else{
			$('.flipbook').turn('next');
			}
				
			break;
		}
		
		//while page1 or page13 Even;
		
	});
	
	//Events for keydown End
	
}
  
  //showBackground or hideBackground
  function showBackground(state){
	if(state=='close'){
		$('.extbtn').css('display','none');
		$('.flipbook-viewport').css('display','none');
		$('.page-background').removeClass("yesbackground").addClass("nobackground");
		$('.pagecover').css('display','block');
		}else{
		$('.extbtn').css('display','block');
		$('.pagecover').css('display','none');
		$('.page-background').removeClass("nobackground").addClass("yesbackground");
		$('.flipbook-viewport').css('display','block');
			}
	}

  $(".flipbook .gradient").prepend('<div class="gradient"></div><div class="gradientLine"></div>');

	//modify for lightbox
	
		$(".albumPhoto a").lightbox();	
				$.Lightbox.construct({
				rel:'lightbox',
				colorBlend:false,
				auto_scroll:'disabled',
				show_linkback: true,
				speed:500,
				opacity: 0.9,
				auto_resize:true,
				show_info:true,
				show_extended_info:true,
				download_link:true,
		files: {
			images: {
				prev:		'images/screenprev.png',
				next:		'images/screennext.png',
				blank:		'images/lightbox/blank.gif',
				loading:	'images/loader.gif'
			}
		},
					text: {
						image:		" ",
						of:			"/",
						close:		"关闭",
						closeInfo:	"",
						download:		"下载图片",
						help: {
							close:	"点击关闭",
							interact:	"新车图说"
						},
						about: {
							text: 	"一猫汽车网",
							title:	"",
							link:		"http://www.emao.com/"
						}
					}
			});
				
	
	$(".info-extFull").click(function(){
		$(".albumPhoto a").first().click();
	});
	
	//scroll To comment
	$(".get-pinglun").click(function(){
	$("html,body").animate({scrollTop: $('.pl-topic').offset().top}, 'swing');
	});
	
	//baidu share 
	window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"1","bdMiniList":["mshare","tsina","weixin","sqq","qzone","renren","meilishuo","fx"],"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"1","bdPos":"right","bdTop":"100"}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
	
	
	
/***********************************************
* Amazon style Drop-in content box
* This notice must stay intact for legal use
***********************************************/

	var dropboxleft=100 //set left position of box (in px)
	var dropboxtop=100 //set top position of box (in px)
	var dropspeed=10 //set speed of drop animation (larger=faster)

//Specify display mode. 3 possible values are:
//1) "always"- This makes the fade-in box load each time the page is displayed
//2) "oncepersession"- This uses cookies to display the fade-in box only once per browser session
//3) integer (ie: 5)- Finally, you can specify an integer to display the box randomly via a frequency of 1/integer...
// For example, 2 would display the box about (1/2) 50% of the time the page loads.

	var displaymode="always"

///Don't edit beyond here///////////

	if (parseInt(displaymode)!=NaN)
	var random_num=Math.floor(Math.random()*displaymode)
	var ie=document.all
	var dom=document.getElementById

	function initboxv2(){
	if (!dom&&!ie)
	return
	crossboxcover=(dom)?document.getElementById("dropinboxv2cover") : document.all.dropinboxv2cover
	crossbox=(dom)?document.getElementById("dropinboxv2"): document.all.dropinboxv2
	scroll_top=(ie)? truebody().scrollTop : window.pageYOffset
	crossbox.height=crossbox.offsetHeight
	crossboxcover.style.height=parseInt(crossbox.height)+"px"
	crossbox.style.top=crossbox.height*(-1)+"px"
	crossboxcover.style.left=dropboxleft+"px"
	crossboxcover.style.top=dropboxtop+"px"
	crossboxcover.style.visibility=(dom||ie)? "visible" : "show"
	dropstart=setInterval("dropinv2()",50)
	}

	function dropinv2(){
	scroll_top=(ie)? truebody().scrollTop : window.pageYOffset
	if (parseInt(crossbox.style.top)<0){
	crossboxcover.style.top=scroll_top+dropboxtop+"px"
	crossbox.style.top=parseInt(crossbox.style.top)+dropspeed+"px"
	}
	else{
	clearInterval(dropstart)
	crossbox.style.top=0
	}
	}

	function dismissboxv2(){
	if (window.dropstart) clearInterval(dropstart)
	crossboxcover.style.visibility="hidden"
	}

	function truebody(){
	return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
	}

	function get_cookie(Name) {
	var search = Name + "="
	var returnvalue = ""
	if (document.cookie.length > 0) {
	offset = document.cookie.indexOf(search)
	if (offset != -1) {
	offset += search.length
	end = document.cookie.indexOf(";", offset)
	if (end == -1)
	end = document.cookie.length;
	returnvalue=unescape(document.cookie.substring(offset, end))
	}
	}
	return returnvalue;
	}

	if (displaymode=="oncepersession" && get_cookie("droppedinv2")=="" || displaymode=="always" || parseInt(displaymode)!=NaN && random_num==0){
	if (window.addEventListener)
	window.addEventListener("load", initboxv2, false)
	else if (window.attachEvent)
	window.attachEvent("onload", initboxv2)
	else if (document.getElementById || document.all)
	window.onload=initboxv2
	if (displaymode=="oncepersession")
	document.cookie="droppedinv2=yes"
	}