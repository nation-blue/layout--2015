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
				upfun.call(obj,e);

				/*upfun.apply(obj,[e])*/
				/*与上面一样，参数传成数组形式*/

			}
		}else if (ev.detail==3||ev.wheelDelta==-120) {
			if (downfun) {
				downfun.call(obj,e);
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