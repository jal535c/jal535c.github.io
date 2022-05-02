/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","jquery","ojs/ojcore-base","ojs/ojdomutils"],function(e,t,n,l){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
const r=function(){};r._TAB_INDEX="tabIndex",r._DATA_OJ_TABMOD="data-oj-tabmod",r._FOCUSABLE_ELEMENTS_QUERY="input, select, button, a[href], textarea, object, [tabIndex]:not([tabIndex='-1'])",r.CHECKVIEWPORT_THRESHOLD=3,r.getFocusableElementsInNode=function(e,t){var l=[],i=n.AgentUtils.getAgentInfo(),s=!0;if(n.AgentUtils.BROWSER.IE===i.browser&&null==e.parentNode&&(s=!1),s)for(var E=e.querySelectorAll(r._FOCUSABLE_ELEMENTS_QUERY),o=E.length,a=0;a<o;a++){var u=E[a];if(!u.disabled&&(t||"none"!==u.style.display)){var _=parseInt(u.getAttribute(r._TAB_INDEX),10);(isNaN(_)||_>=0)&&l.push(u)}}return l},r.disableElement=function(e){var t=parseInt(e.getAttribute(r._TAB_INDEX),10);e.setAttribute(r._DATA_OJ_TABMOD,t),e.setAttribute(r._TAB_INDEX,-1)},r.disableAllFocusableElements=function(e,t,n){for(var l=[],i=r.getFocusableElementsInNode(e,t),s=0;s<i.length;s++)n&&i[s]===document.activeElement||(r.disableElement(i[s]),l.push(i[s]));return l},r.enableAllFocusableElements=function(e){for(var t=e.querySelectorAll("["+r._DATA_OJ_TABMOD+"]"),n=0;n<t.length;n++){var l=parseInt(t[n].getAttribute(r._DATA_OJ_TABMOD),10);t[n].removeAttribute(r._DATA_OJ_TABMOD),isNaN(l)?t[n].removeAttribute(r._TAB_INDEX):t[n].setAttribute(r._TAB_INDEX,l)}return t},r.getFocusableElementsIncludingDisabled=function(e){var t=[];let n=e.querySelectorAll(r._FOCUSABLE_ELEMENTS_QUERY+",["+r._DATA_OJ_TABMOD+"]");for(var l=0;l<n.length;l++){var i=n[l];i.disabled||"none"===i.style.display||t.push(i)}return t},r.handleActionableTab=function(e,t){var n=r.getFocusableElementsInNode(t);return n.length>0&&e.target===n[n.length-1]&&(n[0].focus(),!0)},r.handleActionablePrevTab=function(e,t){var n=r.getFocusableElementsInNode(t);return n.length>0&&e.target===n[0]&&(n[n.length-1].focus(),!0)},r.isEventClickthroughDisabled=function(e,t){for(var n=e.target;null!=n&&n!==t;){if(r.isClickthroughDisabled(n))return!0;n=n.parentNode}return!1},r.isClickthroughDisabled=function(e){return"disabled"===e.dataset.ojClickthrough},r.getDefaultScrollBarWidth=function(e){var t;if(e&&e.style){var n=e.style.visibility,l=e.style.position,r=e.style.overflowY,i=e.style.height,s=e.style.width;e.style.visibility="hidden",e.style.position="absolute",e.style.overflowY="hidden",e.style.height="50px",e.style.width="50px";var E=e.offsetWidth-e.clientWidth;e.style.overflowY="scroll",t=e.offsetWidth-e.clientWidth-E,e.style.width=s,e.style.height=i,e.style.overflowY=r,e.style.position=l,e.style.visibility=n}return t},r.disableDefaultBrowserStyling=function(e){e.setAttribute("x-ms-format-detection","none")},r.applyMergedInlineStyles=function(e,t,n){var l=r.convertStringToStyleObj(n),i=r.convertStringToStyleObj(t),s=Object.assign({},l,i);r.applyStyleObj(e,s)},r.convertStringToStyleObj=function(e){var t={};if(e.split)for(var n=e.split(";"),l=0;l<n.length;l++){var r=n[l];if(""!==r){var i=r.split(":");2===i.length&&(t[i[0].trim()]=i[1].trim())}}return t},r.applyStyleObj=function(e,t){for(var n=Object.keys(t),l=Object.values(t),r=0;r<n.length;r++)e.style[n[r]]=l[r]},r.isMobileTouchDevice=function(){var e=n.AgentUtils.getAgentInfo();return e.os===n.AgentUtils.OS.IOS||e.os===n.AgentUtils.OS.ANDROID||e.os===n.AgentUtils.OS.WINDOWSPHONE},r.getNoJQFocusHandlers=function(e,n){return{focusIn:function(n){return e(t(n))},focusOut:function(e){return n(t(e))}}},r.areKeySetsEqual=function(e,t){if(e===t)return!0;var l,r,i=e.isAddAll();if(i!==t.isAddAll())return!1;if(i?(l=e.deletedValues(),r=t.deletedValues()):(l=e.values(),r=t.values()),l.size!==r.size)return!1;for(var s=l.values(),E=r.values(),o=s.next(),a=E.next();!o.done;){if(!n.KeyUtils.equals(o.value,a.value))return!1;o=s.next(),a=E.next()}return!0},r.KEYBOARD_KEYS={_SPACEBAR:" ",_SPACEBAR_IE:"SpaceBar",_SPACEBAR_CODE:32,_ENTER:"Enter",_ENTER_CODE:13,_UP:"ArrowUp",_UP_IE:"Up",_UP_CODE:38,_DOWN:"ArrowDown",_DOWN_IE:"Down",_DOWN_CODE:40,_LEFT:"ArrowLeft",_LEFT_IE:"Left",_LEFT_CODE:37,_RIGHT:"ArrowRight",_RIGHT_IE:"Right",_RIGHT_CODE:39,_HOME:"Home",_HOME_CODE:36,_END:"End",_END_CODE:35,_TAB:"Tab",_TAB_CODE:9,_ESCAPE:"Escape",_ESCAPE_IE:"Esc",_ESCAPE_CODE:27,_F2:"F2",_F2_CODE:113},r.isEnterKeyEvent=function(e){return e===r.KEYBOARD_KEYS._ENTER||e===r.KEYBOARD_KEYS._ENTER_CODE},r.isSpaceBarKeyEvent=function(e){return e===r.KEYBOARD_KEYS._SPACEBAR||e===r.KEYBOARD_KEYS._SPACEBAR_IE||e===r.KEYBOARD_KEYS._SPACEBAR_CODE},r.isEscapeKeyEvent=function(e){return e===r.KEYBOARD_KEYS._ESCAPE||e===r.KEYBOARD_KEYS._ESCAPE_IE||e===r.KEYBOARD_KEYS._ESCAPE_CODE},r.isTabKeyEvent=function(e){return e===r.KEYBOARD_KEYS._TAB||e===r.KEYBOARD_KEYS._TAB_CODE},r.isF2KeyEvent=function(e){return e===r.KEYBOARD_KEYS._F2||e===r.KEYBOARD_KEYS._F2_CODE},r.isHomeKeyEvent=function(e){return e===r.KEYBOARD_KEYS._HOME||e===r.KEYBOARD_KEYS._HOME_CODE},r.isEndKeyEvent=function(e){return e===r.KEYBOARD_KEYS._END||e===r.KEYBOARD_KEYS._END_CODE},r.isArrowUpKeyEvent=function(e){return e===r.KEYBOARD_KEYS._UP||e===r.KEYBOARD_KEYS._UP_IE||e===r.KEYBOARD_KEYS._UP_CODE},r.isArrowDownKeyEvent=function(e){return e===r.KEYBOARD_KEYS._DOWN||e===r.KEYBOARD_KEYS._DOWN_IE||e===r.KEYBOARD_KEYS._DOWN_CODE},r.isArrowLeftKeyEvent=function(e){return e===r.KEYBOARD_KEYS._LEFT||e===r.KEYBOARD_KEYS._LEFT_IE||e===r.KEYBOARD_KEYS._LEFT_CODE},r.isArrowRightKeyEvent=function(e){return e===r.KEYBOARD_KEYS._RIGHT||e===r.KEYBOARD_KEYS._RIGHT_IE||e===r.KEYBOARD_KEYS._RIGHT_CODE},r.getAddEventKeysResult=function(e,t,n){var l,i,s,E,o;function a(e,t){return{key:e,index:t}}var u=[...e],_=[];t.keys.forEach(function(e){_.push(e)});var c=[],A=t.addBeforeKeys?t.addBeforeKeys:t.afterKeys;if(null!=A&&A.forEach(function(e){c.push(e)}),c.length===_.length)for(var d=0;_.length!==d;)for(d=_.length,l=_.length-1;l>=0;l--)s=_[l],r.containsKey(u,s)||(null!=(i=c[l])?-1!==(o=r._indexOfKey(u,i))&&(u.splice(o,0,s),c.splice(l,1),_.splice(l,1)):n&&(u.push(s),c.splice(l,1),_.splice(l,1)));else{var K=t.indexes,O=[];for(l=0;l<_.length;l++)if(s=_[l],!r.containsKey(u,s))if(null!=(E=K[l])){for(var f=!1,y=0;y<O.length;y++)if(O[y].index>E){O.splice(y,0,a(s,E)),f=!0;break}f||O.push(a(s,E))}else n&&u.push(s);for(l=0;l<O.length;l++){var D=O[l];D.index<u.length?u.splice(D.index,0,D.key):D.index===u.length&&n&&u.push(D.key)}}return u},r.containsKey=function(e,t){for(var l=0;l<e.length;l++)if(n.KeyUtils.equals(e[l],t))return!0;return!1},r._indexOfKey=function(e,t){for(var l=0;l<e.length;l++)if(n.KeyUtils.equals(e[l],t))return l;return-1};const i=r.applyMergedInlineStyles,s=r.applyStyleObj,E=r.areKeySetsEqual,o=r.containsKey,a=r.convertStringToStyleObj,u=r.disableElement,_=r.disableAllFocusableElements,c=r.disableDefaultBrowserStyling,A=r.enableAllFocusableElements,d=r.getAddEventKeysResult,K=r.getDefaultScrollBarWidth,O=r.getFocusableElementsIncludingDisabled,f=r.getFocusableElementsInNode,y=r.getLogicalChildPopup=function(e){for(var r=n.ZOrderUtils.findOpenPopups(),i=0;i<r.length;i++){var s=r[i].firstElementChild,E=l.getLogicalParent(t(s));if(null!=E&&t(e).has(E.get(0)).length>0&&n.ZOrderUtils.getStatus(s)===n.ZOrderUtils.STATUS.OPEN)return s}return null},D=r.getNoJQFocusHandlers,v=r.handleActionablePrevTab,g=r.handleActionableTab,b=r.isArrowDownKeyEvent,S=r.isArrowLeftKeyEvent,h=r.isArrowRightKeyEvent,p=r.isArrowUpKeyEvent,B=r.isClickthroughDisabled,Y=r.isEndKeyEvent,R=r.isEnterKeyEvent,T=r.isEscapeKeyEvent,C=r.isEventClickthroughDisabled,I=r.isF2KeyEvent,N=r.isHomeKeyEvent,F=r.isMobileTouchDevice,m=r.isSpaceBarKeyEvent,w=r.isTabKeyEvent,P=r.KEYBOARD_KEYS,U=r.CHECKVIEWPORT_THRESHOLD;e.CHECKVIEWPORT_THRESHOLD=U,e.KEYBOARD_KEYS=P,e.applyMergedInlineStyles=i,e.applyStyleObj=s,e.areKeySetsEqual=E,e.containsKey=o,e.convertStringToStyleObj=a,e.disableAllFocusableElements=_,e.disableDefaultBrowserStyling=c,e.disableElement=u,e.enableAllFocusableElements=A,e.getAddEventKeysResult=d,e.getDefaultScrollBarWidth=K,e.getFocusableElementsInNode=f,e.getFocusableElementsIncludingDisabled=O,e.getLogicalChildPopup=y,e.getNoJQFocusHandlers=D,e.handleActionablePrevTab=v,e.handleActionableTab=g,e.isArrowDownKeyEvent=b,e.isArrowLeftKeyEvent=S,e.isArrowRightKeyEvent=h,e.isArrowUpKeyEvent=p,e.isClickthroughDisabled=B,e.isEndKeyEvent=Y,e.isEnterKeyEvent=R,e.isEscapeKeyEvent=T,e.isEventClickthroughDisabled=C,e.isF2KeyEvent=I,e.isHomeKeyEvent=N,e.isMobileTouchDevice=F,e.isSpaceBarKeyEvent=m,e.isTabKeyEvent=w,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojdatacollection-common.js.map