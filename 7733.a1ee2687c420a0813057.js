(self.webpackChunkpresent_ionic_react=self.webpackChunkpresent_ionic_react||[]).push([[7733],{8873:(o,t,n)=>{"use strict";n.d(t,{a:()=>i,b:()=>e,c:()=>d,d:()=>f,e:()=>u,f:()=>c,g:()=>a,h:()=>l,i:()=>b,j:()=>g,k:()=>v,n:()=>h,p:()=>p,r:()=>s});var r=n(655),i=function(o,t,n,r){if("undefined"!=typeof window){var i=window,e=i&&i.Ionic&&i.Ionic.config;if(e){var a=e.get("_ael");if(a)return a(o,t,n,r);if(e._ael)return e._ael(o,t,n,r)}}return o.addEventListener(t,n,r)},e=function(o,t,n,r){if("undefined"!=typeof window){var i=window,e=i&&i.Ionic&&i.Ionic.config;if(e){var a=e.get("_rel");if(a)return a(o,t,n,r);if(e._rel)return e._rel(o,t,n,r)}}return o.removeEventListener(t,n,r)},a=function(o,t){return void 0===t&&(t=o),o.shadowRoot||t},s=function(o){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(o):"function"==typeof requestAnimationFrame?requestAnimationFrame(o):setTimeout(o)},l=function(o){return!!o.shadowRoot&&!!o.attachShadow},c=function(o){var t=o.closest("ion-item");return t?t.querySelector("ion-label"):null},d=function(o,t,n,r,i){if(o||l(t)){var e=t.querySelector("input.aux-input");e||((e=t.ownerDocument.createElement("input")).type="hidden",e.classList.add("aux-input"),t.appendChild(e)),e.disabled=i,e.name=n,e.value=r||""}},u=function(o,t,n){return Math.max(o,Math.min(t,n))},b=function(o,t){if(!o){var n="ASSERT: "+t;throw console.error(n),new Error(n)}},h=function(o){return o.timeStamp||Date.now()},p=function(o){if(o){var t=o.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}if(void 0!==o.pageX)return{x:o.pageX,y:o.pageY}}return{x:0,y:0}},g=function(o){var t="rtl"===document.dir;switch(o){case"start":return t;case"end":return!t;default:throw new Error('"'+o+'" is not a valid value for [side]. Use "start" or "end" instead.')}},f=function(o,t){var n=o._original||o;return{_original:o,emit:v(n.emit.bind(n),t)}},v=function(o,t){var n;return void 0===t&&(t=0),function(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];clearTimeout(n),n=setTimeout.apply(void 0,(0,r.pr)([o,t],i))}}},7733:(o,t,n)=>{"use strict";n.r(t),n.d(t,{ion_button:()=>h,ion_icon:()=>v});var r,i=n(3495),e=n(5751),a=n(8873),s=n(3262),l=function(o,t,n,r,i){return n="ios"===(n&&b(n))?"ios":"md",r&&"ios"===n?o=b(r):i&&"md"===n?o=b(i):(o||!t||d(t)||(o=t),u(o)&&(o=b(o))),u(o)&&""!==o.trim()?""!==o.replace(/[a-z]|-|\d/gi,"")?null:o:null},c=function(o){return u(o)&&(o=o.trim(),d(o))?o:null},d=function(o){return o.length>0&&/(\/|\.)/.test(o)},u=function(o){return"string"==typeof o},b=function(o){return o.toLowerCase()},h=function(){function o(o){var t=this;(0,i.r)(this,o),this.ionFocus=(0,i.e)(this,"ionFocus",7),this.ionBlur=(0,i.e)(this,"ionBlur",7),this.inItem=!1,this.inListHeader=!1,this.inToolbar=!1,this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.handleClick=function(o){if("button"===t.type)(0,s.o)(t.href,o,t.routerDirection,t.routerAnimation);else if((0,a.h)(t.el)){var n=t.el.closest("form");if(n){o.preventDefault();var r=document.createElement("button");r.type=t.type,r.style.display="none",n.appendChild(r),r.click(),r.remove()}}},this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()}}return o.prototype.componentWillLoad=function(){this.inToolbar=!!this.el.closest("ion-buttons"),this.inListHeader=!!this.el.closest("ion-list-header"),this.inItem=!!this.el.closest("ion-item")||!!this.el.closest("ion-item-divider")},Object.defineProperty(o.prototype,"hasIconOnly",{get:function(){return!!this.el.querySelector('[slot="icon-only"]')},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"rippleType",{get:function(){return(void 0===this.fill||"clear"===this.fill)&&this.hasIconOnly&&this.inToolbar?"unbounded":"bounded"},enumerable:!1,configurable:!0}),o.prototype.render=function(){var o,t=(0,e.b)(this),n=this,r=n.buttonType,a=n.type,l=n.disabled,c=n.rel,d=n.target,u=n.size,b=n.href,h=n.color,p=n.expand,g=n.hasIconOnly,f=n.shape,v=n.strong,m=void 0===u&&this.inItem?"small":u,y=void 0===b?"button":"a",k="button"===y?{type:a}:{download:this.download,href:b,rel:c,target:d},w=this.fill;return void 0===w&&(w=this.inToolbar||this.inListHeader?"clear":"solid"),(0,i.h)(i.H,{onClick:this.handleClick,"aria-disabled":l?"true":null,class:(0,s.c)(h,(o={},o[t]=!0,o[r]=!0,o[r+"-"+p]=void 0!==p,o[r+"-"+m]=void 0!==m,o[r+"-"+f]=void 0!==f,o[r+"-"+w]=!0,o[r+"-strong"]=v,o["in-toolbar"]=(0,s.h)("ion-toolbar",this.el),o["in-toolbar-color"]=(0,s.h)("ion-toolbar[color]",this.el),o["button-has-icon-only"]=g,o["button-disabled"]=l,o["ion-activatable"]=!0,o["ion-focusable"]=!0,o))},(0,i.h)(y,Object.assign({},k,{class:"button-native",part:"native",disabled:l,onFocus:this.onFocus,onBlur:this.onBlur}),(0,i.h)("span",{class:"button-inner"},(0,i.h)("slot",{name:"icon-only"}),(0,i.h)("slot",{name:"start"}),(0,i.h)("slot",null),(0,i.h)("slot",{name:"end"})),"md"===t&&(0,i.h)("ion-ripple-effect",{type:this.rippleType})))},Object.defineProperty(o.prototype,"el",{get:function(){return(0,i.i)(this)},enumerable:!1,configurable:!0}),o}();h.style={ios:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-0.03em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:normal;letter-spacing:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:hover),:host(.button-outline:hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native::after{background:#fff;opacity:0.1}}',md:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast);opacity:0.24}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base);opacity:0.12}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast);opacity:0.08}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base);opacity:0.04}}'};var p=function(o){if(1===o.nodeType){if("script"===o.nodeName.toLowerCase())return!1;for(var t=0;t<o.attributes.length;t++){var n=o.attributes[t].value;if(u(n)&&0===n.toLowerCase().indexOf("on"))return!1}for(t=0;t<o.childNodes.length;t++)if(!p(o.childNodes[t]))return!1}return!0},g=new Map,f=new Map,v=function(){function o(o){(0,i.r)(this,o),this.isVisible=!1,this.mode=m(),this.lazy=!1}return o.prototype.connectedCallback=function(){var o=this;this.waitUntilVisible(this.el,"50px",(function(){o.isVisible=!0,o.loadIcon()}))},o.prototype.disconnectedCallback=function(){this.io&&(this.io.disconnect(),this.io=void 0)},o.prototype.waitUntilVisible=function(o,t,n){var r=this;if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){var i=this.io=new window.IntersectionObserver((function(o){o[0].isIntersecting&&(i.disconnect(),r.io=void 0,n())}),{rootMargin:t});i.observe(o)}else n()},o.prototype.loadIcon=function(){var o=this;if(this.isVisible){var t=function(o){var t=c(o.src);if(t)return t;if(t=l(o.name,o.icon,o.mode,o.ios,o.md))return function(o){return function(){if("undefined"==typeof window)return new Map;if(!r){var o=window;o.Ionicons=o.Ionicons||{},r=o.Ionicons.map=o.Ionicons.map||new Map}return r}().get(o)||(0,i.k)("svg/"+o+".svg")}(t);if(o.icon){if(t=c(o.icon))return t;if(t=c(o.icon[o.mode]))return t}return null}(this);t&&(g.has(t)?this.svgContent=g.get(t):function(o){var t=f.get(o);if(!t){if("undefined"==typeof fetch)return g.set(o,""),Promise.resolve();t=fetch(o).then((function(t){if(t.ok)return t.text().then((function(t){g.set(o,function(o){if(o&&"undefined"!=typeof document){var t=document.createElement("div");t.innerHTML=o;for(var n=t.childNodes.length-1;n>=0;n--)"svg"!==t.childNodes[n].nodeName.toLowerCase()&&t.removeChild(t.childNodes[n]);var r=t.firstElementChild;if(r&&"svg"===r.nodeName.toLowerCase()){var i=r.getAttribute("class")||"";if(r.setAttribute("class",(i+" s-ion-icon").trim()),p(r))return t.innerHTML}}return""}(t))}));g.set(o,"")})),f.set(o,t)}return t}(t).then((function(){return o.svgContent=g.get(t)})))}if(!this.ariaLabel){var n=l(this.name,this.icon,this.mode,this.ios,this.md);n&&(this.ariaLabel=n.replace(/\-/g," "))}},o.prototype.render=function(){var o,t,n=this.mode||"md",r=this.flipRtl||this.ariaLabel&&(this.ariaLabel.indexOf("arrow")>-1||this.ariaLabel.indexOf("chevron")>-1)&&!1!==this.flipRtl;return(0,i.h)(i.H,{role:"img",class:Object.assign(Object.assign((o={},o[n]=!0,o),y(this.color)),(t={},t["icon-"+this.size]=!!this.size,t["flip-rtl"]=!!r&&"rtl"===this.el.ownerDocument.dir,t))},this.svgContent?(0,i.h)("div",{class:"icon-inner",innerHTML:this.svgContent}):(0,i.h)("div",{class:"icon-inner"}))},Object.defineProperty(o,"assetsDirs",{get:function(){return["svg"]},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"el",{get:function(){return(0,i.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(o,"watchers",{get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}},enumerable:!1,configurable:!0}),o}(),m=function(){return"undefined"!=typeof document&&document.documentElement.getAttribute("mode")||"md"},y=function(o){var t;return o?((t={"ion-color":!0})["ion-color-"+o]=!0,t):null};v.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"},3262:(o,t,n)=>{"use strict";n.d(t,{c:()=>e,g:()=>a,h:()=>i,o:()=>l});var r=n(655),i=function(o,t){return null!==t.closest(o)},e=function(o,t){var n;return"string"==typeof o&&o.length>0?Object.assign(((n={"ion-color":!0})["ion-color-"+o]=!0,n),t):t},a=function(o){var t={};return function(o){return void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter((function(o){return null!=o})).map((function(o){return o.trim()})).filter((function(o){return""!==o})):[]}(o).forEach((function(o){return t[o]=!0})),t},s=/^[a-z][a-z0-9+\-.]*:/,l=function(o,t,n,i){return(0,r.mG)(void 0,void 0,void 0,(function(){var e;return(0,r.Jh)(this,(function(r){return null!=o&&"#"!==o[0]&&!s.test(o)&&(e=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,e.push(o,n,i)]):[2,!1]}))}))}}}]);