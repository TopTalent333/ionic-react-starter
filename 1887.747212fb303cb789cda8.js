(self.webpackChunkpresent_ionic_react=self.webpackChunkpresent_ionic_react||[]).push([[1887],{2456:(n,t,i)=>{"use strict";i.d(t,{c:()=>d});var e,o=i(655),r=i(8873),a=function(n){return n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()},u=function(n){if(void 0===e){var t=void 0!==n.style.animationName,i=void 0!==n.style.webkitAnimationName;e=!t&&i?"-webkit-":""}return e},f=function(n,t,i){var e=t.startsWith("animation")?u(n):"";n.style.setProperty(e+t,i)},c=function(n,t){var i=t.startsWith("animation")?u(n):"";n.style.removeProperty(i+t)},s=[],l=function(n,t){if(void 0===n&&(n=[]),void 0!==t){var i=Array.isArray(t)?t:[t];return(0,o.pr)(n,i)}return n},d=function(n){var t,i,e,d,m,v,h,p,g,y,E,b,A,C=[],k=[],T=[],w=!1,S={},P=[],x=[],D={},F=0,L=!1,R=!1,N=!0,O=!1,W=!0,z=n,Y=[],_=[],I=[],j=[],q=[],M=[],$=[],K=[],Z=[],B=[],G="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,H="function"==typeof Element&&"function"==typeof Element.prototype.animate&&G,J=function(n,t){return(t&&t.oneTimeCallback?_:Y).push({c:n,o:t}),A},Q=function(){if(H)B.forEach((function(n){n.cancel()})),B.length=0;else{var n=I.slice();(0,r.r)((function(){n.forEach((function(n){c(n,"animation-name"),c(n,"animation-duration"),c(n,"animation-timing-function"),c(n,"animation-iteration-count"),c(n,"animation-delay"),c(n,"animation-play-state"),c(n,"animation-fill-mode"),c(n,"animation-direction")}))}))}},U=function(){q.forEach((function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})),q.length=0},V=function(){return void 0!==m?m:h?h.getFill():"both"},X=function(){return void 0!==g?g:void 0!==v?v:h?h.getDirection():"normal"},nn=function(){return L?"linear":void 0!==e?e:h?h.getEasing():"linear"},tn=function(){return R?0:void 0!==y?y:void 0!==i?i:h?h.getDuration():0},en=function(){return void 0!==d?d:h?h.getIterations():1},on=function(){return void 0!==E?E:void 0!==t?t:h?h.getDelay():0},rn=function(){0!==F&&0==--F&&(function(){vn(),K.forEach((function(n){return n()})),Z.forEach((function(n){return n()}));var n=N?1:0,t=P,i=x,e=D;I.forEach((function(n){var o=n.classList;for(var r in t.forEach((function(n){return o.add(n)})),i.forEach((function(n){return o.remove(n)})),e)e.hasOwnProperty(r)&&f(n,r,e[r])})),Y.forEach((function(t){return t.c(n,A)})),_.forEach((function(t){return t.c(n,A)})),_.length=0,W=!0,N&&(O=!0),N=!0}(),h&&h.animationFinish())},an=function(t){void 0===t&&(t=!0),U();var i=function(n){return n.forEach((function(n){for(var t in n)if(n.hasOwnProperty(t)){var i,e=n[t];"easing"===t?(n[i="animation-timing-function"]=e,delete n[t]):(i=a(t))!==t&&(n[i]=e,delete n[t])}})),n}(C);I.forEach((function(e){if(i.length>0){var o=function(n){return void 0===n&&(n=[]),n.map((function(n){var t=n.offset,i=[];for(var e in n)n.hasOwnProperty(e)&&"offset"!==e&&i.push(e+": "+n[e]+";");return 100*t+"% { "+i.join(" ")+" }"})).join(" ")}(i),a=function(n,t,i){var e=function(n){var t=n.getRootNode();return t.head||t}(i),o=u(i),r=e.querySelector("#"+n);if(r)return r;var a=(i.ownerDocument||document).createElement("style");return a.id=n,a.textContent="@"+o+"keyframes "+n+" { "+t+" } @"+o+"keyframes "+n+"-alt { "+t+" }",e.appendChild(a),a}(b=void 0!==n?n:function(n){var t=s.indexOf(n);return t<0&&(t=s.push(n)-1),"ion-animation-"+t}(o),o,e);q.push(a),f(e,"animation-duration",tn()+"ms"),f(e,"animation-timing-function",nn()),f(e,"animation-delay",on()+"ms"),f(e,"animation-fill-mode",V()),f(e,"animation-direction",X());var c=en()===1/0?"infinite":en().toString();f(e,"animation-iteration-count",c),f(e,"animation-play-state","paused"),t&&f(e,"animation-name",a.id+"-alt"),(0,r.r)((function(){f(e,"animation-name",a.id||null)}))}}))},un=function(n){void 0===n&&(n=!0),function(){M.forEach((function(n){return n()})),$.forEach((function(n){return n()}));var n=k,t=T,i=S;I.forEach((function(e){var o=e.classList;for(var r in n.forEach((function(n){return o.add(n)})),t.forEach((function(n){return o.remove(n)})),i)i.hasOwnProperty(r)&&f(e,r,i[r])}))}(),C.length>0&&(H?(I.forEach((function(n){var t=n.animate(C,{id:z,delay:on(),duration:tn(),easing:nn(),iterations:en(),fill:V(),direction:X()});t.pause(),B.push(t)})),B.length>0&&(B[0].onfinish=function(){rn()})):an(n)),w=!0},fn=function(n){if(n=Math.min(Math.max(n,0),.9999),H)B.forEach((function(t){t.currentTime=t.effect.getComputedTiming().delay+tn()*n,t.pause()}));else{var t="-"+tn()*n+"ms";I.forEach((function(n){C.length>0&&(f(n,"animation-delay",t),f(n,"animation-play-state","paused"))}))}},cn=function(n){B.forEach((function(n){n.effect.updateTiming({delay:on(),duration:tn(),easing:nn(),iterations:en(),fill:V(),direction:X()})})),void 0!==n&&fn(n)},sn=function(n,t){void 0===n&&(n=!0),(0,r.r)((function(){I.forEach((function(i){f(i,"animation-name",b||null),f(i,"animation-duration",tn()+"ms"),f(i,"animation-timing-function",nn()),f(i,"animation-delay",void 0!==t?"-"+t*tn()+"ms":on()+"ms"),f(i,"animation-fill-mode",V()||null),f(i,"animation-direction",X()||null);var e=en()===1/0?"infinite":en().toString();f(i,"animation-iteration-count",e),n&&f(i,"animation-name",b+"-alt"),(0,r.r)((function(){f(i,"animation-name",b||null)}))}))}))},ln=function(n,t,i){return void 0===n&&(n=!1),void 0===t&&(t=!0),n&&j.forEach((function(e){e.update(n,t,i)})),H?cn(i):sn(t,i),A},dn=function(){w&&(H?B.forEach((function(n){n.pause()})):I.forEach((function(n){f(n,"animation-play-state","paused")})))},mn=function(){p=void 0,rn()},vn=function(){p&&clearTimeout(p)},hn=function(n){return new Promise((function(t){n&&n.sync&&(R=!0,J((function(){return R=!1}),{oneTimeCallback:!0})),w||un(),O&&(H?(fn(0),cn()):sn(),O=!1),W&&(F=j.length+1,W=!1),J((function(){return t()}),{oneTimeCallback:!0}),j.forEach((function(n){n.play()})),H?(B.forEach((function(n){n.play()})),0!==C.length&&0!==I.length||rn()):function(){if(vn(),(0,r.r)((function(){I.forEach((function(n){C.length>0&&f(n,"animation-play-state","running")}))})),0===C.length||0===I.length)rn();else{var n=on()||0,t=tn()||0,i=en()||1;isFinite(i)&&(p=setTimeout(mn,n+t*i+100)),function(n,t){var i,e={passive:!0},o=function(){i&&i()},a=function(t){n===t.target&&(o(),vn(),(0,r.r)((function(){I.forEach((function(n){c(n,"animation-duration"),c(n,"animation-delay"),c(n,"animation-play-state")})),(0,r.r)(rn)})))};n&&(n.addEventListener("webkitAnimationEnd",a,e),n.addEventListener("animationend",a,e),i=function(){n.removeEventListener("webkitAnimationEnd",a,e),n.removeEventListener("animationend",a,e)})}(I[0])}}()}))},pn=function(n,t){var i,e=C[0];return void 0===e||void 0!==e.offset&&0!==e.offset?C=(0,o.pr)([(i={offset:0},i[n]=t,i)],C):e[n]=t,A};return A={parentAnimation:h,elements:I,childAnimations:j,id:z,animationFinish:rn,from:pn,to:function(n,t){var i,e=C[C.length-1];return void 0===e||void 0!==e.offset&&1!==e.offset?C=(0,o.pr)(C,[(i={offset:1},i[n]=t,i)]):e[n]=t,A},fromTo:function(n,t,i){return pn(n,t).to(n,i)},parent:function(n){return h=n,A},play:hn,pause:function(){return j.forEach((function(n){n.pause()})),dn(),A},stop:function(){j.forEach((function(n){n.stop()})),w&&(Q(),w=!1),L=!1,R=!1,W=!0,g=void 0,y=void 0,E=void 0,F=0,O=!1,N=!0},destroy:function(n){return j.forEach((function(t){t.destroy(n)})),function(n){Q(),n&&U()}(n),I.length=0,j.length=0,C.length=0,Y.length=0,_.length=0,w=!1,W=!0,A},keyframes:function(n){return C=n,A},addAnimation:function(n){if(null!=n)if(Array.isArray(n))for(var t=0,i=n;t<i.length;t++){var e=i[t];e.parent(A),j.push(e)}else n.parent(A),j.push(n);return A},addElement:function(n){if(null!=n)if(1===n.nodeType)I.push(n);else if(n.length>=0)for(var t=0;t<n.length;t++)I.push(n[t]);else console.error("Invalid addElement value");return A},update:ln,fill:function(n){return m=n,ln(!0),A},direction:function(n){return v=n,ln(!0),A},iterations:function(n){return d=n,ln(!0),A},duration:function(n){return H||0!==n||(n=1),i=n,ln(!0),A},easing:function(n){return e=n,ln(!0),A},delay:function(n){return t=n,ln(!0),A},getWebAnimations:function(){return B},getKeyframes:function(){return C},getFill:V,getDirection:X,getDelay:on,getIterations:en,getEasing:nn,getDuration:tn,afterAddRead:function(n){return K.push(n),A},afterAddWrite:function(n){return Z.push(n),A},afterClearStyles:function(n){void 0===n&&(n=[]);for(var t=0,i=n;t<i.length;t++){var e=i[t];D[e]=""}return A},afterStyles:function(n){return void 0===n&&(n={}),D=n,A},afterRemoveClass:function(n){return x=l(x,n),A},afterAddClass:function(n){return P=l(P,n),A},beforeAddRead:function(n){return M.push(n),A},beforeAddWrite:function(n){return $.push(n),A},beforeClearStyles:function(n){void 0===n&&(n=[]);for(var t=0,i=n;t<i.length;t++){var e=i[t];S[e]=""}return A},beforeStyles:function(n){return void 0===n&&(n={}),S=n,A},beforeRemoveClass:function(n){return T=l(T,n),A},beforeAddClass:function(n){return k=l(k,n),A},onFinish:J,progressStart:function(n,t){return void 0===n&&(n=!1),j.forEach((function(i){i.progressStart(n,t)})),dn(),L=n,w?ln(!1,!0,t):un(),A},progressStep:function(n){return j.forEach((function(t){t.progressStep(n)})),fn(n),A},progressEnd:function(n,t,i){return L=!1,j.forEach((function(e){e.progressEnd(n,t,i)})),void 0!==i&&(y=i),O=!1,N=!0,0===n?("reverse"==(g="reverse"===X()?"normal":"reverse")&&(N=!1),H?(ln(),fn(1-t)):(E=(1-t)*tn()*-1,ln(!1,!1))):1===n&&(H?(ln(),fn(t)):(E=t*tn()*-1,ln(!1,!1))),void 0!==n&&(J((function(){y=void 0,g=void 0,E=void 0}),{oneTimeCallback:!0}),h||hn()),A}}}},1887:(n,t,i)=>{"use strict";i.r(t),i.d(t,{mdTransitionAnimation:()=>r}),i(3495),i(8873);var e=i(2456),o=i(946),r=function(n,t){var i="back"===t.direction,r=t.enteringEl,a=t.leavingEl,u=(0,o.g)(r),f=u.querySelector("ion-toolbar"),c=(0,e.c)();if(c.addElement(u).fill("both").beforeRemoveClass("ion-page-invisible"),i?c.duration(t.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):c.duration(t.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),f){var s=(0,e.c)();s.addElement(f),c.addAnimation(s)}if(a&&i){c.duration(t.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var l=(0,e.c)();l.addElement((0,o.g)(a)).onFinish((function(n){1===n&&l.elements.length>0&&l.elements[0].style.setProperty("display","none")})).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),c.addAnimation(l)}return c}}}]);