




//验证协议是否选中
$("#xieyi").click(function(event) {
	if($("#xieyi").is(":checked")){
		$("#subzhuce1").removeAttr("disabled").css("background-color","#2795dc");
		
	}else{
		$("#subzhuce1").attr("disabled","disabled").css("background-color","#ccc");
	}
});


var userlogId;
//验证用户名是否注册
function yzname(val) {
	var yhm = $("#logName").val();
	if (yhm.length >= 4) {
		$.ajax({
			type: "get",
			url: "logon!searchName.action", //url, //
			data: { "logName": yhm },
			dataType: "text",
			success: function(ret) {
				var data = eval(ret);
				if (data == '1') {
					alert("该用户名已注册，请更换！");
					$("#logName").val("");
				}
			},
			error: function(ret, ret1, ret2) {
				debugger;
			}
		});
	}
	if (val == '2') {
		registerSubmit();
	};
};



//验证企业是否注册
function qyname() {
	var gsnm = $("#qiye_name").val();
	if(gsnm.length != 0 ){
		$.ajax({
			type: "get",
			url: "qiye!searchName.action", //url, //
			data: { "qiyeName":gsnm},
			dataType: "text",
			success: function(ret) {
				var data = eval(ret);
				if (data == '1') {
					alert("该企业为已注册企业，不能继续注册！")
					$("#qiye_name").val("");
				}
			},
			error: function(ret, ret1, ret2) {
				debugger;
			}
		});
	}
}


//验证企业审核状态



//注册账号
function registerSubmit() {
	var longName = $("#logName").val();
	var logonPwd = $("#logPwd").valu();	
	var checkpwdObj = $("#checkpwd").va();
	
	$.ajax({
		type: "get",
		url: "logon!add.action", //url, //
		data: { "logName": longName, "logPwd": logonPwd },
		dataType: "text",
		success: function(ret) {
			var data = eval(ret);
			if (data == '1') {
				//$("#tab1").click();
				alert("恭喜您！注册成功。请登录");
				$("#logName").val("");
				$("#logPwd").val("");
				$("#checkpwd").val("");
			}
		},
		error: function(ret, ret1, ret2) {
			debugger;
		}
	});	
}


//登陆账号
function dlSubmit() {
	var longName = $("#logName_d").val();
	var logonPwd = $("#logPwd_d").val();
	var inputCode = $("#imageCode").val();
	
	$.ajax({
		type: "get",
		url: "logon!logon.action", //url, //
		data: { "logName": longName, "logPwd": logonPwd },
		dataType: "text",
		success: function(ret) {
			data = eval("("+ret+")");
			if (data == 1) {
				// $("#tab1").click();
				alert("用户名或密码不正确，请重新输入！")
				$("#logName").val("");
				$("#logPwd").val("");
				$("#imageCode").val("");
				createCode();
			} else{
				loginsuccess();
				//隐藏登陆框
				$(".nor").removeClass('md-show');			
			}
		},
		error: function(ret, ret1, ret2) {
			debugger;
		}
	});
}

function setCookie(value) {
alert(value);
	
}

//验证码
var code; //在全局 定义验证码   
function createCode() {
	code = "";
	var codeLength = 5; //验证码的长度   
	var checkCode = document.getElementById("checkCode");
	var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的   

	for (var i = 0; i < codeLength; i++) {
		var charIndex = Math.floor(Math.random() * 36);
		code += selectChar[charIndex];
	}
	//alert(code);
	if (checkCode) {
		checkCode.className = "code";
		checkCode.value = code;
	}
	 loginsuccess();
}

























//valadate

$(function() {

	$.validator.messages = {
		required: '输入不能为空.'
	}

//登陆
	$("#subdeng").validate({
		errorPlacement: function(error, element) {
			// Append error within linked label
			$(element).closest("p").append(error);
		},
		errorElement: "span",
		rules: {
			logName: {
				required: true
			},
			logPwd: {
				required: true
			},
			imageCode: {
				required: true,
				equalTo:"#checkCode"
			},
			agree: "required"
		},

		messages: {
			logName: {
				required: "账号不能为空！"
			},
			logPwd: {
				required: "请输入密码！"
			},
			imageCode: {
				required: "请输入验证码！",
				equalTo:"验证码输入错误！"
			},
		},
		submitHandler: function(form) {
			dlSubmit();
		}
	});







//注册
	$("#subzhuce").validate({
		errorPlacement: function(error, element) {
			// Append error within linked label
			$(element).closest("p").append(error);
		},
		errorElement: "span",
		rules: {
			logName: {
				required: true,
				rangelength: [4, 15]
			},
			logPwd: {
				required: true,
				rangelength: [6, 20]
			},
			checkpwd: {
				required: true,
				rangelength: [6, 20],
				equalTo: "#logPwd"
			},
			agree: "required"
		},

		messages: {
			logName: {
				required: "账号不能为空！",
				rangelength: "账号必须在4-15位之间！"
			},
			logPwd: {
				required: "请输入密码！",
				rangelength: "密码必须在6-20位之间！"
			},
			checkpwd: {
				required: "请再次输入密码！",
				rangelength: "密码必须在6-20位之间！",
				equalTo: "两次密码输入不一致！"
			},
		},
		submitHandler: function(form) {
			registerSubmit();
		}
	});





//企业认证
	$("#qyform").validate({
		errorPlacement: function(error, element) {
			// Append error within linked label
			$(element).closest("tr").find(".td_error").append(error);
		},
		errorElement: "span",
		rules: {
			tm: {
				tm: true
			},
			file: {
				required: true
			},
			agree: "required"
		},

		messages: {
			tm: {
				tm: "格式错误"
			},
			file: {
				required: "请选择文件"
			},
		},
		submitHandler: function(form) {  
			var qiyeName = $("#qiye_name").val(),
				lxrName = $("#lxr_name").val(),
				telephone = $("#telephone").val(),
				email = $("#email").val(),
				websiteAdd = $("#website_add").val(),
				faren = $("#faren").val(),
				zzImg = $("#zz_img").val();   
			$.ajax({
				type:"get",
				url:"qiye!add.action",
				data:{
					"qiyeName":qiyeName,
					"lxrName":lxrName,
					"telephone":telephone,
					"email":email,
					"websiteAdd":websiteAdd,
					"faren":faren,
					"zzImg":zzImg,
					"userId":userlogId
				},
				success:function(data){
					var data = eval(data);
					alert("提交成功");
					sheheimg(2)
				},
				error:function(){
					alert("未提交")
				}
			});     
		}  
	});


//反馈
	$("#fkform").validate({
		rules: {
			tm: {
				tm: true
			},
			files: {
				required: true
			},
			agree: "required"
		},

		messages: {
			tm: {
				tm: "格式错误"
			},
			files: {
				required: "请选择文件"
			},
		},
		debug: true
	});



//联系我们
	$("#lxform").validate({
		errorPlacement: function(error, element) {
			// Append error within linked label
			$(element)
			.closest("tr")
			.find(".td_error")
			.append(error);
		},
		errorElement: "span",
		rules: {
			tm: {
				tm: true
			},
			code: {
				code: true
			},
			agree: "required"
		},

		messages: {
			tm: {
				tm: "格式错误"
			},
			code: {
				code: "验证码错误"
			},
		},

		debug: true
	});
































	//邮箱或手机验证规则  
	// jQuery.validator.addMethod("users", function (value, element) {
	//     var users = /^[a-z0-9._%-]+@([a-z0-9-]+\.)+[a-z]{2,4}$|^1[3|4|5|7|8]\d{9}$/;
	//   return this.optional(element) || (users.test(value));
	// }, "格式不对");

	//字母和数字的密码
	// jQuery.validator.addMethod("password",function(value,element){
	// 		var password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
	// 		return this.optional(element) || (password.test(value));
	// },"密码格式如：abc123");


	//电话或手机验证规则  
	jQuery.validator.addMethod("tm", function(value, element) {
		var tm = /(^1[3|4|5|7|8]\d{9}$)|(^\d{3,4}-\d{7,8}$)|(^\d{7,8}$)|(^\d{3,4}-\d{7,8}-\d{1,4}$)|(^\d{7,8}-\d{1,4}$)/;
		return this.optional(element) || (tm.test(value));
	}, "格式不对");

})