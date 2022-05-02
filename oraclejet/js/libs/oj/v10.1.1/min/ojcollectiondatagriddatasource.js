/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojcore-base","ojs/ojdatasource-common","ojs/ojlogger","jquery"],function(t,e,n,o,l){"use strict";
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
const s=function(t,n,o,l,s){e.Assert.assertArrayOrNull(s),this.m_startRow=t,this.m_endRow=n,this.m_startColumn=o,this.m_endColumn=l,this.m_columns=s};(e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e)._registerLegacyNamespaceProp("CollectionCellSet",s),s.prototype.setModels=function(t){e.Assert.assertArray(t),null!=t&&t.length===this.getCount("row")&&(this.m_models=t)},s.prototype.getData=function(t){var e=this._getModel(t);if(null==e)return null;var n=this.m_columns[t.column],o={};return Object.defineProperty(o,"data",{enumerable:!0,get:function(){return e.get(n)},set:function(t){e.set(n,t,{silent:!0})}}),o},s.prototype.getMetadata=function(t){var n=this._getModel(t);if(null==n)return null;var o=t.column;return{keys:{row:e.CollectionDataGridUtils._getModelKey(n),column:this.m_columns[o]}}},s.prototype._getModel=function(t){if(null==this.m_models)return null;e.Assert.assertObject(t);var n=t.row,o=t.column;return e.Assert.assert(n>=this.m_startRow&&n<=this.m_endRow&&o>=this.m_startColumn&&o<=this.m_endColumn),this.m_models[n-this.m_startRow]},s.prototype.getCount=function(t){return"row"===t?Math.max(0,this.m_endRow-this.m_startRow):"column"===t?Math.max(0,this.m_endColumn-this.m_startColumn):0},s.prototype.getExtent=function(t){return{row:{extent:1,more:{before:!1,after:!1}},column:{extent:1,more:{before:!1,after:!1}}}},s.prototype.getStartRow=function(){return this.m_startRow},s.prototype.getEndRow=function(){return this.m_endRow},s.prototype.getStartColumn=function(){return this.m_startColumn},s.prototype.getEndColumn=function(){return this.m_endColumn},s.prototype.getColumns=function(){return this.m_columns};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
const i=function(t,e){this.collection=t,null!=e&&(this.rowHeader=e.rowHeader,this.columns=e.columns),this._setSortInfo(),i.superclass.constructor.call(this)};e._registerLegacyNamespaceProp("CollectionDataGridDataSource",i),e.Object.createSubclass(i,e.DataGridDataSource,"oj.CollectionDataGridDataSource"),i.prototype.Init=function(){i.superclass.Init.call(this),this.pendingHeaderCallback={},this._registerEventListeners()},i.prototype._registerEventListeners=function(){this.collection.on("add",this._handleModelAdded.bind(this)),this.collection.on("remove",this._handleModelDeleted.bind(this)),this.collection.on("change",this._handleModelChanged.bind(this)),this.collection.on("refresh",this._handleCollectionRefresh.bind(this)),this.collection.on("reset",this._handleCollectionReset.bind(this))},i.prototype._isDataAvailable=function(){return null!=this.data},i.prototype.getCount=function(t){if(void 0===this.precision&&(this.precision={}),"row"===t){var e=this._totalSize();return-1===e||0===e&&(!this._isDataAvailable()||this._size()>0)?(this.precision[t]="estimate",-1):(this.precision[t]="exact",this._size())}return"column"===t?null!=this.columns?(this.precision[t]="exact",this.columns.length):(this.precision[t]="estimate",-1):0},i.prototype.getCountPrecision=function(t){return void 0!==this.precision&&void 0!==this.precision[t]||this.getCount(t),this.precision[t]},i.prototype.fetchHeaders=function(t,e,n){if(null!=e){var o=t.axis,l={};l.headerRange=t,l.callbacks=e,l.callbackObjects=n,this.pendingHeaderCallback[o]=l}},i.prototype._handleHeaderFetchSuccess=function(t,n,o,l){var s,i,r=t.axis,a=t.start,c=t.count;if("column"===r)null!=this.columns&&(s=Math.min(this.columns.length,a+c),i=new e.CollectionHeaderSet(a,s,this.columns,void 0,this._sortInfo));else if("row"===r&&null!=this.rowHeader)return null!=l&&(c=l.count),s=Math.min(this._size(),a+c),i=new e.CollectionHeaderSet(a,s,this.columns,this.rowHeader),void this._resolveModels(a,s,i,t,n,o);null!=n&&n.success&&n.success.call(o.success,i,t,null)},i.prototype._getRanges=function(t){for(var e,n,o,l,s=0;s<t.length;s++){var i=t[s];"row"===i.axis?(e=i.start,n=i.count):"column"===i.axis&&(o=i.start,l=i.count)}return{rowStart:e,rowCount:n,colStart:o,colCount:l}},i.prototype._handleCellFetchSuccess=function(t,n,o,l){var s,i=this._getRanges(t),r=i.rowStart;s=null!=l?Math.min(this._size(),r+l.count):Math.min(this._size(),r+i.rowCount);var a=i.colStart,c=Math.min(null==this.columns?0:this.columns.length,a+i.colCount),u=new e.CollectionCellSet(r,s,a,c,this.columns);this._resolveModels(r,s,u,t,n,o)},i.prototype._resolveModels=function(t,e,n,o,l,s){for(var i=[],r=t;r<e;r++)i.push(this.collection.at(r,{deferred:!0}));Promise.all(i).then(function(t){n.setModels(t),l.success.call(s.success,n,o)})},i.prototype.fetchCells=function(t,e,n){null!=e&&(this.pendingCellCallback={},this.pendingCellCallback.cellRanges=t,this.pendingCellCallback.callbacks=e,this.pendingCellCallback.callbackObjects=n),this._fetchCells(t)},i.prototype._processPendingHeaderCallbacks=function(t){var e=this.pendingHeaderCallback[t];if(null!=e){var n,o=e.headerRange,l=e.callbacks,s=e.callbackObjects;"row"===t&&(n=e.actualRange),this._handleHeaderFetchSuccess(o,l,s,n),this.pendingHeaderCallback[t]=null}},i.prototype._processPendingCellCallbacks=function(){var t=this.pendingCellCallback.cellRanges,e=this.pendingCellCallback.callbacks,n=this.pendingCellCallback.callbackObjects,o=this.pendingCellCallback.actualRange;this._handleCellFetchSuccess(t,e,n,o),this.pendingCellCallback=null},i.prototype._fetchCells=function(t){var e=this._getRanges(t),n=e.rowStart,o=e.rowCount;this.collection.setRangeLocal(n,o).then(function(e){this.data=!0,this._setActualCallbackRanges(e.start,e.count),void 0!==this.columns?this._fetchCellsComplete(t):this.collection.at(n,{deferred:!0}).then(function(e){null!=e&&this._setupColumns(e),this._fetchCellsComplete(t)}.bind(this))}.bind(this),function(t){this._fetchCellsError(t)}.bind(this))},i.prototype._fetchCellsError=function(t){o.error(t),null!=this.pendingHeaderCallback&&(this._processPendingHeaderErrorCallbacks("column",t),this._processPendingHeaderErrorCallbacks("row",t)),null!=this.pendingCellCallback&&this._processPendingCellErrorCallbacks(t)},i.prototype._processPendingHeaderErrorCallbacks=function(t,e){var n=this.pendingHeaderCallback[t];if(null!=n){var o=n.callbacks,l=n.callbackObjects,s=n.headerRange;o.error&&o.error.call(l.error,e,s),this.pendingHeaderCallback[t]=null}},i.prototype._processPendingCellErrorCallbacks=function(t){var e=this.pendingCellCallback.callbacks,n=this.pendingCellCallback.callbackObjects,o=this.pendingCellCallback.cellRanges;e.error&&e.error.call(n.error,t,o),this.pendingCellCallback=null},i.prototype._fetchCellsComplete=function(t){this.pendingCellCallback.cellRanges===t&&(null!=this.pendingHeaderCallback&&(this._processPendingHeaderCallbacks("column"),this._processPendingHeaderCallbacks("row")),null!=this.pendingCellCallback&&this._processPendingCellCallbacks())},i.prototype._setActualCallbackRanges=function(t,e){var n={start:t,count:e};null!=this.pendingHeaderCallback.row&&(this.pendingHeaderCallback.row.actualRange=n),null!=this.pendingCellCallback&&(this.pendingCellCallback.actualRange=n)},i.prototype._setupColumns=function(t){this.columns=t.keys(),-1!==this.columns.indexOf(this.rowHeader)&&this.columns.splice(this.columns.indexOf(this.rowHeader),1)},i.prototype.keys=function(t){var n=t.row,o=t.column,l=this;return new Promise(function(t){l.collection.at(n,{deferred:!0}).then(function(n){if(null==n)t({row:null,column:null});else{var s=e.CollectionDataGridUtils._getModelKey(n);null==l.columns&&l._setupColumns(n);var i=l.columns[o];t({row:s,column:i})}})})},i.prototype.indexes=function(t){var e=t.row,n=t.column,o=this;return new Promise(function(t){o.collection.indexOf(e,{deferred:!0}).then(function(e){var l=-1;-1!==e&&null==o.columns?o.collection.at(e,{deferred:!0}).then(function(s){o._setupColumns(s),l=o.columns.indexOf(n),t({row:e,column:l})}):(null!=o.columns&&(l=o.columns.indexOf(n)),t({row:e,column:l}))})})},i.prototype.getCapability=function(t){return"sort"===t?"column":"move"===t?"row":null},i.prototype.sort=function(t,e,n){if(null==n&&(n={}),null!=t){var o=t.direction,l=t.key;if("column"===t.axis){var s;if(this.collection.IsVirtual())this.collection.comparator=l,this.collection.sortDirection="ascending"===o?1:-1;else"ascending"===o?s=function(t,e){var n=t.get(l),o=e.get(l),s=isNaN(n),i=isNaN(o);return n instanceof Date&&(n=n.toISOString(),s=!0),o instanceof Date&&(o=o.toISOString(),i=!0),s&&i?n<o?-1:n===o?0:1:s?1:i?-1:n-o}:"descending"===o&&(s=function(t,e){var n=t.get(l),o=e.get(l),s=isNaN(n),i=isNaN(o);return n instanceof Date&&(n=n.toISOString()),o instanceof Date&&(o=o.toISOString()),s&&i?n>o?-1:n===o?0:1:s?-1:i?1:o-n}),this.collection.comparator=s;this.collection.sort(),this._setSortInfo(l),null!=e&&null!=e.success&&e.success.call(n.success)}else null!=e&&null!=e.error&&e.error.call(n.error,"Axis value not supported")}else this._resetSortOrder(e,n)},i.prototype._resetSortOrder=function(t,e){this.collection.comparator=null,this.collection.reset(),null!=t&&null!=t.success&&t.success.call(e.success)},i.prototype._setSortInfo=function(t){var e=this.collection.comparator,n=-1===this.collection.sortDirection?"descending":"ascending";null!=t||"function"!=typeof e?(this._sortInfo={},this._sortInfo.axis="column",this._sortInfo.direction=n,this._sortInfo.key=null==t?e:null):this._sortInfo={}},i.prototype.move=function(t,e,n,o,l){this.collection.get(t,{deferred:!0}).then(function(n){var s;null==e?(this.collection.remove(n),this.collection.add(n),null!=o&&null!=o.success&&o.success.call(l.success)):(t===e?(s=this.collection.indexOf(e,{deferred:!0}),this.collection.remove(n)):(this.collection.remove(n),s=this.collection.indexOf(e,{deferred:!0})),s.then(function(t){this.collection.add(n,{at:t,force:!0}),null!=o&&null!=o.success&&o.success.call(l.success)}.bind(this)))}.bind(this))},i.prototype.moveOK=function(t,e,n){return"valid"},i.prototype._getModelEvent=function(t,e,n,o,l){var s={};return s.source=this,s.operation=t,s.keys={row:e,column:n},s.indexes={row:o,column:l},s},i.prototype._handleModelAdded=function(t,n,o){var l=e.CollectionDataGridUtils._getModelKey(t),s=this._getModelEvent("insert",l,null,t.index,-1);this.handleEvent("change",s)},i.prototype._handleModelDeleted=function(t,n,o){var l=e.CollectionDataGridUtils._getModelKey(t),s=this._getModelEvent("delete",l,null,o.index,-1);this.handleEvent("change",s)},i.prototype._handleModelChanged=function(t,n,o){var l=e.CollectionDataGridUtils._getModelKey(t),s=this._getModelEvent("update",l,null,t.index,-1);this.handleEvent("change",s)},i.prototype._handleCollectionRefresh=function(){this.data=null;var t=this._getModelEvent("refresh",null,null);this.handleEvent("change",t)},i.prototype._handleCollectionReset=function(){this.data=null;var t=this._getModelEvent("reset",null,null);this.handleEvent("change",t)},i.prototype._size=function(){return this.collection.size()},i.prototype._totalSize=function(){return void 0===this.collection.totalResults?-1:this.collection.totalResults},i.prototype.getCollection=function(){return this.collection},i.prototype.getColumns=function(){return this.columns},i.prototype.getRowHeader=function(){return this.rowHeader},i.prototype.getData=function(){return this.data};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
const r=function(){};e._registerLegacyNamespaceProp("CollectionDataGridUtils",r),r._getModelKey=function(t){var e=t.GetId();return null==e&&(e=t.GetCid()),e};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
const a=function(t,n,o,l,s){e.Assert.assertArrayOrNull(o),this.m_start=t,this.m_end=n,this.m_headers=o,this.m_rowHeader=l,this.m_sortInfo=s};e._registerLegacyNamespaceProp("CollectionHeaderSet",a),a.prototype.setModels=function(t){e.Assert.assertArray(t),null!=t&&t.length===this.getCount()&&(this.m_models=t)},a.prototype.getData=function(t,n){return e.Assert.assert(t<=this.m_end&&t>=this.m_start,"index out of bounds"),e.Assert.assert(null==n||0===n,"level out of bounds"),null!=this.m_rowHeader?null==this.m_models?null:this.m_models[t-this.m_start].get(this.m_rowHeader):this.m_headers[t]},a.prototype.getMetadata=function(t,n){if(e.Assert.assert(t<=this.m_end&&t>=this.m_start,"index out of bounds"),e.Assert.assert(null==n||0===n,"level out of bounds"),null!=this.m_rowHeader){if(null==this.m_models)return null;var o=this.m_models[t-this.m_start];return{key:e.CollectionDataGridUtils._getModelKey(o)}}var l=this.getData(t,n);return this.m_sortInfo.key===l?{key:l,sortDirection:this.m_sortInfo.direction}:{key:l}},a.prototype.getLevelCount=function(){return this.getCount()>0?1:0},a.prototype.getExtent=function(t,n){return e.Assert.assert(t<=this.m_end&&t>=this.m_start,"index out of bounds"),e.Assert.assert(null==n||0===n,"level out of bounds"),{extent:1,more:{before:!1,after:!1}}},a.prototype.getLabel=function(){return null},a.prototype.getDepth=function(t,n){return e.Assert.assert(t<=this.m_end&&t>=this.m_start,"index out of bounds"),e.Assert.assert(null==n||0===n,"level out of bounds"),1},a.prototype.getCount=function(){return Math.max(0,this.m_end-this.m_start)},a.prototype.getStart=function(){return this.m_start},a.prototype.getEnd=function(){return this.m_end},a.prototype.getHeaders=function(){return this.m_headers},a.prototype.getRowHeader=function(){return this.m_rowHeader};
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */
var c={};c.CollectionDataGridDataSource=oj.CollectionDataGridDataSource,c.CollectionHeaderSet=oj.CollectionHeaderSet,c.CollectionCellSet=oj.CollectionCellSet,t.CollectionCellSet=s,t.CollectionDataGridDataSource=i,t.CollectionDataGridUtils=r,t.CollectionHeaderSet=a,t.default=c,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojcollectiondatagriddatasource.js.map