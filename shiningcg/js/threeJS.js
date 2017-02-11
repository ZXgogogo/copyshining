document.write("<script type='text/javascript' src='js/JQuery-3.1.1.min.js'></script>");
//列数数组，存储每列的高度
		var colArr;
		//比例变量
		var ratio;

		function imgClick(ev) {
			ev.stopPropagation()
		
			//处理响应式，点击背景滑动，滚动条等问题
			$("body").css("overflow", "visible")

			//	jQuery转化为DOM对象
			$(".masking").css("display", "block");

			//当只有一个参数时,表示获得该属性,当有两个参数时,第一个参数表示取属性,第二个表示设值
			var index = $("a").attr("index")
			var url = 'imgbig/' + index + ".jpg";
			
			var img = new Image()
			img.src = url;
			img.onload = function() {
				var ableW = $(window).width() * 0.8;
				var ableH = $(window).height() * 0.8;
				var ableS = ableW / ableH;
				var imgW = img.width;
				var imgH = img.height;
				var imgS = imgW / imgH;
				//设置宽高
				if(ableS >= imgS) {
					$(".box").height(ableH)
						//var w=ableH*imgS;
					$(".box").width(ableH * imgS)
				} else {
					$(".box").width(ableW)
					$(".box").height(ableW / imgS)
				}

				$(".box").append($(img))

				//设置方位
				var l = ($(window).innerWidth() - $(".box").outerWidth()) / 2;
				var t = ($(window).innerHeight() - $(".box").outerHeight()) / 2;
				$(".box").css({
					left: l,
					top: t
				})

				$(".box")[0].style.border = "10px solid white";
				$(".box")[0].style.position = "absolute";
			}

		}

		$(document).click(function() {
			$(".box").empty();
			$(".box").attr("style", " ");
			$("body").css("overflow", "auto");
			$(".masking").css("display", "none");
			console.log("22")
		})

		//		第一步呦
		function createLi(url, index) {
			//创建DOM结构中出现的元素节点
			//创建li元素就是这样创建的
			var li = $("<li class='li'></li>")
			var a = $("<a href='javascript:void(0)'></a>")
			var img = new Image();
			var div = $("<div></div>")
			var smalldiv=$("<div><span><img src='imgsmall/fangda.png'></span></div>")
			smalldiv.css("display","none")
			div.append(smalldiv)
//			给div添加一个类
			div.addClass("cover")
		
			//形成DOM树
			a.append($(img));
			a.append(div)
			a.appendTo(li)
			//给a添加点击方法(设置一个属性可以连接大小图)
			a.attr("index", index)
			a.click(imgClick)
			li.hover(
				function() {
					smalldiv.css("display","block").css("width","10%").css("height","10%").css("position","absolute").css({"top":"45%","left":"45%"});
					div.css("background-color","rgba(0, 0, 0, 0.3)");
				},
				function() {
					smalldiv.css("display","none");
					div.css("background-color","transparent");
				}
			);
			//获得图片资源并请求
			img.src = url;
			img.draggable = false;
			img.onload = function() {
				img.onload = null;
				//				获取的图片请求得到的原宽高
				//				console.log(this.width,this.height)
				//				等比缩放后的盒子的高
				var maxH = $('.wrapp').width() * ratio / this.width * this.height;
				//将li添加到DOM中，便可以拿到等比缩放后的盒子的高，就是等比缩放的高
				addLi(li);
				var minH = $(img).height()
					//				设置相关联元素盒子的高度
					//				a.height(minH);
					//				li.height(minH);                                                       

			}
		}

		function test() {
			console.log("javascript:test()")
		}
		//将li添加到DOM中
		function addLi(li) {
			//	设置li的相关参数,
			var index = minIndex()
			var l = $(".wrapp").width() * ratio * index;
			var t = colArr[index];
			li.css({
				left: l,
				top: t
			});
			//得到的参数li是JQ对象
			li.appendTo($(".wrap"))
				//更新数组(可视高度)
			colArr[index] += li.outerHeight();
		}
		//		获得最短列的索引
		function minIndex() {
			var index = 0;
			for(var i = 1; i < colArr.length; i++) {
				if(colArr[index] > colArr[i]) {
					index = i;
				}
			}
			return index;
		}
		//屏幕尺寸发生变化会不断触发
		$(window).resize(function() {
			//响应式布局判断
			responseJudge();
			$("body").css("overflow", "auto")
			$(".masking").css("display", "none");
			//取出所有布局好的li
			var lis = $('.li');
			//遍历更新布局
			for(var i = 0; i < lis.length; i++) {
				console.log(i)
				var index = minIndex()
				var l = $(".wrapp").width() * ratio * index;
				var t = colArr[index];
				lis.eq(i).css({
					left: l,
					top: t
				});
				//更新数组(可视高度)
				alert(lis.eq(i))
				colArr[index] += lis.eq(i).outerHeight();
			}
		})

		//		createLi("imgsmall/1.jpg");
		//		createLi("imgsmall/2.jpg");
		//		DOM加载完毕执行
		$(function() {
				responseJudge()
					//				$(".wrap").width($(window).innerWidth()*0.98);
				for(var i = 1; i <= 39; i++) {
					//传i是为了让小图与大图建立某种关系
					var url = "imgsmall/" + i + ".jpg";
					createLi(url, i);
				}
			})
			//响应式布局判断
		function responseJudge() {
			var width = $(window).innerWidth();
			if(width > 860) {
				ratio = 1 / 4;
				colArr = [0, 0, 0, 0];
			} else if(width > 480) {
				ratio = 1 / 3;
				colArr = [0, 0, 0];
			} else {
				ratio = 1 / 2;
				colArr = [0, 0];
			}
		}