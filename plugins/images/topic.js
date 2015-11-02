//简单智能浮动定位 Start
$.fn.smartFloat = function() {
    var position = function(element) {
        var top = element.position().top, pos = element.css("position");
        $(window).scroll(function() {
            var scrolls = $(this).scrollTop();
            if (scrolls > top) {
                if (window.XMLHttpRequest) {
                    element.css({
                        position: "fixed",
                        top: 0
                    });    
                } else {
                    element.css({
                        top: scrolls
                    });    
                }
            }else {
                element.css({
                    position: "absolute",
                    top: top
                });    
            }
        });
    };
    return $(this).each(function() {
        position($(this));                         
    });
};
//简单智能浮动定位 End


//评论 Start
updateCommentsNum = function () {$(".commentCount").text(commentArea.totalCommentCount);}
commentArea.build("comment_place", 1, '7194', {	'onLoaded': updateCommentsNum,'onAddOk': updateCommentsNum,'onDelOk': updateCommentsNum,'onReplyOk': updateCommentsNum},1);
//评论 End

(function($){
	
//绑定简单智能浮动定位
$("#fixBox").css('top',$('.fixDiv').offset().top)
$("#fixBox").smartFloat();

//简单轮播演示 Start
$(".owl-box").owlCarousel({
items:1,
singleItem:true,
navigation:true,
addClassActive:true,
navigationText:[
"<i class='icon-chevron-left icon-white'>prev</i>",
"<i class='icon-chevron-right icon-white'>next</i>"
],
autoPlay:5000
});

//简单轮播演示 End


//联动轮播演示(1) Start
var owlID1 = "owlID1";
$("#"+owlID1+" .owl-owl").owlCarousel({
items:1,
singleItem:true,
navigation:true,
addClassActive:true,
navigationText:[
"<i class='icon-chevron-left icon-white'>prev</i>",
"<i class='icon-chevron-right icon-white'>next</i>"
],
autoPlay:500000,
stopOnHover:true,
beforeInit:function(owlID){
		var owlID=owlID1;
		$('#'+owlID+' .tab-owl a').each(function(i){
			this.onclick=function(){
				$(this).siblings("a").removeAttr("class");
				$(this).addClass('active');
				$("#"+owlID+" .owl-owl").trigger("owl.goTo",i);
				return false;
			};  
		});
		
	   $("#"+owlID+" .tab-owl").hover(function(){
		   $("#"+owlID+" .owl-owl").trigger('owl.stop');
		  },function(){
			$("#"+owlID+" .owl-owl").trigger('owl.play',5000);
	   });
  },
afterAction:function(owlID){
		var owlID=owlID1;
		$("#"+owlID+" .tab-owl a").siblings("a").removeAttr("class");
		$("#"+owlID+" .tab-owl a:eq("+this.owl.currentItem+")").addClass('active');
  }
});

$("#"+owlID1+" .owl-owl").trigger('owl.goTo', 2);
//联动轮播演示(1) End

	
//联动轮播演示(2) Start
var owlID2 = "owlID2";
$("#"+owlID2+" .owl-owl").owlCarousel({
items:1,
singleItem:true,
navigation:true,
addClassActive:true,
navigationText:[
"<i class='icon-chevron-left icon-white'>prev</i>",
"<i class='icon-chevron-right icon-white'>next</i>"
],
autoPlay:500000,
stopOnHover:true,
beforeInit:function(owlID){
		var owlID=owlID2;
		$('#'+owlID+' .tab-owl a').each(function(i){
			this.onclick=function(){
				$(this).siblings("a").removeAttr("class");
				$(this).addClass('active');
				$("#"+owlID+" .owl-owl").trigger("owl.goTo",i);
				return false;
			};  
		});
		
	   $("#"+owlID+" .tab-owl").hover(function(){
		   $("#"+owlID+" .owl-owl").trigger('owl.stop');
		  },function(){
			$("#"+owlID+" .owl-owl").trigger('owl.play',5000);
	   });
  },
afterAction:function(owlID){
		var owlID=owlID2;
		$("#"+owlID+" .tab-owl a").siblings("a").removeAttr("class");
		$("#"+owlID+" .tab-owl a:eq("+this.owl.currentItem+")").addClass('active');
  }
});
//联动轮播演示(2) End


//浮动导航	
$('#navUl li:eq(0)').addClass('current');
$('#navUl').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: ':not(.external)',
	easing: 'swing',
	begin: function() {
	},
	end: function() {
	},
	scrollChange: function($currentListItem) {
	}
});


//弹窗弹层提示	
layer.config({
    extend: 'http://zt.emao.com/common/js/layer.1.9.3.ext.js'
});  

$('#layer-1').on('click', function(){
	//提示
	layer.tips('目前此车的已知消息有：吉利已经把“回”字中网设计变成了其家族设计语言，未来或将运用于大部分车型。', '#layer-1', {
		tips: [1, '#3595CC'],
		closeBtn: 1,
		time: 5000
	});
});


$('#layer-2').on('click', function(){
	//询问框
	layer.open({
		area: ['500px'],
		title: '趣味小调查',
		content: '开别人的X1，走陆巡的路，凭什么？'
		,btn: ['确定', '取消', '大轮圈','四驱系统']
		,yes: function(index, layero){
		}
		,cancel: function(index){
		}
		,btn3: function(index, layero){
			layer.alert('你的选择适逢雨季行驶，看来你是一位喜欢浪漫的赛手。', {
			title: '大轮圈', 
			shift: 4 
			});
		}
		,btn4: function(index, layero){
			layer.alert('你认为四驱系统尤为重要，看来你是一位充满激情的赛车手。', {
			title: '四驱系统', 
			shift: 4 
			});
		}
		,success: function(layero, index){
			$('.layui-layer-btn0,.layui-layer-btn1').hide();
		}
	});	
});

$('#layer-3').on('click', function(){
	//选项卡
	layer.tab({
		area: ['500px', '250px'],
		shadeClose: true,
		tab: [{
			title: '雷克萨斯', 
			content: '8月18日，雷克萨斯官方正式宣布，新款雷克萨斯ES正式上市。此次共推2.0L、2.5L及2.5L混动三种排量，分别为ES200/ES250/ES300h，共7款车型，售价区间为29.80-49.80万。<a target="_blank" href="http://news.emao.com/news/201508/12434.html">[详细]</a>'
		}, {
			title: '吉利', 
			content: '近期一直成为话题的吉利新款SUV车型（代号NL-3），目前吉利官方发布了一组外观设计效果图，采用了与博瑞相同的“回”字外观设计，目前该车已经开始路试，预计最快年内就能正式亮相。'
		}, {
			title: '东风日产', 
			content: '作为七座中型SUV的代表车型，全新汉兰达3月份上市以来就赚足了眼球，同时也有着相当好的市场表现。7月单月销量达到了8014台。而作为汉兰达的竞争对手之一，日产楼兰也在8月正式上市，相比于老款车型，更接地气的外观以及更加亲民的售价让逐渐边缘化的楼兰又一次来到人们的视野中，全新的楼兰究竟如何呢？能否蚕食一些汉兰达的市场份额呢？'
		}]
	});
});






})(jQuery)


