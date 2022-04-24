import{_ as v,a as f,b as F,c as Wt,d as wt}from"./tslib-8d6b6c0f.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function qe(a,i){if(a.closest)return a.closest(i);for(var t=a;t;){if(Kt(t,i))return t;t=t.parentElement}return null}function Kt(a,i){var t=a.matches||a.webkitMatchesSelector||a.msMatchesSelector;return t.call(a,i)}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var O=function(){function a(i){i===void 0&&(i={}),this.adapter=i}return Object.defineProperty(a,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),a.prototype.init=function(){},a.prototype.destroy=function(){},a}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var zt={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Xt={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},St={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};function jt(a,i,t){if(!a)return{x:0,y:0};var e=i.x,r=i.y,n=e+t.left,s=r+t.top,o,d;if(a.type==="touchstart"){var l=a;o=l.changedTouches[0].pageX-n,d=l.changedTouches[0].pageY-s}else{var c=a;o=c.pageX-n,d=c.pageY-s}return{x:o,y:d}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var It=["touchstart","pointerdown","mousedown","keydown"],Ct=["touchend","pointerup","mouseup","contextmenu"],rt=[],$t=function(a){v(i,a);function i(t){var e=a.call(this,f(f({},i.defaultAdapter),t))||this;return e.activationAnimationHasEnded=!1,e.activationTimer=0,e.fgDeactivationRemovalTimer=0,e.fgScale="0",e.frame={width:0,height:0},e.initialSize=0,e.layoutFrame=0,e.maxRadius=0,e.unboundedCoords={left:0,top:0},e.activationState=e.defaultActivationState(),e.activationTimerCallback=function(){e.activationAnimationHasEnded=!0,e.runDeactivationUXLogicIfReady()},e.activateHandler=function(r){e.activateImpl(r)},e.deactivateHandler=function(){e.deactivateImpl()},e.focusHandler=function(){e.handleFocus()},e.blurHandler=function(){e.handleBlur()},e.resizeHandler=function(){e.layout()},e}return Object.defineProperty(i,"cssClasses",{get:function(){return zt},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return Xt},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return St},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){var t=this,e=this.supportsPressRipple();if(this.registerRootHandlers(e),e){var r=i.cssClasses,n=r.ROOT,s=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(n),t.adapter.isUnbounded()&&(t.adapter.addClass(s),t.layoutInternal())})}},i.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(i.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(i.cssClasses.FG_DEACTIVATION));var e=i.cssClasses,r=e.ROOT,n=e.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(r),t.adapter.removeClass(n),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},i.prototype.activate=function(t){this.activateImpl(t)},i.prototype.deactivate=function(){this.deactivateImpl()},i.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},i.prototype.setUnbounded=function(t){var e=i.cssClasses.UNBOUNDED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},i.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(i.cssClasses.BG_FOCUSED)})},i.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(i.cssClasses.BG_FOCUSED)})},i.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},i.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},i.prototype.registerRootHandlers=function(t){var e,r;if(t){try{for(var n=F(It),s=n.next();!s.done;s=n.next()){var o=s.value;this.adapter.registerInteractionHandler(o,this.activateHandler)}}catch(d){e={error:d}}finally{try{s&&!s.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},i.prototype.registerDeactivationHandlers=function(t){var e,r;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var n=F(Ct),s=n.next();!s.done;s=n.next()){var o=s.value;this.adapter.registerDocumentInteractionHandler(o,this.deactivateHandler)}}catch(d){e={error:d}}finally{try{s&&!s.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}},i.prototype.deregisterRootHandlers=function(){var t,e;try{for(var r=F(It),n=r.next();!n.done;n=r.next()){var s=n.value;this.adapter.deregisterInteractionHandler(s,this.activateHandler)}}catch(o){t={error:o}}finally{try{n&&!n.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},i.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var r=F(Ct),n=r.next();!n.done;n=r.next()){var s=n.value;this.adapter.deregisterDocumentInteractionHandler(s,this.deactivateHandler)}}catch(o){t={error:o}}finally{try{n&&!n.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}},i.prototype.removeCssVars=function(){var t=this,e=i.strings,r=Object.keys(e);r.forEach(function(n){n.indexOf("VAR_")===0&&t.adapter.updateCssVariable(e[n],null)})},i.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState;if(!r.isActivated){var n=this.previousActivationEvent,s=n&&t!==void 0&&n.type!==t.type;if(!s){r.isActivated=!0,r.isProgrammatic=t===void 0,r.activationEvent=t,r.wasActivatedByPointer=r.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var o=t!==void 0&&rt.length>0&&rt.some(function(d){return e.adapter.containsEventTarget(d)});if(o){this.resetActivationState();return}t!==void 0&&(rt.push(t.target),this.registerDeactivationHandlers(t)),r.wasElementMadeActive=this.checkElementMadeActive(t),r.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){rt=[],!r.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(r.wasElementMadeActive=e.checkElementMadeActive(t),r.wasElementMadeActive&&e.animateActivation()),r.wasElementMadeActive||(e.activationState=e.defaultActivationState())})}}}},i.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},i.prototype.animateActivation=function(){var t=this,e=i.strings,r=e.VAR_FG_TRANSLATE_START,n=e.VAR_FG_TRANSLATE_END,s=i.cssClasses,o=s.FG_DEACTIVATION,d=s.FG_ACTIVATION,l=i.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var c="",p="";if(!this.adapter.isUnbounded()){var T=this.getFgTranslationCoordinates(),m=T.startPoint,A=T.endPoint;c=m.x+"px, "+m.y+"px",p=A.x+"px, "+A.y+"px"}this.adapter.updateCssVariable(r,c),this.adapter.updateCssVariable(n,p),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(o),this.adapter.computeBoundingRect(),this.adapter.addClass(d),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},l)},i.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,e=t.activationEvent,r=t.wasActivatedByPointer,n;r?n=jt(e,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):n={x:this.frame.width/2,y:this.frame.height/2},n={x:n.x-this.initialSize/2,y:n.y-this.initialSize/2};var s={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:n,endPoint:s}},i.prototype.runDeactivationUXLogicIfReady=function(){var t=this,e=i.cssClasses.FG_DEACTIVATION,r=this.activationState,n=r.hasDeactivationUXRun,s=r.isActivated,o=n||!s;o&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(e),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(e)},St.FG_DEACTIVATION_MS))},i.prototype.rmBoundedActivationClasses=function(){var t=i.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},i.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},i.numbers.TAP_DELAY_MS)},i.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(!!e.isActivated){var r=f({},e);e.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(r)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(r),t.resetActivationState()}))}},i.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,r=t.wasElementMadeActive;(e||r)&&this.runDeactivationUXLogicIfReady()},i.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var e=Math.max(this.frame.height,this.frame.width),r=function(){var s=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return s+i.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?e:r();var n=Math.floor(e*i.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&n%2!==0?this.initialSize=n-1:this.initialSize=n,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},i.prototype.updateLayoutCssVars=function(){var t=i.strings,e=t.VAR_FG_SIZE,r=t.VAR_LEFT,n=t.VAR_TOP,s=t.VAR_FG_SCALE;this.adapter.updateCssVariable(e,this.initialSize+"px"),this.adapter.updateCssVariable(s,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords.top+"px"))},i}(O),Ye=$t;/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var h={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},R=new Set;R.add(h.BACKSPACE);R.add(h.ENTER);R.add(h.SPACEBAR);R.add(h.PAGE_UP);R.add(h.PAGE_DOWN);R.add(h.END);R.add(h.HOME);R.add(h.ARROW_LEFT);R.add(h.ARROW_UP);R.add(h.ARROW_RIGHT);R.add(h.ARROW_DOWN);R.add(h.DELETE);R.add(h.ESCAPE);R.add(h.TAB);var N={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},L=new Map;L.set(N.BACKSPACE,h.BACKSPACE);L.set(N.ENTER,h.ENTER);L.set(N.SPACEBAR,h.SPACEBAR);L.set(N.PAGE_UP,h.PAGE_UP);L.set(N.PAGE_DOWN,h.PAGE_DOWN);L.set(N.END,h.END);L.set(N.HOME,h.HOME);L.set(N.ARROW_LEFT,h.ARROW_LEFT);L.set(N.ARROW_UP,h.ARROW_UP);L.set(N.ARROW_RIGHT,h.ARROW_RIGHT);L.set(N.ARROW_DOWN,h.ARROW_DOWN);L.set(N.DELETE,h.DELETE);L.set(N.ESCAPE,h.ESCAPE);L.set(N.TAB,h.TAB);var G=new Set;G.add(h.PAGE_UP);G.add(h.PAGE_DOWN);G.add(h.END);G.add(h.HOME);G.add(h.ARROW_LEFT);G.add(h.ARROW_UP);G.add(h.ARROW_RIGHT);G.add(h.ARROW_DOWN);function P(a){var i=a.key;if(R.has(i))return i;var t=L.get(a.keyCode);return t||h.UNKNOWN}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var V,B,g={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};V={},V[""+g.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",V[""+g.LIST_ITEM_CLASS]="mdc-list-item",V[""+g.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",V[""+g.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",V[""+g.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",V[""+g.ROOT]="mdc-list";var q=(B={},B[""+g.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",B[""+g.LIST_ITEM_CLASS]="mdc-deprecated-list-item",B[""+g.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",B[""+g.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",B[""+g.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",B[""+g.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",B[""+g.ROOT]="mdc-deprecated-list",B),Qe={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+g.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+g.LIST_ITEM_CLASS+` a,
    .`+q[g.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+q[g.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+g.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+g.LIST_ITEM_CLASS+` a,
    .`+g.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+g.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+q[g.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+q[g.LIST_ITEM_CLASS]+` a,
    .`+q[g.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+q[g.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},qt={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var vt={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},st={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Yt={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Qt=function(a){v(i,a);function i(t){return a.call(this,f(f({},i.defaultAdapter),t))||this}return Object.defineProperty(i,"strings",{get:function(){return Yt},enumerable:!1,configurable:!0}),Object.defineProperty(i,"cssClasses",{get:function(){return vt},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return st},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),i.prototype.handleTargetScroll=function(){},i.prototype.handleWindowResize=function(){},i.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},i}(O);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var nt=0,Ut=function(a){v(i,a);function i(t){var e=a.call(this,t)||this;return e.wasDocked=!0,e.isDockedShowing=!0,e.currentAppBarOffsetTop=0,e.isCurrentlyBeingResized=!1,e.resizeThrottleId=nt,e.resizeDebounceId=nt,e.lastScrollPosition=e.adapter.getViewportScrollY(),e.topAppBarHeight=e.adapter.getTopAppBarHeight(),e}return i.prototype.destroy=function(){a.prototype.destroy.call(this),this.adapter.setStyle("top","")},i.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),e=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=e,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},i.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){t.resizeThrottleId=nt,t.throttledResizeHandler()},st.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=nt},st.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},i.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,e=this.currentAppBarOffsetTop<0,r=this.currentAppBarOffsetTop>t,n=e&&r;if(n)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==r)return this.isDockedShowing=r,!0}else return this.wasDocked=!0,!0;return n},i.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-st.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},i.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},i}(Qt),Ze=Ut;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Zt=function(a){v(i,a);function i(){var t=a!==null&&a.apply(this,arguments)||this;return t.wasScrolled=!1,t}return i.prototype.handleTargetScroll=function(){var t=this.adapter.getViewportScrollY();t<=0?this.wasScrolled&&(this.adapter.removeClass(vt.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(vt.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},i}(Ut),Je=Zt;/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var E={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},J={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},lt={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var kt=function(){function a(){this.rafIDs=new Map}return a.prototype.request=function(i,t){var e=this;this.cancel(i);var r=requestAnimationFrame(function(n){e.rafIDs.delete(i),t(n)});this.rafIDs.set(i,r)},a.prototype.cancel=function(i){var t=this.rafIDs.get(i);t&&(cancelAnimationFrame(t),this.rafIDs.delete(i))},a.prototype.cancelAll=function(){var i=this;this.rafIDs.forEach(function(t,e){i.cancel(e)})},a.prototype.getQueue=function(){var i=[];return this.rafIDs.forEach(function(t,e){i.push(e)}),i},a}();/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ut;(function(a){a.POLL_SCROLL_POS="poll_scroll_position",a.POLL_LAYOUT_CHANGE="poll_layout_change"})(ut||(ut={}));var Jt=function(a){v(i,a);function i(t){var e=a.call(this,f(f({},i.defaultAdapter),t))||this;return e.dialogOpen=!1,e.isFullscreen=!1,e.animationFrame=0,e.animationTimer=0,e.escapeKeyAction=J.CLOSE_ACTION,e.scrimClickAction=J.CLOSE_ACTION,e.autoStackButtons=!0,e.areButtonsStacked=!1,e.suppressDefaultPressSelector=J.SUPPRESS_DEFAULT_PRESS_SELECTOR,e.animFrame=new kt,e.contentScrollHandler=function(){e.handleScrollEvent()},e.windowResizeHandler=function(){e.layout()},e.windowOrientationChangeHandler=function(){e.layout()},e}return Object.defineProperty(i,"cssClasses",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return J},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return lt},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){this.adapter.hasClass(E.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(E.FULLSCREEN)},i.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},i.prototype.open=function(t){var e=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(E.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),t&&t.isAboveFullscreenDialog&&this.adapter.addClass(E.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame(function(){e.adapter.addClass(E.OPEN),e.adapter.addBodyClass(E.SCROLL_LOCK),e.layout(),e.animationTimer=setTimeout(function(){e.handleAnimationTimerEnd(),e.adapter.trapFocus(e.adapter.getInitialFocusEl()),e.adapter.notifyOpened()},lt.DIALOG_ANIMATION_OPEN_TIME_MS)})},i.prototype.close=function(t){var e=this;t===void 0&&(t=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(t),this.adapter.addClass(E.CLOSING),this.adapter.removeClass(E.OPEN),this.adapter.removeBodyClass(E.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){e.adapter.releaseFocus(),e.handleAnimationTimerEnd(),e.adapter.notifyClosed(t)},lt.DIALOG_ANIMATION_CLOSE_TIME_MS))},i.prototype.showSurfaceScrim=function(){var t=this;this.adapter.addClass(E.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame(function(){t.adapter.addClass(E.SURFACE_SCRIM_SHOWN)})},i.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(E.SURFACE_SCRIM_SHOWN),this.adapter.addClass(E.SURFACE_SCRIM_HIDING)},i.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(E.SURFACE_SCRIM_HIDING),this.adapter.removeClass(E.SURFACE_SCRIM_SHOWING)},i.prototype.isOpen=function(){return this.dialogOpen},i.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},i.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction=t},i.prototype.getScrimClickAction=function(){return this.scrimClickAction},i.prototype.setScrimClickAction=function(t){this.scrimClickAction=t},i.prototype.getAutoStackButtons=function(){return this.autoStackButtons},i.prototype.setAutoStackButtons=function(t){this.autoStackButtons=t},i.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},i.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},i.prototype.layout=function(){var t=this;this.animFrame.request(ut.POLL_LAYOUT_CHANGE,function(){t.layoutInternal()})},i.prototype.handleClick=function(t){var e=this.adapter.eventTargetMatches(t.target,J.SCRIM_SELECTOR);if(e&&this.scrimClickAction!=="")this.close(this.scrimClickAction);else{var r=this.adapter.getActionFromEvent(t);r&&this.close(r)}},i.prototype.handleKeydown=function(t){var e=t.key==="Enter"||t.keyCode===13;if(!!e){var r=this.adapter.getActionFromEvent(t);if(!r){var n=t.composedPath?t.composedPath()[0]:t.target,s=this.suppressDefaultPressSelector?!this.adapter.eventTargetMatches(n,this.suppressDefaultPressSelector):!0;e&&s&&this.adapter.clickDefaultButton()}}},i.prototype.handleDocumentKeydown=function(t){var e=t.key==="Escape"||t.keyCode===27;e&&this.escapeKeyAction!==""&&this.close(this.escapeKeyAction)},i.prototype.handleScrollEvent=function(){var t=this;this.animFrame.request(ut.POLL_SCROLL_POS,function(){t.toggleScrollDividerHeader(),t.toggleScrollDividerFooter()})},i.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},i.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(E.OPENING),this.adapter.removeClass(E.CLOSING)},i.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(t,0)})},i.prototype.detectStackedButtons=function(){this.adapter.removeClass(E.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(E.STACKED),t!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=t)},i.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(E.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(E.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},i.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(E.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(E.SCROLL_DIVIDER_HEADER):this.adapter.addClass(E.SCROLL_DIVIDER_HEADER)},i.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(E.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(E.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(E.SCROLL_DIVIDER_FOOTER)},i}(O),ti=Jt;/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function ei(a){return a===void 0&&(a=window),te(a)?{passive:!0}:!1}function te(a){a===void 0&&(a=window);var i=!1;try{var t={get passive(){return i=!0,!1}},e=function(){};a.document.addEventListener("test",e,t),a.document.removeEventListener("test",e,t)}catch{i=!1}return i}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ee={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},yt={NOTCH_ELEMENT_PADDING:8},ie={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ii=function(a){v(i,a);function i(t){return a.call(this,f(f({},i.defaultAdapter),t))||this}return Object.defineProperty(i,"strings",{get:function(){return ee},enumerable:!1,configurable:!0}),Object.defineProperty(i,"cssClasses",{get:function(){return ie},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return yt},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),i.prototype.notch=function(t){var e=i.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=yt.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(e)},i.prototype.closeNotch=function(){var t=i.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},i}(O);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var re={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ri=function(a){v(i,a);function i(t){var e=a.call(this,f(f({},i.defaultAdapter),t))||this;return e.shakeAnimationEndHandler=function(){e.handleShakeAnimationEnd()},e}return Object.defineProperty(i,"cssClasses",{get:function(){return re},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},i.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},i.prototype.getWidth=function(){return this.adapter.getWidth()},i.prototype.shake=function(t){var e=i.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(e):this.adapter.removeClass(e)},i.prototype.float=function(t){var e=i.cssClasses,r=e.LABEL_FLOAT_ABOVE,n=e.LABEL_SHAKE;t?this.adapter.addClass(r):(this.adapter.removeClass(r),this.adapter.removeClass(n))},i.prototype.setRequired=function(t){var e=i.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},i.prototype.handleShakeAnimationEnd=function(){var t=i.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},i}(O);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var K={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ni=function(a){v(i,a);function i(t){var e=a.call(this,f(f({},i.defaultAdapter),t))||this;return e.transitionEndHandler=function(r){e.handleTransitionEnd(r)},e}return Object.defineProperty(i,"cssClasses",{get:function(){return K},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},i.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},i.prototype.activate=function(){this.adapter.removeClass(K.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(K.LINE_RIPPLE_ACTIVE)},i.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},i.prototype.deactivate=function(){this.adapter.addClass(K.LINE_RIPPLE_DEACTIVATING)},i.prototype.handleTransitionEnd=function(t){var e=this.adapter.hasClass(K.LINE_RIPPLE_DEACTIVATING);t.propertyName==="opacity"&&e&&(this.adapter.removeClass(K.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(K.LINE_RIPPLE_DEACTIVATING))},i}(O);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ct={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},ne={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},bt={LABEL_SCALE:.75},ae=["pattern","min","max","required","step","minlength","maxlength"],se=["color","date","datetime-local","month","range","time","week"];/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ot=["mousedown","touchstart"],_t=["click","keydown"],oe=function(a){v(i,a);function i(t,e){e===void 0&&(e={});var r=a.call(this,f(f({},i.defaultAdapter),t))||this;return r.isFocused=!1,r.receivedUserInput=!1,r.valid=!0,r.useNativeValidation=!0,r.validateOnValueChange=!0,r.helperText=e.helperText,r.characterCounter=e.characterCounter,r.leadingIcon=e.leadingIcon,r.trailingIcon=e.trailingIcon,r.inputFocusHandler=function(){r.activateFocus()},r.inputBlurHandler=function(){r.deactivateFocus()},r.inputInputHandler=function(){r.handleInput()},r.setPointerXOffset=function(n){r.setTransformOrigin(n)},r.textFieldInteractionHandler=function(){r.handleTextFieldInteraction()},r.validationAttributeChangeHandler=function(n){r.handleValidationAttributeChange(n)},r}return Object.defineProperty(i,"cssClasses",{get:function(){return ne},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return ct},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return bt},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return se.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){var t,e,r,n;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var s=F(Ot),o=s.next();!o.done;o=s.next()){var d=o.value;this.adapter.registerInputInteractionHandler(d,this.setPointerXOffset)}}catch(p){t={error:p}}finally{try{o&&!o.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}try{for(var l=F(_t),c=l.next();!c.done;c=l.next()){var d=c.value;this.adapter.registerTextFieldInteractionHandler(d,this.textFieldInteractionHandler)}}catch(p){r={error:p}}finally{try{c&&!c.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},i.prototype.destroy=function(){var t,e,r,n;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var s=F(Ot),o=s.next();!o.done;o=s.next()){var d=o.value;this.adapter.deregisterInputInteractionHandler(d,this.setPointerXOffset)}}catch(p){t={error:p}}finally{try{o&&!o.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}try{for(var l=F(_t),c=l.next();!c.done;c=l.next()){var d=c.value;this.adapter.deregisterTextFieldInteractionHandler(d,this.textFieldInteractionHandler)}}catch(p){r={error:p}}finally{try{c&&!c.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},i.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},i.prototype.handleValidationAttributeChange=function(t){var e=this;t.some(function(r){return ae.indexOf(r)>-1?(e.styleValidity(!0),e.adapter.setLabelRequired(e.getNativeInput().required),!0):!1}),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},i.prototype.notchOutline=function(t){if(!(!this.adapter.hasOutline()||!this.adapter.hasLabel()))if(t){var e=this.adapter.getLabelWidth()*bt.LABEL_SCALE;this.adapter.notchOutline(e)}else this.adapter.closeOutline()},i.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.helperText&&(this.helperText.isPersistent()||!this.helperText.isValidation()||!this.valid)&&this.helperText.showToScreenReader()},i.prototype.setTransformOrigin=function(t){if(!(this.isDisabled()||this.adapter.hasOutline())){var e=t.touches,r=e?e[0]:t,n=r.target.getBoundingClientRect(),s=r.clientX-n.left;this.adapter.setLineRippleTransformOrigin(s)}},i.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},i.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},i.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},i.prototype.getValue=function(){return this.getNativeInput().value},i.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var e=this.isValid();this.styleValidity(e)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},i.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},i.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var e=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(e)},i.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},i.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},i.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},i.prototype.isDisabled=function(){return this.getNativeInput().disabled},i.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},i.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},i.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},i.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},i.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},i.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},i.prototype.setcharacterCounter=function(t){if(!!this.characterCounter){var e=this.getNativeInput().maxLength;if(e===-1)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,e)}},i.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},i.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},i.prototype.styleValidity=function(t){var e=i.cssClasses.INVALID;if(t?this.adapter.removeClass(e):this.adapter.addClass(e),this.helperText){this.helperText.setValidity(t);var r=this.helperText.isValidation();if(!r)return;var n=this.helperText.isVisible(),s=this.helperText.getId();n&&s?this.adapter.setInputAttr(ct.ARIA_DESCRIBEDBY,s):this.adapter.removeInputAttr(ct.ARIA_DESCRIBEDBY)}},i.prototype.styleFocused=function(t){var e=i.cssClasses.FOCUSED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},i.prototype.styleDisabled=function(t){var e=i.cssClasses,r=e.DISABLED,n=e.INVALID;t?(this.adapter.addClass(r),this.adapter.removeClass(n)):this.adapter.removeClass(r),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},i.prototype.styleFloating=function(t){var e=i.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(e):this.adapter.removeClass(e)},i.prototype.getNativeInput=function(){var t=this.adapter?this.adapter.getNativeInput():null;return t||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},i}(O),ai=oe;/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var M={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},ue={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Vt=function(a){v(i,a);function i(t){var e=a.call(this,f(f({},i.defaultAdapter),t))||this;return e.animationFrame=0,e.animationTimer=0,e}return Object.defineProperty(i,"strings",{get:function(){return ue},enumerable:!1,configurable:!0}),Object.defineProperty(i,"cssClasses",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),i.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},i.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(M.OPEN),this.adapter.addClass(M.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(M.OPENING)}),this.adapter.saveFocus())},i.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(M.CLOSING)},i.prototype.isOpen=function(){return this.adapter.hasClass(M.OPEN)},i.prototype.isOpening=function(){return this.adapter.hasClass(M.OPENING)||this.adapter.hasClass(M.ANIMATE)},i.prototype.isClosing=function(){return this.adapter.hasClass(M.CLOSING)},i.prototype.handleKeydown=function(t){var e=t.keyCode,r=t.key,n=r==="Escape"||e===27;n&&this.close()},i.prototype.handleTransitionEnd=function(t){var e=M.OPENING,r=M.CLOSING,n=M.OPEN,s=M.ANIMATE,o=M.ROOT,d=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,o);!d||(this.isClosing()?(this.adapter.removeClass(n),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(s),this.adapter.removeClass(e),this.adapter.removeClass(r))},i.prototype.opened=function(){},i.prototype.closed=function(){},i.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(t,0)})},i.prototype.isElement=function(t){return Boolean(t.classList)},i}(O),si=Vt;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var de=function(a){v(i,a);function i(){return a!==null&&a.apply(this,arguments)||this}return i.prototype.handleScrimClick=function(){this.close()},i.prototype.opened=function(){this.adapter.trapFocus()},i.prototype.closed=function(){this.adapter.releaseFocus()},i}(Vt),oi=de;/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var le={ROOT:"mdc-form-field"},ce={LABEL_SELECTOR:".mdc-form-field > label"};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var he=function(a){v(i,a);function i(t){var e=a.call(this,f(f({},i.defaultAdapter),t))||this;return e.click=function(){e.handleClick()},e}return Object.defineProperty(i,"cssClasses",{get:function(){return le},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},i.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},i.prototype.handleClick=function(){var t=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){t.adapter.deactivateInputRipple()})},i}(O),ui=he;/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var fe={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},pe={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var me=function(a){v(i,a);function i(t){return a.call(this,f(f({},i.defaultAdapter),t))||this}return Object.defineProperty(i,"cssClasses",{get:function(){return pe},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return fe},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),i.prototype.setDisabled=function(t){var e=i.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(e):this.adapter.removeClass(e)},i}(O),di=me;/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function ve(a,i,t){var e=Te(a,i),r=e.getObservers(i);return r.push(t),function(){r.splice(r.indexOf(t),1)}}var ot=new WeakMap;function Te(a,i){var t=new Map;ot.has(a)||ot.set(a,{isEnabled:!0,getObservers:function(l){var c=t.get(l)||[];return t.has(l)||t.set(l,c),c},installedProperties:new Set});var e=ot.get(a);if(e.installedProperties.has(i))return e;var r=Ee(a,i)||{configurable:!0,enumerable:!0,value:a[i],writable:!0},n=f({},r),s=r.get,o=r.set;if("value"in r){delete n.value,delete n.writable;var d=r.value;s=function(){return d},r.writable&&(o=function(l){d=l})}return s&&(n.get=function(){return s.call(this)}),o&&(n.set=function(l){var c,p,T=s?s.call(this):l;if(o.call(this,l),e.isEnabled&&(!s||l!==T))try{for(var m=F(e.getObservers(i)),A=m.next();!A.done;A=m.next()){var C=A.value;C(l,T)}}catch(D){c={error:D}}finally{try{A&&!A.done&&(p=m.return)&&p.call(m)}finally{if(c)throw c.error}}}),e.installedProperties.add(i),Object.defineProperty(a,i,n),e}function Ee(a,i){for(var t=a,e;t&&(e=Object.getOwnPropertyDescriptor(t,i),!e);)t=Object.getPrototypeOf(t);return e}function Ae(a,i){var t=ot.get(a);t&&(t.isEnabled=i)}/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ge=function(a){v(i,a);function i(t){var e=a.call(this,t)||this;return e.unobserves=new Set,e}return i.prototype.destroy=function(){a.prototype.destroy.call(this),this.unobserve()},i.prototype.observe=function(t,e){var r,n,s=this,o=[];try{for(var d=F(Object.keys(e)),l=d.next();!l.done;l=d.next()){var c=l.value,p=e[c].bind(this);o.push(this.observeProperty(t,c,p))}}catch(m){r={error:m}}finally{try{l&&!l.done&&(n=d.return)&&n.call(d)}finally{if(r)throw r.error}}var T=function(){var m,A;try{for(var C=F(o),D=C.next();!D.done;D=C.next()){var H=D.value;H()}}catch(W){m={error:W}}finally{try{D&&!D.done&&(A=C.return)&&A.call(C)}finally{if(m)throw m.error}}s.unobserves.delete(T)};return this.unobserves.add(T),T},i.prototype.observeProperty=function(t,e,r){return ve(t,e,r)},i.prototype.setObserversEnabled=function(t,e){Ae(t,e)},i.prototype.unobserve=function(){var t,e;try{for(var r=F(Wt([],wt(this.unobserves))),n=r.next();!n.done;n=r.next()){var s=n.value;s()}}catch(o){t={error:o}}finally{try{n&&!n.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}},i}(O);/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var X;(function(a){a.PROCESSING="mdc-switch--processing",a.SELECTED="mdc-switch--selected",a.UNSELECTED="mdc-switch--unselected"})(X||(X={}));var Rt;(function(a){a.RIPPLE=".mdc-switch__ripple"})(Rt||(Rt={}));/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Se=function(a){v(i,a);function i(t){var e=a.call(this,t)||this;return e.handleClick=e.handleClick.bind(e),e}return i.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},i.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},i.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},i}(ge);(function(a){v(i,a);function i(){return a!==null&&a.apply(this,arguments)||this}return i.prototype.init=function(){a.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},i.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(X.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(X.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},i.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},i.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,X.PROCESSING)},i.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,X.SELECTED),this.toggleClass(!this.adapter.state.selected,X.UNSELECTED)},i.prototype.toggleClass=function(t,e){t?this.adapter.addClass(e):this.adapter.removeClass(e)},i})(Se);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ie={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},Ce={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},tt={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30},I;(function(a){a[a.BOTTOM=1]="BOTTOM",a[a.CENTER=2]="CENTER",a[a.RIGHT=4]="RIGHT",a[a.FLIP_RTL=8]="FLIP_RTL"})(I||(I={}));var Z;(function(a){a[a.TOP_LEFT=0]="TOP_LEFT",a[a.TOP_RIGHT=4]="TOP_RIGHT",a[a.BOTTOM_LEFT=1]="BOTTOM_LEFT",a[a.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",a[a.TOP_START=8]="TOP_START",a[a.TOP_END=12]="TOP_END",a[a.BOTTOM_START=9]="BOTTOM_START",a[a.BOTTOM_END=13]="BOTTOM_END"})(Z||(Z={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Gt=function(a){v(i,a);function i(t){var e=a.call(this,f(f({},i.defaultAdapter),t))||this;return e.isSurfaceOpen=!1,e.isQuickOpen=!1,e.isHoistedElement=!1,e.isFixedPosition=!1,e.isHorizontallyCenteredOnViewport=!1,e.maxHeight=0,e.openBottomBias=0,e.openAnimationEndTimerId=0,e.closeAnimationEndTimerId=0,e.animationRequestId=0,e.anchorCorner=Z.TOP_START,e.originCorner=Z.TOP_START,e.anchorMargin={top:0,right:0,bottom:0,left:0},e.position={x:0,y:0},e}return Object.defineProperty(i,"cssClasses",{get:function(){return Ie},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return Ce},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return tt},enumerable:!1,configurable:!0}),Object.defineProperty(i,"Corner",{get:function(){return Z},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){},notifyClosing:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){var t=i.cssClasses,e=t.ROOT,r=t.OPEN;if(!this.adapter.hasClass(e))throw new Error(e+" class required in root element.");this.adapter.hasClass(r)&&(this.isSurfaceOpen=!0)},i.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},i.prototype.setAnchorCorner=function(t){this.anchorCorner=t},i.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^I.RIGHT},i.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},i.prototype.setIsHoisted=function(t){this.isHoistedElement=t},i.prototype.setFixedPosition=function(t){this.isFixedPosition=t},i.prototype.isFixed=function(){return this.isFixedPosition},i.prototype.setAbsolutePosition=function(t,e){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(e)?e:0},i.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},i.prototype.setQuickOpen=function(t){this.isQuickOpen=t},i.prototype.setMaxHeight=function(t){this.maxHeight=t},i.prototype.setOpenBottomBias=function(t){this.openBottomBias=t},i.prototype.isOpen=function(){return this.isSurfaceOpen},i.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(i.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(i.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame(function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(i.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout(function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(i.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()},tt.TRANSITION_OPEN_DURATION)}),this.isSurfaceOpen=!0))},i.prototype.close=function(t){var e=this;if(t===void 0&&(t=!1),!!this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen){this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(i.cssClasses.OPEN),this.adapter.removeClass(i.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose();return}this.adapter.addClass(i.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){e.adapter.removeClass(i.cssClasses.OPEN),e.adapter.removeClass(i.cssClasses.IS_OPEN_BELOW),e.closeAnimationEndTimerId=setTimeout(function(){e.closeAnimationEndTimerId=0,e.adapter.removeClass(i.cssClasses.ANIMATING_CLOSED),e.adapter.notifyClose()},tt.TRANSITION_CLOSE_DURATION)}),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},i.prototype.handleBodyClick=function(t){var e=t.target;this.adapter.isElementInContainer(e)||this.close()},i.prototype.handleKeydown=function(t){var e=t.keyCode,r=t.key,n=r==="Escape"||e===27;n&&this.close()},i.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var e=this.getoriginCorner(),r=this.getMenuSurfaceMaxHeight(e),n=this.hasBit(e,I.BOTTOM)?"bottom":"top",s=this.hasBit(e,I.RIGHT)?"right":"left",o=this.getHorizontalOriginOffset(e),d=this.getVerticalOriginOffset(e),l=this.measurements,c=l.anchorSize,p=l.surfaceSize,T=(t={},t[s]=o,t[n]=d,t);c.width/p.width>tt.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(s="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(T),this.adapter.setTransformOrigin(s+" "+n),this.adapter.setPosition(T),this.adapter.setMaxHeight(r?r+"px":""),this.hasBit(e,I.BOTTOM)||this.adapter.addClass(i.cssClasses.IS_OPEN_BELOW)},i.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),e=this.adapter.getBodyDimensions(),r=this.adapter.getWindowDimensions(),n=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:r.width-t.right,bottom:r.height-t.bottom,left:t.left},viewportSize:r,windowScroll:n}},i.prototype.getoriginCorner=function(){var t=this.originCorner,e=this.measurements,r=e.viewportDistance,n=e.anchorSize,s=e.surfaceSize,o=i.numbers.MARGIN_TO_EDGE,d=this.hasBit(this.anchorCorner,I.BOTTOM),l,c;d?(l=r.top-o+this.anchorMargin.bottom,c=r.bottom-o-this.anchorMargin.bottom):(l=r.top-o+this.anchorMargin.top,c=r.bottom-o+n.height-this.anchorMargin.top);var p=c-s.height>0;!p&&l>c+this.openBottomBias&&(t=this.setBit(t,I.BOTTOM));var T=this.adapter.isRtl(),m=this.hasBit(this.anchorCorner,I.FLIP_RTL),A=this.hasBit(this.anchorCorner,I.RIGHT)||this.hasBit(t,I.RIGHT),C=!1;T&&m?C=!A:C=A;var D,H;C?(D=r.left+n.width+this.anchorMargin.right,H=r.right-this.anchorMargin.right):(D=r.left+this.anchorMargin.left,H=r.right+n.width-this.anchorMargin.left);var W=D-s.width>0,At=H-s.width>0,gt=this.hasBit(t,I.FLIP_RTL)&&this.hasBit(t,I.RIGHT);return At&&gt&&T||!W&&gt?t=this.unsetBit(t,I.RIGHT):(W&&C&&T||W&&!C&&A||!At&&D>=H)&&(t=this.setBit(t,I.RIGHT)),t},i.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var e=this.measurements.viewportDistance,r=0,n=this.hasBit(t,I.BOTTOM),s=this.hasBit(this.anchorCorner,I.BOTTOM),o=i.numbers.MARGIN_TO_EDGE;return n?(r=e.top+this.anchorMargin.top-o,s||(r+=this.measurements.anchorSize.height)):(r=e.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-o,s&&(r-=this.measurements.anchorSize.height)),r},i.prototype.getHorizontalOriginOffset=function(t){var e=this.measurements.anchorSize,r=this.hasBit(t,I.RIGHT),n=this.hasBit(this.anchorCorner,I.RIGHT);if(r){var s=n?e.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?s-(this.measurements.viewportSize.width-this.measurements.bodySize.width):s}return n?e.width-this.anchorMargin.right:this.anchorMargin.left},i.prototype.getVerticalOriginOffset=function(t){var e=this.measurements.anchorSize,r=this.hasBit(t,I.BOTTOM),n=this.hasBit(this.anchorCorner,I.BOTTOM),s=0;return r?s=n?e.height-this.anchorMargin.top:-this.anchorMargin.bottom:s=n?e.height+this.anchorMargin.bottom:this.anchorMargin.top,s},i.prototype.adjustPositionForHoistedElement=function(t){var e,r,n=this.measurements,s=n.windowScroll,o=n.viewportDistance,d=n.surfaceSize,l=n.viewportSize,c=Object.keys(t);try{for(var p=F(c),T=p.next();!T.done;T=p.next()){var m=T.value,A=t[m]||0;if(this.isHorizontallyCenteredOnViewport&&(m==="left"||m==="right")){t[m]=(l.width-d.width)/2;continue}A+=o[m],this.isFixedPosition||(m==="top"?A+=s.y:m==="bottom"?A-=s.y:m==="left"?A+=s.x:A-=s.x),t[m]=A}}catch(C){e={error:C}}finally{try{T&&!T.done&&(r=p.return)&&r.call(p)}finally{if(e)throw e.error}}},i.prototype.maybeRestoreFocus=function(){var t=this,e=this.adapter.isFocused(),r=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(e||r)&&setTimeout(function(){t.adapter.restoreFocus()},tt.TOUCH_EVENT_WAIT_MS)},i.prototype.hasBit=function(t,e){return Boolean(t&e)},i.prototype.setBit=function(t,e){return t|e},i.prototype.unsetBit=function(t,e){return t^e},i.prototype.isFinite=function(t){return typeof t=="number"&&isFinite(t)},i}(O),li=Gt;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ht={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Y={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},ye={FOCUS_ROOT_INDEX:-1},Q;(function(a){a[a.NONE=0]="NONE",a[a.LIST_ROOT=1]="LIST_ROOT",a[a.FIRST_ITEM=2]="FIRST_ITEM",a[a.LAST_ITEM=3]="LAST_ITEM"})(Q||(Q={}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var be=function(a){v(i,a);function i(t){var e=a.call(this,f(f({},i.defaultAdapter),t))||this;return e.closeAnimationEndTimerId=0,e.defaultFocusState=Q.LIST_ROOT,e.selectedIndex=-1,e}return Object.defineProperty(i,"cssClasses",{get:function(){return ht},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return Y},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return ye},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),i.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},i.prototype.handleKeydown=function(t){var e=t.key,r=t.keyCode,n=e==="Tab"||r===9;n&&this.adapter.closeSurface(!0)},i.prototype.handleItemAction=function(t){var e=this,r=this.adapter.getElementIndex(t);if(!(r<0)){this.adapter.notifySelected({index:r});var n=this.adapter.getAttributeFromElementAtIndex(r,Y.SKIP_RESTORE_FOCUS)==="true";this.adapter.closeSurface(n),this.closeAnimationEndTimerId=setTimeout(function(){var s=e.adapter.getElementIndex(t);s>=0&&e.adapter.isSelectableItemAtIndex(s)&&e.setSelectedIndex(s)},Gt.numbers.TRANSITION_CLOSE_DURATION)}},i.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Q.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Q.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Q.NONE:break;default:this.adapter.focusListRoot();break}},i.prototype.setDefaultFocusState=function(t){this.defaultFocusState=t},i.prototype.getSelectedIndex=function(){return this.selectedIndex},i.prototype.setSelectedIndex=function(t){if(this.validatedIndex(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter.getSelectedSiblingOfItemAtIndex(t);e>=0&&(this.adapter.removeAttributeFromElementAtIndex(e,Y.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(e,ht.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,ht.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,Y.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=t},i.prototype.setEnabled=function(t,e){this.validatedIndex(t),e?(this.adapter.removeClassFromElementAtIndex(t,g.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,Y.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,g.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,Y.ARIA_DISABLED_ATTR,"true"))},i.prototype.validatedIndex=function(t){var e=this.adapter.getMenuItemCount(),r=t>=0&&t<e;if(!r)throw new Error("MDCMenuFoundation: No list item at specified index.")},i}(O),ci=be;/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Oe=["input","button","textarea","select"],Lt=function(a){var i=a.target;if(!!i){var t=(""+i.tagName).toLowerCase();Oe.indexOf(t)===-1&&a.preventDefault()}};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function hi(){var a={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return a}function fi(a,i){for(var t=new Map,e=0;e<a;e++){var r=i(e).trim();if(!!r){var n=r[0].toLowerCase();t.has(n)||t.set(n,[]),t.get(n).push({text:r.toLowerCase(),index:e})}}return t.forEach(function(s){s.sort(function(o,d){return o.index-d.index})}),t}function Dt(a,i){var t=a.nextChar,e=a.focusItemAtIndex,r=a.sortedIndexByFirstChar,n=a.focusedItemIndex,s=a.skipFocus,o=a.isItemAtIndexDisabled;clearTimeout(i.bufferClearTimeout),i.bufferClearTimeout=setTimeout(function(){De(i)},qt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),i.typeaheadBuffer=i.typeaheadBuffer+t;var d;return i.typeaheadBuffer.length===1?d=_e(r,n,o,i):d=Re(r,o,i),d!==-1&&!s&&e(d),d}function _e(a,i,t,e){var r=e.typeaheadBuffer[0],n=a.get(r);if(!n)return-1;if(r===e.currentFirstChar&&n[e.sortedIndexCursor].index===i){e.sortedIndexCursor=(e.sortedIndexCursor+1)%n.length;var s=n[e.sortedIndexCursor].index;if(!t(s))return s}e.currentFirstChar=r;var o=-1,d;for(d=0;d<n.length;d++)if(!t(n[d].index)){o=d;break}for(;d<n.length;d++)if(n[d].index>i&&!t(n[d].index)){o=d;break}return o!==-1?(e.sortedIndexCursor=o,n[e.sortedIndexCursor].index):-1}function Re(a,i,t){var e=t.typeaheadBuffer[0],r=a.get(e);if(!r)return-1;var n=r[t.sortedIndexCursor];if(n.text.lastIndexOf(t.typeaheadBuffer,0)===0&&!i(n.index))return n.index;for(var s=(t.sortedIndexCursor+1)%r.length,o=-1;s!==t.sortedIndexCursor;){var d=r[s],l=d.text.lastIndexOf(t.typeaheadBuffer,0)===0,c=!i(d.index);if(l&&c){o=s;break}s=(s+1)%r.length}return o!==-1?(t.sortedIndexCursor=o,r[t.sortedIndexCursor].index):-1}function Le(a){return a.typeaheadBuffer.length>0}function De(a){a.typeaheadBuffer=""}function pi(a,i){var t=a.event,e=a.isTargetListItem,r=a.focusedItemIndex,n=a.focusItemAtIndex,s=a.sortedIndexByFirstChar,o=a.isItemAtIndexDisabled,d=P(t)==="ArrowLeft",l=P(t)==="ArrowUp",c=P(t)==="ArrowRight",p=P(t)==="ArrowDown",T=P(t)==="Home",m=P(t)==="End",A=P(t)==="Enter",C=P(t)==="Spacebar";if(t.ctrlKey||t.metaKey||d||l||c||p||T||m||A)return-1;var D=!C&&t.key.length===1;if(D){Lt(t);var H={focusItemAtIndex:n,focusedItemIndex:r,nextChar:t.key.toLowerCase(),sortedIndexByFirstChar:s,skipFocus:!1,isItemAtIndexDisabled:o};return Dt(H,i)}if(!C)return-1;e&&Lt(t);var W=e&&Le(i);if(W){var H={focusItemAtIndex:n,focusedItemIndex:r,nextChar:" ",sortedIndexByFirstChar:s,skipFocus:!1,isItemAtIndexDisabled:o};return Dt(H,i)}return-1}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var S={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},ft={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},z={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330};/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Me=function(a){v(i,a);function i(t,e){e===void 0&&(e={});var r=a.call(this,f(f({},i.defaultAdapter),t))||this;return r.disabled=!1,r.isMenuOpen=!1,r.useDefaultValidation=!0,r.customValidity=!0,r.lastSelectedIndex=z.UNSET_INDEX,r.clickDebounceTimeout=0,r.recentlyClicked=!1,r.leadingIcon=e.leadingIcon,r.helperText=e.helperText,r}return Object.defineProperty(i,"cssClasses",{get:function(){return S},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return z},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return ft},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),i.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},i.prototype.setSelectedIndex=function(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1),!(t>=this.adapter.getMenuItemCount())&&(t===z.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()),this.adapter.setSelectedIndex(t),e&&this.adapter.closeMenu(),!r&&this.lastSelectedIndex!==t&&this.handleChange(),this.lastSelectedIndex=t)},i.prototype.setValue=function(t,e){e===void 0&&(e=!1);var r=this.adapter.getMenuItemValues().indexOf(t);this.setSelectedIndex(r,!1,e)},i.prototype.getValue=function(){var t=this.adapter.getSelectedIndex(),e=this.adapter.getMenuItemValues();return t!==z.UNSET_INDEX?e[t]:""},i.prototype.getDisabled=function(){return this.disabled},i.prototype.setDisabled=function(t){this.disabled=t,this.disabled?(this.adapter.addClass(S.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(S.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},i.prototype.openMenu=function(){this.adapter.addClass(S.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},i.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},i.prototype.layout=function(){if(this.adapter.hasLabel()){var t=this.getValue().length>0,e=this.adapter.hasClass(S.FOCUSED),r=t||e,n=this.adapter.hasClass(S.REQUIRED);this.notchOutline(r),this.adapter.floatLabel(r),this.adapter.setLabelRequired(n)}},i.prototype.layoutOptions=function(){var t=this.adapter.getMenuItemValues(),e=t.indexOf(this.getValue());this.setSelectedIndex(e,!1,!0)},i.prototype.handleMenuOpened=function(){if(this.adapter.getMenuItemValues().length!==0){var t=this.getSelectedIndex(),e=t>=0?t:0;this.adapter.focusMenuItemAtIndex(e)}},i.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},i.prototype.handleMenuClosed=function(){this.adapter.removeClass(S.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},i.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue());var t=this.adapter.hasClass(S.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},i.prototype.handleMenuItemAction=function(t){this.setSelectedIndex(t,!0)},i.prototype.handleFocus=function(){this.adapter.addClass(S.FOCUSED),this.layout(),this.adapter.activateBottomLine()},i.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},i.prototype.handleClick=function(t){if(!(this.disabled||this.recentlyClicked)){if(this.setClickDebounceTimeout(),this.isMenuOpen){this.adapter.closeMenu();return}this.adapter.setRippleCenter(t),this.openMenu()}},i.prototype.handleKeydown=function(t){if(!(this.isMenuOpen||!this.adapter.hasClass(S.FOCUSED))){var e=P(t)===h.ENTER,r=P(t)===h.SPACEBAR,n=P(t)===h.ARROW_UP,s=P(t)===h.ARROW_DOWN,o=t.ctrlKey||t.metaKey;if(!o&&(!r&&t.key&&t.key.length===1||r&&this.adapter.isTypeaheadInProgress())){var d=r?" ":t.key,l=this.adapter.typeaheadMatchItem(d,this.getSelectedIndex());l>=0&&this.setSelectedIndex(l),t.preventDefault();return}!e&&!r&&!n&&!s||(n&&this.getSelectedIndex()>0?this.setSelectedIndex(this.getSelectedIndex()-1):s&&this.getSelectedIndex()<this.adapter.getMenuItemCount()-1&&this.setSelectedIndex(this.getSelectedIndex()+1),this.openMenu(),t.preventDefault())}},i.prototype.notchOutline=function(t){if(!!this.adapter.hasOutline()){var e=this.adapter.hasClass(S.FOCUSED);if(t){var r=z.LABEL_SCALE,n=this.adapter.getLabelWidth()*r;this.adapter.notchOutline(n)}else e||this.adapter.closeOutline()}},i.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},i.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},i.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},i.prototype.setUseDefaultValidation=function(t){this.useDefaultValidation=t},i.prototype.setValid=function(t){this.useDefaultValidation||(this.customValidity=t),this.adapter.setSelectAnchorAttr("aria-invalid",(!t).toString()),t?(this.adapter.removeClass(S.INVALID),this.adapter.removeMenuClass(S.MENU_INVALID)):(this.adapter.addClass(S.INVALID),this.adapter.addMenuClass(S.MENU_INVALID)),this.syncHelperTextValidity(t)},i.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(S.REQUIRED)&&!this.adapter.hasClass(S.DISABLED)?this.getSelectedIndex()!==z.UNSET_INDEX&&(this.getSelectedIndex()!==0||Boolean(this.getValue())):this.customValidity},i.prototype.setRequired=function(t){t?this.adapter.addClass(S.REQUIRED):this.adapter.removeClass(S.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",t.toString()),this.adapter.setLabelRequired(t)},i.prototype.getRequired=function(){return this.adapter.getSelectAnchorAttr("aria-required")==="true"},i.prototype.init=function(){var t=this.adapter.getAnchorElement();t&&(this.adapter.setMenuAnchorElement(t),this.adapter.setMenuAnchorCorner(Z.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(S.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(S.INVALID)),this.layout(),this.layoutOptions()},i.prototype.blur=function(){this.adapter.removeClass(S.FOCUSED),this.layout(),this.adapter.deactivateBottomLine();var t=this.adapter.hasClass(S.REQUIRED);t&&this.useDefaultValidation&&this.setValid(this.isValid())},i.prototype.syncHelperTextValidity=function(t){if(!!this.helperText){this.helperText.setValidity(t);var e=this.helperText.isVisible(),r=this.helperText.getId();e&&r?this.adapter.setSelectAnchorAttr(ft.ARIA_DESCRIBEDBY,r):this.adapter.removeSelectAnchorAttr(ft.ARIA_DESCRIBEDBY)}},i.prototype.setClickDebounceTimeout=function(){var t=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout(function(){t.recentlyClicked=!1},z.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},i}(O),mi=Me;/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var it;(function(a){a[a.ACTIVE=0]="ACTIVE",a[a.INACTIVE=1]="INACTIVE"})(it||(it={}));var u;(function(a){a[a.START=1]="START",a[a.END=2]="END"})(u||(u={}));/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Mt={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function Ne(a){return Boolean(a.document)&&typeof a.document.createElement=="function"}function Nt(a,i){if(Ne(a)&&i in Mt){var t=a.document.createElement("div"),e=Mt[i],r=e.standard,n=e.prefixed,s=r in t.style;return s?r:n}return i}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var y={DISABLED:"mdc-slider--disabled",DISCRETE:"mdc-slider--discrete",INPUT:"mdc-slider__input",RANGE:"mdc-slider--range",THUMB:"mdc-slider__thumb",THUMB_FOCUSED:"mdc-slider__thumb--focused",THUMB_KNOB:"mdc-slider__thumb-knob",THUMB_TOP:"mdc-slider__thumb--top",THUMB_WITH_INDICATOR:"mdc-slider__thumb--with-indicator",TICK_MARKS:"mdc-slider--tick-marks",TICK_MARKS_CONTAINER:"mdc-slider__tick-marks",TICK_MARK_ACTIVE:"mdc-slider__tick-mark--active",TICK_MARK_INACTIVE:"mdc-slider__tick-mark--inactive",TRACK:"mdc-slider__track",TRACK_ACTIVE:"mdc-slider__track--active_fill",VALUE_INDICATOR_TEXT:"mdc-slider__value-indicator-text"},Ft={STEP_SIZE:1,THUMB_UPDATE_MIN_PX:5},_={ARIA_VALUETEXT:"aria-valuetext",INPUT_DISABLED:"disabled",INPUT_MIN:"min",INPUT_MAX:"max",INPUT_VALUE:"value",INPUT_STEP:"step"};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var dt;(function(a){a.SLIDER_UPDATE="slider_update"})(dt||(dt={}));var pt=typeof window!="undefined",vi=function(a){v(i,a);function i(t){var e=a.call(this,f(f({},i.defaultAdapter),t))||this;return e.initialStylesRemoved=!1,e.isDisabled=!1,e.isDiscrete=!1,e.step=Ft.STEP_SIZE,e.hasTickMarks=!1,e.isRange=!1,e.thumb=null,e.downEventClientX=null,e.startThumbKnobWidth=0,e.endThumbKnobWidth=0,e.animFrame=new kt,e}return Object.defineProperty(i,"defaultAdapter",{get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},addThumbClass:function(){},removeThumbClass:function(){},getAttribute:function(){return null},getInputValue:function(){return""},setInputValue:function(){},getInputAttribute:function(){return null},setInputAttribute:function(){return null},removeInputAttribute:function(){return null},focusInput:function(){},isInputFocused:function(){return!1},getThumbKnobWidth:function(){return 0},getThumbBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getBoundingClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},isRTL:function(){return!1},setThumbStyleProperty:function(){},removeThumbStyleProperty:function(){},setTrackActiveStyleProperty:function(){},removeTrackActiveStyleProperty:function(){},setValueIndicatorText:function(){},getValueToAriaValueTextFn:function(){return null},updateTickMarks:function(){},setPointerCapture:function(){},emitChangeEvent:function(){},emitInputEvent:function(){},emitDragStartEvent:function(){},emitDragEndEvent:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){},registerThumbEventHandler:function(){},deregisterThumbEventHandler:function(){},registerInputEventHandler:function(){},deregisterInputEventHandler:function(){},registerBodyEventHandler:function(){},deregisterBodyEventHandler:function(){},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){var t=this;this.isDisabled=this.adapter.hasClass(y.DISABLED),this.isDiscrete=this.adapter.hasClass(y.DISCRETE),this.hasTickMarks=this.adapter.hasClass(y.TICK_MARKS),this.isRange=this.adapter.hasClass(y.RANGE);var e=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(_.INPUT_MIN,this.isRange?u.START:u.END),_.INPUT_MIN),r=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(_.INPUT_MAX,u.END),_.INPUT_MAX),n=this.convertAttributeValueToNumber(this.adapter.getInputAttribute(_.INPUT_VALUE,u.END),_.INPUT_VALUE),s=this.isRange?this.convertAttributeValueToNumber(this.adapter.getInputAttribute(_.INPUT_VALUE,u.START),_.INPUT_VALUE):e,o=this.adapter.getInputAttribute(_.INPUT_STEP,u.END),d=o?this.convertAttributeValueToNumber(o,_.INPUT_STEP):this.step;this.validateProperties({min:e,max:r,value:n,valueStart:s,step:d}),this.min=e,this.max=r,this.value=n,this.valueStart=s,this.step=d,this.numDecimalPlaces=Pt(this.step),this.valueBeforeDownEvent=n,this.valueStartBeforeDownEvent=s,this.mousedownOrTouchstartListener=this.handleMousedownOrTouchstart.bind(this),this.moveListener=this.handleMove.bind(this),this.pointerdownListener=this.handlePointerdown.bind(this),this.pointerupListener=this.handlePointerup.bind(this),this.thumbMouseenterListener=this.handleThumbMouseenter.bind(this),this.thumbMouseleaveListener=this.handleThumbMouseleave.bind(this),this.inputStartChangeListener=function(){t.handleInputChange(u.START)},this.inputEndChangeListener=function(){t.handleInputChange(u.END)},this.inputStartFocusListener=function(){t.handleInputFocus(u.START)},this.inputEndFocusListener=function(){t.handleInputFocus(u.END)},this.inputStartBlurListener=function(){t.handleInputBlur(u.START)},this.inputEndBlurListener=function(){t.handleInputBlur(u.END)},this.resizeListener=this.handleResize.bind(this),this.registerEventHandlers()},i.prototype.destroy=function(){this.deregisterEventHandlers()},i.prototype.setMin=function(t){this.min=t,this.isRange||(this.valueStart=t),this.updateUI()},i.prototype.setMax=function(t){this.max=t,this.updateUI()},i.prototype.getMin=function(){return this.min},i.prototype.getMax=function(){return this.max},i.prototype.getValue=function(){return this.value},i.prototype.setValue=function(t){if(this.isRange&&t<this.valueStart)throw new Error("end thumb value ("+t+") must be >= start thumb "+("value ("+this.valueStart+")"));this.updateValue(t,u.END)},i.prototype.getValueStart=function(){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");return this.valueStart},i.prototype.setValueStart=function(t){if(!this.isRange)throw new Error("`valueStart` is only applicable for range sliders.");if(this.isRange&&t>this.value)throw new Error("start thumb value ("+t+") must be <= end thumb "+("value ("+this.value+")"));this.updateValue(t,u.START)},i.prototype.setStep=function(t){this.step=t,this.numDecimalPlaces=Pt(t),this.updateUI()},i.prototype.setIsDiscrete=function(t){this.isDiscrete=t,this.updateValueIndicatorUI(),this.updateTickMarksUI()},i.prototype.getStep=function(){return this.step},i.prototype.setHasTickMarks=function(t){this.hasTickMarks=t,this.updateTickMarksUI()},i.prototype.getDisabled=function(){return this.isDisabled},i.prototype.setDisabled=function(t){this.isDisabled=t,t?(this.adapter.addClass(y.DISABLED),this.isRange&&this.adapter.setInputAttribute(_.INPUT_DISABLED,"",u.START),this.adapter.setInputAttribute(_.INPUT_DISABLED,"",u.END)):(this.adapter.removeClass(y.DISABLED),this.isRange&&this.adapter.removeInputAttribute(_.INPUT_DISABLED,u.START),this.adapter.removeInputAttribute(_.INPUT_DISABLED,u.END))},i.prototype.getIsRange=function(){return this.isRange},i.prototype.layout=function(t){var e=t===void 0?{}:t,r=e.skipUpdateUI;this.rect=this.adapter.getBoundingClientRect(),this.isRange&&(this.startThumbKnobWidth=this.adapter.getThumbKnobWidth(u.START),this.endThumbKnobWidth=this.adapter.getThumbKnobWidth(u.END)),r||this.updateUI()},i.prototype.handleResize=function(){this.layout()},i.prototype.handleDown=function(t){if(!this.isDisabled){this.valueStartBeforeDownEvent=this.valueStart,this.valueBeforeDownEvent=this.value;var e=t.clientX!=null?t.clientX:t.targetTouches[0].clientX;this.downEventClientX=e;var r=this.mapClientXOnSliderScale(e);this.thumb=this.getThumbFromDownEvent(e,r),this.thumb!==null&&(this.handleDragStart(t,r,this.thumb),this.updateValue(r,this.thumb,{emitInputEvent:!0}))}},i.prototype.handleMove=function(t){if(!this.isDisabled){t.preventDefault();var e=t.clientX!=null?t.clientX:t.targetTouches[0].clientX,r=this.thumb!=null;if(this.thumb=this.getThumbFromMoveEvent(e),this.thumb!==null){var n=this.mapClientXOnSliderScale(e);r||(this.handleDragStart(t,n,this.thumb),this.adapter.emitDragStartEvent(n,this.thumb)),this.updateValue(n,this.thumb,{emitInputEvent:!0})}}},i.prototype.handleUp=function(){if(!(this.isDisabled||this.thumb===null)){var t=this.thumb===u.START?this.valueStartBeforeDownEvent:this.valueBeforeDownEvent,e=this.thumb===u.START?this.valueStart:this.value;t!==e&&this.adapter.emitChangeEvent(e,this.thumb),this.adapter.emitDragEndEvent(e,this.thumb),this.thumb=null}},i.prototype.handleThumbMouseenter=function(){!this.isDiscrete||!this.isRange||(this.adapter.addThumbClass(y.THUMB_WITH_INDICATOR,u.START),this.adapter.addThumbClass(y.THUMB_WITH_INDICATOR,u.END))},i.prototype.handleThumbMouseleave=function(){!this.isDiscrete||!this.isRange||this.adapter.isInputFocused(u.START)||this.adapter.isInputFocused(u.END)||(this.adapter.removeThumbClass(y.THUMB_WITH_INDICATOR,u.START),this.adapter.removeThumbClass(y.THUMB_WITH_INDICATOR,u.END))},i.prototype.handleMousedownOrTouchstart=function(t){var e=this,r=t.type==="mousedown"?"mousemove":"touchmove";this.adapter.registerBodyEventHandler(r,this.moveListener);var n=function(){e.handleUp(),e.adapter.deregisterBodyEventHandler(r,e.moveListener),e.adapter.deregisterEventHandler("mouseup",n),e.adapter.deregisterEventHandler("touchend",n)};this.adapter.registerBodyEventHandler("mouseup",n),this.adapter.registerBodyEventHandler("touchend",n),this.handleDown(t)},i.prototype.handlePointerdown=function(t){this.adapter.setPointerCapture(t.pointerId),this.adapter.registerEventHandler("pointermove",this.moveListener),this.handleDown(t)},i.prototype.handleInputChange=function(t){var e=Number(this.adapter.getInputValue(t));t===u.START?this.setValueStart(e):this.setValue(e),this.adapter.emitChangeEvent(t===u.START?this.valueStart:this.value,t),this.adapter.emitInputEvent(t===u.START?this.valueStart:this.value,t)},i.prototype.handleInputFocus=function(t){if(this.adapter.addThumbClass(y.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.addThumbClass(y.THUMB_WITH_INDICATOR,t),this.isRange)){var e=t===u.START?u.END:u.START;this.adapter.addThumbClass(y.THUMB_WITH_INDICATOR,e)}},i.prototype.handleInputBlur=function(t){if(this.adapter.removeThumbClass(y.THUMB_FOCUSED,t),!!this.isDiscrete&&(this.adapter.removeThumbClass(y.THUMB_WITH_INDICATOR,t),this.isRange)){var e=t===u.START?u.END:u.START;this.adapter.removeThumbClass(y.THUMB_WITH_INDICATOR,e)}},i.prototype.handleDragStart=function(t,e,r){this.adapter.emitDragStartEvent(e,r),this.adapter.focusInput(r),t.preventDefault()},i.prototype.getThumbFromDownEvent=function(t,e){if(!this.isRange)return u.END;var r=this.adapter.getThumbBoundingClientRect(u.START),n=this.adapter.getThumbBoundingClientRect(u.END),s=t>=r.left&&t<=r.right,o=t>=n.left&&t<=n.right;return s&&o?null:s?u.START:o?u.END:e<this.valueStart?u.START:e>this.value?u.END:e-this.valueStart<=this.value-e?u.START:u.END},i.prototype.getThumbFromMoveEvent=function(t){if(this.thumb!==null)return this.thumb;if(this.downEventClientX===null)throw new Error("`downEventClientX` is null after move event.");var e=Math.abs(this.downEventClientX-t)<Ft.THUMB_UPDATE_MIN_PX;if(e)return this.thumb;var r=t<this.downEventClientX;return r?this.adapter.isRTL()?u.END:u.START:this.adapter.isRTL()?u.START:u.END},i.prototype.updateUI=function(t){this.updateThumbAndInputAttributes(t),this.updateThumbAndTrackUI(t),this.updateValueIndicatorUI(t),this.updateTickMarksUI()},i.prototype.updateThumbAndInputAttributes=function(t){if(!!t){var e=this.isRange&&t===u.START?this.valueStart:this.value,r=String(e);this.adapter.setInputAttribute(_.INPUT_VALUE,r,t),this.isRange&&t===u.START?this.adapter.setInputAttribute(_.INPUT_MIN,r,u.END):this.isRange&&t===u.END&&this.adapter.setInputAttribute(_.INPUT_MAX,r,u.START),this.adapter.getInputValue(t)!==r&&this.adapter.setInputValue(r,t);var n=this.adapter.getValueToAriaValueTextFn();n&&this.adapter.setInputAttribute(_.ARIA_VALUETEXT,n(e),t)}},i.prototype.updateValueIndicatorUI=function(t){if(!!this.isDiscrete){var e=this.isRange&&t===u.START?this.valueStart:this.value;this.adapter.setValueIndicatorText(e,t===u.START?u.START:u.END),!t&&this.isRange&&this.adapter.setValueIndicatorText(this.valueStart,u.START)}},i.prototype.updateTickMarksUI=function(){if(!(!this.isDiscrete||!this.hasTickMarks)){var t=(this.valueStart-this.min)/this.step,e=(this.value-this.valueStart)/this.step+1,r=(this.max-this.value)/this.step,n=Array.from({length:t}).fill(it.INACTIVE),s=Array.from({length:e}).fill(it.ACTIVE),o=Array.from({length:r}).fill(it.INACTIVE);this.adapter.updateTickMarks(n.concat(s).concat(o))}},i.prototype.mapClientXOnSliderScale=function(t){var e=t-this.rect.left,r=e/this.rect.width;this.adapter.isRTL()&&(r=1-r);var n=this.min+r*(this.max-this.min);return n===this.max||n===this.min?n:Number(this.quantize(n).toFixed(this.numDecimalPlaces))},i.prototype.quantize=function(t){var e=Math.round((t-this.min)/this.step);return this.min+e*this.step},i.prototype.updateValue=function(t,e,r){var n=r===void 0?{}:r,s=n.emitInputEvent;if(t=this.clampValue(t,e),this.isRange&&e===u.START){if(this.valueStart===t)return;this.valueStart=t}else{if(this.value===t)return;this.value=t}this.updateUI(e),s&&this.adapter.emitInputEvent(e===u.START?this.valueStart:this.value,e)},i.prototype.clampValue=function(t,e){t=Math.min(Math.max(t,this.min),this.max);var r=this.isRange&&e===u.START&&t>this.value;if(r)return this.value;var n=this.isRange&&e===u.END&&t<this.valueStart;return n?this.valueStart:t},i.prototype.updateThumbAndTrackUI=function(t){var e=this,r=this,n=r.max,s=r.min,o=(this.value-this.valueStart)/(n-s),d=o*this.rect.width,l=this.adapter.isRTL(),c=pt?Nt(window,"transform"):"transform";if(this.isRange){var p=this.adapter.isRTL()?(n-this.value)/(n-s)*this.rect.width:(this.valueStart-s)/(n-s)*this.rect.width,T=p+d;this.animFrame.request(dt.SLIDER_UPDATE,function(){var m=!l&&t===u.START||l&&t!==u.START;m?(e.adapter.setTrackActiveStyleProperty("transform-origin","right"),e.adapter.setTrackActiveStyleProperty("left","unset"),e.adapter.setTrackActiveStyleProperty("right",e.rect.width-T+"px")):(e.adapter.setTrackActiveStyleProperty("transform-origin","left"),e.adapter.setTrackActiveStyleProperty("right","unset"),e.adapter.setTrackActiveStyleProperty("left",p+"px")),e.adapter.setTrackActiveStyleProperty(c,"scaleX("+o+")");var A=l?T:p,C=e.adapter.isRTL()?p:T;(t===u.START||!t||!e.initialStylesRemoved)&&e.adapter.setThumbStyleProperty(c,"translateX("+A+"px)",u.START),(t===u.END||!t||!e.initialStylesRemoved)&&e.adapter.setThumbStyleProperty(c,"translateX("+C+"px)",u.END),e.removeInitialStyles(l),e.updateOverlappingThumbsUI(A,C,t)})}else this.animFrame.request(dt.SLIDER_UPDATE,function(){var m=l?e.rect.width-d:d;e.adapter.setThumbStyleProperty(c,"translateX("+m+"px)",u.END),e.adapter.setTrackActiveStyleProperty(c,"scaleX("+o+")"),e.removeInitialStyles(l)})},i.prototype.removeInitialStyles=function(t){if(!this.initialStylesRemoved){var e=t?"right":"left";this.adapter.removeThumbStyleProperty(e,u.END),this.isRange&&this.adapter.removeThumbStyleProperty(e,u.START),this.initialStylesRemoved=!0,this.resetTrackAndThumbAnimation()}},i.prototype.resetTrackAndThumbAnimation=function(){var t=this;if(!!this.isDiscrete){var e=pt?Nt(window,"transition"):"transition",r="all 0s ease 0s";this.adapter.setThumbStyleProperty(e,r,u.END),this.isRange&&this.adapter.setThumbStyleProperty(e,r,u.START),this.adapter.setTrackActiveStyleProperty(e,r),requestAnimationFrame(function(){t.adapter.removeThumbStyleProperty(e,u.END),t.adapter.removeTrackActiveStyleProperty(e),t.isRange&&t.adapter.removeThumbStyleProperty(e,u.START)})}},i.prototype.updateOverlappingThumbsUI=function(t,e,r){var n=!1;if(this.adapter.isRTL()){var s=t-this.startThumbKnobWidth/2,o=e+this.endThumbKnobWidth/2;n=o>=s}else{var d=t+this.startThumbKnobWidth/2,l=e-this.endThumbKnobWidth/2;n=d>=l}n?(this.adapter.addThumbClass(y.THUMB_TOP,r||u.END),this.adapter.removeThumbClass(y.THUMB_TOP,r===u.START?u.END:u.START)):(this.adapter.removeThumbClass(y.THUMB_TOP,u.START),this.adapter.removeThumbClass(y.THUMB_TOP,u.END))},i.prototype.convertAttributeValueToNumber=function(t,e){if(t===null)throw new Error("MDCSliderFoundation: `"+e+"` must be non-null.");var r=Number(t);if(isNaN(r))throw new Error("MDCSliderFoundation: `"+e+"` value is "+("`"+t+"`, but must be a number."));return r},i.prototype.validateProperties=function(t){var e=t.min,r=t.max,n=t.value,s=t.valueStart,o=t.step;if(e>=r)throw new Error("MDCSliderFoundation: min must be strictly less than max. "+("Current: [min: "+e+", max: "+r+"]"));if(o<=0)throw new Error("MDCSliderFoundation: step must be a positive number. "+("Current step: "+this.step));if(this.isRange){if(n<e||n>r||s<e||s>r)throw new Error("MDCSliderFoundation: values must be in [min, max] range. "+("Current values: [start value: "+s+", end value: "+n+"]"));if(s>n)throw new Error("MDCSliderFoundation: start value must be <= end value. "+("Current values: [start value: "+s+", end value: "+n+"]"));var d=(s-e)/o,l=(n-e)/o;if(d%1!==0||l%1!==0)throw new Error("MDCSliderFoundation: Slider values must be valid based on the "+("step value. Current values: [start value: "+s+", ")+("end value: "+n+"]"))}else{if(n<e||n>r)throw new Error("MDCSliderFoundation: value must be in [min, max] range. "+("Current value: "+n));var l=(n-e)/o;if(l%1!==0)throw new Error("MDCSliderFoundation: Slider value must be valid based on the "+("step value. Current value: "+n))}},i.prototype.registerEventHandlers=function(){this.adapter.registerWindowEventHandler("resize",this.resizeListener),i.SUPPORTS_POINTER_EVENTS?(this.adapter.registerEventHandler("pointerdown",this.pointerdownListener),this.adapter.registerEventHandler("pointerup",this.pointerupListener)):(this.adapter.registerEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.registerEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.registerThumbEventHandler(u.START,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(u.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(u.START,"change",this.inputStartChangeListener),this.adapter.registerInputEventHandler(u.START,"focus",this.inputStartFocusListener),this.adapter.registerInputEventHandler(u.START,"blur",this.inputStartBlurListener)),this.adapter.registerThumbEventHandler(u.END,"mouseenter",this.thumbMouseenterListener),this.adapter.registerThumbEventHandler(u.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.registerInputEventHandler(u.END,"change",this.inputEndChangeListener),this.adapter.registerInputEventHandler(u.END,"focus",this.inputEndFocusListener),this.adapter.registerInputEventHandler(u.END,"blur",this.inputEndBlurListener)},i.prototype.deregisterEventHandlers=function(){this.adapter.deregisterWindowEventHandler("resize",this.resizeListener),i.SUPPORTS_POINTER_EVENTS?(this.adapter.deregisterEventHandler("pointerdown",this.pointerdownListener),this.adapter.deregisterEventHandler("pointerup",this.pointerupListener)):(this.adapter.deregisterEventHandler("mousedown",this.mousedownOrTouchstartListener),this.adapter.deregisterEventHandler("touchstart",this.mousedownOrTouchstartListener)),this.isRange&&(this.adapter.deregisterThumbEventHandler(u.START,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(u.START,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(u.START,"change",this.inputStartChangeListener),this.adapter.deregisterInputEventHandler(u.START,"focus",this.inputStartFocusListener),this.adapter.deregisterInputEventHandler(u.START,"blur",this.inputStartBlurListener)),this.adapter.deregisterThumbEventHandler(u.END,"mouseenter",this.thumbMouseenterListener),this.adapter.deregisterThumbEventHandler(u.END,"mouseleave",this.thumbMouseleaveListener),this.adapter.deregisterInputEventHandler(u.END,"change",this.inputEndChangeListener),this.adapter.deregisterInputEventHandler(u.END,"focus",this.inputEndFocusListener),this.adapter.deregisterInputEventHandler(u.END,"blur",this.inputEndBlurListener)},i.prototype.handlePointerup=function(){this.handleUp(),this.adapter.deregisterEventHandler("pointermove",this.moveListener)},i.SUPPORTS_POINTER_EVENTS=pt&&Boolean(window.PointerEvent)&&!Fe(),i}(O);function Fe(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}function Pt(a){var i=/(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(a));if(!i)return 0;var t=i[1]||"",e=i[2]||0;return Math.max(0,(t==="0"?0:t.length)-Number(e))}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var U={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},Tt={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},w={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xt=U.OPENING,Ht=U.OPEN,Bt=U.CLOSING,Pe=Tt.REASON_ACTION,mt=Tt.REASON_DISMISS,xe=function(a){v(i,a);function i(t){var e=a.call(this,f(f({},i.defaultAdapter),t))||this;return e.opened=!1,e.animationFrame=0,e.animationTimer=0,e.autoDismissTimer=0,e.autoDismissTimeoutMs=w.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,e.closeOnEscape=!0,e}return Object.defineProperty(i,"cssClasses",{get:function(){return U},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return Tt},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return w},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),i.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(xt),this.adapter.removeClass(Ht),this.adapter.removeClass(Bt)},i.prototype.open=function(){var t=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(Bt),this.adapter.addClass(xt),this.adapter.announce(),this.runNextAnimationFrame(function(){t.adapter.addClass(Ht),t.animationTimer=setTimeout(function(){var e=t.getTimeoutMs();t.handleAnimationTimerEnd(),t.adapter.notifyOpened(),e!==w.INDETERMINATE&&(t.autoDismissTimer=setTimeout(function(){t.close(mt)},e))},w.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},i.prototype.close=function(t){var e=this;t===void 0&&(t=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(U.CLOSING),this.adapter.removeClass(U.OPEN),this.adapter.removeClass(U.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){e.handleAnimationTimerEnd(),e.adapter.notifyClosed(t)},w.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},i.prototype.isOpen=function(){return this.opened},i.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},i.prototype.setTimeoutMs=function(t){var e=w.MIN_AUTO_DISMISS_TIMEOUT_MS,r=w.MAX_AUTO_DISMISS_TIMEOUT_MS,n=w.INDETERMINATE;if(t===w.INDETERMINATE||t<=r&&t>=e)this.autoDismissTimeoutMs=t;else throw new Error(`
        timeoutMs must be an integer in the range `+e+"\u2013"+r+`
        (or `+n+" to disable), but got '"+t+"'")},i.prototype.getCloseOnEscape=function(){return this.closeOnEscape},i.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t},i.prototype.handleKeyDown=function(t){var e=t.key==="Escape"||t.keyCode===27;e&&this.getCloseOnEscape()&&this.close(mt)},i.prototype.handleActionButtonClick=function(t){this.close(Pe)},i.prototype.handleActionIconClick=function(t){this.close(mt)},i.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},i.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(U.OPENING),this.adapter.removeClass(U.CLOSING)},i.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(t,0)})},i}(O),Ti=xe;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var He={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},Be={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var k=function(a){v(i,a);function i(t){return a.call(this,f(f({},i.defaultAdapter),t))||this}return Object.defineProperty(i,"cssClasses",{get:function(){return He},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return Be},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),i.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},i}(O);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var we=function(a){v(i,a);function i(){return a!==null&&a.apply(this,arguments)||this}return i.prototype.activate=function(){this.adapter.addClass(k.cssClasses.ACTIVE)},i.prototype.deactivate=function(){this.adapter.removeClass(k.cssClasses.ACTIVE)},i}(k),Ei=we;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ue=function(a){v(i,a);function i(){return a!==null&&a.apply(this,arguments)||this}return i.prototype.activate=function(t){if(!t){this.adapter.addClass(k.cssClasses.ACTIVE);return}var e=this.computeContentClientRect(),r=t.width/e.width,n=t.left-e.left;this.adapter.addClass(k.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+n+"px) scaleX("+r+")"),this.computeContentClientRect(),this.adapter.removeClass(k.cssClasses.NO_TRANSITION),this.adapter.addClass(k.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},i.prototype.deactivate=function(){this.adapter.removeClass(k.cssClasses.ACTIVE)},i}(k),Ai=Ue;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var at={ACTIVE:"mdc-tab--active"},et={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ke=function(a){v(i,a);function i(t){var e=a.call(this,f(f({},i.defaultAdapter),t))||this;return e.focusOnActivate=!0,e}return Object.defineProperty(i,"cssClasses",{get:function(){return at},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return et},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),i.prototype.handleClick=function(){this.adapter.notifyInteracted()},i.prototype.isActive=function(){return this.adapter.hasClass(at.ACTIVE)},i.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},i.prototype.activate=function(t){this.adapter.addClass(at.ACTIVE),this.adapter.setAttr(et.ARIA_SELECTED,"true"),this.adapter.setAttr(et.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&this.adapter.focus()},i.prototype.deactivate=function(){!this.isActive()||(this.adapter.removeClass(at.ACTIVE),this.adapter.setAttr(et.ARIA_SELECTED,"false"),this.adapter.setAttr(et.TABINDEX,"-1"),this.adapter.deactivateIndicator())},i.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),e=this.adapter.getOffsetLeft(),r=this.adapter.getContentOffsetWidth(),n=this.adapter.getContentOffsetLeft();return{contentLeft:e+n,contentRight:e+n+r,rootLeft:e,rootRight:e+t}},i}(O),gi=ke;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ve={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},Ge={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Et=function(){function a(i){this.adapter=i}return a}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var We=function(a){v(i,a);function i(){return a!==null&&a.apply(this,arguments)||this}return i.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),e=this.calculateScrollEdges().right;return Math.round(e-t)},i.prototype.scrollToRTL=function(t){var e=this.calculateScrollEdges(),r=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(e.right-t);return{finalScrollPosition:n,scrollDelta:n-r}},i.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(e-t);return{finalScrollPosition:r,scrollDelta:r-e}},i.prototype.getAnimatingScrollPosition=function(t){return t},i.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),e=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-e}},i.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.left,t),e.right)},i}(Et);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ke=function(a){v(i,a);function i(){return a!==null&&a.apply(this,arguments)||this}return i.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(t-e)},i.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(-t);return{finalScrollPosition:r,scrollDelta:r-e}},i.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(e-t);return{finalScrollPosition:r,scrollDelta:r-e}},i.prototype.getAnimatingScrollPosition=function(t,e){return t-e},i.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),e=this.adapter.getScrollAreaOffsetWidth();return{left:e-t,right:0}},i.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.max(Math.min(e.right,t),e.left)},i}(Et);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ze=function(a){v(i,a);function i(){return a!==null&&a.apply(this,arguments)||this}return i.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(e-t)},i.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(t);return{finalScrollPosition:r,scrollDelta:e-r}},i.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(e+t);return{finalScrollPosition:r,scrollDelta:e-r}},i.prototype.getAnimatingScrollPosition=function(t,e){return t+e},i.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),e=this.adapter.getScrollAreaOffsetWidth();return{left:t-e,right:0}},i.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.right,t),e.left)},i}(Et);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Xe=function(a){v(i,a);function i(t){var e=a.call(this,f(f({},i.defaultAdapter),t))||this;return e.isAnimating=!1,e}return Object.defineProperty(i,"cssClasses",{get:function(){return Ve},enumerable:!1,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return Ge},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),i.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(i.cssClasses.SCROLL_AREA_SCROLL)},i.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX(),e=this.adapter.getScrollAreaScrollLeft();return e-t},i.prototype.handleInteraction=function(){!this.isAnimating||this.stopScrollAnimation()},i.prototype.handleTransitionEnd=function(t){var e=t.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(e,i.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(i.cssClasses.ANIMATING))},i.prototype.incrementScroll=function(t){t!==0&&this.animate(this.getIncrementScrollOperation(t))},i.prototype.incrementScrollImmediate=function(t){if(t!==0){var e=this.getIncrementScrollOperation(t);e.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition))}},i.prototype.scrollTo=function(t){if(this.isRTL()){this.scrollToImplRTL(t);return}this.scrollToImpl(t)},i.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},i.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if(t==="none")return 0;var e=/\((.+?)\)/.exec(t);if(!e)return 0;var r=e[1],n=wt(r.split(","),6);n[0],n[1],n[2],n[3];var s=n[4];return n[5],parseFloat(s)},i.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.left,t),e.right)},i.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},i.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),e=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-e}},i.prototype.scrollToImpl=function(t){var e=this.getScrollPosition(),r=this.clampScrollValue(t),n=r-e;this.animate({finalScrollPosition:r,scrollDelta:n})},i.prototype.scrollToImplRTL=function(t){var e=this.getRTLScroller().scrollToRTL(t);this.animate(e)},i.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var e=this.getScrollPosition(),r=t+e,n=this.clampScrollValue(r),s=n-e;return{finalScrollPosition:n,scrollDelta:s}},i.prototype.animate=function(t){var e=this;t.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){e.adapter.addClass(i.cssClasses.ANIMATING),e.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},i.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(i.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},i.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),e=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(e,t):e-t},i.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var e=this.adapter.getScrollAreaScrollLeft();if(e<0)return this.adapter.setScrollAreaScrollLeft(t),new Ke(this.adapter);var r=this.adapter.computeScrollAreaClientRect(),n=this.adapter.computeScrollContentClientRect(),s=Math.round(n.right-r.right);return this.adapter.setScrollAreaScrollLeft(t),s===e?new ze(this.adapter):new We(this.adapter)},i.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},i}(O),Si=Xe;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var b={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},x={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var j=new Set;j.add(b.ARROW_LEFT_KEY);j.add(b.ARROW_RIGHT_KEY);j.add(b.END_KEY);j.add(b.HOME_KEY);j.add(b.ENTER_KEY);j.add(b.SPACE_KEY);var $=new Map;$.set(x.ARROW_LEFT_KEYCODE,b.ARROW_LEFT_KEY);$.set(x.ARROW_RIGHT_KEYCODE,b.ARROW_RIGHT_KEY);$.set(x.END_KEYCODE,b.END_KEY);$.set(x.HOME_KEYCODE,b.HOME_KEY);$.set(x.ENTER_KEYCODE,b.ENTER_KEY);$.set(x.SPACE_KEYCODE,b.SPACE_KEY);var je=function(a){v(i,a);function i(t){var e=a.call(this,f(f({},i.defaultAdapter),t))||this;return e.useAutomaticActivation=!1,e}return Object.defineProperty(i,"strings",{get:function(){return b},enumerable:!1,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return x},enumerable:!1,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),i.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},i.prototype.activateTab=function(t){var e=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(t)||t===e)){var r;e!==-1&&(this.adapter.deactivateTabAtIndex(e),r=this.adapter.getTabIndicatorClientRectAtIndex(e)),this.adapter.activateTabAtIndex(t,r),this.scrollIntoView(t),this.adapter.notifyTabActivated(t)}},i.prototype.handleKeyDown=function(t){var e=this.getKeyFromEvent(t);if(e!==void 0)if(this.isActivationKey(e)||t.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(e))return;var r=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),e);this.adapter.setActiveTab(r),this.scrollIntoView(r)}else{var n=this.adapter.getFocusedTabIndex();if(this.isActivationKey(e))this.adapter.setActiveTab(n);else{var r=this.determineTargetFromKey(n,e);this.adapter.focusTabAtIndex(r),this.scrollIntoView(r)}}},i.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},i.prototype.scrollIntoView=function(t){if(!!this.indexIsInRange(t)){if(t===0){this.adapter.scrollTo(0);return}if(t===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(t);return}this.scrollIntoViewImpl(t)}},i.prototype.determineTargetFromKey=function(t,e){var r=this.isRTL(),n=this.adapter.getTabListLength()-1,s=e===b.END_KEY,o=e===b.ARROW_LEFT_KEY&&!r||e===b.ARROW_RIGHT_KEY&&r,d=e===b.ARROW_RIGHT_KEY&&!r||e===b.ARROW_LEFT_KEY&&r,l=t;return s?l=n:o?l-=1:d?l+=1:l=0,l<0?l=n:l>n&&(l=0),l},i.prototype.calculateScrollIncrement=function(t,e,r,n){var s=this.adapter.getTabDimensionsAtIndex(e),o=s.contentLeft-r-n,d=s.contentRight-r,l=d-x.EXTRA_SCROLL_AMOUNT,c=o+x.EXTRA_SCROLL_AMOUNT;return e<t?Math.min(l,0):Math.max(c,0)},i.prototype.calculateScrollIncrementRTL=function(t,e,r,n,s){var o=this.adapter.getTabDimensionsAtIndex(e),d=s-o.contentLeft-r,l=s-o.contentRight-r-n,c=l+x.EXTRA_SCROLL_AMOUNT,p=d-x.EXTRA_SCROLL_AMOUNT;return e>t?Math.max(c,0):Math.min(p,0)},i.prototype.findAdjacentTabIndexClosestToEdge=function(t,e,r,n){var s=e.rootLeft-r,o=e.rootRight-r-n,d=s+o,l=s<0||d<0,c=o>0||d>0;return l?t-1:c?t+1:-1},i.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,e,r,n,s){var o=s-e.rootLeft-n-r,d=s-e.rootRight-r,l=o+d,c=o>0||l>0,p=d<0||l<0;return c?t+1:p?t-1:-1},i.prototype.getKeyFromEvent=function(t){return j.has(t.key)?t.key:$.get(t.keyCode)},i.prototype.isActivationKey=function(t){return t===b.SPACE_KEY||t===b.ENTER_KEY},i.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},i.prototype.isRTL=function(){return this.adapter.isRTL()},i.prototype.scrollIntoViewImpl=function(t){var e=this.adapter.getScrollPosition(),r=this.adapter.getOffsetWidth(),n=this.adapter.getTabDimensionsAtIndex(t),s=this.findAdjacentTabIndexClosestToEdge(t,n,e,r);if(!!this.indexIsInRange(s)){var o=this.calculateScrollIncrement(t,s,e,r);this.adapter.incrementScroll(o)}},i.prototype.scrollIntoViewImplRTL=function(t){var e=this.adapter.getScrollPosition(),r=this.adapter.getOffsetWidth(),n=this.adapter.getTabDimensionsAtIndex(t),s=this.adapter.getScrollContentWidth(),o=this.findAdjacentTabIndexClosestToEdgeRTL(t,n,e,r,s);if(!!this.indexIsInRange(o)){var d=this.calculateScrollIncrementRTL(t,o,e,r,s);this.adapter.incrementScroll(d)}},i}(O),Ii=je;export{vi as A,u as B,gi as C,Si as D,O as E,qt as F,Qe as G,Z as H,I,li as J,h as K,Q as L,Ze as M,ci as N,Ei as O,Ai as P,Ii as Q,it as T,Je as a,ri as b,ni as c,di as d,Ti as e,Ye as f,ti as g,qe as h,ei as i,E as j,ii as k,ai as l,Kt as m,oi as n,si as o,ue as p,ui as q,Se as r,Yt as s,mi as t,hi as u,Le as v,Dt as w,fi as x,P as y,pi as z};
