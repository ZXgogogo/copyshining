var j_nativ_list = $('.j_nativ_list');
		var buttonnav = $('#buttonnav');
		if ($(window).width()<720) {
				
				buttonnav.on('touchstart', function() {
					j_nativ_list.slideToggle("normal");
				});
		}
$(
	function() {
		var ie8=window.navigator.userAgent.indexOf("MSIE 8");
		if (ie8!=-1){

			$(".logo_wrap a").css({
				"padding-top":18
			});
		}
//		var j_nativ_list = $('.j_nativ_list');

//		var buttonnav = $('#buttonnav');

//		if ($(window).width()<720) {

//				

//				buttonnav.on('touchstart', function() {

//					j_nativ_list.slideToggle("normal");

//				});

//		}
		function browserRedirect() {

			var sUserAgent = navigator.userAgent.toLowerCase();

			var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";

			var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";

			var bIsMidp = sUserAgent.match(/midp/i) == "midp";

			var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";

			var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";

			var bIsAndroid = sUserAgent.match(/android/i) == "android";

			var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";

			var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

			if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {

				//手机列表
//				var j_nativ_list = $('.j_nativ_list');
//				var buttonnav = $('#buttonnav');
//				buttonnav.on('touchstart', function() {
//					j_nativ_list.slideToggle("normal");
//				});

			} else {

				var nav = $('.j_nav');
				//复制导航列表，用表正则达式去除a标签,插入到导航列表前面（未实现）
				//	var text=$(".jupeng_nativ_list").clone();
				//	$(".jupeng_nativ_list").before($(".jupeng_nativ_list").clone());
				//渐显绿色块
				nav.children().find('.j_nativ_list').css('height', '100%');
				nav.children().children().css('height', '100%');
				
				var nav_hover = nav.find('ul').eq(1).children();
				//	console.log(nav_hover);
				nav.children().eq(1).children().css({
					'height': '100%'
				});

			}
		}
		browserRedirect();
	}
);