(self.webpackChunkpresent_ionic_react=self.webpackChunkpresent_ionic_react||[]).push([[1402],{1402:(t,e,n)=>{"use strict";n.r(e),n.d(e,{GESTURE_CONTROLLER:()=>i.G,createGesture:()=>a});var r,i=n(6221),o=function(t,e,n,r){var i,o,u=c(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return t.__zone_symbol__addEventListener?(i="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(i="addEventListener",o="removeEventListener"),t[i](e,n,u),function(){t[o](e,n,u)}},c=function(t){if(void 0===r)try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",(function(){}),e)}catch(t){r=!1}return!!r},u=function(t){return t instanceof Document?t:t.ownerDocument},a=function(t){var e=!1,n=!1,r=!0,c=!1,a=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),d=a.canStart,f=a.onWillStart,m=a.onStart,p=a.onEnd,y=a.notCaptured,X=a.onMove,h=a.threshold,Y=a.passive,_=a.blurOnStart,b={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},g=function(t,e,n){var r=n*(Math.PI/180),i="x"===t,o=Math.cos(r),c=e*e,u=0,a=0,s=!1,v=0;return{start:function(t,e){u=t,a=e,v=0,s=!0},detect:function(t,e){if(!s)return!1;var n=t-u,r=e-a,l=n*n+r*r;if(l<c)return!1;var d=Math.sqrt(l),f=(i?n:r)/d;return v=f>o?1:f<-o?-1:0,s=!1,!0},isGesture:function(){return 0!==v},getDirection:function(){return v}}}(a.direction,a.threshold,a.maxAngle),T=i.G.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),E=function(){e&&(c=!1,X&&X(b))},S=function(){return!(T&&!T.capture()||(e=!0,r=!1,b.startX=b.currentX,b.startY=b.currentY,b.startTime=b.currentTime,f?f(b).then(L):L(),0))},L=function(){_&&function(){if("undefined"!=typeof document){var t=document.activeElement;null!==t&&t.blur&&t.blur()}}(),m&&m(b),r=!0},w=function(){e=!1,n=!1,c=!1,r=!0,T.release()},G=function(t){var n=e,i=r;w(),i&&(s(b,t),n?p&&p(b):y&&y(b))},D=function(t,e,n,r,i){var c,a,s,v,l,d,f,m=0,p=function(r){m=Date.now()+2e3,e(r)&&(!a&&n&&(a=o(t,"touchmove",n,i)),s||(s=o(t,"touchend",X,i)),v||(v=o(t,"touchcancel",X,i)))},y=function(r){m>Date.now()||e(r)&&(!d&&n&&(d=o(u(t),"mousemove",n,i)),f||(f=o(u(t),"mouseup",h,i)))},X=function(t){Y(),r&&r(t)},h=function(t){_(),r&&r(t)},Y=function(){a&&a(),s&&s(),v&&v(),a=s=v=void 0},_=function(){d&&d(),f&&f(),d=f=void 0},b=function(){Y(),_()},g=function(e){void 0===e&&(e=!0),e?(c||(c=o(t,"touchstart",p,i)),l||(l=o(t,"mousedown",y,i))):(c&&c(),l&&l(),c=l=void 0,b())};return{enable:g,stop:b,destroy:function(){g(!1),r=n=e=void 0}}}(a.el,(function(t){var e=l(t);return!(n||!r)&&(v(t,b),b.startX=b.currentX,b.startY=b.currentY,b.startTime=b.currentTime=e,b.velocityX=b.velocityY=b.deltaX=b.deltaY=0,b.event=t,(!d||!1!==d(b))&&(T.release(),!!T.start()&&(n=!0,0===h?S():(g.start(b.startX,b.startY),!0))))}),(function(t){e?!c&&r&&(c=!0,s(b,t),requestAnimationFrame(E)):(s(b,t),g.detect(b.currentX,b.currentY)&&(g.isGesture()&&S()||O()))}),G,{capture:!1,passive:Y}),O=function(){w(),D.stop(),y&&y(b)};return{enable:function(t){void 0===t&&(t=!0),t||(e&&G(void 0),w()),D.enable(t)},destroy:function(){T.destroy(),D.destroy()}}},s=function(t,e){if(e){var n=t.currentX,r=t.currentY,i=t.currentTime;v(e,t);var o=t.currentX,c=t.currentY,u=(t.currentTime=l(e))-i;if(u>0&&u<100){var a=(o-n)/u,s=(c-r)/u;t.velocityX=.7*a+.3*t.velocityX,t.velocityY=.7*s+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=c-t.startY,t.event=e}},v=function(t,e){var n=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];n=o.clientX,r=o.clientY}else void 0!==t.pageX&&(n=t.pageX,r=t.pageY)}e.currentX=n,e.currentY=r},l=function(t){return t.timeStamp||Date.now()}}}]);