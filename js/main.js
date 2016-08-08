$.fn.extend({
	mainInner :　function(data){
		var data = data.data;
		var data1,data2,data3,data4,data5,data6;
		data1 = data.slice(0,16);
		data2 = data.slice(16,32);
		data3 = data.slice(32,52);
		data4 = data.slice(52,76);
		data5 = data.slice(76,84);
		data6 = data.slice(84,124);
		$(".oneMian").createDOM(data1.length);
		$(".oneMian").getData(data1);
		$(".twoMian").createDOM(data2.length);
		$(".twoMian").getData(data2);
		$(".threeMian").createDOM(data3.length);
		$(".threeMian").getData(data3);
		$(".fourMian").createDOM(data4.length);
		$(".fourMian").getData(data4);
		$(".fiveMian").createDOM(data5.length);
		$(".fiveMian").getData(data5);
		$(".sixMian").createDOM(data6.length);
		$(".sixMian").getData(data6);
	},
	createDOM : function(len){
		for(var i = 0 ;i < len;i ++){
			$(this).find(".bigUl").append(
				"<li class=\"item\">"+
					"<a class=\"bigA\">"+
						"<div class=\"topImg\">"+
							"<img src=\"\" class=\"img\" />"+
								"<div class=\"tag\">"+
									"<div class=\"tag-hd\">立享</div>"+
									"<div class=\"tag-bd\"></div>"+
								"</div>"+
						"</div>"+
						"<div class=\"item-text\">"+
							"<div class=\"tit\"></div>"+
							"<div class=\"desc\">"+	
							"</div>"+
							"<div class=\"price\">"+
								"<i class=\"yen\">¥</i><span class=\"num\">3722</span><span class=\"txt\">起</span>"+
								"<div class=\"del\"></div>"+
								"<div class=\"pr-btn\">抢购</div>"+
							"</div>"+
						"</div>"+
					"</a>"+
				"</li>"
			);
		}
		$(this).find(".bigUl").append("<div class = \"clearfloat\"></div>")
	},
	getData : function(data){
		for(var i = 0 ;i < data.length;i++){
			$(this).find(".item").eq(i).find("a.bigA").attr("href",data[i].href);
			$(this).find(".item").eq(i).find(".img").attr("src",data[i].imgSrc);
			if (data[i].cut == "") {
				data[i].cut = 10;
			}
			$(this).find(".item").eq(i).find(".tag-bd").text(data[i].cut + "折");
			$(this).find(".item").eq(i).find(".tit").text(data[i].title);
			$(this).find(".item").eq(i).find(".num").text(data[i].price);
			$(this).find(".item").eq(i).find(".del").text("¥" + data[i].oldPrice);
			$(this).find(".item").eq(i).find(".desc").text(data[i].description);
		}
	}
});
$(".All").mainInner({
	data:obj.data
});