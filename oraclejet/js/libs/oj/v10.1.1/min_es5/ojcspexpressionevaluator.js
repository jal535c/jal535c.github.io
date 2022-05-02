/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojexpparser","ojs/ojkoshared"],function(n,e){"use strict";
/**
   * @license
   * Copyright (c) 2019 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */return function(e){var r=new n.ExpParser,t=Object.assign({},e);t.globalScope&&t.globalScope.Object||(t.globalScope=Object.assign({Object:Object},t.globalScope)),this.createEvaluator=function(n){var e;try{e=r.parse(n)}catch(e){p(e,n)}var u=t.globalScope;return{evaluate:function(r){var t,o=r;u&&(o=r.concat([u]));try{t=c(e,o)}catch(e){p(e,n)}return t}}};var u={"||":function(n,e){return n||e()},"&&":function(n,e){return n&&e()},"|":function(n,e){return n|e},"^":function(n,e){return n^e},"&":function(n,e){return n&e},"==":function(n,e){return n==e},"!=":function(n,e){return n!=e},"===":function(n,e){return n===e},"!==":function(n,e){return n!==e},"<":function(n,e){return n<e},">":function(n,e){return n>e},"<=":function(n,e){return n<=e},">=":function(n,e){return n>=e},"<<":function(n,e){return n<<e},">>":function(n,e){return n>>e},">>>":function(n,e){return n>>>e},"+":function(n,e){return n+e},"-":function(n,e){return n-e},"*":function(n,e){return n*e},"/":function(n,e){return n/e},"%":function(n,e){return n%e}},o={"-":function(n){return-n},"+":function(n){return n},"~":function(n){return~n},"!":function(n){return!n}};function c(n,e){switch(n.type){case 1:return function(n,e){var r=f(n,e);if(r)return r[e];s("Variable "+e+" is undefined")}(e,n.name);case 2:return i(n,e)[1];case 3:return n.value;case 4:var r,t,l;switch(n.callee.type){case 1:l=function(n,e){var r=f(n,e);if(r)return[r,r[e]];s("Variable "+e+" is undefined")}(e,n.callee.name);break;case 2:l=i(n.callee,e);break;default:t=c(n.callee,e)}return t||(r=l[0],t=l[1]),"function"!=typeof t&&s("Expression is not a function"),t.apply(r,a(n.arguments,e));case 5:return o[n.operator](c(n.argument,e));case 6:return"="===n.operator?function(n,e,r){switch(n.type){case 1:var t=n.name,u=f(e,t);u||s("Cannot assign value to undefined variable "+t),u[t]=r;break;case 2:var o=n.computed?c(n.property,e):n.property.name;i(n,e)[0][o]=r;break;default:s("Expression of type: "+n.type+" not supported for assignment")}return r}(n.left,e,c(n.right,e)):u[n.operator](c(n.left,e),c(n.right,e));case 7:return u[n.operator](c(n.left,e),function(){return c(n.right,e)});case 8:return c(n.test,e)?c(n.consequent,e):c(n.alternate,e);case 9:return a(n.elements,e);case 10:return function(n,e){return n.properties.reduce(function(n,r){return n[r.key]=c(r.value,e),n},{})}(n,e);case 11:return function(n,e){return function(){var r=arguments,t=n.arguments.reduce(function(n,e,t){return n[e.name]=r[t],n},{});t.this=this;try{var u=c(n.body,[t].concat(e));if(n.return)return u}catch(e){p(e,n.expr)}}}(n,e);case 12:return function(n,e){var r=c(n.callee,e);return r instanceof Function||s("Node of type "+n.callee.type+" is not evaluated into a constructor"),new(Function.prototype.bind.apply(r,[null].concat(a(n.arguments,e))))}(n,e);default:s("Unsupported expression type: "+n.type)}}function a(n,e){return n.map(function(n){return c(n,e)})}function i(n,e){var r=c(n.object,e);return!r&&n.conditional?[]:n.computed?[r,r[c(n.property,e)]]:[r,r[n.property.name]]}function f(n,e){for(var r=0;r<n.length;r++){var t=n[r];if(t instanceof Object&&e in t)return t}return null}function s(n){throw new Error(n)}function p(n,e){throw new Error(n.message+' in expression "'+e+'"')}}});
//# sourceMappingURL=ojcspexpressionevaluator.js.map