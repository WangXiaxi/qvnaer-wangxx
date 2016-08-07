$.fn.extend({
	top : function(){
		$(this).find("a").click(function(){
			$(this).addClass("add").removeClass("addHover").siblings("a").removeClass("add").addClass("addHover");
		});
	},
	img : function(){
		$(this).mouseenter(function(){
			$(this).find("img.img").css("transform" ,"scale(1.02)");
			$(this).find(".pr-btn").css("color","#fff06e").css("background-color","#e61818");
		}).mouseleave(function(){
			$(this).find("img.img").css("transform" ,"scale(1)");
			$(this).find(".pr-btn").css("color","#fff").css("background-color","#FF3939");
		});
	},
	offSet :  function(){
		var NavChoSco = function(eq,_this){
				$(_this).find(".Nav-cho").find("a:nth-of-type("+eq+")").addClass("color").siblings().removeClass("color");
			};
		$(document).scroll(function(){
			var $scTop =  $(window).scrollTop();
			if ($scTop >= 480){
				$(".Nav").addClass("fixed");
			}else if($scTop < 480){
				$(".Nav").removeClass("fixed");
			}
			$(".oneMian").getCur(".oneMian",837,2043,1409);
			$(".twoMian").getCur(".twoMian",2325,3515,2897);
			$(".threeMian").getCur(".threeMian",3818,5305,4385);
			$(".fourMian").getCur(".fourMian",5587,7365,6159);
			$(".sixMian").getCursix(".sixMian",8501,11423,9359,10217);
			if ($scTop>=641 && $scTop < 2129){
				NavChoSco(1,this);
			}else if ($scTop>=2129 && $scTop < 3617){
				NavChoSco(2,this);
			}else if($scTop>=3617 && $scTop < 5391){
				NavChoSco(3,this);
			}else if($scTop>=5391 && $scTop < 7451){
				NavChoSco(4,this);
			}else if($scTop>=7451 && $scTop < 8305){
				NavChoSco(5,this);
			}else if($scTop>=8305 ){
				NavChoSco(6,this);
			}
		});	
	},
	getCur : function(sele,start,end,curstart){
		var $scTop =  $(window).scrollTop();
		if($scTop >= start&&$scTop < end){
			$(sele + " .free-go").addClass("fixed");
			if($scTop < curstart){
				$(sele + " .free-left").addClass("cur").siblings("a.free-right").removeClass("cur");

			}else{
				$(sele + " .free-right").addClass("cur").siblings("a.free-left").removeClass("cur");
			}
			}else if($scTop < start||$scTop > end){
				$(sele + " .free-go").removeClass("fixed");
				$(sele).find("a").removeClass("cur");
		}
		$(sele + " .free-left").click(function(){
			$(window).scrollTop(start);
		});
		$(sele + " .free-right").click(function(){
			$(window).scrollTop(curstart);
		});
	},
	getCursix : function(sele,start,end,curstart,cur2){
		var $scTop =  $(window).scrollTop();
		if($scTop >= start&&$scTop < end){
			$(sele + " .free-go").addClass("fixed");
			if($scTop < curstart){
				$(sele + " .free-left").addClass("cur").siblings("a").removeClass("cur");
				}else if($scTop >= curstart&&$scTop < cur2){
					$(sele + " .free-cent").addClass("cur").siblings("a").removeClass("cur");
				}else{
					$(sele + " .free-right").addClass("cur").siblings("a").removeClass("cur");
				}
			}else if($scTop < start||$scTop > end){
				$(sele + " .free-go").removeClass("fixed");
		}
		$(sele + " .free-left").click(function(){
			$(window).scrollTop(start);
		});
		$(sele + " .free-cent").click(function(){
			$(window).scrollTop(curstart);
		});
		$(sele + " .free-right").click(function(){
			$(window).scrollTop(cur2);
		});
	},
	NaClick : function(){
		var NavCho = [641,2129,3617,5391,7451,8305];
		
		$(this).find(".Nav-cho").find("a").click(function(){
			var index = $(this).index();
			$(window).scrollTop(NavCho[index]);
		});	
	},
	addCode : function(){
		$(this).find("li a").append(
			"<div class= \"code\">"+
				"<img class = \"codeImg\" src = \"https://img1.qunarzz.com/vc/de/83/8e/45f4b135ebcafe4696df8e1411.png_92.png\" />"+
				"<span class=\"codetxt\">扫码购买，可享会员折扣</span>"+
			"</div>"
			);
	}
});
$(".top").top();
$(".bigA").img();
$(".Nav").offSet();
$(".Nav").NaClick();
$(".fourMian").addCode();
$(".fiveMian").addCode();
$(".sixMian").addCode();
