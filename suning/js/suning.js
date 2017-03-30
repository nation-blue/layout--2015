

$(function(){

	/*定位*/
	var rentou=$(".rentou")[0];
	var rentouImg=$("#dw1");
	var flaag=true;
	var rentou1=$(".rentou1")[0];


	function lxr () {
		rentou.style.background="#FFAA01";
		rentouImg.style.marginLeft="7px";
	}
	function lxrr () {
		rentou.style.background="";
		rentouImg.style.marginLeft="";
	}

	addEvent(rentou,"mouseover",lxr)
	addEvent(rentou,"mouseout",lxrr)

	addEvent(rentou,"click",function () {
		if (flaag) {
			flaag=false;
			removeEvent(rentou,"mouseover",lxr);
			removeEvent(rentou,"mouseout",lxrr);
			animate(rentou1,{right:35},300);
		}else{
			flaag=true;
			addEvent(rentou,"mouseover",lxr);
			addEvent(rentou,"mouseout",lxrr);
			animate(rentou1,{right:-245},300);
		}
	})

	var codeImg=$("#codeImg");

	function llxr () {
		animate(codeImg,{right:35},300)
	}
	function llxrr () {
		animate(codeImg,{right:-96},300)
	}

	var gouwuk=$(".gouwuk")[0];
	var dw2=$("#dw2");
	var gouwukSpan=$("span",gouwuk)[0];
	var potu1=$(".potu1")[0];

	function gwcpdd1 () {
		gouwuk.style.background="#FFAA01";
		dw2.style.marginLeft="5px";
		gouwukSpan.style.color="#383838";
	}
	function gwcpdd2 () {
		gouwuk.style.background="";
		dw2.style.marginLeft="";
		gouwukSpan.style.color="";
	}

	addEvent(gouwuk,"mouseover",gwcpdd1);
	addEvent(gouwuk,"mouseout",gwcpdd2);

	var flaaag=true;

	addEvent(gouwuk,"click",function () {
		if (flaaag) {
			flaaag=false;
			removeEvent(gouwuk,"mouseover",gwcpdd1);
			removeEvent(gouwuk,"mouseout",gwcpdd2);
			animate(potu1,{right:35},300);
		}else{
			flaaag=true;
			addEvent(gouwuk,"mouseover",gwcpdd1);
			addEvent(gouwuk,"mouseout",gwcpdd2);
			animate(potu1,{right:-245},300);
		}
	})

	var sidebarBottom=$(".sidebar-bottom")[0];
	var sidebarBottomA=$("a",sidebarBottom);

	var sideBB=$(".sideBB");
	var sideBBImg=$("img",sidebarBottom);
	var sideZi=$(".side-zi");
	var sideZiSpan=$("span",sidebarBottom);

	for (var i = 0; i < sidebarBottomA.length; i++) {
		sidebarBottomA[i].index=i;

		if (i!=5) {
			sidebarBottomA[i].onmouseover=function () {
				sideBB[this.index].style.background="#FFAA01";
				sideBBImg[this.index].style.marginLeft="7px";

				sideZi[this.index].style.background="#FFAA01";
				sideZiSpan[this.index].style.color="#383838";
				animate(sideZi[this.index],{left:-72},300);
			}

			sidebarBottomA[i].onmouseout=function () {
				sideBB[this.index].style.background="";
				sideBBImg[this.index].style.marginLeft="";

				sideZi[this.index].style.background="#383838";
				sideZiSpan[this.index].style.color="#FFAA01";

				animate(sideZi[this.index],{left:0},300);
			}
		}else{
			addEvent(sidebarBottomA[5],"mouseover",llxr);
			addEvent(sidebarBottomA[5],"mouseout",llxrr);
		}
	}

	var potuback=$(".potuback")[0];

	sidebarBottomA[1].onclick=function () {
		potuback.style.display="block"
	}

	var guandiao=$(".guandiao")[0];

	guandiao.onclick=function () {
		potuback.style.display="none";
	}

	var gunluntu=$(".gunluntu")[0];
	var guandiao1=$(".guandiao1")[0];

	var flaaaag=true;

	sidebarBottomA[0].onclick=function () {
		animate(gunluntu,{right:35},300)
	}


	guandiao1.onclick=function () {
		animate(gunluntu,{right:-245},300)
	}
	

	/*顶部*/
	var topActiveWrap=$(".top-active-wrap")[0]
	var btn=$(".btn")[0]
	var btnClose=$(".btn-close")[0]
	var btnClose1=$(".btn-close1")[0]

	btnClose.onmouseover=function () {
		btn.style.opacity=0.4;
	}
	btnClose.onmouseout=function () {
		btn.style.opacity=0.2;
	}
	btnClose1.onmouseover=function () {
		btn.style.opacity=0.4;
	}
	btnClose1.onmouseout=function () {
		btn.style.opacity=0.2;
	}

	btnClose.onclick=function () {
		topActiveWrap.style.display="none"
		btnClose.style.display="none"
		btnClose1.style.display="block"
	}
	btnClose1.onclick=function () {		
		topActiveWrap.style.display="block"
		btnClose.style.display="block"
		btnClose1.style.display="none"
	}

	var wangzhandaohang=$(".wangzhandaohang")[0]
	var wangzhandaohangyc=$(".wangzhandaohangyc")[0]
	var wzdhz=$(".wzdhz")[0]

	wangzhandaohang.onmouseover=function () {
		wangzhandaohangyc.style.display="block"
		wzdhz.style.cssText="height: 34px;width: 83px;border: 1px solid #ddd;background:#fff;border-bottom:0;line-height: 34px;"
	}
	wangzhandaohang.onmouseout=function () {
		wangzhandaohangyc.style.display="none"
		wzdhz.style.cssText=""
	}

	var xiaoxi=$(".xiaoxi")[0]
	var xiaoxiyc=$(".xiaoxiyc")[0]
	var xxz=$(".xxz")[0]

	xiaoxi.onmouseover=function () {
		xiaoxiyc.style.display="block"
		xxz.style.cssText="height: 34px;line-height: 34px;width: 58px;border:1px solid #ddd;border-bottom: 0;background: #fff"
	}
	xiaoxi.onmouseout=function () {
		xiaoxiyc.style.display="none"
		xxz.style.cssText=""
	}

	var service=$(".service-handle")[0]
	var khfwz=$(".khfwz")[0]
	var khfwyc=$(".khfwyc")[0]

	service.onmouseover=function () {
		khfwyc.style.display="block"
		khfwz.style.cssText="background:#fff;width:81px;height:35px;border:1px solid #ddd;line-height:34px;border-bottom:0"
	}
	service.onmouseout=function () {
		khfwyc.style.display="none"
		khfwz.style.cssText=""
	}

	var shoujisuning=$(".shoujisuning")[0]
	var sjsnyc=$(".sjsnyc")[0]
	var sjsnz=$(".sjsnz")[0]

	shoujisuning.onmouseover=function () {
		sjsnz.style.cssText="height: 34px;line-height: 34px;width: 99px;border:1px solid #ddd;border-bottom: 0;background: #fff"
		sjsnyc.style.display="block"
	}
	shoujisuning.onmouseout=function () {
		sjsnz.style.cssText=""
		sjsnyc.style.display="none"
	}

	var gouwuche=$(".gouwuche")[0]
	var gouwukuang=$("#gouwukuang")
	var gouwukuang1=$("#gouwukuang1")
	var gwcz=$(".gwcz")[0]

	gouwuche.onmouseover=function () {
		gouwukuang.style.display="none"
		gouwukuang1.style.display="block"
		gwcz.style.cssText="color:#ff6600;text-decoration:underline"
	}
	gouwuche.onmouseout=function () {
		gouwukuang.style.display="block"
		gouwukuang1.style.display="none"
		gwcz.style.cssText=""
	}

	var wodeyigou=$(".wodeyigou")[0]
	var wdygz=$(".wdygz")[0]
  var wdygyc=$(".wdygyc")[0]

  wodeyigou.onmouseover=function () {
  	wdygyc.style.display="block"
  	wdygz.style.cssText="background:#fff;width:61px;height:35px;border:1px solid #ddd;line-height:34px;padding-left:9px;border-bottom:0;"
  }
  wodeyigou.onmouseout=function () {
  	wdygyc.style.display="none"
  	wdygz.style.cssText=""
  }

  var wodedingdan=$(".wodedingdan")[0]
  var wdddz=$(".wdddz")[0]
  var wdddyc=$(".wdddyc")[0]

  wodedingdan.onmouseover=function () {
  	wdddyc.style.display="block"
  	wdddz.style.cssText="background:#fff;width:61px;height:35px;border:1px solid #ddd;line-height:34px;padding-left:9px;border-bottom:0;"
  }
  wodedingdan.onmouseout=function () {
  	wdddyc.style.display="none"
  	wdddz.style.cssText=""
  }

  var searchText=$(".search-text")[0];
  var searchyc=$(".searchyc")[0];

  searchText.onfocus=function () {
		if (searchText.value=="春晚同款智能机器人，火爆开抢") {
			searchText.value=""
		}
		searchyc.style.display="block"
	}
	searchText.onblur=function () {
		if (searchText.value=="") {
			searchText.value="春晚同款智能机器人，火爆开抢"
		}
		searchyc.style.display="none"
	}

	var li=$(".li");
	var liaz=$(".liaz");

	for (var i = 0; i < li.length; i++) {
		li[i].index=i;
		li[i].onmouseover=function () {
			li[this.index].style.borderColor="#ff6600";
			liaz[this.index].style.color="#ff6600";
		}
		li[i].onmouseout=function () {
			li[this.index].style.border=""
			liaz[this.index].style.color=""
		}
	}

/*首屏隐藏的图片*/
	var firstscreenLxr=$(".firstscreen-lxr")[0];
	var firstscreenHidden=$(".firstscreen-hidden")[0];
	var firstscreenHiddenBtn=$(".firstscreen-hidden-btn")[0];
	var index1=$("#index1");
	var ycflag=true;

	firstscreenHiddenBtn.onclick=function () {
		if (ycflag) {
			ycflag=false;
			index1.style.marginLeft=0;
			firstscreenHiddenBtn.style.left="-21px";
			animate(firstscreenLxr,{marginLeft:0},Tween.Linear)
			animate(firstscreenHiddenBtn,{marginLeft:1269},Tween.Linear)
		}else{
			ycflag=true;
			index1.style.marginLeft="";
			firstscreenHiddenBtn.style.left=0;
			animate(firstscreenLxr,{marginLeft:-1296},Tween.Linear)
			animate(firstscreenHiddenBtn,{marginLeft:0},Tween.Linear)
		}
	}




	/*banner 公告*/
	/*banner*/
	var bannerBox=$(".banner-box")[0];
	var bannerPic=$(".banner-pic",bannerBox)[0];
	var bannerPicUl=$("ul",bannerPic);
	var bannerPicLi=$("li",bannerPic);
	var bannerPicImg=$("img",bannerPic);

	/*块*/
	var bannerCtrl=$(".banner-ctrl")[0];
	var bannerCtrlLi=$("li",bannerCtrl);
	var bannerI=$("i",bannerCtrl);

	var bgcolors=["#EC0732","#FFD9B4","#39427D","#FF92C1","#E70000","#FF7100","#DF1318","#F99E8B","#A695FF","#FFEDF3","#82D8D7","#CF3A22","#FFFD4B","#C80000","#FFD97C","#EA8690","#F50F3A","#D8000B","#04103A"];
	var num=0;

	for (var i = 0; i < bannerPicImg.length; i++) {
		bannerPicLi[i].style.opacity=0
	};
	for (var i = 0; i < bannerI.length; i++) {
		bannerI[i].index=i;
	};
	

	bannerPicLi[0].style.opacity=1;
	bannerPicLi[0].style.background=bgcolors[0];

	var fu=bannerI[0].parentNode;
	var grandpa=fu.parentNode;
	grandpa.style.display="block";
	bannerI[0].style.background="#ff6600";
	var xiaokuai=getFirst(grandpa);
	var dakuai=getPrevious(grandpa);
	xiaokuai.style.opacity=0.65;
	dakuai.style.opacity=0.65;


	function lbfun () {
		num++;
		if (num==bannerPicImg.length) {
			num=0;
		}
		bannerPicLi[num].style.background=bgcolors[num];
		if (num!=0) {
			animate(bannerPicLi[num-1],{opacity:0.7},300,function () {
				this.style.opacity=0;
			})
		}else{
			animate(bannerPicLi[bannerPicImg.length-1],{opacity:0.7},300,function () {
				bannerPicLi[bannerPicImg.length-1].style.opacity=0;
			})
		}

		animate(bannerPicLi[num],{opacity:1},300);

		for (var i = 0; i < bannerI.length; i++) {
			var fu=bannerI[i].parentNode;
			var grandpa=fu.parentNode;
			grandpa.style.display="none";
			bannerI[i].style.background="#fff";
			xiaokuai=getFirst(grandpa);
			dakuai=getPrevious(grandpa);
			xiaokuai.style.opacity=0.3;
			dakuai.style.opacity=0.3;
		};

		var fu=bannerI[num].parentNode;
		var grandpa=fu.parentNode;
		grandpa.style.display="block";
		bannerI[num].style.background="#ff6600";
		xiaokuai=getFirst(grandpa);
		dakuai=getPrevious(grandpa);
		xiaokuai.style.opacity=0.65;
		dakuai.style.opacity=0.65;
	}

	var timeOut2=setInterval(lbfun,3000)

	function dlbfun () {
		num--;
		if (num==-1) {
			num=bannerPicLi.length-1;
		}

		bannerPicLi[num].style.background=bgcolors[num];

		if (num!=bannerPicImg.length-1) {
			animate(bannerPicLi[num+1],{opacity:0.7},300,function () {
				this.style.opacity=0;
			})
		}else{
			animate(bannerPicLi[0],{opacity:0.7},300,function () {
				this.style.opacity=0;
			})
		}
		animate(bannerPicLi[num],{opacity:1},300);

		for (var i = 0; i < bannerI.length; i++) {
			var fu=bannerI[i].parentNode;
			var grandpa=fu.parentNode;
			grandpa.style.display="none";
			bannerI[i].style.background="#fff";
			xiaokuai=getFirst(grandpa);
			dakuai=getPrevious(grandpa);
			xiaokuai.style.opacity=0.3;
			dakuai.style.opacity=0.3;
		};

		var fu=bannerI[num].parentNode;
		var grandpa=fu.parentNode;
		grandpa.style.display="block";
		bannerI[num].style.background="#ff6600";
		xiaokuai=getFirst(grandpa);
		dakuai=getPrevious(grandpa);
		xiaokuai.style.opacity=0.65;
		dakuai.style.opacity=0.65;
	}


	var timeOut2;

	for (var i = 0; i < bannerPicLi.length; i++) {
		bannerPicLi[i].index=i;
		bannerPicLi[i].onmouseover=function () {
			clearInterval(timeOut2);
		}
		bannerPicLi[i].onmouseout=function () {
			timeOut2=setInterval(lbfun,3000);
		}
	}

	var em=$("em");
	for (var i = 0; i < em.length; i++) {
		em[i].index=i;
	}

	var ctrlDotX=$(".ctrl-dotx")
	for (var i = 0; i < ctrlDotX.length; i++) {
		ctrlDotX[i].index=i;
	}

	function abc () {
		clearInterval(timeOut2);
		var erSpan=getChildren(bannerCtrlLi[this.index])[0];
		var erzi=getChildren(bannerCtrlLi[this.index])[1];
		var sunzi=getChildren(erzi)[1];
		var zengsun=getChildren(sunzi)[0];
		num=zengsun.index;

		bannerPicLi[num].style.background=bgcolors[num];
		for (var i = 0; i < bannerPicLi.length; i++) {

			if (bannerPicLi[i].style.opacity==1) {
				animate(bannerPicLi[i],{opacity:0.7},300,function () {
					this.style.opacity=0;
				})
			}
		}

		animate(bannerPicLi[num],{opacity:1},300);

		for (var i = 0; i < bannerI.length; i++) {
			var fu=bannerI[i].parentNode;
			var grandpa=fu.parentNode;
			grandpa.style.display="none";
			bannerI[i].style.background="#fff";
			xiaokuai=getFirst(grandpa);
			dakuai=getPrevious(grandpa);
			xiaokuai.style.opacity=0.3;
			dakuai.style.opacity=0.3;
		};

		var fu=bannerI[num].parentNode;
		var grandpa=fu.parentNode;
		var grandpaN=getNext(grandpa);
		grandpaN.style.display="block";
		bannerI[num].style.background="#ff6600";
		xiaokuai=getFirst(grandpa);
		dakuai=getPrevious(grandpa);
		xiaokuai.style.opacity=0.65;
		dakuai.style.opacity=0.65;

		for (var i = 0; i < em.length; i++) {
			var emDiv=getChildren(em[i])[0];
			emDiv.style.background="#fff";
			var emA=getChildren(em[i])[1];
			emA.style.color="#fff"
		}

		emDiv=getChildren(em[num])[0];
		emDiv.style.background="#ff6600";
		emA=getChildren(em[num])[1];
		emA.style.color="#ff6600"

	}

	function abcd () {
		var disanzi=getChildren(this)[2];
		disanzi.style.display="none"
		num=num-1;
		lbfun();
		timeOut2=setInterval(lbfun,3000)
	}

	for (var i = 0; i < bannerCtrlLi.length; i++) {
		bannerCtrlLi[i].index=i;
		hover(bannerCtrlLi[i],abc,abcd);
	}

	for (var i = 0; i < em.length; i++) {

		em[i].onmouseover=function (e) {
			var ev=e||window.event;
			clearInterval(timeOut2)
			var a=this.parentNode.parentNode.index;
			for (var i = 0; i < em.length; i++) {
				getChildren(em[i])[0].style.background="#fff"
				getChildren(em[i])[1].style.color="#fff";
			}
			getChildren(this)[0].style.background="#ff6600"
			getChildren(this)[1].style.color="#ff6600";

			num=this.index-1;
			lbfun();
			var c=getPrevious(this.parentNode.parentNode);
			c.style.display="none";
		}
	}



	/*banner左右的按钮*/
	var bannerBtnLeft=$(".banner-btn-left")[0];
	var bannerBtnRight=$(".banner-btn-right")[0];
	var bannerBtnLeftDiv=$("div",bannerBtnLeft)[0];
	var bannerBtnRightDiv=$("div",bannerBtnRight)[0];

	bannerBox.onmouseover=function () {
		bannerBtnLeft.style.display="block";
		bannerBtnRight.style.display="block";
	}
	bannerBox.onmouseout=function () {
		bannerBtnLeft.style.display="none";
		bannerBtnRight.style.display="none";
	}
	bannerBtnLeft.onmouseover=function () {
		bannerBtnLeftDiv.style.opacity="0.3";
		clearInterval(timeOut2);
	}
	bannerBtnRight.onmouseover=function () {
		bannerBtnRightDiv.style.opacity="0.3";
		clearInterval(timeOut2);
	}
	bannerBtnRight.onclick=function () {
		clearInterval(timeOut2);
		lbfun();
	}
	bannerBtnLeft.onclick=function () {
		clearInterval(timeOut2);
		dlbfun();
	}
	bannerBtnLeft.onmouseout=function () {
		bannerBtnLeftDiv.style.opacity="0.2";
		timeOut2=setInterval(lbfun,3000);
	}
	bannerBtnRight.onmouseout=function () {
		bannerBtnRightDiv.style.opacity="0.2";
		timeOut2=setInterval(lbfun,3000);
	}


	/*hidden*/
	var sortList=$(".sort-list")[0];
	var sortListLi=$("li",sortList);

	var ngSortHidden=$(".ng-sort-hidden");
	var bacha=$(".bacha");
	var timeOut1;
	var timeOut3;

	for (var i = 0; i < sortListLi.length; i++) {
		sortListLi[i].index=i;

		sortListLi[i].onmouseover=function () {
			sortListLi[this.index].style.background="#fff";

			clearTimeout(timeOut1);
			clearTimeout(timeOut3);

			var that=this
			timeOut3=setTimeout(function (argument) {
				for (var l = 0; l < ngSortHidden.length; l++) {
					ngSortHidden[l].style.display="none";
				};
				ngSortHidden[that.index].style.display="block";
			},200)	

			var a=getChildren(sortListLi[this.index]);
			for (var j = 0; j < a.length; j++) {
				a[j].style.color="#333";
			}
		}

		sortListLi[i].onmouseout=function () {
			sortListLi[this.index].style.background="";
			var that=this;
			timeOut1=setTimeout(function () {
				animate(ngSortHidden[that.index],{width:0},250,Tween.Linear,function () {
					ngSortHidden[that.index].style.display="none";
					ngSortHidden[that.index].style.width="800px";
				})
			},200)
			
			var a=getChildren(sortListLi[this.index]);
			for (var j = 0; j < a.length; j++) {
				a[j].style.color="";
			}
		}
	}

	for (var i = 0; i < bacha.length; i++) {
		bacha[i].index=i;
		bacha[i].onclick=function () {
			ngSortHidden[this.index].style.display="none";
		}
	};

	/*公告*/
	var ggList=$(".list",$(".notice")[0])[0];
	var ggListLi=$("li",ggList);
	var ggtm=$(".ggtm");
	var ggnr=$(".ggnr");

	var ggtLi=$(".ggt-li");
	var xian=$(".xian");
	var kong=$(".kong");

	for (var i = 0; i < ggListLi.length; i++) {
		ggListLi[i].index=i;
		ggListLi[i].onmouseover=function () {
			ggtm[this.index].style.color="#ff6600";
			ggnr[this.index].style.color="#ff6600";
			ggnr[this.index].style.textDecoration="underline";
		}
		ggListLi[i].onmouseout=function () {
				ggtm[this.index].style.color="";
				ggnr[this.index].style.color="";
				ggnr[this.index].style.textDecoration="";
		}
	};

	for (var i = 0; i < ggtLi.length; i++) {
		ggtLi[i].index=i;

		ggtLi[i].onmouseover=function () {
			xian[this.index].style.display="none";
			kong[this.index].style.display="block";
		}
		ggtLi[i].onmouseout=function () {
			xian[this.index].style.display="block";
			kong[this.index].style.display="none";
		}
	};

/*一楼*/
	var tabLi1=$(".select",$(".tab")[0]);
	var mainCol1=$(".main-col",$(".J-floor1")[0]);

	mainCol1[0].style.display="block";
	mainCol1[1].style.display="none";

	var t1;
	var tt1;

	tabLi1[0].onmouseover=function () {
		t1=setTimeout(function () {
			mainCol1[0].style.display="block";
			mainCol1[1].style.display="none";
			tabLi1[1].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi1[0].style.cssText="border-bottom:3px solid #ff6b80;color:#222;font-weight:bold;"
		},300)
	}
	tabLi1[0].onmouseout=function () {
		clearTimeout(t1);
	}

	tabLi1[1].onmouseover=function () {
		tt1=setTimeout(function () {
			mainCol1[1].style.display="block";
			mainCol1[0].style.display="none";
			tabLi1[0].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi1[1].style.cssText="border-bottom:3px solid #ff6b80;color:#222;font-weight:bold;"
		},300)
	}
	tabLi1[1].onmouseout=function () {
		clearTimeout(tt1);
	}
/*二楼*/
	var tabLi2=$(".select",$(".tab")[1]);
	var mainCol2=$(".main-col",$(".J-floor2")[0]);

	mainCol2[0].style.display="block";
	mainCol2[1].style.display="none";

	var t2;
	var tt2;

	tabLi2[0].onmouseover=function () {
		t2=setTimeout(function () {
			mainCol2[0].style.display="block";
			mainCol2[1].style.display="none";
			tabLi2[1].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi2[0].style.cssText="border-bottom:3px solid #61B3FF;color:#222;font-weight:bold;"
		},300);		
	}
	tabLi2[0].onmouseout=function () {
		clearTimeout(t2)
	}

	tabLi2[1].onmouseover=function () {
		tt2=setTimeout(function () {
			mainCol2[1].style.display="block";
			mainCol2[0].style.display="none";
			tabLi2[0].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi2[1].style.cssText="border-bottom:3px solid #61B3FF;color:#222;font-weight:bold;"
		},300)
	}
	tabLi2[1].onmouseout=function () {
		clearTimeout(tt2)
	}

/*三楼*/
	var tabLi3=$(".select",$(".tab")[2]);
	var mainCol3=$(".main-col",$(".J-floor3")[0]);

	mainCol3[0].style.display="block";
	mainCol3[1].style.display="none";

	var t3,tt3

	tabLi3[0].onmouseover=function () {
		t3=setTimeout(function () {
			mainCol3[0].style.display="block";
			mainCol3[1].style.display="none";
			tabLi3[1].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi3[0].style.cssText="border-bottom:3px solid #AED55A;color:#222;font-weight:bold;"
		},300)
	}
	tabLi3[0].onmouseout=function () {
		clearTimeout(t3)
	}

	tabLi3[1].onmouseover=function () {
		tt3=setTimeout(function () {
			mainCol3[1].style.display="block";
			mainCol3[0].style.display="none";
			tabLi3[0].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi3[1].style.cssText="border-bottom:3px solid #AED55A;color:#222;font-weight:bold;"
		},300)
	}
	tabLi3[1].onmouseout=function () {
		clearTimeout(tt3)
	}

/*四楼*/
	var tabLi4=$(".select",$(".tab")[3]);
	var mainCol4=$(".main-col",$(".J-floor4")[0]);

	mainCol4[0].style.display="block";
	mainCol4[1].style.display="none";

	var t4,tt4;

	tabLi4[0].onmouseover=function () {
		t4=setTimeout(function () {
			mainCol4[0].style.display="block";
			mainCol4[1].style.display="none";
			tabLi4[1].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi4[0].style.cssText="border-bottom:3px solid #FF9901;color:#222;font-weight:bold;"
		},300)
	}
	tabLi4[0].onmouseout=function () {
		clearTimeout(t4);
	}

	tabLi4[1].onmouseover=function () {
		tt4=setTimeout(function () {
			mainCol4[1].style.display="block";
			mainCol4[0].style.display="none";
			tabLi4[0].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi4[1].style.cssText="border-bottom:3px solid #FF9901;color:#222;font-weight:bold;"
		},300)
	}
	tabLi4[1].onmouseout=function () {
		clearTimeout(tt4);
	}

/*五楼*/
	var tabLi5=$(".select",$(".tab")[4]);
	var mainCol5=$(".main-col",$(".J-floor5")[0]);

	mainCol5[0].style.display="block";
	mainCol5[1].style.display="none";

	var t5,tt5;

	tabLi5[0].onmouseover=function () {
		t5=setTimeout(function () {
			mainCol5[0].style.display="block";
			mainCol5[1].style.display="none";
			tabLi5[1].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi5[0].style.cssText="border-bottom:3px solid #FF6565;color:#222;font-weight:bold;"
		},300)
	}
	tabLi5[0].onmouseout=function () {
		clearTimeout(t5)
	}

	tabLi5[1].onmouseover=function () {
		tt5=setTimeout(function () {
			mainCol5[1].style.display="block";
			mainCol5[0].style.display="none";
			tabLi5[0].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi5[1].style.cssText="border-bottom:3px solid #FF6565;color:#222;font-weight:bold;"
		},300)
	}
	tabLi5[1].onmouseout=function () {
		clearTimeout(tt5)
	}

/*六楼*/
	var tabLi6=$(".select",$(".tab")[5]);
	var mainCol6=$(".main-col",$(".J-floor6")[0]);

	mainCol6[0].style.display="block";
	mainCol6[1].style.display="none";

	var t6,tt6;

	tabLi6[0].onmouseover=function () {
		t6=setTimeout(function () {
			mainCol6[0].style.display="block";
			mainCol6[1].style.display="none";
			tabLi6[1].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi6[0].style.cssText="border-bottom:3px solid #FB7292;color:#222;font-weight:bold;"
		},300)
	}
	tabLi6[0].onmouseout=function () {
		clearTimeout(t6)
	}

	tabLi6[1].onmouseover=function () {
		tt6=setTimeout(function () {
			mainCol6[1].style.display="block";
			mainCol6[0].style.display="none";
			tabLi6[0].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi6[1].style.cssText="border-bottom:3px solid #FB7292;color:#222;font-weight:bold;"
		},300)
	}
	tabLi6[1].onmouseout=function () {
		clearTimeout(tt6);
	}

/*七楼*/
	var tabLi7=$(".select",$(".tab")[6]);
	var mainCol7=$(".main-col",$(".J-floor7")[0]);

	mainCol7[0].style.display="block";
	mainCol7[1].style.display="none";

	var t7,tt7;

	tabLi7[0].onmouseover=function () {
		t7=setTimeout(function () {
			mainCol7[0].style.display="block";
			mainCol7[1].style.display="none";
			tabLi7[1].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi7[0].style.cssText="border-bottom:3px solid #6D93FF;color:#222;font-weight:bold;"
		},300)
	}
	tabLi7[0].onmouseout=function () {
		clearTimeout(t7);
	}

	tabLi7[1].onmouseover=function () {
		tt8=setTimeout(function () {
			mainCol7[1].style.display="block";
			mainCol7[0].style.display="none";
			tabLi7[0].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi7[1].style.cssText="border-bottom:3px solid #6D93FF;color:#222;font-weight:bold;"
		},300)
	}
	tabLi7[1].onmouseout=function () {
		clearTimeout(tt8)
	}

/*八楼*/
	var tabLi8=$(".select",$(".tab")[7]);
	var mainCol8=$(".main-col",$(".J-floor8")[0]);

	mainCol8[0].style.display="block";
	mainCol8[1].style.display="none";

	var t8,tt8;

	tabLi8[0].onmouseover=function () {
		t8=setTimeout(function () {
			mainCol8[0].style.display="block";
			mainCol8[1].style.display="none";
			tabLi8[1].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi8[0].style.cssText="border-bottom:3px solid #35BFCB;color:#222;font-weight:bold;"
		},300)
	}
	tabLi8[0].onmouseout=function () {
		clearTimeout(t8);
	}

	tabLi8[1].onmouseover=function () {
		tt8=setTimeout(function () {
			mainCol8[1].style.display="block";
			mainCol8[0].style.display="none";
			tabLi8[0].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi8[1].style.cssText="border-bottom:3px solid #35BFCB;color:#222;font-weight:bold;"
		},300)
	}
	tabLi8[1].onmouseout=function () {
		clearTimeout(tt8);
	}

/*九楼*/
	var tabLi9=$(".select",$(".tab")[8]);
	var mainCol9=$(".main-col",$(".J-floor9")[0]);

	mainCol9[0].style.display="block";
	mainCol9[1].style.display="none";

	var t9,tt9;

	tabLi9[0].onmouseover=function () {
		t9=setTimeout(function () {
			mainCol9[0].style.display="block";
			mainCol9[1].style.display="none";
			tabLi9[1].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi9[0].style.cssText="border-bottom:3px solid #356ACB;color:#222;font-weight:bold;"
		},300)
	}
	tabLi9[0].onmouseout=function () {
		clearTimeout(t9);
	}

	tabLi9[1].onmouseover=function () {
		tt9=setTimeout(function () {
			mainCol9[1].style.display="block";
			mainCol9[0].style.display="none";
			tabLi9[0].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi9[1].style.cssText="border-bottom:3px solid #356ACB;color:#222;font-weight:bold;"
		},300)
	}
	tabLi9[1].onmouseout=function () {
		clearTimeout(tt9);
	}

/*十楼*/
	var tabLi10=$(".select",$(".tab")[9]);
	var mainCol10=$(".main-col",$(".J-floor10")[0]);

	mainCol10[0].style.display="block";
	mainCol10[1].style.display="none";

	var t10,tt10;

	tabLi10[0].onmouseover=function () {
		t10=setTimeout(function () {
			mainCol10[0].style.display="block";
			mainCol10[1].style.display="none";
			tabLi10[1].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi10[0].style.cssText="border-bottom:3px solid #7CBB2E;color:#222;font-weight:bold;"
		},300)
	}
	tabLi10[0].onmouseout=function () {
		clearTimeout(t10);
	}

	tabLi10[1].onmouseover=function () {
		tt10=setTimeout(function () {
			mainCol10[1].style.display="block";
			mainCol10[0].style.display="none";
			tabLi10[0].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi10[1].style.cssText="border-bottom:3px solid #7CBB2E;color:#222;font-weight:bold;"
		},300)
	}
	tabLi10[1].onmouseout=function () {
		clearTimeout(tt10);
	}

/*十一楼*/
	var tabLi11=$(".select",$(".tab")[10]);
	var mainCol11=$(".main-col",$(".J-floor11")[0]);

	mainCol11[0].style.display="block";
	mainCol11[1].style.display="none";

	var t11,tt11;

	tabLi11[0].onmouseover=function () {
		t11=setTimeout(function () {
			mainCol11[0].style.display="block";
			mainCol11[1].style.display="none";
			tabLi11[1].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi11[0].style.cssText="border-bottom:3px solid #9E652B;color:#222;font-weight:bold;"
		},300)
	}
	tabLi11[0].onmouseout=function () {
		clearTimeout(t11)
	}

	tabLi11[1].onmouseover=function () {
		tt11=setTimeout(function () {
			mainCol11[1].style.display="block";
			mainCol11[0].style.display="none";
			tabLi11[0].style.cssText="border-bottom:0;color:#666;font-weight:normal;"
			tabLi11[1].style.cssText="border-bottom:3px solid #9E652B;color:#222;font-weight:bold;"
		},300)
	}
	tabLi11[1].onmouseout=function () {
		clearTimeout(tt11);
	}

/*跳转楼层*/

	var ECodeFloatBar=$(".ECode-floatBar")[0];
	var ECodeFloatBarLi=$("li",ECodeFloatBar);
	var ECodeFloatBarImg=$("img",ECodeFloatBar);
	var ECodeFloatBarDiv=$("div",ECodeFloatBar);
	var JFloor=$(".J-floor");


	var aa=document.documentElement.scrollTop?document.documentElement:document.body			
		if (aa.scrollTop>1200) {
			firstscreenLxr.style.display="none";
			ECodeFloatBar.style.display="block"
		}else if(aa.scrollTop<1200){
			firstscreenLxr.style.display="block"
			ECodeFloatBar.style.display="none"
		}

	for (var i = 0; i < ECodeFloatBarLi.length; i++) {
		ECodeFloatBarLi[i].index=i;
		ECodeFloatBarLi[i].juli=JFloor[i].offsetTop-500;
	}


	for (var i = 0; i < ECodeFloatBarLi.length; i++) {
		ECodeFloatBarLi[i].index=i;

		function overlxr () {
			ECodeFloatBarImg[this.index].style.display="none";
			ECodeFloatBarDiv[this.index].style.display="block";
		}


		function outlxr () {
			aa=document.documentElement.scrollTop?document.documentElement:document.body

			if ((aa.scrollTop>1300)&&(aa.scrollTop<1900)) {
				for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
				}
				ECodeFloatBarImg[0].style.display="none";
				ECodeFloatBarDiv[0].style.display="block";
			}else if ((aa.scrollTop>1900)&&(aa.scrollTop<2414)) {
				for (var j = 0; j < ECodeFloatBarLi.length; j++) {
					ECodeFloatBarImg[j].style.display="block";
					ECodeFloatBarDiv[j].style.display="none";
				}
				ECodeFloatBarImg[1].style.display="none";
				ECodeFloatBarDiv[1].style.display="block";
			}else if((aa.scrollTop>2414)&&(aa.scrollTop<2928)){
				for (var j = 0; j < ECodeFloatBarLi.length; j++) {
					ECodeFloatBarImg[j].style.display="block";
					ECodeFloatBarDiv[j].style.display="none";
				}
				ECodeFloatBarImg[2].style.display="none";
				ECodeFloatBarDiv[2].style.display="block";
			}else if((aa.scrollTop>2928)&&(aa.scrollTop<3442)){
				for (var j = 0; j < ECodeFloatBarLi.length; j++) {
					ECodeFloatBarImg[j].style.display="block";
					ECodeFloatBarDiv[j].style.display="none";
				}
				ECodeFloatBarImg[3].style.display="none";
				ECodeFloatBarDiv[3].style.display="block";
			}else if((aa.scrollTop>3442)&&(aa.scrollTop<3984)){
				for (var j = 0; j < ECodeFloatBarLi.length; j++) {
					ECodeFloatBarImg[j].style.display="block";
					ECodeFloatBarDiv[j].style.display="none";
				}
				ECodeFloatBarImg[4].style.display="none";
				ECodeFloatBarDiv[4].style.display="block";
			}else if((aa.scrollTop>3984)&&(aa.scrollTop<4498)){
				for (var j = 0; j < ECodeFloatBarLi.length; j++) {
					ECodeFloatBarImg[j].style.display="block";
					ECodeFloatBarDiv[j].style.display="none";
				}
				ECodeFloatBarImg[5].style.display="none";
				ECodeFloatBarDiv[5].style.display="block";
			}else if((aa.scrollTop>4498)&&(aa.scrollTop<5012)){
				for (var j = 0; j < ECodeFloatBarLi.length; j++) {
					ECodeFloatBarImg[j].style.display="block";
					ECodeFloatBarDiv[j].style.display="none";
				}
				ECodeFloatBarImg[6].style.display="none";
				ECodeFloatBarDiv[6].style.display="block";
			}else if((aa.scrollTop>5012)&&(aa.scrollTop<5526)){
				for (var j = 0; j < ECodeFloatBarLi.length; j++) {
					ECodeFloatBarImg[j].style.display="block";
					ECodeFloatBarDiv[j].style.display="none";
				}
				ECodeFloatBarImg[7].style.display="none";
				ECodeFloatBarDiv[7].style.display="block";
			}else if((aa.scrollTop>5526)&&(aa.scrollTop<6040)){
				for (var j = 0; j < ECodeFloatBarLi.length; j++) {
					ECodeFloatBarImg[j].style.display="block";
					ECodeFloatBarDiv[j].style.display="none";
				}
				ECodeFloatBarImg[8].style.display="none";
				ECodeFloatBarDiv[8].style.display="block";
			}else if((aa.scrollTop>6040)&&(aa.scrollTop<6554)){
				for (var j = 0; j < ECodeFloatBarLi.length; j++) {
					ECodeFloatBarImg[j].style.display="block";
					ECodeFloatBarDiv[j].style.display="none";
				}
				ECodeFloatBarImg[9].style.display="none";
				ECodeFloatBarDiv[9].style.display="block";
			}else if(aa.scrollTop>6554){
				for (var j = 0; j < ECodeFloatBarLi.length; j++) {
					ECodeFloatBarImg[j].style.display="block";
					ECodeFloatBarDiv[j].style.display="none";
				}
				ECodeFloatBarImg[10].style.display="none";
				ECodeFloatBarDiv[10].style.display="block";
			}

		}

		addEvent(ECodeFloatBarLi[i],"mouseover",overlxr);
		addEvent(ECodeFloatBarLi[i],"mouseout",outlxr);


		addEvent(ECodeFloatBarLi[i],"click",function () {

			for (var j = 0; j < ECodeFloatBarLi.length; j++) {
				ECodeFloatBarImg[j].style.display="block";
				ECodeFloatBarDiv[j].style.display="none";
			}

			ECodeFloatBarImg[this.index].style.display="none";
			ECodeFloatBarDiv[this.index].style.display="block";

			var top=JFloor[this.index].offsetTop;
			animate(aa,{scrollTop:top-50},200);
		})

	}
	
	
	/*按需加载*/
	var imgs=$("img");

	for (var i = 0; i < imgs.length; i++){
		if (getPosition(imgs[i]).y<offsetWindow().height+aa.scrollTop){
			imgs[i].src=imgs[i].getAttribute("src-data")
		}
	}

	addEvent(window,"scroll",func);

	function func () {
		aa=document.documentElement.scrollTop?document.documentElement:document.body			
		if (aa.scrollTop>1200) {
			firstscreenLxr.style.display="none";
			ECodeFloatBar.style.display="block"
		}else if(aa.scrollTop<1200){
			firstscreenLxr.style.display="block"
			ECodeFloatBar.style.display="none"
		}

		for (var i = 0; i < imgs.length; i++){
			if (getPosition(imgs[i]).y<offsetWindow().height+aa.scrollTop){
				imgs[i].src=imgs[i].getAttribute("src-data")
			}
		}

		var tttt=setTimeout(function () {
				if ((aa.scrollTop>1300)&&(aa.scrollTop<1900)) {
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
							ECodeFloatBarImg[j].style.display="block";
							ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[0].style.display="none";
					ECodeFloatBarDiv[0].style.display="block";
				}else if ((aa.scrollTop>1900)&&(aa.scrollTop<2414)) {
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[1].style.display="none";
					ECodeFloatBarDiv[1].style.display="block";
				}else if((aa.scrollTop>2414)&&(aa.scrollTop<2928)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[2].style.display="none";
					ECodeFloatBarDiv[2].style.display="block";
				}else if((aa.scrollTop>2928)&&(aa.scrollTop<3442)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[3].style.display="none";
					ECodeFloatBarDiv[3].style.display="block";
				}else if((aa.scrollTop>3442)&&(aa.scrollTop<3984)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[4].style.display="none";
					ECodeFloatBarDiv[4].style.display="block";
				}else if((aa.scrollTop>3984)&&(aa.scrollTop<4498)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[5].style.display="none";
					ECodeFloatBarDiv[5].style.display="block";
				}else if((aa.scrollTop>4498)&&(aa.scrollTop<5012)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[6].style.display="none";
					ECodeFloatBarDiv[6].style.display="block";
				}else if((aa.scrollTop>5012)&&(aa.scrollTop<5526)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[7].style.display="none";
					ECodeFloatBarDiv[7].style.display="block";
				}else if((aa.scrollTop>5526)&&(aa.scrollTop<6040)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[8].style.display="none";
					ECodeFloatBarDiv[8].style.display="block";
				}else if((aa.scrollTop>6040)&&(aa.scrollTop<6554)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[9].style.display="none";
					ECodeFloatBarDiv[9].style.display="block";
				}else if(aa.scrollTop>6554){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[10].style.display="none";
					ECodeFloatBarDiv[10].style.display="block";
				}
			},500)
	}


		if ((aa.scrollTop>1300)&&(aa.scrollTop<1900)) {
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
							ECodeFloatBarImg[j].style.display="block";
							ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[0].style.display="none";
					ECodeFloatBarDiv[0].style.display="block";
				}else if ((aa.scrollTop>1900)&&(aa.scrollTop<2414)) {
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[1].style.display="none";
					ECodeFloatBarDiv[1].style.display="block";
				}else if((aa.scrollTop>2414)&&(aa.scrollTop<2928)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[2].style.display="none";
					ECodeFloatBarDiv[2].style.display="block";
				}else if((aa.scrollTop>2928)&&(aa.scrollTop<3442)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[3].style.display="none";
					ECodeFloatBarDiv[3].style.display="block";
				}else if((aa.scrollTop>3442)&&(aa.scrollTop<3984)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[4].style.display="none";
					ECodeFloatBarDiv[4].style.display="block";
				}else if((aa.scrollTop>3984)&&(aa.scrollTop<4498)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[5].style.display="none";
					ECodeFloatBarDiv[5].style.display="block";
				}else if((aa.scrollTop>4498)&&(aa.scrollTop<5012)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[6].style.display="none";
					ECodeFloatBarDiv[6].style.display="block";
				}else if((aa.scrollTop>5012)&&(aa.scrollTop<5526)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[7].style.display="none";
					ECodeFloatBarDiv[7].style.display="block";
				}else if((aa.scrollTop>5526)&&(aa.scrollTop<6040)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[8].style.display="none";
					ECodeFloatBarDiv[8].style.display="block";
				}else if((aa.scrollTop>6040)&&(aa.scrollTop<6554)){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[9].style.display="none";
					ECodeFloatBarDiv[9].style.display="block";
				}else if(aa.scrollTop>6554){
					for (var j = 0; j < ECodeFloatBarLi.length; j++) {
						ECodeFloatBarImg[j].style.display="block";
						ECodeFloatBarDiv[j].style.display="none";
					}
					ECodeFloatBarImg[10].style.display="none";
					ECodeFloatBarDiv[10].style.display="block";
				}


	/*苏宁社区*/
		var snsqa=$(".snsq-a");
	  var snsqImg1=$(".community-head1");
	  var snsqImg2=$(".community-head2");

	  for (var i = 0; i < snsqa.length; i++) {
	  	snsqa[i].index=i;
	  	snsqa[i].onmouseover=function () {
	  		snsqImg1[this.index].style.display="none";
	  		snsqImg2[this.index].style.display="block";
	  	}
	  	snsqa[i].onmouseout=function () {
	  		snsqImg1[this.index].style.display="block";
	  		snsqImg2[this.index].style.display="none";
	  	}
	  };

	  /*苏宁社区的banner*/
	  var hotsAndShare=$(".hots-and-share")[0];
	  var snsqLeft=$(".left")[0];
	  var snsqRight=$(".right")[0];
	  var hotsAndShareMain=$(".hots-and-share-main")[0];


	  hotsAndShare.onmouseover=function () {
	  	snsqLeft.style.display="block";
	  	snsqRight.style.display="block";
	  	animate(snsqLeft,{opacity:0.5},300)
	  	animate(snsqRight,{opacity:0.5},300)
	  }
	  hotsAndShare.onmouseout=function () {
	  	animate(snsqLeft,{opacity:0},300,function(){
	  		snsqLeft.style.display="none";
	  	})
	  	animate(snsqRight,{opacity:0},300,function(){
	  		snsqRight.style.display="none";
	  	})
	  }

	  var snsqFlag1=true;
	  var snsqFlag2=true;
		var weiyi=-1000;
		var pagerli=$("li",$(".pager")[0])

		function parliBackground (argument) {
			if (weiyi==-1000) {
				pagerli[0].style.background="#ffaa00";
				pagerli[1].style.background="#fff";
				pagerli[2].style.background="#fff";
			}else if (weiyi==-2000) {
				pagerli[0].style.background="#fff";
				pagerli[1].style.background="#ffaa00";
				pagerli[2].style.background="#fff";
			}else if (weiyi==-3000) {
				pagerli[0].style.background="#fff";
				pagerli[1].style.background="#fff";
				pagerli[2].style.background="#ffaa00";
			}
		}

		parliBackground();

	  snsqRight.onclick=function () {
	  	if (snsqFlag1) {
	  		snsqFlag1=false;		
	  		weiyi-=1000;
	  		parliBackground();
	  		animate(hotsAndShareMain,{marginLeft:weiyi},300,Tween.Linear,function(){
	  			snsqFlag1=true;
	  			if (weiyi==-4000) {
	  				hotsAndShareMain.style.marginLeft="-1000px";
	  				weiyi=-1000;
	  				parliBackground();
	  			};
	  		})
	  	};
	  }
	  snsqLeft.onclick=function () {
	  	if (snsqFlag2) {
	  		snsqFlag2=false;
	  		weiyi+=1000;
	  		parliBackground();
				animate(hotsAndShareMain,{marginLeft:weiyi},300,Tween.Linear,function(){
					snsqFlag2=true;
					if (weiyi==0) {
						hotsAndShareMain.style.marginLeft="-3000px";
						weiyi=-3000;
						parliBackground();
					};
				})
	  	};
	  }

	  for (var i = 0; i < pagerli.length; i++) {
	  	pagerli[i].index=i;
	  	
	  	pagerli[i].onmouseover=function () {
	  		for (var j = 0; j < pagerli.length; j++) {
		  		pagerli[j].style.background="#fff";
		  	};

	  		pagerli[this.index].style.background="#fa0";

	  		if (this.index==0) {
	  			animate(hotsAndShareMain,{marginLeft:-1000},300,Tween.Linear)
	  		}else if (this.index==1) {
					animate(hotsAndShareMain,{marginLeft:-2000},300,Tween.Linear)
	  		}else if (this.index==2) {
					animate(hotsAndShareMain,{marginLeft:-3000},300,Tween.Linear)
	  		}
	  	}
	  };


	//十元新人红包等你来拿
	var newpeople=$(".newpeople")[0];
	var newclosebtn=$(".newclosebtn")[0];
	newclosebtn.onclick=function  () {
		newpeople.style.display="none";
	}

})




















/*
   动画函数 animate (obj,attrObj,dur,fun,callback)
   obj   要动画的对象
   attrobj   要动画的属性对象{width:xxxx,height:xxx,left:xxxx,top:xxxx,opacity:xxx}
   dur   持续时间
   fun   动画方式
   callback 变化完成之后要处理的内容
*/
/*
  函数 colorAnimate (obj,attr,val,dur,fn,callback)
  obj   要处理的对象
  attr  要处理的属性  background   color
  val   最终颜色 rbg    #
  fn    动画的方式
  callback  变化完成之后要处理的内容
*/
//动画算法
/*
		  Linear：无缓动效果(匀速运动)；
			Quad：二次方的缓动；
			Cubic：三次方的缓动
			Quartic：四次方的缓动；
			Quintic：五次方的缓动；
			Sinusoidal：正弦曲线的缓动；
			Exponential：指数曲线的缓动；
			Circular：圆形曲线的缓动；
			Elastic：指数衰减的正弦曲线缓动；
			Back：超过范围的三次方缓动）；
			Bounce：指数衰减的反弹缓动。
			

			每个效果都分三个缓动方式（方法），分别是：
			easeIn：从0开始加速的运动；
			easeOut：减速到0的运动；
			easeInOut：前半段从0开始加速，后半段减速到0的运动。
			


			函数的四个参数分别代表：
				t--- current time（当前时间）；0 +=60   
				b--- beginning value（初始值）；100  
				c--- change in value（变化量）；500-100
				d---duration（持续时间）  5000
			Tween.Quad.easeInt()
	     	运算的结果就是当前的运动路程。
		   整理翻译:Code宝宝
		   翻译或解释不对的地方希望各位修正、批评。
		   50
    Tween.Linear     
	Tween.Quad.easeIn
*/
 Tween = {  
    Linear: function(t,b,c,d){ return c*t/d+b; },
    Quad: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c*(t/=d)*(t-2) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        }
    },
    Quart: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        }
    },
    Quint: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        }
    },
    Sine: {
        easeIn: function(t,b,c,d){
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOut: function(t,b,c,d){
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function(t,b,c,d){
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOut: function(t,b,c,d){
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function(t,b,c,d){
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
        },
        easeInOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        }
    },
    Back: {
        easeIn: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158; 
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function(t,b,c,d){
            return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
        },
        easeOut: function(t,b,c,d){
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOut: function(t,b,c,d){
            if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
            else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    }
 }

 /*
   动画函数 animate (obj,attrObj,dur,fun,callback)
   obj   要动画的对象
   attrobj   要动画的属性对象{width:xxxx,height:xxx,left:xxxx,top:xxxx,opacity:xxx}
   dur   持续时间
   fun   动画方式
   callback 回调函数 
   */
  
function animate (obj,attrObj,dur,fun,callback) {
	 clearInterval(obj.t);
	if(arguments.length==2){
	  dur=500;
	  fun=Tween.Linear;
	  callback=null;
	}
	if(arguments.length==3){
	  if(typeof dur=="number"){
	  dur=dur;
	  fun=Tween.Linear;
	  callback=null;
	  }
	  if(typeof dur=="function"){
	    if(dur.length>=4){ 
			  fun=dur;
			  callback=null;
			  dur=500;
		  }else{  
			  fun=Tween.Linear;
			  callback=dur;
			  dur=500;
		  }
	  }
	}
	if(arguments.length==4){
	   if(typeof dur=="number"){
	     dur=dur;
		 if(fun.length>=4){
			  fun=fun;
			  callback=null;
			  
		}else{
	     	  callback=fun;
			  fun=Tween.Linear;
		   
		}
		 
	   }else{	  
				  callback=fun;
				  fun=dur;
				  dur=500
	  }
	}
  var time=0;
	var start={};
  var change={};
  for (var i in attrObj) {
    start[i]=setCss(obj,i);
    change[i]=attrObj[i]-start[i];
  }

	obj.t=setInterval(function(){
	  if(time>=dur){
	   clearInterval(obj.t);
	   for (var i in attrObj) {
		 setCss(obj,i,attrObj[i]);
	   }
	   if(callback){
	     callback.call(obj);
	   }
	  }else{
	  for (var i in attrObj) {
	   setCss(obj,i,fun(time,start[i],change[i],dur));
	  }
	  time+=60
	  }
	},60)
  }




 function setCss (obj,attr,val) {
    if(obj.nodeType!==1){
      return;
    }
    //初始化参数
    var attr=attr.replace(/^\s*|\s*$/g,"");
    //获取值
    if(arguments.length==2){
       //位置和尺寸
      if(attr=="height"||attr=="width"||attr=="top"||attr=="left"||attr=="right"|| attr=="bottom"){
        var val=obj.currentStyle?parseInt(obj.currentStyle[attr]):parseInt(getComputedStyle(obj,null)[attr]);
        if(!val){
          var str="offset"+attr.replace(attr.charAt(0),attr.charAt(0).toUpperCase());
          val=obj[str];
        }
		    return val;
      }

      if(attr=="padding"||attr=="margin"||attr=="paddingTop"||attr=="paddingLeft"||attr=="paddingRight"||attr=="paddingBottom"||attr=="marginTop"||attr=="marginLeft"||attr=="marginRight"||attr=="marginBottom"){
        var cc= parseInt(obj.currentStyle? ((obj.currentStyle[attr]==undefined||obj.currentStyle[attr]=="auto")?0:obj.currentStyle[attr]):(getComputedStyle(obj,null)[attr]==undefined?0:getComputedStyle(obj,null)[attr]));
        return cc;
      }
      //透明度
      if(attr=="opacity"){
        return obj.currentStyle?parseFloat(obj.currentStyle[attr]||1):parseFloat(getComputedStyle(obj,null)[attr]||1);
      }
      //颜色
      if(attr=='color'||attr=="background"|| attr=="backgroundColor"||attr=='borderBottomColor'||attr== 'borderLeftColor'||    attr=='borderRightColor'||attr=='borderTopColor'){
        var colors=obj.currentStyle?(obj.currentStyle[attr]||"#000000"):(getComputedStyle(obj,null)[attr]||"#000000");
        //获取对象
        return getColor(colors);    
		  }
      if(attr=="scrollTop"){
        return obj.scrollTop;
      }

      return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,null)[attr];

    }else if(arguments.length==3){
      switch (attr) {
        case "width":
        case "height":
        case "top":
        case "left":
        case "bottom":
        case "right":
        case "padding":
        case "margin":
        case "paddingLeft":
        case "paddingRight":
        case "paddingTop":
        case "paddingBottom":
        case "marginLeft":
        case "marginRight":
        case "marginTop":
        case "marginBottom":
        obj.style[attr]=val+"px";
        break;
        case "opacity":
        obj.style[attr]=val;
        obj.style.filter="alpha(opacity="+val*100+")"
        break;
        case "scrollTop":
        obj.scrollTop=val;
        break;
        case 'color':
        case "background":
        case "backgroundColor":
        case 'borderBottomColor':
        case 'borderLeftColor':
        case 'borderRightColor':
        case 'borderTopColor':
        obj.style[attr]=val;
        break;
        default:
        obj.style[attr]=val;
        }
    }
  }

//颜色渐变动画
 //获得颜色
function getColor (color) {
  var str,r,g,b,arr;
  if(typeof color=="string"){
    //16 进制
    if(color.charAt(0)==="#"){
	  str=color.substring(1)
	  r=parseInt(str.substr(0,2),16);
	  g=parseInt(str.substr(2,2),16);
	  b=parseInt(str.substr(4,2),16);
	  arr=[r,g,b]
	  return arr;
	}else{
	  str=color.substring(4,color.length-1)
	  return str.split(",")
	}
  }
  if(color instanceof Array){
    return color;
  }
}

/*
  函数 colorAnimate (obj,attr,val,dur,fn,callback)
  obj   要处理的对象
  attr  要处理的属性  background   color
  val   最终颜色 rbg    #
  fn    动画的方式
  callback  变化完成之后要处理的内容
*/
function colorAnimate (obj,attr,val,dur,fn,callback) {
if(obj.time){
  clearInterval(obj.time);
}
 
  var fn=fn||Tween.Linear;
  var start=setCss(obj,attr);
  var end=getColor(val);
  var times=0,r,g,b;
 obj.time= setInterval(function  () {
	 if(times>=dur){
	   clearInterval(obj.time)
       obj.time=null;
		   if(callback){
	        callback()
	      }
		  
	 }else{
      r=fn(times,parseInt(start[0]),parseInt(end[0])-parseInt(start[0]),dur)
      g=fn(times,parseInt(start[1]),parseInt(end[1])-parseInt(start[1]),dur)
      b=fn(times,parseInt(start[2]),parseInt(end[2])-parseInt(start[2]),dur)	
		
      setCss(obj,attr,"rgb("+parseInt(r)+","+parseInt(g)+","+parseInt(b)+")")
      times+=60;
	   }
  },60)

}

//兼容的通过类名获取元素集合

function getClass(selector,obj) {	
	obj=obj||document
	if (obj.getElementsByClassName) {
		return obj.getElementsByClassName(selector);
	}else{
		var aarr=obj.getElementsByTagName("*");
		var obarr=[];
		for (var i = 0; i < aarr.length; i++) {
			if (check(aarr[i].className,selector)) {
				obarr.push(aarr[i])
			}
		}
		return obarr;
	}
}
function check (longstr,str) {
	var arr=longstr.split(" ");
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]==str) {
			return true;
		}
	};
	return false;
}


//兼容的获取或设置对象的文本信息
function getText (obj,value) {
	if (arguments.length==1) {
		if(obj.textContent!=undefined){
			return obj.textContent;
		}else{
			return obj.innerText;
		}
	}else if (arguments.length==2) {
		if(obj.textContent!=undefined){
			obj.textContent=value
		}else{
			obj.innerText=value;
		}
	}
}

//兼容的获取元素的样式
function getStyle(obj,attr){
	if (!obj.currentStyle) {
		return getComputedStyle(obj,null)[attr]
	}else{
		return obj.currentStyle[attr]
	}
}

//通过类名、标签名、ID 获取元素
function $(selector,obj) {
	obj=obj||document;
	if (typeof selector=="string") {
		if (selector.charAt(0)==".") {
			return getClass(selector.slice(1),obj)
		}else if(selector.charAt(0)=="#") {
			return obj.getElementById(selector.slice(1))
		}else{
			return obj.getElementsByTagName(selector)
		}
	}else if(typeof selector=="function") {
		addEvent(window,"load",function () {
			selector()
		})
	}
}

//获取一个元素节点的元素子节点
function getChildren(obj){
	var arr=obj.childNodes;
	var newarr=[]
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].nodeType==1) {
			newarr.push(arr[i])
		};
	};
	return newarr;
}

function getFirst(obj){
	return getChildren(obj)[0];
}
function getLast(obj){
	var arr=getChildren(obj);
	return arr[arr.length-1];
}
function getNext(obj){
	if (document.getElementsByClassName) {
		return obj.nextElementSibling
	}else{
		var next=obj.nextSibling
		if (next==null) {
			return null;
		}
		while(next.nodeType!=1){
			next=next.nextSibling
			if (next==null) {
				return null;
			}
		}
		return next;
	}
}

function getPrevious(obj){
	if (document.getElementsByClassName) {
		return obj.previousElementSibling
	}else{
		var previous=obj.previousSibling
		if (previous==null) {
			return null;
		}
		while(previous.nodeType!=1){
			previous=previous.previousSibling
			if (previous==null) {
				return null;
			}
		}
		return previous;
	}
}

function insertAfter(newobj,obj) {
	var parent=obj.parentNode(obj);
	var next=getNext(obj)
	if (next==null) {
		parent.appendChild(newobj)
	}else{
		parent.insertBefore(newobj,next)
	}
}

//获得浏览器窗口的高度、宽度
function offsetWindow(){
	var x=document.documentElement.clientWidth;
	var y=document.documentElement.clientHeight;
	return {width:x,height:y}
}

//元素的文档坐标
function getPosition(obj){

	var parent=obj.parentNode

	var left=obj.offsetLeft;
	var top=obj.offsetTop;

	while(parent.nodeName!="BODY"){

		if (getStyle(parent,"position")=="absolute"||getStyle(parent,"position")=="relative") {
			left+=(parent.offsetLeft+parseInt(getStyle(parent,"borderLeftWidth")))
			top+=(parent.offsetTop+parseInt(getStyle(parent,"borderTopWidth")))
		}
		parent=parent.parentNode
	}
	return {x:left,y:top}
}

/*兼容的绑定事件*/
/*添加*/
function addEvent (obj,event,callback) {
	if (obj.addEventListener) {
		obj.addEventListener(event,callback,false);
	}else{
		obj.attachEvent("on"+event,callback);
	}
}
/*删除*/
function removeEvent (obj,event,callback) {
	if (obj.removeEventListener) {
		obj.removeEventListener(event,callback,false);
	}else{
		obj.detachEvent("on"+event,callback);
	}
}

/*兼容的添加滚轮事件 并且可以区分上下滚动*/
function mouseWheel (obj,upfun,downfun) {
	if(document.attachEvent){
		//IE、 opera
			obj.attachEvent("onmousewheel",fun); 
		}else if(document.addEventListener){
		//chrome,safari -webkit-
			obj.addEventListener("mousewheel",fun,false);
		//firefox -moz-
			obj.addEventListener("DOMMouseScroll",fun,false);
	}
	//真正的事件处理函数
	function fun (e) {
		var ev=e||window.event;
		if (ev.detail==-3||ev.wheelDelta==120) {
			if (upfun) {
				//call 函数调用时传递一个参数，这个参数将作为函数中的this使用，并且只在当前调用有效果
				//传递参数e
				upfun.call(obj,ev);

				/*upfun.apply(obj,[e])*/
				/*与上面一样，参数传成数组形式*/
			}
		}else if (ev.detail==3||ev.wheelDelta==-120) {
			if (downfun) {
				downfun.call(obj,ev);
			}
		}
	}
}


 //判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
	if(parent.contains){
	   return parent.contains(child) && parent!=child;
	}else{
	  return (parent.compareDocumentPosition(child)===20);
	}
 }

 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；

function checkHover (e,target) {
 	if(getEvent(e).type=="mouseover"){
    	return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&!((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
	}else{
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&!((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
	}
}

//鼠标移入移除事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
  	if(overfun){
   		obj.onmouseover=function  (e) {
			if(checkHover(e,obj)){
		    	overfun.call(obj,e);
			}
    	}
  	}
  	if(outfun){
    	obj.onmouseout=function  (e) {
	  		if(checkHover(e,obj)){
	     		outfun.call(obj,e);
	  		}
    	}
  	}
}
 
function getEvent(e){
	return e||window.event;
}