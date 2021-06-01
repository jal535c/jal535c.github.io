/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","jquery","ojs/ojdatacollection-common","ojs/ojlogger"],function(e,t,i,r){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;const s=function(e,i,r){r=r||{},this._data=i,this._asyncIterator=r.asyncIterator,this._element=t(e)[0],this._contentElement=r.contentElement,this._fetchSize=r.fetchSize,this._fetchSize=this._fetchSize>0?this._fetchSize:25,this._maxCount=r.maxCount,this._maxCount=this._maxCount>0?this._maxCount:500,this._rowCount=r.initialRowCount>0?r.initialRowCount:0,this._successCallback=r.success,this._requestCallback=r.request,this._errorCallback=r.error,this._isOverflowCallback=r.isOverflow,this._beforeFetchCallback=r.beforeFetch,this._beforeScrollCallback=r.beforeScroll,this._localKeyValidator=r.localKeyValidator,this._registerDataSourceEventListeners(),this._fetchTrigger=r.fetchTrigger,(null==this._fetchTrigger||isNaN(this._fetchTrigger))&&(this._fetchTrigger=0),this._offsetTop=isNaN(r.offsetTop)?0:r.offsetTop,this._initialScrollTop=this._element.scrollTop,this._lastFetchTrigger=0,this._isScrollTriggeredByMouseWheel=!1,this._checkViewportCount=0;var s=this._getScrollEventElement();this._scrollEventListener=function(){this._beforeScrollCallback&&this._beforeScrollCallback();var e=this._element.scrollTop,t=this._contentElement?this._offsetTop+this._contentElement.clientHeight:this._element.scrollHeight;(t-=this._element.clientHeight)>0&&this._handleScrollerScrollTop(e,t)}.bind(this),s.addEventListener("scroll",this._scrollEventListener),this._wheelEventListener=function(){this._isScrollTriggeredByMouseWheel=!0}.bind(this),s.addEventListener("wheel",this._wheelEventListener,{passive:!0}),this._mouseDownEventListener=function(){this._isScrollTriggeredByMouseWheel=!1}.bind(this),s.addEventListener("mousedown",this._mouseDownEventListener)};return s.prototype.setAsyncIterator=function(e){this._asyncIterator=e},s.prototype.setFetchTrigger=function(e){null!=e&&!isNaN(e)&&e>=0&&(this._fetchTrigger=e)},s.prototype._getScrollEventElement=function(){return this._element===document.body||this._element===document.documentElement?window:this._element},s.calculateOffsetTop=function(e,i){for(var r=0,s=i;s&&s!==e&&t.contains(e,s);)r+=s.offsetTop,s=s.offsetParent;return r},s.prototype.destroy=function(){this._unregisterDataSourceEventListeners();var e=this._getScrollEventElement();e&&(e.removeEventListener("scroll",this._scrollEventListener),e.removeEventListener("wheel",this._wheelEventListener,{passive:!0}),e.removeEventListener("mousedown",this._mouseDownEventListener))},s.prototype.checkViewport=function(e){return this._asyncIterator&&this._element.clientHeight>0&&(e||!this.isOverflow())&&(this._checkViewportCount+=1,this._checkViewportCount===i.CHECKVIEWPORT_THRESHOLD&&r.warn("Viewport not satisfied after multiple fetch, make sure the component is height constrained or specify a scroller."),this._beforeFetchCallback(this._element.scrollTop,!0))?this._fetchMoreRows():(this._checkViewportCount=0,Promise.resolve(null))},s.prototype._doFetch=function(e){var t=this;if(this._beforeFetchCallback(e-this._fetchTrigger,!1)){this._lastFetchTrigger=e;var i=t._isScrollTriggeredByMouseWheel;this._fetchPromise=this._fetchMoreRows().then(function(e){t._successCallback&&(e.isMouseWheel=i,t._successCallback(e),t._fetchPromise=null,t._nextFetchTrigger=void 0)},function(e){t._errorCallback&&(t._errorCallback(e),t._fetchPromise=null,t._nextFetchTrigger=void 0)})}else this._nextFetchTrigger=void 0},s.prototype._handleScrollerScrollTop=function(e,t){!this._fetchPromise&&this._asyncIterator&&(t!==this._lastMaxScrollTop&&(this._nextFetchTrigger=this._offsetTop+Math.max(0,(t-this._fetchTrigger-this._offsetTop-e)/2),this._lastMaxScrollTop=t),null!=this._nextFetchTrigger&&e-this._lastFetchTrigger>this._nextFetchTrigger)?this._doFetch(e):this._isEndReached(t,e)&&e>this._fetchTrigger&&(this._fetchPromise?this._asyncIterator?null!=this._requestCallback&&this._requestCallback():null!=this._errorCallback&&this._errorCallback():this._asyncIterator&&this._doFetch(e))},s.prototype._isEndReached=function(e,t){return e-t<1||this._element.scrollHeight-this._element.clientHeight-this._element.scrollTop<Math.max(1,this._fetchTrigger)},s.prototype.isOverflow=function(){if(this._isOverflowCallback)return this._isOverflowCallback();var t=(this._contentElement?this._contentElement.scrollHeight:this._element.scrollHeight)-(this._element.clientHeight+this._fetchTrigger);return 1===t&&e.AgentUtils.getAgentInfo().browser===e.AgentUtils.BROWSER.EDGE&&(t=0),t>0},s.prototype._fetchMoreRows=function(){if(!this._fetchPromise){var e=this._maxCount-this._rowCount;if(e>0){var t=this;if(this._asyncIterator)return this._fetchPromise=this._asyncIterator.next().then(function(i){var r=i;return t._fetchPromise=null,null!=r&&null!=r.value&&(r.value.data.length>0&&(t._rowCount+=r.value.data.length,e<t._fetchSize&&(r.maxCount=t._maxCount,r.maxCountLimit=!0,r.value.data.length>e&&(r.value.data=r.value.data.slice(0,e),r.value.metadata=r.value.metadata.slice(0,e),null!=r.value.fetchParameters&&(r.value.fetchParameters.size=e)))),(r.done||r.maxCountLimit)&&(t._asyncIterator=null)),Promise.resolve(r)}),this._fetchPromise}return this._asyncIterator=null,Promise.resolve({maxCount:this._maxCount,maxCountLimit:!0})}return this._fetchPromise},s.prototype._handleDataRowMutateEvent=function(e){if(null!=this._asyncIterator){var t,i,r,s=this;null!=e.detail.add&&(null!=(t=e.detail.add).indexes?i=t.indexes:null!=t.addBeforeKeys?r=t.addBeforeKeys:null!=t.afterKeys&&(r=t.afterKeys),this._handleDataRowAddedOrRemoved(r,i,function(){s._rowCount+=1})),null!=e.detail.remove&&(null!=(t=e.detail.remove).indexes?i=t.indexes:null!=t.keys&&(r=t.keys),this._handleDataRowAddedOrRemoved(r,i,function(){s._rowCount-=1}))}},s.prototype._handleDataRowAddedOrRemoved=function(e,t,i){if(t)for(var r=0;r<t.length;r++){var s=t[r];void 0!==s&&this._rowCount>0&&s<=this._rowCount&&i()}else if(e){var n=this._localKeyValidator;null!=n&&e.forEach(function(e){n(e)&&i()})}},s.prototype._registerDataSourceEventListeners=function(){var e,t,i=this._data;if(null!=i)for(this._unregisterDataSourceEventListeners(),this._dataProviderEventHandlers=[],this._dataProviderEventHandlers.push({eventType:"mutate",eventHandler:this._handleDataRowMutateEvent.bind(this)}),e=0;e<this._dataProviderEventHandlers.length;e++)(t=i.addEventListener(this._dataProviderEventHandlers[e].eventType,this._dataProviderEventHandlers[e].eventHandler))&&(this._dataProviderEventHandlers[e].eventHandler=t)},s.prototype._unregisterDataSourceEventListeners=function(){var e,t=this._data;if(null!=this._dataProviderEventHandlers&&null!=t)for(e=0;e<this._dataProviderEventHandlers.length;e++)t.removeEventListener(this._dataProviderEventHandlers[e].eventType,this._dataProviderEventHandlers[e].eventHandler)},s});
//# sourceMappingURL=ojdomscroller.js.map