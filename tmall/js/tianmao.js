$(function(){
	
	//头部搜索栏
	var top=$(".topbar")[0]
	var flag1=true;
	var flag2=true;

	var imgs=$("img");

	var aa=document.documentElement.scrollTop?document.documentElement:document.body

	for (var i = 0; i < imgs.length; i++){
		if (getPosition(imgs[i]).y<offsetWindow().height+aa.scrollTop){
			imgs[i].src=imgs[i].getAttribute("src-data");
		};
	};

	window.onscroll=function () {
		aa=document.documentElement.scrollTop?document.documentElement:document.body			
		if (aa.scrollTop>885) {
			if (flag1) {
				flag1=false;
				animate(top,{top:0},function(){
					flag1=true;flag2=true;
				})
			};
		}else if(aa.scrollTop<885){
			if (flag2) {
				flag2=false;
				animate(top,{top:-50},function(){
				flag1=true;flag2=true;
			})
			};
		}

		for (var i = 0; i < imgs.length; i++){
			if (aa.scrollTop>(getPosition(imgs[i]).y-offsetWindow().height)){
				imgs[i].src=imgs[i].getAttribute("src-data")
			};
		};
	}

	//定位动画
	var dwty=$(".dwty");
	var dwycz=$(".dwycz")
	var dwty1=$(".dwty1")[0];
	var xiaoerwei=$("#xiaoerwei")

	var timeOut1;

	for (var l = 0; l < dwty.length; l++) {
		dwty[l].index=l;

		hover(dwty[l],function () {
			clearTimeout(timeOut1)
			var that=this
			dwty[this.index].style.background="#C40000"
			timeOut1=setTimeout(function(){
				animate(dwycz[that.index],{opacity:1,right:35},400,Tween.Linear)
			},300)	
		},function () {
			clearTimeout(timeOut1)
			dwty[this.index].style.background="#000"
			animate(dwycz[this.index],{opacity:0,right:60},300,Tween.Linear)
		})
		
	}

	hover(dwty1,function () {
		clearTimeout(timeOut1)
		timeOut1=setTimeout(function(){
			dwty1.style.background="#C40000"
			xiaoerwei.style.display="block"
		},300)
	},function () {
		clearTimeout(timeOut1)
		dwty1.style.background="#000"
		xiaoerwei.style.display="none"
	})

	//返回顶部
	var fhdb=$("img",$(".dwty")[8])[0]
	fhdb.onclick=function () {
		var aa=document.documentElement.scrollTop?document.documentElement:document.body
		animate(aa,{scrollTop:0})
	}


	//hearder right
	var wdtbyc1=$(".wdtbyc1")[0]
	var wdtbyc=$(".wdtbyc")[0]
	var bianred=$(".bian-red")[2]
	wdtbyc1.onmouseover=function(){
		wdtbyc.style.display="block"
	}
	wdtbyc1.onmouseout=function(){
		wdtbyc.style.display="none"
	}
	wdtbyc.onmouseover=function(){
		bianred.style.cssText="color:#C40000;background:#fff;"
	}
	wdtbyc.onmouseout=function(){
		bianred.style.cssText="color:#fff;"
	}
	bianred.onmouseover=function(){
		bianred.style.cssText="color:#C40000;background:#fff;"
	}
	bianred.onmouseout=function(){
		bianred.style.cssText="color:#fff;"
	}

	var scj1=$(".scj1")[0]
	var scj=$(".scj")[0]
	var bianred1=$(".bian-red")[1]
	scj1.onmouseover=function(){
		scj.style.display="block"
	}
	scj1.onmouseout=function(){
		scj.style.display="none"
	}
	scj.onmouseover=function(){
		bianred1.style.cssText="color:#C40000;background:#fff;"
	}
	scj.onmouseout=function(){
		bianred1.style.cssText="color:#fff;"
	}
	bianred1.onmouseover=function(){
		bianred1.style.cssText="color:#C40000;background:#fff;"
	}
	bianred1.onmouseout=function(){
		bianred1.style.cssText="color:#fff;"
	}

	var sjberwei=$(".sjberwei")[0]
	var sjxew=$(".sjxew")[0]
	var bianred2=$(".bian-yellow")[1]
	sjberwei.onmouseover=function(){
		sjxew.style.display="block"
	}
	sjberwei.onmouseout=function(){
		sjxew.style.display="none"
	}

	var sjzc=$(".sjzc")[0]
	var sjzcycbox=$(".sjzcycbox")[0]
	var bianred3=$(".bian-red")[0]
	sjzc.onmouseover=function(){
		sjzcycbox.style.display="block"
	}
	sjzc.onmouseout=function(){
		sjzcycbox.style.display="none"
	}
	sjzcycbox.onmouseover=function(){
		bianred3.style.cssText="color:#C40000;background:#fff;"
	}
	sjzcycbox.onmouseout=function(){
		bianred3.style.cssText="color:#fff;"
	}
	bianred3.onmouseover=function(){
		bianred3.style.cssText="color:#C40000;background:#fff;"
	}
	bianred3.onmouseout=function(){
		bianred3.style.cssText="color:#fff;"
	}

	var wzdhyc=$(".wzdhyc")[0];
	var bianred4=$(".bian-red2")[0];
	var wzdhyc1=$(".wzdhyc1")[0]
	wzdhyc.onmouseover=function(){
		wzdhyc1.style.display="block"
	}
	wzdhyc.onmouseout=function(){
		wzdhyc1.style.display="none"
	}
	wzdhyc1.onmouseover=function(){
		bianred4.style.cssText="color:#C40000;background:#fff;"
	}
	wzdhyc1.onmouseout=function(){
		bianred4.style.cssText="color:#fff;"
	}
	bianred4.onmouseover=function(){
		bianred4.style.cssText="color:#C40000;background:#fff;"
	}
	bianred4.onmouseout=function(){
		bianred4.style.cssText="color:#fff;"
	}

	//search框
	var input=$(".search")[0];
	input.onfocus=function () {
		if (input.value=="功夫熊猫卖萌贺岁") {
			input.value=""
		}
	}
	input.onblur=function () {
		if (input.value=="") {
			input.value="功夫熊猫卖萌贺岁"
		};
	}


	//banner
	var lbbox=$(".lbtpbox1")[0];
	var lbimg=$("li",lbbox)

	var baryuan=$(".bar-yuan");
	var bgbancols=$(".bannerbox")[0];

	var yuanbox=$(".yuandian")
	var bgcolors=["#E92A53","#E8E8E8","#BB1019","#E8E8E8","#E8E8E8","#E8E8E8"]

	bgbancols.style.background=bgcolors[0];
	baryuan[0].style.background="#fff"

	var timeOut;

	for (var i = 0; i < baryuan.length; i++) {
		baryuan[i].index=i;
		
		baryuan[i].onmouseover=function () {

			clearInterval(t)
			num=this.index;
			var thisobj=this
			clearTimeout(timeOut)

			timeOut=setTimeout(function(){
				for (var j = 0; j < lbimg.length; j++) {
					lbimg[j].style.display="none"
					baryuan[j].style.background="#000"
				};
				lbimg[thisobj.index].style.display="block"
				thisobj.style.background="#fff"
				bgbancols.style.background=bgcolors[thisobj.index];
			},300)
		}

		baryuan[i].onmouseout=function(){
			t=setInterval(lbfun,3000)
		}

		lbimg[i].onmouseover=function (){
			clearInterval(t)
		}
		lbimg[i].onmouseout=function(){
			t=setInterval(lbfun,3000)
		}
	};

	var num=0;
	var t=setInterval(lbfun,3000)
	function lbfun () {
		num++;
		if (num==lbimg.length) {
			num=0;
		}
		for (var i = 0; i < lbimg.length; i++) {
			lbimg[i].style.display="none"
			baryuan[i].style.background="#000"
		};
		lbimg[num].style.display="block"
		baryuan[num].style.background="#fff"
		bgbancols.style.background=bgcolors[num];
	}


	//热门品牌
	var rmppsbox=$(".rmppsbox");
	var heart=$(".taoxin");

	for (var i = 0; i < rmppsbox.length; i++) {
		rmppsbox[i].index=i;

		rmppsbox[i].onmouseover=function(){
			heart[this.index].style.display="block"
		}
		rmppsbox[i].onmouseout=function(){
			heart[this.index].style.display="none"
		}
	}

	var rmpptitle = $(".rmpp1");
	var rmpplog = $(".rmppchange");

	rmpplog[0].style.display="block"
	rmpptitle[0].style.color="#000"
	rmpptitle[0].style.fontWeight="bold"
	rmpptitle[0].style.borderBottom="2px solid #000"

	for (var i = 0; i < rmpptitle.length; i++) {
		rmpptitle[i].index=i;
		rmpptitle[i].onclick=function () {

			for (var j = 0; j < rmpptitle.length; j++) {
				rmpplog[j].style.display="none"
				rmpptitle[j].style.color="#666"
				rmpptitle[j].style.fontWeight="normal"
				rmpptitle[j].style.borderBottom="none"
			};

			rmpplog[this.index].style.display="block"
			this.style.color="#000"
			this.style.fontWeight="bold"
			this.style.borderBottom="2px solid #000"
		}
	}


	//banner-leftsidebar

	var leftsidebarli=$(".leftsidebar-li");
	var sidebaryc=$(".sidebaryc");

	for (var i=0; i<leftsidebarli.length; i++){
		leftsidebarli[i].index=i;

		leftsidebarli[i].onmouseover=function() {
			for (var j = 0; j < leftsidebarli.length; j++) {
				sidebaryc[j].style.display="none"
			};
			sidebaryc[this.index].style.display="block"

			animate(sidebaryc[this.index],{left:190,opacity:1},60,Tween.Linear)
		}

		leftsidebarli[i].onmouseout=function() {
			var obj=sidebaryc[this.index]
			animate(obj,{left:175,opacity:0.8},60,function () {
				obj.style.display="none"
			})
		}
	};

})
