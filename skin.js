// Garden Gnome Software - Skin
// Pano2VR pro 4.5.3/10717
// Filename: my profile.ggsk
// Generated Mon Jul 20 20:13:03 2015

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/left__o.png';
		preLoadImg.src=basePath + 'images/right__o.png';
		preLoadImg.src=basePath + 'images/up__o.png';
		preLoadImg.src=basePath + 'images/down__o.png';
		preLoadImg.src=basePath + 'images/zoom_in__o.png';
		preLoadImg.src=basePath + 'images/zoom_out__o.png';
		preLoadImg.src=basePath + 'images/auto_rotate__o.png';
		preLoadImg.src=basePath + 'images/stop_autorotation__o.png';
		preLoadImg.src=basePath + 'images/fullscreen__o.png';
		preLoadImg.src=basePath + 'images/exit_fullscreen__o.png';
		preLoadImg.src=basePath + 'images/button_1__o.png';
		preLoadImg.src=basePath + 'images/button_3__o.png';
		preLoadImg.src=basePath + 'images/button_12__o.png';
		preLoadImg.src=basePath + 'images/button_2__o.png';
		preLoadImg.src=basePath + 'images/button_4__o.png';
		preLoadImg.src=basePath + 'images/button_5__o.png';
		preLoadImg.src=basePath + 'images/button_6__o.png';
		preLoadImg.src=basePath + 'images/button_7__o.png';
		preLoadImg.src=basePath + 'images/button_10__o.png';
		preLoadImg.src=basePath + 'images/button_11__o.png';
		preLoadImg.src=basePath + 'images/button_8__o.png';
		preLoadImg.src=basePath + 'images/button_9__o.png';
	}
	
	this.addSkin=function() {
		this._toolbar=document.createElement('div');
		this._toolbar.ggId="toolbar";
		this._toolbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._toolbar.ggVisible=true;
		this._toolbar.className='ggskin ggskin_container';
		this._toolbar.ggType='container';
		this._toolbar.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-182 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-1 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -182px;';
		hs+='top:  -1px;';
		hs+='width: 277px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.75;';
		hs+='visibility: inherit;';
		this._toolbar.setAttribute('style',hs);
		this._left=document.createElement('div');
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_button';
		this._left.ggType='button';
		hs ='position:absolute;';
		hs+='left: -12px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_button';
		this._left__img.setAttribute('src',basePath + 'images/left.png');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._left__img.className='ggskin ggskin_button';
		this._left__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._left__img);
		this._left.appendChild(this._left__img);
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'images/left__o.png';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'images/left.png';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function () {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function () {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function () {
			me.elementMouseDown['left']=false;
		}
		this._toolbar.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_button';
		this._right.ggType='button';
		hs ='position:absolute;';
		hs+='left: 38px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_button';
		this._right__img.setAttribute('src',basePath + 'images/right.png');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._right__img.className='ggskin ggskin_button';
		this._right__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._right__img);
		this._right.appendChild(this._right__img);
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'images/right__o.png';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'images/right.png';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function () {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function () {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function () {
			me.elementMouseDown['right']=false;
		}
		this._toolbar.appendChild(this._right);
		this._up=document.createElement('div');
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_button';
		this._up.ggType='button';
		hs ='position:absolute;';
		hs+='left: 88px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_button';
		this._up__img.setAttribute('src',basePath + 'images/up.png');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._up__img.className='ggskin ggskin_button';
		this._up__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up__img);
		this._up.appendChild(this._up__img);
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'images/up__o.png';
		}
		this._up.onmouseout=function () {
			me._up__img.src=basePath + 'images/up.png';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function () {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function () {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function () {
			me.elementMouseDown['up']=false;
		}
		this._toolbar.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_button';
		this._down.ggType='button';
		hs ='position:absolute;';
		hs+='left: 138px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_button';
		this._down__img.setAttribute('src',basePath + 'images/down.png');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._down__img.className='ggskin ggskin_button';
		this._down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._down__img);
		this._down.appendChild(this._down__img);
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'images/down__o.png';
		}
		this._down.onmouseout=function () {
			me._down__img.src=basePath + 'images/down.png';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function () {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function () {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function () {
			me.elementMouseDown['down']=false;
		}
		this._toolbar.appendChild(this._down);
		this._zoom_in=document.createElement('div');
		this._zoom_in.ggId="zoom in";
		this._zoom_in.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_in.ggVisible=true;
		this._zoom_in.className='ggskin ggskin_button';
		this._zoom_in.ggType='button';
		hs ='position:absolute;';
		hs+='left: 188px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoom_in.setAttribute('style',hs);
		this._zoom_in__img=document.createElement('img');
		this._zoom_in__img.className='ggskin ggskin_button';
		this._zoom_in__img.setAttribute('src',basePath + 'images/zoom_in.png');
		this._zoom_in__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._zoom_in__img.className='ggskin ggskin_button';
		this._zoom_in__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoom_in__img);
		this._zoom_in.appendChild(this._zoom_in__img);
		this._zoom_in.onmouseover=function () {
			me._zoom_in__img.src=basePath + 'images/zoom_in__o.png';
		}
		this._zoom_in.onmouseout=function () {
			me._zoom_in__img.src=basePath + 'images/zoom_in.png';
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.onmousedown=function () {
			me.elementMouseDown['zoom_in']=true;
		}
		this._zoom_in.onmouseup=function () {
			me.elementMouseDown['zoom_in']=false;
		}
		this._zoom_in.ontouchend=function () {
			me.elementMouseDown['zoom_in']=false;
		}
		this._toolbar.appendChild(this._zoom_in);
		this._zoom_out=document.createElement('div');
		this._zoom_out.ggId="zoom out";
		this._zoom_out.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoom_out.ggVisible=true;
		this._zoom_out.className='ggskin ggskin_button';
		this._zoom_out.ggType='button';
		hs ='position:absolute;';
		hs+='left: 238px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._zoom_out.setAttribute('style',hs);
		this._zoom_out__img=document.createElement('img');
		this._zoom_out__img.className='ggskin ggskin_button';
		this._zoom_out__img.setAttribute('src',basePath + 'images/zoom_out.png');
		this._zoom_out__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._zoom_out__img.className='ggskin ggskin_button';
		this._zoom_out__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoom_out__img);
		this._zoom_out.appendChild(this._zoom_out__img);
		this._zoom_out.onmouseover=function () {
			me._zoom_out__img.src=basePath + 'images/zoom_out__o.png';
		}
		this._zoom_out.onmouseout=function () {
			me._zoom_out__img.src=basePath + 'images/zoom_out.png';
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.onmousedown=function () {
			me.elementMouseDown['zoom_out']=true;
		}
		this._zoom_out.onmouseup=function () {
			me.elementMouseDown['zoom_out']=false;
		}
		this._zoom_out.ontouchend=function () {
			me.elementMouseDown['zoom_out']=false;
		}
		this._toolbar.appendChild(this._zoom_out);
		this._auto_rotate=document.createElement('div');
		this._auto_rotate.ggId="auto rotate";
		this._auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._auto_rotate.ggVisible=true;
		this._auto_rotate.className='ggskin ggskin_button';
		this._auto_rotate.ggType='button';
		hs ='position:absolute;';
		hs+='left: 288px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._auto_rotate.setAttribute('style',hs);
		this._auto_rotate__img=document.createElement('img');
		this._auto_rotate__img.className='ggskin ggskin_button';
		this._auto_rotate__img.setAttribute('src',basePath + 'images/auto_rotate.png');
		this._auto_rotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._auto_rotate__img.className='ggskin ggskin_button';
		this._auto_rotate__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._auto_rotate__img);
		this._auto_rotate.appendChild(this._auto_rotate__img);
		this._auto_rotate.onclick=function () {
			me.player.toggleAutorotate();
			me._stop_autorotation.style[domTransition]='none';
			me._stop_autorotation.style.visibility='inherit';
			me._stop_autorotation.ggVisible=true;
			me._auto_rotate.style[domTransition]='none';
			me._auto_rotate.style.visibility='hidden';
			me._auto_rotate.ggVisible=false;
		}
		this._auto_rotate.onmouseover=function () {
			me._auto_rotate__img.src=basePath + 'images/auto_rotate__o.png';
		}
		this._auto_rotate.onmouseout=function () {
			me._auto_rotate__img.src=basePath + 'images/auto_rotate.png';
		}
		this._toolbar.appendChild(this._auto_rotate);
		this._stop_autorotation=document.createElement('div');
		this._stop_autorotation.ggId="stop autorotation";
		this._stop_autorotation.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stop_autorotation.ggVisible=false;
		this._stop_autorotation.className='ggskin ggskin_button';
		this._stop_autorotation.ggType='button';
		hs ='position:absolute;';
		hs+='left: 288px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._stop_autorotation.setAttribute('style',hs);
		this._stop_autorotation__img=document.createElement('img');
		this._stop_autorotation__img.className='ggskin ggskin_button';
		this._stop_autorotation__img.setAttribute('src',basePath + 'images/stop_autorotation.png');
		this._stop_autorotation__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._stop_autorotation__img.className='ggskin ggskin_button';
		this._stop_autorotation__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._stop_autorotation__img);
		this._stop_autorotation.appendChild(this._stop_autorotation__img);
		this._stop_autorotation.onclick=function () {
			me.player.stopAutorotate();
			me._auto_rotate.style[domTransition]='none';
			me._auto_rotate.style.visibility='inherit';
			me._auto_rotate.ggVisible=true;
			me._stop_autorotation.style[domTransition]='none';
			me._stop_autorotation.style.visibility='hidden';
			me._stop_autorotation.ggVisible=false;
		}
		this._stop_autorotation.onmouseover=function () {
			me._stop_autorotation__img.src=basePath + 'images/stop_autorotation__o.png';
		}
		this._stop_autorotation.onmouseout=function () {
			me._stop_autorotation__img.src=basePath + 'images/stop_autorotation.png';
		}
		this._toolbar.appendChild(this._stop_autorotation);
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_button';
		this._fullscreen.ggType='button';
		hs ='position:absolute;';
		hs+='left: 338px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_button';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.png');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._fullscreen__img.className='ggskin ggskin_button';
		this._fullscreen__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fullscreen__img);
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onclick=function () {
			me.player.toggleFullscreen();
			me._exit_fullscreen.style[domTransition]='none';
			me._exit_fullscreen.style.visibility='inherit';
			me._exit_fullscreen.ggVisible=true;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility='hidden';
			me._fullscreen.ggVisible=false;
		}
		this._fullscreen.onmouseover=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen__o.png';
		}
		this._fullscreen.onmouseout=function () {
			me._fullscreen__img.src=basePath + 'images/fullscreen.png';
		}
		this._toolbar.appendChild(this._fullscreen);
		this._exit_fullscreen=document.createElement('div');
		this._exit_fullscreen.ggId="exit fullscreen";
		this._exit_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._exit_fullscreen.ggVisible=false;
		this._exit_fullscreen.className='ggskin ggskin_button';
		this._exit_fullscreen.ggType='button';
		hs ='position:absolute;';
		hs+='left: 338px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._exit_fullscreen.setAttribute('style',hs);
		this._exit_fullscreen__img=document.createElement('img');
		this._exit_fullscreen__img.className='ggskin ggskin_button';
		this._exit_fullscreen__img.setAttribute('src',basePath + 'images/exit_fullscreen.png');
		this._exit_fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._exit_fullscreen__img.className='ggskin ggskin_button';
		this._exit_fullscreen__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._exit_fullscreen__img);
		this._exit_fullscreen.appendChild(this._exit_fullscreen__img);
		this._exit_fullscreen.onclick=function () {
			me.player.exitFullscreen();
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility='inherit';
			me._fullscreen.ggVisible=true;
			me._exit_fullscreen.style[domTransition]='none';
			me._exit_fullscreen.style.visibility='hidden';
			me._exit_fullscreen.ggVisible=false;
		}
		this._exit_fullscreen.onmouseover=function () {
			me._exit_fullscreen__img.src=basePath + 'images/exit_fullscreen__o.png';
		}
		this._exit_fullscreen.onmouseout=function () {
			me._exit_fullscreen__img.src=basePath + 'images/exit_fullscreen.png';
		}
		this._toolbar.appendChild(this._exit_fullscreen);
		this._button_1=document.createElement('div');
		this._button_1.ggId="Button 1";
		this._button_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1.ggVisible=true;
		this._button_1.className='ggskin ggskin_button';
		this._button_1.ggType='button';
		hs ='position:absolute;';
		hs+='left: -62px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_1.setAttribute('style',hs);
		this._button_1__img=document.createElement('img');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img.setAttribute('src',basePath + 'images/button_1.png');
		this._button_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_1__img.className='ggskin ggskin_button';
		this._button_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_1__img);
		this._button_1.appendChild(this._button_1__img);
		this._button_1.onclick=function () {
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='inherit';
			me._container_1.ggVisible=true;
			me._button_3.style[domTransition]='none';
			me._button_3.style.visibility='inherit';
			me._button_3.ggVisible=true;
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility='hidden';
			me._button_1.ggVisible=false;
		}
		this._button_1.onmouseover=function () {
			me._button_1__img.src=basePath + 'images/button_1__o.png';
		}
		this._button_1.onmouseout=function () {
			me._button_1__img.src=basePath + 'images/button_1.png';
		}
		this._toolbar.appendChild(this._button_1);
		this._button_3=document.createElement('div');
		this._button_3.ggId="Button 3";
		this._button_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_3.ggVisible=false;
		this._button_3.className='ggskin ggskin_button';
		this._button_3.ggType='button';
		hs ='position:absolute;';
		hs+='left: -62px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._button_3.setAttribute('style',hs);
		this._button_3__img=document.createElement('img');
		this._button_3__img.className='ggskin ggskin_button';
		this._button_3__img.setAttribute('src',basePath + 'images/button_3.png');
		this._button_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_3__img.className='ggskin ggskin_button';
		this._button_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_3__img);
		this._button_3.appendChild(this._button_3__img);
		this._button_3.onclick=function () {
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility='inherit';
			me._button_1.ggVisible=true;
			me._button_3.style[domTransition]='none';
			me._button_3.style.visibility='hidden';
			me._button_3.ggVisible=false;
		}
		this._button_3.onmouseover=function () {
			me._button_3__img.src=basePath + 'images/button_3__o.png';
		}
		this._button_3.onmouseout=function () {
			me._button_3__img.src=basePath + 'images/button_3.png';
		}
		this._toolbar.appendChild(this._button_3);
		this._button_12=document.createElement('div');
		this._button_12.ggId="Button 12";
		this._button_12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_12.ggVisible=true;
		this._button_12.className='ggskin ggskin_button';
		this._button_12.ggType='button';
		hs ='position:absolute;';
		hs+='left: 388px;';
		hs+='top:  0px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_12.setAttribute('style',hs);
		this._button_12__img=document.createElement('img');
		this._button_12__img.className='ggskin ggskin_button';
		this._button_12__img.setAttribute('src',basePath + 'images/button_12.png');
		this._button_12__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_12__img.className='ggskin ggskin_button';
		this._button_12__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_12__img);
		this._button_12.appendChild(this._button_12__img);
		this._button_12.onmouseover=function () {
			me._button_12__img.src=basePath + 'images/button_12__o.png';
		}
		this._button_12.onmouseout=function () {
			me._button_12__img.src=basePath + 'images/button_12.png';
			me.elementMouseDown['button_12']=false;
		}
		this._button_12.onmousedown=function () {
			me.elementMouseDown['button_12']=true;
		}
		this._button_12.onmouseup=function () {
			me.elementMouseDown['button_12']=false;
		}
		this._button_12.ontouchend=function () {
			me.elementMouseDown['button_12']=false;
		}
		this._toolbar.appendChild(this._button_12);
		this.divSkin.appendChild(this._toolbar);
		this._container_1=document.createElement('div');
		this._container_1.ggId="Container 1";
		this._container_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._container_1.ggVisible=false;
		this._container_1.className='ggskin ggskin_container';
		this._container_1.ggType='container';
		this._container_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-225 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-201 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -225px;';
		hs+='top:  -201px;';
		hs+='width: 500px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='overflow: hidden;';
		this._container_1.setAttribute('style',hs);
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=true;
		this._rectangle_1.className='ggskin ggskin_rectangle';
		this._rectangle_1.ggType='rectangle';
		this._rectangle_1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-257 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-100 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -257px;';
		hs+='top:  -100px;';
		hs+='width: 2006px;';
		hs+='height: 99px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.7;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		this._rectangle_1.setAttribute('style',hs);
		this._button_2=document.createElement('div');
		this._button_2.ggId="Button 2";
		this._button_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_2.ggVisible=true;
		this._button_2.className='ggskin ggskin_button';
		this._button_2.ggType='button';
		this._button_2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-967 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-40 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -966px;';
		hs+='top:  -39px;';
		hs+='width: 150px;';
		hs+='height: 75px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_2.setAttribute('style',hs);
		this._button_2__img=document.createElement('img');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img.setAttribute('src',basePath + 'images/button_2.png');
		this._button_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_2__img.className='ggskin ggskin_button';
		this._button_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_2__img);
		this._button_2.appendChild(this._button_2__img);
		this._button_2.onmouseover=function () {
			me._button_2__img.src=basePath + 'images/button_2__o.png';
		}
		this._button_2.onmouseout=function () {
			me._button_2__img.src=basePath + 'images/button_2.png';
			me.elementMouseDown['button_2']=false;
		}
		this._button_2.onmousedown=function () {
			me.elementMouseDown['button_2']=true;
		}
		this._button_2.onmouseup=function () {
			me.elementMouseDown['button_2']=false;
		}
		this._button_2.ontouchend=function () {
			me.elementMouseDown['button_2']=false;
		}
		this._rectangle_1.appendChild(this._button_2);
		this._button_4=document.createElement('div');
		this._button_4.ggId="Button 4";
		this._button_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_4.ggVisible=true;
		this._button_4.className='ggskin ggskin_button';
		this._button_4.ggType='button';
		this._button_4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-807 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-40 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -806px;';
		hs+='top:  -39px;';
		hs+='width: 150px;';
		hs+='height: 75px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_4.setAttribute('style',hs);
		this._button_4__img=document.createElement('img');
		this._button_4__img.className='ggskin ggskin_button';
		this._button_4__img.setAttribute('src',basePath + 'images/button_4.png');
		this._button_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_4__img.className='ggskin ggskin_button';
		this._button_4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_4__img);
		this._button_4.appendChild(this._button_4__img);
		this._button_4.onmouseover=function () {
			me._button_4__img.src=basePath + 'images/button_4__o.png';
		}
		this._button_4.onmouseout=function () {
			me._button_4__img.src=basePath + 'images/button_4.png';
			me.elementMouseDown['button_4']=false;
		}
		this._button_4.onmousedown=function () {
			me.elementMouseDown['button_4']=true;
		}
		this._button_4.onmouseup=function () {
			me.elementMouseDown['button_4']=false;
		}
		this._button_4.ontouchend=function () {
			me.elementMouseDown['button_4']=false;
		}
		this._rectangle_1.appendChild(this._button_4);
		this._button_5=document.createElement('div');
		this._button_5.ggId="Button 5";
		this._button_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_5.ggVisible=true;
		this._button_5.className='ggskin ggskin_button';
		this._button_5.ggType='button';
		this._button_5.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-647 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-40 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -646px;';
		hs+='top:  -39px;';
		hs+='width: 150px;';
		hs+='height: 75px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_5.setAttribute('style',hs);
		this._button_5__img=document.createElement('img');
		this._button_5__img.className='ggskin ggskin_button';
		this._button_5__img.setAttribute('src',basePath + 'images/button_5.png');
		this._button_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_5__img.className='ggskin ggskin_button';
		this._button_5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_5__img);
		this._button_5.appendChild(this._button_5__img);
		this._button_5.onmouseover=function () {
			me._button_5__img.src=basePath + 'images/button_5__o.png';
		}
		this._button_5.onmouseout=function () {
			me._button_5__img.src=basePath + 'images/button_5.png';
			me.elementMouseDown['button_5']=false;
		}
		this._button_5.onmousedown=function () {
			me.elementMouseDown['button_5']=true;
		}
		this._button_5.onmouseup=function () {
			me.elementMouseDown['button_5']=false;
		}
		this._button_5.ontouchend=function () {
			me.elementMouseDown['button_5']=false;
		}
		this._rectangle_1.appendChild(this._button_5);
		this._button_6=document.createElement('div');
		this._button_6.ggId="Button 6";
		this._button_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_6.ggVisible=true;
		this._button_6.className='ggskin ggskin_button';
		this._button_6.ggType='button';
		this._button_6.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-487 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-40 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -486px;';
		hs+='top:  -39px;';
		hs+='width: 150px;';
		hs+='height: 75px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_6.setAttribute('style',hs);
		this._button_6__img=document.createElement('img');
		this._button_6__img.className='ggskin ggskin_button';
		this._button_6__img.setAttribute('src',basePath + 'images/button_6.png');
		this._button_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_6__img.className='ggskin ggskin_button';
		this._button_6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_6__img);
		this._button_6.appendChild(this._button_6__img);
		this._button_6.onmouseover=function () {
			me._button_6__img.src=basePath + 'images/button_6__o.png';
		}
		this._button_6.onmouseout=function () {
			me._button_6__img.src=basePath + 'images/button_6.png';
			me.elementMouseDown['button_6']=false;
		}
		this._button_6.onmousedown=function () {
			me.elementMouseDown['button_6']=true;
		}
		this._button_6.onmouseup=function () {
			me.elementMouseDown['button_6']=false;
		}
		this._button_6.ontouchend=function () {
			me.elementMouseDown['button_6']=false;
		}
		this._rectangle_1.appendChild(this._button_6);
		this._button_7=document.createElement('div');
		this._button_7.ggId="Button 7";
		this._button_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_7.ggVisible=true;
		this._button_7.className='ggskin ggskin_button';
		this._button_7.ggType='button';
		this._button_7.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-327 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-40 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -326px;';
		hs+='top:  -39px;';
		hs+='width: 150px;';
		hs+='height: 75px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_7.setAttribute('style',hs);
		this._button_7__img=document.createElement('img');
		this._button_7__img.className='ggskin ggskin_button';
		this._button_7__img.setAttribute('src',basePath + 'images/button_7.png');
		this._button_7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_7__img.className='ggskin ggskin_button';
		this._button_7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_7__img);
		this._button_7.appendChild(this._button_7__img);
		this._button_7.onmouseover=function () {
			me._button_7__img.src=basePath + 'images/button_7__o.png';
		}
		this._button_7.onmouseout=function () {
			me._button_7__img.src=basePath + 'images/button_7.png';
			me.elementMouseDown['button_7']=false;
		}
		this._button_7.onmousedown=function () {
			me.elementMouseDown['button_7']=true;
		}
		this._button_7.onmouseup=function () {
			me.elementMouseDown['button_7']=false;
		}
		this._button_7.ontouchend=function () {
			me.elementMouseDown['button_7']=false;
		}
		this._rectangle_1.appendChild(this._button_7);
		this._container_1.appendChild(this._rectangle_1);
		this._button_10=document.createElement('div');
		this._button_10.ggId="Button 10";
		this._button_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_10.ggVisible=true;
		this._button_10.className='ggskin ggskin_button';
		this._button_10.ggType='button';
		this._button_10.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-35 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-63 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -35px;';
		hs+='top:  -63px;';
		hs+='width: 24px;';
		hs+='height: 24px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.75;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_10.setAttribute('style',hs);
		this._button_10__img=document.createElement('img');
		this._button_10__img.className='ggskin ggskin_button';
		this._button_10__img.setAttribute('src',basePath + 'images/button_10.png');
		this._button_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_10__img.className='ggskin ggskin_button';
		this._button_10__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_10__img);
		this._button_10.appendChild(this._button_10__img);
		this._button_10.onmouseover=function () {
			me._button_10__img.src=basePath + 'images/button_10__o.png';
		}
		this._button_10.onmouseout=function () {
			me._button_10__img.src=basePath + 'images/button_10.png';
			me.elementMouseDown['button_10']=false;
		}
		this._button_10.onmousedown=function () {
			me.elementMouseDown['button_10']=true;
		}
		this._button_10.onmouseup=function () {
			me.elementMouseDown['button_10']=false;
		}
		this._button_10.ontouchend=function () {
			me.elementMouseDown['button_10']=false;
		}
		this._container_1.appendChild(this._button_10);
		this._button_11=document.createElement('div');
		this._button_11.ggId="Button 11";
		this._button_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_11.ggVisible=true;
		this._button_11.className='ggskin ggskin_button';
		this._button_11.ggType='button';
		this._button_11.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-63 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -63px;';
		hs+='width: 24px;';
		hs+='height: 24px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.75;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_11.setAttribute('style',hs);
		this._button_11__img=document.createElement('img');
		this._button_11__img.className='ggskin ggskin_button';
		this._button_11__img.setAttribute('src',basePath + 'images/button_11.png');
		this._button_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_11__img.className='ggskin ggskin_button';
		this._button_11__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_11__img);
		this._button_11.appendChild(this._button_11__img);
		this._button_11.onmouseover=function () {
			me._button_11__img.src=basePath + 'images/button_11__o.png';
		}
		this._button_11.onmouseout=function () {
			me._button_11__img.src=basePath + 'images/button_11.png';
			me.elementMouseDown['button_11']=false;
		}
		this._button_11.onmousedown=function () {
			me.elementMouseDown['button_11']=true;
		}
		this._button_11.onmouseup=function () {
			me.elementMouseDown['button_11']=false;
		}
		this._button_11.ontouchend=function () {
			me.elementMouseDown['button_11']=false;
		}
		this._container_1.appendChild(this._button_11);
		this.divSkin.appendChild(this._container_1);
		this._button_8=document.createElement('div');
		this._button_8.ggId="Button 8";
		this._button_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_8.ggVisible=true;
		this._button_8.className='ggskin ggskin_button';
		this._button_8.ggType='button';
		this._button_8.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-10 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-25 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -10px;';
		hs+='top:  -25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.75;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_8.setAttribute('style',hs);
		this._button_8__img=document.createElement('img');
		this._button_8__img.className='ggskin ggskin_button';
		this._button_8__img.setAttribute('src',basePath + 'images/button_8.png');
		this._button_8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_8__img.className='ggskin ggskin_button';
		this._button_8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_8__img);
		this._button_8.appendChild(this._button_8__img);
		this._button_8.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._toolbar.style[domTransition]='none';
			} else {
				me._toolbar.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._toolbar.ggParameter.rx=0;me._toolbar.ggParameter.ry=-70;
			me._toolbar.style[domTransform]=parameterToTransform(me._toolbar.ggParameter);
			me._button_9.style[domTransition]='none';
			me._button_9.style.visibility='inherit';
			me._button_9.ggVisible=true;
			me._button_8.style[domTransition]='none';
			me._button_8.style.visibility='hidden';
			me._button_8.ggVisible=false;
		}
		this._button_8.onmouseover=function () {
			me._button_8__img.src=basePath + 'images/button_8__o.png';
		}
		this._button_8.onmouseout=function () {
			me._button_8__img.src=basePath + 'images/button_8.png';
		}
		this.divSkin.appendChild(this._button_8);
		this._button_9=document.createElement('div');
		this._button_9.ggId="Button 9";
		this._button_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_9.ggVisible=false;
		this._button_9.className='ggskin ggskin_button';
		this._button_9.ggType='button';
		this._button_9.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-10 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-25 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -10px;';
		hs+='top:  -25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.75;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._button_9.setAttribute('style',hs);
		this._button_9__img=document.createElement('img');
		this._button_9__img.className='ggskin ggskin_button';
		this._button_9__img.setAttribute('src',basePath + 'images/button_9.png');
		this._button_9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._button_9__img.className='ggskin ggskin_button';
		this._button_9__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._button_9__img);
		this._button_9.appendChild(this._button_9__img);
		this._button_9.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._toolbar.style[domTransition]='none';
			} else {
				me._toolbar.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._toolbar.ggParameter.rx=0;me._toolbar.ggParameter.ry=70;
			me._toolbar.style[domTransform]=parameterToTransform(me._toolbar.ggParameter);
			me._button_8.style[domTransition]='none';
			me._button_8.style.visibility='inherit';
			me._button_8.ggVisible=true;
			me._button_9.style[domTransition]='none';
			me._button_9.style.visibility='hidden';
			me._button_9.ggVisible=false;
		}
		this._button_9.onmouseover=function () {
			me._button_9__img.src=basePath + 'images/button_9__o.png';
		}
		this._button_9.onmouseout=function () {
			me._button_9__img.src=basePath + 'images/button_9.png';
		}
		this.divSkin.appendChild(this._button_9);
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			me.player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['button_12']) {
			me.player.moveToDefaultView(1);
		}
		if (me.elementMouseDown['button_2']) {
			me.player.openNext("{node1}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility='inherit';
			me._button_1.ggVisible=true;
			me._button_3.style[domTransition]='none';
			me._button_3.style.visibility='hidden';
			me._button_3.ggVisible=false;
		}
		if (me.elementMouseDown['button_4']) {
			me.player.openNext("{node2}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility='inherit';
			me._button_1.ggVisible=true;
			me._button_3.style[domTransition]='none';
			me._button_3.style.visibility='hidden';
			me._button_3.ggVisible=false;
		}
		if (me.elementMouseDown['button_5']) {
			me.player.openNext("{node3}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility='inherit';
			me._button_1.ggVisible=true;
			me._button_3.style[domTransition]='none';
			me._button_3.style.visibility='hidden';
			me._button_3.ggVisible=false;
		}
		if (me.elementMouseDown['button_6']) {
			me.player.openNext("{node4}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility='inherit';
			me._button_1.ggVisible=true;
			me._button_3.style[domTransition]='none';
			me._button_3.style.visibility='hidden';
			me._button_3.ggVisible=false;
		}
		if (me.elementMouseDown['button_7']) {
			me.player.openNext("{node5}","");
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility='inherit';
			me._button_1.ggVisible=true;
			me._button_3.style[domTransition]='none';
			me._button_3.style.visibility='hidden';
			me._button_3.ggVisible=false;
		}
		if (me.elementMouseDown['button_10']) {
			me._rectangle_1.style[domTransition]='none';
			me._rectangle_1.ggParameter.rx+=-10;me._rectangle_1.ggParameter.ry+=0;
			if (me._rectangle_1.ggParameter.rx<-620) me._rectangle_1.ggParameter.rx=-620;
			me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
		}
		if (me.elementMouseDown['button_11']) {
			me._rectangle_1.style[domTransition]='none';
			me._rectangle_1.ggParameter.rx+=10;me._rectangle_1.ggParameter.ry+=0;
			if (me._rectangle_1.ggParameter.rx>0) me._rectangle_1.ggParameter.rx=0;
			me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
		}
	};
	this.addSkin();
};