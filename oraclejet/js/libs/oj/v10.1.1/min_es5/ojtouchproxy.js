/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["jquery","ojs/ojcore-base"],function(t,e){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var o=function(t){this._init(t)};e._registerLegacyNamespaceProp("_TouchProxy",o),o.prototype._init=function(e){this._elem=e,this._touchHandled=!1,this._touchMoved=!1,this._touchStartHandler=t.proxy(this._touchStart,this),this._touchEndHandler=t.proxy(this._touchEnd,this),this._touchMoveHandler=t.proxy(this._touchMove,this),this._elem.on({touchend:this._touchEndHandler,touchcancel:this._touchEndHandler}),this._elem[0].addEventListener("touchstart",this._touchStartHandler,{passive:!0}),this._elem[0].addEventListener("touchmove",this._touchMoveHandler,{passive:!1})},o.prototype._destroy=function(){this._elem&&this._touchStartHandler&&(this._elem.off({touchend:this._touchEndHandler,touchcancel:this._touchEndHandler}),this._elem[0].removeEventListener("touchstart",this._touchStartHandler,{passive:!0}),this._elem[0].removeEventListener("touchmove",this._touchMoveHandler,{passive:!1}),this._touchStartHandler=void 0,this._touchEndHandler=void 0,this._touchMoveHandler=void 0)},o.prototype._touchHandler=function(t,e){if(!(t.originalEvent.touches.length>1)){"touchstart"!==t.type&&"touchend"!==t.type&&t.preventDefault();var o=t.originalEvent.changedTouches[0],h=document.createEvent("MouseEvent");h.initMouseEvent(e,!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),o.target.dispatchEvent(h)}},o.prototype._touchStart=function(e){this._touchHandled||(this._touchHandled=!0,this._touchMoved=!1,e=t.Event(e),this._touchHandler(e,"mouseover"),this._touchHandler(e,"mousemove"),this._touchHandler(e,"mousedown"))},o.prototype._touchMove=function(e){this._touchHandled&&(this._touchMoved=!0,e=t.Event(e),this._touchHandler(e,"mousemove"))},o.prototype._touchEnd=function(t){this._touchHandled&&(this._touchHandler(t,"mouseup"),this._touchHandler(t,"mouseout"),this._touchMoved||"touchend"!==t.type||this._touchHandler(t,"click"),this._touchHandled=!1)},o._TOUCH_PROXY_KEY="_ojTouchProxy",o.prototype.touchMoved=function(){return this._touchMoved},o.addTouchListeners=function(e){var h=t(e),n=h.data(o._TOUCH_PROXY_KEY);return n||(n=new o(h),h.data(o._TOUCH_PROXY_KEY,n)),n},o.removeTouchListeners=function(e){var h=t(e),n=h.data(o._TOUCH_PROXY_KEY);n&&(n._destroy(),h.removeData(o._TOUCH_PROXY_KEY))}});
//# sourceMappingURL=ojtouchproxy.js.map