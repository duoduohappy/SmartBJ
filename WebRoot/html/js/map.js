////Right Sliding menu

head.js("js/slidebars/slidebars.min.js", "js/jquery.easing.min.js", function() {

	$(document).ready(function() {
		var mySlidebars = new $.slidebars();

		$('.toggle-left').on('click', function() {
			// mySlidebars.toggle('right');
		});
		$('.toggle-right').on('click', function() {
			// mySlidebars.toggle('left');
		});
	});
});

//PAGE LOADER
head.js("js/pace/pace.js", function() {

	paceOptions = {
		ajax: false, // disabled
		document: false, // disabled
		eventLag: false, // disabled
		elements: {
			selectors: ['.my-page']
		}
	};

});


//-------------------------------------------------------------

$(document).ready(function() {
	$(".ghty").click(function() {
		$(this).animate({
			width: '350px',
			height: '350px'
		}, 500, function() {
			$(".checkboxe").animate({
				bottom: "50px"
			}, 3000);
			$("#waterCanvas").show();
		});
		$(".msg_block").animate({
			width: '340px',
			height: '340px'
		}, 500);
		$("#pageflip").css({
			"width": "350px",
			"height": "350px"
		});
		$('.close2').delay(500).fadeIn(1500);
		$("#drop1").show(1000);

	});
	$(".close2").click(function() {
		// $(".checkboxe").fadeOut(500,function(){
		//     $('.ghty').animate({ width: '50px', height: '50px' }, 500);
		//     $(".msg_block").animate({ width: '49px', height: '49px' }, 500);
		// });
		$(".checkboxe").animate({
			bottom: "-300px"
		}, 500, function() {
			$('.ghty').animate({
				width: '50px',
				height: '50px'
			}, 500);
			$(".msg_block").animate({
				width: '49px',
				height: '49px'
			}, 500);
			$("#waterCanvas").hide();
		});
		$("#pageflip").css({
			"width": "50px",
			"height": "50px"
		});
		$(this).hide();
		$("#drop1").hide();
	});

	var ss = $(window).height(),
		ww = $(window).width(),
		cr = 50;
	// if (ww > 767) {
	// 	$(".papere").css("height", ss - cr);
	// } else {
	// 	$(".papere").css("height", ss);
	// }

	$(".papere").css("height", ss);
});
//------------------------------------------------------------- 

$(function() {
	var he = $("nav").height();
	$("#slides").css("top", he + 10);
	//地图top
	// $("#paper-middle").css("top", he);

	$(".logins2").click(function() {
		$("#slides").slideToggle();
	});

	//左侧边栏效果
	// $(".toggle-right").click(function () {
	//     $("html").toggleClass("sb-active sb-active-right");
	//     var w = $("#sb-site").css("transform");
	//     var $chiren = $(this).children('span');
	//     if ($("html").hasClass("sb-active sb-active-right")) {
	//          $chiren.removeClass('fontawesome-circle-arrow-right').addClass('fontawesome-circle-arrow-left');
	//         $("#sb-site").css("transform", "translate(50px)");
	//         $(".sb-slidebar").show(1000);
	//         $(".sb-right").hide();
	//     } else {
	//         $chiren.removeClass('fontawesome-circle-arrow-left').addClass('fontawesome-circle-arrow-right');
	//         $(".yjhy>li").removeClass('k');
	//         $("#category_index>li").removeClass('leftbc');
	//         clearBillboard();
	//         $("#sb-site").css("transform", "translate(0px)");
	//         $(".sb-slidebar").hide(500);
	//     }
	// });
	$(".toggle-right").click(function() {
		$("html").toggleClass("sb-active sb-active-right");
		var w = $("#sb-site").css("transform");
		if ($("html").hasClass("sb-active sb-active-right")) {
			$("#sb-site").css("transform", "translate(50px)");
			$(".sb-slidebar").show(1000);
			$(".sb-right").hide();
			$(".toggle-right").attr("src","img/jt_22.png")
		} else {
			$(".yjhy>li").removeClass('k');
			$("#category_index>li").removeClass('leftbc');
			clearBillboard();
			$(".close_live").hide();
			$("#sb-site").css("transform", "translate(0px)");
			$(".sb-slidebar").hide(500);
			$(".toggle-right").attr("src","img/ss2_06.png")
		}
	});
	//右侧菜单移动效果
	// $(".toggle-left,.retu>span").click(function () {
	//     $("html").toggleClass("sb-active sb-active-right");
	//     var w = $("#sb-site").css("transform");
	//     if ($("html").hasClass("sb-active sb-active-right")) {
	//         $("#sb-site").css("transform", "translate(-360px)");
	//         $(".sb-slidebar").show();
	//         $(".sb-left").hide();
	//         $(".retu").show();
	//     } else {
	//         $("#sb-site").css("transform", "translate(0px)");
	//         $(".sb-slidebar").hide(500);
	//         $(".retu").hide(500);
	//     }
	// });
})

$(function() {
	//登陆注册弹出框
	$(".fontawesome-user").click(function() {
		$(".nor").addClass('md-show');
	})
	$(".close,.hidden-close").click(function() {
		$(".nor").removeClass('md-show');
	})

	//切换效果
	$(".titled>ul>li").click(function() {
		var index = $(this).index();
		$(this).addClass('e').siblings().removeClass('e');
		$(".con").eq(index).show().siblings().hide();
	})

	$("#slides>ul>li").click(function() {
		var index = $(this).index();
		$(this).addClass('ot').siblings().removeClass('ot');
		$(".figge").eq(index).show().siblings(".figge").hide();
	})

	//左侧
	$(".werth").click(function() {
		$("#search_lg,#searchResult").hide();
		clearBillboard();
		var index = $(this).index();
		$(".werth").removeClass('leftbc');
		$(".werth").eq(index).not(".second").addClass('leftbc');
		$(".yjhy>li").removeClass('k');
		$(".yjhy>li").eq(index).addClass('k');
		$(".close_live").show();
		switch (index) {
			case 0:
				cameraimg();
				break;
			case 1:
				createweibo();
				break;
			default:
				break;
		}
	})



	$(".second").hover(function() {
		$("#hot").show();
	}, function() {
		$("#hot").hide();
	});


	//点击logo返回首页
	$(".company-logo").click(function() {
		window.location.href = "index.html";
	})
})

$(document).ready(function() {
	$("#yingxiang,#wer1,#wer2,#wer3,#wer5,#wer6,#wer7,#wer8,#wer9,#wer10").bootstrapSwitch({
		size: "mini",
		state: false //初始化状态为OFF
	});
	$("#tiandi,#biaozhu,#wer4").bootstrapSwitch({
		size: "mini",
		state: true //初始化状态为OFF
	})
	$("#tiandi").on('switchChange.bootstrapSwitch', function(e, state) {
		layerVisble('tianditu', 0);
	});
	$("#biaozhu").on('switchChange.bootstrapSwitch', function(e, state) {
		layerVisble('tianditu', 1);
	});
	$("#yingxiang").on('switchChange.bootstrapSwitch', function(e, state) {
		loadImglayer(state);
	});
	//  $("#wer1").on('switchChange.bootstrapSwitch', function (e, state) {
	//      layerVisble('qx0',0,0,-1);
	//  });
	//  $("#wer2").on('switchChange.bootstrapSwitch', function (e, state) {
	//      layerVisble('qx1',0,1,-1)
	//  });
	//  $("#wer3").on('switchChange.bootstrapSwitch', function (e, state) {
	// layerVisble('qx2',0,2,-1);
	//  });
	//  $("#wer4").on('switchChange.bootstrapSwitch', function (e, state) {
	//       layerVisble('jm0',0,-1,0);
	//  });
	//  $("#wer5").on('switchChange.bootstrapSwitch', function (e, state) {
	//      layerVisble('jm1',0,-1,1);
	//  });
	//  $("#wer6").on('switchChange.bootstrapSwitch', function (e, state) {
	//      layerVisble('jm2',0,-1,2);
	//  });
	//  $("#wer7").on('switchChange.bootstrapSwitch', function (e, state) {
	//      layerVisble('jm3',0,-1,3);
	//  });
	//  $("#wer8").on('switchChange.bootstrapSwitch', function (e, state) {
	//       layerVisble('jm4',0,-1,4);
	//  });
	//  $("#wer9").on('switchChange.bootstrapSwitch', function (e, state) {
	//       layerVisble('jm5',0,-1,5);
	//  });
	//  $("#wer10").on('switchChange.bootstrapSwitch', function (e, state) {
	//      layerVisble('jm6',0,-1,6);
	//  });
})


$(function() {
	//底部效果
	$(".foot ol").click(function() {
		$(this).animate({
			bottom: "0"
		}, 1000);
	})

	//搜索效果
	$(".searchtwo_1").click(function() {
		$(".search_lg").slideToggle();
		if ($("#searchResult").css("display", "block")) {
			$("#searchResult").css("display", "none")
			clearBillboard();
		}
	})

	$("#suggestId").keyup(function() {
		var inputse = $("#suggestId").val();
		if (inputse == "") {
			$(".closes").css("visibility", "hidden");
			$("#searchResult").hide();
			clearBillboard();
		} else {
			$(".closes").css("visibility", "visible");
			tik();
		}
	})

	$("#suggestId").focus(function(){
		$(".place_more").show();
		$("#searchResult").hide();
	})
	// $("#suggestId").blur(function(){
	// 	$(".place_more").delay(1000).hide();
	// })

	function tik() {
		$(".closes").click(function() {
			$("#suggestId").val("");
			$(".closes").css("visibility", "hidden");
			$("#searchResult").hide();
			clearBillboard();
		})
	}

	//导航点击后选中
	$(".searchtwo_1,.logins2,.logins3").click(function() {
		$(this).toggleClass('leftbc');
	})

	//关闭弹窗
	$(".md-close1").click(function() {
		$(".md-effect-1").removeClass('md-show');
	})
	$(".md-close19").click(function() {
		$(".md-effect-19").removeClass('md-show');
	})
	$(".md-close17").click(function() {
		$(".md-effect-17").removeClass('md-show');
	})

	//退出
	$("#loginuser").hover(function() {
		$("exit-user").show();
	}, function() {
		$("exit-user").hide();
	});
	$(".exit-user").click(function() {
		$("#loginuser").hide();
		$("#usert").show();
		delAllCookie();
		$(".left-direction").removeClass('vis-show');
	})

	//更多内容点击背景颜色
	$(".sblack").click(function() {
		$(this).addClass('f').parent().siblings('li').children('.sblack').removeClass('f');
	})

	//获取左侧切换栏的高度
	var live_h = $(window).height() - 80;
	$(".live").height(live_h);

	//live隐藏
	$(".close_live").click(function() {
		$(".yjhy>li").removeClass('k');
		$(this).hide();
		$("#search_lg").show();
	})

	//poi
	$(".maphot").click(function() {
		$(this).toggleClass('leftbc');
		showpoi();
	})

	var modal_17h = $(window).height()-30;
	$("#modal-17").height(modal_17h);

})
function back(){
	$("#viewerin").fadeOut(1000);
	$("#paper-middle").fadeIn();
	$(".direction").show();
	baidumapCallBack();
}




//注册输入框抖动
	$("#subzhuce1").click(function () {
		var zhuce = $("#subzhuce p").eq(0).children('input');
		var zhuce1 = $("#subzhuce p").eq(1).children('input');
		var zhuce2 = $("#subzhuce p").eq(2).children('input');
		if (zhuce.val() == 0) {
			zhuce.addClass('shake');
			zhuce1.removeClass('shake');
			zhuce2.removeClass('shake');
		} else if (zhuce1.val() == 0) {
			zhuce1.addClass('shake');
			zhuce.removeClass('shake');
			zhuce2.removeClass('shake');
		} else if (zhuce2.val() == 0) {
			zhuce2.addClass('shake');
			zhuce.removeClass('shake');
			zhuce1.removeClass('shake');
		} else {
			zhuce.removeClass('shake');
			zhuce2.removeClass('shake');
			zhuce1.removeClass('shake');
		}
	});