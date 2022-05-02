define(["../persistenceUtils","../persistenceStoreManager","./logger"],function(a,b,c){"use strict";function d(){Object.defineProperty(this,"_endpointToOptionsMap",{value:{},writable:!0})}function e(a){if(!a)return!1;for(var b=0;b<a.length;b++){if("collection"!==a[b].resourceType)return!1}return!0}function f(a){var b=a.map(function(a){var b=Object.keys(a)[0],c=a[b];return c&&c.length?g(b,c):Promise.resolve()});return Promise.all(b)}function g(a,d){return c.log("Offline Persistence Toolkit DefaultCacheHandler: Updating store with shredded data"),b.openStore(a).then(function(a){return a.upsertAll(d)})}function h(a){var c=a.map(function(a){var c=a.name,d={selector:{key:{$nin:a.keys}}};return b.openStore(c).then(function(a){return a.delete(d)})});return Promise.all(c)}function i(a){for(var b=a.name,c=a.resourceIdentifier,d=a.keys,e=[],f=(new Date).toUTCString(),g=0;g<d.length;g++){var h={key:d[g],metadata:{lastUpdated:f,resourceIdentifier:c},value:a.data[g]};e.push(h)}var i={};return i[b]=e,i}function j(a){var c=a.name;return b.openStore(c).then(function(b){if(a.keys&&a.keys.length){if(1===a.keys.length)return b.findByKey(a.keys[0]);var c=a.keys.map(function(a){return{key:{$eq:a}}}),d={selector:{$or:c}};return b.find(d)}return[]}).then(function(b){return Array.isArray(b)||(b=[b]),a.data=b,a})}d.prototype.constructRequestResponseCacheData=function(b,d){var e=this,f={};return c.log("Offline Persistence Toolkit DefaultCacheHandler: constructRequestResponseCacheData()"),a.requestToJSON(b).then(function(c){f.requestData=c;var g=e.hasShredder(b);return a.responseToJSON(d,{excludeBody:g})}).then(function(a){return f.responseData=a,{key:e._constructCacheKey(b,d),metadata:e.constructMetadata(b),value:f}})},d.prototype.constructShreddedData=function(a,b){c.log("Offline Persistence Toolkit DefaultCacheHandler: constructShreddedData()");var d=this._getShredder(a);return d?d(b).then(function(a){return a&&Array.isArray(a)?a.map(i):null}):Promise.resolve()},d.prototype.shredResponse=function(a,b){c.log("Offline Persistence Toolkit DefaultCacheHandler: shredResponse()");var d=this._getShredder(a);return d?d(b):Promise.resolve()},d.prototype.cacheShreddedData=function(a,b){c.log("Offline Persistence Toolkit DefaultCacheHandler: cacheShreddedData()");var d=this;return f(a.map(i)).then(function(){if(d._isCompleteCollection(b,a))return h(a)})},d.prototype._isCompleteCollection=function(a,b){if(!a||"GET"!==a.method&&"HEAD"!==a.method)return!1;if(!e(b))return!1;if(a.url===a.baseUrl)return!0;var c=this._getQueryHandler(a.url);if(!c||"function"!=typeof c.normalizeQueryParameter)return!1;var d=c.normalizeQueryParameter(a.url);if(d.searchCriteria||0!==d.offset)return!1;var f=d.limit;return f<0||b[0].keys.length<f},d.prototype._constructCacheKey=function(a,b){var c=a.url+"$"+a.method+"$";if(b){var d=b.headers;if(d){var e=d.get("vary");if(e)if("*"===e)c=1e3*(new Date).getTime()+Math.floor(1e3*Math.random());else for(var f=a.headers,g=e.split(","),h=0;h<g.length;h++){var i=g[h];i=i.trim();var e=f&&f.get(i)?f.get(i):"undefined";c+=i+"="+e+";"}}}return c},d.prototype.getMatchedCacheKeys=function(a,b,c){var d,e;return d=b&&b.ignoreSearch?k(a.url):a.url,b&&b.ignoreMethod||(e=a.method),c.filter(function(c){var f=c.split("$");if(1===f.length){if(c.slice(0,d.length)!==d)return!1;if(b&&b.ignoreSearch&&"/"===c[d.length])return!1;var g;if(e&&(g=b&&b.ignoreSearch?c.slice(d.length):c.slice(d.length,d.length+a.method.length),-1===g.indexOf(e)))return!1;if(!b||!b.ignoreVary){var h=c;if(e?(h=h.split(e),h=h[h.length-1]):h=l(h),!h)return!0;var i=h.split("="),j=a.headers;if(2===i){var m=j&&j.get(i[0])?j.get(i[0]):"undefined";if(m!==i[1])return!1}else for(var n=0;n<i.length-1;n++){var o=i[n],m=j&&j.get(o)?j.get(o):"undefined",p=i[n+1].split(m);if(2!==p.length&&""!==p[0])return!1;if(p[1]&&p[1].startsWith(","))return!1;i[n+1]=p[1]}}return!0}if((b&&b.ignoreSearch?k(f[0]):f[0])!==d)return!1;if(e&&f[1]!==e)return!1;if(!b||!b.ignoreVary){var h=f[2];if(!h)return!0;var q=h.split(";");if(1===q.length)return!1;for(var j=a.headers,n=0;n<q.length-1;n++){var r=q[n],o=r.split("="),m=j&&j.get(o[0])?j.get(o[0]):"undefined";if(m!=o[1])return!1}}return!0})},d.prototype.constructMetadata=function(a){var b=(new Date).getTime(),c=k(a.url);return{url:a.url,method:a.method,baseUrl:c,created:b,lastupdated:b}},d.prototype.constructResponse=function(b){return c.log("Offline Persistence Toolkit DefaultCacheHandler: constructResponse()"),a.responseFromJSON(b).then(function(b){return a.isCachedResponse(b)||b.headers.set("x-oracle-jscpt-cache-expiration-date",""),b})},d.prototype.constructSearchCriteria=function(a,b){c.log("Offline Persistence Toolkit DefaultCacheHandler: constructSearchCriteria()");var d=!1;b&&void 0!==b.ignoreSearch&&(d=b.ignoreSearch);var e=!1;b&&void 0!==b.ignoreMethod&&(e=b.ignoreMethod);var f;if(d){f={"metadata.baseUrl":k(a.url)}}else f={"metadata.url":a.url};return e||(f["metadata.method"]=a.method),{selector:f,sort:["metadata.created"]}},d.prototype.registerEndpointOptions=function(a,b){if(!a)throw new Error({message:"a valid endpointKey must be provided."});if(this._endpointToOptionsMap[a])throw new Error({message:"endpointKey can only be registered once."});this._endpointToOptionsMap[a]=b},d.prototype.unregisterEndpointOptions=function(a){if(!a)throw new Error({message:"a valid endpointKey must be provided."});delete this._endpointToOptionsMap[a]},d.prototype.hasShredder=function(a){return null!==this._getShredder(a)},d.prototype._getShredder=function(a){var b=this._getJsonProcessor(a.url);return b?b.shredder:null},d.prototype._getUnshredder=function(a){var b=this._getJsonProcessor(a.url);return b?b.unshredder:null},d.prototype._getJsonProcessor=function(a){for(var b=Object.keys(this._endpointToOptionsMap),c=0;c<b.length;c++){var d=b[c];if(a===JSON.parse(d).url){var e=this._endpointToOptionsMap[d];return e&&e.jsonProcessor&&e.jsonProcessor.shredder&&e.jsonProcessor.unshredder?e.jsonProcessor:null}}return null},d.prototype._getQueryHandler=function(a){for(var b=Object.keys(this._endpointToOptionsMap),c=0;c<b.length;c++){var d=b[c];if(a===JSON.parse(d).url){var e=this._endpointToOptionsMap[d];return e&&e.queryHandler?e.queryHandler:null}}return null},d.prototype.fillResponseBodyWithShreddedData=function(a,b,d){c.log("Offline Persistence Toolkit DefaultCacheHandler: fillResponseBodyWithShreddedData()"),null!=a.url&&a.url.length>0&&null==d.headers.get("x-oracle-jscpt-response-url")&&d.headers.set("x-oracle-jscpt-response-url",a.url),b&&1===b.length&&"single"===b[0].resourceType&&d.headers.set("x-oracle-jscpt-resource-type","single");var e=this._getUnshredder(a),f=this._getShredder(a);if(!(e&&f&&d&&b&&b.length))return Promise.resolve(d);var g=b.map(function(a){return j(a)});return Promise.all(g).then(function(a){return e(a,d)})},d.prototype.deleteShreddedData=function(a){var c=[];return a.forEach(function(a){var d=a.name,e=a.keys;if(d&&e&&e.length){var f=b.openStore(d).then(function(a){var b=e.map(function(a){return{key:{$eq:a}}}),c={selector:{$or:b}};return a.delete(c)});c.push(f)}}),Promise.all(c)};var k=function(a){if(!a||"string"!=typeof a)return"";var b=/([^?]*)\?/,c=b.exec(a);return c&&2===c.length?c[1]:a},l=function(a){if(!a||"string"!=typeof a)return"";var b=a.split("").reverse().join(""),c=/(.*?)(TEG|TUP|ETELED|TSOP|HCTAP|TCENNOC|SNOITPO|ECART)/,d=c.exec(b);return d&&3===d.length?d[1].split("").reverse().join(""):a};return new d});