/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojvcomponent-element","ojs/ojdatacollection-common","ojs/ojvcollection","ojs/ojcontext","ojs/ojcore-base","ojs/ojkeyset","ojs/ojtreedataprovider","ojs/ojanimation","ojs/ojthemeutils","ojs/ojdomutils"],function(e,t,s,n,o,l,i,r,a,h,c){"use strict";o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,l=l&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l;class d extends n.IteratingDataProviderContentHandler{constructor(e,t,s,n){super(e,t,s,n),this.root=e,this.dataProvider=t,this.callback=s,this.scrollPolicyOptions=n,this.postRender=()=>{if(this.vnodesCache=this.newVnodesCache,this.newVnodesCache=new Map,this.callback){if(this.domScroller){let e=this.root.lastElementChild.querySelectorAll(".oj-stream-list-item");const t=this.root.offsetTop,s=e[0].offsetTop-t,n=e[e.length-1].offsetTop+e[e.length-1].offsetHeight-t;this.domScroller.setViewportRange(s,n)}if(this.domScroller&&!this.domScroller.checkViewport())return}},this.newItemsTracker=new Set,this.vnodesCache=new Map,this.newVnodesCache=new Map}fetchSuccess(e){null!=e&&this.newItemsTracker.clear(),super.fetchSuccess(e)}handleItemsUpdated(e){e.keys.forEach(function(e){this.vnodesCache.delete(e)}.bind(this)),super.handleItemsUpdated(e)}handleItemsRemoved(e){e.keys.forEach(function(e){this.vnodesCache.delete(e)}.bind(this)),super.handleItemsRemoved(e)}handleModelRefresh(){this.vnodesCache.clear(),super.handleModelRefresh()}addItem(e,t,s,n){const o=this.isInitialFetch();null==this.callback.getCurrentItem()&&o&&0==t&&this.callback.setCurrentItem(e);const l=this.renderItem(e,t,s);return this.decorateItem(l,e,t,o,n),l}renderItem(e,t,s){const n=this.vnodesCache.get(e);if(n)return this.newVnodesCache.set(e,{vnodes:n.vnodes}),n.vnodes;const o=this.callback.getItemRenderer()({data:s,key:e});let l;for(let e=0;e<o.length;e++){if(1===o[e]._node.nodeType){l=o[e];break}}let i=[l];return this.newVnodesCache.set(e,{vnodes:i}),i}decorateItem(e,t,s,n,o){let l=e[0],i=l._node;if(null!=i){l.key=t,i.key=t,i.setAttribute("role","listitem"),i.setAttribute("tabIndex","-1");this.getItemStyleClass(o,this.newItemsTracker.has(t),n).forEach(e=>{i.classList.add(e)})}}getItemStyleClass(e,t,s){let n=[];return n.push("oj-stream-list-item"),n}renderSkeletonsForLoadMore(){return this.callback.renderSkeletons(3)}}class u extends n.IteratingTreeDataProviderContentHandler{constructor(e,t,s,n){super(e,t,s,n),this.root=e,this.dataProvider=t,this.callback=s,this.scrollPolicyOptions=n,this.postRender=()=>{this.vnodesCache=this.newVnodesCache,this.newVnodesCache=new Map;this.root.lastElementChild&&this.checkViewport()},this.getLoadMoreCount=()=>3,this.newItemsTracker=new Set,this.vnodesCache=new Map,this.newVnodesCache=new Map}handleFetchSuccess(e){null!=e&&this.newItemsTracker.clear(),super.handleFetchSuccess(e)}handleItemsUpdated(e){e.keys.forEach(function(e){this.vnodesCache.delete(e)}.bind(this)),super.handleItemsUpdated(e)}handleItemsRemoved(e){e.keys.forEach(function(e){this.vnodesCache.delete(e)}.bind(this)),super.handleItemsRemoved(e)}handleModelRefresh(){this.vnodesCache.clear(),super.handleModelRefresh()}checkViewport(){if(this.viewportResolveFunc)return;this.viewportResolveFunc=this.addBusyState("checking viewport");const e=this.root.lastElementChild;if(e){o.getContext(e).getBusyContext().whenReady().then(()=>{null!=this.callback&&(super.checkViewport(),this.viewportResolveFunc&&this.viewportResolveFunc(),this.viewportResolveFunc=null)},()=>{this.viewportResolveFunc&&this.viewportResolveFunc(),this.viewportResolveFunc=null})}}addItem(e,t,s,n){const o=this.isInitialFetch();null==this.callback.getCurrentItem()&&o&&0==t&&this.callback.setCurrentItem(e.key);const l=this.renderItem(e,t,s);return this.decorateItem(l,e,t,o,n),l}renderItem(e,t,s){let n=e.key;const o=this.vnodesCache.get(n);if(o)return this.newVnodesCache.set(n,{vnodes:o.vnodes}),o.vnodes;let l,i,r;e.isLeaf||(l=this.callback.getGroupRenderer()),null==l&&(l=this.callback.getItemRenderer()),i=l({data:s,key:e.key,leaf:e.isLeaf,parentKey:e.parentKey,depth:e.treeDepth});for(let e=0;e<i.length;e++){if(1===i[e]._node.nodeType){r=i[e];break}}let a=[r];return this.newVnodesCache.set(n,{vnodes:a}),a}decorateItem(e,t,s,n,o){let l=e[0],i=l._node;if(null!=i){l.key=t.key,i.key=t.key,i.setAttribute("role","listitem"),i.setAttribute("tabIndex","-1");if(this.getItemStyleClass(t,o,this.newItemsTracker.has(t.key),n).forEach(e=>{i.classList.add(e)}),!t.isLeaf){let e=this.callback.getExpanded();e&&e.has(t.key)?i.setAttribute("aria-expanded","true"):i.setAttribute("aria-expanded","false")}}}getItemStyleClass(e,t,s,n){let o=[];return e.isLeaf?o.push("oj-stream-list-item"):o.push("oj-stream-list-group"),o}renderSkeletonsForLoadMore(){return this.callback.renderSkeletons(3)}renderSkeletonsForExpand(e){return this.callback.renderSkeletons(this.getLoadMoreCount(),!0,e)}}var p,m=function(e,t,s,n){var o,l=arguments.length,i=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(i=(l<3?o(i):l>3?o(t,s,i):o(t,s))||i);return l>3&&i&&Object.defineProperty(t,s,i),i};e.StreamList=p=class extends t.ElementVComponent{constructor(e){super(e),this.restoreFocus=!1,this.actionableMode=!1,this.skeletonHeight=0,this.height=0,this.setRootElement=e=>{this.root=e},this.state={renderedData:null,outOfRangeData:null,initialSkeleton:!1,initialSkeletonCount:1,expandedToggleKeys:new i.KeySetImpl,expandedSkeletonKeys:new i.KeySetImpl,expandingKeys:new i.KeySetImpl,toCollapse:[]}}_handleFocusIn(e){this._clearFocusoutTimeout();let t=e.target,s=t.closest(".oj-stream-list-item, .oj-stream-list-group");s&&this._isFocusable(t,s)?this._enterActionableMode(t):this.currentItem&&!this.actionableMode&&this.focusInHandler(this.currentItem)}_handleFocusOut(){this._clearFocusoutTimeout(),this.actionableMode?this._focusoutTimeout=setTimeout(function(){this._doBlur()}.bind(this),100):this._isFocusBlurTriggeredByDescendent(event)||this._doBlur()}_clearFocusoutTimeout(){this._focusoutTimeout&&(clearTimeout(this._focusoutTimeout),this._focusoutTimeout=null)}_handleClick(e){let t=e.target.closest("."+this.getGroupStyleClass());if(t){let e=t.key,s=this.props.expanded.has(e);this._handleToggleExpanded(e,s)}this._handleTouchOrClickEvent(e)}_handleToggleExpanded(e,t){this.updateState(function(s,n){var o,l;let i=s.expandedToggleKeys;if(!i.has(e)){i=i.add([e]);let s=n.expanded;return i.values().forEach(e=>{s=t?s.delete([e]):s.add([e])}),null===(l=(o=this.props).onExpandedChanged)||void 0===l||l.call(o,s),{expandedToggleKeys:i}}return{}}.bind(this))}_handleKeyDown(e){if(this.currentItem){let t;switch(e.key){case s.KEYBOARD_KEYS._LEFT:case s.KEYBOARD_KEYS._LEFT_IE:case s.KEYBOARD_KEYS._RIGHT:case s.KEYBOARD_KEYS._RIGHT_IE:if(this.currentItem.classList.contains(this.getGroupStyleClass())){let t=this.currentItem.key,n=this.props.expanded.has(t);(e.key!==s.KEYBOARD_KEYS._RIGHT&&e.key!==s.KEYBOARD_KEYS._RIGHT_IE||n)&&(e.key!==s.KEYBOARD_KEYS._LEFT&&e.key!==s.KEYBOARD_KEYS._LEFT_IE||!n)||this._handleToggleExpanded(t,n)}break;case s.KEYBOARD_KEYS._UP:case s.KEYBOARD_KEYS._UP_IE:if(!1===this.actionableMode)for(t=this.currentItem.previousElementSibling;t&&t.previousElementSibling&&t.classList.contains("oj-stream-list-skeleton");)t=t.previousElementSibling;break;case s.KEYBOARD_KEYS._DOWN:case s.KEYBOARD_KEYS._DOWN_IE:if(!1===this.actionableMode)for(t=this.currentItem.nextElementSibling;t&&t.nextElementSibling&&t.classList.contains("oj-stream-list-skeleton");)t=t.nextElementSibling;break;case s.KEYBOARD_KEYS._F2:!1===this.actionableMode&&this._enterActionableMode();break;case s.KEYBOARD_KEYS._ESCAPE:case s.KEYBOARD_KEYS._ESCAPE_IE:!0===this.actionableMode&&this._exitActionableMode(!0);break;case s.KEYBOARD_KEYS._TAB:!0===this.actionableMode&&this.currentItem&&(e.shiftKey?s.handleActionablePrevTab(e,this.currentItem)&&e.preventDefault():s.handleActionableTab(e,this.currentItem)&&e.preventDefault())}null!=t&&(t.classList.contains(this.getItemStyleClass())||t.classList.contains(this.getGroupStyleClass()))&&(this._updateCurrentItemAndFocus(t,!0),e.preventDefault())}}_touchStartHandler(e){this._handleTouchOrClickEvent(e)}render(){const e=this.state.initialSkeleton,s=this.state.initialSkeletonCount;let n;if(null==this.contentHandler&&e)n=this._renderInitialSkeletons(s);else{const t=this.getData();null!=t&&e||null==t?n=this._renderInitialSkeletons(s,null==t):null!=t&&(n=this.contentHandler.render(),this.currentItem&&this.currentItem.contains(document.activeElement)&&!this.actionableMode&&(this.restoreFocus=!0))}return t.h("oj-stream-list",{ref:this.setRootElement},t.h("div",{role:"list","data-oj-context":!0,onClick:this._handleClick,onKeydown:this._handleKeyDown,onTouchstart:this._touchStartHandler,onFocusin:this._handleFocusIn,onFocusout:this._handleFocusOut},n))}_doBlur(){this.actionableMode&&this._exitActionableMode(!1),this.currentItem&&this.focusOutHandler(this.currentItem)}_isFocusBlurTriggeredByDescendent(e){return void 0===e.relatedTarget||!(null==e.relatedTarget||!this.root.contains(e.relatedTarget))}_renderInitialSkeletons(e,t){if(t){const e=this._getScroller();null!=e&&e===this.root&&(e.scrollTop=0)}return this.renderSkeletons(e)}renderSkeletons(e,t,s){let n,o=[],l=this._isTreeData();for(let i=0;i<e;i++){let e=t;!t&&l&&i%4&&(e=!0),s&&(n=s+"_"+i),o.push(this._renderSkeleton(e,n))}return o}_renderSkeleton(e,s){let n="oj-stream-list-skeleton";return e&&(n+=" oj-stream-list-child-skeleton"),t.h("div",{class:n,key:s},t.h("div",{class:"oj-stream-list-skeleton-content oj-animation-skeleton"}))}_applySkeletonExitAnimation(e){const t=this.addBusyState("apply skeleton exit animations");return new Promise((s,n)=>{let o=[];e.forEach(e=>{o.push(a.fadeOut(e))}),Promise.all(o).then(function(){t(),s(!0)})})}_isTreeData(){var e=this.props.data;return null!=e&&this.instanceOfTreeDataProvider(e)}instanceOfTreeDataProvider(e){return"getChildDataProvider"in e}_postRender(){this._registerScrollHandler();const e=this.getData();let t=this.state.initialSkeleton;if(null!=e&&t){let e=this.getRootElement().querySelectorAll(".oj-stream-list-skeleton");this._applySkeletonExitAnimation(e).then(function(){this.updateState({initialSkeleton:!1})}.bind(this))}else null!=e&&this.contentHandler.postRender();let s=this.root.querySelectorAll(".oj-stream-list-item, .oj-stream-list-group");this._disableAllTabbableElements(s),this._restoreCurrentItem(s)}_getScrollPolicyOptions(){return{fetchSize:this.props.scrollPolicyOptions.fetchSize,maxCount:this.props.scrollPolicyOptions.maxCount,scroller:this._getScroller()}}mounted(){var e=this.props.data;this._isTreeData()?this.contentHandler=new u(this.root,e,this,this._getScrollPolicyOptions()):null!=e&&(this.contentHandler=new d(this.root,e,this,this._getScrollPolicyOptions())),this.contentHandler.fetchRows(),this.height=this.root.clientHeight;let t=this.root.querySelector(".oj-stream-list-skeleton");if(t&&(this.skeletonHeight=this.outerHeight(t),this._delayShowSkeletons()),window.ResizeObserver){let e=this.root;const t=new window.ResizeObserver(t=>{t.forEach(t=>{if(t.target===e&&t.contentRect){const e=this.height,s=Math.round(t.contentRect.height);Math.abs(s-e)>1&&(this.height=s,this.contentHandler&&this.contentHandler.checkViewport())}})});t.observe(e),this.resizeObserver=t}c.makeFocusable({applyHighlight:!0,setupHandlers:(e,t)=>{let n=s.getNoJQFocusHandlers(e,t);this.focusInHandler=n.focusIn,this.focusOutHandler=n.focusOut}}),this._postRender()}getSkeletonHeight(){return this.skeletonHeight}outerHeight(e){let t=e.offsetHeight,s=getComputedStyle(e);return t+=parseInt(s.marginTop)+parseInt(s.marginBottom),t}unmounted(){this.contentHandler&&this.contentHandler.destroy(),this.contentHandler=null,this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeObserver=null,this._unregisterScrollHandler()}_delayShowSkeletons(){window.setTimeout(()=>{null==this.getData()&&this.updateState(e=>({initialSkeletonCount:Math.max(1,Math.floor(this.height/this.skeletonHeight))}))},this._getShowSkeletonsDelay())}_getOptionDefaults(){return null==this.defaultOptions&&(this.defaultOptions=h.parseJSONFromFontFamily("oj-streamlist-option-defaults")),this.defaultOptions}_getShowSkeletonsDelay(){const e=this._getOptionDefaults();if(null==e)return 0;const t=parseInt(e.showIndicatorDelay,10);return isNaN(t)?0:t}getRootElement(){return this.root}updated(e,t){this._isTreeData()&&this.contentHandler.collapse&&this.contentHandler.collapse(this.state.toCollapse);let s=t.expandingKeys;this.state.expandingKeys.values().forEach(function(e){s.has(e)||this.contentHandler.expand(e)}.bind(this)),this.props.data!=e.data&&(this.contentHandler&&this.contentHandler.destroy(),this.setCurrentItem(null),this.updateState({renderedData:null,outOfRangeData:null,initialSkeleton:!0,initialSkeletonCount:this.state.initialSkeletonCount,expandedToggleKeys:new i.KeySetImpl,expandedSkeletonKeys:new i.KeySetImpl,expandingKeys:new i.KeySetImpl}),this._isTreeData()?this.contentHandler=new u(this.root,this.props.data,this,this._getScrollPolicyOptions()):null!=this.props.data&&(this.contentHandler=new d(this.root,this.props.data,this,this._getScrollPolicyOptions())),this.contentHandler.fetchRows(),this._delayShowSkeletons()),this._postRender(),l.Object.compareValues(this.props.scrollPosition,e.scrollPosition)||l.Object.compareValues(this.props.scrollPosition,this.lastInternalScrollPositionUpdate)||this._syncScrollTopWithProps()}static initStateFromProps(e,t){return p.updateStateFromProps(e,t,null)}static updateStateFromProps(e,t,s){let{expandedToggleKeys:n,expandingKeys:o,renderedData:l,expandedSkeletonKeys:i}=t,r=[],a=e.expanded;if(s&&a!==s.expanded){let e=s.expanded;return n.values().forEach(t=>{e.has(t)!==a.has(t)&&(n=n.delete([t]))}),l.value.metadata.forEach(e=>{let t=e.key,s=e.expanded,n=a.has(t);s&&!n?(r.push(t),e.expanded=!1):!s&&n&&(o=o.add([t]),e.expanded=!0)}),r.forEach(e=>{l=p.collapse(e,l),o=o.delete([e]),i=i.delete([e])}),{renderedData:l,expandingKeys:o,expandedToggleKeys:n,expandedSkeletonKeys:i,toCollapse:r}}return{toCollapse:r}}static _findIndex(e,t){for(let s=0;s<e.length;s++)if(l.KeyUtils.equals(t,e[s].key))return s;return-1}_unregisterScrollHandler(){this._getScrollEventElement().removeEventListener("scroll",this.scrollListener)}_registerScrollHandler(){let e=this._getScrollEventElement();this._unregisterScrollHandler(),e.addEventListener("scroll",this.scrollListener)}scrollListener(){var e=this;null==this.getData()||this._ticking||(window.requestAnimationFrame(function(){e._updateScrollPosition(),e._ticking=!1}),this._ticking=!0)}_updateScrollPosition(){var e,t;let s={},n=this._getScroller().scrollTop,o=this._findClosestElementToTop(n);if(s.y=n,null!=o){let e=o.elem;s.offsetY=o.offsetY,s.key=e.key,this._isTreeData()&&e.classList.contains("oj-stream-list-item")?s.parentKey=this._getParentKey(e):s.parentKey=null}this.lastInternalScrollPositionUpdate=s,null===(t=(e=this.props).onScrollPositionChanged)||void 0===t||t.call(e,s)}_syncScrollTopWithProps(){let e,t=this.props.scrollPosition;const s=t.key;if(s){const n=t.parentKey,o=this._getItemByKey(s,n);if(null==o)return;{let t=this.root;e=o.offsetTop-t.offsetTop}const l=t.offsetY;isNaN(l)||(e+=l)}else{const s=t.y;if(isNaN(s))return;e=s}e>this._getScroller().scrollHeight||(this._getScroller().scrollTop=e)}_getParentKey(e){for(;e;){if(e.classList.contains("oj-stream-list-group"))return e.key;e=e.previousElementSibling}return null}_getItemByKey(e,t){var s=this.root.querySelectorAll(".oj-stream-list-item, .oj-stream-list-group");for(let n=0;n<s.length;n++){let o=s[n];if(o.key===e&&(null==t||this._getParentKey(o)===t))return o}}_getScrollEventElement(){let e=this.props.scrollPolicyOptions.scroller;return null!=e?("string"==typeof e&&(e=document.querySelector(e)),e===document.body||e===document.documentElement?window:e):this.getRootElement()}_getScroller(){let e=this.props.scrollPolicyOptions.scroller;return null!=e?("string"==typeof e&&(e=document.querySelector(e)),e===document.documentElement&&e!==document.scrollingElement?document.body:e):this.getRootElement()}_findClosestElementToTop(e){var t=this.root.querySelectorAll(".oj-stream-list-item, .oj-stream-list-group");if(null==t||0===t.length)return null;let s=this.root.offsetTop,n=Math.max(e,0),o=0-s,l=n,i=0,r=t[i],a=!1,h={elem:r,offsetY:l};for(;!a&&i>=0&&i<t.length&&(r=t[i],o=r.offsetTop-s,l=Math.abs(n-o),a=l<1||n<=o,!a);)h={elem:r,offsetY:l},i+=1;return h}isAvailable(){return null!=this.contentHandler}getCurrentItem(){return this.currentKey}setCurrentItem(e){this.currentKey=e}getData(){return this.state.renderedData}setData(e){this.updateState({renderedData:e})}updateData(e){this.updateState(function(t){return e(t.renderedData,t.expandingKeys)}.bind(this))}getExpanded(){return this.props.expanded}setExpanded(e){var t,s;null===(s=(t=this.props).onExpandedChanged)||void 0===s||s.call(t,e)}updateExpand(e){this.updateState(function(t,s){return e(t.renderedData,t.expandedSkeletonKeys,t.expandingKeys,s.expanded)}.bind(this))}getExpandingKeys(){return this.state.expandingKeys}setExpandingKeys(e){this.updateState({expandingKeys:e})}updateExpandingKeys(e){this.updateState(function(t){return{expandingKeys:t.expandingKeys.add([e])}})}getSkeletonKeys(){return this.state.expandedSkeletonKeys}setSkeletonKeys(e){this.updateState({expandedSkeletonKeys:e})}updateSkeletonKeys(e){this.updateState(function(t){return{expandedSkeletonKeys:t.expandedSkeletonKeys.add([e])}})}getOutOfRangeData(){return this.state.outOfRangeData}setOutOfRangeData(e){this.updateState({outOfRangeData:e})}getItemRenderer(){return this.props.itemTemplate}getItemStyleClass(){return"oj-stream-list-item"}getGroupRenderer(){return this.props.groupTemplate}getGroupStyleClass(){return"oj-stream-list-group"}addBusyState(e){const t=this.getRootElement();return o.getContext(t).getBusyContext().addBusyState({description:e})}_handleTouchOrClickEvent(e){let t=e.target,s=t.closest(".oj-stream-list-item, .oj-stream-list-group");s&&(this._isFocusable(t,s)?(this._updateCurrentItemAndFocus(s,!1),this._enterActionableMode(t)):this._updateCurrentItemAndFocus(s,!0))}_isFocusable(e,t){return this._isInputElement(e)||this._isInsideFocusableElement(e,t)}_isInputElement(e){return null!=e.nodeName.match(/^INPUT|SELECT|OPTION|TEXTAREA/)&&!e.readOnly}_isInsideFocusableElement(e,t){let s=!1;for(;e!==t&&null!=e;){if(e.classList.contains("oj-form-control")||this._isInFocusableElementsList(e,t)){e.readonly||e.disabled||(s=!0);break}e=e.parentNode}return s}_isInFocusableElementsList(e,t){let n=!1;return s.getFocusableElementsIncludingDisabled(t).forEach(function(t){t===e&&(n=!0)}),n}_resetFocus(e,t){this.actionableMode&&t&&this._exitActionableMode(!1),this.focusOutHandler(e),e.tabIndex=-1}_setFocus(e,t){e.tabIndex=0,t&&(this.focusInHandler(e),e.focus())}_updateCurrentItemAndFocus(e,t){let s=this.currentItem,n=e;this._resetFocus(s,!0),this.currentItem=n,this.setCurrentItem(n.key),this._setFocus(n,t)}_isInViewport(e){let t=e.offsetTop,s=this._getScroller().scrollTop;return t>=s&&t<=s+this.height}_restoreCurrentItem(e){if(null!=this.currentKey)for(let t=0;t<e.length;t++)if(l.KeyUtils.equals(e[t].key,this.currentKey)){const s=e[t];if(this.restoreFocus&&this._isInViewport(s))return void this._updateCurrentItemAndFocus(s,!0);this.currentItem=s,this._setFocus(s,!1);break}this.restoreFocus=!1}_disableAllTabbableElements(e){e.forEach(e=>{o.getContext(e).getBusyContext().whenReady().then(function(){s.disableAllFocusableElements(e,!0)})})}_enterActionableMode(e){if(this.actionableMode=!0,this.currentItem){const t=s.enableAllFocusableElements(this.currentItem,!0);null==e&&t&&t.length>0&&(t[0].focus(),this._resetFocus(this.currentItem,!1))}}_exitActionableMode(e){this.actionableMode=!1,this.currentItem&&(s.disableAllFocusableElements(this.currentItem,!0),this._setFocus(this.currentItem,e))}},e.StreamList.collapse=(e,t)=>{let s=t.value.data,n=t.value.metadata,o=p._findIndex(n,e);if(o>-1){let e=p._getLocalDescendentCount(n,o);s.splice(o+1,e),n.splice(o+1,e)}return{value:{data:s,metadata:n},done:t.done}},e.StreamList._getLocalDescendentCount=(e,t)=>{let s=0,n=e[t].treeDepth,o=e.length;for(let l=t+1;l<o;l++){if(!(e[l].treeDepth>n))return s;s+=1}return s},e.StreamList.metadata={extension:{_DEFAULTS:class{constructor(){this.data=null,this.expanded=new i.KeySetImpl,this.scrollPolicy="loadMoreOnScroll",this.scrollPolicyOptions={fetchSize:25,maxCount:500,scroller:null},this.scrollPosition={y:0}}},_WRITEBACK_PROPS:["expanded","scrollPosition"],_READ_ONLY_PROPS:[]},properties:{data:{type:"object|null",value:null},expanded:{type:"any",writeback:!0},scrollPolicy:{type:"string",enumValues:["loadAll","loadMoreOnScroll"],value:"loadMoreOnScroll"},scrollPolicyOptions:{type:"object",properties:{fetchSize:{type:"number",value:25},maxCount:{type:"number",value:500},scroller:{type:"Element|string|null",value:null}}},scrollPosition:{type:"object",properties:{y:{type:"number",value:0},key:{type:"any"},offsetY:{type:"number"},parentKey:{type:"any"}},writeback:!0}},slots:{groupTemplate:{data:{}},itemTemplate:{data:{}}}},m([t.listener()],e.StreamList.prototype,"_handleFocusIn",null),m([t.listener()],e.StreamList.prototype,"_handleFocusOut",null),m([t.listener()],e.StreamList.prototype,"_handleClick",null),m([t.listener()],e.StreamList.prototype,"_handleKeyDown",null),m([t.listener({passive:!0})],e.StreamList.prototype,"_touchStartHandler",null),m([t.listener()],e.StreamList.prototype,"scrollListener",null),e.StreamList=p=m([t.customElement("oj-stream-list")],e.StreamList),Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojstreamlist.js.map