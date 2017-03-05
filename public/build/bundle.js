var board =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonpboard"];
/******/ 	window["webpackJsonpboard"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();
/******/
/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		head.appendChild(script);
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

$.ui = $.ui || {};

return $.ui.version = "1.12.1";

} ) );


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TEST_VIDEO_URL = exports.TEST_VIDEO_URL = "http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv";
var TEST_YOUTUBE_VIDEO_URL = exports.TEST_YOUTUBE_VIDEO_URL = "https://www.youtube.com/embed/B9FzVhw8_bY";
var MAX_BOARDS = exports.MAX_BOARDS = 3;
var TOOL_IMG_PATH = exports.TOOL_IMG_PATH = "static/images/";

// Paths
var STATIC_PATH = exports.STATIC_PATH = "static/";
var IMAGES_PATH = exports.IMAGES_PATH = "images/";

// elements
var ELEMENT_DIV = exports.ELEMENT_DIV = "<div></div>";
var ELEMENT_IFRAME = exports.ELEMENT_IFRAME = "<iframe></iframe>";
var ELEMENT_SPAN = exports.ELEMENT_SPAN = "<span></span>";
var ELEMENT_HEADER = exports.ELEMENT_HEADER = "<h3></h3>";
var ELEMENT_UL = exports.ELEMENT_UL = "<ul></ul>";
var ELEMENT_LI = exports.ELEMENT_LI = "<li></li>";
var ELEMENT_IMG = exports.ELEMENT_IMG = "<img />";
var ELEMENT_BTN = exports.ELEMENT_BTN = "<button></button>";
var ELEMENT_CANVAS = exports.ELEMENT_CANVAS = "<canvas></canvas>";
var ELEMENT_INPUT = exports.ELEMENT_INPUT = "<input />";
var ELEMENT_LABEL = exports.ELEMENT_LABEL = "<label></label>";
var ELEMENT_RADIO = exports.ELEMENT_RADIO = "<input type=\"radio\" />";
var ELEMENT_OPTION = exports.ELEMENT_OPTION = "<option></option>";
var ELEMENT_SELECT = exports.ELEMENT_SELECT = "<select></select>";
//Cursors
var CURSOR_TOP_LEFT = exports.CURSOR_TOP_LEFT = "nw-resize";
var CURSOR_TOP_RIGHT = exports.CURSOR_TOP_RIGHT = "ne-resize";
var CURSOR_BOTTOM_LEFT = exports.CURSOR_BOTTOM_LEFT = "sw-resize";
var CURSOR_BOTTOM_RIGHT = exports.CURSOR_BOTTOM_RIGHT = "se-resize";
var CURSOR_DEFAULT = exports.CURSOR_DEFAULT = "default";

// Shapes
var SHAPE_CIRCLE = exports.SHAPE_CIRCLE = "Circle";
var SHAPE_RECTANGLE = exports.SHAPE_RECTANGLE = "Rect";
var SHAPE_TRIANGLE = exports.SHAPE_TRIANGLE = "Triangle";
var SHAPE_ELLIPSE = exports.SHAPE_ELLIPSE = "Ellipse";
var SHAPE_LINE = exports.SHAPE_LINE = "Line";

var SHAPE_TEXT = exports.SHAPE_TEXT = "IText";

var BRUSH_TOOL = exports.BRUSH_TOOL = "Brush";
// brush
var BRUSH_PENCIL = exports.BRUSH_PENCIL = "pencil";
// Colors
var COLOR_FILL_STYLE = exports.COLOR_FILL_STYLE = "fillStyle";
var COLOR_STROKE_STYLE = exports.COLOR_STROKE_STYLE = "strokeStyle";
var COLOR_BACKGROUND = exports.COLOR_BACKGROUND = "backgroundColor";
var COLOR_LINE_COLOR = exports.COLOR_LINE_COLOR = "lineColor";
var COLOR_TEXT_COLOR = exports.COLOR_TEXT_COLOR = "textColor";
// Transform
var TRANSFORM_WIDTH_STROKE = exports.TRANSFORM_WIDTH_STROKE = "strokeWidth";
var TRANSFORM_WIDTH_LINE = exports.TRANSFORM_WIDTH_LINE = "lineWidth";
var TRANSFORM_FONT_SIZE = exports.TRANSFORM_FONT_SIZE = "fontSize";
// Sets
var PAINT_SET_DEFAULT = exports.PAINT_SET_DEFAULT = "default";
var PAINT_SET_BRUSH = exports.PAINT_SET_BRUSH = BRUSH_TOOL;
var PAINT_SET_PENCIL = exports.PAINT_SET_PENCIL = BRUSH_PENCIL;

var TOOLS_GROUP_COLORS = exports.TOOLS_GROUP_COLORS = "toolsColors";
var TOOLS_GROUP_TRANSFORMS = exports.TOOLS_GROUP_TRANSFORMS = "toolsTransforms";
var TOOLS_GROUP_SHAPES = exports.TOOLS_GROUP_SHAPES = "toolsShapes";
// events
var MOUSE_DOWN = exports.MOUSE_DOWN = "mouse:down";
var MOUSE_UP = exports.MOUSE_UP = "mouse:up";
var MOUSE_MOVE = exports.MOUSE_MOVE = "mouse:move";

var MOUSE_CLICK = exports.MOUSE_CLICK = "click";

// CSS classes
var CSS_TOOLS_SET = exports.CSS_TOOLS_SET = "tools-set";
var CSS_MAIN_TOOL_IMAGE = exports.CSS_MAIN_TOOL_IMAGE = "tool-img";
var CSS_MAIN_TOOL_ELEMENT = exports.CSS_MAIN_TOOL_ELEMENT = "tool-element";
var CSS_MAIN_TOOL_ACTIVE = exports.CSS_MAIN_TOOL_ACTIVE = "tool-active";
var CSS_TOOL_LABEL = exports.CSS_TOOL_LABEL = "tool-label";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _View2 = __webpack_require__(4);

var _View3 = _interopRequireDefault(_View2);

var _FileUploadField = __webpack_require__(17);

var _FileUploadField2 = _interopRequireDefault(_FileUploadField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bottom_View = function (_View) {
    _inherits(Bottom_View, _View);

    function Bottom_View() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Bottom_View);

        var _this = _possibleConstructorReturn(this, (Bottom_View.__proto__ || Object.getPrototypeOf(Bottom_View)).call(this, { className: "bottom-panel", active: true }));

        var items = props.items,
            optionsItems = props.optionsItems;

        _this.option = {
            items: items || [],
            optionsItems: optionsItems || []
        };

        return _this;
    }

    _createClass(Bottom_View, [{
        key: "renderOptionItems",
        value: function renderOptionItems() {
            var _this2 = this;

            var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            return (0, _jquery2.default)("<ul></ul>", {
                "class": "bottom-option-list"
            }).append(items.map(function (i) {
                return _this2.renderOptionItem(i);
            }));
        }
    }, {
        key: "renderOptionItem",
        value: function renderOptionItem() {
            var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var text = item.text,
                className = item.className;

            return (0, _jquery2.default)("<span></span>", {
                "class": "bottom-option-item",
                text: text
            });
        }
    }, {
        key: "renderButtons",
        value: function renderButtons() {
            var _this3 = this;

            var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            return (0, _jquery2.default)("<ul></ul>", {
                "class": "bottom-list"
            }).append(items.map(function (btn) {
                return _this3.renderItem({
                    label: btn.label,
                    onClick: btn.onClick,
                    onUpload: btn.onUpload,
                    onChange: btn.onChange,
                    className: "bottom-view_button",
                    type: btn.type
                });
            }));
        }
    }, {
        key: "renderItem",
        value: function renderItem() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var type = props.type,
                label = props.label,
                onClick = props.onClick,
                className = props.className,
                onUpload = props.onUpload,
                onChange = props.onChange;

            if (type == "button") {
                return (0, _jquery2.default)("<div></div>", {
                    "class": "tool-element"
                }).on("click", onClick).append(Bottom_View.getImage(label));
            } else if (type == "input") {
                return (0, _jquery2.default)("<li></li>", {
                    "class": "bottom-list_item"
                }).append(new _FileUploadField2.default({ name: label, onUpload: onUpload != null ? onUpload : null, value: "" }).render(function (e) {
                    console.log(e);
                }));
            } else if (type == "link") {
                return (0, _jquery2.default)("<li></li>", {
                    "class": "bottom-list_item"
                }).append((0, _jquery2.default)("<a donwload='canvas.png' href='#'>download</a>", {
                    "class": "button",
                    text: label
                }).on("click", onClick).addClass("button"));
            } else if (type == "text") {
                return (0, _jquery2.default)("<input type=\"text\"/ >").on("keypress", function (e) {
                    if (e.which == 13) {
                        if (onChange != null) {
                            onChange(e.target.value);
                        }
                    }
                    console.log(e.which);
                });
            }
        }
    }, {
        key: "update",
        value: function update() {
            var _option = this.option,
                items = _option.items,
                optionsItems = _option.optionsItems;

            var bottomWrapper = (0, _jquery2.default)("." + this.className);
            bottomWrapper.empty();
            if (optionsItems.length > 0) {
                bottomWrapper.append(this.renderOptionItems(optionsItems));
            }
            bottomWrapper.append(this.renderButtons(items));
            return bottomWrapper;
        }
    }, {
        key: "render",
        value: function render() {
            var _option2 = this.option,
                items = _option2.items,
                optionsItems = _option2.optionsItems;

            var bottomWrapper = this.renderWrapper();
            if (optionsItems.length > 0) {
                bottomWrapper.append(this.renderOptionItems(optionsItems));
            }
            return bottomWrapper.append(this.renderButtons(items));
        }
    }], [{
        key: "getImage",
        value: function getImage(name) {
            return (0, _jquery2.default)("<img />", {
                src: "static/images/" + name + ".png",
                "class": "tool-img"
            });
        }
    }]);

    return Bottom_View;
}(_View3.default);

exports.default = Bottom_View;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, View);

        this.className = props.className;
        this.active = props.active;
    }

    _createClass(View, [{
        key: "update",
        value: function update() {
            var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            var wrapper = (0, _jquery2.default)("." + this.className);
            if (wrapper != null) {
                return wrapper.empty().append(elements);
            } else {
                return this.renderWrapper().append(elements);
            }
        }
    }, {
        key: "onResize",
        value: function onResize(e) {
            //
        }
    }, {
        key: "renderWrapper",
        value: function renderWrapper() {
            return (0, _jquery2.default)("<div></div>", {
                "class": this.className
            });
        }
    }]);

    return View;
}();

exports.default = View;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _Constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputField = function () {
  function InputField() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, InputField);

    var name = props.name,
        value = props.value,
        className = props.className,
        callback = props.callback;

    this.name = name;
    this.callback = callback;
    this.value = value;
    this.className = className;
  }

  _createClass(InputField, [{
    key: "getLabel",
    value: function getLabel(inputElement) {
      var label = (0, _jquery2.default)(_Constants.ELEMENT_LABEL, {
        "text": this.name,
        "class": _Constants.CSS_TOOL_LABEL,
        "for": this.name
      }).append(inputElement);
      return label;
    }
  }]);

  return InputField;
}();

exports.default = InputField;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BoardView = __webpack_require__(12);

var _BoardView2 = _interopRequireDefault(_BoardView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, null, [{
        key: "getId",
        value: function getId(a, b) {
            return Math.round(Math.random() * (a * 42 >> 2 + (b + 42 - Math.round(Math.random() * (a - 2))))).toString() + "_&_hash";
        }
    }, {
        key: "firstCharTOUpperCase",
        value: function firstCharTOUpperCase(str) {
            return str.substring(0, 1).toUpperCase().concat(str.substring(1));
        }
    }, {
        key: "isBoard",
        value: function isBoard(board) {
            return board != null && board instanceof _BoardView2.default;
        }
    }]);

    return Utils;
}();

exports.default = Utils;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
    function Controller() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Controller);

        this.model = props.model;
    }

    _createClass(Controller, [{
        key: "getModel",
        value: function getModel() {
            return this.model;
        }
    }]);

    return Controller;
}();

exports.default = Controller;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(6);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PaintObject = function () {
    function PaintObject() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, PaintObject);

        var x = props.x,
            y = props.y,
            ctx = props.ctx;

        this._id = _Utils2.default.getId(x, y);
        this.x = x;
        this.y = y;
        this.ctx = ctx;
    }

    _createClass(PaintObject, [{
        key: "setX",
        value: function setX(newX) {
            this.x = newX;
            return this;
        }
    }, {
        key: "setY",
        value: function setY(newY) {
            this.y = newY;
            return this;
        }
    }, {
        key: "updatePosition",
        value: function updatePosition(_ref) {
            var x = _ref.x,
                y = _ref.y;

            this.x = x;
            this.y = y;
            return this;
        }
    }]);

    return PaintObject;
}();

exports.default = PaintObject;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BoundBox = __webpack_require__(33);

var _BoundBox2 = _interopRequireDefault(_BoundBox);

var _PaintObject2 = __webpack_require__(8);

var _PaintObject3 = _interopRequireDefault(_PaintObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shape = function (_PaintObject) {
    _inherits(Shape, _PaintObject);

    function Shape(_ref) {
        var x = _ref.x,
            y = _ref.y,
            w = _ref.w,
            h = _ref.h,
            ctx = _ref.ctx,
            strokeStyle = _ref.strokeStyle,
            lineWidth = _ref.lineWidth,
            fillStyle = _ref.fillStyle,
            globalAlpha = _ref.globalAlpha,
            shadowBlur = _ref.shadowBlur,
            shadowColor = _ref.shadowColor,
            fill = _ref.fill;

        _classCallCheck(this, Shape);

        var _this = _possibleConstructorReturn(this, (Shape.__proto__ || Object.getPrototypeOf(Shape)).call(this, { x: x, y: y, ctx: ctx }));

        _this.w = w;
        _this.h = h;

        _this.strokeStyle = strokeStyle;
        _this.lineWidth = lineWidth;
        _this.fillStyle = fillStyle;
        _this.globalAlpha = globalAlpha;
        _this.fill = fill; // bool
        _this.shadowColor = shadowColor;
        _this.shadowBlur = shadowBlur;

        /*
         Bound box ( Rectangle )
         used to resize Shape
         by default size 4
         */
        _this.boundWidth = 6;
        _this.boundHeight = 6;
        _this.boundSize = 4;
        _this.boundBoxes = [];
        return _this;
    }

    _createClass(Shape, [{
        key: "setW",
        value: function setW(newW) {
            this.w = Math.abs(newW);
            return this;
        }
    }, {
        key: "setH",
        value: function setH(newH) {
            this.h = Math.abs(newH);
            return this;
        }
    }, {
        key: "log",
        value: function log() {
            console.log("SHAPE: \n" + "x: " + this.x, +"\n" + "y: " + this.y);
        }
    }, {
        key: "getBoundBox",
        value: function getBoundBox(options) {
            var _this2 = this;

            var positions = {
                topLeft: [this.x - this.boundWidth / 2, this.y - this.boundHeight / 2],
                topRight: [this.x + this.w - this.boundWidth / 2, this.y - this.boundHeight / 2],
                bottomLeft: [this.x - this.boundWidth / 2, this.y + this.h - this.boundHeight / 2],
                bottomRight: [this.x + this.w - this.boundWidth / 2, this.y + this.h - this.boundHeight / 2]
            };

            Object.keys(positions).forEach(function (pos) {
                var props = {
                    x: positions[pos][0],
                    y: positions[pos][1],
                    w: _this2.boundWidth,
                    h: _this2.boundHeight,
                    ctx: _this2.ctx
                };
                _this2.boundBoxes.push(new _BoundBox2.default(props));
            });
            return this.boundBoxes;
        }
    }, {
        key: "drawBoundBox",
        value: function drawBoundBox() {
            if (this.boundBoxes.length === 0) {
                this.getBoundBox();
            }
            this.boundBoxes.forEach(function (box) {
                return box.draw();
            });
        }
    }, {
        key: "clearBoundBox",
        value: function clearBoundBox() {
            this.boundBoxes.forEach(function (box) {
                return box.clear();
            });
            this.boundBoxes = [];
        }
    }, {
        key: "clear",
        value: function clear() {
            this.ctx.clearRect(this.x, this.y, this.w, this.h);
            if (this.boundBoxes.length > 0) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.boundBoxes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var b = _step.value;

                        b.clear();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
            this.boundBoxes = [];
        }
    }, {
        key: "getSelecedBoundedBox",
        value: function getSelecedBoundedBox(pos) {
            if (this.boundBoxes.length > 0) {
                for (var i = 0; i < this.boundBoxes.length; i++) {
                    if (this.boundBoxes[i].contains(pos)) {
                        return {
                            box: this.boundBoxes[i],
                            index: i
                        };
                    }
                }
            }
        }
    }]);

    return Shape;
}(_PaintObject3.default);

exports.default = Shape;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// Http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
} )( $.cleanData );

$.widget = function( name, base, prototype ) {
	var existingConstructor, constructor, basePrototype;

	// ProxiedPrototype allows the provided prototype to remain unmodified
	// so that it can be used as a mixin for multiple widgets (#8876)
	var proxiedPrototype = {};

	var namespace = name.split( "." )[ 0 ];
	name = name.split( "." )[ 1 ];
	var fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	if ( $.isArray( prototype ) ) {
		prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
	}

	// Create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {

		// Allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// Allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	// Extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,

		// Copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),

		// Track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	} );

	basePrototype = new base();

	// We need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = ( function() {
			function _super() {
				return base.prototype[ prop ].apply( this, arguments );
			}

			function _superApply( args ) {
				return base.prototype[ prop ].apply( this, args );
			}

			return function() {
				var __super = this._super;
				var __superApply = this._superApply;
				var returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		} )();
	} );
	constructor.prototype = $.widget.extend( basePrototype, {

		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	} );

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// Redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
				child._proto );
		} );

		// Remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widgetSlice.call( arguments, 1 );
	var inputIndex = 0;
	var inputLength = input.length;
	var key;
	var value;

	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :

						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );

				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string";
		var args = widgetSlice.call( arguments, 1 );
		var returnValue = this;

		if ( isMethodCall ) {

			// If this is an empty collection, we need to have the instance method
			// return undefined instead of the jQuery instance
			if ( !this.length && options === "instance" ) {
				returnValue = undefined;
			} else {
				this.each( function() {
					var methodValue;
					var instance = $.data( this, fullName );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if ( !instance ) {
						return $.error( "cannot call methods on " + name +
							" prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name +
							" widget instance" );
					}

					methodValue = instance[ options ].apply( instance, args );

					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				} );
			}
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat( args ) );
			}

			this.each( function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			} );
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",

	options: {
		classes: {},
		disabled: false,

		// Callbacks
		create: null
	},

	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widgetUuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();
		this.classesElementLookup = {};

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			} );
			this.document = $( element.style ?

				// Element within the document
				element.ownerDocument :

				// Element is window or document
				element.document || element );
			this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();

		if ( this.options.disabled ) {
			this._setOptionDisabled( this.options.disabled );
		}

		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},

	_getCreateOptions: function() {
		return {};
	},

	_getCreateEventData: $.noop,

	_create: $.noop,

	_init: $.noop,

	destroy: function() {
		var that = this;

		this._destroy();
		$.each( this.classesElementLookup, function( key, value ) {
			that._removeClass( value, key );
		} );

		// We can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.off( this.eventNamespace )
			.removeData( this.widgetFullName );
		this.widget()
			.off( this.eventNamespace )
			.removeAttr( "aria-disabled" );

		// Clean up events and states
		this.bindings.off( this.eventNamespace );
	},

	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;
		var parts;
		var curOption;
		var i;

		if ( arguments.length === 0 ) {

			// Don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {

			// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},

	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},

	_setOption: function( key, value ) {
		if ( key === "classes" ) {
			this._setOptionClasses( value );
		}

		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this._setOptionDisabled( value );
		}

		return this;
	},

	_setOptionClasses: function( value ) {
		var classKey, elements, currentElements;

		for ( classKey in value ) {
			currentElements = this.classesElementLookup[ classKey ];
			if ( value[ classKey ] === this.options.classes[ classKey ] ||
					!currentElements ||
					!currentElements.length ) {
				continue;
			}

			// We are doing this to create a new jQuery object because the _removeClass() call
			// on the next line is going to destroy the reference to the current elements being
			// tracked. We need to save a copy of this collection so that we can add the new classes
			// below.
			elements = $( currentElements.get() );
			this._removeClass( currentElements, classKey );

			// We don't use _addClass() here, because that uses this.options.classes
			// for generating the string of classes. We want to use the value passed in from
			// _setOption(), this is the new value of the classes option which was passed to
			// _setOption(). We pass this value directly to _classes().
			elements.addClass( this._classes( {
				element: elements,
				keys: classKey,
				classes: value,
				add: true
			} ) );
		}
	},

	_setOptionDisabled: function( value ) {
		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

		// If the widget is becoming disabled, then nothing is interactive
		if ( value ) {
			this._removeClass( this.hoverable, null, "ui-state-hover" );
			this._removeClass( this.focusable, null, "ui-state-focus" );
		}
	},

	enable: function() {
		return this._setOptions( { disabled: false } );
	},

	disable: function() {
		return this._setOptions( { disabled: true } );
	},

	_classes: function( options ) {
		var full = [];
		var that = this;

		options = $.extend( {
			element: this.element,
			classes: this.options.classes || {}
		}, options );

		function processClassString( classes, checkOption ) {
			var current, i;
			for ( i = 0; i < classes.length; i++ ) {
				current = that.classesElementLookup[ classes[ i ] ] || $();
				if ( options.add ) {
					current = $( $.unique( current.get().concat( options.element.get() ) ) );
				} else {
					current = $( current.not( options.element ).get() );
				}
				that.classesElementLookup[ classes[ i ] ] = current;
				full.push( classes[ i ] );
				if ( checkOption && options.classes[ classes[ i ] ] ) {
					full.push( options.classes[ classes[ i ] ] );
				}
			}
		}

		this._on( options.element, {
			"remove": "_untrackClassesElement"
		} );

		if ( options.keys ) {
			processClassString( options.keys.match( /\S+/g ) || [], true );
		}
		if ( options.extra ) {
			processClassString( options.extra.match( /\S+/g ) || [] );
		}

		return full.join( " " );
	},

	_untrackClassesElement: function( event ) {
		var that = this;
		$.each( that.classesElementLookup, function( key, value ) {
			if ( $.inArray( event.target, value ) !== -1 ) {
				that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
			}
		} );
	},

	_removeClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, false );
	},

	_addClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, true );
	},

	_toggleClass: function( element, keys, extra, add ) {
		add = ( typeof add === "boolean" ) ? add : extra;
		var shift = ( typeof element === "string" || element === null ),
			options = {
				extra: shift ? keys : extra,
				keys: shift ? element : keys,
				element: shift ? this.element : element,
				add: add
			};
		options.element.toggleClass( this._classes( options ), add );
		return this;
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement;
		var instance = this;

		// No suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// No element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {

				// Allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
						$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// Copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ );
			var eventName = match[ 1 ] + instance.eventNamespace;
			var selector = match[ 2 ];

			if ( selector ) {
				delegateElement.on( eventName, selector, handlerProxy );
			} else {
				element.on( eventName, handlerProxy );
			}
		} );
	},

	_off: function( element, eventName ) {
		eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.off( eventName ).off( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
			},
			mouseleave: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
			}
		} );
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
			},
			focusout: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
			}
		} );
	},

	_trigger: function( type, event, data ) {
		var prop, orig;
		var callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();

		// The original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// Copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}

		var hasOptions;
		var effectName = !options ?
			method :
			options === true || typeof options === "number" ?
				defaultEffect :
				options.effect || defaultEffect;

		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}

		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;

		if ( options.delay ) {
			element.delay( options.delay );
		}

		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue( function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			} );
		}
	};
} );

return $.widget;

} ) );


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// define("Notifications", [], function() {

Object.defineProperty(exports, "__esModule", {
	value: true
});
var not = {
	boardAdded: function boardAdded(board) {
		var _id = board.getId(); // init in cls
		return "board with id " + _id + " successfully added";
	},
	currentBoard: function currentBoard(board) {
		var _id = board.getId();
		return "currentBoard with id is " + _id + " .";
	},
	boardDeleted: function boardDeleted(board) {
		var _id = board.getId();
		return "board with id " + _id + " successfully deleted";
	}
};
exports.default = not;
// });

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _View2 = __webpack_require__(4);

var _View3 = _interopRequireDefault(_View2);

var _BoardController = __webpack_require__(26);

var _BoardController2 = _interopRequireDefault(_BoardController);

var _BoardModel = __webpack_require__(27);

var _BoardModel2 = _interopRequireDefault(_BoardModel);

var _Bottom_View = __webpack_require__(3);

var _Bottom_View2 = _interopRequireDefault(_Bottom_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoardView = function (_View) {
    _inherits(BoardView, _View);

    function BoardView() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, BoardView);

        var _this = _possibleConstructorReturn(this, (BoardView.__proto__ || Object.getPrototypeOf(BoardView)).call(this, {
            className: "board-view",
            active: true
        }));

        _this.controller = new _BoardController2.default({
            model: new _BoardModel2.default({
                name: props.name,
                id: props.name + "_id"
            })
        });
        return _this;
    }

    _createClass(BoardView, [{
        key: "setName",
        value: function setName(newName) {
            this.controller.getModel().setName(newName);
        }
    }, {
        key: "getName",
        value: function getName() {
            return this.controller.getModel().getName();
        }
    }, {
        key: "getId",
        value: function getId() {
            return this.controller.getModel().getId();
        }
    }, {
        key: "handleSelect",
        value: function handleSelect(type) {
            console.log(type);
            this.controller.setCurrentView(type);
            this.update();
        }
    }, {
        key: "renderContent",
        value: function renderContent() {
            var boardContent = (0, _jquery2.default)("<div></div>", {
                "class": "board-content"
            });
            var currentView = this.controller.getCurrentView();
            if (currentView != null) {
                boardContent.append(currentView.render());
            }
            return boardContent;
        }
    }, {
        key: "renderAsidePanel",


        // renderBottomPanel () {
        //
        //     const currentView = this.controller.getCurrentView();
        //     const bottomPanel = $(".bottom-panel");
        //     if (currentView != null) {
        //         if (currentView.bottomItems != null && currentView.bottomItems.length > 0) {
        //             // bottom.items = currentView.bottomItems;
        //         }
        //     }
        //     // return bottom.render();
        // }

        value: function renderAsidePanel() {
            var _this2 = this;

            var asidePanel = (0, _jquery2.default)("<div></div>", {
                "class": "aside-list"
            });

            var buttons = [{
                name: "Canvas",
                onClick: function onClick(e) {
                    e.preventDefault();
                    _this2.handleSelect("Canvas");
                }
            }, {
                name: "PDF",
                onClick: function onClick(e) {
                    e.preventDefault();
                    _this2.handleSelect("PDF");
                }
            }, {
                name: "Video",
                onClick: function onClick(e) {
                    e.preventDefault();
                    _this2.handleSelect("Video");
                }
            }];
            buttons.forEach(function (btn) {
                var b = (0, _jquery2.default)("<div></div>", {
                    "class": "tool-element"
                }).on("click", btn.onClick.bind(_this2)).append(_Bottom_View2.default.getImage(btn.name.toLowerCase())).appendTo(asidePanel);
            });
            return asidePanel;
        }
    }, {
        key: "update",
        value: function update() {
            (0, _jquery2.default)(".board-view").replaceWith(this.render());
        }
    }, {
        key: "render",
        value: function render() {
            var wrapper = this.renderWrapper();
            wrapper.attr("id", this.controller.model._id);
            var div = (0, _jquery2.default)("<div></div>").addClass("board-main");
            var content = this.renderContent();
            var asidePanel = this.renderAsidePanel();
            // const bottom = this.renderBottomPanel();
            wrapper.append(div.append(asidePanel, content));
            return wrapper;
        }
    }]);

    return BoardView;
}(_View3.default);

exports.default = BoardView;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _View2 = __webpack_require__(4);

var _View3 = _interopRequireDefault(_View2);

var _ToolsView = __webpack_require__(46);

var _ToolsView2 = _interopRequireDefault(_ToolsView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Canvas_View = function (_View) {
    _inherits(Canvas_View, _View);

    function Canvas_View() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Canvas_View);

        var _this = _possibleConstructorReturn(this, (Canvas_View.__proto__ || Object.getPrototypeOf(Canvas_View)).call(this, { className: props.className, active: props.active }));

        _this.canvas = document.createElement("canvas");
        _this.canvas.setAttribute("id", "canvas");
        _this.canvas.width = 542;
        _this.canvas.height = 336;
        _this.controller = new props.controller({ canvas: _this.canvas, modelConstructor: props.modelConstructor });
        _this.showTools = props.showTools || false;
        _this.tools = new _ToolsView2.default({
            tools: props.tools || ["brush", "shapes", "background", "erase", "select"],
            handleTool: function handleTool(tool) {
                return _this.controller.handleTool(tool);
            },
            handleOption: function handleOption(data) {
                return _this.controller.handleOptionTool(data);
            },
            position: props.position
        });
        return _this;
    }

    /**
     *
     * @param
     * @returns {{x: number, y: number}}
     */


    _createClass(Canvas_View, [{
        key: "getMouse",
        value: function getMouse(e) {
            var rect = this.canvas.getBoundingClientRect();
            return {
                x: (e.clientX - rect.left) / (rect.right - rect.left) * this.canvas.width,
                y: (e.clientY - rect.top) / (rect.bottom - rect.top) * this.canvas.height
            };
        }

        /**
         *
         * @param e
         */

    }, {
        key: "handleMouseDown",
        value: function handleMouseDown(e) {
            console.log("down");
            var pos = this.getMouse(e);
            this.controller.setStartPositions(pos);
        }

        /**
         *
         * @param e
         */

    }, {
        key: "handleMouseMove",
        value: function handleMouseMove(e) {
            console.log('move');
            var pos = this.getMouse(e);
            this.controller.setUpdatedPositions(pos);
        }

        /**
         *
         * @param e
         */

    }, {
        key: "handleMouseUp",
        value: function handleMouseUp(e) {
            console.log("up");
            var pos = this.getMouse(e);
            this.controller.handleMouseUp(pos);
        }

        /**
         *
         * @param e
         */

    }, {
        key: "handleDoubleClick",
        value: function handleDoubleClick(e) {
            e.preventDefault();
            return;
        }

        /**
         *
         * @returns {jQuery|HTMLElement}
         */

    }, {
        key: "update",
        value: function update() {
            var wrapper = (0, _jquery2.default)("." + this.className);
            if (wrapper != null) {
                wrapper.replaceWith(this.renderCanvasView());
            } else {
                wrapper = this.renderCanvasView();
            }
            return wrapper;
        }

        /**
         *
         * @returns {jQuery|HTMLElement}
         */

    }, {
        key: "renderCanvasView",
        value: function renderCanvasView() {
            (0, _jquery2.default)(this.canvas).on("mousedown", this.handleMouseDown.bind(this));
            (0, _jquery2.default)(this.canvas).on("mousemove", this.handleMouseMove.bind(this));
            (0, _jquery2.default)(this.canvas).on("mouseup", this.handleMouseUp.bind(this));
            (0, _jquery2.default)(this.canvas).on("doubleclick", this.handleDoubleClick.bind(this));
            var wrapper = this.renderWrapper();
            if (this.showTools) {
                wrapper.append(this.tools.render());
            }
            wrapper.append(this.getCanvas());
            return wrapper;
        }

        /**
         *
         * @returns {Element|*}
         */

    }, {
        key: "getCanvas",
        value: function getCanvas() {
            return this.canvas;
        }
    }]);

    return Canvas_View;
}(_View3.default);

exports.default = Canvas_View;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PaintControls = __webpack_require__(32);

var _Controller2 = __webpack_require__(7);

var _Controller3 = _interopRequireDefault(_Controller2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prepare = function prepare(canvas, scaleFactor) {
    if (!canvas.style.width) canvas.style.width = canvas.width + 'px';
    if (!canvas.style.height) canvas.style.height = canvas.height + 'px';

    canvas.width = Math.ceil(canvas.width * scaleFactor);
    canvas.height = Math.ceil(canvas.height * scaleFactor);
    var ctx = canvas.getContext('2d');
    ctx.scale(scaleFactor, scaleFactor);
    return ctx;
};

var PaintController = function (_Controller) {
    _inherits(PaintController, _Controller);

    function PaintController() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, PaintController);

        var _this = _possibleConstructorReturn(this, (PaintController.__proto__ || Object.getPrototypeOf(PaintController)).call(this, { model: new props.modelConstructor({ context: props.canvas.getContext("2d"), width: props.canvas.width, height: props.canvas.height }) }));

        _this.props = props;
        _this.selectedTool = null;
        _this.startPositions = {};
        _this.updatedPositions = {};

        _this.controls = {};
        _this.activeControl = null;
        return _this;
    }

    _createClass(PaintController, [{
        key: "prepare",
        value: function prepare(canvas, scaleFactor) {
            if (!canvas.style.width) canvas.style.width = canvas.width + 'px';
            if (!canvas.style.height) canvas.style.height = canvas.height + 'px';

            canvas.width = Math.ceil(canvas.width * scaleFactor);
            canvas.height = Math.ceil(canvas.height * scaleFactor);
            var ctx = canvas.getContext('2d');
            ctx.scale(scaleFactor, scaleFactor);
            return ctx;
        }
    }, {
        key: "getControl",
        value: function getControl() {
            return this.control;
        }
    }, {
        key: "_checkExistingControl",
        value: function _checkExistingControl(type) {
            return this.controls[type] != null;
        }
    }, {
        key: "setControl",
        value: function setControl(tool) {
            var type = tool.name;
            if (this._checkExistingControl(type)) {
                this.activeControl = this.controls[type];
                return this.activeControl;
            } else {
                var props = { type: type, model: this.model, tool: tool };
                switch (type) {
                    case "shapes":
                        this.controls[type] = new _PaintControls.ShapeControl(props);
                        break;
                    case "brush":
                        this.controls[type] = new _PaintControls.BrushControl(props);
                        break;
                    case "background":
                        this.controls[type] = new _PaintControls.BackgroundControl(props);
                        break;
                    case "erase":
                        this.controls[type] = new _PaintControls.EraseControl(props);
                        break;
                    case "select":
                        this.controls[type] = new _PaintControls.SelectControl(Object.assign(props, {
                            canvas: this.props.canvas
                        }));
                        break;
                    default:
                        break;
                }
                this.activeControl = this.controls[type];
            }
        }
    }, {
        key: "handleTool",
        value: function handleTool(tool) {
            this.selectedTool = tool;
            this.setControl(tool);
            console.log("PAINT CONTROLLER: handleTool: ", tool);
        }
    }, {
        key: "handleOptionTool",
        value: function handleOptionTool(dataOption) {
            console.log(this.activeControl);
            this.activeControl.update(dataOption);
            console.log("PAINT CONTROLLER: handleOptionChange: ", dataOption);
        }
    }, {
        key: "getSelectedTool",
        value: function getSelectedTool() {
            return this.selectedTool;
        }
    }, {
        key: "setStartPositions",
        value: function setStartPositions(_ref) {
            var x = _ref.x,
                y = _ref.y;

            this.startPositions.x = x;
            this.startPositions.y = y;
            console.log("PAINT CONTROLLER: startPosition: " + this.startPositions);
            if (this.activeControl != null && this.activeControl.listenersOn) {
                this.activeControl.onMouseDown(this.startPositions);
            }
        }
    }, {
        key: "setUpdatedPositions",
        value: function setUpdatedPositions(_ref2) {
            var x = _ref2.x,
                y = _ref2.y;

            this.updatedPositions.x = x;
            this.updatedPositions.y = y;
            console.log("PAINT CONTROLLER: updatedPositions: " + this.updatedPositions);
            if (this.activeControl != null && this.activeControl.listenersOn) {
                this.activeControl.onMouseMove(this.updatedPositions);
            }
        }
    }, {
        key: "handleMouseUp",
        value: function handleMouseUp(_ref3) {
            var x = _ref3.x,
                y = _ref3.y;

            if (this.activeControl != null && this.activeControl.listenersOn) {
                this.activeControl.onMouseUp(this.updatedPositions);
            }
        }
    }, {
        key: "setSelectTool",
        value: function setSelectTool(tool) {
            this.selectedTool = tool;
        }
    }]);

    return PaintController;
}(_Controller3.default);

exports.default = PaintController;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Canvas_Context = __webpack_require__(28);

var _Canvas_Context2 = _interopRequireDefault(_Canvas_Context);

var _ShapesHolder = __webpack_require__(31);

var _ShapesHolder2 = _interopRequireDefault(_ShapesHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PaintState = function () {
    function PaintState() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, PaintState);

        this.context = new _Canvas_Context2.default({ context: props.context, width: props.width, height: props.height });
        this.holder = new _ShapesHolder2.default();
        this.selected = null;
    }

    _createClass(PaintState, [{
        key: "draw",
        value: function draw() {
            var _this = this;

            this.context.clearContext();
            this.holder.shapes.forEach(function (sh) {
                if (sh == _this.selected) {
                    sh.isBounded = true;
                } else {
                    sh.isBounded = false;
                }
                sh.draw();
            });
        }
    }, {
        key: "updateContext",
        value: function updateContext(optionData) {
            this.context.update(optionData);
            console.log("PAINSTATE update:", optionData);
        }
    }, {
        key: "setBackgroundColor",
        value: function setBackgroundColor(val) {
            if (this.context.backgroundImage != null) {
                this.context.backgroundImage = null;
            }
            this.context.update({ type: "fillStyle", value: val });
            this.context.backgroundColor = val;
            var ctx = this.getContext();
            ctx.fillRect(0, 0, this.context.width, this.context.height);
            this.draw();
        }
    }, {
        key: "setScale",
        value: function setScale(val) {
            this.context.clearContext();
            this.context.update({ type: "scale", value: parseFloat(val) });
            this.draw();
        }
    }, {
        key: "setUpload",
        value: function setUpload(img) {
            if (this.context.backgroundColor != null) {
                this.context.backgroundColor == null;
            }
            this.context.backgroundImage = img;
            this.context.clearContext();
            this.draw();
        }
    }, {
        key: "getContext",
        value: function getContext() {
            return this.context.context;
        }
    }]);

    return PaintState;
}();

exports.default = PaintState;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PaintObject2 = __webpack_require__(8);

var _PaintObject3 = _interopRequireDefault(_PaintObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Path = function (_PaintObject) {
    _inherits(Path, _PaintObject);

    function Path(_ref) {
        var x = _ref.x,
            y = _ref.y,
            ctx = _ref.ctx,
            strokeStyle = _ref.strokeStyle,
            lineWidth = _ref.lineWidth,
            globalAlpha = _ref.globalAlpha,
            shadowColor = _ref.shadowColor,
            shadowBlur = _ref.shadowBlur;

        _classCallCheck(this, Path);

        var _this = _possibleConstructorReturn(this, (Path.__proto__ || Object.getPrototypeOf(Path)).call(this, { x: x, y: y, ctx: ctx }));

        _this.paths = [];

        _this.strokeStyle = strokeStyle;
        _this.lineWidth = lineWidth;
        _this.globalAlpha = globalAlpha;
        _this.shadowColor = shadowColor;
        _this.shadowBlur = shadowBlur;
        return _this;
    }

    _createClass(Path, [{
        key: "addPath",
        value: function addPath(_ref2) {
            var x = _ref2.x,
                y = _ref2.y;

            this.paths.push(x, y);
            return this;
        }
    }, {
        key: "getAllPaths",
        value: function getAllPaths() {
            return this.paths;
        }
    }, {
        key: "stringifyPath",
        value: function stringifyPath() {
            this.path = JSON.stringify(this.path);
        }
    }, {
        key: "parsePath",
        value: function parsePath() {
            this.path = JSON.parse(this.path);
        }
    }]);

    return Path;
}(_PaintObject3.default);

exports.default = Path;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _InputField2 = __webpack_require__(5);

var _InputField3 = _interopRequireDefault(_InputField2);

var _Constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileUpload = function (_InputField) {
    _inherits(FileUpload, _InputField);

    function FileUpload() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, FileUpload);

        var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this, props));

        _this._type = "file";
        _this.onUpload = props.onUpload;

        return _this;
    }

    _createClass(FileUpload, [{
        key: "upload",
        value: function upload(e, cb) {
            var self = this;
            var reader = new FileReader();
            var img = new Image();
            reader.onload = function (ev) {
                img.onload = function () {};
            };
            reader.readAsDataURL(e.target.files[0]);
            reader.onloadend = function (e) {
                img.src = e.target.result;
                cb({ name: self.name, value: img });
            };
        }
    }, {
        key: "render",
        value: function render(handler) {
            var _this2 = this;

            var self = this;
            var file = (0, _jquery2.default)(_Constants.ELEMENT_INPUT, {
                "class": this.className,
                "type": this._type
            }).on("change", function (e) {
                if (self.onUpload != null) {
                    self.onUpload(e);
                } else {
                    _this2.upload(e, handler);
                }
            });
            return this.getLabel(file);
        }
    }]);

    return FileUpload;
}(_InputField3.default);

exports.default = FileUpload;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PaintState2 = __webpack_require__(15);

var _PaintState3 = _interopRequireDefault(_PaintState2);

var _pdfjsDist = __webpack_require__(57);

var _pdfjsDist2 = _interopRequireDefault(_pdfjsDist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var API_GET = "GET";
var ARRAY_BUFFER = "arraybuffer";

var PDF_Model = function (_PaintState) {
    _inherits(PDF_Model, _PaintState);

    function PDF_Model() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, PDF_Model);

        // this.filesUrl = props.files.length > 0 ? props.files : ["ng-book.pdf"];

        var _this = _possibleConstructorReturn(this, (PDF_Model.__proto__ || Object.getPrototypeOf(PDF_Model)).call(this, { context: props.context, width: props.width, height: props.height }));

        _this.currentUrl = "/ng-book.pdf";

        _this.pageRendering = false;
        _this.pageRendering = null;
        _this.scale = 1;

        _this.pdf = null;
        _this.pageNum = 1;
        return _this;
    }

    _createClass(PDF_Model, [{
        key: "upload",
        value: function upload(event, callback) {
            var file = event.target.files[0];
            var reader = null;
            var self = this;
            if (file != null) {
                reader = new FileReader();
                reader.onload = function () {
                    var typedArray = new Uint8Array(reader.result);
                    self.loadPdfFile(typedArray, callback);
                };
                reader.readAsArrayBuffer(file);
            }
        }
    }, {
        key: "loadPdfFile",
        value: function loadPdfFile(data, callback) {
            var self = this;
            var c = _pdfjsDist2.default.getDocument(data).then(function (pdfDoc_) {
                self.pdf = pdfDoc_;
                // callback(self.pdf).then(this.promise);
                callback();
            });
        }
        // //REFACTOR
        // loadPDF (data, cb) {
        //     const self = this;
        //     PDFJS.getDocument(data).then((pdfDoc_) => {
        //         self.pdf = pdfDoc_;
        //         self.renderPage(cb);
        //     });
        // }
        // uploadPDF (event, callback) {
        //     const file = event.target.files[0];
        //     const fileReader = new FileReader();
        //     fileReader.onload = () => {
        //         const typedarray = new Uint8Array(this.result);
        //         self.loadPdf(typedarray, callback);
        //     };
        //     fileReader.readAsArrayBuffer(file);
        // }
        //
        // getPDF () {
        //     return this.pdf;
        // }
        // // END
        //
        // getTotalPages () {
        //     return this.pdf.numPages;
        // }
        //
        // getCurrentPageNum () {
        //     return this.pageNum;
        // }
        // loadFileFromSource () {
        //
        // }
        // loadFile(cb) {
        //     const self = this;
        //     const xhr = new XMLHttpRequest();
        //     xhr.open(API_GET, "static" + self.currentUrl, true);
        //     xhr.responseType = 'arraybuffer';
        //     xhr.onload = (e) => {
        //         self.loadPdf(e.currentTarget.response, cb);
        //     };
        //
        //     xhr.onerror = function () {
        //         console.log("xhr error");
        //     };
        //     xhr.send();
        // }
        //
        // loadPdf(data, cb) {
        //     const self = this;
        //     PDFJS.getDocument(data).then(function (pdfDoc_) {
        //         self.pdf = pdfDoc_;
        //         self.renderPage(cb);
        //     });
        // }
        //
        // queueRenderPage(num, cb) {
        //     if (this.pageRendering) {
        //         this.pageNumPending = num;
        //     } else {
        //         this.renderPage(cb);
        //     }
        // }
        //
        // getNext(cb) {
        //     if (this.pageNum >= this.pdf.numPages) {
        //         return;
        //     }
        //     this.pageNum++;
        //     this.queueRenderPage(this.pageNum, cb);
        // }
        // getPrev (cb) {
        //     if (this.pageNum <= 1) {
        //         return;
        //     }
        //     this.pageNum--;
        //     this.queueRenderPage(this.pageNum, cb);
        // }
        //
        // updatePage(cb) {
        //     const self = this;
        //     this.pdf.getPage(this.pageNum).then(cb).then(this._promise.bind(this));
        // }
        // _promise () {
        //     this.pageRendering = false;
        //     const c = this.getContext();
        //     this.context.backgroundImage = c.canvas.toDataURL(0,0, c.canvas.width, c.canvas.height);
        //     // c.backgroundImage = c.putImageData(img, 0,0);
        //     // c.backgroundImage = c.getImageData(0,0, c.)
        //     this.context.clearContext();
        //     // this.setUpload(img);
        //     if (this.pageNumPending !== null) {
        //         // New page rendering is pending
        //         this.renderPage(cb);
        //         this.pageNumPending = null;
        //     }
        // }
        //
        // renderPage(cb) {
        //     const self = this;
        //     this.pageRendering = true;
        //     this.pdf.getPage(this.pageNum).then(cb).then(this._promise.bind(this));
        // }

    }, {
        key: "promise",
        value: function promise(cb) {
            this.pageRendering = false;
            var c = this.getContext();
            this.context.backgroundImage = c.canvas.toDataURL(0, 0, c.canvas.width, c.canvas.height);
            this.context.clearContext();
            if (this.pageNumPending !== null) {
                // this.renderPage(cb);
                this.pageNumPending = null;
            }
        }
    }]);

    return PDF_Model;
}(_PaintState3.default);

exports.default = PDF_Model;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
return $.ui.plugin = {
	add: function( module, option, set ) {
		var i,
			proto = $.ui[ module ].prototype;
		for ( i in set ) {
			proto.plugins[ i ] = proto.plugins[ i ] || [];
			proto.plugins[ i ].push( [ option, set[ i ] ] );
		}
	},
	call: function( instance, name, args, allowDisconnected ) {
		var i,
			set = instance.plugins[ name ];

		if ( !set ) {
			return;
		}

		if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode ||
				instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
			return;
		}

		for ( i = 0; i < set.length; i++ ) {
			if ( instance.options[ set[ i ][ 0 ] ] ) {
				set[ i ][ 1 ].apply( instance.element, args );
			}
		}
	}
};

} ) );


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Draggable
//>>group: Interactions
//>>description: Enables dragging functionality for any element.
//>>docs: http://api.jqueryui.com/draggable/
//>>demos: http://jqueryui.com/draggable/
//>>css.structure: ../../themes/base/draggable.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(21),
			__webpack_require__(50),
			__webpack_require__(19),
			__webpack_require__(53),
			__webpack_require__(54),
			__webpack_require__(55),
			__webpack_require__(1),
			__webpack_require__(10)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.draggable", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "drag",
	options: {
		addClasses: true,
		appendTo: "parent",
		axis: false,
		connectToSortable: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		grid: false,
		handle: false,
		helper: "original",
		iframeFix: false,
		opacity: false,
		refreshPositions: false,
		revert: false,
		revertDuration: 500,
		scope: "default",
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		snap: false,
		snapMode: "both",
		snapTolerance: 20,
		stack: false,
		zIndex: false,

		// Callbacks
		drag: null,
		start: null,
		stop: null
	},
	_create: function() {

		if ( this.options.helper === "original" ) {
			this._setPositionRelative();
		}
		if ( this.options.addClasses ) {
			this._addClass( "ui-draggable" );
		}
		this._setHandleClassName();

		this._mouseInit();
	},

	_setOption: function( key, value ) {
		this._super( key, value );
		if ( key === "handle" ) {
			this._removeHandleClassName();
			this._setHandleClassName();
		}
	},

	_destroy: function() {
		if ( ( this.helper || this.element ).is( ".ui-draggable-dragging" ) ) {
			this.destroyOnClear = true;
			return;
		}
		this._removeHandleClassName();
		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var o = this.options;

		// Among others, prevent a drag on a resizable-handle
		if ( this.helper || o.disabled ||
				$( event.target ).closest( ".ui-resizable-handle" ).length > 0 ) {
			return false;
		}

		//Quit if we're not on a valid handle
		this.handle = this._getHandle( event );
		if ( !this.handle ) {
			return false;
		}

		this._blurActiveElement( event );

		this._blockFrames( o.iframeFix === true ? "iframe" : o.iframeFix );

		return true;

	},

	_blockFrames: function( selector ) {
		this.iframeBlocks = this.document.find( selector ).map( function() {
			var iframe = $( this );

			return $( "<div>" )
				.css( "position", "absolute" )
				.appendTo( iframe.parent() )
				.outerWidth( iframe.outerWidth() )
				.outerHeight( iframe.outerHeight() )
				.offset( iframe.offset() )[ 0 ];
		} );
	},

	_unblockFrames: function() {
		if ( this.iframeBlocks ) {
			this.iframeBlocks.remove();
			delete this.iframeBlocks;
		}
	},

	_blurActiveElement: function( event ) {
		var activeElement = $.ui.safeActiveElement( this.document[ 0 ] ),
			target = $( event.target );

		// Don't blur if the event occurred on an element that is within
		// the currently focused element
		// See #10527, #12472
		if ( target.closest( activeElement ).length ) {
			return;
		}

		// Blur any element that currently has focus, see #4261
		$.ui.safeBlur( activeElement );
	},

	_mouseStart: function( event ) {

		var o = this.options;

		//Create and append the visible helper
		this.helper = this._createHelper( event );

		this._addClass( this.helper, "ui-draggable-dragging" );

		//Cache the helper size
		this._cacheHelperProportions();

		//If ddmanager is used for droppables, set the global draggable
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.current = this;
		}

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Store the helper's css position
		this.cssPosition = this.helper.css( "position" );
		this.scrollParent = this.helper.scrollParent( true );
		this.offsetParent = this.helper.offsetParent();
		this.hasFixedAncestor = this.helper.parents().filter( function() {
				return $( this ).css( "position" ) === "fixed";
			} ).length > 0;

		//The element's absolute position on the page minus margins
		this.positionAbs = this.element.offset();
		this._refreshOffsets( event );

		//Generate the original position
		this.originalPosition = this.position = this._generatePosition( event, false );
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if "cursorAt" is supplied
		( o.cursorAt && this._adjustOffsetFromHelper( o.cursorAt ) );

		//Set a containment if given in the options
		this._setContainment();

		//Trigger event + callbacks
		if ( this._trigger( "start", event ) === false ) {
			this._clear();
			return false;
		}

		//Recache the helper size
		this._cacheHelperProportions();

		//Prepare the droppable offsets
		if ( $.ui.ddmanager && !o.dropBehaviour ) {
			$.ui.ddmanager.prepareOffsets( this, event );
		}

		// Execute the drag once - this causes the helper not to be visible before getting its
		// correct position
		this._mouseDrag( event, true );

		// If the ddmanager is used for droppables, inform the manager that dragging has started
		// (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStart( this, event );
		}

		return true;
	},

	_refreshOffsets: function( event ) {
		this.offset = {
			top: this.positionAbs.top - this.margins.top,
			left: this.positionAbs.left - this.margins.left,
			scroll: false,
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset()
		};

		this.offset.click = {
			left: event.pageX - this.offset.left,
			top: event.pageY - this.offset.top
		};
	},

	_mouseDrag: function( event, noPropagation ) {

		// reset any necessary cached properties (see #5009)
		if ( this.hasFixedAncestor ) {
			this.offset.parent = this._getParentOffset();
		}

		//Compute the helpers position
		this.position = this._generatePosition( event, true );
		this.positionAbs = this._convertPositionTo( "absolute" );

		//Call plugins and callbacks and use the resulting position if something is returned
		if ( !noPropagation ) {
			var ui = this._uiHash();
			if ( this._trigger( "drag", event, ui ) === false ) {
				this._mouseUp( new $.Event( "mouseup", event ) );
				return false;
			}
			this.position = ui.position;
		}

		this.helper[ 0 ].style.left = this.position.left + "px";
		this.helper[ 0 ].style.top = this.position.top + "px";

		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.drag( this, event );
		}

		return false;
	},

	_mouseStop: function( event ) {

		//If we are using droppables, inform the manager about the drop
		var that = this,
			dropped = false;
		if ( $.ui.ddmanager && !this.options.dropBehaviour ) {
			dropped = $.ui.ddmanager.drop( this, event );
		}

		//if a drop comes from outside (a sortable)
		if ( this.dropped ) {
			dropped = this.dropped;
			this.dropped = false;
		}

		if ( ( this.options.revert === "invalid" && !dropped ) ||
				( this.options.revert === "valid" && dropped ) ||
				this.options.revert === true || ( $.isFunction( this.options.revert ) &&
				this.options.revert.call( this.element, dropped ) )
		) {
			$( this.helper ).animate(
				this.originalPosition,
				parseInt( this.options.revertDuration, 10 ),
				function() {
					if ( that._trigger( "stop", event ) !== false ) {
						that._clear();
					}
				}
			);
		} else {
			if ( this._trigger( "stop", event ) !== false ) {
				this._clear();
			}
		}

		return false;
	},

	_mouseUp: function( event ) {
		this._unblockFrames();

		// If the ddmanager is used for droppables, inform the manager that dragging has stopped
		// (see #5003)
		if ( $.ui.ddmanager ) {
			$.ui.ddmanager.dragStop( this, event );
		}

		// Only need to focus if the event occurred on the draggable itself, see #10527
		if ( this.handleElement.is( event.target ) ) {

			// The interaction is over; whether or not the click resulted in a drag,
			// focus the element
			this.element.trigger( "focus" );
		}

		return $.ui.mouse.prototype._mouseUp.call( this, event );
	},

	cancel: function() {

		if ( this.helper.is( ".ui-draggable-dragging" ) ) {
			this._mouseUp( new $.Event( "mouseup", { target: this.element[ 0 ] } ) );
		} else {
			this._clear();
		}

		return this;

	},

	_getHandle: function( event ) {
		return this.options.handle ?
			!!$( event.target ).closest( this.element.find( this.options.handle ) ).length :
			true;
	},

	_setHandleClassName: function() {
		this.handleElement = this.options.handle ?
			this.element.find( this.options.handle ) : this.element;
		this._addClass( this.handleElement, "ui-draggable-handle" );
	},

	_removeHandleClassName: function() {
		this._removeClass( this.handleElement, "ui-draggable-handle" );
	},

	_createHelper: function( event ) {

		var o = this.options,
			helperIsFunction = $.isFunction( o.helper ),
			helper = helperIsFunction ?
				$( o.helper.apply( this.element[ 0 ], [ event ] ) ) :
				( o.helper === "clone" ?
					this.element.clone().removeAttr( "id" ) :
					this.element );

		if ( !helper.parents( "body" ).length ) {
			helper.appendTo( ( o.appendTo === "parent" ?
				this.element[ 0 ].parentNode :
				o.appendTo ) );
		}

		// Http://bugs.jqueryui.com/ticket/9446
		// a helper function can return the original element
		// which wouldn't have been set to relative in _create
		if ( helperIsFunction && helper[ 0 ] === this.element[ 0 ] ) {
			this._setPositionRelative();
		}

		if ( helper[ 0 ] !== this.element[ 0 ] &&
				!( /(fixed|absolute)/ ).test( helper.css( "position" ) ) ) {
			helper.css( "position", "absolute" );
		}

		return helper;

	},

	_setPositionRelative: function() {
		if ( !( /^(?:r|a|f)/ ).test( this.element.css( "position" ) ) ) {
			this.element[ 0 ].style.position = "relative";
		}
	},

	_adjustOffsetFromHelper: function( obj ) {
		if ( typeof obj === "string" ) {
			obj = obj.split( " " );
		}
		if ( $.isArray( obj ) ) {
			obj = { left: +obj[ 0 ], top: +obj[ 1 ] || 0 };
		}
		if ( "left" in obj ) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ( "right" in obj ) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ( "top" in obj ) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ( "bottom" in obj ) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_isRootNode: function( element ) {
		return ( /(html|body)/i ).test( element.tagName ) || element === this.document[ 0 ];
	},

	_getParentOffset: function() {

		//Get the offsetParent and cache its position
		var po = this.offsetParent.offset(),
			document = this.document[ 0 ];

		// This is a special case where we need to modify a offset calculated on start, since the
		// following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the
		// next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
		// the document, which means that the scroll is included in the initial calculation of the
		// offset of the parent, and never recalculated upon drag
		if ( this.cssPosition === "absolute" && this.scrollParent[ 0 ] !== document &&
				$.contains( this.scrollParent[ 0 ], this.offsetParent[ 0 ] ) ) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		if ( this._isRootNode( this.offsetParent[ 0 ] ) ) {
			po = { top: 0, left: 0 };
		}

		return {
			top: po.top + ( parseInt( this.offsetParent.css( "borderTopWidth" ), 10 ) || 0 ),
			left: po.left + ( parseInt( this.offsetParent.css( "borderLeftWidth" ), 10 ) || 0 )
		};

	},

	_getRelativeOffset: function() {
		if ( this.cssPosition !== "relative" ) {
			return { top: 0, left: 0 };
		}

		var p = this.element.position(),
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

		return {
			top: p.top - ( parseInt( this.helper.css( "top" ), 10 ) || 0 ) +
				( !scrollIsRootNode ? this.scrollParent.scrollTop() : 0 ),
			left: p.left - ( parseInt( this.helper.css( "left" ), 10 ) || 0 ) +
				( !scrollIsRootNode ? this.scrollParent.scrollLeft() : 0 )
		};

	},

	_cacheMargins: function() {
		this.margins = {
			left: ( parseInt( this.element.css( "marginLeft" ), 10 ) || 0 ),
			top: ( parseInt( this.element.css( "marginTop" ), 10 ) || 0 ),
			right: ( parseInt( this.element.css( "marginRight" ), 10 ) || 0 ),
			bottom: ( parseInt( this.element.css( "marginBottom" ), 10 ) || 0 )
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var isUserScrollable, c, ce,
			o = this.options,
			document = this.document[ 0 ];

		this.relativeContainer = null;

		if ( !o.containment ) {
			this.containment = null;
			return;
		}

		if ( o.containment === "window" ) {
			this.containment = [
				$( window ).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
				$( window ).scrollTop() - this.offset.relative.top - this.offset.parent.top,
				$( window ).scrollLeft() + $( window ).width() -
					this.helperProportions.width - this.margins.left,
				$( window ).scrollTop() +
					( $( window ).height() || document.body.parentNode.scrollHeight ) -
					this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment === "document" ) {
			this.containment = [
				0,
				0,
				$( document ).width() - this.helperProportions.width - this.margins.left,
				( $( document ).height() || document.body.parentNode.scrollHeight ) -
					this.helperProportions.height - this.margins.top
			];
			return;
		}

		if ( o.containment.constructor === Array ) {
			this.containment = o.containment;
			return;
		}

		if ( o.containment === "parent" ) {
			o.containment = this.helper[ 0 ].parentNode;
		}

		c = $( o.containment );
		ce = c[ 0 ];

		if ( !ce ) {
			return;
		}

		isUserScrollable = /(scroll|auto)/.test( c.css( "overflow" ) );

		this.containment = [
			( parseInt( c.css( "borderLeftWidth" ), 10 ) || 0 ) +
				( parseInt( c.css( "paddingLeft" ), 10 ) || 0 ),
			( parseInt( c.css( "borderTopWidth" ), 10 ) || 0 ) +
				( parseInt( c.css( "paddingTop" ), 10 ) || 0 ),
			( isUserScrollable ? Math.max( ce.scrollWidth, ce.offsetWidth ) : ce.offsetWidth ) -
				( parseInt( c.css( "borderRightWidth" ), 10 ) || 0 ) -
				( parseInt( c.css( "paddingRight" ), 10 ) || 0 ) -
				this.helperProportions.width -
				this.margins.left -
				this.margins.right,
			( isUserScrollable ? Math.max( ce.scrollHeight, ce.offsetHeight ) : ce.offsetHeight ) -
				( parseInt( c.css( "borderBottomWidth" ), 10 ) || 0 ) -
				( parseInt( c.css( "paddingBottom" ), 10 ) || 0 ) -
				this.helperProportions.height -
				this.margins.top -
				this.margins.bottom
		];
		this.relativeContainer = c;
	},

	_convertPositionTo: function( d, pos ) {

		if ( !pos ) {
			pos = this.position;
		}

		var mod = d === "absolute" ? 1 : -1,
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] );

		return {
			top: (

				// The absolute mouse position
				pos.top	+

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.top * mod +

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.top * mod -
				( ( this.cssPosition === "fixed" ?
					-this.offset.scroll.top :
					( scrollIsRootNode ? 0 : this.offset.scroll.top ) ) * mod )
			),
			left: (

				// The absolute mouse position
				pos.left +

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.left * mod +

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.left * mod	-
				( ( this.cssPosition === "fixed" ?
					-this.offset.scroll.left :
					( scrollIsRootNode ? 0 : this.offset.scroll.left ) ) * mod )
			)
		};

	},

	_generatePosition: function( event, constrainPosition ) {

		var containment, co, top, left,
			o = this.options,
			scrollIsRootNode = this._isRootNode( this.scrollParent[ 0 ] ),
			pageX = event.pageX,
			pageY = event.pageY;

		// Cache the scroll
		if ( !scrollIsRootNode || !this.offset.scroll ) {
			this.offset.scroll = {
				top: this.scrollParent.scrollTop(),
				left: this.scrollParent.scrollLeft()
			};
		}

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		// If we are not dragging yet, we won't check for options
		if ( constrainPosition ) {
			if ( this.containment ) {
				if ( this.relativeContainer ) {
					co = this.relativeContainer.offset();
					containment = [
						this.containment[ 0 ] + co.left,
						this.containment[ 1 ] + co.top,
						this.containment[ 2 ] + co.left,
						this.containment[ 3 ] + co.top
					];
				} else {
					containment = this.containment;
				}

				if ( event.pageX - this.offset.click.left < containment[ 0 ] ) {
					pageX = containment[ 0 ] + this.offset.click.left;
				}
				if ( event.pageY - this.offset.click.top < containment[ 1 ] ) {
					pageY = containment[ 1 ] + this.offset.click.top;
				}
				if ( event.pageX - this.offset.click.left > containment[ 2 ] ) {
					pageX = containment[ 2 ] + this.offset.click.left;
				}
				if ( event.pageY - this.offset.click.top > containment[ 3 ] ) {
					pageY = containment[ 3 ] + this.offset.click.top;
				}
			}

			if ( o.grid ) {

				//Check for grid elements set to 0 to prevent divide by 0 error causing invalid
				// argument errors in IE (see ticket #6950)
				top = o.grid[ 1 ] ? this.originalPageY + Math.round( ( pageY -
					this.originalPageY ) / o.grid[ 1 ] ) * o.grid[ 1 ] : this.originalPageY;
				pageY = containment ? ( ( top - this.offset.click.top >= containment[ 1 ] ||
					top - this.offset.click.top > containment[ 3 ] ) ?
						top :
						( ( top - this.offset.click.top >= containment[ 1 ] ) ?
							top - o.grid[ 1 ] : top + o.grid[ 1 ] ) ) : top;

				left = o.grid[ 0 ] ? this.originalPageX +
					Math.round( ( pageX - this.originalPageX ) / o.grid[ 0 ] ) * o.grid[ 0 ] :
					this.originalPageX;
				pageX = containment ? ( ( left - this.offset.click.left >= containment[ 0 ] ||
					left - this.offset.click.left > containment[ 2 ] ) ?
						left :
						( ( left - this.offset.click.left >= containment[ 0 ] ) ?
							left - o.grid[ 0 ] : left + o.grid[ 0 ] ) ) : left;
			}

			if ( o.axis === "y" ) {
				pageX = this.originalPageX;
			}

			if ( o.axis === "x" ) {
				pageY = this.originalPageY;
			}
		}

		return {
			top: (

				// The absolute mouse position
				pageY -

				// Click offset (relative to the element)
				this.offset.click.top -

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.top -

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.top +
				( this.cssPosition === "fixed" ?
					-this.offset.scroll.top :
					( scrollIsRootNode ? 0 : this.offset.scroll.top ) )
			),
			left: (

				// The absolute mouse position
				pageX -

				// Click offset (relative to the element)
				this.offset.click.left -

				// Only for relative positioned nodes: Relative offset from element to offset parent
				this.offset.relative.left -

				// The offsetParent's offset without borders (offset + border)
				this.offset.parent.left +
				( this.cssPosition === "fixed" ?
					-this.offset.scroll.left :
					( scrollIsRootNode ? 0 : this.offset.scroll.left ) )
			)
		};

	},

	_clear: function() {
		this._removeClass( this.helper, "ui-draggable-dragging" );
		if ( this.helper[ 0 ] !== this.element[ 0 ] && !this.cancelHelperRemoval ) {
			this.helper.remove();
		}
		this.helper = null;
		this.cancelHelperRemoval = false;
		if ( this.destroyOnClear ) {
			this.destroy();
		}
	},

	// From now on bulk stuff - mainly helpers

	_trigger: function( type, event, ui ) {
		ui = ui || this._uiHash();
		$.ui.plugin.call( this, type, [ event, ui, this ], true );

		// Absolute position and offset (see #6884 ) have to be recalculated after plugins
		if ( /^(drag|start|stop)/.test( type ) ) {
			this.positionAbs = this._convertPositionTo( "absolute" );
			ui.offset = this.positionAbs;
		}
		return $.Widget.prototype._trigger.call( this, type, event, ui );
	},

	plugins: {},

	_uiHash: function() {
		return {
			helper: this.helper,
			position: this.position,
			originalPosition: this.originalPosition,
			offset: this.positionAbs
		};
	}

} );

$.ui.plugin.add( "draggable", "connectToSortable", {
	start: function( event, ui, draggable ) {
		var uiSortable = $.extend( {}, ui, {
			item: draggable.element
		} );

		draggable.sortables = [];
		$( draggable.options.connectToSortable ).each( function() {
			var sortable = $( this ).sortable( "instance" );

			if ( sortable && !sortable.options.disabled ) {
				draggable.sortables.push( sortable );

				// RefreshPositions is called at drag start to refresh the containerCache
				// which is used in drag. This ensures it's initialized and synchronized
				// with any changes that might have happened on the page since initialization.
				sortable.refreshPositions();
				sortable._trigger( "activate", event, uiSortable );
			}
		} );
	},
	stop: function( event, ui, draggable ) {
		var uiSortable = $.extend( {}, ui, {
			item: draggable.element
		} );

		draggable.cancelHelperRemoval = false;

		$.each( draggable.sortables, function() {
			var sortable = this;

			if ( sortable.isOver ) {
				sortable.isOver = 0;

				// Allow this sortable to handle removing the helper
				draggable.cancelHelperRemoval = true;
				sortable.cancelHelperRemoval = false;

				// Use _storedCSS To restore properties in the sortable,
				// as this also handles revert (#9675) since the draggable
				// may have modified them in unexpected ways (#8809)
				sortable._storedCSS = {
					position: sortable.placeholder.css( "position" ),
					top: sortable.placeholder.css( "top" ),
					left: sortable.placeholder.css( "left" )
				};

				sortable._mouseStop( event );

				// Once drag has ended, the sortable should return to using
				// its original helper, not the shared helper from draggable
				sortable.options.helper = sortable.options._helper;
			} else {

				// Prevent this Sortable from removing the helper.
				// However, don't set the draggable to remove the helper
				// either as another connected Sortable may yet handle the removal.
				sortable.cancelHelperRemoval = true;

				sortable._trigger( "deactivate", event, uiSortable );
			}
		} );
	},
	drag: function( event, ui, draggable ) {
		$.each( draggable.sortables, function() {
			var innermostIntersecting = false,
				sortable = this;

			// Copy over variables that sortable's _intersectsWith uses
			sortable.positionAbs = draggable.positionAbs;
			sortable.helperProportions = draggable.helperProportions;
			sortable.offset.click = draggable.offset.click;

			if ( sortable._intersectsWith( sortable.containerCache ) ) {
				innermostIntersecting = true;

				$.each( draggable.sortables, function() {

					// Copy over variables that sortable's _intersectsWith uses
					this.positionAbs = draggable.positionAbs;
					this.helperProportions = draggable.helperProportions;
					this.offset.click = draggable.offset.click;

					if ( this !== sortable &&
							this._intersectsWith( this.containerCache ) &&
							$.contains( sortable.element[ 0 ], this.element[ 0 ] ) ) {
						innermostIntersecting = false;
					}

					return innermostIntersecting;
				} );
			}

			if ( innermostIntersecting ) {

				// If it intersects, we use a little isOver variable and set it once,
				// so that the move-in stuff gets fired only once.
				if ( !sortable.isOver ) {
					sortable.isOver = 1;

					// Store draggable's parent in case we need to reappend to it later.
					draggable._parent = ui.helper.parent();

					sortable.currentItem = ui.helper
						.appendTo( sortable.element )
						.data( "ui-sortable-item", true );

					// Store helper option to later restore it
					sortable.options._helper = sortable.options.helper;

					sortable.options.helper = function() {
						return ui.helper[ 0 ];
					};

					// Fire the start events of the sortable with our passed browser event,
					// and our own helper (so it doesn't create a new one)
					event.target = sortable.currentItem[ 0 ];
					sortable._mouseCapture( event, true );
					sortable._mouseStart( event, true, true );

					// Because the browser event is way off the new appended portlet,
					// modify necessary variables to reflect the changes
					sortable.offset.click.top = draggable.offset.click.top;
					sortable.offset.click.left = draggable.offset.click.left;
					sortable.offset.parent.left -= draggable.offset.parent.left -
						sortable.offset.parent.left;
					sortable.offset.parent.top -= draggable.offset.parent.top -
						sortable.offset.parent.top;

					draggable._trigger( "toSortable", event );

					// Inform draggable that the helper is in a valid drop zone,
					// used solely in the revert option to handle "valid/invalid".
					draggable.dropped = sortable.element;

					// Need to refreshPositions of all sortables in the case that
					// adding to one sortable changes the location of the other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					} );

					// Hack so receive/update callbacks work (mostly)
					draggable.currentItem = draggable.element;
					sortable.fromOutside = draggable;
				}

				if ( sortable.currentItem ) {
					sortable._mouseDrag( event );

					// Copy the sortable's position because the draggable's can potentially reflect
					// a relative position, while sortable is always absolute, which the dragged
					// element has now become. (#8809)
					ui.position = sortable.position;
				}
			} else {

				// If it doesn't intersect with the sortable, and it intersected before,
				// we fake the drag stop of the sortable, but make sure it doesn't remove
				// the helper by using cancelHelperRemoval.
				if ( sortable.isOver ) {

					sortable.isOver = 0;
					sortable.cancelHelperRemoval = true;

					// Calling sortable's mouseStop would trigger a revert,
					// so revert must be temporarily false until after mouseStop is called.
					sortable.options._revert = sortable.options.revert;
					sortable.options.revert = false;

					sortable._trigger( "out", event, sortable._uiHash( sortable ) );
					sortable._mouseStop( event, true );

					// Restore sortable behaviors that were modfied
					// when the draggable entered the sortable area (#9481)
					sortable.options.revert = sortable.options._revert;
					sortable.options.helper = sortable.options._helper;

					if ( sortable.placeholder ) {
						sortable.placeholder.remove();
					}

					// Restore and recalculate the draggable's offset considering the sortable
					// may have modified them in unexpected ways. (#8809, #10669)
					ui.helper.appendTo( draggable._parent );
					draggable._refreshOffsets( event );
					ui.position = draggable._generatePosition( event, true );

					draggable._trigger( "fromSortable", event );

					// Inform draggable that the helper is no longer in a valid drop zone
					draggable.dropped = false;

					// Need to refreshPositions of all sortables just in case removing
					// from one sortable changes the location of other sortables (#9675)
					$.each( draggable.sortables, function() {
						this.refreshPositions();
					} );
				}
			}
		} );
	}
} );

$.ui.plugin.add( "draggable", "cursor", {
	start: function( event, ui, instance ) {
		var t = $( "body" ),
			o = instance.options;

		if ( t.css( "cursor" ) ) {
			o._cursor = t.css( "cursor" );
		}
		t.css( "cursor", o.cursor );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if ( o._cursor ) {
			$( "body" ).css( "cursor", o._cursor );
		}
	}
} );

$.ui.plugin.add( "draggable", "opacity", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;
		if ( t.css( "opacity" ) ) {
			o._opacity = t.css( "opacity" );
		}
		t.css( "opacity", o.opacity );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;
		if ( o._opacity ) {
			$( ui.helper ).css( "opacity", o._opacity );
		}
	}
} );

$.ui.plugin.add( "draggable", "scroll", {
	start: function( event, ui, i ) {
		if ( !i.scrollParentNotHidden ) {
			i.scrollParentNotHidden = i.helper.scrollParent( false );
		}

		if ( i.scrollParentNotHidden[ 0 ] !== i.document[ 0 ] &&
				i.scrollParentNotHidden[ 0 ].tagName !== "HTML" ) {
			i.overflowOffset = i.scrollParentNotHidden.offset();
		}
	},
	drag: function( event, ui, i  ) {

		var o = i.options,
			scrolled = false,
			scrollParent = i.scrollParentNotHidden[ 0 ],
			document = i.document[ 0 ];

		if ( scrollParent !== document && scrollParent.tagName !== "HTML" ) {
			if ( !o.axis || o.axis !== "x" ) {
				if ( ( i.overflowOffset.top + scrollParent.offsetHeight ) - event.pageY <
						o.scrollSensitivity ) {
					scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
				} else if ( event.pageY - i.overflowOffset.top < o.scrollSensitivity ) {
					scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
				}
			}

			if ( !o.axis || o.axis !== "y" ) {
				if ( ( i.overflowOffset.left + scrollParent.offsetWidth ) - event.pageX <
						o.scrollSensitivity ) {
					scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
				} else if ( event.pageX - i.overflowOffset.left < o.scrollSensitivity ) {
					scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
				}
			}

		} else {

			if ( !o.axis || o.axis !== "x" ) {
				if ( event.pageY - $( document ).scrollTop() < o.scrollSensitivity ) {
					scrolled = $( document ).scrollTop( $( document ).scrollTop() - o.scrollSpeed );
				} else if ( $( window ).height() - ( event.pageY - $( document ).scrollTop() ) <
						o.scrollSensitivity ) {
					scrolled = $( document ).scrollTop( $( document ).scrollTop() + o.scrollSpeed );
				}
			}

			if ( !o.axis || o.axis !== "y" ) {
				if ( event.pageX - $( document ).scrollLeft() < o.scrollSensitivity ) {
					scrolled = $( document ).scrollLeft(
						$( document ).scrollLeft() - o.scrollSpeed
					);
				} else if ( $( window ).width() - ( event.pageX - $( document ).scrollLeft() ) <
						o.scrollSensitivity ) {
					scrolled = $( document ).scrollLeft(
						$( document ).scrollLeft() + o.scrollSpeed
					);
				}
			}

		}

		if ( scrolled !== false && $.ui.ddmanager && !o.dropBehaviour ) {
			$.ui.ddmanager.prepareOffsets( i, event );
		}

	}
} );

$.ui.plugin.add( "draggable", "snap", {
	start: function( event, ui, i ) {

		var o = i.options;

		i.snapElements = [];

		$( o.snap.constructor !== String ? ( o.snap.items || ":data(ui-draggable)" ) : o.snap )
			.each( function() {
				var $t = $( this ),
					$o = $t.offset();
				if ( this !== i.element[ 0 ] ) {
					i.snapElements.push( {
						item: this,
						width: $t.outerWidth(), height: $t.outerHeight(),
						top: $o.top, left: $o.left
					} );
				}
			} );

	},
	drag: function( event, ui, inst ) {

		var ts, bs, ls, rs, l, r, t, b, i, first,
			o = inst.options,
			d = o.snapTolerance,
			x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
			y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

		for ( i = inst.snapElements.length - 1; i >= 0; i-- ) {

			l = inst.snapElements[ i ].left - inst.margins.left;
			r = l + inst.snapElements[ i ].width;
			t = inst.snapElements[ i ].top - inst.margins.top;
			b = t + inst.snapElements[ i ].height;

			if ( x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d ||
					!$.contains( inst.snapElements[ i ].item.ownerDocument,
					inst.snapElements[ i ].item ) ) {
				if ( inst.snapElements[ i ].snapping ) {
					( inst.options.snap.release &&
						inst.options.snap.release.call(
							inst.element,
							event,
							$.extend( inst._uiHash(), { snapItem: inst.snapElements[ i ].item } )
						) );
				}
				inst.snapElements[ i ].snapping = false;
				continue;
			}

			if ( o.snapMode !== "inner" ) {
				ts = Math.abs( t - y2 ) <= d;
				bs = Math.abs( b - y1 ) <= d;
				ls = Math.abs( l - x2 ) <= d;
				rs = Math.abs( r - x1 ) <= d;
				if ( ts ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: t - inst.helperProportions.height,
						left: 0
					} ).top;
				}
				if ( bs ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: b,
						left: 0
					} ).top;
				}
				if ( ls ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: l - inst.helperProportions.width
					} ).left;
				}
				if ( rs ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: r
					} ).left;
				}
			}

			first = ( ts || bs || ls || rs );

			if ( o.snapMode !== "outer" ) {
				ts = Math.abs( t - y1 ) <= d;
				bs = Math.abs( b - y2 ) <= d;
				ls = Math.abs( l - x1 ) <= d;
				rs = Math.abs( r - x2 ) <= d;
				if ( ts ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: t,
						left: 0
					} ).top;
				}
				if ( bs ) {
					ui.position.top = inst._convertPositionTo( "relative", {
						top: b - inst.helperProportions.height,
						left: 0
					} ).top;
				}
				if ( ls ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: l
					} ).left;
				}
				if ( rs ) {
					ui.position.left = inst._convertPositionTo( "relative", {
						top: 0,
						left: r - inst.helperProportions.width
					} ).left;
				}
			}

			if ( !inst.snapElements[ i ].snapping && ( ts || bs || ls || rs || first ) ) {
				( inst.options.snap.snap &&
					inst.options.snap.snap.call(
						inst.element,
						event,
						$.extend( inst._uiHash(), {
							snapItem: inst.snapElements[ i ].item
						} ) ) );
			}
			inst.snapElements[ i ].snapping = ( ts || bs || ls || rs || first );

		}

	}
} );

$.ui.plugin.add( "draggable", "stack", {
	start: function( event, ui, instance ) {
		var min,
			o = instance.options,
			group = $.makeArray( $( o.stack ) ).sort( function( a, b ) {
				return ( parseInt( $( a ).css( "zIndex" ), 10 ) || 0 ) -
					( parseInt( $( b ).css( "zIndex" ), 10 ) || 0 );
			} );

		if ( !group.length ) { return; }

		min = parseInt( $( group[ 0 ] ).css( "zIndex" ), 10 ) || 0;
		$( group ).each( function( i ) {
			$( this ).css( "zIndex", min + i );
		} );
		this.css( "zIndex", ( min + group.length ) );
	}
} );

$.ui.plugin.add( "draggable", "zIndex", {
	start: function( event, ui, instance ) {
		var t = $( ui.helper ),
			o = instance.options;

		if ( t.css( "zIndex" ) ) {
			o._zIndex = t.css( "zIndex" );
		}
		t.css( "zIndex", o.zIndex );
	},
	stop: function( event, ui, instance ) {
		var o = instance.options;

		if ( o._zIndex ) {
			$( ui.helper ).css( "zIndex", o._zIndex );
		}
	}
} );

return $.ui.draggable;

} ) );


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(52),
			__webpack_require__(1),
			__webpack_require__(10)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

var mouseHandled = false;
$( document ).on( "mouseup", function() {
	mouseHandled = false;
} );

return $.widget( "ui.mouse", {
	version: "1.12.1",
	options: {
		cancel: "input, textarea, button, select, option",
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var that = this;

		this.element
			.on( "mousedown." + this.widgetName, function( event ) {
				return that._mouseDown( event );
			} )
			.on( "click." + this.widgetName, function( event ) {
				if ( true === $.data( event.target, that.widgetName + ".preventClickEvent" ) ) {
					$.removeData( event.target, that.widgetName + ".preventClickEvent" );
					event.stopImmediatePropagation();
					return false;
				}
			} );

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.off( "." + this.widgetName );
		if ( this._mouseMoveDelegate ) {
			this.document
				.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
				.off( "mouseup." + this.widgetName, this._mouseUpDelegate );
		}
	},

	_mouseDown: function( event ) {

		// don't let more than one widget handle mouseStart
		if ( mouseHandled ) {
			return;
		}

		this._mouseMoved = false;

		// We may have missed mouseup (out of window)
		( this._mouseStarted && this._mouseUp( event ) );

		this._mouseDownEvent = event;

		var that = this,
			btnIsLeft = ( event.which === 1 ),

			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
				$( event.target ).closest( this.options.cancel ).length : false );
		if ( !btnIsLeft || elIsCancel || !this._mouseCapture( event ) ) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if ( !this.mouseDelayMet ) {
			this._mouseDelayTimer = setTimeout( function() {
				that.mouseDelayMet = true;
			}, this.options.delay );
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted = ( this._mouseStart( event ) !== false );
			if ( !this._mouseStarted ) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if ( true === $.data( event.target, this.widgetName + ".preventClickEvent" ) ) {
			$.removeData( event.target, this.widgetName + ".preventClickEvent" );
		}

		// These delegates are required to keep context
		this._mouseMoveDelegate = function( event ) {
			return that._mouseMove( event );
		};
		this._mouseUpDelegate = function( event ) {
			return that._mouseUp( event );
		};

		this.document
			.on( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.on( "mouseup." + this.widgetName, this._mouseUpDelegate );

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function( event ) {

		// Only check for mouseups outside the document if you've moved inside the document
		// at least once. This prevents the firing of mouseup in the case of IE<9, which will
		// fire a mousemove event if content is placed under the cursor. See #7778
		// Support: IE <9
		if ( this._mouseMoved ) {

			// IE mouseup check - mouseup happened when mouse was out of window
			if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
					!event.button ) {
				return this._mouseUp( event );

			// Iframe mouseup check - mouseup occurred in another document
			} else if ( !event.which ) {

				// Support: Safari <=8 - 9
				// Safari sets which to 0 if you press any of the following keys
				// during a drag (#14461)
				if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
						event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
					this.ignoreMissingWhich = true;
				} else if ( !this.ignoreMissingWhich ) {
					return this._mouseUp( event );
				}
			}
		}

		if ( event.which || event.button ) {
			this._mouseMoved = true;
		}

		if ( this._mouseStarted ) {
			this._mouseDrag( event );
			return event.preventDefault();
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted =
				( this._mouseStart( this._mouseDownEvent, event ) !== false );
			( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
		}

		return !this._mouseStarted;
	},

	_mouseUp: function( event ) {
		this.document
			.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.off( "mouseup." + this.widgetName, this._mouseUpDelegate );

		if ( this._mouseStarted ) {
			this._mouseStarted = false;

			if ( event.target === this._mouseDownEvent.target ) {
				$.data( event.target, this.widgetName + ".preventClickEvent", true );
			}

			this._mouseStop( event );
		}

		if ( this._mouseDelayTimer ) {
			clearTimeout( this._mouseDelayTimer );
			delete this._mouseDelayTimer;
		}

		this.ignoreMissingWhich = false;
		mouseHandled = false;
		event.preventDefault();
	},

	_mouseDistanceMet: function( event ) {
		return ( Math.max(
				Math.abs( this._mouseDownEvent.pageX - event.pageX ),
				Math.abs( this._mouseDownEvent.pageY - event.pageY )
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function( /* event */ ) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function( /* event */ ) {},
	_mouseDrag: function( /* event */ ) {},
	_mouseStop: function( /* event */ ) {},
	_mouseCapture: function( /* event */ ) { return true; }
} );

} ) );


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _resizable = __webpack_require__(56);

var _resizable2 = _interopRequireDefault(_resizable);

var _draggable = __webpack_require__(20);

var _draggable2 = _interopRequireDefault(_draggable);

var _View2 = __webpack_require__(4);

var _View3 = _interopRequireDefault(_View2);

var _AppController = __webpack_require__(24);

var _AppController2 = _interopRequireDefault(_AppController);

var _AppModel = __webpack_require__(25);

var _AppModel2 = _interopRequireDefault(_AppModel);

var _Constants = __webpack_require__(2);

var _BoardView = __webpack_require__(12);

var _BoardView2 = _interopRequireDefault(_BoardView);

var _Top_View = __webpack_require__(29);

var _Top_View2 = _interopRequireDefault(_Top_View);

var _Bottom_View = __webpack_require__(3);

var _Bottom_View2 = _interopRequireDefault(_Bottom_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppView = function (_View) {
    _inherits(AppView, _View);

    function AppView() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, AppView);

        var _this = _possibleConstructorReturn(this, (AppView.__proto__ || Object.getPrototypeOf(AppView)).call(this, {
            className: "main-app",
            active: true
        }));

        _this.bottomPanel = new _Bottom_View2.default({
            items: []
        });

        var boardView = new _BoardView2.default({
            name: "Board 1"
        });
        _this.controller = new _AppController2.default({
            currentBoard: boardView,
            model: new _AppModel2.default({
                id: "mainApp",
                boards: [].concat(boardView)
            })
        });
        _this._id = "main_board";

        _this.topPanel = new _Top_View2.default({
            items: _this.getTopItems(),
            head: "Board"
        });

        return _this;
    }

    // updateBottomPanel (items = []) {
    //     this.bottomPanel.items = items;
    //     this.bottomPanel.update();
    // }

    _createClass(AppView, [{
        key: 'render',
        value: function render(id) {
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            var main = (0, _jquery2.default)(_Constants.ELEMENT_DIV, {
                id: this._id
            });
            var targetElement = (0, _jquery2.default)("#" + id);
            var topPanel = this.topPanel.render();
            var bottomPanel = this.bottomPanel.render();
            var content = this.renderMainContent();
            var currentBoard = this.controller.getCurrentBoard();
            if (currentBoard != null) {
                (0, _jquery2.default)(content).append(currentBoard.render());
            }
            if (id != null) {
                (0, _jquery2.default)(main).append(topPanel, content, bottomPanel).appendTo(targetElement);
            } else {
                (0, _jquery2.default)(main).append(topPanel, content, bottomPanel).appendTo("body");
            }
            // resizable({}, $(main));
        }
    }, {
        key: 'topDrag',
        value: function topDrag() {
            var top = (0, _jquery2.default)(_Constants.ELEMENT_DIV, {
                "class": "topDrag"
            });
            var self = this;
            (0, _draggable2.default)({
                appendTo: self._id,
                containment: (0, _jquery2.default)('#' + self._id),
                helper: 'clone',
                drag: function drag(event, ui) {
                    (0, _jquery2.default)("#" + self._id).css({ left: ui.position.left, top: ui.position.top });
                }
            }, top);
            return top;
            // return top;
        }
    }, {
        key: 'getBottomItems',
        value: function getBottomItems() {
            var currentBoard = this.controller.getCurrentBoard();
            if (currentBoard != null) {
                return currentBoard.bottomItems;
            } else return null;
        }
    }, {
        key: 'getTopItems',
        value: function getTopItems() {
            var self = this;
            var boards = this.controller.model.getBoards();
            var items = boards.map(function (b) {
                return {
                    className: "board-item",
                    text: b.getName(),
                    active: b == self.controller.getCurrentBoard(),
                    child: {
                        text: "x",
                        className: "board-item_delete",
                        onClick: function onClick(e) {
                            e.preventDefault();
                            self.controller.deleteBoard(b, self.update.bind(self));
                            e.stopPropagation();
                        }
                    },
                    onClick: function onClick(e) {
                        e.preventDefault();
                        self.controller.setCurrentBoard(b, self.update.bind(self));
                    }
                };
            });
            if (boards.length < this.controller.model.getMaxBoards()) {
                items.push({
                    className: "board-item .add",
                    text: "+",
                    onClick: function onClick(e) {
                        e.preventDefault();
                        self.controller.addBoard(new _BoardView2.default({ name: "Board " + (boards.length + 1) }), self.update.bind(self));
                    },
                    child: null
                });
            }
            return items;
        }
    }, {
        key: 'renderMainContent',
        value: function renderMainContent() {
            var board = (0, _jquery2.default)(_Constants.ELEMENT_DIV, {
                "class": "main-board"
            });
            return board;
        }
    }, {
        key: 'update',
        value: function update(board) {
            var main = (0, _jquery2.default)("#" + this._id);
            // $(main).empty();
            this.topPanel.items = this.getTopItems();
            var topPanel = this.topPanel.update();
            var bottomPanel = this.bottomPanel.update();
            var content = null;
            if (board != null) {
                content = board.render();
            }

            // if (board != null) {
            //     const b = board.render();
            //     content.append(b);
            // }
            (0, _jquery2.default)(main).replaceWith((0, _jquery2.default)("<div></div>", {
                id: this._id
            }).append(topPanel, content, bottomPanel));
        }
    }]);

    return AppView;
}(_View3.default);

exports.default = AppView;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(7);

var _Controller3 = _interopRequireDefault(_Controller2);

var _Utils = __webpack_require__(6);

var _Utils2 = _interopRequireDefault(_Utils);

var _Notifications = __webpack_require__(11);

var _Notifications2 = _interopRequireDefault(_Notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppController = function (_Controller) {
    _inherits(AppController, _Controller);

    function AppController() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, AppController);

        var _this = _possibleConstructorReturn(this, (AppController.__proto__ || Object.getPrototypeOf(AppController)).call(this, props));

        _this._currentBoard = props.currentBoard;
        return _this;
    }

    _createClass(AppController, [{
        key: "getCurrentBoard",
        value: function getCurrentBoard() {
            return this._currentBoard;
        }
    }, {
        key: "setCurrentBoard",
        value: function setCurrentBoard(board, cb) {
            if (_Utils2.default.isBoard(board) && this._currentBoard != board) {
                var notify = _Notifications2.default.currentBoard(board);
                AppController.log(notify);
                this._currentBoard = board;
            } else if (board == null) {
                this._currentBoard = board;
            }
            cb(this._currentBoard);
        }
    }, {
        key: "addBoard",
        value: function addBoard(board, cb) {
            if (_Utils2.default.isBoard(board)) {
                var boards = this.model.getBoards();
                var max = this.model.getMaxBoards();
                if (boards.length < max) {
                    this.model.addBoard(board);
                    this.setCurrentBoard(board, cb);
                    AppController.log(_Notifications2.default.boardAdded(board));
                    return true;
                }
            }
            return false;
        }
    }, {
        key: "deleteBoard",
        value: function deleteBoard(board, cb) {
            if (_Utils2.default.isBoard(board)) {
                var del = this.model.deleteBoard(board);
                var boards = this.model.getBoards();
                if (del) {
                    if (boards.length > 0) {
                        if (board === this._currentBoard) {
                            this.setCurrentBoard(boards[boards.length - 1], cb);
                        }
                    } else {
                        this.setCurrentBoard(null, cb);
                    }
                    var notify = _Notifications2.default.boardDeleted(board);
                    AppController.log(notify);
                }
            }
        }
    }], [{
        key: "log",
        value: function log(string) {
            console.log("MainBoard: " + string);
        }
    }]);

    return AppController;
}(_Controller3.default);

exports.default = AppController;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(6);

var _Utils2 = _interopRequireDefault(_Utils);

var _Notifications = __webpack_require__(11);

var _Notifications2 = _interopRequireDefault(_Notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppModel = function () {
    function AppModel() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, AppModel);

        this._id = props.id;
        this._boards = props.boards || [];

        this.MAX_BOARDS = props.MAX_BOARDS || 3;
    }

    _createClass(AppModel, [{
        key: "getMaxBoards",
        value: function getMaxBoards() {
            return this.MAX_BOARDS;
        }
    }, {
        key: "addBoard",
        value: function addBoard(board) {
            this._boards.push(board);
        }
    }, {
        key: "deleteBoard",
        value: function deleteBoard(b) {
            var idx = this._boards.indexOf(b);
            if (idx != -1) {
                this._boards = this._boards.filter(function (el, i, arr) {
                    return i != idx;
                });
                return true;
            }
            return false;
        }
    }, {
        key: "getBoards",
        value: function getBoards() {
            return this._boards;
        }
    }, {
        key: "getId",
        value: function getId() {
            return this._id;
        }
    }]);

    return AppModel;
}();

exports.default = AppModel;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Controller2 = __webpack_require__(7);

var _Controller3 = _interopRequireDefault(_Controller2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoardController = function (_Controller) {
    _inherits(BoardController, _Controller);

    function BoardController() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, BoardController);

        var _this = _possibleConstructorReturn(this, (BoardController.__proto__ || Object.getPrototypeOf(BoardController)).call(this, props));

        _this.currentView = null;
        return _this;
    }

    _createClass(BoardController, [{
        key: "getCurrentView",
        value: function getCurrentView() {
            return this.currentView;
        }
    }, {
        key: "setCurrentView",
        value: function setCurrentView(type) {
            var t = this.model.getView(type);
            if (t != null) {
                this.currentView = t;
            }
            return this;
        }
    }]);

    return BoardController;
}(_Controller3.default);

exports.default = BoardController;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PaintView = __webpack_require__(30);

var _PaintView2 = _interopRequireDefault(_PaintView);

var _PDF_View = __webpack_require__(48);

var _PDF_View2 = _interopRequireDefault(_PDF_View);

var _VideoView = __webpack_require__(49);

var _VideoView2 = _interopRequireDefault(_VideoView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BoardModel = function () {
    function BoardModel() {
        var _views;

        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, BoardModel);

        var PAINT_VIEW = "Canvas";
        var PDF_VIEW = "PDF";
        var VIDEO_VIEW = "Video";
        this.name = props.name;
        this._id = props.id;
        this.views = (_views = {}, _defineProperty(_views, PAINT_VIEW, new _PaintView2.default({ elementId: "content", tools: ["brush", "shapes", "background", "erase", "select"] })), _defineProperty(_views, PDF_VIEW, new _PDF_View2.default({ id: "canvas", tools: ["brush"] })), _defineProperty(_views, VIDEO_VIEW, new _VideoView2.default({ id: "content" })), _views);
    }

    _createClass(BoardModel, [{
        key: "getName",
        value: function getName() {
            return this.name;
        }
    }, {
        key: "setName",
        value: function setName(n) {
            this.name = n;
            return this;
        }
    }, {
        key: "getId",
        value: function getId() {
            return this._id;
        }
    }, {
        key: "getView",
        value: function getView(type) {
            var view = this.views[type];
            if (view != null) {
                return view;
            } else {
                return null;
            }
        }
    }]);

    return BoardModel;
}();

exports.default = BoardModel;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas_Context = function () {
    function Canvas_Context() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Canvas_Context);

        this.context = props.context;
        this.width = props.width;
        this.height = props.height;
        this.strokeStyle = props.strokeStyle || "#333221";
        this.lineWidth = props.lineWidth || 1;
        this.fillStyle = props.fillStyle || "#224455";
        this.shadowBlur = props.shadowBlur || 0;
        this.shadowColor = props.shadowColor;
        this.globalAlpha = props.globalAlpha || 1;
        // this.scale = props.scale || 1;
        this.lineCap = props.lineCap || "round";
        this.globalComposition = "source-over";

        this.backgroundImage = null;
        this.backgroundColor = null;
        this.fillShape = false;

        this.mergeValueWithContext();
    }

    _createClass(Canvas_Context, [{
        key: "update",
        value: function update(_ref) {
            var type = _ref.type,
                value = _ref.value;

            this[type] = value;
            if (Canvas_Context._except(type)) {
                var c = this.getContext();
                c[type] = this[type];
            }
            console.log("CONTEXT, new value: ", type, value);
        }
    }, {
        key: "mergeValueWithContext",
        value: function mergeValueWithContext() {
            Object.assign(this.context, {
                strokeStyle: this.strokeStyle,
                lineWidth: this.lineWidth,
                fillStyle: this.fillStyle,
                shadowBlur: this.shadowBlur,
                shadowColor: this.shadowColor,
                globalAlpha: this.globalAlpha,
                lineCap: this.lineCap,
                globalComposition: this.globalComposition
                // scale: this.scale
            });
        }
    }, {
        key: "clearContext",
        value: function clearContext() {
            this.context.clearRect(0, 0, this.width, this.height);
            if (this.backgroundImage == null && this.backgroundColor != null) {
                this.context.save();
                this.context.fillStyle = this.backgroundColor;
                this.context.fillRect(0, 0, this.width, this.height);
                this.context.globalAlpha = 1;
                this.context.restore();
            }
            if (this.backgroundImage != null && this.backgroundColor == null) {
                this.context.save();
                if (this.backgroundImage.data != null) {
                    this.context.putImageData(this.backgroundImage, 0, 0);
                } else {
                    if (this.backgroundImage.src != null) {
                        this.context.drawImage(this.backgroundImage, 0, 0);
                    } else {
                        var img = new Image();
                        img.src = this.backgroundImage;
                        this.context.drawImage(img, 0, 0);
                    }
                }
                this.context.globalAlpha = 1;
                this.context.restore();
            }
        }
    }, {
        key: "getContext",
        value: function getContext() {
            return this.context;
        }
    }], [{
        key: "_except",
        value: function _except(type) {
            return type != "fillShape";
        }
    }]);

    return Canvas_Context;
}();

exports.default = Canvas_Context;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _View2 = __webpack_require__(4);

var _View3 = _interopRequireDefault(_View2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Top_View = function (_View) {
    _inherits(Top_View, _View);

    function Top_View() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Top_View);

        var _this = _possibleConstructorReturn(this, (Top_View.__proto__ || Object.getPrototypeOf(Top_View)).call(this, { className: "top-panel", active: true }));

        var head = props.head,
            items = props.items;

        _this.head = head;
        _this.items = items;
        return _this;
    }

    _createClass(Top_View, [{
        key: "renderHeader",
        value: function renderHeader() {
            return (0, _jquery2.default)("<h3></h3>", {
                "class": "top-panel_head",
                text: "Board"
            });
        }
    }, {
        key: "renderListItem",
        value: function renderListItem(_ref) {
            var className = _ref.className,
                text = _ref.text,
                onClick = _ref.onClick,
                child = _ref.child,
                active = _ref.active;

            var i = (0, _jquery2.default)("<li></li>", {
                "class": className,
                "text": text
            }).on("click", onClick);
            if (child != null) {
                i.append((0, _jquery2.default)("<span></span>", {
                    text: child.text,
                    "class": child.className
                }).on("click", child.onClick));
            }
            if (active) {
                i.addClass("active");
            }
            return i;
        }
    }, {
        key: "renderTopList",
        value: function renderTopList() {
            var _this2 = this;

            return (0, _jquery2.default)("<ul></ul>", {
                "class": "top-panel_list"
            }).append(this.items.map(function (it) {
                return _this2.renderListItem(it);
            }));
        }
    }, {
        key: "update",
        value: function update() {
            var wrapper = (0, _jquery2.default)("." + this.className);
            wrapper.empty();
            return wrapper.append(this.renderHeader(), this.renderTopList());
        }
    }, {
        key: "render",
        value: function render() {
            var wrapper = this.renderWrapper();
            var items = this.renderTopList();
            var header = this.renderHeader();
            return wrapper.append(header, items);
        }
    }]);

    return Top_View;
}(_View3.default);

exports.default = Top_View;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _PaintController = __webpack_require__(14);

var _PaintController2 = _interopRequireDefault(_PaintController);

var _PaintState = __webpack_require__(15);

var _PaintState2 = _interopRequireDefault(_PaintState);

var _Canvas_View2 = __webpack_require__(13);

var _Canvas_View3 = _interopRequireDefault(_Canvas_View2);

var _Bottom_View = __webpack_require__(3);

var _Bottom_View2 = _interopRequireDefault(_Bottom_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaintView = function (_Canvas_View) {
    _inherits(PaintView, _Canvas_View);

    function PaintView() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, PaintView);

        var _this = _possibleConstructorReturn(this, (PaintView.__proto__ || Object.getPrototypeOf(PaintView)).call(this, {
            controller: _PaintController2.default,
            modelConstructor: _PaintState2.default,
            className: "paint-view",
            active: props.active,
            showTools: true
        }));

        var elementId = props.elementId,
            tools = props.tools;

        _this._element = elementId;
        _this.currentTool = null;
        var self = _this;
        _this.controlsItems = [{
            type: "link",
            label: "download",
            onClick: function onClick(e) {
                var dt = _this.canvas.toDataURL("image/png");
                dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
                dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
                e.target.href = dt;
            }
        }, {
            type: "button",
            label: "toggle",
            onClick: function onClick(e) {
                e.preventDefault();
                self.showTools = !self.showTools;
                self.update();
            }
        }];
        _this._bottomControls = {
            items: _this.controlsItems || [],
            optionItems: []
        };
        _this.bottomControl = new _Bottom_View2.default(_this._bottomControls);

        // this.controls = new Bottom_View({
        //     items: this.controlsItems
        // });
        return _this;
    }
    /**
     *
     * @param name
     * @param value
     */


    _createClass(PaintView, [{
        key: "handleSelectTool",
        value: function handleSelectTool(toolName) {
            this.controller.setSelectTool(toolName);
        }
    }, {
        key: "updateBottomControls",
        value: function updateBottomControls() {
            this.bottomControl.update();
        }

        /**
         *
         * @returns {jQuery|HTMLElement}
         */

    }, {
        key: "render",
        value: function render() {
            this.bottomControl.update();
            var div = (0, _jquery2.default)("<div></div>", {
                "class": "paint"
            }).append(this.renderCanvasView());
            this.element = div;
            return div;
        }
    }]);

    return PaintView;
}(_Canvas_View3.default);

exports.default = PaintView;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PaintObject = __webpack_require__(8);

var _PaintObject2 = _interopRequireDefault(_PaintObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShapesHolder = function () {
    function ShapesHolder() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ShapesHolder);

        var shapes = props.shapes;

        this.shapes = shapes || [];

        this.MAX_SIZE_HISTORY = 10;
        this._history = [];
    }

    _createClass(ShapesHolder, [{
        key: "addShape",
        value: function addShape(shape) {
            if (ShapesHolder._check(shape)) {
                this.shapes.push(shape);
                if (this._history.length < this.MAX_SIZE_HISTORY) {
                    this._history.push(shape);
                } else {
                    this._history.shift();
                    this._history.push(shape);
                }
            } else {
                console.log("SHAPE is not instance of PAINT_OBJECT");
            }
        }
    }, {
        key: "pop",
        value: function pop() {
            this.shapes.pop();
        }
    }, {
        key: "historyPop",
        value: function historyPop() {
            this._history.pop();
            this.shapes.pop();
        }
    }, {
        key: "getShape",
        value: function getShape(sh) {
            if (ShapesHolder._check(sh)) {
                var index = this.shapes.indexOf(sh);
                return index != -1 ? index : -1;
            } else {
                return -1;
            }
        }
    }, {
        key: "getShapeFromPosition",
        value: function getShapeFromPosition(_ref) {
            var x = _ref.x,
                y = _ref.y;

            if (this.shapes.length > 0) {
                var filtered = this.shapes.filter(function (sh) {
                    return sh.contains({ x: x, y: y }) || !sh.contains({ x: x, y: y }) && sh.getSelecedBoundedBox != null && sh.getSelecedBoundedBox({ x: x, y: y }) != null;
                });
                if (filtered.length > 0) {
                    // if filtered > 1, get last
                    return filtered[filtered.length - 1];
                } else {
                    console.log("SOMETHING wrong in getShapeFromPosition !!");
                }
            } else {
                return null;
            }
        }
    }], [{
        key: "_check",
        value: function _check(sh) {
            return !!(sh != null && sh instanceof _PaintObject2.default);
        }
    }]);

    return ShapesHolder;
}();

exports.default = ShapesHolder;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EraseControl = exports.SelectControl = exports.BrushControl = exports.ShapeControl = exports.BackgroundControl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(6);

var _Utils2 = _interopRequireDefault(_Utils);

var _Brush = __webpack_require__(34);

var _Brush2 = _interopRequireDefault(_Brush);

var _Pencil = __webpack_require__(36);

var _Pencil2 = _interopRequireDefault(_Pencil);

var _Rectangle = __webpack_require__(37);

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _Ellipsis = __webpack_require__(35);

var _Ellipsis2 = _interopRequireDefault(_Ellipsis);

var _Triangle = __webpack_require__(38);

var _Triangle2 = _interopRequireDefault(_Triangle);

var _Constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Control = function Control(_ref) {
    var type = _ref.type,
        model = _ref.model,
        tool = _ref.tool;

    _classCallCheck(this, Control);

    this.type = type;
    this.state = model;
    this.tool = tool;
};

var BackgroundControl = exports.BackgroundControl = function (_Control) {
    _inherits(BackgroundControl, _Control);

    function BackgroundControl() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, BackgroundControl);

        var _this = _possibleConstructorReturn(this, (BackgroundControl.__proto__ || Object.getPrototypeOf(BackgroundControl)).call(this, props));

        _this.listenersOn = false;
        _this.scale = null;
        _this.backgroundColor = props.backgroundColor;
        _this.upload = props.upload;
        return _this;
    }

    _createClass(BackgroundControl, [{
        key: "getBackgroundColor",
        value: function getBackgroundColor() {
            return this.backgroundColor;
        }
    }, {
        key: "getImage",
        value: function getImage() {
            return this.image;
        }
    }, {
        key: "setImage",
        value: function setImage(image) {
            this.image = image;
            return this;
        }
    }, {
        key: "update",
        value: function update(data) {
            switch (data.type) {
                case "backgroundColor":
                    this.backgroundColor = data.value;
                    this.state.setBackgroundColor(this.backgroundColor);
                    break;
                case "scale":
                    this.scale = data.value;
                    this.state.setScale(this.scale);
                    break;
                case "upload":
                    this.setImage(data.value);
                    this.upload = data.value;
                    this.state.setUpload(this.upload);
                    break;
            }
        }
    }]);

    return BackgroundControl;
}(Control);

var ShapeControl = exports.ShapeControl = function (_Control2) {
    _inherits(ShapeControl, _Control2);

    function ShapeControl() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ShapeControl);

        var _this2 = _possibleConstructorReturn(this, (ShapeControl.__proto__ || Object.getPrototypeOf(ShapeControl)).call(this, props));

        _this2.listenersOn = true;

        _this2.temp = null;

        _this2.isDown = false;
        return _this2;
    }

    _createClass(ShapeControl, [{
        key: "onMouseDown",
        value: function onMouseDown(_ref2) {
            var x = _ref2.x,
                y = _ref2.y;

            var type = _Utils2.default.firstCharTOUpperCase(this.tool.getSelected());
            var context = this.state.getContext();
            switch (type) {
                case "Rectangle":
                    this.temp = new _Rectangle2.default({
                        ctx: context,
                        strokeStyle: context.strokeStyle,
                        lineWidth: context.lineWidth,
                        globalAlpha: context.globalAlpha,
                        shadowBlur: context.shadowBlur,
                        shadowColor: context.shadowColor,
                        fillStyle: context.fillStyle,
                        fill: this.state.context.fillShape
                    });
                    break;
                case "Circle":
                    this.temp = new _Ellipsis2.default({
                        ctx: context,
                        strokeStyle: context.strokeStyle,
                        lineWidth: context.lineWidth,
                        globalAlpha: context.globalAlpha,
                        shadowBlur: context.shadowBlur,
                        shadowColor: context.shadowColor,
                        fillStyle: context.fillStyle,
                        fill: this.state.context.fillShape
                    });
                    break;
                case "Triangle":
                    this.temp = new _Triangle2.default({
                        ctx: context,
                        strokeStyle: context.strokeStyle,
                        lineWidth: context.lineWidth,
                        globalAlpha: context.globalAlpha,
                        shadowBlur: context.shadowBlur,
                        shadowColor: context.shadowColor,
                        fillStyle: context.fillStyle,
                        fill: this.state.context.fillShape
                    });
                    break;
            }
            this.isDown = true;
            console.log(this.tool);
            this.temp.setX(x).setY(y).setW(0).setH(0);
            this.state.holder.addShape(this.temp);
        }
    }, {
        key: "onMouseUp",
        value: function onMouseUp(_ref3) {
            var x = _ref3.x,
                y = _ref3.y;

            this.isDown = false;
            if (this.temp.w <= 1 && this.temp.h <= 1) {
                this.state.holder.pop();
            }
            this.temp.setW(x - this.temp.x).setH(y - this.temp.y);
            this.state.draw();
            this.temp = null;
        }
    }, {
        key: "onMouseMove",
        value: function onMouseMove(_ref4) {
            var x = _ref4.x,
                y = _ref4.y;

            if (this.isDown) {
                this.temp.setW(x - this.temp.x).setH(y - this.temp.y);
                this.state.draw();
            }
        }
    }, {
        key: "update",
        value: function update(data) {

            this.state.updateContext(data);
        }
    }]);

    return ShapeControl;
}(Control);

var BrushControl = exports.BrushControl = function (_Control3) {
    _inherits(BrushControl, _Control3);

    function BrushControl() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, BrushControl);

        var _this3 = _possibleConstructorReturn(this, (BrushControl.__proto__ || Object.getPrototypeOf(BrushControl)).call(this, props));

        _this3.listenersOn = true;

        _this3.temp = null;

        _this3.isDown = false;
        return _this3;
    }

    _createClass(BrushControl, [{
        key: "onMouseDown",
        value: function onMouseDown(_ref5) {
            var x = _ref5.x,
                y = _ref5.y;

            var context = this.state.getContext();
            var type = _Utils2.default.firstCharTOUpperCase(this.tool.getSelected());
            switch (type) {
                case "Pencil":
                    this.temp = new _Pencil2.default({
                        ctx: context,
                        strokeStyle: context.strokeStyle,
                        lineWidth: context.lineWidth,
                        globalAlpha: context.globalAlpha,
                        shadowBlur: null,
                        shadowColor: null
                    });
                    break;
                case "Brush":
                    this.temp = new _Brush2.default({
                        ctx: context,
                        strokeStyle: context.strokeStyle,
                        lineWidth: context.lineWidth,
                        globalAlpha: context.globalAlpha,
                        shadowBlur: context.shadowBlur,
                        shadowColor: context.shadowColor
                    });
                    break;
            }
            this.isDown = true;
            console.log(this.tool);
            this.temp.setX(x).setY(y);
            this.state.holder.addShape(this.temp);
        }
    }, {
        key: "onMouseUp",
        value: function onMouseUp(_ref6) {
            var x = _ref6.x,
                y = _ref6.y;

            this.isDown = false;
            if (this.temp != null) {
                if (this.temp != null && this.temp.paths.length < 2) {
                    this.state.holder.pop();
                }
                this.temp.addPath({ x: x, y: y });
                this.state.draw();
            }
            this.temp = null;
        }
    }, {
        key: "onMouseMove",
        value: function onMouseMove(_ref7) {
            var x = _ref7.x,
                y = _ref7.y;

            if (this.isDown) {
                this.temp.addPath({ x: x, y: y });
                this.state.draw();
            }
        }
    }, {
        key: "update",
        value: function update(data) {
            this.state.updateContext(data);
        }
    }]);

    return BrushControl;
}(Control);

var SelectControl = exports.SelectControl = function (_Control4) {
    _inherits(SelectControl, _Control4);

    function SelectControl() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, SelectControl);

        var _this4 = _possibleConstructorReturn(this, (SelectControl.__proto__ || Object.getPrototypeOf(SelectControl)).call(this, props));

        _this4.listenersOn = true;
        _this4.canvas = props.canvas;
        _this4.temp = null;
        _this4.selectedBoundBox = null;
        _this4.isDown = false;
        _this4.isResizing = false;
        _this4.isDragging = false;
        _this4.startPositions = {};
        return _this4;
    }

    _createClass(SelectControl, [{
        key: "onMouseDown",
        value: function onMouseDown(_ref8) {
            var x = _ref8.x,
                y = _ref8.y;

            var selected = this.state.holder.getShapeFromPosition({ x: x, y: y });
            this.startPositions.x = x;
            this.startPositions.y = y;
            this.isDown = true;
            if (selected != null) {
                this.state.selected = selected;
                this.state.draw();
                console.log(selected);
            } else {
                this.state.selected = null;
                this.state.draw();
            }

            var selected2 = this.state.selected;
            var selecedBoundedBox = selected2 != null && selected2.getSelecedBoundedBox({ x: x, y: y }) != null;
            if (selecedBoundedBox) {
                this.isResizing = true;
            } else if (!selecedBoundedBox) {
                this.isDragging = true;
                this.isResizing = false;
            }
        }
    }, {
        key: "onMouseUp",
        value: function onMouseUp(_ref9) {
            var x = _ref9.x,
                y = _ref9.y;

            this.isDown = false;
            this.isDragging = false;
            this.isResizing = false;
        }
    }, {
        key: "onMouseMove",
        value: function onMouseMove(_ref10) {
            var x = _ref10.x,
                y = _ref10.y;

            if (this.state.selected != null) {
                this._getCursor({ x: x, y: y });
                if (this.selectedBoundBox != -1 && this.isResizing) {
                    switch (this.selectedBoundBox) {
                        case 0:
                            //topLeft
                            this.state.selected.setW(this.state.selected.x + this.state.selected.w - x);
                            this.state.selected.setH(this.state.selected.y + this.state.selected.h - y);
                            this.state.selected.setX(x);
                            this.state.selected.setY(y);

                            break;
                        case 1:
                            //topRight
                            this.state.selected.setW(x - this.state.selected.x);
                            this.state.selected.setH(this.state.selected.y + this.state.selected.h - y);
                            this.state.selected.setY(y);

                            break;
                        case 2:
                            // bottomLeft
                            this.state.selected.setW(this.state.selected.x + this.state.selected.w - x);
                            this.state.selected.setH(y - this.state.selected.y);
                            this.state.selected.setX(x);

                            break;
                        case 3:
                            //bottomRight
                            this.state.selected.setW(x - this.state.selected.x);
                            this.state.selected.setH(y - this.state.selected.y);
                            break;
                    }
                } else if (this.isDragging) {
                    var dx = x - this.startPositions.x;
                    var dy = y - this.startPositions.y;
                    this.state.selected.setX(this.state.selected.x + dx).setY(this.state.selected.y + dy);
                    this.startPositions.x = x;
                    this.startPositions.y = y;
                }
                this.state.draw();
            }
        }
    }, {
        key: "_getCursor",
        value: function _getCursor(pos) {
            var _this5 = this;

            var cursor = null;
            this.state.selected.boundBoxes.forEach(function (box, i) {
                var overBox = box.contains(pos);
                if (overBox) {
                    switch (i) {
                        case 0:
                            //topLeft
                            cursor = _Constants.CURSOR_TOP_LEFT;
                            break;
                        case 1:
                            //topRight
                            cursor = _Constants.CURSOR_TOP_RIGHT;
                            break;
                        case 2:
                            // bottomLeft
                            cursor = _Constants.CURSOR_BOTTOM_LEFT;
                            break;
                        case 3:
                            //bottomRight
                            cursor = _Constants.CURSOR_BOTTOM_RIGHT;
                            break;
                    }
                    if (_this5.isDown && cursor != null && !_this5.isDragging) {
                        _this5.selectedBoundBox = i;
                        console.log(_this5.selectedBoundBox);
                    }
                }
            });

            this.canvas.style.cursor = cursor || _Constants.CURSOR_DEFAULT;
        }
    }, {
        key: "update",
        value: function update(data) {
            this.state.updateContext(data);
        }
    }]);

    return SelectControl;
}(Control);

var EraseControl = exports.EraseControl = function (_Control5) {
    _inherits(EraseControl, _Control5);

    function EraseControl() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, EraseControl);

        var _this6 = _possibleConstructorReturn(this, (EraseControl.__proto__ || Object.getPrototypeOf(EraseControl)).call(this, props));

        _this6.listenersOn = true;

        _this6.temp = null;

        _this6.isDown = false;
        return _this6;
    }

    _createClass(EraseControl, [{
        key: "onMouseDown",
        value: function onMouseDown(_ref11) {
            var x = _ref11.x,
                y = _ref11.y;

            var context = this.state.getContext();
            var type = _Utils2.default.firstCharTOUpperCase(this.tool.getSelected());
            this.temp = new _Brush2.default({
                ctx: context,
                strokeStyle: "#ffffff",
                lineWidth: context.lineWidth,
                globalAlpha: 1,
                shadowBlur: null,
                shadowColor: null
            });
            this.isDown = true;
            console.log(this.tool);
            this.temp.setX(x).setY(y);
            this.state.holder.addShape(this.temp);
        }
    }, {
        key: "onMouseUp",
        value: function onMouseUp(_ref12) {
            var x = _ref12.x,
                y = _ref12.y;

            this.isDown = false;
            if (this.temp.paths.length < 2) {
                this.state.holder.pop();
            }
            this.temp.addPath({ x: x, y: y });
            this.state.draw();
            this.temp = null;
        }
    }, {
        key: "onMouseMove",
        value: function onMouseMove(_ref13) {
            var x = _ref13.x,
                y = _ref13.y;

            if (this.isDown) {
                this.temp.addPath({ x: x, y: y });
                this.state.draw();
            }
        }
    }, {
        key: "update",
        value: function update(data) {
            this.state.updateContext(data);
        }
    }]);

    return EraseControl;
}(Control);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import Recangle from "./Rectangle";

var BoundBox = function () {
    function BoundBox(_ref) {
        var x = _ref.x,
            y = _ref.y,
            ctx = _ref.ctx;

        _classCallCheck(this, BoundBox);

        this.h = 6;
        this.w = 6;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.strokeStyle = "#5a5a5a";
        this.lineWidth = 6;
    }

    _createClass(BoundBox, [{
        key: "draw",
        value: function draw() {
            this.ctx.strokeStyle = this.strokeStyle;
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.strokeRect(this.x, this.y, this.w, this.h);
        }
    }, {
        key: "contains",
        value: function contains(pos) {
            var x = pos.x,
                y = pos.y;

            return this.x <= x && this.x + this.w >= x && this.y <= y && this.y + this.h >= y;
        }
    }]);

    return BoundBox;
}();

exports.default = BoundBox;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path2 = __webpack_require__(16);

var _Path3 = _interopRequireDefault(_Path2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Brush = function (_Path) {
    _inherits(Brush, _Path);

    function Brush(props) {
        _classCallCheck(this, Brush);

        return _possibleConstructorReturn(this, (Brush.__proto__ || Object.getPrototypeOf(Brush)).call(this, props));
    }

    _createClass(Brush, [{
        key: 'draw',
        value: function draw() {

            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.strokeStyle;
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.globalAlpha = this.globalAlpha;
            this.ctx.shadowBlur = this.shadowBlur;
            this.ctx.shadowColor = this.shadowColor;
            this.ctx.lineJoin = this.ctx.lineCap = 'round';
            this.ctx.shadowBlur = this.shadowBlur;
            this.ctx.shadowColor = this.strokeStyle;
            this.ctx.moveTo(this.x, this.y);
            this.ctx.globalCompositeOperation = 'source-over';

            for (var i = 0; i < this.paths.length; i += 2) {
                this.ctx.lineTo(this.paths[i], this.paths[i + 1]);
            }
            this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.restore();
        }
    }, {
        key: 'contains',
        value: function contains() {
            return false;
        }
    }]);

    return Brush;
}(_Path3.default);

exports.default = Brush;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Shape2 = __webpack_require__(9);

var _Shape3 = _interopRequireDefault(_Shape2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ellipsis = function (_Shape) {
    _inherits(Ellipsis, _Shape);

    function Ellipsis(_ref) {
        var x = _ref.x,
            y = _ref.y,
            w = _ref.w,
            h = _ref.h,
            ctx = _ref.ctx,
            strokeStyle = _ref.strokeStyle,
            lineWidth = _ref.lineWidth,
            fillStyle = _ref.fillStyle,
            globalAlpha = _ref.globalAlpha,
            shadowBlur = _ref.shadowBlur,
            shadowColor = _ref.shadowColor,
            fill = _ref.fill;

        _classCallCheck(this, Ellipsis);

        var _this = _possibleConstructorReturn(this, (Ellipsis.__proto__ || Object.getPrototypeOf(Ellipsis)).call(this, { x: x, y: y, w: w, h: h, ctx: ctx, strokeStyle: strokeStyle, lineWidth: lineWidth, fillStyle: fillStyle, globalAlpha: globalAlpha, shadowBlur: shadowBlur, shadowColor: shadowColor, fill: fill }));

        _this.isBounded = false;
        return _this;
    }

    _createClass(Ellipsis, [{
        key: "draw",
        value: function draw() {
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.strokeStyle = this.strokeStyle;
            this.ctx.globalAlpha = this.globalAlpha;
            this.ctx.fillStyle = this.fillStyle;
            this.ctx.shadowBlur = this.shadowBlur;
            this.ctx.shadowColor = this.shadowColor;
            this.ctx.beginPath();
            this.ctx.arc(this.x + Math.abs(this.w / 2), this.y + Math.abs(this.h / 2), Math.abs(this.w / 2), 0, 2 * Math.PI, false);
            if (this.fill) {
                this.ctx.fill();
            } else {
                this.ctx.stroke();
            }
            this.ctx.closePath();
            if (this.isBounded) {
                this.boundBoxes = [];
                this.getBoundBox();
                this.drawBoundBox();
            }
        }
    }, {
        key: "contains",
        value: function contains(pos) {
            var x = pos.x,
                y = pos.y;

            var dx = x - (this.x + Math.abs(this.w / 2)),
                dy = y - (this.y + Math.abs(this.w / 2)),
                dist = Math.abs(Math.sqrt(dx * dx + dy * dy));
            return dist <= this.w / 2;
        }
    }]);

    return Ellipsis;
}(_Shape3.default);

exports.default = Ellipsis;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path2 = __webpack_require__(16);

var _Path3 = _interopRequireDefault(_Path2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pencil = function (_Path) {
    _inherits(Pencil, _Path);

    function Pencil(props) {
        _classCallCheck(this, Pencil);

        return _possibleConstructorReturn(this, (Pencil.__proto__ || Object.getPrototypeOf(Pencil)).call(this, props));
    }

    _createClass(Pencil, [{
        key: "draw",
        value: function draw() {
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.strokeStyle;
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.globalAlpha = this.globalAlpha;
            this.ctx.shadowBlur = null;
            this.ctx.shadowColor = null;
            this.ctx.moveTo(this.x, this.y);
            this.ctx.globalCompositeOperation = 'source-over';

            for (var i = 0; i < this.paths.length; i += 2) {
                this.ctx.lineTo(this.paths[i], this.paths[i + 1]);
            }
            this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.restore();
        }
    }, {
        key: "contains",
        value: function contains() {
            return false;
        }
    }]);

    return Pencil;
}(_Path3.default);

exports.default = Pencil;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Shape2 = __webpack_require__(9);

var _Shape3 = _interopRequireDefault(_Shape2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rectangle = function (_Shape) {
    _inherits(Rectangle, _Shape);

    function Rectangle(_ref) {
        var x = _ref.x,
            y = _ref.y,
            w = _ref.w,
            h = _ref.h,
            ctx = _ref.ctx,
            strokeStyle = _ref.strokeStyle,
            lineWidth = _ref.lineWidth,
            fillStyle = _ref.fillStyle,
            globalAlpha = _ref.globalAlpha,
            shadowBlur = _ref.shadowBlur,
            shadowColor = _ref.shadowColor,
            fill = _ref.fill;

        _classCallCheck(this, Rectangle);

        var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, { x: x, y: y, w: w, h: h, ctx: ctx, strokeStyle: strokeStyle, lineWidth: lineWidth, fillStyle: fillStyle, globalAlpha: globalAlpha, shadowBlur: shadowBlur, shadowColor: shadowColor, fill: fill }));

        _this.isBounded = false;
        return _this;
    }

    _createClass(Rectangle, [{
        key: "draw",
        value: function draw() {
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.strokeStyle = this.strokeStyle;
            this.ctx.globalAlpha = this.globalAlpha;
            this.ctx.fillStyle = this.fillStyle;
            this.ctx.shadowBlur = this.shadowBlur;
            this.ctx.shadowColor = this.shadowColor;
            this.ctx.beginPath();
            if (this.fill) {
                this.ctx.fillRect(this.x, this.y, this.w, this.h);
            } else {
                this.ctx.strokeRect(this.x, this.y, this.w, this.h);
            }
            this.ctx.closePath();
            if (this.isBounded) {
                this.boundBoxes = [];
                this.getBoundBox();
                this.drawBoundBox();
            }
        }
    }, {
        key: "contains",
        value: function contains(pos) {
            var x = pos.x,
                y = pos.y;

            return this.x <= x && this.x + this.w >= x && this.y <= y && this.y + this.h >= y;
        }
    }]);

    return Rectangle;
}(_Shape3.default);

exports.default = Rectangle;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Shape2 = __webpack_require__(9);

var _Shape3 = _interopRequireDefault(_Shape2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Triangle = function (_Shape) {
    _inherits(Triangle, _Shape);

    function Triangle(_ref) {
        var x = _ref.x,
            y = _ref.y,
            w = _ref.w,
            h = _ref.h,
            ctx = _ref.ctx,
            strokeStyle = _ref.strokeStyle,
            lineWidth = _ref.lineWidth,
            fillStyle = _ref.fillStyle,
            globalAlpha = _ref.globalAlpha,
            shadowBlur = _ref.shadowBlur,
            shadowColor = _ref.shadowColor,
            fill = _ref.fill;

        _classCallCheck(this, Triangle);

        var _this = _possibleConstructorReturn(this, (Triangle.__proto__ || Object.getPrototypeOf(Triangle)).call(this, { x: x, y: y, w: w, h: h, ctx: ctx, strokeStyle: strokeStyle, lineWidth: lineWidth, fillStyle: fillStyle, globalAlpha: globalAlpha, shadowBlur: shadowBlur, shadowColor: shadowColor, fill: fill }));

        _this.isBounded = false;
        _this.sides = 3;
        _this.pathes = _this.getPath();
        return _this;
    }

    _createClass(Triangle, [{
        key: "getPath",
        value: function getPath() {
            var arr = [];
            arr.push([this.x + this.w, this.y]);
            arr.push([this.x + this.w / 2, this.y + this.h]);
            arr.push([this.x, this.y]);
            return arr;
        }
    }, {
        key: "draw",
        value: function draw() {
            this.pathes = this.getPath();
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.strokeStyle = this.strokeStyle;
            this.ctx.globalAlpha = this.globalAlpha;
            this.ctx.fillStyle = this.fillStyle;
            this.ctx.shadowBlur = this.shadowBlur;
            this.ctx.shadowColor = this.shadowColor;
            this.ctx.beginPath();
            this.ctx.moveTo(this.x, this.y);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.pathes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    this.ctx.lineTo(i[0], i[1]);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.ctx.closePath();
            if (this.fill) {
                this.ctx.fill();
            } else {
                this.ctx.stroke();
            }

            if (this.isBounded) {
                this.boundBoxes = [];
                this.getBoundBox();
                this.drawBoundBox();
            }
        }
    }, {
        key: "contains",
        value: function contains(_ref2) {
            var x = _ref2.x,
                y = _ref2.y;

            return pnpoly(3, this.pathes.map(function (p) {
                return p[0];
            }), this.pathes.map(function (p) {
                return p[1];
            }), x, y);
        }
    }]);

    return Triangle;
}(_Shape3.default);

function pnpoly(nvert, vertx, verty, testx, testy) {
    var i,
        j,
        c = false;
    for (i = 0, j = nvert - 1; i < nvert; j = i++) {
        if (verty[i] > testy != verty[j] > testy && testx < (vertx[j] - vertx[i]) * (testy - verty[i]) / (verty[j] - verty[i]) + vertx[i]) {
            c = !c;
        }
    }
    return c;
}

exports.default = Triangle;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _InputField2 = __webpack_require__(5);

var _InputField3 = _interopRequireDefault(_InputField2);

var _Constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBoxFiled = function (_InputField) {
    _inherits(CheckBoxFiled, _InputField);

    function CheckBoxFiled() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, CheckBoxFiled);

        var _this = _possibleConstructorReturn(this, (CheckBoxFiled.__proto__ || Object.getPrototypeOf(CheckBoxFiled)).call(this, props));

        var min = props.min,
            max = props.max,
            step = props.step;

        _this.isChecked = props.false;
        _this._type = "checkbox";

        return _this;
    }

    _createClass(CheckBoxFiled, [{
        key: "render",
        value: function render(callback) {
            var self = this;
            var check = (0, _jquery2.default)(_Constants.ELEMENT_INPUT, {
                "class": this.className,
                "type": this._type,
                "checked": this.isChecked
            }).on("change", function (e) {
                self.value = e.target.checked;
                callback(self);
            });
            return this.getLabel(check);
        }
    }]);

    return CheckBoxFiled;
}(_InputField3.default);

exports.default = CheckBoxFiled;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _InputField2 = __webpack_require__(5);

var _InputField3 = _interopRequireDefault(_InputField2);

var _Constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorInputField = function (_InputField) {
  _inherits(ColorInputField, _InputField);

  function ColorInputField() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ColorInputField);

    var _this = _possibleConstructorReturn(this, (ColorInputField.__proto__ || Object.getPrototypeOf(ColorInputField)).call(this, props));

    _this._type = "color";

    return _this;
  }

  _createClass(ColorInputField, [{
    key: "render",
    value: function render(callback) {
      var self = this;
      var color = (0, _jquery2.default)(_Constants.ELEMENT_INPUT, {
        "class": "tool-color",
        "type": this._type,
        "value": this.value,
        "name": this.name,
        "id": this.name
      }).on("change", function (e) {
        self.value = e.target.value;
        callback(self);
      });
      return this.getLabel(color);
    }
  }]);

  return ColorInputField;
}(_InputField3.default);

exports.default = ColorInputField;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _Constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DropDownOption = function () {
  function DropDownOption() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, DropDownOption);

    var label = props.label,
        value = props.value,
        className = props.className,
        isSelected = props.isSelected;

    this.value = value;
    this.label = label;
    this.className = className;
    this.isSelected = isSelected;
  }

  _createClass(DropDownOption, [{
    key: "render",
    value: function render() {
      var option = (0, _jquery2.default)(_Constants.ELEMENT_OPTION, {
        value: this.value,
        "class": this.className,
        text: this.label
      });
      if (this.isSelected) {
        option.attr("selected", true);
      }
      return option;
    }
  }]);

  return DropDownOption;
}();

exports.default = DropDownOption;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DropDownOption = __webpack_require__(41);

var _DropDownOption2 = _interopRequireDefault(_DropDownOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // import $ from "jquery";


// import {
//   ELEMENT_SELECT
// } from "../../../Constants";


var DropDownTool = function DropDownTool() {
  var _this = this;

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, DropDownTool);

  var selected = props.selected,
      callback = props.callback,
      className = props.className,
      items = props.items;

  this.selected = selected;
  // this.className = className;
  this.items = items.map(function (op, idx) {
    return new _DropDownOption2.default({ label: op, value: op, className: "tool-select_option", isSelected: op == _this.selected ? true : false });
  });
  // this.callback = callback;
}
// handleChange (e) {
//   const el = e.currentTarget;
//   this.selected = el.value;
//   this.callback(el.value);
// }
// render () {
//   const dd = $(ELEMENT_SELECT, {
//     "class": this.className,
//     "value": this.selected
//   }).on("change", this.handleChange.bind(this));
//   const items = this.items.map(op => {
//     return op.render();
//   });
//   dd.append(items);
//   return dd;
// }
;

exports.default = DropDownTool;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _InputField2 = __webpack_require__(5);

var _InputField3 = _interopRequireDefault(_InputField2);

var _Constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangeInputField = function (_InputField) {
  _inherits(RangeInputField, _InputField);

  function RangeInputField() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, RangeInputField);

    var _this = _possibleConstructorReturn(this, (RangeInputField.__proto__ || Object.getPrototypeOf(RangeInputField)).call(this, props));

    var min = props.min,
        max = props.max,
        step = props.step;

    _this.min = min;
    _this.max = max;
    _this.step = step;
    _this._type = "range";

    return _this;
  }

  _createClass(RangeInputField, [{
    key: "render",
    value: function render(callback) {
      var self = this;
      var range = (0, _jquery2.default)(_Constants.ELEMENT_INPUT, {
        "class": "tool-" + this._type,
        "type": this._type,
        "min": this.min,
        "max": this.max,
        "step": this.step,
        "value": this.value,
        "id": this.name
      }).on("change", function (e) {
        self.value = e.target.value;
        callback(self);
      });
      return this.getLabel(range);
    }
  }]);

  return RangeInputField;
}(_InputField3.default);

exports.default = RangeInputField;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ToolsModel = __webpack_require__(45);

var _ToolsModel2 = _interopRequireDefault(_ToolsModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToolsController = function () {
    function ToolsController() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ToolsController);

        var tools = props.tools,
            handleTool = props.handleTool,
            handleOption = props.handleOption;

        this.props = props;
        this.currentTool = null;
        this.model = new _ToolsModel2.default({ tools: this.props.tools });
        this.isOptionsHide = true;
    }

    _createClass(ToolsController, [{
        key: "toggleOptions",
        value: function toggleOptions() {
            this.isOptionsHide = !this.isOptionsHide;
        }
    }, {
        key: "handleToolOption",
        value: function handleToolOption(option) {
            var data = {
                type: option.name,
                value: option.value
            };
            console.log("ToolsController , handleOption: ", data);
            if (this.props.handleOption != null) {
                this.props.handleOption(data);
            }
        }
    }, {
        key: "handleSelectTool",
        value: function handleSelectTool(tool) {
            this.currentTool = this.model.getTool(tool);
            this.model.setActive(tool);
            console.log("ToolsController , handleTool: ", this.currentTool);
            if (this.props.handleTool != null) {
                this.props.handleTool(this.currentTool);
            }
        }
    }, {
        key: "getTools",
        value: function getTools() {
            return this.model.getTools();
        }
    }, {
        key: "getCurrentTool",
        value: function getCurrentTool() {
            return this.currentTool;
        }
    }]);

    return ToolsController;
}();

exports.default = ToolsController;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ColorInputField = __webpack_require__(40);

var _ColorInputField2 = _interopRequireDefault(_ColorInputField);

var _RangeInputField = __webpack_require__(43);

var _RangeInputField2 = _interopRequireDefault(_RangeInputField);

var _CheckBoxFiled = __webpack_require__(39);

var _CheckBoxFiled2 = _interopRequireDefault(_CheckBoxFiled);

var _DropDownTool = __webpack_require__(42);

var _DropDownTool2 = _interopRequireDefault(_DropDownTool);

var _FileUploadField = __webpack_require__(17);

var _FileUploadField2 = _interopRequireDefault(_FileUploadField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var options = {
    "strokeStyle": {
        value: "#a8a8a8"
    },
    "fillStyle": {
        value: "#b2b2b2"
    },
    "scale": {
        min: 1,
        max: 5,
        step: .1,
        value: 1
    },
    "lineWidth": {
        min: 1,
        max: 25,
        step: 1,
        value: 1
    },
    "shadowColor": {
        value: "#000000"
    },
    "shadowBlur": {
        min: 0,
        max: 25,
        step: 1,
        value: 0
    },
    "globalAlpha": {
        min: 0,
        max: 1,
        step: .1,
        value: 1
    },
    "backgroundColor": {
        "value": "#ffffff"
    }
};

var dropDownSet = {
    "brush": {
        types: ["pencil", "brush"]
    },
    "shapes": {
        types: ["rectangle", "circle", "triangle"]
    },
    "background": {
        types: ["fill", "upload"]
    },
    "erase": {
        types: ["deleteShape"]
    },
    "select": {
        types: ["select"]
    }
};
var toolOptions = {
    "pencil": {
        "color": ["strokeStyle"],
        "range": ["globalAlpha"]
    },
    "brush": {
        "color": ["strokeStyle", "shadowColor"],
        "range": ["lineWidth", "globalAlpha", "shadowBlur"]
    },
    "rectangle": {
        "color": ["strokeStyle", "fillStyle", "shadowColor"],
        "range": ["lineWidth", "globalAlpha", "shadowBlur"],
        "check": ["fillShape"]
    },
    "circle": {
        "color": ["strokeStyle", "fillStyle", "shadowColor"],
        "range": ["lineWidth", "globalAlpha", "shadowBlur"],
        "check": ["fillShape"]
    },
    "triangle": {
        "color": ["strokeStyle", "fillStyle", "shadowColor"],
        "range": ["lineWidth", "globalAlpha", "shadowBlur"],
        "check": ["fillShape"]
    },
    "fill": {
        "color": ["backgroundColor"],
        "range": ["scale"]
    },
    "deleteShape": {
        range: ["lineWidth"],
        "check": ["fullDelete"]
    },
    "select": {
        "check": ["groupSelect"]
    },
    "upload": {
        "fileUpload": ["upload"]
    }
};

var OptionTool = function () {
    function OptionTool(_ref) {
        var type = _ref.type,
            optionName = _ref.optionName;

        _classCallCheck(this, OptionTool);

        this.type = type; // Brush
        this.optionName = optionName; //OptionName
        this.options = this.getOptions(this.optionName);
    }

    _createClass(OptionTool, [{
        key: "getOptions",
        value: function getOptions(optionName) {
            var _this = this;

            var options = [];
            return Object.keys(toolOptions[optionName]).reduce(function (acc, n) {
                acc[optionName] = _this.switchOptionTypes(optionName);
                return acc;
            }, {});
        }
    }, {
        key: "switchOptionTypes",
        value: function switchOptionTypes(optionName) {
            var options = toolOptions[optionName];
            return Object.keys(options).map(function (o) {
                switch (o) {
                    case "color":
                        return options[o].map(function (x) {
                            return OptionTool.option(x, _ColorInputField2.default);
                        });
                        break;
                    case "range":
                        return options[o].map(function (x) {
                            return OptionTool.option(x, _RangeInputField2.default);
                        });
                        break;
                    case "check":
                        return options[o].map(function (x) {
                            return OptionTool.option(x, _CheckBoxFiled2.default);
                        });
                        break;
                    case "fileUpload":
                        return options[o].map(function (x) {
                            return OptionTool.option(x, _FileUploadField2.default);
                        });
                        break;
                }
            });
        }
    }], [{
        key: "option",
        value: function option(field, consClass) {
            var props = {
                name: field
            };
            var mProps = Object.assign(props, options[field]);
            return new consClass(mProps);
        }
    }]);

    return OptionTool;
}();

var Tool = function () {
    function Tool() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Tool);

        var name = props.name,
            active = props.active;

        this.active = active || false;
        this.name = name;
        this.types = dropDownSet[name].types.map(function (type) {
            return new OptionTool({ type: name, optionName: type });
        });
        var toolOptions = this.types.map(function (t) {
            return t.optionName;
        });
        var ddProps = {
            selected: toolOptions[0],
            items: toolOptions
        };
        this.dropDown = new _DropDownTool2.default(ddProps);
    }

    _createClass(Tool, [{
        key: "setSelect",
        value: function setSelect(val) {
            this.dropDown.selected = val;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.dropDown.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    item.isSelected = item.value == val;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "getSelected",
        value: function getSelected() {
            return this.dropDown.selected;
        }
    }]);

    return Tool;
}();

var ToolsModel = function () {
    function ToolsModel() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ToolsModel);

        this.props = props;
        this.tools = this.props.tools.map(function (t) {
            return new Tool({ name: t, active: false });
        });
    }

    _createClass(ToolsModel, [{
        key: "setTools",
        value: function setTools(tools) {
            this.tools = tools;
            return this;
        }
    }, {
        key: "getTools",
        value: function getTools() {
            return this.tools;
        }
    }, {
        key: "getTool",
        value: function getTool(tool) {
            return this.tools.filter(function (t) {
                return t == tool;
            })[0];
        }
    }, {
        key: "setActive",
        value: function setActive(tool) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.tools[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var t = _step2.value;

                    if (t == tool) {
                        t.active = true;
                    } else {
                        t.active = false;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }]);

    return ToolsModel;
}();

exports.default = ToolsModel;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _Constants = __webpack_require__(2);

var _ToolsController = __webpack_require__(44);

var _ToolsController2 = _interopRequireDefault(_ToolsController);

var _draggable = __webpack_require__(20);

var _draggable2 = _interopRequireDefault(_draggable);

var _Bottom_View = __webpack_require__(3);

var _Bottom_View2 = _interopRequireDefault(_Bottom_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ToolsView = function () {
    function ToolsView() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ToolsView);

        var handleTool = props.handleTool,
            handleOption = props.handleOption,
            position = props.position;

        this.props = props;
        this.controller = new _ToolsController2.default({
            tools: props.tools || ["brush"],
            handleTool: this.props.handleTool,
            handleOption: this.props.handleOption
        });
        this.position = position;

        this.absolutePositions = {};
    }

    _createClass(ToolsView, [{
        key: "handleToggleOptions",
        value: function handleToggleOptions(e) {
            e.preventDefault();
            this.controller.toggleOptions();
            this.update();
        }
    }, {
        key: "handleTool",
        value: function handleTool(tool) {
            this.controller.handleSelectTool(tool);
            this.update();
        }
    }, {
        key: "handleDropDownChange",
        value: function handleDropDownChange(e) {
            var current = this.controller.getCurrentTool();
            current.setSelect(e.target.value);
            this.controller.handleSelectTool(current);
            this.update();
        }
    }, {
        key: "handleOptionChange",
        value: function handleOptionChange(option) {
            this.controller.handleToolOption(option);
        }
    }, {
        key: "renderTool",
        value: function renderTool(tool) {
            var _this = this;

            var img = (0, _jquery2.default)(_Constants.ELEMENT_IMG, {
                "class": _Constants.CSS_MAIN_TOOL_IMAGE,
                "src": _Constants.TOOL_IMG_PATH + "tool_" + tool.name + ".png"
            });
            var toolElement = (0, _jquery2.default)(_Constants.ELEMENT_DIV, {
                "class": _Constants.CSS_MAIN_TOOL_ELEMENT
            }).on("click", function (e) {
                e.preventDefault();
                _this.handleTool(tool);
            }).append(img);
            if (tool.active) {
                toolElement.addClass(_Constants.CSS_MAIN_TOOL_ACTIVE);
            }
            return toolElement;
        }
    }, {
        key: "renderToolOptions",
        value: function renderToolOptions() {
            var _this2 = this;

            var current = this.controller.getCurrentTool();
            var filter = current.types.filter(function (t) {
                return t.optionName == current.getSelected();
            });

            var options = [];
            if (filter.length > 0) {
                options = filter[0].options[current.getSelected()];
            }

            var toolsOptionsWrapper = (0, _jquery2.default)(_Constants.ELEMENT_DIV, {
                "class": "toolsOptionsWrapper"
            });
            options.forEach(function (arrOptions, i) {
                var title = "";
                var fields = [];
                if (i == 0) {
                    title = "Colors";
                } else if (i == 1) {
                    title = "Transforms";
                }
                fields = arrOptions.map(function (op) {
                    return op.render(_this2.handleOptionChange.bind(_this2));
                });
                toolsOptionsWrapper.append((0, _jquery2.default)("<span></span>", {
                    text: title
                }), fields);
            });
            return toolsOptionsWrapper;
        }
    }, {
        key: "renderToolDropDown",
        value: function renderToolDropDown() {
            var current = this.controller.getCurrentTool();
            var dd = (0, _jquery2.default)(_Constants.ELEMENT_SELECT, {
                "class": "tools-dropDown",
                "value": current.getSelected(),
                "selected": current.getSelected()
            }).on("change", this.handleDropDownChange.bind(this));
            var items = current.dropDown.items.map(function (i) {
                return i.render();
            });
            dd.append(items);
            return dd;
        }
    }, {
        key: "update",
        value: function update() {
            var wr = (0, _jquery2.default)(".tools-wrapper");
            if (wr != null) {
                wr.replaceWith(this.render());
            }
        }
    }, {
        key: "render",
        value: function render() {
            var wrapper = (0, _jquery2.default)("<div></div>", {
                "class": "tools-wrapper"
            });
            var tools = (0, _jquery2.default)("<div></div>", {
                "class": "tools"
            });

            if (this.position == "right") {
                wrapper.addClass("right");
            } else {
                wrapper.addClass("left");
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.controller.getTools()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var t = _step.value;

                    tools.append(this.renderTool(t));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            wrapper.append(tools);
            var $button = (0, _jquery2.default)("<div></div>", {
                "class": "tool-element"
            }).on("click", this.handleToggleOptions.bind(this)).append(_Bottom_View2.default.getImage("toggle"));
            wrapper.append($button);
            if (this.controller.getCurrentTool() != null && !this.controller.isOptionsHide) {
                // let topDrag = $(ELEMENT_DIV, {
                //     "class": "topDrag"
                // });

                // var appendTo = $(".tools-wrapper").parent();
                // console.log(appendTo);
                // const self = this;
                // TODO: disable drag for time
                // draggable({
                //     appendTo: "paint-wrapper",
                //     containment: appendTo,
                //     helper: 'clone',
                //     drag: ( event, ui ) => {
                //         self.absolutePositions.left = ui.position.left;
                //         self.absolutePositions.top = ui.position.top;
                //         $(".tools-absolute").css({left: ui.position.left, top: ui.position.top});
                //     }
                // }, topDrag);

                var absoluteWrapper = (0, _jquery2.default)(_Constants.ELEMENT_DIV, {
                    "class": "tools-absolute"
                }).css({
                    top: 0,
                    right: 0
                }).append(this.renderToolDropDown(), this.renderToolOptions()).appendTo(wrapper);
            }

            return wrapper;
        }
    }]);

    return ToolsView;
}();

exports.default = ToolsView;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PDF_Model = __webpack_require__(18);

var _PDF_Model2 = _interopRequireDefault(_PDF_Model);

var _PaintController2 = __webpack_require__(14);

var _PaintController3 = _interopRequireDefault(_PaintController2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PDF_Controller = function (_PaintController) {
    _inherits(PDF_Controller, _PaintController);

    function PDF_Controller(props) {
        _classCallCheck(this, PDF_Controller);

        var _this = _possibleConstructorReturn(this, (PDF_Controller.__proto__ || Object.getPrototypeOf(PDF_Controller)).call(this, props));

        _this.props = props;
        _this.element = null;
        _this.ctx = props.ctx;
        _this.canvas = props.canvas;

        _this.scale = 1;

        _this.currentPage = 1;
        _this.totalPages = 0;

        _this.pageRendering = false;
        _this.pageNumPending = null;

        return _this;
    }

    _createClass(PDF_Controller, [{
        key: "_getPropsFileProps",
        value: function _getPropsFileProps() {
            return {
                totalPages: this.model.pdf.numPages,
                currentPage: this.currentPage,
                fileName: this.model.pdf
            };
        }
        // handleLoadPDF (cb) {
        //
        // }
        //
        // _callback (page) {
        //     let test = document.querySelector(".board-content");
        //     let w = 0, h = 0;
        //     if (test != null) {
        //         w = test.offsetWidth;
        //         h = test.offsetHeight;
        //         this.canvas.width = w;
        //         this.canvas.height = h;
        //     }
        //     // var viewport = page.getViewport(
        //     //     this.canvas.width/page.getViewport(this.scale).width
        //     // );
        //     var viewport = page.getViewport(this.scale);
        //     var scale = this.canvas.width / viewport.width;
        //     var scaledViewport = page.getViewport(scale);
        //     // this.canvas.height = scaledViewport.height;
        //     // this.canvas.height = viewport.height;
        //     // this.canvas.width = viewport.width;
        //
        //     const renderContext = {
        //         canvasContext: this.model.getContext(),
        //         viewport: scaledViewport
        //     };
        //     let b = page.render(renderContext);
        //
        //     return b.promise;
        // }
        //
        // uploadPDFFile (e) {
        //     this.model.uploadPDF(e, this.update())
        // }
        // getFile (fileName, cb) {
        //     this.model.currentUrl = "/"+fileName;
        //     const self = this;
        //     this.model.loadFile(this._callback.bind(this));
        //     cb(() => this.model.getTotalPages());
        // }
        //
        // update () {
        //
        //     this.model.updatePage(this._callback.bind(this));
        // }
        //
        // renderPage (page) {
        //     const pdf = this.model.pdf;
        //     if (pdf != null) {
        //         pdf.getPage(this.currentPage).then
        //     }
        // }

        //
        // nextPage (cb) {
        //     const self = this;
        //     this.model.getNext(this._callback.bind(this));
        //     cb(() => this.model.getCurrentPageNum());
        // }
        // prevPage (cb) {
        //     const self = this;
        //     this.model.getPrev(this._callback.bind(this));
        //     cb(() => this.model.getCurrentPageNum());
        // }
        //
        // getAmounOfPages () {
        //     return this.model.pdf.numPages;
        // }

    }, {
        key: "uploadFile",
        value: function uploadFile(e) {
            this.model.upload(e, this.renderPage.bind(this));
        }
    }, {
        key: "update",
        value: function update() {}
    }, {
        key: "zoomIn",
        value: function zoomIn() {
            this.scale -= .5;
            this.renderPage();
            this.model.clearContext();
        }
    }, {
        key: "zoomOut",
        value: function zoomOut() {
            this.scale += .5;
            this.renderPage();
            this.model.context.clearContext();
        }
    }, {
        key: "clear",
        value: function clear() {
            this.model.pdf = null;
            this.model.context.clearContext();
        }
    }, {
        key: "_image",
        value: function _image(p) {
            var self = this;
            var _p = new Promise(function (res, rej) {
                self.pageRendering = false;
                self.updateViewCallback(self._getPropsFileProps());
                if (self.pageNumPending !== null) {
                    self.renderPage();
                    self.pageNumPending = null;
                }
                res({});
            });
            _p.then(function (p) {
                console.log(p);
                var c = self.model.getContext();
                self.model.context.backgroundImage = c.getImageData(0, 0, c.canvas.width, c.canvas.height);
                self.model.context.clearContext();
            });
        }
    }, {
        key: "renderPage",
        value: function renderPage() {
            this.pageRendering = true;
            var self = this;
            self.model.pdf.getPage(self.currentPage).then(function (page) {
                var offset = PDF_Controller._calcCanvasOffset();
                self.canvas.width = offset.w;
                self.canvas.height = offset.h;

                var viewport = PDF_Controller._getViewport(page, self.canvas, self.scale);

                var renderContext = {
                    canvasContext: self.model.getContext(),
                    viewport: viewport
                };
                var render = page.render(renderContext);

                render.promise.then(self._image.bind(self));
            });
        }
    }, {
        key: "queueRenderPage",
        value: function queueRenderPage(num) {
            if (this.pageRendering) {
                this.pageNumPending = num;
            } else {
                this.renderPage();
            }
        }
    }, {
        key: "nextPage",
        value: function nextPage() {
            if (this.currentPage >= this.model.pdf.numPages) {
                return;
            }
            this.currentPage++;
            this.queueRenderPage(this.currentPage);
        }
    }, {
        key: "prevPage",
        value: function prevPage() {
            if (this.currentPage <= 1) {
                return;
            }
            this.currentPage--;
            this.queueRenderPage(this.currentPage);
        }
    }], [{
        key: "_getViewport",
        value: function _getViewport(page, canvas, scale) {
            // TODO: need to rewrite
            var viewport = page.getViewport(scale);
            // canvas.width = viewport.width;
            canvas.height = viewport.height;

            var _scale = canvas.width / viewport.width;
            return page.getViewport(_scale);
        }
    }, {
        key: "_calcCanvasOffset",
        value: function _calcCanvasOffset() {
            var wrapper = document.querySelector(".paint-view");
            if (wrapper != null) {
                return {
                    w: wrapper.offsetWidth,
                    h: wrapper.offsetHeight
                };
            }
        }
    }]);

    return PDF_Controller;
}(_PaintController3.default);

exports.default = PDF_Controller;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _Constants = __webpack_require__(2);

var _PDF_Contoller = __webpack_require__(47);

var _PDF_Contoller2 = _interopRequireDefault(_PDF_Contoller);

var _PDF_Model = __webpack_require__(18);

var _PDF_Model2 = _interopRequireDefault(_PDF_Model);

var _Bottom_View = __webpack_require__(3);

var _Bottom_View2 = _interopRequireDefault(_Bottom_View);

var _Canvas_View2 = __webpack_require__(13);

var _Canvas_View3 = _interopRequireDefault(_Canvas_View2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BUTTON_NEXT = "next";
var BUTTON_PREV = "prev";
var BUTTON_LOAD = "load";
var BUTTON_ZOOM_IN = "zoom-in";
var BUTTON_ZOOM_OUT = "zoom-out";
var BUTTON_UPLOAD = "upload";
var BUTTON_SAVE = "save";
var BUTTON_TOGGLE = "toggle";
var BUTTON_CLEAR = "clear";
var PDF_BUTTONS_TYPE = [BUTTON_NEXT, BUTTON_PREV, BUTTON_LOAD, BUTTON_ZOOM_IN, BUTTON_ZOOM_OUT, BUTTON_UPLOAD, BUTTON_SAVE, BUTTON_TOGGLE, BUTTON_CLEAR];

var START_POINT = {
    buttons: [BUTTON_UPLOAD, BUTTON_TOGGLE]
};
var PDF_LOAD = {
    buttons: [BUTTON_NEXT, BUTTON_PREV, BUTTON_ZOOM_IN, BUTTON_ZOOM_OUT, BUTTON_SAVE, BUTTON_CLEAR, BUTTON_TOGGLE]
};

var PDF_Vew = function (_Canvas_View) {
    _inherits(PDF_Vew, _Canvas_View);

    function PDF_Vew() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, PDF_Vew);

        var _this = _possibleConstructorReturn(this, (PDF_Vew.__proto__ || Object.getPrototypeOf(PDF_Vew)).call(this, {
            controller: _PDF_Contoller2.default,
            modelConstructor: _PDF_Model2.default,
            className: "paint-view",
            active: props.active,
            showTools: false,
            tools: props.tools,
            position: "right"
        }));

        _this.controller.updateViewCallback = _this.update.bind(_this);
        _this.totalPages = 0;
        _this.currentPage = 0;
        var self = _this;

        _this._currentBottomView = START_POINT;

        _this.bottomItems = [{
            type: "button",
            label: "next",
            onClick: function onClick(e) {
                e.preventDefault();
                _this.controller.nextPage(function (num) {
                    _this.currentPage = num;
                    (0, _jquery2.default)("#totalaPages").text(_this.currentPage + "/" + _this.totalPages);
                });
            },
            className: "bottom-button"
        }, {
            type: "button",
            label: "prev",
            onClick: function onClick(e) {
                e.preventDefault();
                _this.controller.prevPage(function (num) {
                    _this.currentPage = num;
                    (0, _jquery2.default)("#totalaPages").text(_this.currentPage + "/" + _this.totalPages);
                });
            },
            className: "bottom-button"
        }, {
            type: "button",
            label: "load",
            // onClick: this.handleLoadPDFFile.bind(this),
            className: "bottom-button"
        }, {
            type: "button",
            label: "zoom-in",
            onClick: function onClick(e) {
                e.preventDefault();
                // this.controller.scale =/ this.controller.scale - .2;
                _this.controller.zoomIn();
            }
        }, {
            type: "button",
            label: "zoom-out",
            onClick: function onClick(e) {
                e.preventDefault();
                // this.controller.scale = this.controller.scale + .2;
                _this.controller.zoomOut();
            }
        }, {
            type: "button",
            label: "clear",
            onClick: function onClick(e) {
                e.preventDefault();
                _this.handleClear();
            }
        }, {
            type: "input",
            label: "upload",
            onUpload: function onUpload(event) {
                return _this.controller.uploadFile(event);
            }
        }, {
            type: "link",
            label: "download",
            onClick: function onClick(e) {
                var dt = _this.canvas.toDataURL("image/png");
                dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
                dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
                e.target.href = dt;
            }
        }, {
            type: "button",
            label: "toggle",
            onClick: function onClick(e) {
                e.preventDefault();
                self.showTools = !self.showTools;
                _get(PDF_Vew.prototype.__proto__ || Object.getPrototypeOf(PDF_Vew.prototype), "update", _this).call(_this);
            }
        }];
        _this._bottomControls = {
            items: _this._getItems(),
            optionsItems: []
        };
        _this.bottomControl = new _Bottom_View2.default(_this._bottomControls);

        return _this;
    }

    _createClass(PDF_Vew, [{
        key: "handleClear",
        value: function handleClear() {
            this.controller.clear();
            this._currentBottomView = START_POINT;
            this.bottomControl.option = {
                items: [],
                optionsItems: []
            };
            this.bottomControl.update();
        }
    }, {
        key: "_getItems",
        value: function _getItems() {
            var _this2 = this;

            return this.bottomItems.filter(function (b) {
                return _this2._currentBottomView.buttons.indexOf(b.label) != -1;
            });
        }

        // updateBottomControls () {
        //     this.controls.update();
        // }
        //
        // /**
        //  *
        //  * @param props
        //  * @private
        //  */
        // _handlePDFUpdate(props = {}) {
        //
        //
        // }
        //
        // /**
        //  * update pdf view
        //  */
        // update () {
        //
        //
        //     this.controls.update();
        // }
        //
        // handleLoadPDFFile (e) {
        //     this.controller.uploadPDFFile(e);
        // }

        /**
         * upload file
         * @param e
         */

    }, {
        key: "handleUploadFile",
        value: function handleUploadFile(e) {
            this.controller.uploadFile(e);
        }
    }, {
        key: "update",
        value: function update(_ref) {
            var currentPage = _ref.currentPage,
                totalPages = _ref.totalPages;

            if (totalPages > 0) {
                this._currentBottomView = PDF_LOAD;
                this.items = this._getItems();
                this._bottomControls = {
                    items: this._getItems(),
                    optionsItems: [{ text: currentPage + " / " + totalPages }]
                };
                this.bottomControl.option = this._bottomControls;
                // this.controls.items = this._getItems();
                // this.controls.optionItems = [].concat({
                //     text: `${currentPage} / ${totalPages}`
                // });
                this.bottomControl.update();
            }
        }
    }, {
        key: "renderTopPages",
        value: function renderTopPages() {
            return (0, _jquery2.default)("<span></span>", {
                text: this.controller.currentPage + " / " + this.controller.model.pdf.numPages
            });
        }
    }, {
        key: "initBottomControls",
        value: function initBottomControls() {
            return {
                items: this._getItems(),
                optionsItems: []
            };
        }
    }, {
        key: "render",
        value: function render() {
            this.bottomControl.option = this.initBottomControls();
            this.bottomControl.update();
            if (this.element != null) {
                return this.element;
            }
            var wrapper = (0, _jquery2.default)(_Constants.ELEMENT_DIV, {
                "class": "pdf-wrapper"
            }).append(this.renderCanvasView());
            this.element = wrapper;
            return wrapper;
        }
    }]);

    return PDF_Vew;
}(_Canvas_View3.default);

exports.default = PDF_Vew;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _View2 = __webpack_require__(4);

var _View3 = _interopRequireDefault(_View2);

var _Bottom_View = __webpack_require__(3);

var _Bottom_View2 = _interopRequireDefault(_Bottom_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoView = function (_View) {
    _inherits(VideoView, _View);

    function VideoView() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, VideoView);

        var _this = _possibleConstructorReturn(this, (VideoView.__proto__ || Object.getPrototypeOf(VideoView)).call(this, {
            className: "video-view",
            active: true
        }));

        _this.player = null;

        _this._bottomControls = {
            items: [{
                type: "text",
                label: "url",
                onChange: function onChange(val) {
                    return _this.onYouTubeIframeAPIReady(val);
                }
            }]
        };

        _this.bottomControl = new _Bottom_View2.default(_this._bottomControls);
        return _this;
    }

    _createClass(VideoView, [{
        key: "getVideo",
        value: function getVideo() {
            var video = (0, _jquery2.default)("<div></div>", {
                id: "video"
            }).css({
                height: "100%",
                width: "100%"
            });
            return video;
        }
    }, {
        key: "onYouTubeIframeAPIReady",
        value: function onYouTubeIframeAPIReady(val) {
            var self = this;
            this.player = new YT.Player('video', {
                height: '100%',
                width: '100%',
                videoId: val.split("?v=")[1],
                events: {
                    'onReady': self.onPlayerReady.bind(self),
                    'onStateChange': self.onPlayerStateChange.bind(self)
                }
            });
        }
    }, {
        key: "onPlayerReady",
        value: function onPlayerReady(event) {
            event.target.playVideo();
        }
    }, {
        key: "onPlayerStateChange",
        value: function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
                // setTimeout(stopVideo, 6000);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var wrapper = this.renderWrapper();
            this.bottomControl.update();
            if (this.element != null) {
                return this.element;
            }
            wrapper.append(this.getVideo());
            this.element = wrapper;
            return wrapper;
        }
    }]);

    return VideoView;
}(_View3.default);

exports.default = VideoView;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :data Selector
//>>group: Core
//>>description: Selects elements which have data stored under the specified key.
//>>docs: http://api.jqueryui.com/data-selector/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo( function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		} ) :

		// Support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		}
} );
} ) );


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: disableSelection
//>>group: Core
//>>description: Disable selection of text content within the set of matched elements.
//>>docs: http://api.jqueryui.com/disableSelection/

// This file is deprecated
( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.fn.extend( {
	disableSelection: ( function() {
		var eventType = "onselectstart" in document.createElement( "div" ) ?
			"selectstart" :
			"mousedown";

		return function() {
			return this.on( eventType + ".ui-disableSelection", function( event ) {
				event.preventDefault();
			} );
		};
	} )(),

	enableSelection: function() {
		return this.off( ".ui-disableSelection" );
	}
} );

} ) );


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// This file is deprecated
return $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );
} ) );


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.ui.safeActiveElement = function( document ) {
	var activeElement;

	// Support: IE 9 only
	// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
	try {
		activeElement = document.activeElement;
	} catch ( error ) {
		activeElement = document.body;
	}

	// Support: IE 9 - 11 only
	// IE may return null instead of an element
	// Interestingly, this only seems to occur when NOT in an iframe
	if ( !activeElement ) {
		activeElement = document.body;
	}

	// Support: IE 11 only
	// IE11 returns a seemingly empty object in some cases when accessing
	// document.activeElement from an <iframe>
	if ( !activeElement.nodeName ) {
		activeElement = document.body;
	}

	return activeElement;
};

} ) );


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {
return $.ui.safeBlur = function( element ) {

	// Support: IE9 - 10 only
	// If the <body> is blurred, IE will switch windows, see #9420
	if ( element && element.nodeName.toLowerCase() !== "body" ) {
		$( element ).trigger( "blur" );
	}
};

} ) );


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: scrollParent
//>>group: Core
//>>description: Get the closest ancestor element that is scrollable.
//>>docs: http://api.jqueryui.com/scrollParent/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

return $.fn.scrollParent = function( includeHidden ) {
	var position = this.css( "position" ),
		excludeStaticParent = position === "absolute",
		overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
		scrollParent = this.parents().filter( function() {
			var parent = $( this );
			if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
				return false;
			}
			return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) +
				parent.css( "overflow-x" ) );
		} ).eq( 0 );

	return position === "fixed" || !scrollParent.length ?
		$( this[ 0 ].ownerDocument || document ) :
		scrollParent;
};

} ) );


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Resizable
//>>group: Interactions
//>>description: Enables resize functionality for any element.
//>>docs: http://api.jqueryui.com/resizable/
//>>demos: http://jqueryui.com/resizable/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/resizable.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(0),
			__webpack_require__(21),
			__webpack_require__(51),
			__webpack_require__(19),
			__webpack_require__(1),
			__webpack_require__(10)
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

$.widget( "ui.resizable", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "resize",
	options: {
		alsoResize: false,
		animate: false,
		animateDuration: "slow",
		animateEasing: "swing",
		aspectRatio: false,
		autoHide: false,
		classes: {
			"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
		},
		containment: false,
		ghost: false,
		grid: false,
		handles: "e,s,se",
		helper: false,
		maxHeight: null,
		maxWidth: null,
		minHeight: 10,
		minWidth: 10,

		// See #7960
		zIndex: 90,

		// Callbacks
		resize: null,
		start: null,
		stop: null
	},

	_num: function( value ) {
		return parseFloat( value ) || 0;
	},

	_isNumber: function( value ) {
		return !isNaN( parseFloat( value ) );
	},

	_hasScroll: function( el, a ) {

		if ( $( el ).css( "overflow" ) === "hidden" ) {
			return false;
		}

		var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
			has = false;

		if ( el[ scroll ] > 0 ) {
			return true;
		}

		// TODO: determine which cases actually cause this to happen
		// if the element doesn't have the scroll set, see if it's possible to
		// set the scroll
		el[ scroll ] = 1;
		has = ( el[ scroll ] > 0 );
		el[ scroll ] = 0;
		return has;
	},

	_create: function() {

		var margins,
			o = this.options,
			that = this;
		this._addClass( "ui-resizable" );

		$.extend( this, {
			_aspectRatio: !!( o.aspectRatio ),
			aspectRatio: o.aspectRatio,
			originalElement: this.element,
			_proportionallyResizeElements: [],
			_helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
		} );

		// Wrap the element if it cannot hold child nodes
		if ( this.element[ 0 ].nodeName.match( /^(canvas|textarea|input|select|button|img)$/i ) ) {

			this.element.wrap(
				$( "<div class='ui-wrapper' style='overflow: hidden;'></div>" ).css( {
					position: this.element.css( "position" ),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css( "top" ),
					left: this.element.css( "left" )
				} )
			);

			this.element = this.element.parent().data(
				"ui-resizable", this.element.resizable( "instance" )
			);

			this.elementIsWrapper = true;

			margins = {
				marginTop: this.originalElement.css( "marginTop" ),
				marginRight: this.originalElement.css( "marginRight" ),
				marginBottom: this.originalElement.css( "marginBottom" ),
				marginLeft: this.originalElement.css( "marginLeft" )
			};

			this.element.css( margins );
			this.originalElement.css( "margin", 0 );

			// support: Safari
			// Prevent Safari textarea resize
			this.originalResizeStyle = this.originalElement.css( "resize" );
			this.originalElement.css( "resize", "none" );

			this._proportionallyResizeElements.push( this.originalElement.css( {
				position: "static",
				zoom: 1,
				display: "block"
			} ) );

			// Support: IE9
			// avoid IE jump (hard set the margin)
			this.originalElement.css( margins );

			this._proportionallyResize();
		}

		this._setupHandles();

		if ( o.autoHide ) {
			$( this.element )
				.on( "mouseenter", function() {
					if ( o.disabled ) {
						return;
					}
					that._removeClass( "ui-resizable-autohide" );
					that._handles.show();
				} )
				.on( "mouseleave", function() {
					if ( o.disabled ) {
						return;
					}
					if ( !that.resizing ) {
						that._addClass( "ui-resizable-autohide" );
						that._handles.hide();
					}
				} );
		}

		this._mouseInit();
	},

	_destroy: function() {

		this._mouseDestroy();

		var wrapper,
			_destroy = function( exp ) {
				$( exp )
					.removeData( "resizable" )
					.removeData( "ui-resizable" )
					.off( ".resizable" )
					.find( ".ui-resizable-handle" )
						.remove();
			};

		// TODO: Unwrap at same DOM position
		if ( this.elementIsWrapper ) {
			_destroy( this.element );
			wrapper = this.element;
			this.originalElement.css( {
				position: wrapper.css( "position" ),
				width: wrapper.outerWidth(),
				height: wrapper.outerHeight(),
				top: wrapper.css( "top" ),
				left: wrapper.css( "left" )
			} ).insertAfter( wrapper );
			wrapper.remove();
		}

		this.originalElement.css( "resize", this.originalResizeStyle );
		_destroy( this.originalElement );

		return this;
	},

	_setOption: function( key, value ) {
		this._super( key, value );

		switch ( key ) {
		case "handles":
			this._removeHandles();
			this._setupHandles();
			break;
		default:
			break;
		}
	},

	_setupHandles: function() {
		var o = this.options, handle, i, n, hname, axis, that = this;
		this.handles = o.handles ||
			( !$( ".ui-resizable-handle", this.element ).length ?
				"e,s,se" : {
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				} );

		this._handles = $();
		if ( this.handles.constructor === String ) {

			if ( this.handles === "all" ) {
				this.handles = "n,e,s,w,se,sw,ne,nw";
			}

			n = this.handles.split( "," );
			this.handles = {};

			for ( i = 0; i < n.length; i++ ) {

				handle = $.trim( n[ i ] );
				hname = "ui-resizable-" + handle;
				axis = $( "<div>" );
				this._addClass( axis, "ui-resizable-handle " + hname );

				axis.css( { zIndex: o.zIndex } );

				this.handles[ handle ] = ".ui-resizable-" + handle;
				this.element.append( axis );
			}

		}

		this._renderAxis = function( target ) {

			var i, axis, padPos, padWrapper;

			target = target || this.element;

			for ( i in this.handles ) {

				if ( this.handles[ i ].constructor === String ) {
					this.handles[ i ] = this.element.children( this.handles[ i ] ).first().show();
				} else if ( this.handles[ i ].jquery || this.handles[ i ].nodeType ) {
					this.handles[ i ] = $( this.handles[ i ] );
					this._on( this.handles[ i ], { "mousedown": that._mouseDown } );
				}

				if ( this.elementIsWrapper &&
						this.originalElement[ 0 ]
							.nodeName
							.match( /^(textarea|input|select|button)$/i ) ) {
					axis = $( this.handles[ i ], this.element );

					padWrapper = /sw|ne|nw|se|n|s/.test( i ) ?
						axis.outerHeight() :
						axis.outerWidth();

					padPos = [ "padding",
						/ne|nw|n/.test( i ) ? "Top" :
						/se|sw|s/.test( i ) ? "Bottom" :
						/^e$/.test( i ) ? "Right" : "Left" ].join( "" );

					target.css( padPos, padWrapper );

					this._proportionallyResize();
				}

				this._handles = this._handles.add( this.handles[ i ] );
			}
		};

		// TODO: make renderAxis a prototype function
		this._renderAxis( this.element );

		this._handles = this._handles.add( this.element.find( ".ui-resizable-handle" ) );
		this._handles.disableSelection();

		this._handles.on( "mouseover", function() {
			if ( !that.resizing ) {
				if ( this.className ) {
					axis = this.className.match( /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i );
				}
				that.axis = axis && axis[ 1 ] ? axis[ 1 ] : "se";
			}
		} );

		if ( o.autoHide ) {
			this._handles.hide();
			this._addClass( "ui-resizable-autohide" );
		}
	},

	_removeHandles: function() {
		this._handles.remove();
	},

	_mouseCapture: function( event ) {
		var i, handle,
			capture = false;

		for ( i in this.handles ) {
			handle = $( this.handles[ i ] )[ 0 ];
			if ( handle === event.target || $.contains( handle, event.target ) ) {
				capture = true;
			}
		}

		return !this.options.disabled && capture;
	},

	_mouseStart: function( event ) {

		var curleft, curtop, cursor,
			o = this.options,
			el = this.element;

		this.resizing = true;

		this._renderProxy();

		curleft = this._num( this.helper.css( "left" ) );
		curtop = this._num( this.helper.css( "top" ) );

		if ( o.containment ) {
			curleft += $( o.containment ).scrollLeft() || 0;
			curtop += $( o.containment ).scrollTop() || 0;
		}

		this.offset = this.helper.offset();
		this.position = { left: curleft, top: curtop };

		this.size = this._helper ? {
				width: this.helper.width(),
				height: this.helper.height()
			} : {
				width: el.width(),
				height: el.height()
			};

		this.originalSize = this._helper ? {
				width: el.outerWidth(),
				height: el.outerHeight()
			} : {
				width: el.width(),
				height: el.height()
			};

		this.sizeDiff = {
			width: el.outerWidth() - el.width(),
			height: el.outerHeight() - el.height()
		};

		this.originalPosition = { left: curleft, top: curtop };
		this.originalMousePosition = { left: event.pageX, top: event.pageY };

		this.aspectRatio = ( typeof o.aspectRatio === "number" ) ?
			o.aspectRatio :
			( ( this.originalSize.width / this.originalSize.height ) || 1 );

		cursor = $( ".ui-resizable-" + this.axis ).css( "cursor" );
		$( "body" ).css( "cursor", cursor === "auto" ? this.axis + "-resize" : cursor );

		this._addClass( "ui-resizable-resizing" );
		this._propagate( "start", event );
		return true;
	},

	_mouseDrag: function( event ) {

		var data, props,
			smp = this.originalMousePosition,
			a = this.axis,
			dx = ( event.pageX - smp.left ) || 0,
			dy = ( event.pageY - smp.top ) || 0,
			trigger = this._change[ a ];

		this._updatePrevProperties();

		if ( !trigger ) {
			return false;
		}

		data = trigger.apply( this, [ event, dx, dy ] );

		this._updateVirtualBoundaries( event.shiftKey );
		if ( this._aspectRatio || event.shiftKey ) {
			data = this._updateRatio( data, event );
		}

		data = this._respectSize( data, event );

		this._updateCache( data );

		this._propagate( "resize", event );

		props = this._applyChanges();

		if ( !this._helper && this._proportionallyResizeElements.length ) {
			this._proportionallyResize();
		}

		if ( !$.isEmptyObject( props ) ) {
			this._updatePrevProperties();
			this._trigger( "resize", event, this.ui() );
			this._applyChanges();
		}

		return false;
	},

	_mouseStop: function( event ) {

		this.resizing = false;
		var pr, ista, soffseth, soffsetw, s, left, top,
			o = this.options, that = this;

		if ( this._helper ) {

			pr = this._proportionallyResizeElements;
			ista = pr.length && ( /textarea/i ).test( pr[ 0 ].nodeName );
			soffseth = ista && this._hasScroll( pr[ 0 ], "left" ) ? 0 : that.sizeDiff.height;
			soffsetw = ista ? 0 : that.sizeDiff.width;

			s = {
				width: ( that.helper.width()  - soffsetw ),
				height: ( that.helper.height() - soffseth )
			};
			left = ( parseFloat( that.element.css( "left" ) ) +
				( that.position.left - that.originalPosition.left ) ) || null;
			top = ( parseFloat( that.element.css( "top" ) ) +
				( that.position.top - that.originalPosition.top ) ) || null;

			if ( !o.animate ) {
				this.element.css( $.extend( s, { top: top, left: left } ) );
			}

			that.helper.height( that.size.height );
			that.helper.width( that.size.width );

			if ( this._helper && !o.animate ) {
				this._proportionallyResize();
			}
		}

		$( "body" ).css( "cursor", "auto" );

		this._removeClass( "ui-resizable-resizing" );

		this._propagate( "stop", event );

		if ( this._helper ) {
			this.helper.remove();
		}

		return false;

	},

	_updatePrevProperties: function() {
		this.prevPosition = {
			top: this.position.top,
			left: this.position.left
		};
		this.prevSize = {
			width: this.size.width,
			height: this.size.height
		};
	},

	_applyChanges: function() {
		var props = {};

		if ( this.position.top !== this.prevPosition.top ) {
			props.top = this.position.top + "px";
		}
		if ( this.position.left !== this.prevPosition.left ) {
			props.left = this.position.left + "px";
		}
		if ( this.size.width !== this.prevSize.width ) {
			props.width = this.size.width + "px";
		}
		if ( this.size.height !== this.prevSize.height ) {
			props.height = this.size.height + "px";
		}

		this.helper.css( props );

		return props;
	},

	_updateVirtualBoundaries: function( forceAspectRatio ) {
		var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
			o = this.options;

		b = {
			minWidth: this._isNumber( o.minWidth ) ? o.minWidth : 0,
			maxWidth: this._isNumber( o.maxWidth ) ? o.maxWidth : Infinity,
			minHeight: this._isNumber( o.minHeight ) ? o.minHeight : 0,
			maxHeight: this._isNumber( o.maxHeight ) ? o.maxHeight : Infinity
		};

		if ( this._aspectRatio || forceAspectRatio ) {
			pMinWidth = b.minHeight * this.aspectRatio;
			pMinHeight = b.minWidth / this.aspectRatio;
			pMaxWidth = b.maxHeight * this.aspectRatio;
			pMaxHeight = b.maxWidth / this.aspectRatio;

			if ( pMinWidth > b.minWidth ) {
				b.minWidth = pMinWidth;
			}
			if ( pMinHeight > b.minHeight ) {
				b.minHeight = pMinHeight;
			}
			if ( pMaxWidth < b.maxWidth ) {
				b.maxWidth = pMaxWidth;
			}
			if ( pMaxHeight < b.maxHeight ) {
				b.maxHeight = pMaxHeight;
			}
		}
		this._vBoundaries = b;
	},

	_updateCache: function( data ) {
		this.offset = this.helper.offset();
		if ( this._isNumber( data.left ) ) {
			this.position.left = data.left;
		}
		if ( this._isNumber( data.top ) ) {
			this.position.top = data.top;
		}
		if ( this._isNumber( data.height ) ) {
			this.size.height = data.height;
		}
		if ( this._isNumber( data.width ) ) {
			this.size.width = data.width;
		}
	},

	_updateRatio: function( data ) {

		var cpos = this.position,
			csize = this.size,
			a = this.axis;

		if ( this._isNumber( data.height ) ) {
			data.width = ( data.height * this.aspectRatio );
		} else if ( this._isNumber( data.width ) ) {
			data.height = ( data.width / this.aspectRatio );
		}

		if ( a === "sw" ) {
			data.left = cpos.left + ( csize.width - data.width );
			data.top = null;
		}
		if ( a === "nw" ) {
			data.top = cpos.top + ( csize.height - data.height );
			data.left = cpos.left + ( csize.width - data.width );
		}

		return data;
	},

	_respectSize: function( data ) {

		var o = this._vBoundaries,
			a = this.axis,
			ismaxw = this._isNumber( data.width ) && o.maxWidth && ( o.maxWidth < data.width ),
			ismaxh = this._isNumber( data.height ) && o.maxHeight && ( o.maxHeight < data.height ),
			isminw = this._isNumber( data.width ) && o.minWidth && ( o.minWidth > data.width ),
			isminh = this._isNumber( data.height ) && o.minHeight && ( o.minHeight > data.height ),
			dw = this.originalPosition.left + this.originalSize.width,
			dh = this.originalPosition.top + this.originalSize.height,
			cw = /sw|nw|w/.test( a ), ch = /nw|ne|n/.test( a );
		if ( isminw ) {
			data.width = o.minWidth;
		}
		if ( isminh ) {
			data.height = o.minHeight;
		}
		if ( ismaxw ) {
			data.width = o.maxWidth;
		}
		if ( ismaxh ) {
			data.height = o.maxHeight;
		}

		if ( isminw && cw ) {
			data.left = dw - o.minWidth;
		}
		if ( ismaxw && cw ) {
			data.left = dw - o.maxWidth;
		}
		if ( isminh && ch ) {
			data.top = dh - o.minHeight;
		}
		if ( ismaxh && ch ) {
			data.top = dh - o.maxHeight;
		}

		// Fixing jump error on top/left - bug #2330
		if ( !data.width && !data.height && !data.left && data.top ) {
			data.top = null;
		} else if ( !data.width && !data.height && !data.top && data.left ) {
			data.left = null;
		}

		return data;
	},

	_getPaddingPlusBorderDimensions: function( element ) {
		var i = 0,
			widths = [],
			borders = [
				element.css( "borderTopWidth" ),
				element.css( "borderRightWidth" ),
				element.css( "borderBottomWidth" ),
				element.css( "borderLeftWidth" )
			],
			paddings = [
				element.css( "paddingTop" ),
				element.css( "paddingRight" ),
				element.css( "paddingBottom" ),
				element.css( "paddingLeft" )
			];

		for ( ; i < 4; i++ ) {
			widths[ i ] = ( parseFloat( borders[ i ] ) || 0 );
			widths[ i ] += ( parseFloat( paddings[ i ] ) || 0 );
		}

		return {
			height: widths[ 0 ] + widths[ 2 ],
			width: widths[ 1 ] + widths[ 3 ]
		};
	},

	_proportionallyResize: function() {

		if ( !this._proportionallyResizeElements.length ) {
			return;
		}

		var prel,
			i = 0,
			element = this.helper || this.element;

		for ( ; i < this._proportionallyResizeElements.length; i++ ) {

			prel = this._proportionallyResizeElements[ i ];

			// TODO: Seems like a bug to cache this.outerDimensions
			// considering that we are in a loop.
			if ( !this.outerDimensions ) {
				this.outerDimensions = this._getPaddingPlusBorderDimensions( prel );
			}

			prel.css( {
				height: ( element.height() - this.outerDimensions.height ) || 0,
				width: ( element.width() - this.outerDimensions.width ) || 0
			} );

		}

	},

	_renderProxy: function() {

		var el = this.element, o = this.options;
		this.elementOffset = el.offset();

		if ( this._helper ) {

			this.helper = this.helper || $( "<div style='overflow:hidden;'></div>" );

			this._addClass( this.helper, this._helper );
			this.helper.css( {
				width: this.element.outerWidth(),
				height: this.element.outerHeight(),
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++o.zIndex //TODO: Don't modify option
			} );

			this.helper
				.appendTo( "body" )
				.disableSelection();

		} else {
			this.helper = this.element;
		}

	},

	_change: {
		e: function( event, dx ) {
			return { width: this.originalSize.width + dx };
		},
		w: function( event, dx ) {
			var cs = this.originalSize, sp = this.originalPosition;
			return { left: sp.left + dx, width: cs.width - dx };
		},
		n: function( event, dx, dy ) {
			var cs = this.originalSize, sp = this.originalPosition;
			return { top: sp.top + dy, height: cs.height - dy };
		},
		s: function( event, dx, dy ) {
			return { height: this.originalSize.height + dy };
		},
		se: function( event, dx, dy ) {
			return $.extend( this._change.s.apply( this, arguments ),
				this._change.e.apply( this, [ event, dx, dy ] ) );
		},
		sw: function( event, dx, dy ) {
			return $.extend( this._change.s.apply( this, arguments ),
				this._change.w.apply( this, [ event, dx, dy ] ) );
		},
		ne: function( event, dx, dy ) {
			return $.extend( this._change.n.apply( this, arguments ),
				this._change.e.apply( this, [ event, dx, dy ] ) );
		},
		nw: function( event, dx, dy ) {
			return $.extend( this._change.n.apply( this, arguments ),
				this._change.w.apply( this, [ event, dx, dy ] ) );
		}
	},

	_propagate: function( n, event ) {
		$.ui.plugin.call( this, n, [ event, this.ui() ] );
		( n !== "resize" && this._trigger( n, event, this.ui() ) );
	},

	plugins: {},

	ui: function() {
		return {
			originalElement: this.originalElement,
			element: this.element,
			helper: this.helper,
			position: this.position,
			size: this.size,
			originalSize: this.originalSize,
			originalPosition: this.originalPosition
		};
	}

} );

/*
 * Resizable Extensions
 */

$.ui.plugin.add( "resizable", "animate", {

	stop: function( event ) {
		var that = $( this ).resizable( "instance" ),
			o = that.options,
			pr = that._proportionallyResizeElements,
			ista = pr.length && ( /textarea/i ).test( pr[ 0 ].nodeName ),
			soffseth = ista && that._hasScroll( pr[ 0 ], "left" ) ? 0 : that.sizeDiff.height,
			soffsetw = ista ? 0 : that.sizeDiff.width,
			style = {
				width: ( that.size.width - soffsetw ),
				height: ( that.size.height - soffseth )
			},
			left = ( parseFloat( that.element.css( "left" ) ) +
				( that.position.left - that.originalPosition.left ) ) || null,
			top = ( parseFloat( that.element.css( "top" ) ) +
				( that.position.top - that.originalPosition.top ) ) || null;

		that.element.animate(
			$.extend( style, top && left ? { top: top, left: left } : {} ), {
				duration: o.animateDuration,
				easing: o.animateEasing,
				step: function() {

					var data = {
						width: parseFloat( that.element.css( "width" ) ),
						height: parseFloat( that.element.css( "height" ) ),
						top: parseFloat( that.element.css( "top" ) ),
						left: parseFloat( that.element.css( "left" ) )
					};

					if ( pr && pr.length ) {
						$( pr[ 0 ] ).css( { width: data.width, height: data.height } );
					}

					// Propagating resize, and updating values for each animation step
					that._updateCache( data );
					that._propagate( "resize", event );

				}
			}
		);
	}

} );

$.ui.plugin.add( "resizable", "containment", {

	start: function() {
		var element, p, co, ch, cw, width, height,
			that = $( this ).resizable( "instance" ),
			o = that.options,
			el = that.element,
			oc = o.containment,
			ce = ( oc instanceof $ ) ?
				oc.get( 0 ) :
				( /parent/.test( oc ) ) ? el.parent().get( 0 ) : oc;

		if ( !ce ) {
			return;
		}

		that.containerElement = $( ce );

		if ( /document/.test( oc ) || oc === document ) {
			that.containerOffset = {
				left: 0,
				top: 0
			};
			that.containerPosition = {
				left: 0,
				top: 0
			};

			that.parentData = {
				element: $( document ),
				left: 0,
				top: 0,
				width: $( document ).width(),
				height: $( document ).height() || document.body.parentNode.scrollHeight
			};
		} else {
			element = $( ce );
			p = [];
			$( [ "Top", "Right", "Left", "Bottom" ] ).each( function( i, name ) {
				p[ i ] = that._num( element.css( "padding" + name ) );
			} );

			that.containerOffset = element.offset();
			that.containerPosition = element.position();
			that.containerSize = {
				height: ( element.innerHeight() - p[ 3 ] ),
				width: ( element.innerWidth() - p[ 1 ] )
			};

			co = that.containerOffset;
			ch = that.containerSize.height;
			cw = that.containerSize.width;
			width = ( that._hasScroll ( ce, "left" ) ? ce.scrollWidth : cw );
			height = ( that._hasScroll ( ce ) ? ce.scrollHeight : ch ) ;

			that.parentData = {
				element: ce,
				left: co.left,
				top: co.top,
				width: width,
				height: height
			};
		}
	},

	resize: function( event ) {
		var woset, hoset, isParent, isOffsetRelative,
			that = $( this ).resizable( "instance" ),
			o = that.options,
			co = that.containerOffset,
			cp = that.position,
			pRatio = that._aspectRatio || event.shiftKey,
			cop = {
				top: 0,
				left: 0
			},
			ce = that.containerElement,
			continueResize = true;

		if ( ce[ 0 ] !== document && ( /static/ ).test( ce.css( "position" ) ) ) {
			cop = co;
		}

		if ( cp.left < ( that._helper ? co.left : 0 ) ) {
			that.size.width = that.size.width +
				( that._helper ?
					( that.position.left - co.left ) :
					( that.position.left - cop.left ) );

			if ( pRatio ) {
				that.size.height = that.size.width / that.aspectRatio;
				continueResize = false;
			}
			that.position.left = o.helper ? co.left : 0;
		}

		if ( cp.top < ( that._helper ? co.top : 0 ) ) {
			that.size.height = that.size.height +
				( that._helper ?
					( that.position.top - co.top ) :
					that.position.top );

			if ( pRatio ) {
				that.size.width = that.size.height * that.aspectRatio;
				continueResize = false;
			}
			that.position.top = that._helper ? co.top : 0;
		}

		isParent = that.containerElement.get( 0 ) === that.element.parent().get( 0 );
		isOffsetRelative = /relative|absolute/.test( that.containerElement.css( "position" ) );

		if ( isParent && isOffsetRelative ) {
			that.offset.left = that.parentData.left + that.position.left;
			that.offset.top = that.parentData.top + that.position.top;
		} else {
			that.offset.left = that.element.offset().left;
			that.offset.top = that.element.offset().top;
		}

		woset = Math.abs( that.sizeDiff.width +
			( that._helper ?
				that.offset.left - cop.left :
				( that.offset.left - co.left ) ) );

		hoset = Math.abs( that.sizeDiff.height +
			( that._helper ?
				that.offset.top - cop.top :
				( that.offset.top - co.top ) ) );

		if ( woset + that.size.width >= that.parentData.width ) {
			that.size.width = that.parentData.width - woset;
			if ( pRatio ) {
				that.size.height = that.size.width / that.aspectRatio;
				continueResize = false;
			}
		}

		if ( hoset + that.size.height >= that.parentData.height ) {
			that.size.height = that.parentData.height - hoset;
			if ( pRatio ) {
				that.size.width = that.size.height * that.aspectRatio;
				continueResize = false;
			}
		}

		if ( !continueResize ) {
			that.position.left = that.prevPosition.left;
			that.position.top = that.prevPosition.top;
			that.size.width = that.prevSize.width;
			that.size.height = that.prevSize.height;
		}
	},

	stop: function() {
		var that = $( this ).resizable( "instance" ),
			o = that.options,
			co = that.containerOffset,
			cop = that.containerPosition,
			ce = that.containerElement,
			helper = $( that.helper ),
			ho = helper.offset(),
			w = helper.outerWidth() - that.sizeDiff.width,
			h = helper.outerHeight() - that.sizeDiff.height;

		if ( that._helper && !o.animate && ( /relative/ ).test( ce.css( "position" ) ) ) {
			$( this ).css( {
				left: ho.left - cop.left - co.left,
				width: w,
				height: h
			} );
		}

		if ( that._helper && !o.animate && ( /static/ ).test( ce.css( "position" ) ) ) {
			$( this ).css( {
				left: ho.left - cop.left - co.left,
				width: w,
				height: h
			} );
		}
	}
} );

$.ui.plugin.add( "resizable", "alsoResize", {

	start: function() {
		var that = $( this ).resizable( "instance" ),
			o = that.options;

		$( o.alsoResize ).each( function() {
			var el = $( this );
			el.data( "ui-resizable-alsoresize", {
				width: parseFloat( el.width() ), height: parseFloat( el.height() ),
				left: parseFloat( el.css( "left" ) ), top: parseFloat( el.css( "top" ) )
			} );
		} );
	},

	resize: function( event, ui ) {
		var that = $( this ).resizable( "instance" ),
			o = that.options,
			os = that.originalSize,
			op = that.originalPosition,
			delta = {
				height: ( that.size.height - os.height ) || 0,
				width: ( that.size.width - os.width ) || 0,
				top: ( that.position.top - op.top ) || 0,
				left: ( that.position.left - op.left ) || 0
			};

			$( o.alsoResize ).each( function() {
				var el = $( this ), start = $( this ).data( "ui-resizable-alsoresize" ), style = {},
					css = el.parents( ui.originalElement[ 0 ] ).length ?
							[ "width", "height" ] :
							[ "width", "height", "top", "left" ];

				$.each( css, function( i, prop ) {
					var sum = ( start[ prop ] || 0 ) + ( delta[ prop ] || 0 );
					if ( sum && sum >= 0 ) {
						style[ prop ] = sum || null;
					}
				} );

				el.css( style );
			} );
	},

	stop: function() {
		$( this ).removeData( "ui-resizable-alsoresize" );
	}
} );

$.ui.plugin.add( "resizable", "ghost", {

	start: function() {

		var that = $( this ).resizable( "instance" ), cs = that.size;

		that.ghost = that.originalElement.clone();
		that.ghost.css( {
			opacity: 0.25,
			display: "block",
			position: "relative",
			height: cs.height,
			width: cs.width,
			margin: 0,
			left: 0,
			top: 0
		} );

		that._addClass( that.ghost, "ui-resizable-ghost" );

		// DEPRECATED
		// TODO: remove after 1.12
		if ( $.uiBackCompat !== false && typeof that.options.ghost === "string" ) {

			// Ghost option
			that.ghost.addClass( this.options.ghost );
		}

		that.ghost.appendTo( that.helper );

	},

	resize: function() {
		var that = $( this ).resizable( "instance" );
		if ( that.ghost ) {
			that.ghost.css( {
				position: "relative",
				height: that.size.height,
				width: that.size.width
			} );
		}
	},

	stop: function() {
		var that = $( this ).resizable( "instance" );
		if ( that.ghost && that.helper ) {
			that.helper.get( 0 ).removeChild( that.ghost.get( 0 ) );
		}
	}

} );

$.ui.plugin.add( "resizable", "grid", {

	resize: function() {
		var outerDimensions,
			that = $( this ).resizable( "instance" ),
			o = that.options,
			cs = that.size,
			os = that.originalSize,
			op = that.originalPosition,
			a = that.axis,
			grid = typeof o.grid === "number" ? [ o.grid, o.grid ] : o.grid,
			gridX = ( grid[ 0 ] || 1 ),
			gridY = ( grid[ 1 ] || 1 ),
			ox = Math.round( ( cs.width - os.width ) / gridX ) * gridX,
			oy = Math.round( ( cs.height - os.height ) / gridY ) * gridY,
			newWidth = os.width + ox,
			newHeight = os.height + oy,
			isMaxWidth = o.maxWidth && ( o.maxWidth < newWidth ),
			isMaxHeight = o.maxHeight && ( o.maxHeight < newHeight ),
			isMinWidth = o.minWidth && ( o.minWidth > newWidth ),
			isMinHeight = o.minHeight && ( o.minHeight > newHeight );

		o.grid = grid;

		if ( isMinWidth ) {
			newWidth += gridX;
		}
		if ( isMinHeight ) {
			newHeight += gridY;
		}
		if ( isMaxWidth ) {
			newWidth -= gridX;
		}
		if ( isMaxHeight ) {
			newHeight -= gridY;
		}

		if ( /^(se|s|e)$/.test( a ) ) {
			that.size.width = newWidth;
			that.size.height = newHeight;
		} else if ( /^(ne)$/.test( a ) ) {
			that.size.width = newWidth;
			that.size.height = newHeight;
			that.position.top = op.top - oy;
		} else if ( /^(sw)$/.test( a ) ) {
			that.size.width = newWidth;
			that.size.height = newHeight;
			that.position.left = op.left - ox;
		} else {
			if ( newHeight - gridY <= 0 || newWidth - gridX <= 0 ) {
				outerDimensions = that._getPaddingPlusBorderDimensions( this );
			}

			if ( newHeight - gridY > 0 ) {
				that.size.height = newHeight;
				that.position.top = op.top - oy;
			} else {
				newHeight = gridY - outerDimensions.height;
				that.size.height = newHeight;
				that.position.top = op.top + os.height - newHeight;
			}
			if ( newWidth - gridX > 0 ) {
				that.size.width = newWidth;
				that.position.left = op.left - ox;
			} else {
				newWidth = gridX - outerDimensions.width;
				that.size.width = newWidth;
				that.position.left = op.left + os.width - newWidth;
			}
		}
	}

} );

return $.ui.resizable;

} ) );


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pdfjs-dist/build/pdf", [], factory);
	else if(typeof exports === 'object')
		exports["pdfjs-dist/build/pdf"] = factory();
	else
		root["pdfjs-dist/build/pdf"] = root.pdfjsDistBuildPdf = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __w_pdfjs_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__w_pdfjs_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__w_pdfjs_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__w_pdfjs_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__w_pdfjs_require__.d = function(exports, name, getter) {
/******/ 		if(!__w_pdfjs_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__w_pdfjs_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__w_pdfjs_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__w_pdfjs_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__w_pdfjs_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __w_pdfjs_require__(__w_pdfjs_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var compatibility = __w_pdfjs_require__(13);
var globalScope = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this;
var FONT_IDENTITY_MATRIX = [
 0.001,
 0,
 0,
 0.001,
 0,
 0
];
var TextRenderingMode = {
 FILL: 0,
 STROKE: 1,
 FILL_STROKE: 2,
 INVISIBLE: 3,
 FILL_ADD_TO_PATH: 4,
 STROKE_ADD_TO_PATH: 5,
 FILL_STROKE_ADD_TO_PATH: 6,
 ADD_TO_PATH: 7,
 FILL_STROKE_MASK: 3,
 ADD_TO_PATH_FLAG: 4
};
var ImageKind = {
 GRAYSCALE_1BPP: 1,
 RGB_24BPP: 2,
 RGBA_32BPP: 3
};
var AnnotationType = {
 TEXT: 1,
 LINK: 2,
 FREETEXT: 3,
 LINE: 4,
 SQUARE: 5,
 CIRCLE: 6,
 POLYGON: 7,
 POLYLINE: 8,
 HIGHLIGHT: 9,
 UNDERLINE: 10,
 SQUIGGLY: 11,
 STRIKEOUT: 12,
 STAMP: 13,
 CARET: 14,
 INK: 15,
 POPUP: 16,
 FILEATTACHMENT: 17,
 SOUND: 18,
 MOVIE: 19,
 WIDGET: 20,
 SCREEN: 21,
 PRINTERMARK: 22,
 TRAPNET: 23,
 WATERMARK: 24,
 THREED: 25,
 REDACT: 26
};
var AnnotationFlag = {
 INVISIBLE: 0x01,
 HIDDEN: 0x02,
 PRINT: 0x04,
 NOZOOM: 0x08,
 NOROTATE: 0x10,
 NOVIEW: 0x20,
 READONLY: 0x40,
 LOCKED: 0x80,
 TOGGLENOVIEW: 0x100,
 LOCKEDCONTENTS: 0x200
};
var AnnotationFieldFlag = {
 READONLY: 0x0000001,
 REQUIRED: 0x0000002,
 NOEXPORT: 0x0000004,
 MULTILINE: 0x0001000,
 PASSWORD: 0x0002000,
 NOTOGGLETOOFF: 0x0004000,
 RADIO: 0x0008000,
 PUSHBUTTON: 0x0010000,
 COMBO: 0x0020000,
 EDIT: 0x0040000,
 SORT: 0x0080000,
 FILESELECT: 0x0100000,
 MULTISELECT: 0x0200000,
 DONOTSPELLCHECK: 0x0400000,
 DONOTSCROLL: 0x0800000,
 COMB: 0x1000000,
 RICHTEXT: 0x2000000,
 RADIOSINUNISON: 0x2000000,
 COMMITONSELCHANGE: 0x4000000
};
var AnnotationBorderStyleType = {
 SOLID: 1,
 DASHED: 2,
 BEVELED: 3,
 INSET: 4,
 UNDERLINE: 5
};
var StreamType = {
 UNKNOWN: 0,
 FLATE: 1,
 LZW: 2,
 DCT: 3,
 JPX: 4,
 JBIG: 5,
 A85: 6,
 AHX: 7,
 CCF: 8,
 RL: 9
};
var FontType = {
 UNKNOWN: 0,
 TYPE1: 1,
 TYPE1C: 2,
 CIDFONTTYPE0: 3,
 CIDFONTTYPE0C: 4,
 TRUETYPE: 5,
 CIDFONTTYPE2: 6,
 TYPE3: 7,
 OPENTYPE: 8,
 TYPE0: 9,
 MMTYPE1: 10
};
var VERBOSITY_LEVELS = {
 errors: 0,
 warnings: 1,
 infos: 5
};
var CMapCompressionType = {
 NONE: 0,
 BINARY: 1,
 STREAM: 2
};
var OPS = {
 dependency: 1,
 setLineWidth: 2,
 setLineCap: 3,
 setLineJoin: 4,
 setMiterLimit: 5,
 setDash: 6,
 setRenderingIntent: 7,
 setFlatness: 8,
 setGState: 9,
 save: 10,
 restore: 11,
 transform: 12,
 moveTo: 13,
 lineTo: 14,
 curveTo: 15,
 curveTo2: 16,
 curveTo3: 17,
 closePath: 18,
 rectangle: 19,
 stroke: 20,
 closeStroke: 21,
 fill: 22,
 eoFill: 23,
 fillStroke: 24,
 eoFillStroke: 25,
 closeFillStroke: 26,
 closeEOFillStroke: 27,
 endPath: 28,
 clip: 29,
 eoClip: 30,
 beginText: 31,
 endText: 32,
 setCharSpacing: 33,
 setWordSpacing: 34,
 setHScale: 35,
 setLeading: 36,
 setFont: 37,
 setTextRenderingMode: 38,
 setTextRise: 39,
 moveText: 40,
 setLeadingMoveText: 41,
 setTextMatrix: 42,
 nextLine: 43,
 showText: 44,
 showSpacedText: 45,
 nextLineShowText: 46,
 nextLineSetSpacingShowText: 47,
 setCharWidth: 48,
 setCharWidthAndBounds: 49,
 setStrokeColorSpace: 50,
 setFillColorSpace: 51,
 setStrokeColor: 52,
 setStrokeColorN: 53,
 setFillColor: 54,
 setFillColorN: 55,
 setStrokeGray: 56,
 setFillGray: 57,
 setStrokeRGBColor: 58,
 setFillRGBColor: 59,
 setStrokeCMYKColor: 60,
 setFillCMYKColor: 61,
 shadingFill: 62,
 beginInlineImage: 63,
 beginImageData: 64,
 endInlineImage: 65,
 paintXObject: 66,
 markPoint: 67,
 markPointProps: 68,
 beginMarkedContent: 69,
 beginMarkedContentProps: 70,
 endMarkedContent: 71,
 beginCompat: 72,
 endCompat: 73,
 paintFormXObjectBegin: 74,
 paintFormXObjectEnd: 75,
 beginGroup: 76,
 endGroup: 77,
 beginAnnotations: 78,
 endAnnotations: 79,
 beginAnnotation: 80,
 endAnnotation: 81,
 paintJpegXObject: 82,
 paintImageMaskXObject: 83,
 paintImageMaskXObjectGroup: 84,
 paintImageXObject: 85,
 paintInlineImageXObject: 86,
 paintInlineImageXObjectGroup: 87,
 paintImageXObjectRepeat: 88,
 paintImageMaskXObjectRepeat: 89,
 paintSolidColorImageMask: 90,
 constructPath: 91
};
var verbosity = VERBOSITY_LEVELS.warnings;
function setVerbosityLevel(level) {
 verbosity = level;
}
function getVerbosityLevel() {
 return verbosity;
}
function info(msg) {
 if (verbosity >= VERBOSITY_LEVELS.infos) {
  console.log('Info: ' + msg);
 }
}
function warn(msg) {
 if (verbosity >= VERBOSITY_LEVELS.warnings) {
  console.log('Warning: ' + msg);
 }
}
function deprecated(details) {
 console.log('Deprecated API usage: ' + details);
}
function error(msg) {
 if (verbosity >= VERBOSITY_LEVELS.errors) {
  console.log('Error: ' + msg);
  console.log(backtrace());
 }
 throw new Error(msg);
}
function backtrace() {
 try {
  throw new Error();
 } catch (e) {
  return e.stack ? e.stack.split('\n').slice(2).join('\n') : '';
 }
}
function assert(cond, msg) {
 if (!cond) {
  error(msg);
 }
}
var UNSUPPORTED_FEATURES = {
 unknown: 'unknown',
 forms: 'forms',
 javaScript: 'javaScript',
 smask: 'smask',
 shadingPattern: 'shadingPattern',
 font: 'font'
};
function isSameOrigin(baseUrl, otherUrl) {
 try {
  var base = new URL(baseUrl);
  if (!base.origin || base.origin === 'null') {
   return false;
  }
 } catch (e) {
  return false;
 }
 var other = new URL(otherUrl, base);
 return base.origin === other.origin;
}
function isValidProtocol(url) {
 if (!url) {
  return false;
 }
 switch (url.protocol) {
 case 'http:':
 case 'https:':
 case 'ftp:':
 case 'mailto:':
 case 'tel:':
  return true;
 default:
  return false;
 }
}
function createValidAbsoluteUrl(url, baseUrl) {
 if (!url) {
  return null;
 }
 try {
  var absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);
  if (isValidProtocol(absoluteUrl)) {
   return absoluteUrl;
  }
 } catch (ex) {
 }
 return null;
}
function shadow(obj, prop, value) {
 Object.defineProperty(obj, prop, {
  value: value,
  enumerable: true,
  configurable: true,
  writable: false
 });
 return value;
}
function getLookupTableFactory(initializer) {
 var lookup;
 return function () {
  if (initializer) {
   lookup = Object.create(null);
   initializer(lookup);
   initializer = null;
  }
  return lookup;
 };
}
var PasswordResponses = {
 NEED_PASSWORD: 1,
 INCORRECT_PASSWORD: 2
};
var PasswordException = function PasswordExceptionClosure() {
 function PasswordException(msg, code) {
  this.name = 'PasswordException';
  this.message = msg;
  this.code = code;
 }
 PasswordException.prototype = new Error();
 PasswordException.constructor = PasswordException;
 return PasswordException;
}();
var UnknownErrorException = function UnknownErrorExceptionClosure() {
 function UnknownErrorException(msg, details) {
  this.name = 'UnknownErrorException';
  this.message = msg;
  this.details = details;
 }
 UnknownErrorException.prototype = new Error();
 UnknownErrorException.constructor = UnknownErrorException;
 return UnknownErrorException;
}();
var InvalidPDFException = function InvalidPDFExceptionClosure() {
 function InvalidPDFException(msg) {
  this.name = 'InvalidPDFException';
  this.message = msg;
 }
 InvalidPDFException.prototype = new Error();
 InvalidPDFException.constructor = InvalidPDFException;
 return InvalidPDFException;
}();
var MissingPDFException = function MissingPDFExceptionClosure() {
 function MissingPDFException(msg) {
  this.name = 'MissingPDFException';
  this.message = msg;
 }
 MissingPDFException.prototype = new Error();
 MissingPDFException.constructor = MissingPDFException;
 return MissingPDFException;
}();
var UnexpectedResponseException = function UnexpectedResponseExceptionClosure() {
 function UnexpectedResponseException(msg, status) {
  this.name = 'UnexpectedResponseException';
  this.message = msg;
  this.status = status;
 }
 UnexpectedResponseException.prototype = new Error();
 UnexpectedResponseException.constructor = UnexpectedResponseException;
 return UnexpectedResponseException;
}();
var NotImplementedException = function NotImplementedExceptionClosure() {
 function NotImplementedException(msg) {
  this.message = msg;
 }
 NotImplementedException.prototype = new Error();
 NotImplementedException.prototype.name = 'NotImplementedException';
 NotImplementedException.constructor = NotImplementedException;
 return NotImplementedException;
}();
var MissingDataException = function MissingDataExceptionClosure() {
 function MissingDataException(begin, end) {
  this.begin = begin;
  this.end = end;
  this.message = 'Missing data [' + begin + ', ' + end + ')';
 }
 MissingDataException.prototype = new Error();
 MissingDataException.prototype.name = 'MissingDataException';
 MissingDataException.constructor = MissingDataException;
 return MissingDataException;
}();
var XRefParseException = function XRefParseExceptionClosure() {
 function XRefParseException(msg) {
  this.message = msg;
 }
 XRefParseException.prototype = new Error();
 XRefParseException.prototype.name = 'XRefParseException';
 XRefParseException.constructor = XRefParseException;
 return XRefParseException;
}();
var NullCharactersRegExp = /\x00/g;
function removeNullCharacters(str) {
 if (typeof str !== 'string') {
  warn('The argument for removeNullCharacters must be a string.');
  return str;
 }
 return str.replace(NullCharactersRegExp, '');
}
function bytesToString(bytes) {
 assert(bytes !== null && typeof bytes === 'object' && bytes.length !== undefined, 'Invalid argument for bytesToString');
 var length = bytes.length;
 var MAX_ARGUMENT_COUNT = 8192;
 if (length < MAX_ARGUMENT_COUNT) {
  return String.fromCharCode.apply(null, bytes);
 }
 var strBuf = [];
 for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
  var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
  var chunk = bytes.subarray(i, chunkEnd);
  strBuf.push(String.fromCharCode.apply(null, chunk));
 }
 return strBuf.join('');
}
function stringToBytes(str) {
 assert(typeof str === 'string', 'Invalid argument for stringToBytes');
 var length = str.length;
 var bytes = new Uint8Array(length);
 for (var i = 0; i < length; ++i) {
  bytes[i] = str.charCodeAt(i) & 0xFF;
 }
 return bytes;
}
function arrayByteLength(arr) {
 if (arr.length !== undefined) {
  return arr.length;
 }
 assert(arr.byteLength !== undefined);
 return arr.byteLength;
}
function arraysToBytes(arr) {
 if (arr.length === 1 && arr[0] instanceof Uint8Array) {
  return arr[0];
 }
 var resultLength = 0;
 var i, ii = arr.length;
 var item, itemLength;
 for (i = 0; i < ii; i++) {
  item = arr[i];
  itemLength = arrayByteLength(item);
  resultLength += itemLength;
 }
 var pos = 0;
 var data = new Uint8Array(resultLength);
 for (i = 0; i < ii; i++) {
  item = arr[i];
  if (!(item instanceof Uint8Array)) {
   if (typeof item === 'string') {
    item = stringToBytes(item);
   } else {
    item = new Uint8Array(item);
   }
  }
  itemLength = item.byteLength;
  data.set(item, pos);
  pos += itemLength;
 }
 return data;
}
function string32(value) {
 return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
}
function log2(x) {
 var n = 1, i = 0;
 while (x > n) {
  n <<= 1;
  i++;
 }
 return i;
}
function readInt8(data, start) {
 return data[start] << 24 >> 24;
}
function readUint16(data, offset) {
 return data[offset] << 8 | data[offset + 1];
}
function readUint32(data, offset) {
 return (data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3]) >>> 0;
}
function isLittleEndian() {
 var buffer8 = new Uint8Array(2);
 buffer8[0] = 1;
 var buffer16 = new Uint16Array(buffer8.buffer);
 return buffer16[0] === 1;
}
function isEvalSupported() {
 try {
  new Function('');
  return true;
 } catch (e) {
  return false;
 }
}
var Uint32ArrayView = function Uint32ArrayViewClosure() {
 function Uint32ArrayView(buffer, length) {
  this.buffer = buffer;
  this.byteLength = buffer.length;
  this.length = length === undefined ? this.byteLength >> 2 : length;
  ensureUint32ArrayViewProps(this.length);
 }
 Uint32ArrayView.prototype = Object.create(null);
 var uint32ArrayViewSetters = 0;
 function createUint32ArrayProp(index) {
  return {
   get: function () {
    var buffer = this.buffer, offset = index << 2;
    return (buffer[offset] | buffer[offset + 1] << 8 | buffer[offset + 2] << 16 | buffer[offset + 3] << 24) >>> 0;
   },
   set: function (value) {
    var buffer = this.buffer, offset = index << 2;
    buffer[offset] = value & 255;
    buffer[offset + 1] = value >> 8 & 255;
    buffer[offset + 2] = value >> 16 & 255;
    buffer[offset + 3] = value >>> 24 & 255;
   }
  };
 }
 function ensureUint32ArrayViewProps(length) {
  while (uint32ArrayViewSetters < length) {
   Object.defineProperty(Uint32ArrayView.prototype, uint32ArrayViewSetters, createUint32ArrayProp(uint32ArrayViewSetters));
   uint32ArrayViewSetters++;
  }
 }
 return Uint32ArrayView;
}();
exports.Uint32ArrayView = Uint32ArrayView;
var IDENTITY_MATRIX = [
 1,
 0,
 0,
 1,
 0,
 0
];
var Util = function UtilClosure() {
 function Util() {
 }
 var rgbBuf = [
  'rgb(',
  0,
  ',',
  0,
  ',',
  0,
  ')'
 ];
 Util.makeCssRgb = function Util_makeCssRgb(r, g, b) {
  rgbBuf[1] = r;
  rgbBuf[3] = g;
  rgbBuf[5] = b;
  return rgbBuf.join('');
 };
 Util.transform = function Util_transform(m1, m2) {
  return [
   m1[0] * m2[0] + m1[2] * m2[1],
   m1[1] * m2[0] + m1[3] * m2[1],
   m1[0] * m2[2] + m1[2] * m2[3],
   m1[1] * m2[2] + m1[3] * m2[3],
   m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
   m1[1] * m2[4] + m1[3] * m2[5] + m1[5]
  ];
 };
 Util.applyTransform = function Util_applyTransform(p, m) {
  var xt = p[0] * m[0] + p[1] * m[2] + m[4];
  var yt = p[0] * m[1] + p[1] * m[3] + m[5];
  return [
   xt,
   yt
  ];
 };
 Util.applyInverseTransform = function Util_applyInverseTransform(p, m) {
  var d = m[0] * m[3] - m[1] * m[2];
  var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
  var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
  return [
   xt,
   yt
  ];
 };
 Util.getAxialAlignedBoundingBox = function Util_getAxialAlignedBoundingBox(r, m) {
  var p1 = Util.applyTransform(r, m);
  var p2 = Util.applyTransform(r.slice(2, 4), m);
  var p3 = Util.applyTransform([
   r[0],
   r[3]
  ], m);
  var p4 = Util.applyTransform([
   r[2],
   r[1]
  ], m);
  return [
   Math.min(p1[0], p2[0], p3[0], p4[0]),
   Math.min(p1[1], p2[1], p3[1], p4[1]),
   Math.max(p1[0], p2[0], p3[0], p4[0]),
   Math.max(p1[1], p2[1], p3[1], p4[1])
  ];
 };
 Util.inverseTransform = function Util_inverseTransform(m) {
  var d = m[0] * m[3] - m[1] * m[2];
  return [
   m[3] / d,
   -m[1] / d,
   -m[2] / d,
   m[0] / d,
   (m[2] * m[5] - m[4] * m[3]) / d,
   (m[4] * m[1] - m[5] * m[0]) / d
  ];
 };
 Util.apply3dTransform = function Util_apply3dTransform(m, v) {
  return [
   m[0] * v[0] + m[1] * v[1] + m[2] * v[2],
   m[3] * v[0] + m[4] * v[1] + m[5] * v[2],
   m[6] * v[0] + m[7] * v[1] + m[8] * v[2]
  ];
 };
 Util.singularValueDecompose2dScale = function Util_singularValueDecompose2dScale(m) {
  var transpose = [
   m[0],
   m[2],
   m[1],
   m[3]
  ];
  var a = m[0] * transpose[0] + m[1] * transpose[2];
  var b = m[0] * transpose[1] + m[1] * transpose[3];
  var c = m[2] * transpose[0] + m[3] * transpose[2];
  var d = m[2] * transpose[1] + m[3] * transpose[3];
  var first = (a + d) / 2;
  var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
  var sx = first + second || 1;
  var sy = first - second || 1;
  return [
   Math.sqrt(sx),
   Math.sqrt(sy)
  ];
 };
 Util.normalizeRect = function Util_normalizeRect(rect) {
  var r = rect.slice(0);
  if (rect[0] > rect[2]) {
   r[0] = rect[2];
   r[2] = rect[0];
  }
  if (rect[1] > rect[3]) {
   r[1] = rect[3];
   r[3] = rect[1];
  }
  return r;
 };
 Util.intersect = function Util_intersect(rect1, rect2) {
  function compare(a, b) {
   return a - b;
  }
  var orderedX = [
    rect1[0],
    rect1[2],
    rect2[0],
    rect2[2]
   ].sort(compare), orderedY = [
    rect1[1],
    rect1[3],
    rect2[1],
    rect2[3]
   ].sort(compare), result = [];
  rect1 = Util.normalizeRect(rect1);
  rect2 = Util.normalizeRect(rect2);
  if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
   result[0] = orderedX[1];
   result[2] = orderedX[2];
  } else {
   return false;
  }
  if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
   result[1] = orderedY[1];
   result[3] = orderedY[2];
  } else {
   return false;
  }
  return result;
 };
 Util.sign = function Util_sign(num) {
  return num < 0 ? -1 : 1;
 };
 var ROMAN_NUMBER_MAP = [
  '',
  'C',
  'CC',
  'CCC',
  'CD',
  'D',
  'DC',
  'DCC',
  'DCCC',
  'CM',
  '',
  'X',
  'XX',
  'XXX',
  'XL',
  'L',
  'LX',
  'LXX',
  'LXXX',
  'XC',
  '',
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX'
 ];
 Util.toRoman = function Util_toRoman(number, lowerCase) {
  assert(isInt(number) && number > 0, 'The number should be a positive integer.');
  var pos, romanBuf = [];
  while (number >= 1000) {
   number -= 1000;
   romanBuf.push('M');
  }
  pos = number / 100 | 0;
  number %= 100;
  romanBuf.push(ROMAN_NUMBER_MAP[pos]);
  pos = number / 10 | 0;
  number %= 10;
  romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
  romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);
  var romanStr = romanBuf.join('');
  return lowerCase ? romanStr.toLowerCase() : romanStr;
 };
 Util.appendToArray = function Util_appendToArray(arr1, arr2) {
  Array.prototype.push.apply(arr1, arr2);
 };
 Util.prependToArray = function Util_prependToArray(arr1, arr2) {
  Array.prototype.unshift.apply(arr1, arr2);
 };
 Util.extendObj = function extendObj(obj1, obj2) {
  for (var key in obj2) {
   obj1[key] = obj2[key];
  }
 };
 Util.getInheritableProperty = function Util_getInheritableProperty(dict, name, getArray) {
  while (dict && !dict.has(name)) {
   dict = dict.get('Parent');
  }
  if (!dict) {
   return null;
  }
  return getArray ? dict.getArray(name) : dict.get(name);
 };
 Util.inherit = function Util_inherit(sub, base, prototype) {
  sub.prototype = Object.create(base.prototype);
  sub.prototype.constructor = sub;
  for (var prop in prototype) {
   sub.prototype[prop] = prototype[prop];
  }
 };
 Util.loadScript = function Util_loadScript(src, callback) {
  var script = document.createElement('script');
  var loaded = false;
  script.setAttribute('src', src);
  if (callback) {
   script.onload = function () {
    if (!loaded) {
     callback();
    }
    loaded = true;
   };
  }
  document.getElementsByTagName('head')[0].appendChild(script);
 };
 return Util;
}();
var PageViewport = function PageViewportClosure() {
 function PageViewport(viewBox, scale, rotation, offsetX, offsetY, dontFlip) {
  this.viewBox = viewBox;
  this.scale = scale;
  this.rotation = rotation;
  this.offsetX = offsetX;
  this.offsetY = offsetY;
  var centerX = (viewBox[2] + viewBox[0]) / 2;
  var centerY = (viewBox[3] + viewBox[1]) / 2;
  var rotateA, rotateB, rotateC, rotateD;
  rotation = rotation % 360;
  rotation = rotation < 0 ? rotation + 360 : rotation;
  switch (rotation) {
  case 180:
   rotateA = -1;
   rotateB = 0;
   rotateC = 0;
   rotateD = 1;
   break;
  case 90:
   rotateA = 0;
   rotateB = 1;
   rotateC = 1;
   rotateD = 0;
   break;
  case 270:
   rotateA = 0;
   rotateB = -1;
   rotateC = -1;
   rotateD = 0;
   break;
  default:
   rotateA = 1;
   rotateB = 0;
   rotateC = 0;
   rotateD = -1;
   break;
  }
  if (dontFlip) {
   rotateC = -rotateC;
   rotateD = -rotateD;
  }
  var offsetCanvasX, offsetCanvasY;
  var width, height;
  if (rotateA === 0) {
   offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
   offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
   width = Math.abs(viewBox[3] - viewBox[1]) * scale;
   height = Math.abs(viewBox[2] - viewBox[0]) * scale;
  } else {
   offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
   offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
   width = Math.abs(viewBox[2] - viewBox[0]) * scale;
   height = Math.abs(viewBox[3] - viewBox[1]) * scale;
  }
  this.transform = [
   rotateA * scale,
   rotateB * scale,
   rotateC * scale,
   rotateD * scale,
   offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY,
   offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY
  ];
  this.width = width;
  this.height = height;
  this.fontScale = scale;
 }
 PageViewport.prototype = {
  clone: function PageViewPort_clone(args) {
   args = args || {};
   var scale = 'scale' in args ? args.scale : this.scale;
   var rotation = 'rotation' in args ? args.rotation : this.rotation;
   return new PageViewport(this.viewBox.slice(), scale, rotation, this.offsetX, this.offsetY, args.dontFlip);
  },
  convertToViewportPoint: function PageViewport_convertToViewportPoint(x, y) {
   return Util.applyTransform([
    x,
    y
   ], this.transform);
  },
  convertToViewportRectangle: function PageViewport_convertToViewportRectangle(rect) {
   var tl = Util.applyTransform([
    rect[0],
    rect[1]
   ], this.transform);
   var br = Util.applyTransform([
    rect[2],
    rect[3]
   ], this.transform);
   return [
    tl[0],
    tl[1],
    br[0],
    br[1]
   ];
  },
  convertToPdfPoint: function PageViewport_convertToPdfPoint(x, y) {
   return Util.applyInverseTransform([
    x,
    y
   ], this.transform);
  }
 };
 return PageViewport;
}();
var PDFStringTranslateTable = [
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0x2D8,
 0x2C7,
 0x2C6,
 0x2D9,
 0x2DD,
 0x2DB,
 0x2DA,
 0x2DC,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0,
 0x2022,
 0x2020,
 0x2021,
 0x2026,
 0x2014,
 0x2013,
 0x192,
 0x2044,
 0x2039,
 0x203A,
 0x2212,
 0x2030,
 0x201E,
 0x201C,
 0x201D,
 0x2018,
 0x2019,
 0x201A,
 0x2122,
 0xFB01,
 0xFB02,
 0x141,
 0x152,
 0x160,
 0x178,
 0x17D,
 0x131,
 0x142,
 0x153,
 0x161,
 0x17E,
 0,
 0x20AC
];
function stringToPDFString(str) {
 var i, n = str.length, strBuf = [];
 if (str[0] === '\xFE' && str[1] === '\xFF') {
  for (i = 2; i < n; i += 2) {
   strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
  }
 } else {
  for (i = 0; i < n; ++i) {
   var code = PDFStringTranslateTable[str.charCodeAt(i)];
   strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
  }
 }
 return strBuf.join('');
}
function stringToUTF8String(str) {
 return decodeURIComponent(escape(str));
}
function utf8StringToString(str) {
 return unescape(encodeURIComponent(str));
}
function isEmptyObj(obj) {
 for (var key in obj) {
  return false;
 }
 return true;
}
function isBool(v) {
 return typeof v === 'boolean';
}
function isInt(v) {
 return typeof v === 'number' && (v | 0) === v;
}
function isNum(v) {
 return typeof v === 'number';
}
function isString(v) {
 return typeof v === 'string';
}
function isArray(v) {
 return v instanceof Array;
}
function isArrayBuffer(v) {
 return typeof v === 'object' && v !== null && v.byteLength !== undefined;
}
function isSpace(ch) {
 return ch === 0x20 || ch === 0x09 || ch === 0x0D || ch === 0x0A;
}
function isNodeJS() {
 if (typeof __pdfjsdev_webpack__ === 'undefined') {
  return typeof process === 'object' && process + '' === '[object process]';
 }
 return false;
}
function createPromiseCapability() {
 var capability = {};
 capability.promise = new Promise(function (resolve, reject) {
  capability.resolve = resolve;
  capability.reject = reject;
 });
 return capability;
}
var StatTimer = function StatTimerClosure() {
 function rpad(str, pad, length) {
  while (str.length < length) {
   str += pad;
  }
  return str;
 }
 function StatTimer() {
  this.started = Object.create(null);
  this.times = [];
  this.enabled = true;
 }
 StatTimer.prototype = {
  time: function StatTimer_time(name) {
   if (!this.enabled) {
    return;
   }
   if (name in this.started) {
    warn('Timer is already running for ' + name);
   }
   this.started[name] = Date.now();
  },
  timeEnd: function StatTimer_timeEnd(name) {
   if (!this.enabled) {
    return;
   }
   if (!(name in this.started)) {
    warn('Timer has not been started for ' + name);
   }
   this.times.push({
    'name': name,
    'start': this.started[name],
    'end': Date.now()
   });
   delete this.started[name];
  },
  toString: function StatTimer_toString() {
   var i, ii;
   var times = this.times;
   var out = '';
   var longest = 0;
   for (i = 0, ii = times.length; i < ii; ++i) {
    var name = times[i]['name'];
    if (name.length > longest) {
     longest = name.length;
    }
   }
   for (i = 0, ii = times.length; i < ii; ++i) {
    var span = times[i];
    var duration = span.end - span.start;
    out += rpad(span['name'], ' ', longest) + ' ' + duration + 'ms\n';
   }
   return out;
  }
 };
 return StatTimer;
}();
var createBlob = function createBlob(data, contentType) {
 if (typeof Blob !== 'undefined') {
  return new Blob([data], { type: contentType });
 }
 warn('The "Blob" constructor is not supported.');
};
var createObjectURL = function createObjectURLClosure() {
 var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
 return function createObjectURL(data, contentType, forceDataSchema) {
  if (!forceDataSchema && typeof URL !== 'undefined' && URL.createObjectURL) {
   var blob = createBlob(data, contentType);
   return URL.createObjectURL(blob);
  }
  var buffer = 'data:' + contentType + ';base64,';
  for (var i = 0, ii = data.length; i < ii; i += 3) {
   var b1 = data[i] & 0xFF;
   var b2 = data[i + 1] & 0xFF;
   var b3 = data[i + 2] & 0xFF;
   var d1 = b1 >> 2, d2 = (b1 & 3) << 4 | b2 >> 4;
   var d3 = i + 1 < ii ? (b2 & 0xF) << 2 | b3 >> 6 : 64;
   var d4 = i + 2 < ii ? b3 & 0x3F : 64;
   buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
  }
  return buffer;
 };
}();
function MessageHandler(sourceName, targetName, comObj) {
 this.sourceName = sourceName;
 this.targetName = targetName;
 this.comObj = comObj;
 this.callbackIndex = 1;
 this.postMessageTransfers = true;
 var callbacksCapabilities = this.callbacksCapabilities = Object.create(null);
 var ah = this.actionHandler = Object.create(null);
 this._onComObjOnMessage = function messageHandlerComObjOnMessage(event) {
  var data = event.data;
  if (data.targetName !== this.sourceName) {
   return;
  }
  if (data.isReply) {
   var callbackId = data.callbackId;
   if (data.callbackId in callbacksCapabilities) {
    var callback = callbacksCapabilities[callbackId];
    delete callbacksCapabilities[callbackId];
    if ('error' in data) {
     callback.reject(data.error);
    } else {
     callback.resolve(data.data);
    }
   } else {
    error('Cannot resolve callback ' + callbackId);
   }
  } else if (data.action in ah) {
   var action = ah[data.action];
   if (data.callbackId) {
    var sourceName = this.sourceName;
    var targetName = data.sourceName;
    Promise.resolve().then(function () {
     return action[0].call(action[1], data.data);
    }).then(function (result) {
     comObj.postMessage({
      sourceName: sourceName,
      targetName: targetName,
      isReply: true,
      callbackId: data.callbackId,
      data: result
     });
    }, function (reason) {
     if (reason instanceof Error) {
      reason = reason + '';
     }
     comObj.postMessage({
      sourceName: sourceName,
      targetName: targetName,
      isReply: true,
      callbackId: data.callbackId,
      error: reason
     });
    });
   } else {
    action[0].call(action[1], data.data);
   }
  } else {
   error('Unknown action from worker: ' + data.action);
  }
 }.bind(this);
 comObj.addEventListener('message', this._onComObjOnMessage);
}
MessageHandler.prototype = {
 on: function messageHandlerOn(actionName, handler, scope) {
  var ah = this.actionHandler;
  if (ah[actionName]) {
   error('There is already an actionName called "' + actionName + '"');
  }
  ah[actionName] = [
   handler,
   scope
  ];
 },
 send: function messageHandlerSend(actionName, data, transfers) {
  var message = {
   sourceName: this.sourceName,
   targetName: this.targetName,
   action: actionName,
   data: data
  };
  this.postMessage(message, transfers);
 },
 sendWithPromise: function messageHandlerSendWithPromise(actionName, data, transfers) {
  var callbackId = this.callbackIndex++;
  var message = {
   sourceName: this.sourceName,
   targetName: this.targetName,
   action: actionName,
   data: data,
   callbackId: callbackId
  };
  var capability = createPromiseCapability();
  this.callbacksCapabilities[callbackId] = capability;
  try {
   this.postMessage(message, transfers);
  } catch (e) {
   capability.reject(e);
  }
  return capability.promise;
 },
 postMessage: function (message, transfers) {
  if (transfers && this.postMessageTransfers) {
   this.comObj.postMessage(message, transfers);
  } else {
   this.comObj.postMessage(message);
  }
 },
 destroy: function () {
  this.comObj.removeEventListener('message', this._onComObjOnMessage);
 }
};
function loadJpegStream(id, imageUrl, objs) {
 var img = new Image();
 img.onload = function loadJpegStream_onloadClosure() {
  objs.resolve(id, img);
 };
 img.onerror = function loadJpegStream_onerrorClosure() {
  objs.resolve(id, null);
  warn('Error during JPEG image loading');
 };
 img.src = imageUrl;
}
exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
exports.OPS = OPS;
exports.VERBOSITY_LEVELS = VERBOSITY_LEVELS;
exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
exports.AnnotationFieldFlag = AnnotationFieldFlag;
exports.AnnotationFlag = AnnotationFlag;
exports.AnnotationType = AnnotationType;
exports.FontType = FontType;
exports.ImageKind = ImageKind;
exports.CMapCompressionType = CMapCompressionType;
exports.InvalidPDFException = InvalidPDFException;
exports.MessageHandler = MessageHandler;
exports.MissingDataException = MissingDataException;
exports.MissingPDFException = MissingPDFException;
exports.NotImplementedException = NotImplementedException;
exports.PageViewport = PageViewport;
exports.PasswordException = PasswordException;
exports.PasswordResponses = PasswordResponses;
exports.StatTimer = StatTimer;
exports.StreamType = StreamType;
exports.TextRenderingMode = TextRenderingMode;
exports.UnexpectedResponseException = UnexpectedResponseException;
exports.UnknownErrorException = UnknownErrorException;
exports.Util = Util;
exports.XRefParseException = XRefParseException;
exports.arrayByteLength = arrayByteLength;
exports.arraysToBytes = arraysToBytes;
exports.assert = assert;
exports.bytesToString = bytesToString;
exports.createBlob = createBlob;
exports.createPromiseCapability = createPromiseCapability;
exports.createObjectURL = createObjectURL;
exports.deprecated = deprecated;
exports.error = error;
exports.getLookupTableFactory = getLookupTableFactory;
exports.getVerbosityLevel = getVerbosityLevel;
exports.globalScope = globalScope;
exports.info = info;
exports.isArray = isArray;
exports.isArrayBuffer = isArrayBuffer;
exports.isBool = isBool;
exports.isEmptyObj = isEmptyObj;
exports.isInt = isInt;
exports.isNum = isNum;
exports.isString = isString;
exports.isSpace = isSpace;
exports.isNodeJS = isNodeJS;
exports.isSameOrigin = isSameOrigin;
exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
exports.isLittleEndian = isLittleEndian;
exports.isEvalSupported = isEvalSupported;
exports.loadJpegStream = loadJpegStream;
exports.log2 = log2;
exports.readInt8 = readInt8;
exports.readUint16 = readUint16;
exports.readUint32 = readUint32;
exports.removeNullCharacters = removeNullCharacters;
exports.setVerbosityLevel = setVerbosityLevel;
exports.shadow = shadow;
exports.string32 = string32;
exports.stringToBytes = stringToBytes;
exports.stringToPDFString = stringToPDFString;
exports.stringToUTF8String = stringToUTF8String;
exports.utf8StringToString = utf8StringToString;
exports.warn = warn;
/* WEBPACK VAR INJECTION */}.call(exports, __w_pdfjs_require__(6)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var sharedUtil = __w_pdfjs_require__(0);
var assert = sharedUtil.assert;
var removeNullCharacters = sharedUtil.removeNullCharacters;
var warn = sharedUtil.warn;
var deprecated = sharedUtil.deprecated;
var createValidAbsoluteUrl = sharedUtil.createValidAbsoluteUrl;
var stringToBytes = sharedUtil.stringToBytes;
var CMapCompressionType = sharedUtil.CMapCompressionType;
var DEFAULT_LINK_REL = 'noopener noreferrer nofollow';
function DOMCanvasFactory() {
}
DOMCanvasFactory.prototype = {
 create: function DOMCanvasFactory_create(width, height) {
  assert(width > 0 && height > 0, 'invalid canvas size');
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
  return {
   canvas: canvas,
   context: context
  };
 },
 reset: function DOMCanvasFactory_reset(canvasAndContextPair, width, height) {
  assert(canvasAndContextPair.canvas, 'canvas is not specified');
  assert(width > 0 && height > 0, 'invalid canvas size');
  canvasAndContextPair.canvas.width = width;
  canvasAndContextPair.canvas.height = height;
 },
 destroy: function DOMCanvasFactory_destroy(canvasAndContextPair) {
  assert(canvasAndContextPair.canvas, 'canvas is not specified');
  canvasAndContextPair.canvas.width = 0;
  canvasAndContextPair.canvas.height = 0;
  canvasAndContextPair.canvas = null;
  canvasAndContextPair.context = null;
 }
};
var DOMCMapReaderFactory = function DOMCMapReaderFactoryClosure() {
 function DOMCMapReaderFactory(params) {
  this.baseUrl = params.baseUrl || null;
  this.isCompressed = params.isCompressed || false;
 }
 DOMCMapReaderFactory.prototype = {
  fetch: function (params) {
   if (!params.name) {
    return Promise.reject(new Error('CMap name must be specified.'));
   }
   return new Promise(function (resolve, reject) {
    var url = this.baseUrl + params.name;
    var request = new XMLHttpRequest();
    if (this.isCompressed) {
     url += '.bcmap';
     request.responseType = 'arraybuffer';
    }
    request.onreadystatechange = function () {
     if (request.readyState === XMLHttpRequest.DONE && (request.status === 200 || request.status === 0)) {
      var data;
      if (this.isCompressed && request.response) {
       data = new Uint8Array(request.response);
      } else if (!this.isCompressed && request.responseText) {
       data = stringToBytes(request.responseText);
      }
      if (data) {
       resolve({
        cMapData: data,
        compressionType: this.isCompressed ? CMapCompressionType.BINARY : CMapCompressionType.NONE
       });
       return;
      }
      reject(new Error('Unable to load ' + (this.isCompressed ? 'binary' : '') + ' CMap at: ' + url));
     }
    }.bind(this);
    request.open('GET', url, true);
    request.send(null);
   }.bind(this));
  }
 };
 return DOMCMapReaderFactory;
}();
var CustomStyle = function CustomStyleClosure() {
 var prefixes = [
  'ms',
  'Moz',
  'Webkit',
  'O'
 ];
 var _cache = Object.create(null);
 function CustomStyle() {
 }
 CustomStyle.getProp = function get(propName, element) {
  if (arguments.length === 1 && typeof _cache[propName] === 'string') {
   return _cache[propName];
  }
  element = element || document.documentElement;
  var style = element.style, prefixed, uPropName;
  if (typeof style[propName] === 'string') {
   return _cache[propName] = propName;
  }
  uPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
  for (var i = 0, l = prefixes.length; i < l; i++) {
   prefixed = prefixes[i] + uPropName;
   if (typeof style[prefixed] === 'string') {
    return _cache[propName] = prefixed;
   }
  }
  return _cache[propName] = 'undefined';
 };
 CustomStyle.setProp = function set(propName, element, str) {
  var prop = this.getProp(propName);
  if (prop !== 'undefined') {
   element.style[prop] = str;
  }
 };
 return CustomStyle;
}();
var hasCanvasTypedArrays;
hasCanvasTypedArrays = function hasCanvasTypedArrays() {
 var canvas = document.createElement('canvas');
 canvas.width = canvas.height = 1;
 var ctx = canvas.getContext('2d');
 var imageData = ctx.createImageData(1, 1);
 return typeof imageData.data.buffer !== 'undefined';
};
var LinkTarget = {
 NONE: 0,
 SELF: 1,
 BLANK: 2,
 PARENT: 3,
 TOP: 4
};
var LinkTargetStringMap = [
 '',
 '_self',
 '_blank',
 '_parent',
 '_top'
];
function addLinkAttributes(link, params) {
 var url = params && params.url;
 link.href = link.title = url ? removeNullCharacters(url) : '';
 if (url) {
  var target = params.target;
  if (typeof target === 'undefined') {
   target = getDefaultSetting('externalLinkTarget');
  }
  link.target = LinkTargetStringMap[target];
  var rel = params.rel;
  if (typeof rel === 'undefined') {
   rel = getDefaultSetting('externalLinkRel');
  }
  link.rel = rel;
 }
}
function getFilenameFromUrl(url) {
 var anchor = url.indexOf('#');
 var query = url.indexOf('?');
 var end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
 return url.substring(url.lastIndexOf('/', end) + 1, end);
}
function getDefaultSetting(id) {
 var globalSettings = sharedUtil.globalScope.PDFJS;
 switch (id) {
 case 'pdfBug':
  return globalSettings ? globalSettings.pdfBug : false;
 case 'disableAutoFetch':
  return globalSettings ? globalSettings.disableAutoFetch : false;
 case 'disableStream':
  return globalSettings ? globalSettings.disableStream : false;
 case 'disableRange':
  return globalSettings ? globalSettings.disableRange : false;
 case 'disableFontFace':
  return globalSettings ? globalSettings.disableFontFace : false;
 case 'disableCreateObjectURL':
  return globalSettings ? globalSettings.disableCreateObjectURL : false;
 case 'disableWebGL':
  return globalSettings ? globalSettings.disableWebGL : true;
 case 'cMapUrl':
  return globalSettings ? globalSettings.cMapUrl : null;
 case 'cMapPacked':
  return globalSettings ? globalSettings.cMapPacked : false;
 case 'postMessageTransfers':
  return globalSettings ? globalSettings.postMessageTransfers : true;
 case 'workerPort':
  return globalSettings ? globalSettings.workerPort : null;
 case 'workerSrc':
  return globalSettings ? globalSettings.workerSrc : null;
 case 'disableWorker':
  return globalSettings ? globalSettings.disableWorker : false;
 case 'maxImageSize':
  return globalSettings ? globalSettings.maxImageSize : -1;
 case 'imageResourcesPath':
  return globalSettings ? globalSettings.imageResourcesPath : '';
 case 'isEvalSupported':
  return globalSettings ? globalSettings.isEvalSupported : true;
 case 'externalLinkTarget':
  if (!globalSettings) {
   return LinkTarget.NONE;
  }
  switch (globalSettings.externalLinkTarget) {
  case LinkTarget.NONE:
  case LinkTarget.SELF:
  case LinkTarget.BLANK:
  case LinkTarget.PARENT:
  case LinkTarget.TOP:
   return globalSettings.externalLinkTarget;
  }
  warn('PDFJS.externalLinkTarget is invalid: ' + globalSettings.externalLinkTarget);
  globalSettings.externalLinkTarget = LinkTarget.NONE;
  return LinkTarget.NONE;
 case 'externalLinkRel':
  return globalSettings ? globalSettings.externalLinkRel : DEFAULT_LINK_REL;
 case 'enableStats':
  return !!(globalSettings && globalSettings.enableStats);
 default:
  throw new Error('Unknown default setting: ' + id);
 }
}
function isExternalLinkTargetSet() {
 var externalLinkTarget = getDefaultSetting('externalLinkTarget');
 switch (externalLinkTarget) {
 case LinkTarget.NONE:
  return false;
 case LinkTarget.SELF:
 case LinkTarget.BLANK:
 case LinkTarget.PARENT:
 case LinkTarget.TOP:
  return true;
 }
}
function isValidUrl(url, allowRelative) {
 deprecated('isValidUrl(), please use createValidAbsoluteUrl() instead.');
 var baseUrl = allowRelative ? 'http://example.com' : null;
 return createValidAbsoluteUrl(url, baseUrl) !== null;
}
exports.CustomStyle = CustomStyle;
exports.addLinkAttributes = addLinkAttributes;
exports.isExternalLinkTargetSet = isExternalLinkTargetSet;
exports.isValidUrl = isValidUrl;
exports.getFilenameFromUrl = getFilenameFromUrl;
exports.LinkTarget = LinkTarget;
exports.hasCanvasTypedArrays = hasCanvasTypedArrays;
exports.getDefaultSetting = getDefaultSetting;
exports.DEFAULT_LINK_REL = DEFAULT_LINK_REL;
exports.DOMCanvasFactory = DOMCanvasFactory;
exports.DOMCMapReaderFactory = DOMCMapReaderFactory;

/***/ }),
/* 2 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var sharedUtil = __w_pdfjs_require__(0);
var displayDOMUtils = __w_pdfjs_require__(1);
var AnnotationBorderStyleType = sharedUtil.AnnotationBorderStyleType;
var AnnotationType = sharedUtil.AnnotationType;
var stringToPDFString = sharedUtil.stringToPDFString;
var Util = sharedUtil.Util;
var addLinkAttributes = displayDOMUtils.addLinkAttributes;
var LinkTarget = displayDOMUtils.LinkTarget;
var getFilenameFromUrl = displayDOMUtils.getFilenameFromUrl;
var warn = sharedUtil.warn;
var CustomStyle = displayDOMUtils.CustomStyle;
var getDefaultSetting = displayDOMUtils.getDefaultSetting;
function AnnotationElementFactory() {
}
AnnotationElementFactory.prototype = {
 create: function AnnotationElementFactory_create(parameters) {
  var subtype = parameters.data.annotationType;
  switch (subtype) {
  case AnnotationType.LINK:
   return new LinkAnnotationElement(parameters);
  case AnnotationType.TEXT:
   return new TextAnnotationElement(parameters);
  case AnnotationType.WIDGET:
   var fieldType = parameters.data.fieldType;
   switch (fieldType) {
   case 'Tx':
    return new TextWidgetAnnotationElement(parameters);
   case 'Btn':
    if (parameters.data.radioButton) {
     return new RadioButtonWidgetAnnotationElement(parameters);
    } else if (parameters.data.checkBox) {
     return new CheckboxWidgetAnnotationElement(parameters);
    }
    warn('Unimplemented button widget annotation: pushbutton');
    break;
   case 'Ch':
    return new ChoiceWidgetAnnotationElement(parameters);
   }
   return new WidgetAnnotationElement(parameters);
  case AnnotationType.POPUP:
   return new PopupAnnotationElement(parameters);
  case AnnotationType.HIGHLIGHT:
   return new HighlightAnnotationElement(parameters);
  case AnnotationType.UNDERLINE:
   return new UnderlineAnnotationElement(parameters);
  case AnnotationType.SQUIGGLY:
   return new SquigglyAnnotationElement(parameters);
  case AnnotationType.STRIKEOUT:
   return new StrikeOutAnnotationElement(parameters);
  case AnnotationType.FILEATTACHMENT:
   return new FileAttachmentAnnotationElement(parameters);
  default:
   return new AnnotationElement(parameters);
  }
 }
};
var AnnotationElement = function AnnotationElementClosure() {
 function AnnotationElement(parameters, isRenderable) {
  this.isRenderable = isRenderable || false;
  this.data = parameters.data;
  this.layer = parameters.layer;
  this.page = parameters.page;
  this.viewport = parameters.viewport;
  this.linkService = parameters.linkService;
  this.downloadManager = parameters.downloadManager;
  this.imageResourcesPath = parameters.imageResourcesPath;
  this.renderInteractiveForms = parameters.renderInteractiveForms;
  if (isRenderable) {
   this.container = this._createContainer();
  }
 }
 AnnotationElement.prototype = {
  _createContainer: function AnnotationElement_createContainer() {
   var data = this.data, page = this.page, viewport = this.viewport;
   var container = document.createElement('section');
   var width = data.rect[2] - data.rect[0];
   var height = data.rect[3] - data.rect[1];
   container.setAttribute('data-annotation-id', data.id);
   var rect = Util.normalizeRect([
    data.rect[0],
    page.view[3] - data.rect[1] + page.view[1],
    data.rect[2],
    page.view[3] - data.rect[3] + page.view[1]
   ]);
   CustomStyle.setProp('transform', container, 'matrix(' + viewport.transform.join(',') + ')');
   CustomStyle.setProp('transformOrigin', container, -rect[0] + 'px ' + -rect[1] + 'px');
   if (data.borderStyle.width > 0) {
    container.style.borderWidth = data.borderStyle.width + 'px';
    if (data.borderStyle.style !== AnnotationBorderStyleType.UNDERLINE) {
     width = width - 2 * data.borderStyle.width;
     height = height - 2 * data.borderStyle.width;
    }
    var horizontalRadius = data.borderStyle.horizontalCornerRadius;
    var verticalRadius = data.borderStyle.verticalCornerRadius;
    if (horizontalRadius > 0 || verticalRadius > 0) {
     var radius = horizontalRadius + 'px / ' + verticalRadius + 'px';
     CustomStyle.setProp('borderRadius', container, radius);
    }
    switch (data.borderStyle.style) {
    case AnnotationBorderStyleType.SOLID:
     container.style.borderStyle = 'solid';
     break;
    case AnnotationBorderStyleType.DASHED:
     container.style.borderStyle = 'dashed';
     break;
    case AnnotationBorderStyleType.BEVELED:
     warn('Unimplemented border style: beveled');
     break;
    case AnnotationBorderStyleType.INSET:
     warn('Unimplemented border style: inset');
     break;
    case AnnotationBorderStyleType.UNDERLINE:
     container.style.borderBottomStyle = 'solid';
     break;
    default:
     break;
    }
    if (data.color) {
     container.style.borderColor = Util.makeCssRgb(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
    } else {
     container.style.borderWidth = 0;
    }
   }
   container.style.left = rect[0] + 'px';
   container.style.top = rect[1] + 'px';
   container.style.width = width + 'px';
   container.style.height = height + 'px';
   return container;
  },
  _createPopup: function AnnotationElement_createPopup(container, trigger, data) {
   if (!trigger) {
    trigger = document.createElement('div');
    trigger.style.height = container.style.height;
    trigger.style.width = container.style.width;
    container.appendChild(trigger);
   }
   var popupElement = new PopupElement({
    container: container,
    trigger: trigger,
    color: data.color,
    title: data.title,
    contents: data.contents,
    hideWrapper: true
   });
   var popup = popupElement.render();
   popup.style.left = container.style.width;
   container.appendChild(popup);
  },
  render: function AnnotationElement_render() {
   throw new Error('Abstract method AnnotationElement.render called');
  }
 };
 return AnnotationElement;
}();
var LinkAnnotationElement = function LinkAnnotationElementClosure() {
 function LinkAnnotationElement(parameters) {
  AnnotationElement.call(this, parameters, true);
 }
 Util.inherit(LinkAnnotationElement, AnnotationElement, {
  render: function LinkAnnotationElement_render() {
   this.container.className = 'linkAnnotation';
   var link = document.createElement('a');
   addLinkAttributes(link, {
    url: this.data.url,
    target: this.data.newWindow ? LinkTarget.BLANK : undefined
   });
   if (!this.data.url) {
    if (this.data.action) {
     this._bindNamedAction(link, this.data.action);
    } else {
     this._bindLink(link, this.data.dest);
    }
   }
   this.container.appendChild(link);
   return this.container;
  },
  _bindLink: function LinkAnnotationElement_bindLink(link, destination) {
   var self = this;
   link.href = this.linkService.getDestinationHash(destination);
   link.onclick = function () {
    if (destination) {
     self.linkService.navigateTo(destination);
    }
    return false;
   };
   if (destination) {
    link.className = 'internalLink';
   }
  },
  _bindNamedAction: function LinkAnnotationElement_bindNamedAction(link, action) {
   var self = this;
   link.href = this.linkService.getAnchorUrl('');
   link.onclick = function () {
    self.linkService.executeNamedAction(action);
    return false;
   };
   link.className = 'internalLink';
  }
 });
 return LinkAnnotationElement;
}();
var TextAnnotationElement = function TextAnnotationElementClosure() {
 function TextAnnotationElement(parameters) {
  var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
  AnnotationElement.call(this, parameters, isRenderable);
 }
 Util.inherit(TextAnnotationElement, AnnotationElement, {
  render: function TextAnnotationElement_render() {
   this.container.className = 'textAnnotation';
   var image = document.createElement('img');
   image.style.height = this.container.style.height;
   image.style.width = this.container.style.width;
   image.src = this.imageResourcesPath + 'annotation-' + this.data.name.toLowerCase() + '.svg';
   image.alt = '[{{type}} Annotation]';
   image.dataset.l10nId = 'text_annotation_type';
   image.dataset.l10nArgs = JSON.stringify({ type: this.data.name });
   if (!this.data.hasPopup) {
    this._createPopup(this.container, image, this.data);
   }
   this.container.appendChild(image);
   return this.container;
  }
 });
 return TextAnnotationElement;
}();
var WidgetAnnotationElement = function WidgetAnnotationElementClosure() {
 function WidgetAnnotationElement(parameters, isRenderable) {
  AnnotationElement.call(this, parameters, isRenderable);
 }
 Util.inherit(WidgetAnnotationElement, AnnotationElement, {
  render: function WidgetAnnotationElement_render() {
   return this.container;
  }
 });
 return WidgetAnnotationElement;
}();
var TextWidgetAnnotationElement = function TextWidgetAnnotationElementClosure() {
 var TEXT_ALIGNMENT = [
  'left',
  'center',
  'right'
 ];
 function TextWidgetAnnotationElement(parameters) {
  var isRenderable = parameters.renderInteractiveForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
  WidgetAnnotationElement.call(this, parameters, isRenderable);
 }
 Util.inherit(TextWidgetAnnotationElement, WidgetAnnotationElement, {
  render: function TextWidgetAnnotationElement_render() {
   this.container.className = 'textWidgetAnnotation';
   var element = null;
   if (this.renderInteractiveForms) {
    if (this.data.multiLine) {
     element = document.createElement('textarea');
     element.textContent = this.data.fieldValue;
    } else {
     element = document.createElement('input');
     element.type = 'text';
     element.setAttribute('value', this.data.fieldValue);
    }
    element.disabled = this.data.readOnly;
    if (this.data.maxLen !== null) {
     element.maxLength = this.data.maxLen;
    }
    if (this.data.comb) {
     var fieldWidth = this.data.rect[2] - this.data.rect[0];
     var combWidth = fieldWidth / this.data.maxLen;
     element.classList.add('comb');
     element.style.letterSpacing = 'calc(' + combWidth + 'px - 1ch)';
    }
   } else {
    element = document.createElement('div');
    element.textContent = this.data.fieldValue;
    element.style.verticalAlign = 'middle';
    element.style.display = 'table-cell';
    var font = null;
    if (this.data.fontRefName) {
     font = this.page.commonObjs.getData(this.data.fontRefName);
    }
    this._setTextStyle(element, font);
   }
   if (this.data.textAlignment !== null) {
    element.style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
   }
   this.container.appendChild(element);
   return this.container;
  },
  _setTextStyle: function TextWidgetAnnotationElement_setTextStyle(element, font) {
   var style = element.style;
   style.fontSize = this.data.fontSize + 'px';
   style.direction = this.data.fontDirection < 0 ? 'rtl' : 'ltr';
   if (!font) {
    return;
   }
   style.fontWeight = font.black ? font.bold ? '900' : 'bold' : font.bold ? 'bold' : 'normal';
   style.fontStyle = font.italic ? 'italic' : 'normal';
   var fontFamily = font.loadedName ? '"' + font.loadedName + '", ' : '';
   var fallbackName = font.fallbackName || 'Helvetica, sans-serif';
   style.fontFamily = fontFamily + fallbackName;
  }
 });
 return TextWidgetAnnotationElement;
}();
var CheckboxWidgetAnnotationElement = function CheckboxWidgetAnnotationElementClosure() {
 function CheckboxWidgetAnnotationElement(parameters) {
  WidgetAnnotationElement.call(this, parameters, parameters.renderInteractiveForms);
 }
 Util.inherit(CheckboxWidgetAnnotationElement, WidgetAnnotationElement, {
  render: function CheckboxWidgetAnnotationElement_render() {
   this.container.className = 'buttonWidgetAnnotation checkBox';
   var element = document.createElement('input');
   element.disabled = this.data.readOnly;
   element.type = 'checkbox';
   if (this.data.fieldValue && this.data.fieldValue !== 'Off') {
    element.setAttribute('checked', true);
   }
   this.container.appendChild(element);
   return this.container;
  }
 });
 return CheckboxWidgetAnnotationElement;
}();
var RadioButtonWidgetAnnotationElement = function RadioButtonWidgetAnnotationElementClosure() {
 function RadioButtonWidgetAnnotationElement(parameters) {
  WidgetAnnotationElement.call(this, parameters, parameters.renderInteractiveForms);
 }
 Util.inherit(RadioButtonWidgetAnnotationElement, WidgetAnnotationElement, {
  render: function RadioButtonWidgetAnnotationElement_render() {
   this.container.className = 'buttonWidgetAnnotation radioButton';
   var element = document.createElement('input');
   element.disabled = this.data.readOnly;
   element.type = 'radio';
   element.name = this.data.fieldName;
   if (this.data.fieldValue === this.data.buttonValue) {
    element.setAttribute('checked', true);
   }
   this.container.appendChild(element);
   return this.container;
  }
 });
 return RadioButtonWidgetAnnotationElement;
}();
var ChoiceWidgetAnnotationElement = function ChoiceWidgetAnnotationElementClosure() {
 function ChoiceWidgetAnnotationElement(parameters) {
  WidgetAnnotationElement.call(this, parameters, parameters.renderInteractiveForms);
 }
 Util.inherit(ChoiceWidgetAnnotationElement, WidgetAnnotationElement, {
  render: function ChoiceWidgetAnnotationElement_render() {
   this.container.className = 'choiceWidgetAnnotation';
   var selectElement = document.createElement('select');
   selectElement.disabled = this.data.readOnly;
   if (!this.data.combo) {
    selectElement.size = this.data.options.length;
    if (this.data.multiSelect) {
     selectElement.multiple = true;
    }
   }
   for (var i = 0, ii = this.data.options.length; i < ii; i++) {
    var option = this.data.options[i];
    var optionElement = document.createElement('option');
    optionElement.textContent = option.displayValue;
    optionElement.value = option.exportValue;
    if (this.data.fieldValue.indexOf(option.displayValue) >= 0) {
     optionElement.setAttribute('selected', true);
    }
    selectElement.appendChild(optionElement);
   }
   this.container.appendChild(selectElement);
   return this.container;
  }
 });
 return ChoiceWidgetAnnotationElement;
}();
var PopupAnnotationElement = function PopupAnnotationElementClosure() {
 function PopupAnnotationElement(parameters) {
  var isRenderable = !!(parameters.data.title || parameters.data.contents);
  AnnotationElement.call(this, parameters, isRenderable);
 }
 Util.inherit(PopupAnnotationElement, AnnotationElement, {
  render: function PopupAnnotationElement_render() {
   this.container.className = 'popupAnnotation';
   var selector = '[data-annotation-id="' + this.data.parentId + '"]';
   var parentElement = this.layer.querySelector(selector);
   if (!parentElement) {
    return this.container;
   }
   var popup = new PopupElement({
    container: this.container,
    trigger: parentElement,
    color: this.data.color,
    title: this.data.title,
    contents: this.data.contents
   });
   var parentLeft = parseFloat(parentElement.style.left);
   var parentWidth = parseFloat(parentElement.style.width);
   CustomStyle.setProp('transformOrigin', this.container, -(parentLeft + parentWidth) + 'px -' + parentElement.style.top);
   this.container.style.left = parentLeft + parentWidth + 'px';
   this.container.appendChild(popup.render());
   return this.container;
  }
 });
 return PopupAnnotationElement;
}();
var PopupElement = function PopupElementClosure() {
 var BACKGROUND_ENLIGHT = 0.7;
 function PopupElement(parameters) {
  this.container = parameters.container;
  this.trigger = parameters.trigger;
  this.color = parameters.color;
  this.title = parameters.title;
  this.contents = parameters.contents;
  this.hideWrapper = parameters.hideWrapper || false;
  this.pinned = false;
 }
 PopupElement.prototype = {
  render: function PopupElement_render() {
   var wrapper = document.createElement('div');
   wrapper.className = 'popupWrapper';
   this.hideElement = this.hideWrapper ? wrapper : this.container;
   this.hideElement.setAttribute('hidden', true);
   var popup = document.createElement('div');
   popup.className = 'popup';
   var color = this.color;
   if (color) {
    var r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
    var g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
    var b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
    popup.style.backgroundColor = Util.makeCssRgb(r | 0, g | 0, b | 0);
   }
   var contents = this._formatContents(this.contents);
   var title = document.createElement('h1');
   title.textContent = this.title;
   this.trigger.addEventListener('click', this._toggle.bind(this));
   this.trigger.addEventListener('mouseover', this._show.bind(this, false));
   this.trigger.addEventListener('mouseout', this._hide.bind(this, false));
   popup.addEventListener('click', this._hide.bind(this, true));
   popup.appendChild(title);
   popup.appendChild(contents);
   wrapper.appendChild(popup);
   return wrapper;
  },
  _formatContents: function PopupElement_formatContents(contents) {
   var p = document.createElement('p');
   var lines = contents.split(/(?:\r\n?|\n)/);
   for (var i = 0, ii = lines.length; i < ii; ++i) {
    var line = lines[i];
    p.appendChild(document.createTextNode(line));
    if (i < ii - 1) {
     p.appendChild(document.createElement('br'));
    }
   }
   return p;
  },
  _toggle: function PopupElement_toggle() {
   if (this.pinned) {
    this._hide(true);
   } else {
    this._show(true);
   }
  },
  _show: function PopupElement_show(pin) {
   if (pin) {
    this.pinned = true;
   }
   if (this.hideElement.hasAttribute('hidden')) {
    this.hideElement.removeAttribute('hidden');
    this.container.style.zIndex += 1;
   }
  },
  _hide: function PopupElement_hide(unpin) {
   if (unpin) {
    this.pinned = false;
   }
   if (!this.hideElement.hasAttribute('hidden') && !this.pinned) {
    this.hideElement.setAttribute('hidden', true);
    this.container.style.zIndex -= 1;
   }
  }
 };
 return PopupElement;
}();
var HighlightAnnotationElement = function HighlightAnnotationElementClosure() {
 function HighlightAnnotationElement(parameters) {
  var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
  AnnotationElement.call(this, parameters, isRenderable);
 }
 Util.inherit(HighlightAnnotationElement, AnnotationElement, {
  render: function HighlightAnnotationElement_render() {
   this.container.className = 'highlightAnnotation';
   if (!this.data.hasPopup) {
    this._createPopup(this.container, null, this.data);
   }
   return this.container;
  }
 });
 return HighlightAnnotationElement;
}();
var UnderlineAnnotationElement = function UnderlineAnnotationElementClosure() {
 function UnderlineAnnotationElement(parameters) {
  var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
  AnnotationElement.call(this, parameters, isRenderable);
 }
 Util.inherit(UnderlineAnnotationElement, AnnotationElement, {
  render: function UnderlineAnnotationElement_render() {
   this.container.className = 'underlineAnnotation';
   if (!this.data.hasPopup) {
    this._createPopup(this.container, null, this.data);
   }
   return this.container;
  }
 });
 return UnderlineAnnotationElement;
}();
var SquigglyAnnotationElement = function SquigglyAnnotationElementClosure() {
 function SquigglyAnnotationElement(parameters) {
  var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
  AnnotationElement.call(this, parameters, isRenderable);
 }
 Util.inherit(SquigglyAnnotationElement, AnnotationElement, {
  render: function SquigglyAnnotationElement_render() {
   this.container.className = 'squigglyAnnotation';
   if (!this.data.hasPopup) {
    this._createPopup(this.container, null, this.data);
   }
   return this.container;
  }
 });
 return SquigglyAnnotationElement;
}();
var StrikeOutAnnotationElement = function StrikeOutAnnotationElementClosure() {
 function StrikeOutAnnotationElement(parameters) {
  var isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
  AnnotationElement.call(this, parameters, isRenderable);
 }
 Util.inherit(StrikeOutAnnotationElement, AnnotationElement, {
  render: function StrikeOutAnnotationElement_render() {
   this.container.className = 'strikeoutAnnotation';
   if (!this.data.hasPopup) {
    this._createPopup(this.container, null, this.data);
   }
   return this.container;
  }
 });
 return StrikeOutAnnotationElement;
}();
var FileAttachmentAnnotationElement = function FileAttachmentAnnotationElementClosure() {
 function FileAttachmentAnnotationElement(parameters) {
  AnnotationElement.call(this, parameters, true);
  var file = this.data.file;
  this.filename = getFilenameFromUrl(file.filename);
  this.content = file.content;
  this.linkService.onFileAttachmentAnnotation({
   id: stringToPDFString(file.filename),
   filename: file.filename,
   content: file.content
  });
 }
 Util.inherit(FileAttachmentAnnotationElement, AnnotationElement, {
  render: function FileAttachmentAnnotationElement_render() {
   this.container.className = 'fileAttachmentAnnotation';
   var trigger = document.createElement('div');
   trigger.style.height = this.container.style.height;
   trigger.style.width = this.container.style.width;
   trigger.addEventListener('dblclick', this._download.bind(this));
   if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
    this._createPopup(this.container, trigger, this.data);
   }
   this.container.appendChild(trigger);
   return this.container;
  },
  _download: function FileAttachmentAnnotationElement_download() {
   if (!this.downloadManager) {
    warn('Download cannot be started due to unavailable download manager');
    return;
   }
   this.downloadManager.downloadData(this.content, this.filename, '');
  }
 });
 return FileAttachmentAnnotationElement;
}();
var AnnotationLayer = function AnnotationLayerClosure() {
 return {
  render: function AnnotationLayer_render(parameters) {
   var annotationElementFactory = new AnnotationElementFactory();
   for (var i = 0, ii = parameters.annotations.length; i < ii; i++) {
    var data = parameters.annotations[i];
    if (!data) {
     continue;
    }
    var element = annotationElementFactory.create({
     data: data,
     layer: parameters.div,
     page: parameters.page,
     viewport: parameters.viewport,
     linkService: parameters.linkService,
     downloadManager: parameters.downloadManager,
     imageResourcesPath: parameters.imageResourcesPath || getDefaultSetting('imageResourcesPath'),
     renderInteractiveForms: parameters.renderInteractiveForms || false
    });
    if (element.isRenderable) {
     parameters.div.appendChild(element.render());
    }
   }
  },
  update: function AnnotationLayer_update(parameters) {
   for (var i = 0, ii = parameters.annotations.length; i < ii; i++) {
    var data = parameters.annotations[i];
    var element = parameters.div.querySelector('[data-annotation-id="' + data.id + '"]');
    if (element) {
     CustomStyle.setProp('transform', element, 'matrix(' + parameters.viewport.transform.join(',') + ')');
    }
   }
   parameters.div.removeAttribute('hidden');
  }
 };
}();
exports.AnnotationLayer = AnnotationLayer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var sharedUtil = __w_pdfjs_require__(0);
var displayFontLoader = __w_pdfjs_require__(11);
var displayCanvas = __w_pdfjs_require__(10);
var displayMetadata = __w_pdfjs_require__(7);
var displayDOMUtils = __w_pdfjs_require__(1);
var amdRequire;
var InvalidPDFException = sharedUtil.InvalidPDFException;
var MessageHandler = sharedUtil.MessageHandler;
var MissingPDFException = sharedUtil.MissingPDFException;
var PageViewport = sharedUtil.PageViewport;
var PasswordException = sharedUtil.PasswordException;
var StatTimer = sharedUtil.StatTimer;
var UnexpectedResponseException = sharedUtil.UnexpectedResponseException;
var UnknownErrorException = sharedUtil.UnknownErrorException;
var Util = sharedUtil.Util;
var createPromiseCapability = sharedUtil.createPromiseCapability;
var error = sharedUtil.error;
var deprecated = sharedUtil.deprecated;
var getVerbosityLevel = sharedUtil.getVerbosityLevel;
var info = sharedUtil.info;
var isInt = sharedUtil.isInt;
var isArray = sharedUtil.isArray;
var isArrayBuffer = sharedUtil.isArrayBuffer;
var isSameOrigin = sharedUtil.isSameOrigin;
var loadJpegStream = sharedUtil.loadJpegStream;
var stringToBytes = sharedUtil.stringToBytes;
var globalScope = sharedUtil.globalScope;
var warn = sharedUtil.warn;
var FontFaceObject = displayFontLoader.FontFaceObject;
var FontLoader = displayFontLoader.FontLoader;
var CanvasGraphics = displayCanvas.CanvasGraphics;
var Metadata = displayMetadata.Metadata;
var getDefaultSetting = displayDOMUtils.getDefaultSetting;
var DOMCanvasFactory = displayDOMUtils.DOMCanvasFactory;
var DOMCMapReaderFactory = displayDOMUtils.DOMCMapReaderFactory;
var DEFAULT_RANGE_CHUNK_SIZE = 65536;
var isWorkerDisabled = false;
var workerSrc;
var isPostMessageTransfersDisabled = false;
var pdfjsFilePath = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : null;
var fakeWorkerFilesLoader = null;
var useRequireEnsure = false;
if (typeof __pdfjsdev_webpack__ === 'undefined') {
 if (typeof window === 'undefined') {
  isWorkerDisabled = true;
  if (false) {
   require.ensure = require('node-ensure');
  }
  useRequireEnsure = true;
 } else if (true) {
  useRequireEnsure = true;
 }
 if (typeof requirejs !== 'undefined' && requirejs.toUrl) {
  workerSrc = requirejs.toUrl('pdfjs-dist/build/pdf.worker.js');
 }
 var dynamicLoaderSupported = typeof requirejs !== 'undefined' && requirejs.load;
 fakeWorkerFilesLoader = useRequireEnsure ? function (callback) {
  __webpack_require__.e/* require.ensure */(0).then((function () {
   var worker = __webpack_require__(59);
   callback(worker.WorkerMessageHandler);
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
 } : dynamicLoaderSupported ? function (callback) {
  requirejs(['pdfjs-dist/build/pdf.worker'], function (worker) {
   callback(worker.WorkerMessageHandler);
  });
 } : null;
}
function getDocument(src, pdfDataRangeTransport, passwordCallback, progressCallback) {
 var task = new PDFDocumentLoadingTask();
 if (arguments.length > 1) {
  deprecated('getDocument is called with pdfDataRangeTransport, ' + 'passwordCallback or progressCallback argument');
 }
 if (pdfDataRangeTransport) {
  if (!(pdfDataRangeTransport instanceof PDFDataRangeTransport)) {
   pdfDataRangeTransport = Object.create(pdfDataRangeTransport);
   pdfDataRangeTransport.length = src.length;
   pdfDataRangeTransport.initialData = src.initialData;
   if (!pdfDataRangeTransport.abort) {
    pdfDataRangeTransport.abort = function () {
    };
   }
  }
  src = Object.create(src);
  src.range = pdfDataRangeTransport;
 }
 task.onPassword = passwordCallback || null;
 task.onProgress = progressCallback || null;
 var source;
 if (typeof src === 'string') {
  source = { url: src };
 } else if (isArrayBuffer(src)) {
  source = { data: src };
 } else if (src instanceof PDFDataRangeTransport) {
  source = { range: src };
 } else {
  if (typeof src !== 'object') {
   error('Invalid parameter in getDocument, need either Uint8Array, ' + 'string or a parameter object');
  }
  if (!src.url && !src.data && !src.range) {
   error('Invalid parameter object: need either .data, .range or .url');
  }
  source = src;
 }
 var params = {};
 var rangeTransport = null;
 var worker = null;
 for (var key in source) {
  if (key === 'url' && typeof window !== 'undefined') {
   params[key] = new URL(source[key], window.location).href;
   continue;
  } else if (key === 'range') {
   rangeTransport = source[key];
   continue;
  } else if (key === 'worker') {
   worker = source[key];
   continue;
  } else if (key === 'data' && !(source[key] instanceof Uint8Array)) {
   var pdfBytes = source[key];
   if (typeof pdfBytes === 'string') {
    params[key] = stringToBytes(pdfBytes);
   } else if (typeof pdfBytes === 'object' && pdfBytes !== null && !isNaN(pdfBytes.length)) {
    params[key] = new Uint8Array(pdfBytes);
   } else if (isArrayBuffer(pdfBytes)) {
    params[key] = new Uint8Array(pdfBytes);
   } else {
    error('Invalid PDF binary data: either typed array, string or ' + 'array-like object is expected in the data property.');
   }
   continue;
  }
  params[key] = source[key];
 }
 params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
 params.disableNativeImageDecoder = params.disableNativeImageDecoder === true;
 var CMapReaderFactory = params.CMapReaderFactory || DOMCMapReaderFactory;
 if (!worker) {
  var workerPort = getDefaultSetting('workerPort');
  worker = workerPort ? new PDFWorker(null, workerPort) : new PDFWorker();
  task._worker = worker;
 }
 var docId = task.docId;
 worker.promise.then(function () {
  if (task.destroyed) {
   throw new Error('Loading aborted');
  }
  return _fetchDocument(worker, params, rangeTransport, docId).then(function (workerId) {
   if (task.destroyed) {
    throw new Error('Loading aborted');
   }
   var messageHandler = new MessageHandler(docId, workerId, worker.port);
   var transport = new WorkerTransport(messageHandler, task, rangeTransport, CMapReaderFactory);
   task._transport = transport;
   messageHandler.send('Ready', null);
  });
 }).catch(task._capability.reject);
 return task;
}
function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
 if (worker.destroyed) {
  return Promise.reject(new Error('Worker was destroyed'));
 }
 source.disableAutoFetch = getDefaultSetting('disableAutoFetch');
 source.disableStream = getDefaultSetting('disableStream');
 source.chunkedViewerLoading = !!pdfDataRangeTransport;
 if (pdfDataRangeTransport) {
  source.length = pdfDataRangeTransport.length;
  source.initialData = pdfDataRangeTransport.initialData;
 }
 return worker.messageHandler.sendWithPromise('GetDocRequest', {
  docId: docId,
  source: source,
  disableRange: getDefaultSetting('disableRange'),
  maxImageSize: getDefaultSetting('maxImageSize'),
  disableFontFace: getDefaultSetting('disableFontFace'),
  disableCreateObjectURL: getDefaultSetting('disableCreateObjectURL'),
  postMessageTransfers: getDefaultSetting('postMessageTransfers') && !isPostMessageTransfersDisabled,
  docBaseUrl: source.docBaseUrl,
  disableNativeImageDecoder: source.disableNativeImageDecoder
 }).then(function (workerId) {
  if (worker.destroyed) {
   throw new Error('Worker was destroyed');
  }
  return workerId;
 });
}
var PDFDocumentLoadingTask = function PDFDocumentLoadingTaskClosure() {
 var nextDocumentId = 0;
 function PDFDocumentLoadingTask() {
  this._capability = createPromiseCapability();
  this._transport = null;
  this._worker = null;
  this.docId = 'd' + nextDocumentId++;
  this.destroyed = false;
  this.onPassword = null;
  this.onProgress = null;
  this.onUnsupportedFeature = null;
 }
 PDFDocumentLoadingTask.prototype = {
  get promise() {
   return this._capability.promise;
  },
  destroy: function () {
   this.destroyed = true;
   var transportDestroyed = !this._transport ? Promise.resolve() : this._transport.destroy();
   return transportDestroyed.then(function () {
    this._transport = null;
    if (this._worker) {
     this._worker.destroy();
     this._worker = null;
    }
   }.bind(this));
  },
  then: function PDFDocumentLoadingTask_then(onFulfilled, onRejected) {
   return this.promise.then.apply(this.promise, arguments);
  }
 };
 return PDFDocumentLoadingTask;
}();
var PDFDataRangeTransport = function pdfDataRangeTransportClosure() {
 function PDFDataRangeTransport(length, initialData) {
  this.length = length;
  this.initialData = initialData;
  this._rangeListeners = [];
  this._progressListeners = [];
  this._progressiveReadListeners = [];
  this._readyCapability = createPromiseCapability();
 }
 PDFDataRangeTransport.prototype = {
  addRangeListener: function PDFDataRangeTransport_addRangeListener(listener) {
   this._rangeListeners.push(listener);
  },
  addProgressListener: function PDFDataRangeTransport_addProgressListener(listener) {
   this._progressListeners.push(listener);
  },
  addProgressiveReadListener: function PDFDataRangeTransport_addProgressiveReadListener(listener) {
   this._progressiveReadListeners.push(listener);
  },
  onDataRange: function PDFDataRangeTransport_onDataRange(begin, chunk) {
   var listeners = this._rangeListeners;
   for (var i = 0, n = listeners.length; i < n; ++i) {
    listeners[i](begin, chunk);
   }
  },
  onDataProgress: function PDFDataRangeTransport_onDataProgress(loaded) {
   this._readyCapability.promise.then(function () {
    var listeners = this._progressListeners;
    for (var i = 0, n = listeners.length; i < n; ++i) {
     listeners[i](loaded);
    }
   }.bind(this));
  },
  onDataProgressiveRead: function PDFDataRangeTransport_onDataProgress(chunk) {
   this._readyCapability.promise.then(function () {
    var listeners = this._progressiveReadListeners;
    for (var i = 0, n = listeners.length; i < n; ++i) {
     listeners[i](chunk);
    }
   }.bind(this));
  },
  transportReady: function PDFDataRangeTransport_transportReady() {
   this._readyCapability.resolve();
  },
  requestDataRange: function PDFDataRangeTransport_requestDataRange(begin, end) {
   throw new Error('Abstract method PDFDataRangeTransport.requestDataRange');
  },
  abort: function PDFDataRangeTransport_abort() {
  }
 };
 return PDFDataRangeTransport;
}();
var PDFDocumentProxy = function PDFDocumentProxyClosure() {
 function PDFDocumentProxy(pdfInfo, transport, loadingTask) {
  this.pdfInfo = pdfInfo;
  this.transport = transport;
  this.loadingTask = loadingTask;
 }
 PDFDocumentProxy.prototype = {
  get numPages() {
   return this.pdfInfo.numPages;
  },
  get fingerprint() {
   return this.pdfInfo.fingerprint;
  },
  getPage: function PDFDocumentProxy_getPage(pageNumber) {
   return this.transport.getPage(pageNumber);
  },
  getPageIndex: function PDFDocumentProxy_getPageIndex(ref) {
   return this.transport.getPageIndex(ref);
  },
  getDestinations: function PDFDocumentProxy_getDestinations() {
   return this.transport.getDestinations();
  },
  getDestination: function PDFDocumentProxy_getDestination(id) {
   return this.transport.getDestination(id);
  },
  getPageLabels: function PDFDocumentProxy_getPageLabels() {
   return this.transport.getPageLabels();
  },
  getAttachments: function PDFDocumentProxy_getAttachments() {
   return this.transport.getAttachments();
  },
  getJavaScript: function PDFDocumentProxy_getJavaScript() {
   return this.transport.getJavaScript();
  },
  getOutline: function PDFDocumentProxy_getOutline() {
   return this.transport.getOutline();
  },
  getMetadata: function PDFDocumentProxy_getMetadata() {
   return this.transport.getMetadata();
  },
  getData: function PDFDocumentProxy_getData() {
   return this.transport.getData();
  },
  getDownloadInfo: function PDFDocumentProxy_getDownloadInfo() {
   return this.transport.downloadInfoCapability.promise;
  },
  getStats: function PDFDocumentProxy_getStats() {
   return this.transport.getStats();
  },
  cleanup: function PDFDocumentProxy_cleanup() {
   this.transport.startCleanup();
  },
  destroy: function PDFDocumentProxy_destroy() {
   return this.loadingTask.destroy();
  }
 };
 return PDFDocumentProxy;
}();
var PDFPageProxy = function PDFPageProxyClosure() {
 function PDFPageProxy(pageIndex, pageInfo, transport) {
  this.pageIndex = pageIndex;
  this.pageInfo = pageInfo;
  this.transport = transport;
  this.stats = new StatTimer();
  this.stats.enabled = getDefaultSetting('enableStats');
  this.commonObjs = transport.commonObjs;
  this.objs = new PDFObjects();
  this.cleanupAfterRender = false;
  this.pendingCleanup = false;
  this.intentStates = Object.create(null);
  this.destroyed = false;
 }
 PDFPageProxy.prototype = {
  get pageNumber() {
   return this.pageIndex + 1;
  },
  get rotate() {
   return this.pageInfo.rotate;
  },
  get ref() {
   return this.pageInfo.ref;
  },
  get userUnit() {
   return this.pageInfo.userUnit;
  },
  get view() {
   return this.pageInfo.view;
  },
  getViewport: function PDFPageProxy_getViewport(scale, rotate) {
   if (arguments.length < 2) {
    rotate = this.rotate;
   }
   return new PageViewport(this.view, scale, rotate, 0, 0);
  },
  getAnnotations: function PDFPageProxy_getAnnotations(params) {
   var intent = params && params.intent || null;
   if (!this.annotationsPromise || this.annotationsIntent !== intent) {
    this.annotationsPromise = this.transport.getAnnotations(this.pageIndex, intent);
    this.annotationsIntent = intent;
   }
   return this.annotationsPromise;
  },
  render: function PDFPageProxy_render(params) {
   var stats = this.stats;
   stats.time('Overall');
   this.pendingCleanup = false;
   var renderingIntent = params.intent === 'print' ? 'print' : 'display';
   var renderInteractiveForms = params.renderInteractiveForms === true ? true : false;
   var canvasFactory = params.canvasFactory || new DOMCanvasFactory();
   if (!this.intentStates[renderingIntent]) {
    this.intentStates[renderingIntent] = Object.create(null);
   }
   var intentState = this.intentStates[renderingIntent];
   if (!intentState.displayReadyCapability) {
    intentState.receivingOperatorList = true;
    intentState.displayReadyCapability = createPromiseCapability();
    intentState.operatorList = {
     fnArray: [],
     argsArray: [],
     lastChunk: false
    };
    this.stats.time('Page Request');
    this.transport.messageHandler.send('RenderPageRequest', {
     pageIndex: this.pageNumber - 1,
     intent: renderingIntent,
     renderInteractiveForms: renderInteractiveForms
    });
   }
   var internalRenderTask = new InternalRenderTask(complete, params, this.objs, this.commonObjs, intentState.operatorList, this.pageNumber, canvasFactory);
   internalRenderTask.useRequestAnimationFrame = renderingIntent !== 'print';
   if (!intentState.renderTasks) {
    intentState.renderTasks = [];
   }
   intentState.renderTasks.push(internalRenderTask);
   var renderTask = internalRenderTask.task;
   if (params.continueCallback) {
    deprecated('render is used with continueCallback parameter');
    renderTask.onContinue = params.continueCallback;
   }
   var self = this;
   intentState.displayReadyCapability.promise.then(function pageDisplayReadyPromise(transparency) {
    if (self.pendingCleanup) {
     complete();
     return;
    }
    stats.time('Rendering');
    internalRenderTask.initializeGraphics(transparency);
    internalRenderTask.operatorListChanged();
   }, function pageDisplayReadPromiseError(reason) {
    complete(reason);
   });
   function complete(error) {
    var i = intentState.renderTasks.indexOf(internalRenderTask);
    if (i >= 0) {
     intentState.renderTasks.splice(i, 1);
    }
    if (self.cleanupAfterRender) {
     self.pendingCleanup = true;
    }
    self._tryCleanup();
    if (error) {
     internalRenderTask.capability.reject(error);
    } else {
     internalRenderTask.capability.resolve();
    }
    stats.timeEnd('Rendering');
    stats.timeEnd('Overall');
   }
   return renderTask;
  },
  getOperatorList: function PDFPageProxy_getOperatorList() {
   function operatorListChanged() {
    if (intentState.operatorList.lastChunk) {
     intentState.opListReadCapability.resolve(intentState.operatorList);
     var i = intentState.renderTasks.indexOf(opListTask);
     if (i >= 0) {
      intentState.renderTasks.splice(i, 1);
     }
    }
   }
   var renderingIntent = 'oplist';
   if (!this.intentStates[renderingIntent]) {
    this.intentStates[renderingIntent] = Object.create(null);
   }
   var intentState = this.intentStates[renderingIntent];
   var opListTask;
   if (!intentState.opListReadCapability) {
    opListTask = {};
    opListTask.operatorListChanged = operatorListChanged;
    intentState.receivingOperatorList = true;
    intentState.opListReadCapability = createPromiseCapability();
    intentState.renderTasks = [];
    intentState.renderTasks.push(opListTask);
    intentState.operatorList = {
     fnArray: [],
     argsArray: [],
     lastChunk: false
    };
    this.transport.messageHandler.send('RenderPageRequest', {
     pageIndex: this.pageIndex,
     intent: renderingIntent
    });
   }
   return intentState.opListReadCapability.promise;
  },
  getTextContent: function PDFPageProxy_getTextContent(params) {
   return this.transport.messageHandler.sendWithPromise('GetTextContent', {
    pageIndex: this.pageNumber - 1,
    normalizeWhitespace: params && params.normalizeWhitespace === true ? true : false,
    combineTextItems: params && params.disableCombineTextItems === true ? false : true
   });
  },
  _destroy: function PDFPageProxy_destroy() {
   this.destroyed = true;
   this.transport.pageCache[this.pageIndex] = null;
   var waitOn = [];
   Object.keys(this.intentStates).forEach(function (intent) {
    if (intent === 'oplist') {
     return;
    }
    var intentState = this.intentStates[intent];
    intentState.renderTasks.forEach(function (renderTask) {
     var renderCompleted = renderTask.capability.promise.catch(function () {
     });
     waitOn.push(renderCompleted);
     renderTask.cancel();
    });
   }, this);
   this.objs.clear();
   this.annotationsPromise = null;
   this.pendingCleanup = false;
   return Promise.all(waitOn);
  },
  destroy: function () {
   deprecated('page destroy method, use cleanup() instead');
   this.cleanup();
  },
  cleanup: function PDFPageProxy_cleanup() {
   this.pendingCleanup = true;
   this._tryCleanup();
  },
  _tryCleanup: function PDFPageProxy_tryCleanup() {
   if (!this.pendingCleanup || Object.keys(this.intentStates).some(function (intent) {
     var intentState = this.intentStates[intent];
     return intentState.renderTasks.length !== 0 || intentState.receivingOperatorList;
    }, this)) {
    return;
   }
   Object.keys(this.intentStates).forEach(function (intent) {
    delete this.intentStates[intent];
   }, this);
   this.objs.clear();
   this.annotationsPromise = null;
   this.pendingCleanup = false;
  },
  _startRenderPage: function PDFPageProxy_startRenderPage(transparency, intent) {
   var intentState = this.intentStates[intent];
   if (intentState.displayReadyCapability) {
    intentState.displayReadyCapability.resolve(transparency);
   }
  },
  _renderPageChunk: function PDFPageProxy_renderPageChunk(operatorListChunk, intent) {
   var intentState = this.intentStates[intent];
   var i, ii;
   for (i = 0, ii = operatorListChunk.length; i < ii; i++) {
    intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
    intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
   }
   intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
   for (i = 0; i < intentState.renderTasks.length; i++) {
    intentState.renderTasks[i].operatorListChanged();
   }
   if (operatorListChunk.lastChunk) {
    intentState.receivingOperatorList = false;
    this._tryCleanup();
   }
  }
 };
 return PDFPageProxy;
}();
var PDFWorker = function PDFWorkerClosure() {
 var nextFakeWorkerId = 0;
 function getWorkerSrc() {
  if (typeof workerSrc !== 'undefined') {
   return workerSrc;
  }
  if (getDefaultSetting('workerSrc')) {
   return getDefaultSetting('workerSrc');
  }
  if (pdfjsFilePath) {
   return pdfjsFilePath.replace(/\.js$/i, '.worker.js');
  }
  error('No PDFJS.workerSrc specified');
 }
 var fakeWorkerFilesLoadedCapability;
 function setupFakeWorkerGlobal() {
  var WorkerMessageHandler;
  if (fakeWorkerFilesLoadedCapability) {
   return fakeWorkerFilesLoadedCapability.promise;
  }
  fakeWorkerFilesLoadedCapability = createPromiseCapability();
  var loader = fakeWorkerFilesLoader || function (callback) {
   Util.loadScript(getWorkerSrc(), function () {
    callback(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler);
   });
  };
  loader(fakeWorkerFilesLoadedCapability.resolve);
  return fakeWorkerFilesLoadedCapability.promise;
 }
 function FakeWorkerPort(defer) {
  this._listeners = [];
  this._defer = defer;
  this._deferred = Promise.resolve(undefined);
 }
 FakeWorkerPort.prototype = {
  postMessage: function (obj, transfers) {
   function cloneValue(value) {
    if (typeof value !== 'object' || value === null) {
     return value;
    }
    if (cloned.has(value)) {
     return cloned.get(value);
    }
    var result;
    var buffer;
    if ((buffer = value.buffer) && isArrayBuffer(buffer)) {
     var transferable = transfers && transfers.indexOf(buffer) >= 0;
     if (value === buffer) {
      result = value;
     } else if (transferable) {
      result = new value.constructor(buffer, value.byteOffset, value.byteLength);
     } else {
      result = new value.constructor(value);
     }
     cloned.set(value, result);
     return result;
    }
    result = isArray(value) ? [] : {};
    cloned.set(value, result);
    for (var i in value) {
     var desc, p = value;
     while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
      p = Object.getPrototypeOf(p);
     }
     if (typeof desc.value === 'undefined' || typeof desc.value === 'function') {
      continue;
     }
     result[i] = cloneValue(desc.value);
    }
    return result;
   }
   if (!this._defer) {
    this._listeners.forEach(function (listener) {
     listener.call(this, { data: obj });
    }, this);
    return;
   }
   var cloned = new WeakMap();
   var e = { data: cloneValue(obj) };
   this._deferred.then(function () {
    this._listeners.forEach(function (listener) {
     listener.call(this, e);
    }, this);
   }.bind(this));
  },
  addEventListener: function (name, listener) {
   this._listeners.push(listener);
  },
  removeEventListener: function (name, listener) {
   var i = this._listeners.indexOf(listener);
   this._listeners.splice(i, 1);
  },
  terminate: function () {
   this._listeners = [];
  }
 };
 function createCDNWrapper(url) {
  var wrapper = 'importScripts(\'' + url + '\');';
  return URL.createObjectURL(new Blob([wrapper]));
 }
 function PDFWorker(name, port) {
  this.name = name;
  this.destroyed = false;
  this._readyCapability = createPromiseCapability();
  this._port = null;
  this._webWorker = null;
  this._messageHandler = null;
  if (port) {
   this._initializeFromPort(port);
   return;
  }
  this._initialize();
 }
 PDFWorker.prototype = {
  get promise() {
   return this._readyCapability.promise;
  },
  get port() {
   return this._port;
  },
  get messageHandler() {
   return this._messageHandler;
  },
  _initializeFromPort: function PDFWorker_initializeFromPort(port) {
   this._port = port;
   this._messageHandler = new MessageHandler('main', 'worker', port);
   this._messageHandler.on('ready', function () {
   });
   this._readyCapability.resolve();
  },
  _initialize: function PDFWorker_initialize() {
   if (!isWorkerDisabled && !getDefaultSetting('disableWorker') && typeof Worker !== 'undefined') {
    var workerSrc = getWorkerSrc();
    try {
     if (!isSameOrigin(window.location.href, workerSrc)) {
      workerSrc = createCDNWrapper(new URL(workerSrc, window.location).href);
     }
     var worker = new Worker(workerSrc);
     var messageHandler = new MessageHandler('main', 'worker', worker);
     var terminateEarly = function () {
      worker.removeEventListener('error', onWorkerError);
      messageHandler.destroy();
      worker.terminate();
      if (this.destroyed) {
       this._readyCapability.reject(new Error('Worker was destroyed'));
      } else {
       this._setupFakeWorker();
      }
     }.bind(this);
     var onWorkerError = function (event) {
      if (!this._webWorker) {
       terminateEarly();
      }
     }.bind(this);
     worker.addEventListener('error', onWorkerError);
     messageHandler.on('test', function PDFWorker_test(data) {
      worker.removeEventListener('error', onWorkerError);
      if (this.destroyed) {
       terminateEarly();
       return;
      }
      var supportTypedArray = data && data.supportTypedArray;
      if (supportTypedArray) {
       this._messageHandler = messageHandler;
       this._port = worker;
       this._webWorker = worker;
       if (!data.supportTransfers) {
        isPostMessageTransfersDisabled = true;
       }
       this._readyCapability.resolve();
       messageHandler.send('configure', { verbosity: getVerbosityLevel() });
      } else {
       this._setupFakeWorker();
       messageHandler.destroy();
       worker.terminate();
      }
     }.bind(this));
     messageHandler.on('console_log', function (data) {
      console.log.apply(console, data);
     });
     messageHandler.on('console_error', function (data) {
      console.error.apply(console, data);
     });
     messageHandler.on('ready', function (data) {
      worker.removeEventListener('error', onWorkerError);
      if (this.destroyed) {
       terminateEarly();
       return;
      }
      try {
       sendTest();
      } catch (e) {
       this._setupFakeWorker();
      }
     }.bind(this));
     var sendTest = function () {
      var postMessageTransfers = getDefaultSetting('postMessageTransfers') && !isPostMessageTransfersDisabled;
      var testObj = new Uint8Array([postMessageTransfers ? 255 : 0]);
      try {
       messageHandler.send('test', testObj, [testObj.buffer]);
      } catch (ex) {
       info('Cannot use postMessage transfers');
       testObj[0] = 0;
       messageHandler.send('test', testObj);
      }
     };
     sendTest();
     return;
    } catch (e) {
     info('The worker has been disabled.');
    }
   }
   this._setupFakeWorker();
  },
  _setupFakeWorker: function PDFWorker_setupFakeWorker() {
   if (!isWorkerDisabled && !getDefaultSetting('disableWorker')) {
    warn('Setting up fake worker.');
    isWorkerDisabled = true;
   }
   setupFakeWorkerGlobal().then(function (WorkerMessageHandler) {
    if (this.destroyed) {
     this._readyCapability.reject(new Error('Worker was destroyed'));
     return;
    }
    var isTypedArraysPresent = Uint8Array !== Float32Array;
    var port = new FakeWorkerPort(isTypedArraysPresent);
    this._port = port;
    var id = 'fake' + nextFakeWorkerId++;
    var workerHandler = new MessageHandler(id + '_worker', id, port);
    WorkerMessageHandler.setup(workerHandler, port);
    var messageHandler = new MessageHandler(id, id + '_worker', port);
    this._messageHandler = messageHandler;
    this._readyCapability.resolve();
   }.bind(this));
  },
  destroy: function PDFWorker_destroy() {
   this.destroyed = true;
   if (this._webWorker) {
    this._webWorker.terminate();
    this._webWorker = null;
   }
   this._port = null;
   if (this._messageHandler) {
    this._messageHandler.destroy();
    this._messageHandler = null;
   }
  }
 };
 return PDFWorker;
}();
var WorkerTransport = function WorkerTransportClosure() {
 function WorkerTransport(messageHandler, loadingTask, pdfDataRangeTransport, CMapReaderFactory) {
  this.messageHandler = messageHandler;
  this.loadingTask = loadingTask;
  this.pdfDataRangeTransport = pdfDataRangeTransport;
  this.commonObjs = new PDFObjects();
  this.fontLoader = new FontLoader(loadingTask.docId);
  this.CMapReaderFactory = new CMapReaderFactory({
   baseUrl: getDefaultSetting('cMapUrl'),
   isCompressed: getDefaultSetting('cMapPacked')
  });
  this.destroyed = false;
  this.destroyCapability = null;
  this._passwordCapability = null;
  this.pageCache = [];
  this.pagePromises = [];
  this.downloadInfoCapability = createPromiseCapability();
  this.setupMessageHandler();
 }
 WorkerTransport.prototype = {
  destroy: function WorkerTransport_destroy() {
   if (this.destroyCapability) {
    return this.destroyCapability.promise;
   }
   this.destroyed = true;
   this.destroyCapability = createPromiseCapability();
   if (this._passwordCapability) {
    this._passwordCapability.reject(new Error('Worker was destroyed during onPassword callback'));
   }
   var waitOn = [];
   this.pageCache.forEach(function (page) {
    if (page) {
     waitOn.push(page._destroy());
    }
   });
   this.pageCache = [];
   this.pagePromises = [];
   var self = this;
   var terminated = this.messageHandler.sendWithPromise('Terminate', null);
   waitOn.push(terminated);
   Promise.all(waitOn).then(function () {
    self.fontLoader.clear();
    if (self.pdfDataRangeTransport) {
     self.pdfDataRangeTransport.abort();
     self.pdfDataRangeTransport = null;
    }
    if (self.messageHandler) {
     self.messageHandler.destroy();
     self.messageHandler = null;
    }
    self.destroyCapability.resolve();
   }, this.destroyCapability.reject);
   return this.destroyCapability.promise;
  },
  setupMessageHandler: function WorkerTransport_setupMessageHandler() {
   var messageHandler = this.messageHandler;
   var loadingTask = this.loadingTask;
   var pdfDataRangeTransport = this.pdfDataRangeTransport;
   if (pdfDataRangeTransport) {
    pdfDataRangeTransport.addRangeListener(function (begin, chunk) {
     messageHandler.send('OnDataRange', {
      begin: begin,
      chunk: chunk
     });
    });
    pdfDataRangeTransport.addProgressListener(function (loaded) {
     messageHandler.send('OnDataProgress', { loaded: loaded });
    });
    pdfDataRangeTransport.addProgressiveReadListener(function (chunk) {
     messageHandler.send('OnDataRange', { chunk: chunk });
    });
    messageHandler.on('RequestDataRange', function transportDataRange(data) {
     pdfDataRangeTransport.requestDataRange(data.begin, data.end);
    }, this);
   }
   messageHandler.on('GetDoc', function transportDoc(data) {
    var pdfInfo = data.pdfInfo;
    this.numPages = data.pdfInfo.numPages;
    var loadingTask = this.loadingTask;
    var pdfDocument = new PDFDocumentProxy(pdfInfo, this, loadingTask);
    this.pdfDocument = pdfDocument;
    loadingTask._capability.resolve(pdfDocument);
   }, this);
   messageHandler.on('PasswordRequest', function transportPasswordRequest(exception) {
    this._passwordCapability = createPromiseCapability();
    if (loadingTask.onPassword) {
     var updatePassword = function (password) {
      this._passwordCapability.resolve({ password: password });
     }.bind(this);
     loadingTask.onPassword(updatePassword, exception.code);
    } else {
     this._passwordCapability.reject(new PasswordException(exception.message, exception.code));
    }
    return this._passwordCapability.promise;
   }, this);
   messageHandler.on('PasswordException', function transportPasswordException(exception) {
    loadingTask._capability.reject(new PasswordException(exception.message, exception.code));
   }, this);
   messageHandler.on('InvalidPDF', function transportInvalidPDF(exception) {
    this.loadingTask._capability.reject(new InvalidPDFException(exception.message));
   }, this);
   messageHandler.on('MissingPDF', function transportMissingPDF(exception) {
    this.loadingTask._capability.reject(new MissingPDFException(exception.message));
   }, this);
   messageHandler.on('UnexpectedResponse', function transportUnexpectedResponse(exception) {
    this.loadingTask._capability.reject(new UnexpectedResponseException(exception.message, exception.status));
   }, this);
   messageHandler.on('UnknownError', function transportUnknownError(exception) {
    this.loadingTask._capability.reject(new UnknownErrorException(exception.message, exception.details));
   }, this);
   messageHandler.on('DataLoaded', function transportPage(data) {
    this.downloadInfoCapability.resolve(data);
   }, this);
   messageHandler.on('PDFManagerReady', function transportPage(data) {
    if (this.pdfDataRangeTransport) {
     this.pdfDataRangeTransport.transportReady();
    }
   }, this);
   messageHandler.on('StartRenderPage', function transportRender(data) {
    if (this.destroyed) {
     return;
    }
    var page = this.pageCache[data.pageIndex];
    page.stats.timeEnd('Page Request');
    page._startRenderPage(data.transparency, data.intent);
   }, this);
   messageHandler.on('RenderPageChunk', function transportRender(data) {
    if (this.destroyed) {
     return;
    }
    var page = this.pageCache[data.pageIndex];
    page._renderPageChunk(data.operatorList, data.intent);
   }, this);
   messageHandler.on('commonobj', function transportObj(data) {
    if (this.destroyed) {
     return;
    }
    var id = data[0];
    var type = data[1];
    if (this.commonObjs.hasData(id)) {
     return;
    }
    switch (type) {
    case 'Font':
     var exportedData = data[2];
     if ('error' in exportedData) {
      var exportedError = exportedData.error;
      warn('Error during font loading: ' + exportedError);
      this.commonObjs.resolve(id, exportedError);
      break;
     }
     var fontRegistry = null;
     if (getDefaultSetting('pdfBug') && globalScope.FontInspector && globalScope['FontInspector'].enabled) {
      fontRegistry = {
       registerFont: function (font, url) {
        globalScope['FontInspector'].fontAdded(font, url);
       }
      };
     }
     var font = new FontFaceObject(exportedData, {
      isEvalSuported: getDefaultSetting('isEvalSupported'),
      disableFontFace: getDefaultSetting('disableFontFace'),
      fontRegistry: fontRegistry
     });
     this.fontLoader.bind([font], function fontReady(fontObjs) {
      this.commonObjs.resolve(id, font);
     }.bind(this));
     break;
    case 'FontPath':
     this.commonObjs.resolve(id, data[2]);
     break;
    default:
     error('Got unknown common object type ' + type);
    }
   }, this);
   messageHandler.on('obj', function transportObj(data) {
    if (this.destroyed) {
     return;
    }
    var id = data[0];
    var pageIndex = data[1];
    var type = data[2];
    var pageProxy = this.pageCache[pageIndex];
    var imageData;
    if (pageProxy.objs.hasData(id)) {
     return;
    }
    switch (type) {
    case 'JpegStream':
     imageData = data[3];
     loadJpegStream(id, imageData, pageProxy.objs);
     break;
    case 'Image':
     imageData = data[3];
     pageProxy.objs.resolve(id, imageData);
     var MAX_IMAGE_SIZE_TO_STORE = 8000000;
     if (imageData && 'data' in imageData && imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
      pageProxy.cleanupAfterRender = true;
     }
     break;
    default:
     error('Got unknown object type ' + type);
    }
   }, this);
   messageHandler.on('DocProgress', function transportDocProgress(data) {
    if (this.destroyed) {
     return;
    }
    var loadingTask = this.loadingTask;
    if (loadingTask.onProgress) {
     loadingTask.onProgress({
      loaded: data.loaded,
      total: data.total
     });
    }
   }, this);
   messageHandler.on('PageError', function transportError(data) {
    if (this.destroyed) {
     return;
    }
    var page = this.pageCache[data.pageNum - 1];
    var intentState = page.intentStates[data.intent];
    if (intentState.displayReadyCapability) {
     intentState.displayReadyCapability.reject(data.error);
    } else {
     error(data.error);
    }
    if (intentState.operatorList) {
     intentState.operatorList.lastChunk = true;
     for (var i = 0; i < intentState.renderTasks.length; i++) {
      intentState.renderTasks[i].operatorListChanged();
     }
    }
   }, this);
   messageHandler.on('UnsupportedFeature', function transportUnsupportedFeature(data) {
    if (this.destroyed) {
     return;
    }
    var featureId = data.featureId;
    var loadingTask = this.loadingTask;
    if (loadingTask.onUnsupportedFeature) {
     loadingTask.onUnsupportedFeature(featureId);
    }
    _UnsupportedManager.notify(featureId);
   }, this);
   messageHandler.on('JpegDecode', function (data) {
    if (this.destroyed) {
     return Promise.reject(new Error('Worker was destroyed'));
    }
    if (typeof document === 'undefined') {
     return Promise.reject(new Error('"document" is not defined.'));
    }
    var imageUrl = data[0];
    var components = data[1];
    if (components !== 3 && components !== 1) {
     return Promise.reject(new Error('Only 3 components or 1 component can be returned'));
    }
    return new Promise(function (resolve, reject) {
     var img = new Image();
     img.onload = function () {
      var width = img.width;
      var height = img.height;
      var size = width * height;
      var rgbaLength = size * 4;
      var buf = new Uint8Array(size * components);
      var tmpCanvas = document.createElement('canvas');
      tmpCanvas.width = width;
      tmpCanvas.height = height;
      var tmpCtx = tmpCanvas.getContext('2d');
      tmpCtx.drawImage(img, 0, 0);
      var data = tmpCtx.getImageData(0, 0, width, height).data;
      var i, j;
      if (components === 3) {
       for (i = 0, j = 0; i < rgbaLength; i += 4, j += 3) {
        buf[j] = data[i];
        buf[j + 1] = data[i + 1];
        buf[j + 2] = data[i + 2];
       }
      } else if (components === 1) {
       for (i = 0, j = 0; i < rgbaLength; i += 4, j++) {
        buf[j] = data[i];
       }
      }
      resolve({
       data: buf,
       width: width,
       height: height
      });
     };
     img.onerror = function () {
      reject(new Error('JpegDecode failed to load image'));
     };
     img.src = imageUrl;
    });
   }, this);
   messageHandler.on('FetchBuiltInCMap', function (data) {
    if (this.destroyed) {
     return Promise.reject(new Error('Worker was destroyed'));
    }
    return this.CMapReaderFactory.fetch({ name: data.name });
   }, this);
  },
  getData: function WorkerTransport_getData() {
   return this.messageHandler.sendWithPromise('GetData', null);
  },
  getPage: function WorkerTransport_getPage(pageNumber, capability) {
   if (!isInt(pageNumber) || pageNumber <= 0 || pageNumber > this.numPages) {
    return Promise.reject(new Error('Invalid page request'));
   }
   var pageIndex = pageNumber - 1;
   if (pageIndex in this.pagePromises) {
    return this.pagePromises[pageIndex];
   }
   var promise = this.messageHandler.sendWithPromise('GetPage', { pageIndex: pageIndex }).then(function (pageInfo) {
    if (this.destroyed) {
     throw new Error('Transport destroyed');
    }
    var page = new PDFPageProxy(pageIndex, pageInfo, this);
    this.pageCache[pageIndex] = page;
    return page;
   }.bind(this));
   this.pagePromises[pageIndex] = promise;
   return promise;
  },
  getPageIndex: function WorkerTransport_getPageIndexByRef(ref) {
   return this.messageHandler.sendWithPromise('GetPageIndex', { ref: ref }).catch(function (reason) {
    return Promise.reject(new Error(reason));
   });
  },
  getAnnotations: function WorkerTransport_getAnnotations(pageIndex, intent) {
   return this.messageHandler.sendWithPromise('GetAnnotations', {
    pageIndex: pageIndex,
    intent: intent
   });
  },
  getDestinations: function WorkerTransport_getDestinations() {
   return this.messageHandler.sendWithPromise('GetDestinations', null);
  },
  getDestination: function WorkerTransport_getDestination(id) {
   return this.messageHandler.sendWithPromise('GetDestination', { id: id });
  },
  getPageLabels: function WorkerTransport_getPageLabels() {
   return this.messageHandler.sendWithPromise('GetPageLabels', null);
  },
  getAttachments: function WorkerTransport_getAttachments() {
   return this.messageHandler.sendWithPromise('GetAttachments', null);
  },
  getJavaScript: function WorkerTransport_getJavaScript() {
   return this.messageHandler.sendWithPromise('GetJavaScript', null);
  },
  getOutline: function WorkerTransport_getOutline() {
   return this.messageHandler.sendWithPromise('GetOutline', null);
  },
  getMetadata: function WorkerTransport_getMetadata() {
   return this.messageHandler.sendWithPromise('GetMetadata', null).then(function transportMetadata(results) {
    return {
     info: results[0],
     metadata: results[1] ? new Metadata(results[1]) : null
    };
   });
  },
  getStats: function WorkerTransport_getStats() {
   return this.messageHandler.sendWithPromise('GetStats', null);
  },
  startCleanup: function WorkerTransport_startCleanup() {
   this.messageHandler.sendWithPromise('Cleanup', null).then(function endCleanup() {
    for (var i = 0, ii = this.pageCache.length; i < ii; i++) {
     var page = this.pageCache[i];
     if (page) {
      page.cleanup();
     }
    }
    this.commonObjs.clear();
    this.fontLoader.clear();
   }.bind(this));
  }
 };
 return WorkerTransport;
}();
var PDFObjects = function PDFObjectsClosure() {
 function PDFObjects() {
  this.objs = Object.create(null);
 }
 PDFObjects.prototype = {
  ensureObj: function PDFObjects_ensureObj(objId) {
   if (this.objs[objId]) {
    return this.objs[objId];
   }
   var obj = {
    capability: createPromiseCapability(),
    data: null,
    resolved: false
   };
   this.objs[objId] = obj;
   return obj;
  },
  get: function PDFObjects_get(objId, callback) {
   if (callback) {
    this.ensureObj(objId).capability.promise.then(callback);
    return null;
   }
   var obj = this.objs[objId];
   if (!obj || !obj.resolved) {
    error('Requesting object that isn\'t resolved yet ' + objId);
   }
   return obj.data;
  },
  resolve: function PDFObjects_resolve(objId, data) {
   var obj = this.ensureObj(objId);
   obj.resolved = true;
   obj.data = data;
   obj.capability.resolve(data);
  },
  isResolved: function PDFObjects_isResolved(objId) {
   var objs = this.objs;
   if (!objs[objId]) {
    return false;
   }
   return objs[objId].resolved;
  },
  hasData: function PDFObjects_hasData(objId) {
   return this.isResolved(objId);
  },
  getData: function PDFObjects_getData(objId) {
   var objs = this.objs;
   if (!objs[objId] || !objs[objId].resolved) {
    return null;
   }
   return objs[objId].data;
  },
  clear: function PDFObjects_clear() {
   this.objs = Object.create(null);
  }
 };
 return PDFObjects;
}();
var RenderTask = function RenderTaskClosure() {
 function RenderTask(internalRenderTask) {
  this._internalRenderTask = internalRenderTask;
  this.onContinue = null;
 }
 RenderTask.prototype = {
  get promise() {
   return this._internalRenderTask.capability.promise;
  },
  cancel: function RenderTask_cancel() {
   this._internalRenderTask.cancel();
  },
  then: function RenderTask_then(onFulfilled, onRejected) {
   return this.promise.then.apply(this.promise, arguments);
  }
 };
 return RenderTask;
}();
var InternalRenderTask = function InternalRenderTaskClosure() {
 function InternalRenderTask(callback, params, objs, commonObjs, operatorList, pageNumber, canvasFactory) {
  this.callback = callback;
  this.params = params;
  this.objs = objs;
  this.commonObjs = commonObjs;
  this.operatorListIdx = null;
  this.operatorList = operatorList;
  this.pageNumber = pageNumber;
  this.canvasFactory = canvasFactory;
  this.running = false;
  this.graphicsReadyCallback = null;
  this.graphicsReady = false;
  this.useRequestAnimationFrame = false;
  this.cancelled = false;
  this.capability = createPromiseCapability();
  this.task = new RenderTask(this);
  this._continueBound = this._continue.bind(this);
  this._scheduleNextBound = this._scheduleNext.bind(this);
  this._nextBound = this._next.bind(this);
 }
 InternalRenderTask.prototype = {
  initializeGraphics: function InternalRenderTask_initializeGraphics(transparency) {
   if (this.cancelled) {
    return;
   }
   if (getDefaultSetting('pdfBug') && globalScope.StepperManager && globalScope.StepperManager.enabled) {
    this.stepper = globalScope.StepperManager.create(this.pageNumber - 1);
    this.stepper.init(this.operatorList);
    this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
   }
   var params = this.params;
   this.gfx = new CanvasGraphics(params.canvasContext, this.commonObjs, this.objs, this.canvasFactory, params.imageLayer);
   this.gfx.beginDrawing(params.transform, params.viewport, transparency);
   this.operatorListIdx = 0;
   this.graphicsReady = true;
   if (this.graphicsReadyCallback) {
    this.graphicsReadyCallback();
   }
  },
  cancel: function InternalRenderTask_cancel() {
   this.running = false;
   this.cancelled = true;
   this.callback('cancelled');
  },
  operatorListChanged: function InternalRenderTask_operatorListChanged() {
   if (!this.graphicsReady) {
    if (!this.graphicsReadyCallback) {
     this.graphicsReadyCallback = this._continueBound;
    }
    return;
   }
   if (this.stepper) {
    this.stepper.updateOperatorList(this.operatorList);
   }
   if (this.running) {
    return;
   }
   this._continue();
  },
  _continue: function InternalRenderTask__continue() {
   this.running = true;
   if (this.cancelled) {
    return;
   }
   if (this.task.onContinue) {
    this.task.onContinue(this._scheduleNextBound);
   } else {
    this._scheduleNext();
   }
  },
  _scheduleNext: function InternalRenderTask__scheduleNext() {
   if (this.useRequestAnimationFrame && typeof window !== 'undefined') {
    window.requestAnimationFrame(this._nextBound);
   } else {
    Promise.resolve(undefined).then(this._nextBound);
   }
  },
  _next: function InternalRenderTask__next() {
   if (this.cancelled) {
    return;
   }
   this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
   if (this.operatorListIdx === this.operatorList.argsArray.length) {
    this.running = false;
    if (this.operatorList.lastChunk) {
     this.gfx.endDrawing();
     this.callback();
    }
   }
  }
 };
 return InternalRenderTask;
}();
var _UnsupportedManager = function UnsupportedManagerClosure() {
 var listeners = [];
 return {
  listen: function (cb) {
   deprecated('Global UnsupportedManager.listen is used: ' + ' use PDFDocumentLoadingTask.onUnsupportedFeature instead');
   listeners.push(cb);
  },
  notify: function (featureId) {
   for (var i = 0, ii = listeners.length; i < ii; i++) {
    listeners[i](featureId);
   }
  }
 };
}();
exports.version = '1.7.337';
exports.build = '9163a6fb';
exports.getDocument = getDocument;
exports.PDFDataRangeTransport = PDFDataRangeTransport;
exports.PDFWorker = PDFWorker;
exports.PDFDocumentProxy = PDFDocumentProxy;
exports.PDFPageProxy = PDFPageProxy;
exports._UnsupportedManager = _UnsupportedManager;

/***/ }),
/* 4 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var sharedUtil = __w_pdfjs_require__(0);
var FONT_IDENTITY_MATRIX = sharedUtil.FONT_IDENTITY_MATRIX;
var IDENTITY_MATRIX = sharedUtil.IDENTITY_MATRIX;
var ImageKind = sharedUtil.ImageKind;
var OPS = sharedUtil.OPS;
var Util = sharedUtil.Util;
var isNum = sharedUtil.isNum;
var isArray = sharedUtil.isArray;
var warn = sharedUtil.warn;
var createObjectURL = sharedUtil.createObjectURL;
var SVG_DEFAULTS = {
 fontStyle: 'normal',
 fontWeight: 'normal',
 fillColor: '#000000'
};
var convertImgDataToPng = function convertImgDataToPngClosure() {
 var PNG_HEADER = new Uint8Array([
  0x89,
  0x50,
  0x4e,
  0x47,
  0x0d,
  0x0a,
  0x1a,
  0x0a
 ]);
 var CHUNK_WRAPPER_SIZE = 12;
 var crcTable = new Int32Array(256);
 for (var i = 0; i < 256; i++) {
  var c = i;
  for (var h = 0; h < 8; h++) {
   if (c & 1) {
    c = 0xedB88320 ^ c >> 1 & 0x7fffffff;
   } else {
    c = c >> 1 & 0x7fffffff;
   }
  }
  crcTable[i] = c;
 }
 function crc32(data, start, end) {
  var crc = -1;
  for (var i = start; i < end; i++) {
   var a = (crc ^ data[i]) & 0xff;
   var b = crcTable[a];
   crc = crc >>> 8 ^ b;
  }
  return crc ^ -1;
 }
 function writePngChunk(type, body, data, offset) {
  var p = offset;
  var len = body.length;
  data[p] = len >> 24 & 0xff;
  data[p + 1] = len >> 16 & 0xff;
  data[p + 2] = len >> 8 & 0xff;
  data[p + 3] = len & 0xff;
  p += 4;
  data[p] = type.charCodeAt(0) & 0xff;
  data[p + 1] = type.charCodeAt(1) & 0xff;
  data[p + 2] = type.charCodeAt(2) & 0xff;
  data[p + 3] = type.charCodeAt(3) & 0xff;
  p += 4;
  data.set(body, p);
  p += body.length;
  var crc = crc32(data, offset + 4, p);
  data[p] = crc >> 24 & 0xff;
  data[p + 1] = crc >> 16 & 0xff;
  data[p + 2] = crc >> 8 & 0xff;
  data[p + 3] = crc & 0xff;
 }
 function adler32(data, start, end) {
  var a = 1;
  var b = 0;
  for (var i = start; i < end; ++i) {
   a = (a + (data[i] & 0xff)) % 65521;
   b = (b + a) % 65521;
  }
  return b << 16 | a;
 }
 function encode(imgData, kind, forceDataSchema) {
  var width = imgData.width;
  var height = imgData.height;
  var bitDepth, colorType, lineSize;
  var bytes = imgData.data;
  switch (kind) {
  case ImageKind.GRAYSCALE_1BPP:
   colorType = 0;
   bitDepth = 1;
   lineSize = width + 7 >> 3;
   break;
  case ImageKind.RGB_24BPP:
   colorType = 2;
   bitDepth = 8;
   lineSize = width * 3;
   break;
  case ImageKind.RGBA_32BPP:
   colorType = 6;
   bitDepth = 8;
   lineSize = width * 4;
   break;
  default:
   throw new Error('invalid format');
  }
  var literals = new Uint8Array((1 + lineSize) * height);
  var offsetLiterals = 0, offsetBytes = 0;
  var y, i;
  for (y = 0; y < height; ++y) {
   literals[offsetLiterals++] = 0;
   literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
   offsetBytes += lineSize;
   offsetLiterals += lineSize;
  }
  if (kind === ImageKind.GRAYSCALE_1BPP) {
   offsetLiterals = 0;
   for (y = 0; y < height; y++) {
    offsetLiterals++;
    for (i = 0; i < lineSize; i++) {
     literals[offsetLiterals++] ^= 0xFF;
    }
   }
  }
  var ihdr = new Uint8Array([
   width >> 24 & 0xff,
   width >> 16 & 0xff,
   width >> 8 & 0xff,
   width & 0xff,
   height >> 24 & 0xff,
   height >> 16 & 0xff,
   height >> 8 & 0xff,
   height & 0xff,
   bitDepth,
   colorType,
   0x00,
   0x00,
   0x00
  ]);
  var len = literals.length;
  var maxBlockLength = 0xFFFF;
  var deflateBlocks = Math.ceil(len / maxBlockLength);
  var idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
  var pi = 0;
  idat[pi++] = 0x78;
  idat[pi++] = 0x9c;
  var pos = 0;
  while (len > maxBlockLength) {
   idat[pi++] = 0x00;
   idat[pi++] = 0xff;
   idat[pi++] = 0xff;
   idat[pi++] = 0x00;
   idat[pi++] = 0x00;
   idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
   pi += maxBlockLength;
   pos += maxBlockLength;
   len -= maxBlockLength;
  }
  idat[pi++] = 0x01;
  idat[pi++] = len & 0xff;
  idat[pi++] = len >> 8 & 0xff;
  idat[pi++] = ~len & 0xffff & 0xff;
  idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
  idat.set(literals.subarray(pos), pi);
  pi += literals.length - pos;
  var adler = adler32(literals, 0, literals.length);
  idat[pi++] = adler >> 24 & 0xff;
  idat[pi++] = adler >> 16 & 0xff;
  idat[pi++] = adler >> 8 & 0xff;
  idat[pi++] = adler & 0xff;
  var pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
  var data = new Uint8Array(pngLength);
  var offset = 0;
  data.set(PNG_HEADER, offset);
  offset += PNG_HEADER.length;
  writePngChunk('IHDR', ihdr, data, offset);
  offset += CHUNK_WRAPPER_SIZE + ihdr.length;
  writePngChunk('IDATA', idat, data, offset);
  offset += CHUNK_WRAPPER_SIZE + idat.length;
  writePngChunk('IEND', new Uint8Array(0), data, offset);
  return createObjectURL(data, 'image/png', forceDataSchema);
 }
 return function convertImgDataToPng(imgData, forceDataSchema) {
  var kind = imgData.kind === undefined ? ImageKind.GRAYSCALE_1BPP : imgData.kind;
  return encode(imgData, kind, forceDataSchema);
 };
}();
var SVGExtraState = function SVGExtraStateClosure() {
 function SVGExtraState() {
  this.fontSizeScale = 1;
  this.fontWeight = SVG_DEFAULTS.fontWeight;
  this.fontSize = 0;
  this.textMatrix = IDENTITY_MATRIX;
  this.fontMatrix = FONT_IDENTITY_MATRIX;
  this.leading = 0;
  this.x = 0;
  this.y = 0;
  this.lineX = 0;
  this.lineY = 0;
  this.charSpacing = 0;
  this.wordSpacing = 0;
  this.textHScale = 1;
  this.textRise = 0;
  this.fillColor = SVG_DEFAULTS.fillColor;
  this.strokeColor = '#000000';
  this.fillAlpha = 1;
  this.strokeAlpha = 1;
  this.lineWidth = 1;
  this.lineJoin = '';
  this.lineCap = '';
  this.miterLimit = 0;
  this.dashArray = [];
  this.dashPhase = 0;
  this.dependencies = [];
  this.activeClipUrl = null;
  this.clipGroup = null;
  this.maskId = '';
 }
 SVGExtraState.prototype = {
  clone: function SVGExtraState_clone() {
   return Object.create(this);
  },
  setCurrentPoint: function SVGExtraState_setCurrentPoint(x, y) {
   this.x = x;
   this.y = y;
  }
 };
 return SVGExtraState;
}();
var SVGGraphics = function SVGGraphicsClosure() {
 function opListToTree(opList) {
  var opTree = [];
  var tmp = [];
  var opListLen = opList.length;
  for (var x = 0; x < opListLen; x++) {
   if (opList[x].fn === 'save') {
    opTree.push({
     'fnId': 92,
     'fn': 'group',
     'items': []
    });
    tmp.push(opTree);
    opTree = opTree[opTree.length - 1].items;
    continue;
   }
   if (opList[x].fn === 'restore') {
    opTree = tmp.pop();
   } else {
    opTree.push(opList[x]);
   }
  }
  return opTree;
 }
 function pf(value) {
  if (value === (value | 0)) {
   return value.toString();
  }
  var s = value.toFixed(10);
  var i = s.length - 1;
  if (s[i] !== '0') {
   return s;
  }
  do {
   i--;
  } while (s[i] === '0');
  return s.substr(0, s[i] === '.' ? i : i + 1);
 }
 function pm(m) {
  if (m[4] === 0 && m[5] === 0) {
   if (m[1] === 0 && m[2] === 0) {
    if (m[0] === 1 && m[3] === 1) {
     return '';
    }
    return 'scale(' + pf(m[0]) + ' ' + pf(m[3]) + ')';
   }
   if (m[0] === m[3] && m[1] === -m[2]) {
    var a = Math.acos(m[0]) * 180 / Math.PI;
    return 'rotate(' + pf(a) + ')';
   }
  } else {
   if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
    return 'translate(' + pf(m[4]) + ' ' + pf(m[5]) + ')';
   }
  }
  return 'matrix(' + pf(m[0]) + ' ' + pf(m[1]) + ' ' + pf(m[2]) + ' ' + pf(m[3]) + ' ' + pf(m[4]) + ' ' + pf(m[5]) + ')';
 }
 function SVGGraphics(commonObjs, objs, forceDataSchema) {
  this.current = new SVGExtraState();
  this.transformMatrix = IDENTITY_MATRIX;
  this.transformStack = [];
  this.extraStack = [];
  this.commonObjs = commonObjs;
  this.objs = objs;
  this.pendingEOFill = false;
  this.embedFonts = false;
  this.embeddedFonts = Object.create(null);
  this.cssStyle = null;
  this.forceDataSchema = !!forceDataSchema;
 }
 var NS = 'http://www.w3.org/2000/svg';
 var XML_NS = 'http://www.w3.org/XML/1998/namespace';
 var XLINK_NS = 'http://www.w3.org/1999/xlink';
 var LINE_CAP_STYLES = [
  'butt',
  'round',
  'square'
 ];
 var LINE_JOIN_STYLES = [
  'miter',
  'round',
  'bevel'
 ];
 var clipCount = 0;
 var maskCount = 0;
 SVGGraphics.prototype = {
  save: function SVGGraphics_save() {
   this.transformStack.push(this.transformMatrix);
   var old = this.current;
   this.extraStack.push(old);
   this.current = old.clone();
  },
  restore: function SVGGraphics_restore() {
   this.transformMatrix = this.transformStack.pop();
   this.current = this.extraStack.pop();
   this.tgrp = null;
  },
  group: function SVGGraphics_group(items) {
   this.save();
   this.executeOpTree(items);
   this.restore();
  },
  loadDependencies: function SVGGraphics_loadDependencies(operatorList) {
   var fnArray = operatorList.fnArray;
   var fnArrayLen = fnArray.length;
   var argsArray = operatorList.argsArray;
   var self = this;
   for (var i = 0; i < fnArrayLen; i++) {
    if (OPS.dependency === fnArray[i]) {
     var deps = argsArray[i];
     for (var n = 0, nn = deps.length; n < nn; n++) {
      var obj = deps[n];
      var common = obj.substring(0, 2) === 'g_';
      var promise;
      if (common) {
       promise = new Promise(function (resolve) {
        self.commonObjs.get(obj, resolve);
       });
      } else {
       promise = new Promise(function (resolve) {
        self.objs.get(obj, resolve);
       });
      }
      this.current.dependencies.push(promise);
     }
    }
   }
   return Promise.all(this.current.dependencies);
  },
  transform: function SVGGraphics_transform(a, b, c, d, e, f) {
   var transformMatrix = [
    a,
    b,
    c,
    d,
    e,
    f
   ];
   this.transformMatrix = Util.transform(this.transformMatrix, transformMatrix);
   this.tgrp = null;
  },
  getSVG: function SVGGraphics_getSVG(operatorList, viewport) {
   this.viewport = viewport;
   var svgElement = this._initialize(viewport);
   return this.loadDependencies(operatorList).then(function () {
    this.transformMatrix = IDENTITY_MATRIX;
    var opTree = this.convertOpList(operatorList);
    this.executeOpTree(opTree);
    return svgElement;
   }.bind(this));
  },
  convertOpList: function SVGGraphics_convertOpList(operatorList) {
   var argsArray = operatorList.argsArray;
   var fnArray = operatorList.fnArray;
   var fnArrayLen = fnArray.length;
   var REVOPS = [];
   var opList = [];
   for (var op in OPS) {
    REVOPS[OPS[op]] = op;
   }
   for (var x = 0; x < fnArrayLen; x++) {
    var fnId = fnArray[x];
    opList.push({
     'fnId': fnId,
     'fn': REVOPS[fnId],
     'args': argsArray[x]
    });
   }
   return opListToTree(opList);
  },
  executeOpTree: function SVGGraphics_executeOpTree(opTree) {
   var opTreeLen = opTree.length;
   for (var x = 0; x < opTreeLen; x++) {
    var fn = opTree[x].fn;
    var fnId = opTree[x].fnId;
    var args = opTree[x].args;
    switch (fnId | 0) {
    case OPS.beginText:
     this.beginText();
     break;
    case OPS.setLeading:
     this.setLeading(args);
     break;
    case OPS.setLeadingMoveText:
     this.setLeadingMoveText(args[0], args[1]);
     break;
    case OPS.setFont:
     this.setFont(args);
     break;
    case OPS.showText:
     this.showText(args[0]);
     break;
    case OPS.showSpacedText:
     this.showText(args[0]);
     break;
    case OPS.endText:
     this.endText();
     break;
    case OPS.moveText:
     this.moveText(args[0], args[1]);
     break;
    case OPS.setCharSpacing:
     this.setCharSpacing(args[0]);
     break;
    case OPS.setWordSpacing:
     this.setWordSpacing(args[0]);
     break;
    case OPS.setHScale:
     this.setHScale(args[0]);
     break;
    case OPS.setTextMatrix:
     this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
     break;
    case OPS.setLineWidth:
     this.setLineWidth(args[0]);
     break;
    case OPS.setLineJoin:
     this.setLineJoin(args[0]);
     break;
    case OPS.setLineCap:
     this.setLineCap(args[0]);
     break;
    case OPS.setMiterLimit:
     this.setMiterLimit(args[0]);
     break;
    case OPS.setFillRGBColor:
     this.setFillRGBColor(args[0], args[1], args[2]);
     break;
    case OPS.setStrokeRGBColor:
     this.setStrokeRGBColor(args[0], args[1], args[2]);
     break;
    case OPS.setDash:
     this.setDash(args[0], args[1]);
     break;
    case OPS.setGState:
     this.setGState(args[0]);
     break;
    case OPS.fill:
     this.fill();
     break;
    case OPS.eoFill:
     this.eoFill();
     break;
    case OPS.stroke:
     this.stroke();
     break;
    case OPS.fillStroke:
     this.fillStroke();
     break;
    case OPS.eoFillStroke:
     this.eoFillStroke();
     break;
    case OPS.clip:
     this.clip('nonzero');
     break;
    case OPS.eoClip:
     this.clip('evenodd');
     break;
    case OPS.paintSolidColorImageMask:
     this.paintSolidColorImageMask();
     break;
    case OPS.paintJpegXObject:
     this.paintJpegXObject(args[0], args[1], args[2]);
     break;
    case OPS.paintImageXObject:
     this.paintImageXObject(args[0]);
     break;
    case OPS.paintInlineImageXObject:
     this.paintInlineImageXObject(args[0]);
     break;
    case OPS.paintImageMaskXObject:
     this.paintImageMaskXObject(args[0]);
     break;
    case OPS.paintFormXObjectBegin:
     this.paintFormXObjectBegin(args[0], args[1]);
     break;
    case OPS.paintFormXObjectEnd:
     this.paintFormXObjectEnd();
     break;
    case OPS.closePath:
     this.closePath();
     break;
    case OPS.closeStroke:
     this.closeStroke();
     break;
    case OPS.closeFillStroke:
     this.closeFillStroke();
     break;
    case OPS.nextLine:
     this.nextLine();
     break;
    case OPS.transform:
     this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
     break;
    case OPS.constructPath:
     this.constructPath(args[0], args[1]);
     break;
    case OPS.endPath:
     this.endPath();
     break;
    case 92:
     this.group(opTree[x].items);
     break;
    default:
     warn('Unimplemented operator ' + fn);
     break;
    }
   }
  },
  setWordSpacing: function SVGGraphics_setWordSpacing(wordSpacing) {
   this.current.wordSpacing = wordSpacing;
  },
  setCharSpacing: function SVGGraphics_setCharSpacing(charSpacing) {
   this.current.charSpacing = charSpacing;
  },
  nextLine: function SVGGraphics_nextLine() {
   this.moveText(0, this.current.leading);
  },
  setTextMatrix: function SVGGraphics_setTextMatrix(a, b, c, d, e, f) {
   var current = this.current;
   this.current.textMatrix = this.current.lineMatrix = [
    a,
    b,
    c,
    d,
    e,
    f
   ];
   this.current.x = this.current.lineX = 0;
   this.current.y = this.current.lineY = 0;
   current.xcoords = [];
   current.tspan = document.createElementNS(NS, 'svg:tspan');
   current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
   current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
   current.tspan.setAttributeNS(null, 'y', pf(-current.y));
   current.txtElement = document.createElementNS(NS, 'svg:text');
   current.txtElement.appendChild(current.tspan);
  },
  beginText: function SVGGraphics_beginText() {
   this.current.x = this.current.lineX = 0;
   this.current.y = this.current.lineY = 0;
   this.current.textMatrix = IDENTITY_MATRIX;
   this.current.lineMatrix = IDENTITY_MATRIX;
   this.current.tspan = document.createElementNS(NS, 'svg:tspan');
   this.current.txtElement = document.createElementNS(NS, 'svg:text');
   this.current.txtgrp = document.createElementNS(NS, 'svg:g');
   this.current.xcoords = [];
  },
  moveText: function SVGGraphics_moveText(x, y) {
   var current = this.current;
   this.current.x = this.current.lineX += x;
   this.current.y = this.current.lineY += y;
   current.xcoords = [];
   current.tspan = document.createElementNS(NS, 'svg:tspan');
   current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
   current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
   current.tspan.setAttributeNS(null, 'y', pf(-current.y));
  },
  showText: function SVGGraphics_showText(glyphs) {
   var current = this.current;
   var font = current.font;
   var fontSize = current.fontSize;
   if (fontSize === 0) {
    return;
   }
   var charSpacing = current.charSpacing;
   var wordSpacing = current.wordSpacing;
   var fontDirection = current.fontDirection;
   var textHScale = current.textHScale * fontDirection;
   var glyphsLength = glyphs.length;
   var vertical = font.vertical;
   var widthAdvanceScale = fontSize * current.fontMatrix[0];
   var x = 0, i;
   for (i = 0; i < glyphsLength; ++i) {
    var glyph = glyphs[i];
    if (glyph === null) {
     x += fontDirection * wordSpacing;
     continue;
    } else if (isNum(glyph)) {
     x += -glyph * fontSize * 0.001;
     continue;
    }
    current.xcoords.push(current.x + x * textHScale);
    var width = glyph.width;
    var character = glyph.fontChar;
    var charWidth = width * widthAdvanceScale + charSpacing * fontDirection;
    x += charWidth;
    current.tspan.textContent += character;
   }
   if (vertical) {
    current.y -= x * textHScale;
   } else {
    current.x += x * textHScale;
   }
   current.tspan.setAttributeNS(null, 'x', current.xcoords.map(pf).join(' '));
   current.tspan.setAttributeNS(null, 'y', pf(-current.y));
   current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
   current.tspan.setAttributeNS(null, 'font-size', pf(current.fontSize) + 'px');
   if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
    current.tspan.setAttributeNS(null, 'font-style', current.fontStyle);
   }
   if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
    current.tspan.setAttributeNS(null, 'font-weight', current.fontWeight);
   }
   if (current.fillColor !== SVG_DEFAULTS.fillColor) {
    current.tspan.setAttributeNS(null, 'fill', current.fillColor);
   }
   current.txtElement.setAttributeNS(null, 'transform', pm(current.textMatrix) + ' scale(1, -1)');
   current.txtElement.setAttributeNS(XML_NS, 'xml:space', 'preserve');
   current.txtElement.appendChild(current.tspan);
   current.txtgrp.appendChild(current.txtElement);
   this._ensureTransformGroup().appendChild(current.txtElement);
  },
  setLeadingMoveText: function SVGGraphics_setLeadingMoveText(x, y) {
   this.setLeading(-y);
   this.moveText(x, y);
  },
  addFontStyle: function SVGGraphics_addFontStyle(fontObj) {
   if (!this.cssStyle) {
    this.cssStyle = document.createElementNS(NS, 'svg:style');
    this.cssStyle.setAttributeNS(null, 'type', 'text/css');
    this.defs.appendChild(this.cssStyle);
   }
   var url = createObjectURL(fontObj.data, fontObj.mimetype, this.forceDataSchema);
   this.cssStyle.textContent += '@font-face { font-family: "' + fontObj.loadedName + '";' + ' src: url(' + url + '); }\n';
  },
  setFont: function SVGGraphics_setFont(details) {
   var current = this.current;
   var fontObj = this.commonObjs.get(details[0]);
   var size = details[1];
   this.current.font = fontObj;
   if (this.embedFonts && fontObj.data && !this.embeddedFonts[fontObj.loadedName]) {
    this.addFontStyle(fontObj);
    this.embeddedFonts[fontObj.loadedName] = fontObj;
   }
   current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : FONT_IDENTITY_MATRIX;
   var bold = fontObj.black ? fontObj.bold ? 'bolder' : 'bold' : fontObj.bold ? 'bold' : 'normal';
   var italic = fontObj.italic ? 'italic' : 'normal';
   if (size < 0) {
    size = -size;
    current.fontDirection = -1;
   } else {
    current.fontDirection = 1;
   }
   current.fontSize = size;
   current.fontFamily = fontObj.loadedName;
   current.fontWeight = bold;
   current.fontStyle = italic;
   current.tspan = document.createElementNS(NS, 'svg:tspan');
   current.tspan.setAttributeNS(null, 'y', pf(-current.y));
   current.xcoords = [];
  },
  endText: function SVGGraphics_endText() {
  },
  setLineWidth: function SVGGraphics_setLineWidth(width) {
   this.current.lineWidth = width;
  },
  setLineCap: function SVGGraphics_setLineCap(style) {
   this.current.lineCap = LINE_CAP_STYLES[style];
  },
  setLineJoin: function SVGGraphics_setLineJoin(style) {
   this.current.lineJoin = LINE_JOIN_STYLES[style];
  },
  setMiterLimit: function SVGGraphics_setMiterLimit(limit) {
   this.current.miterLimit = limit;
  },
  setStrokeRGBColor: function SVGGraphics_setStrokeRGBColor(r, g, b) {
   var color = Util.makeCssRgb(r, g, b);
   this.current.strokeColor = color;
  },
  setFillRGBColor: function SVGGraphics_setFillRGBColor(r, g, b) {
   var color = Util.makeCssRgb(r, g, b);
   this.current.fillColor = color;
   this.current.tspan = document.createElementNS(NS, 'svg:tspan');
   this.current.xcoords = [];
  },
  setDash: function SVGGraphics_setDash(dashArray, dashPhase) {
   this.current.dashArray = dashArray;
   this.current.dashPhase = dashPhase;
  },
  constructPath: function SVGGraphics_constructPath(ops, args) {
   var current = this.current;
   var x = current.x, y = current.y;
   current.path = document.createElementNS(NS, 'svg:path');
   var d = [];
   var opLength = ops.length;
   for (var i = 0, j = 0; i < opLength; i++) {
    switch (ops[i] | 0) {
    case OPS.rectangle:
     x = args[j++];
     y = args[j++];
     var width = args[j++];
     var height = args[j++];
     var xw = x + width;
     var yh = y + height;
     d.push('M', pf(x), pf(y), 'L', pf(xw), pf(y), 'L', pf(xw), pf(yh), 'L', pf(x), pf(yh), 'Z');
     break;
    case OPS.moveTo:
     x = args[j++];
     y = args[j++];
     d.push('M', pf(x), pf(y));
     break;
    case OPS.lineTo:
     x = args[j++];
     y = args[j++];
     d.push('L', pf(x), pf(y));
     break;
    case OPS.curveTo:
     x = args[j + 4];
     y = args[j + 5];
     d.push('C', pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
     j += 6;
     break;
    case OPS.curveTo2:
     x = args[j + 2];
     y = args[j + 3];
     d.push('C', pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
     j += 4;
     break;
    case OPS.curveTo3:
     x = args[j + 2];
     y = args[j + 3];
     d.push('C', pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
     j += 4;
     break;
    case OPS.closePath:
     d.push('Z');
     break;
    }
   }
   current.path.setAttributeNS(null, 'd', d.join(' '));
   current.path.setAttributeNS(null, 'stroke-miterlimit', pf(current.miterLimit));
   current.path.setAttributeNS(null, 'stroke-linecap', current.lineCap);
   current.path.setAttributeNS(null, 'stroke-linejoin', current.lineJoin);
   current.path.setAttributeNS(null, 'stroke-width', pf(current.lineWidth) + 'px');
   current.path.setAttributeNS(null, 'stroke-dasharray', current.dashArray.map(pf).join(' '));
   current.path.setAttributeNS(null, 'stroke-dashoffset', pf(current.dashPhase) + 'px');
   current.path.setAttributeNS(null, 'fill', 'none');
   this._ensureTransformGroup().appendChild(current.path);
   current.element = current.path;
   current.setCurrentPoint(x, y);
  },
  endPath: function SVGGraphics_endPath() {
  },
  clip: function SVGGraphics_clip(type) {
   var current = this.current;
   var clipId = 'clippath' + clipCount;
   clipCount++;
   var clipPath = document.createElementNS(NS, 'svg:clipPath');
   clipPath.setAttributeNS(null, 'id', clipId);
   clipPath.setAttributeNS(null, 'transform', pm(this.transformMatrix));
   var clipElement = current.element.cloneNode();
   if (type === 'evenodd') {
    clipElement.setAttributeNS(null, 'clip-rule', 'evenodd');
   } else {
    clipElement.setAttributeNS(null, 'clip-rule', 'nonzero');
   }
   clipPath.appendChild(clipElement);
   this.defs.appendChild(clipPath);
   if (current.activeClipUrl) {
    current.clipGroup = null;
    this.extraStack.forEach(function (prev) {
     prev.clipGroup = null;
    });
   }
   current.activeClipUrl = 'url(#' + clipId + ')';
   this.tgrp = null;
  },
  closePath: function SVGGraphics_closePath() {
   var current = this.current;
   var d = current.path.getAttributeNS(null, 'd');
   d += 'Z';
   current.path.setAttributeNS(null, 'd', d);
  },
  setLeading: function SVGGraphics_setLeading(leading) {
   this.current.leading = -leading;
  },
  setTextRise: function SVGGraphics_setTextRise(textRise) {
   this.current.textRise = textRise;
  },
  setHScale: function SVGGraphics_setHScale(scale) {
   this.current.textHScale = scale / 100;
  },
  setGState: function SVGGraphics_setGState(states) {
   for (var i = 0, ii = states.length; i < ii; i++) {
    var state = states[i];
    var key = state[0];
    var value = state[1];
    switch (key) {
    case 'LW':
     this.setLineWidth(value);
     break;
    case 'LC':
     this.setLineCap(value);
     break;
    case 'LJ':
     this.setLineJoin(value);
     break;
    case 'ML':
     this.setMiterLimit(value);
     break;
    case 'D':
     this.setDash(value[0], value[1]);
     break;
    case 'Font':
     this.setFont(value);
     break;
    default:
     warn('Unimplemented graphic state ' + key);
     break;
    }
   }
  },
  fill: function SVGGraphics_fill() {
   var current = this.current;
   current.element.setAttributeNS(null, 'fill', current.fillColor);
  },
  stroke: function SVGGraphics_stroke() {
   var current = this.current;
   current.element.setAttributeNS(null, 'stroke', current.strokeColor);
   current.element.setAttributeNS(null, 'fill', 'none');
  },
  eoFill: function SVGGraphics_eoFill() {
   var current = this.current;
   current.element.setAttributeNS(null, 'fill', current.fillColor);
   current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
  },
  fillStroke: function SVGGraphics_fillStroke() {
   this.stroke();
   this.fill();
  },
  eoFillStroke: function SVGGraphics_eoFillStroke() {
   this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
   this.fillStroke();
  },
  closeStroke: function SVGGraphics_closeStroke() {
   this.closePath();
   this.stroke();
  },
  closeFillStroke: function SVGGraphics_closeFillStroke() {
   this.closePath();
   this.fillStroke();
  },
  paintSolidColorImageMask: function SVGGraphics_paintSolidColorImageMask() {
   var current = this.current;
   var rect = document.createElementNS(NS, 'svg:rect');
   rect.setAttributeNS(null, 'x', '0');
   rect.setAttributeNS(null, 'y', '0');
   rect.setAttributeNS(null, 'width', '1px');
   rect.setAttributeNS(null, 'height', '1px');
   rect.setAttributeNS(null, 'fill', current.fillColor);
   this._ensureTransformGroup().appendChild(rect);
  },
  paintJpegXObject: function SVGGraphics_paintJpegXObject(objId, w, h) {
   var imgObj = this.objs.get(objId);
   var imgEl = document.createElementNS(NS, 'svg:image');
   imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgObj.src);
   imgEl.setAttributeNS(null, 'width', imgObj.width + 'px');
   imgEl.setAttributeNS(null, 'height', imgObj.height + 'px');
   imgEl.setAttributeNS(null, 'x', '0');
   imgEl.setAttributeNS(null, 'y', pf(-h));
   imgEl.setAttributeNS(null, 'transform', 'scale(' + pf(1 / w) + ' ' + pf(-1 / h) + ')');
   this._ensureTransformGroup().appendChild(imgEl);
  },
  paintImageXObject: function SVGGraphics_paintImageXObject(objId) {
   var imgData = this.objs.get(objId);
   if (!imgData) {
    warn('Dependent image isn\'t ready yet');
    return;
   }
   this.paintInlineImageXObject(imgData);
  },
  paintInlineImageXObject: function SVGGraphics_paintInlineImageXObject(imgData, mask) {
   var width = imgData.width;
   var height = imgData.height;
   var imgSrc = convertImgDataToPng(imgData, this.forceDataSchema);
   var cliprect = document.createElementNS(NS, 'svg:rect');
   cliprect.setAttributeNS(null, 'x', '0');
   cliprect.setAttributeNS(null, 'y', '0');
   cliprect.setAttributeNS(null, 'width', pf(width));
   cliprect.setAttributeNS(null, 'height', pf(height));
   this.current.element = cliprect;
   this.clip('nonzero');
   var imgEl = document.createElementNS(NS, 'svg:image');
   imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgSrc);
   imgEl.setAttributeNS(null, 'x', '0');
   imgEl.setAttributeNS(null, 'y', pf(-height));
   imgEl.setAttributeNS(null, 'width', pf(width) + 'px');
   imgEl.setAttributeNS(null, 'height', pf(height) + 'px');
   imgEl.setAttributeNS(null, 'transform', 'scale(' + pf(1 / width) + ' ' + pf(-1 / height) + ')');
   if (mask) {
    mask.appendChild(imgEl);
   } else {
    this._ensureTransformGroup().appendChild(imgEl);
   }
  },
  paintImageMaskXObject: function SVGGraphics_paintImageMaskXObject(imgData) {
   var current = this.current;
   var width = imgData.width;
   var height = imgData.height;
   var fillColor = current.fillColor;
   current.maskId = 'mask' + maskCount++;
   var mask = document.createElementNS(NS, 'svg:mask');
   mask.setAttributeNS(null, 'id', current.maskId);
   var rect = document.createElementNS(NS, 'svg:rect');
   rect.setAttributeNS(null, 'x', '0');
   rect.setAttributeNS(null, 'y', '0');
   rect.setAttributeNS(null, 'width', pf(width));
   rect.setAttributeNS(null, 'height', pf(height));
   rect.setAttributeNS(null, 'fill', fillColor);
   rect.setAttributeNS(null, 'mask', 'url(#' + current.maskId + ')');
   this.defs.appendChild(mask);
   this._ensureTransformGroup().appendChild(rect);
   this.paintInlineImageXObject(imgData, mask);
  },
  paintFormXObjectBegin: function SVGGraphics_paintFormXObjectBegin(matrix, bbox) {
   if (isArray(matrix) && matrix.length === 6) {
    this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
   }
   if (isArray(bbox) && bbox.length === 4) {
    var width = bbox[2] - bbox[0];
    var height = bbox[3] - bbox[1];
    var cliprect = document.createElementNS(NS, 'svg:rect');
    cliprect.setAttributeNS(null, 'x', bbox[0]);
    cliprect.setAttributeNS(null, 'y', bbox[1]);
    cliprect.setAttributeNS(null, 'width', pf(width));
    cliprect.setAttributeNS(null, 'height', pf(height));
    this.current.element = cliprect;
    this.clip('nonzero');
    this.endPath();
   }
  },
  paintFormXObjectEnd: function SVGGraphics_paintFormXObjectEnd() {
  },
  _initialize: function SVGGraphics_initialize(viewport) {
   var svg = document.createElementNS(NS, 'svg:svg');
   svg.setAttributeNS(null, 'version', '1.1');
   svg.setAttributeNS(null, 'width', viewport.width + 'px');
   svg.setAttributeNS(null, 'height', viewport.height + 'px');
   svg.setAttributeNS(null, 'preserveAspectRatio', 'none');
   svg.setAttributeNS(null, 'viewBox', '0 0 ' + viewport.width + ' ' + viewport.height);
   var definitions = document.createElementNS(NS, 'svg:defs');
   svg.appendChild(definitions);
   this.defs = definitions;
   var rootGroup = document.createElementNS(NS, 'svg:g');
   rootGroup.setAttributeNS(null, 'transform', pm(viewport.transform));
   svg.appendChild(rootGroup);
   this.svg = rootGroup;
   return svg;
  },
  _ensureClipGroup: function SVGGraphics_ensureClipGroup() {
   if (!this.current.clipGroup) {
    var clipGroup = document.createElementNS(NS, 'svg:g');
    clipGroup.setAttributeNS(null, 'clip-path', this.current.activeClipUrl);
    this.svg.appendChild(clipGroup);
    this.current.clipGroup = clipGroup;
   }
   return this.current.clipGroup;
  },
  _ensureTransformGroup: function SVGGraphics_ensureTransformGroup() {
   if (!this.tgrp) {
    this.tgrp = document.createElementNS(NS, 'svg:g');
    this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
    if (this.current.activeClipUrl) {
     this._ensureClipGroup().appendChild(this.tgrp);
    } else {
     this.svg.appendChild(this.tgrp);
    }
   }
   return this.tgrp;
  }
 };
 return SVGGraphics;
}();
exports.SVGGraphics = SVGGraphics;

/***/ }),
/* 5 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var sharedUtil = __w_pdfjs_require__(0);
var displayDOMUtils = __w_pdfjs_require__(1);
var Util = sharedUtil.Util;
var createPromiseCapability = sharedUtil.createPromiseCapability;
var CustomStyle = displayDOMUtils.CustomStyle;
var getDefaultSetting = displayDOMUtils.getDefaultSetting;
var renderTextLayer = function renderTextLayerClosure() {
 var MAX_TEXT_DIVS_TO_RENDER = 100000;
 var NonWhitespaceRegexp = /\S/;
 function isAllWhitespace(str) {
  return !NonWhitespaceRegexp.test(str);
 }
 var styleBuf = [
  'left: ',
  0,
  'px; top: ',
  0,
  'px; font-size: ',
  0,
  'px; font-family: ',
  '',
  ';'
 ];
 function appendText(task, geom, styles) {
  var textDiv = document.createElement('div');
  var textDivProperties = {
   style: null,
   angle: 0,
   canvasWidth: 0,
   isWhitespace: false,
   originalTransform: null,
   paddingBottom: 0,
   paddingLeft: 0,
   paddingRight: 0,
   paddingTop: 0,
   scale: 1
  };
  task._textDivs.push(textDiv);
  if (isAllWhitespace(geom.str)) {
   textDivProperties.isWhitespace = true;
   task._textDivProperties.set(textDiv, textDivProperties);
   return;
  }
  var tx = Util.transform(task._viewport.transform, geom.transform);
  var angle = Math.atan2(tx[1], tx[0]);
  var style = styles[geom.fontName];
  if (style.vertical) {
   angle += Math.PI / 2;
  }
  var fontHeight = Math.sqrt(tx[2] * tx[2] + tx[3] * tx[3]);
  var fontAscent = fontHeight;
  if (style.ascent) {
   fontAscent = style.ascent * fontAscent;
  } else if (style.descent) {
   fontAscent = (1 + style.descent) * fontAscent;
  }
  var left;
  var top;
  if (angle === 0) {
   left = tx[4];
   top = tx[5] - fontAscent;
  } else {
   left = tx[4] + fontAscent * Math.sin(angle);
   top = tx[5] - fontAscent * Math.cos(angle);
  }
  styleBuf[1] = left;
  styleBuf[3] = top;
  styleBuf[5] = fontHeight;
  styleBuf[7] = style.fontFamily;
  textDivProperties.style = styleBuf.join('');
  textDiv.setAttribute('style', textDivProperties.style);
  textDiv.textContent = geom.str;
  if (getDefaultSetting('pdfBug')) {
   textDiv.dataset.fontName = geom.fontName;
  }
  if (angle !== 0) {
   textDivProperties.angle = angle * (180 / Math.PI);
  }
  if (geom.str.length > 1) {
   if (style.vertical) {
    textDivProperties.canvasWidth = geom.height * task._viewport.scale;
   } else {
    textDivProperties.canvasWidth = geom.width * task._viewport.scale;
   }
  }
  task._textDivProperties.set(textDiv, textDivProperties);
  if (task._enhanceTextSelection) {
   var angleCos = 1, angleSin = 0;
   if (angle !== 0) {
    angleCos = Math.cos(angle);
    angleSin = Math.sin(angle);
   }
   var divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
   var divHeight = fontHeight;
   var m, b;
   if (angle !== 0) {
    m = [
     angleCos,
     angleSin,
     -angleSin,
     angleCos,
     left,
     top
    ];
    b = Util.getAxialAlignedBoundingBox([
     0,
     0,
     divWidth,
     divHeight
    ], m);
   } else {
    b = [
     left,
     top,
     left + divWidth,
     top + divHeight
    ];
   }
   task._bounds.push({
    left: b[0],
    top: b[1],
    right: b[2],
    bottom: b[3],
    div: textDiv,
    size: [
     divWidth,
     divHeight
    ],
    m: m
   });
  }
 }
 function render(task) {
  if (task._canceled) {
   return;
  }
  var textLayerFrag = task._container;
  var textDivs = task._textDivs;
  var capability = task._capability;
  var textDivsLength = textDivs.length;
  if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
   task._renderingDone = true;
   capability.resolve();
   return;
  }
  var canvas = document.createElement('canvas');
  canvas.mozOpaque = true;
  var ctx = canvas.getContext('2d', { alpha: false });
  var lastFontSize;
  var lastFontFamily;
  for (var i = 0; i < textDivsLength; i++) {
   var textDiv = textDivs[i];
   var textDivProperties = task._textDivProperties.get(textDiv);
   if (textDivProperties.isWhitespace) {
    continue;
   }
   var fontSize = textDiv.style.fontSize;
   var fontFamily = textDiv.style.fontFamily;
   if (fontSize !== lastFontSize || fontFamily !== lastFontFamily) {
    ctx.font = fontSize + ' ' + fontFamily;
    lastFontSize = fontSize;
    lastFontFamily = fontFamily;
   }
   var width = ctx.measureText(textDiv.textContent).width;
   textLayerFrag.appendChild(textDiv);
   var transform = '';
   if (textDivProperties.canvasWidth !== 0 && width > 0) {
    textDivProperties.scale = textDivProperties.canvasWidth / width;
    transform = 'scaleX(' + textDivProperties.scale + ')';
   }
   if (textDivProperties.angle !== 0) {
    transform = 'rotate(' + textDivProperties.angle + 'deg) ' + transform;
   }
   if (transform !== '') {
    textDivProperties.originalTransform = transform;
    CustomStyle.setProp('transform', textDiv, transform);
   }
   task._textDivProperties.set(textDiv, textDivProperties);
  }
  task._renderingDone = true;
  capability.resolve();
 }
 function expand(task) {
  var bounds = task._bounds;
  var viewport = task._viewport;
  var expanded = expandBounds(viewport.width, viewport.height, bounds);
  for (var i = 0; i < expanded.length; i++) {
   var div = bounds[i].div;
   var divProperties = task._textDivProperties.get(div);
   if (divProperties.angle === 0) {
    divProperties.paddingLeft = bounds[i].left - expanded[i].left;
    divProperties.paddingTop = bounds[i].top - expanded[i].top;
    divProperties.paddingRight = expanded[i].right - bounds[i].right;
    divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;
    task._textDivProperties.set(div, divProperties);
    continue;
   }
   var e = expanded[i], b = bounds[i];
   var m = b.m, c = m[0], s = m[1];
   var points = [
    [
     0,
     0
    ],
    [
     0,
     b.size[1]
    ],
    [
     b.size[0],
     0
    ],
    b.size
   ];
   var ts = new Float64Array(64);
   points.forEach(function (p, i) {
    var t = Util.applyTransform(p, m);
    ts[i + 0] = c && (e.left - t[0]) / c;
    ts[i + 4] = s && (e.top - t[1]) / s;
    ts[i + 8] = c && (e.right - t[0]) / c;
    ts[i + 12] = s && (e.bottom - t[1]) / s;
    ts[i + 16] = s && (e.left - t[0]) / -s;
    ts[i + 20] = c && (e.top - t[1]) / c;
    ts[i + 24] = s && (e.right - t[0]) / -s;
    ts[i + 28] = c && (e.bottom - t[1]) / c;
    ts[i + 32] = c && (e.left - t[0]) / -c;
    ts[i + 36] = s && (e.top - t[1]) / -s;
    ts[i + 40] = c && (e.right - t[0]) / -c;
    ts[i + 44] = s && (e.bottom - t[1]) / -s;
    ts[i + 48] = s && (e.left - t[0]) / s;
    ts[i + 52] = c && (e.top - t[1]) / -c;
    ts[i + 56] = s && (e.right - t[0]) / s;
    ts[i + 60] = c && (e.bottom - t[1]) / -c;
   });
   var findPositiveMin = function (ts, offset, count) {
    var result = 0;
    for (var i = 0; i < count; i++) {
     var t = ts[offset++];
     if (t > 0) {
      result = result ? Math.min(t, result) : t;
     }
    }
    return result;
   };
   var boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
   divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
   divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
   divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
   divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;
   task._textDivProperties.set(div, divProperties);
  }
 }
 function expandBounds(width, height, boxes) {
  var bounds = boxes.map(function (box, i) {
   return {
    x1: box.left,
    y1: box.top,
    x2: box.right,
    y2: box.bottom,
    index: i,
    x1New: undefined,
    x2New: undefined
   };
  });
  expandBoundsLTR(width, bounds);
  var expanded = new Array(boxes.length);
  bounds.forEach(function (b) {
   var i = b.index;
   expanded[i] = {
    left: b.x1New,
    top: 0,
    right: b.x2New,
    bottom: 0
   };
  });
  boxes.map(function (box, i) {
   var e = expanded[i], b = bounds[i];
   b.x1 = box.top;
   b.y1 = width - e.right;
   b.x2 = box.bottom;
   b.y2 = width - e.left;
   b.index = i;
   b.x1New = undefined;
   b.x2New = undefined;
  });
  expandBoundsLTR(height, bounds);
  bounds.forEach(function (b) {
   var i = b.index;
   expanded[i].top = b.x1New;
   expanded[i].bottom = b.x2New;
  });
  return expanded;
 }
 function expandBoundsLTR(width, bounds) {
  bounds.sort(function (a, b) {
   return a.x1 - b.x1 || a.index - b.index;
  });
  var fakeBoundary = {
   x1: -Infinity,
   y1: -Infinity,
   x2: 0,
   y2: Infinity,
   index: -1,
   x1New: 0,
   x2New: 0
  };
  var horizon = [{
    start: -Infinity,
    end: Infinity,
    boundary: fakeBoundary
   }];
  bounds.forEach(function (boundary) {
   var i = 0;
   while (i < horizon.length && horizon[i].end <= boundary.y1) {
    i++;
   }
   var j = horizon.length - 1;
   while (j >= 0 && horizon[j].start >= boundary.y2) {
    j--;
   }
   var horizonPart, affectedBoundary;
   var q, k, maxXNew = -Infinity;
   for (q = i; q <= j; q++) {
    horizonPart = horizon[q];
    affectedBoundary = horizonPart.boundary;
    var xNew;
    if (affectedBoundary.x2 > boundary.x1) {
     xNew = affectedBoundary.index > boundary.index ? affectedBoundary.x1New : boundary.x1;
    } else if (affectedBoundary.x2New === undefined) {
     xNew = (affectedBoundary.x2 + boundary.x1) / 2;
    } else {
     xNew = affectedBoundary.x2New;
    }
    if (xNew > maxXNew) {
     maxXNew = xNew;
    }
   }
   boundary.x1New = maxXNew;
   for (q = i; q <= j; q++) {
    horizonPart = horizon[q];
    affectedBoundary = horizonPart.boundary;
    if (affectedBoundary.x2New === undefined) {
     if (affectedBoundary.x2 > boundary.x1) {
      if (affectedBoundary.index > boundary.index) {
       affectedBoundary.x2New = affectedBoundary.x2;
      }
     } else {
      affectedBoundary.x2New = maxXNew;
     }
    } else if (affectedBoundary.x2New > maxXNew) {
     affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
    }
   }
   var changedHorizon = [], lastBoundary = null;
   for (q = i; q <= j; q++) {
    horizonPart = horizon[q];
    affectedBoundary = horizonPart.boundary;
    var useBoundary = affectedBoundary.x2 > boundary.x2 ? affectedBoundary : boundary;
    if (lastBoundary === useBoundary) {
     changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
    } else {
     changedHorizon.push({
      start: horizonPart.start,
      end: horizonPart.end,
      boundary: useBoundary
     });
     lastBoundary = useBoundary;
    }
   }
   if (horizon[i].start < boundary.y1) {
    changedHorizon[0].start = boundary.y1;
    changedHorizon.unshift({
     start: horizon[i].start,
     end: boundary.y1,
     boundary: horizon[i].boundary
    });
   }
   if (boundary.y2 < horizon[j].end) {
    changedHorizon[changedHorizon.length - 1].end = boundary.y2;
    changedHorizon.push({
     start: boundary.y2,
     end: horizon[j].end,
     boundary: horizon[j].boundary
    });
   }
   for (q = i; q <= j; q++) {
    horizonPart = horizon[q];
    affectedBoundary = horizonPart.boundary;
    if (affectedBoundary.x2New !== undefined) {
     continue;
    }
    var used = false;
    for (k = i - 1; !used && k >= 0 && horizon[k].start >= affectedBoundary.y1; k--) {
     used = horizon[k].boundary === affectedBoundary;
    }
    for (k = j + 1; !used && k < horizon.length && horizon[k].end <= affectedBoundary.y2; k++) {
     used = horizon[k].boundary === affectedBoundary;
    }
    for (k = 0; !used && k < changedHorizon.length; k++) {
     used = changedHorizon[k].boundary === affectedBoundary;
    }
    if (!used) {
     affectedBoundary.x2New = maxXNew;
    }
   }
   Array.prototype.splice.apply(horizon, [
    i,
    j - i + 1
   ].concat(changedHorizon));
  });
  horizon.forEach(function (horizonPart) {
   var affectedBoundary = horizonPart.boundary;
   if (affectedBoundary.x2New === undefined) {
    affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
   }
  });
 }
 function TextLayerRenderTask(textContent, container, viewport, textDivs, enhanceTextSelection) {
  this._textContent = textContent;
  this._container = container;
  this._viewport = viewport;
  this._textDivs = textDivs || [];
  this._textDivProperties = new WeakMap();
  this._renderingDone = false;
  this._canceled = false;
  this._capability = createPromiseCapability();
  this._renderTimer = null;
  this._bounds = [];
  this._enhanceTextSelection = !!enhanceTextSelection;
 }
 TextLayerRenderTask.prototype = {
  get promise() {
   return this._capability.promise;
  },
  cancel: function TextLayer_cancel() {
   this._canceled = true;
   if (this._renderTimer !== null) {
    clearTimeout(this._renderTimer);
    this._renderTimer = null;
   }
   this._capability.reject('canceled');
  },
  _render: function TextLayer_render(timeout) {
   var textItems = this._textContent.items;
   var textStyles = this._textContent.styles;
   for (var i = 0, len = textItems.length; i < len; i++) {
    appendText(this, textItems[i], textStyles);
   }
   if (!timeout) {
    render(this);
   } else {
    var self = this;
    this._renderTimer = setTimeout(function () {
     render(self);
     self._renderTimer = null;
    }, timeout);
   }
  },
  expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
   if (!this._enhanceTextSelection || !this._renderingDone) {
    return;
   }
   if (this._bounds !== null) {
    expand(this);
    this._bounds = null;
   }
   for (var i = 0, ii = this._textDivs.length; i < ii; i++) {
    var div = this._textDivs[i];
    var divProperties = this._textDivProperties.get(div);
    if (divProperties.isWhitespace) {
     continue;
    }
    if (expandDivs) {
     var transform = '', padding = '';
     if (divProperties.scale !== 1) {
      transform = 'scaleX(' + divProperties.scale + ')';
     }
     if (divProperties.angle !== 0) {
      transform = 'rotate(' + divProperties.angle + 'deg) ' + transform;
     }
     if (divProperties.paddingLeft !== 0) {
      padding += ' padding-left: ' + divProperties.paddingLeft / divProperties.scale + 'px;';
      transform += ' translateX(' + -divProperties.paddingLeft / divProperties.scale + 'px)';
     }
     if (divProperties.paddingTop !== 0) {
      padding += ' padding-top: ' + divProperties.paddingTop + 'px;';
      transform += ' translateY(' + -divProperties.paddingTop + 'px)';
     }
     if (divProperties.paddingRight !== 0) {
      padding += ' padding-right: ' + divProperties.paddingRight / divProperties.scale + 'px;';
     }
     if (divProperties.paddingBottom !== 0) {
      padding += ' padding-bottom: ' + divProperties.paddingBottom + 'px;';
     }
     if (padding !== '') {
      div.setAttribute('style', divProperties.style + padding);
     }
     if (transform !== '') {
      CustomStyle.setProp('transform', div, transform);
     }
    } else {
     div.style.padding = 0;
     CustomStyle.setProp('transform', div, divProperties.originalTransform || '');
    }
   }
  }
 };
 function renderTextLayer(renderParameters) {
  var task = new TextLayerRenderTask(renderParameters.textContent, renderParameters.container, renderParameters.viewport, renderParameters.textDivs, renderParameters.enhanceTextSelection);
  task._render(renderParameters.timeout);
  return task;
 }
 return renderTextLayer;
}();
exports.renderTextLayer = renderTextLayer;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;
g = function () {
 return this;
}();
try {
 g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
 if (typeof window === "object")
  g = window;
}
module.exports = g;

/***/ }),
/* 7 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var sharedUtil = __w_pdfjs_require__(0);
var error = sharedUtil.error;
function fixMetadata(meta) {
 return meta.replace(/>\\376\\377([^<]+)/g, function (all, codes) {
  var bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g, function (code, d1, d2, d3) {
   return String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1);
  });
  var chars = '';
  for (var i = 0; i < bytes.length; i += 2) {
   var code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);
   chars += code >= 32 && code < 127 && code !== 60 && code !== 62 && code !== 38 ? String.fromCharCode(code) : '&#x' + (0x10000 + code).toString(16).substring(1) + ';';
  }
  return '>' + chars;
 });
}
function Metadata(meta) {
 if (typeof meta === 'string') {
  meta = fixMetadata(meta);
  var parser = new DOMParser();
  meta = parser.parseFromString(meta, 'application/xml');
 } else if (!(meta instanceof Document)) {
  error('Metadata: Invalid metadata object');
 }
 this.metaDocument = meta;
 this.metadata = Object.create(null);
 this.parse();
}
Metadata.prototype = {
 parse: function Metadata_parse() {
  var doc = this.metaDocument;
  var rdf = doc.documentElement;
  if (rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
   rdf = rdf.firstChild;
   while (rdf && rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
    rdf = rdf.nextSibling;
   }
  }
  var nodeName = rdf ? rdf.nodeName.toLowerCase() : null;
  if (!rdf || nodeName !== 'rdf:rdf' || !rdf.hasChildNodes()) {
   return;
  }
  var children = rdf.childNodes, desc, entry, name, i, ii, length, iLength;
  for (i = 0, length = children.length; i < length; i++) {
   desc = children[i];
   if (desc.nodeName.toLowerCase() !== 'rdf:description') {
    continue;
   }
   for (ii = 0, iLength = desc.childNodes.length; ii < iLength; ii++) {
    if (desc.childNodes[ii].nodeName.toLowerCase() !== '#text') {
     entry = desc.childNodes[ii];
     name = entry.nodeName.toLowerCase();
     this.metadata[name] = entry.textContent.trim();
    }
   }
  }
 },
 get: function Metadata_get(name) {
  return this.metadata[name] || null;
 },
 has: function Metadata_has(name) {
  return typeof this.metadata[name] !== 'undefined';
 }
};
exports.Metadata = Metadata;

/***/ }),
/* 8 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var sharedUtil = __w_pdfjs_require__(0);
var displayDOMUtils = __w_pdfjs_require__(1);
var shadow = sharedUtil.shadow;
var getDefaultSetting = displayDOMUtils.getDefaultSetting;
var WebGLUtils = function WebGLUtilsClosure() {
 function loadShader(gl, code, shaderType) {
  var shader = gl.createShader(shaderType);
  gl.shaderSource(shader, code);
  gl.compileShader(shader);
  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!compiled) {
   var errorMsg = gl.getShaderInfoLog(shader);
   throw new Error('Error during shader compilation: ' + errorMsg);
  }
  return shader;
 }
 function createVertexShader(gl, code) {
  return loadShader(gl, code, gl.VERTEX_SHADER);
 }
 function createFragmentShader(gl, code) {
  return loadShader(gl, code, gl.FRAGMENT_SHADER);
 }
 function createProgram(gl, shaders) {
  var program = gl.createProgram();
  for (var i = 0, ii = shaders.length; i < ii; ++i) {
   gl.attachShader(program, shaders[i]);
  }
  gl.linkProgram(program);
  var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!linked) {
   var errorMsg = gl.getProgramInfoLog(program);
   throw new Error('Error during program linking: ' + errorMsg);
  }
  return program;
 }
 function createTexture(gl, image, textureId) {
  gl.activeTexture(textureId);
  var texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  return texture;
 }
 var currentGL, currentCanvas;
 function generateGL() {
  if (currentGL) {
   return;
  }
  currentCanvas = document.createElement('canvas');
  currentGL = currentCanvas.getContext('webgl', { premultipliedalpha: false });
 }
 var smaskVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ';
 var smaskFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ';
 var smaskCache = null;
 function initSmaskGL() {
  var canvas, gl;
  generateGL();
  canvas = currentCanvas;
  currentCanvas = null;
  gl = currentGL;
  currentGL = null;
  var vertexShader = createVertexShader(gl, smaskVertexShaderCode);
  var fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
  var program = createProgram(gl, [
   vertexShader,
   fragmentShader
  ]);
  gl.useProgram(program);
  var cache = {};
  cache.gl = gl;
  cache.canvas = canvas;
  cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
  cache.positionLocation = gl.getAttribLocation(program, 'a_position');
  cache.backdropLocation = gl.getUniformLocation(program, 'u_backdrop');
  cache.subtypeLocation = gl.getUniformLocation(program, 'u_subtype');
  var texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
  var texLayerLocation = gl.getUniformLocation(program, 'u_image');
  var texMaskLocation = gl.getUniformLocation(program, 'u_mask');
  var texCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
   0.0,
   0.0,
   1.0,
   0.0,
   0.0,
   1.0,
   0.0,
   1.0,
   1.0,
   0.0,
   1.0,
   1.0
  ]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(texCoordLocation);
  gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
  gl.uniform1i(texLayerLocation, 0);
  gl.uniform1i(texMaskLocation, 1);
  smaskCache = cache;
 }
 function composeSMask(layer, mask, properties) {
  var width = layer.width, height = layer.height;
  if (!smaskCache) {
   initSmaskGL();
  }
  var cache = smaskCache, canvas = cache.canvas, gl = cache.gl;
  canvas.width = width;
  canvas.height = height;
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.uniform2f(cache.resolutionLocation, width, height);
  if (properties.backdrop) {
   gl.uniform4f(cache.resolutionLocation, properties.backdrop[0], properties.backdrop[1], properties.backdrop[2], 1);
  } else {
   gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
  }
  gl.uniform1i(cache.subtypeLocation, properties.subtype === 'Luminosity' ? 1 : 0);
  var texture = createTexture(gl, layer, gl.TEXTURE0);
  var maskTexture = createTexture(gl, mask, gl.TEXTURE1);
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
   0,
   0,
   width,
   0,
   0,
   height,
   0,
   height,
   width,
   0,
   width,
   height
  ]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(cache.positionLocation);
  gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
  gl.clearColor(0, 0, 0, 0);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 6);
  gl.flush();
  gl.deleteTexture(texture);
  gl.deleteTexture(maskTexture);
  gl.deleteBuffer(buffer);
  return canvas;
 }
 var figuresVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ';
 var figuresFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ';
 var figuresCache = null;
 function initFiguresGL() {
  var canvas, gl;
  generateGL();
  canvas = currentCanvas;
  currentCanvas = null;
  gl = currentGL;
  currentGL = null;
  var vertexShader = createVertexShader(gl, figuresVertexShaderCode);
  var fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
  var program = createProgram(gl, [
   vertexShader,
   fragmentShader
  ]);
  gl.useProgram(program);
  var cache = {};
  cache.gl = gl;
  cache.canvas = canvas;
  cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
  cache.scaleLocation = gl.getUniformLocation(program, 'u_scale');
  cache.offsetLocation = gl.getUniformLocation(program, 'u_offset');
  cache.positionLocation = gl.getAttribLocation(program, 'a_position');
  cache.colorLocation = gl.getAttribLocation(program, 'a_color');
  figuresCache = cache;
 }
 function drawFigures(width, height, backgroundColor, figures, context) {
  if (!figuresCache) {
   initFiguresGL();
  }
  var cache = figuresCache, canvas = cache.canvas, gl = cache.gl;
  canvas.width = width;
  canvas.height = height;
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.uniform2f(cache.resolutionLocation, width, height);
  var count = 0;
  var i, ii, rows;
  for (i = 0, ii = figures.length; i < ii; i++) {
   switch (figures[i].type) {
   case 'lattice':
    rows = figures[i].coords.length / figures[i].verticesPerRow | 0;
    count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
    break;
   case 'triangles':
    count += figures[i].coords.length;
    break;
   }
  }
  var coords = new Float32Array(count * 2);
  var colors = new Uint8Array(count * 3);
  var coordsMap = context.coords, colorsMap = context.colors;
  var pIndex = 0, cIndex = 0;
  for (i = 0, ii = figures.length; i < ii; i++) {
   var figure = figures[i], ps = figure.coords, cs = figure.colors;
   switch (figure.type) {
   case 'lattice':
    var cols = figure.verticesPerRow;
    rows = ps.length / cols | 0;
    for (var row = 1; row < rows; row++) {
     var offset = row * cols + 1;
     for (var col = 1; col < cols; col++, offset++) {
      coords[pIndex] = coordsMap[ps[offset - cols - 1]];
      coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
      coords[pIndex + 2] = coordsMap[ps[offset - cols]];
      coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
      coords[pIndex + 4] = coordsMap[ps[offset - 1]];
      coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
      colors[cIndex] = colorsMap[cs[offset - cols - 1]];
      colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
      colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
      colors[cIndex + 3] = colorsMap[cs[offset - cols]];
      colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
      colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
      colors[cIndex + 6] = colorsMap[cs[offset - 1]];
      colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
      colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];
      coords[pIndex + 6] = coords[pIndex + 2];
      coords[pIndex + 7] = coords[pIndex + 3];
      coords[pIndex + 8] = coords[pIndex + 4];
      coords[pIndex + 9] = coords[pIndex + 5];
      coords[pIndex + 10] = coordsMap[ps[offset]];
      coords[pIndex + 11] = coordsMap[ps[offset] + 1];
      colors[cIndex + 9] = colors[cIndex + 3];
      colors[cIndex + 10] = colors[cIndex + 4];
      colors[cIndex + 11] = colors[cIndex + 5];
      colors[cIndex + 12] = colors[cIndex + 6];
      colors[cIndex + 13] = colors[cIndex + 7];
      colors[cIndex + 14] = colors[cIndex + 8];
      colors[cIndex + 15] = colorsMap[cs[offset]];
      colors[cIndex + 16] = colorsMap[cs[offset] + 1];
      colors[cIndex + 17] = colorsMap[cs[offset] + 2];
      pIndex += 12;
      cIndex += 18;
     }
    }
    break;
   case 'triangles':
    for (var j = 0, jj = ps.length; j < jj; j++) {
     coords[pIndex] = coordsMap[ps[j]];
     coords[pIndex + 1] = coordsMap[ps[j] + 1];
     colors[cIndex] = colorsMap[cs[j]];
     colors[cIndex + 1] = colorsMap[cs[j] + 1];
     colors[cIndex + 2] = colorsMap[cs[j] + 2];
     pIndex += 2;
     cIndex += 3;
    }
    break;
   }
  }
  if (backgroundColor) {
   gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255, backgroundColor[2] / 255, 1.0);
  } else {
   gl.clearColor(0, 0, 0, 0);
  }
  gl.clear(gl.COLOR_BUFFER_BIT);
  var coordsBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
  gl.enableVertexAttribArray(cache.positionLocation);
  gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);
  var colorsBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
  gl.enableVertexAttribArray(cache.colorLocation);
  gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false, 0, 0);
  gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
  gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);
  gl.drawArrays(gl.TRIANGLES, 0, count);
  gl.flush();
  gl.deleteBuffer(coordsBuffer);
  gl.deleteBuffer(colorsBuffer);
  return canvas;
 }
 function cleanup() {
  if (smaskCache && smaskCache.canvas) {
   smaskCache.canvas.width = 0;
   smaskCache.canvas.height = 0;
  }
  if (figuresCache && figuresCache.canvas) {
   figuresCache.canvas.width = 0;
   figuresCache.canvas.height = 0;
  }
  smaskCache = null;
  figuresCache = null;
 }
 return {
  get isEnabled() {
   if (getDefaultSetting('disableWebGL')) {
    return false;
   }
   var enabled = false;
   try {
    generateGL();
    enabled = !!currentGL;
   } catch (e) {
   }
   return shadow(this, 'isEnabled', enabled);
  },
  composeSMask: composeSMask,
  drawFigures: drawFigures,
  clear: cleanup
 };
}();
exports.WebGLUtils = WebGLUtils;

/***/ }),
/* 9 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var sharedUtil = __w_pdfjs_require__(0);
var displayDOMUtils = __w_pdfjs_require__(1);
var displayAPI = __w_pdfjs_require__(3);
var displayAnnotationLayer = __w_pdfjs_require__(2);
var displayTextLayer = __w_pdfjs_require__(5);
var displayMetadata = __w_pdfjs_require__(7);
var displaySVG = __w_pdfjs_require__(4);
var globalScope = sharedUtil.globalScope;
var deprecated = sharedUtil.deprecated;
var warn = sharedUtil.warn;
var LinkTarget = displayDOMUtils.LinkTarget;
var DEFAULT_LINK_REL = displayDOMUtils.DEFAULT_LINK_REL;
var isWorker = typeof window === 'undefined';
if (!globalScope.PDFJS) {
 globalScope.PDFJS = {};
}
var PDFJS = globalScope.PDFJS;
PDFJS.version = '1.7.337';
PDFJS.build = '9163a6fb';
PDFJS.pdfBug = false;
if (PDFJS.verbosity !== undefined) {
 sharedUtil.setVerbosityLevel(PDFJS.verbosity);
}
delete PDFJS.verbosity;
Object.defineProperty(PDFJS, 'verbosity', {
 get: function () {
  return sharedUtil.getVerbosityLevel();
 },
 set: function (level) {
  sharedUtil.setVerbosityLevel(level);
 },
 enumerable: true,
 configurable: true
});
PDFJS.VERBOSITY_LEVELS = sharedUtil.VERBOSITY_LEVELS;
PDFJS.OPS = sharedUtil.OPS;
PDFJS.UNSUPPORTED_FEATURES = sharedUtil.UNSUPPORTED_FEATURES;
PDFJS.isValidUrl = displayDOMUtils.isValidUrl;
PDFJS.shadow = sharedUtil.shadow;
PDFJS.createBlob = sharedUtil.createBlob;
PDFJS.createObjectURL = function PDFJS_createObjectURL(data, contentType) {
 return sharedUtil.createObjectURL(data, contentType, PDFJS.disableCreateObjectURL);
};
Object.defineProperty(PDFJS, 'isLittleEndian', {
 configurable: true,
 get: function PDFJS_isLittleEndian() {
  var value = sharedUtil.isLittleEndian();
  return sharedUtil.shadow(PDFJS, 'isLittleEndian', value);
 }
});
PDFJS.removeNullCharacters = sharedUtil.removeNullCharacters;
PDFJS.PasswordResponses = sharedUtil.PasswordResponses;
PDFJS.PasswordException = sharedUtil.PasswordException;
PDFJS.UnknownErrorException = sharedUtil.UnknownErrorException;
PDFJS.InvalidPDFException = sharedUtil.InvalidPDFException;
PDFJS.MissingPDFException = sharedUtil.MissingPDFException;
PDFJS.UnexpectedResponseException = sharedUtil.UnexpectedResponseException;
PDFJS.Util = sharedUtil.Util;
PDFJS.PageViewport = sharedUtil.PageViewport;
PDFJS.createPromiseCapability = sharedUtil.createPromiseCapability;
PDFJS.maxImageSize = PDFJS.maxImageSize === undefined ? -1 : PDFJS.maxImageSize;
PDFJS.cMapUrl = PDFJS.cMapUrl === undefined ? null : PDFJS.cMapUrl;
PDFJS.cMapPacked = PDFJS.cMapPacked === undefined ? false : PDFJS.cMapPacked;
PDFJS.disableFontFace = PDFJS.disableFontFace === undefined ? false : PDFJS.disableFontFace;
PDFJS.imageResourcesPath = PDFJS.imageResourcesPath === undefined ? '' : PDFJS.imageResourcesPath;
PDFJS.disableWorker = PDFJS.disableWorker === undefined ? false : PDFJS.disableWorker;
PDFJS.workerSrc = PDFJS.workerSrc === undefined ? null : PDFJS.workerSrc;
PDFJS.workerPort = PDFJS.workerPort === undefined ? null : PDFJS.workerPort;
PDFJS.disableRange = PDFJS.disableRange === undefined ? false : PDFJS.disableRange;
PDFJS.disableStream = PDFJS.disableStream === undefined ? false : PDFJS.disableStream;
PDFJS.disableAutoFetch = PDFJS.disableAutoFetch === undefined ? false : PDFJS.disableAutoFetch;
PDFJS.pdfBug = PDFJS.pdfBug === undefined ? false : PDFJS.pdfBug;
PDFJS.postMessageTransfers = PDFJS.postMessageTransfers === undefined ? true : PDFJS.postMessageTransfers;
PDFJS.disableCreateObjectURL = PDFJS.disableCreateObjectURL === undefined ? false : PDFJS.disableCreateObjectURL;
PDFJS.disableWebGL = PDFJS.disableWebGL === undefined ? true : PDFJS.disableWebGL;
PDFJS.externalLinkTarget = PDFJS.externalLinkTarget === undefined ? LinkTarget.NONE : PDFJS.externalLinkTarget;
PDFJS.externalLinkRel = PDFJS.externalLinkRel === undefined ? DEFAULT_LINK_REL : PDFJS.externalLinkRel;
PDFJS.isEvalSupported = PDFJS.isEvalSupported === undefined ? true : PDFJS.isEvalSupported;
var savedOpenExternalLinksInNewWindow = PDFJS.openExternalLinksInNewWindow;
delete PDFJS.openExternalLinksInNewWindow;
Object.defineProperty(PDFJS, 'openExternalLinksInNewWindow', {
 get: function () {
  return PDFJS.externalLinkTarget === LinkTarget.BLANK;
 },
 set: function (value) {
  if (value) {
   deprecated('PDFJS.openExternalLinksInNewWindow, please use ' + '"PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.');
  }
  if (PDFJS.externalLinkTarget !== LinkTarget.NONE) {
   warn('PDFJS.externalLinkTarget is already initialized');
   return;
  }
  PDFJS.externalLinkTarget = value ? LinkTarget.BLANK : LinkTarget.NONE;
 },
 enumerable: true,
 configurable: true
});
if (savedOpenExternalLinksInNewWindow) {
 PDFJS.openExternalLinksInNewWindow = savedOpenExternalLinksInNewWindow;
}
PDFJS.getDocument = displayAPI.getDocument;
PDFJS.PDFDataRangeTransport = displayAPI.PDFDataRangeTransport;
PDFJS.PDFWorker = displayAPI.PDFWorker;
Object.defineProperty(PDFJS, 'hasCanvasTypedArrays', {
 configurable: true,
 get: function PDFJS_hasCanvasTypedArrays() {
  var value = displayDOMUtils.hasCanvasTypedArrays();
  return sharedUtil.shadow(PDFJS, 'hasCanvasTypedArrays', value);
 }
});
PDFJS.CustomStyle = displayDOMUtils.CustomStyle;
PDFJS.LinkTarget = LinkTarget;
PDFJS.addLinkAttributes = displayDOMUtils.addLinkAttributes;
PDFJS.getFilenameFromUrl = displayDOMUtils.getFilenameFromUrl;
PDFJS.isExternalLinkTargetSet = displayDOMUtils.isExternalLinkTargetSet;
PDFJS.AnnotationLayer = displayAnnotationLayer.AnnotationLayer;
PDFJS.renderTextLayer = displayTextLayer.renderTextLayer;
PDFJS.Metadata = displayMetadata.Metadata;
PDFJS.SVGGraphics = displaySVG.SVGGraphics;
PDFJS.UnsupportedManager = displayAPI._UnsupportedManager;
exports.globalScope = globalScope;
exports.isWorker = isWorker;
exports.PDFJS = globalScope.PDFJS;

/***/ }),
/* 10 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var sharedUtil = __w_pdfjs_require__(0);
var displayDOMUtils = __w_pdfjs_require__(1);
var displayPatternHelper = __w_pdfjs_require__(12);
var displayWebGL = __w_pdfjs_require__(8);
var FONT_IDENTITY_MATRIX = sharedUtil.FONT_IDENTITY_MATRIX;
var IDENTITY_MATRIX = sharedUtil.IDENTITY_MATRIX;
var ImageKind = sharedUtil.ImageKind;
var OPS = sharedUtil.OPS;
var TextRenderingMode = sharedUtil.TextRenderingMode;
var Uint32ArrayView = sharedUtil.Uint32ArrayView;
var Util = sharedUtil.Util;
var assert = sharedUtil.assert;
var info = sharedUtil.info;
var isNum = sharedUtil.isNum;
var isArray = sharedUtil.isArray;
var isLittleEndian = sharedUtil.isLittleEndian;
var error = sharedUtil.error;
var shadow = sharedUtil.shadow;
var warn = sharedUtil.warn;
var TilingPattern = displayPatternHelper.TilingPattern;
var getShadingPatternFromIR = displayPatternHelper.getShadingPatternFromIR;
var WebGLUtils = displayWebGL.WebGLUtils;
var hasCanvasTypedArrays = displayDOMUtils.hasCanvasTypedArrays;
var MIN_FONT_SIZE = 16;
var MAX_FONT_SIZE = 100;
var MAX_GROUP_SIZE = 4096;
var MIN_WIDTH_FACTOR = 0.65;
var COMPILE_TYPE3_GLYPHS = true;
var MAX_SIZE_TO_COMPILE = 1000;
var FULL_CHUNK_HEIGHT = 16;
var HasCanvasTypedArraysCached = {
 get value() {
  return shadow(HasCanvasTypedArraysCached, 'value', hasCanvasTypedArrays());
 }
};
var IsLittleEndianCached = {
 get value() {
  return shadow(IsLittleEndianCached, 'value', isLittleEndian());
 }
};
function addContextCurrentTransform(ctx) {
 if (!ctx.mozCurrentTransform) {
  ctx._originalSave = ctx.save;
  ctx._originalRestore = ctx.restore;
  ctx._originalRotate = ctx.rotate;
  ctx._originalScale = ctx.scale;
  ctx._originalTranslate = ctx.translate;
  ctx._originalTransform = ctx.transform;
  ctx._originalSetTransform = ctx.setTransform;
  ctx._transformMatrix = ctx._transformMatrix || [
   1,
   0,
   0,
   1,
   0,
   0
  ];
  ctx._transformStack = [];
  Object.defineProperty(ctx, 'mozCurrentTransform', {
   get: function getCurrentTransform() {
    return this._transformMatrix;
   }
  });
  Object.defineProperty(ctx, 'mozCurrentTransformInverse', {
   get: function getCurrentTransformInverse() {
    var m = this._transformMatrix;
    var a = m[0], b = m[1], c = m[2], d = m[3], e = m[4], f = m[5];
    var ad_bc = a * d - b * c;
    var bc_ad = b * c - a * d;
    return [
     d / ad_bc,
     b / bc_ad,
     c / bc_ad,
     a / ad_bc,
     (d * e - c * f) / bc_ad,
     (b * e - a * f) / ad_bc
    ];
   }
  });
  ctx.save = function ctxSave() {
   var old = this._transformMatrix;
   this._transformStack.push(old);
   this._transformMatrix = old.slice(0, 6);
   this._originalSave();
  };
  ctx.restore = function ctxRestore() {
   var prev = this._transformStack.pop();
   if (prev) {
    this._transformMatrix = prev;
    this._originalRestore();
   }
  };
  ctx.translate = function ctxTranslate(x, y) {
   var m = this._transformMatrix;
   m[4] = m[0] * x + m[2] * y + m[4];
   m[5] = m[1] * x + m[3] * y + m[5];
   this._originalTranslate(x, y);
  };
  ctx.scale = function ctxScale(x, y) {
   var m = this._transformMatrix;
   m[0] = m[0] * x;
   m[1] = m[1] * x;
   m[2] = m[2] * y;
   m[3] = m[3] * y;
   this._originalScale(x, y);
  };
  ctx.transform = function ctxTransform(a, b, c, d, e, f) {
   var m = this._transformMatrix;
   this._transformMatrix = [
    m[0] * a + m[2] * b,
    m[1] * a + m[3] * b,
    m[0] * c + m[2] * d,
    m[1] * c + m[3] * d,
    m[0] * e + m[2] * f + m[4],
    m[1] * e + m[3] * f + m[5]
   ];
   ctx._originalTransform(a, b, c, d, e, f);
  };
  ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
   this._transformMatrix = [
    a,
    b,
    c,
    d,
    e,
    f
   ];
   ctx._originalSetTransform(a, b, c, d, e, f);
  };
  ctx.rotate = function ctxRotate(angle) {
   var cosValue = Math.cos(angle);
   var sinValue = Math.sin(angle);
   var m = this._transformMatrix;
   this._transformMatrix = [
    m[0] * cosValue + m[2] * sinValue,
    m[1] * cosValue + m[3] * sinValue,
    m[0] * -sinValue + m[2] * cosValue,
    m[1] * -sinValue + m[3] * cosValue,
    m[4],
    m[5]
   ];
   this._originalRotate(angle);
  };
 }
}
var CachedCanvases = function CachedCanvasesClosure() {
 function CachedCanvases(canvasFactory) {
  this.canvasFactory = canvasFactory;
  this.cache = Object.create(null);
 }
 CachedCanvases.prototype = {
  getCanvas: function CachedCanvases_getCanvas(id, width, height, trackTransform) {
   var canvasEntry;
   if (this.cache[id] !== undefined) {
    canvasEntry = this.cache[id];
    this.canvasFactory.reset(canvasEntry, width, height);
    canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
   } else {
    canvasEntry = this.canvasFactory.create(width, height);
    this.cache[id] = canvasEntry;
   }
   if (trackTransform) {
    addContextCurrentTransform(canvasEntry.context);
   }
   return canvasEntry;
  },
  clear: function () {
   for (var id in this.cache) {
    var canvasEntry = this.cache[id];
    this.canvasFactory.destroy(canvasEntry);
    delete this.cache[id];
   }
  }
 };
 return CachedCanvases;
}();
function compileType3Glyph(imgData) {
 var POINT_TO_PROCESS_LIMIT = 1000;
 var width = imgData.width, height = imgData.height;
 var i, j, j0, width1 = width + 1;
 var points = new Uint8Array(width1 * (height + 1));
 var POINT_TYPES = new Uint8Array([
  0,
  2,
  4,
  0,
  1,
  0,
  5,
  4,
  8,
  10,
  0,
  8,
  0,
  2,
  1,
  0
 ]);
 var lineSize = width + 7 & ~7, data0 = imgData.data;
 var data = new Uint8Array(lineSize * height), pos = 0, ii;
 for (i = 0, ii = data0.length; i < ii; i++) {
  var mask = 128, elem = data0[i];
  while (mask > 0) {
   data[pos++] = elem & mask ? 0 : 255;
   mask >>= 1;
  }
 }
 var count = 0;
 pos = 0;
 if (data[pos] !== 0) {
  points[0] = 1;
  ++count;
 }
 for (j = 1; j < width; j++) {
  if (data[pos] !== data[pos + 1]) {
   points[j] = data[pos] ? 2 : 1;
   ++count;
  }
  pos++;
 }
 if (data[pos] !== 0) {
  points[j] = 2;
  ++count;
 }
 for (i = 1; i < height; i++) {
  pos = i * lineSize;
  j0 = i * width1;
  if (data[pos - lineSize] !== data[pos]) {
   points[j0] = data[pos] ? 1 : 8;
   ++count;
  }
  var sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
  for (j = 1; j < width; j++) {
   sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);
   if (POINT_TYPES[sum]) {
    points[j0 + j] = POINT_TYPES[sum];
    ++count;
   }
   pos++;
  }
  if (data[pos - lineSize] !== data[pos]) {
   points[j0 + j] = data[pos] ? 2 : 4;
   ++count;
  }
  if (count > POINT_TO_PROCESS_LIMIT) {
   return null;
  }
 }
 pos = lineSize * (height - 1);
 j0 = i * width1;
 if (data[pos] !== 0) {
  points[j0] = 8;
  ++count;
 }
 for (j = 1; j < width; j++) {
  if (data[pos] !== data[pos + 1]) {
   points[j0 + j] = data[pos] ? 4 : 8;
   ++count;
  }
  pos++;
 }
 if (data[pos] !== 0) {
  points[j0 + j] = 4;
  ++count;
 }
 if (count > POINT_TO_PROCESS_LIMIT) {
  return null;
 }
 var steps = new Int32Array([
  0,
  width1,
  -1,
  0,
  -width1,
  0,
  0,
  0,
  1
 ]);
 var outlines = [];
 for (i = 0; count && i <= height; i++) {
  var p = i * width1;
  var end = p + width;
  while (p < end && !points[p]) {
   p++;
  }
  if (p === end) {
   continue;
  }
  var coords = [
   p % width1,
   i
  ];
  var type = points[p], p0 = p, pp;
  do {
   var step = steps[type];
   do {
    p += step;
   } while (!points[p]);
   pp = points[p];
   if (pp !== 5 && pp !== 10) {
    type = pp;
    points[p] = 0;
   } else {
    type = pp & 0x33 * type >> 4;
    points[p] &= type >> 2 | type << 2;
   }
   coords.push(p % width1);
   coords.push(p / width1 | 0);
   --count;
  } while (p0 !== p);
  outlines.push(coords);
  --i;
 }
 var drawOutline = function (c) {
  c.save();
  c.scale(1 / width, -1 / height);
  c.translate(0, -height);
  c.beginPath();
  for (var i = 0, ii = outlines.length; i < ii; i++) {
   var o = outlines[i];
   c.moveTo(o[0], o[1]);
   for (var j = 2, jj = o.length; j < jj; j += 2) {
    c.lineTo(o[j], o[j + 1]);
   }
  }
  c.fill();
  c.beginPath();
  c.restore();
 };
 return drawOutline;
}
var CanvasExtraState = function CanvasExtraStateClosure() {
 function CanvasExtraState(old) {
  this.alphaIsShape = false;
  this.fontSize = 0;
  this.fontSizeScale = 1;
  this.textMatrix = IDENTITY_MATRIX;
  this.textMatrixScale = 1;
  this.fontMatrix = FONT_IDENTITY_MATRIX;
  this.leading = 0;
  this.x = 0;
  this.y = 0;
  this.lineX = 0;
  this.lineY = 0;
  this.charSpacing = 0;
  this.wordSpacing = 0;
  this.textHScale = 1;
  this.textRenderingMode = TextRenderingMode.FILL;
  this.textRise = 0;
  this.fillColor = '#000000';
  this.strokeColor = '#000000';
  this.patternFill = false;
  this.fillAlpha = 1;
  this.strokeAlpha = 1;
  this.lineWidth = 1;
  this.activeSMask = null;
  this.resumeSMaskCtx = null;
  this.old = old;
 }
 CanvasExtraState.prototype = {
  clone: function CanvasExtraState_clone() {
   return Object.create(this);
  },
  setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
   this.x = x;
   this.y = y;
  }
 };
 return CanvasExtraState;
}();
var CanvasGraphics = function CanvasGraphicsClosure() {
 var EXECUTION_TIME = 15;
 var EXECUTION_STEPS = 10;
 function CanvasGraphics(canvasCtx, commonObjs, objs, canvasFactory, imageLayer) {
  this.ctx = canvasCtx;
  this.current = new CanvasExtraState();
  this.stateStack = [];
  this.pendingClip = null;
  this.pendingEOFill = false;
  this.res = null;
  this.xobjs = null;
  this.commonObjs = commonObjs;
  this.objs = objs;
  this.canvasFactory = canvasFactory;
  this.imageLayer = imageLayer;
  this.groupStack = [];
  this.processingType3 = null;
  this.baseTransform = null;
  this.baseTransformStack = [];
  this.groupLevel = 0;
  this.smaskStack = [];
  this.smaskCounter = 0;
  this.tempSMask = null;
  this.cachedCanvases = new CachedCanvases(this.canvasFactory);
  if (canvasCtx) {
   addContextCurrentTransform(canvasCtx);
  }
  this.cachedGetSinglePixelWidth = null;
 }
 function putBinaryImageData(ctx, imgData) {
  if (typeof ImageData !== 'undefined' && imgData instanceof ImageData) {
   ctx.putImageData(imgData, 0, 0);
   return;
  }
  var height = imgData.height, width = imgData.width;
  var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
  var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
  var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
  var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
  var srcPos = 0, destPos;
  var src = imgData.data;
  var dest = chunkImgData.data;
  var i, j, thisChunkHeight, elemsInThisChunk;
  if (imgData.kind === ImageKind.GRAYSCALE_1BPP) {
   var srcLength = src.byteLength;
   var dest32 = HasCanvasTypedArraysCached.value ? new Uint32Array(dest.buffer) : new Uint32ArrayView(dest);
   var dest32DataLength = dest32.length;
   var fullSrcDiff = width + 7 >> 3;
   var white = 0xFFFFFFFF;
   var black = IsLittleEndianCached.value || !HasCanvasTypedArraysCached.value ? 0xFF000000 : 0x000000FF;
   for (i = 0; i < totalChunks; i++) {
    thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
    destPos = 0;
    for (j = 0; j < thisChunkHeight; j++) {
     var srcDiff = srcLength - srcPos;
     var k = 0;
     var kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
     var kEndUnrolled = kEnd & ~7;
     var mask = 0;
     var srcByte = 0;
     for (; k < kEndUnrolled; k += 8) {
      srcByte = src[srcPos++];
      dest32[destPos++] = srcByte & 128 ? white : black;
      dest32[destPos++] = srcByte & 64 ? white : black;
      dest32[destPos++] = srcByte & 32 ? white : black;
      dest32[destPos++] = srcByte & 16 ? white : black;
      dest32[destPos++] = srcByte & 8 ? white : black;
      dest32[destPos++] = srcByte & 4 ? white : black;
      dest32[destPos++] = srcByte & 2 ? white : black;
      dest32[destPos++] = srcByte & 1 ? white : black;
     }
     for (; k < kEnd; k++) {
      if (mask === 0) {
       srcByte = src[srcPos++];
       mask = 128;
      }
      dest32[destPos++] = srcByte & mask ? white : black;
      mask >>= 1;
     }
    }
    while (destPos < dest32DataLength) {
     dest32[destPos++] = 0;
    }
    ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
   }
  } else if (imgData.kind === ImageKind.RGBA_32BPP) {
   j = 0;
   elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
   for (i = 0; i < fullChunks; i++) {
    dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
    srcPos += elemsInThisChunk;
    ctx.putImageData(chunkImgData, 0, j);
    j += FULL_CHUNK_HEIGHT;
   }
   if (i < totalChunks) {
    elemsInThisChunk = width * partialChunkHeight * 4;
    dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
    ctx.putImageData(chunkImgData, 0, j);
   }
  } else if (imgData.kind === ImageKind.RGB_24BPP) {
   thisChunkHeight = FULL_CHUNK_HEIGHT;
   elemsInThisChunk = width * thisChunkHeight;
   for (i = 0; i < totalChunks; i++) {
    if (i >= fullChunks) {
     thisChunkHeight = partialChunkHeight;
     elemsInThisChunk = width * thisChunkHeight;
    }
    destPos = 0;
    for (j = elemsInThisChunk; j--;) {
     dest[destPos++] = src[srcPos++];
     dest[destPos++] = src[srcPos++];
     dest[destPos++] = src[srcPos++];
     dest[destPos++] = 255;
    }
    ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
   }
  } else {
   error('bad image kind: ' + imgData.kind);
  }
 }
 function putBinaryImageMask(ctx, imgData) {
  var height = imgData.height, width = imgData.width;
  var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
  var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
  var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
  var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
  var srcPos = 0;
  var src = imgData.data;
  var dest = chunkImgData.data;
  for (var i = 0; i < totalChunks; i++) {
   var thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
   var destPos = 3;
   for (var j = 0; j < thisChunkHeight; j++) {
    var mask = 0;
    for (var k = 0; k < width; k++) {
     if (!mask) {
      var elem = src[srcPos++];
      mask = 128;
     }
     dest[destPos] = elem & mask ? 0 : 255;
     destPos += 4;
     mask >>= 1;
    }
   }
   ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
  }
 }
 function copyCtxState(sourceCtx, destCtx) {
  var properties = [
   'strokeStyle',
   'fillStyle',
   'fillRule',
   'globalAlpha',
   'lineWidth',
   'lineCap',
   'lineJoin',
   'miterLimit',
   'globalCompositeOperation',
   'font'
  ];
  for (var i = 0, ii = properties.length; i < ii; i++) {
   var property = properties[i];
   if (sourceCtx[property] !== undefined) {
    destCtx[property] = sourceCtx[property];
   }
  }
  if (sourceCtx.setLineDash !== undefined) {
   destCtx.setLineDash(sourceCtx.getLineDash());
   destCtx.lineDashOffset = sourceCtx.lineDashOffset;
  }
 }
 function composeSMaskBackdrop(bytes, r0, g0, b0) {
  var length = bytes.length;
  for (var i = 3; i < length; i += 4) {
   var alpha = bytes[i];
   if (alpha === 0) {
    bytes[i - 3] = r0;
    bytes[i - 2] = g0;
    bytes[i - 1] = b0;
   } else if (alpha < 255) {
    var alpha_ = 255 - alpha;
    bytes[i - 3] = bytes[i - 3] * alpha + r0 * alpha_ >> 8;
    bytes[i - 2] = bytes[i - 2] * alpha + g0 * alpha_ >> 8;
    bytes[i - 1] = bytes[i - 1] * alpha + b0 * alpha_ >> 8;
   }
  }
 }
 function composeSMaskAlpha(maskData, layerData, transferMap) {
  var length = maskData.length;
  var scale = 1 / 255;
  for (var i = 3; i < length; i += 4) {
   var alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
   layerData[i] = layerData[i] * alpha * scale | 0;
  }
 }
 function composeSMaskLuminosity(maskData, layerData, transferMap) {
  var length = maskData.length;
  for (var i = 3; i < length; i += 4) {
   var y = maskData[i - 3] * 77 + maskData[i - 2] * 152 + maskData[i - 1] * 28;
   layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
  }
 }
 function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap) {
  var hasBackdrop = !!backdrop;
  var r0 = hasBackdrop ? backdrop[0] : 0;
  var g0 = hasBackdrop ? backdrop[1] : 0;
  var b0 = hasBackdrop ? backdrop[2] : 0;
  var composeFn;
  if (subtype === 'Luminosity') {
   composeFn = composeSMaskLuminosity;
  } else {
   composeFn = composeSMaskAlpha;
  }
  var PIXELS_TO_PROCESS = 1048576;
  var chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));
  for (var row = 0; row < height; row += chunkSize) {
   var chunkHeight = Math.min(chunkSize, height - row);
   var maskData = maskCtx.getImageData(0, row, width, chunkHeight);
   var layerData = layerCtx.getImageData(0, row, width, chunkHeight);
   if (hasBackdrop) {
    composeSMaskBackdrop(maskData.data, r0, g0, b0);
   }
   composeFn(maskData.data, layerData.data, transferMap);
   maskCtx.putImageData(layerData, 0, row);
  }
 }
 function composeSMask(ctx, smask, layerCtx) {
  var mask = smask.canvas;
  var maskCtx = smask.context;
  ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY, smask.offsetX, smask.offsetY);
  var backdrop = smask.backdrop || null;
  if (!smask.transferMap && WebGLUtils.isEnabled) {
   var composed = WebGLUtils.composeSMask(layerCtx.canvas, mask, {
    subtype: smask.subtype,
    backdrop: backdrop
   });
   ctx.setTransform(1, 0, 0, 1, 0, 0);
   ctx.drawImage(composed, smask.offsetX, smask.offsetY);
   return;
  }
  genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height, smask.subtype, backdrop, smask.transferMap);
  ctx.drawImage(mask, 0, 0);
 }
 var LINE_CAP_STYLES = [
  'butt',
  'round',
  'square'
 ];
 var LINE_JOIN_STYLES = [
  'miter',
  'round',
  'bevel'
 ];
 var NORMAL_CLIP = {};
 var EO_CLIP = {};
 CanvasGraphics.prototype = {
  beginDrawing: function CanvasGraphics_beginDrawing(transform, viewport, transparency) {
   var width = this.ctx.canvas.width;
   var height = this.ctx.canvas.height;
   this.ctx.save();
   this.ctx.fillStyle = 'rgb(255, 255, 255)';
   this.ctx.fillRect(0, 0, width, height);
   this.ctx.restore();
   if (transparency) {
    var transparentCanvas = this.cachedCanvases.getCanvas('transparent', width, height, true);
    this.compositeCtx = this.ctx;
    this.transparentCanvas = transparentCanvas.canvas;
    this.ctx = transparentCanvas.context;
    this.ctx.save();
    this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
   }
   this.ctx.save();
   if (transform) {
    this.ctx.transform.apply(this.ctx, transform);
   }
   this.ctx.transform.apply(this.ctx, viewport.transform);
   this.baseTransform = this.ctx.mozCurrentTransform.slice();
   if (this.imageLayer) {
    this.imageLayer.beginLayout();
   }
  },
  executeOperatorList: function CanvasGraphics_executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
   var argsArray = operatorList.argsArray;
   var fnArray = operatorList.fnArray;
   var i = executionStartIdx || 0;
   var argsArrayLen = argsArray.length;
   if (argsArrayLen === i) {
    return i;
   }
   var chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === 'function';
   var endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
   var steps = 0;
   var commonObjs = this.commonObjs;
   var objs = this.objs;
   var fnId;
   while (true) {
    if (stepper !== undefined && i === stepper.nextBreakPoint) {
     stepper.breakIt(i, continueCallback);
     return i;
    }
    fnId = fnArray[i];
    if (fnId !== OPS.dependency) {
     this[fnId].apply(this, argsArray[i]);
    } else {
     var deps = argsArray[i];
     for (var n = 0, nn = deps.length; n < nn; n++) {
      var depObjId = deps[n];
      var common = depObjId[0] === 'g' && depObjId[1] === '_';
      var objsPool = common ? commonObjs : objs;
      if (!objsPool.isResolved(depObjId)) {
       objsPool.get(depObjId, continueCallback);
       return i;
      }
     }
    }
    i++;
    if (i === argsArrayLen) {
     return i;
    }
    if (chunkOperations && ++steps > EXECUTION_STEPS) {
     if (Date.now() > endTime) {
      continueCallback();
      return i;
     }
     steps = 0;
    }
   }
  },
  endDrawing: function CanvasGraphics_endDrawing() {
   if (this.current.activeSMask !== null) {
    this.endSMaskGroup();
   }
   this.ctx.restore();
   if (this.transparentCanvas) {
    this.ctx = this.compositeCtx;
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.drawImage(this.transparentCanvas, 0, 0);
    this.ctx.restore();
    this.transparentCanvas = null;
   }
   this.cachedCanvases.clear();
   WebGLUtils.clear();
   if (this.imageLayer) {
    this.imageLayer.endLayout();
   }
  },
  setLineWidth: function CanvasGraphics_setLineWidth(width) {
   this.current.lineWidth = width;
   this.ctx.lineWidth = width;
  },
  setLineCap: function CanvasGraphics_setLineCap(style) {
   this.ctx.lineCap = LINE_CAP_STYLES[style];
  },
  setLineJoin: function CanvasGraphics_setLineJoin(style) {
   this.ctx.lineJoin = LINE_JOIN_STYLES[style];
  },
  setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
   this.ctx.miterLimit = limit;
  },
  setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
   var ctx = this.ctx;
   if (ctx.setLineDash !== undefined) {
    ctx.setLineDash(dashArray);
    ctx.lineDashOffset = dashPhase;
   }
  },
  setRenderingIntent: function CanvasGraphics_setRenderingIntent(intent) {
  },
  setFlatness: function CanvasGraphics_setFlatness(flatness) {
  },
  setGState: function CanvasGraphics_setGState(states) {
   for (var i = 0, ii = states.length; i < ii; i++) {
    var state = states[i];
    var key = state[0];
    var value = state[1];
    switch (key) {
    case 'LW':
     this.setLineWidth(value);
     break;
    case 'LC':
     this.setLineCap(value);
     break;
    case 'LJ':
     this.setLineJoin(value);
     break;
    case 'ML':
     this.setMiterLimit(value);
     break;
    case 'D':
     this.setDash(value[0], value[1]);
     break;
    case 'RI':
     this.setRenderingIntent(value);
     break;
    case 'FL':
     this.setFlatness(value);
     break;
    case 'Font':
     this.setFont(value[0], value[1]);
     break;
    case 'CA':
     this.current.strokeAlpha = state[1];
     break;
    case 'ca':
     this.current.fillAlpha = state[1];
     this.ctx.globalAlpha = state[1];
     break;
    case 'BM':
     if (value && value.name && value.name !== 'Normal') {
      var mode = value.name.replace(/([A-Z])/g, function (c) {
       return '-' + c.toLowerCase();
      }).substring(1);
      this.ctx.globalCompositeOperation = mode;
      if (this.ctx.globalCompositeOperation !== mode) {
       warn('globalCompositeOperation "' + mode + '" is not supported');
      }
     } else {
      this.ctx.globalCompositeOperation = 'source-over';
     }
     break;
    case 'SMask':
     if (this.current.activeSMask) {
      if (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask) {
       this.suspendSMaskGroup();
      } else {
       this.endSMaskGroup();
      }
     }
     this.current.activeSMask = value ? this.tempSMask : null;
     if (this.current.activeSMask) {
      this.beginSMaskGroup();
     }
     this.tempSMask = null;
     break;
    }
   }
  },
  beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
   var activeSMask = this.current.activeSMask;
   var drawnWidth = activeSMask.canvas.width;
   var drawnHeight = activeSMask.canvas.height;
   var cacheId = 'smaskGroupAt' + this.groupLevel;
   var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
   var currentCtx = this.ctx;
   var currentTransform = currentCtx.mozCurrentTransform;
   this.ctx.save();
   var groupCtx = scratchCanvas.context;
   groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
   groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
   groupCtx.transform.apply(groupCtx, currentTransform);
   activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;
   copyCtxState(currentCtx, groupCtx);
   this.ctx = groupCtx;
   this.setGState([
    [
     'BM',
     'Normal'
    ],
    [
     'ca',
     1
    ],
    [
     'CA',
     1
    ]
   ]);
   this.groupStack.push(currentCtx);
   this.groupLevel++;
  },
  suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
   var groupCtx = this.ctx;
   this.groupLevel--;
   this.ctx = this.groupStack.pop();
   composeSMask(this.ctx, this.current.activeSMask, groupCtx);
   this.ctx.restore();
   this.ctx.save();
   copyCtxState(groupCtx, this.ctx);
   this.current.resumeSMaskCtx = groupCtx;
   var deltaTransform = Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
   this.ctx.transform.apply(this.ctx, deltaTransform);
   groupCtx.save();
   groupCtx.setTransform(1, 0, 0, 1, 0, 0);
   groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
   groupCtx.restore();
  },
  resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
   var groupCtx = this.current.resumeSMaskCtx;
   var currentCtx = this.ctx;
   this.ctx = groupCtx;
   this.groupStack.push(currentCtx);
   this.groupLevel++;
  },
  endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
   var groupCtx = this.ctx;
   this.groupLevel--;
   this.ctx = this.groupStack.pop();
   composeSMask(this.ctx, this.current.activeSMask, groupCtx);
   this.ctx.restore();
   copyCtxState(groupCtx, this.ctx);
   var deltaTransform = Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
   this.ctx.transform.apply(this.ctx, deltaTransform);
  },
  save: function CanvasGraphics_save() {
   this.ctx.save();
   var old = this.current;
   this.stateStack.push(old);
   this.current = old.clone();
   this.current.resumeSMaskCtx = null;
  },
  restore: function CanvasGraphics_restore() {
   if (this.current.resumeSMaskCtx) {
    this.resumeSMaskGroup();
   }
   if (this.current.activeSMask !== null && (this.stateStack.length === 0 || this.stateStack[this.stateStack.length - 1].activeSMask !== this.current.activeSMask)) {
    this.endSMaskGroup();
   }
   if (this.stateStack.length !== 0) {
    this.current = this.stateStack.pop();
    this.ctx.restore();
    this.pendingClip = null;
    this.cachedGetSinglePixelWidth = null;
   }
  },
  transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
   this.ctx.transform(a, b, c, d, e, f);
   this.cachedGetSinglePixelWidth = null;
  },
  constructPath: function CanvasGraphics_constructPath(ops, args) {
   var ctx = this.ctx;
   var current = this.current;
   var x = current.x, y = current.y;
   for (var i = 0, j = 0, ii = ops.length; i < ii; i++) {
    switch (ops[i] | 0) {
    case OPS.rectangle:
     x = args[j++];
     y = args[j++];
     var width = args[j++];
     var height = args[j++];
     if (width === 0) {
      width = this.getSinglePixelWidth();
     }
     if (height === 0) {
      height = this.getSinglePixelWidth();
     }
     var xw = x + width;
     var yh = y + height;
     this.ctx.moveTo(x, y);
     this.ctx.lineTo(xw, y);
     this.ctx.lineTo(xw, yh);
     this.ctx.lineTo(x, yh);
     this.ctx.lineTo(x, y);
     this.ctx.closePath();
     break;
    case OPS.moveTo:
     x = args[j++];
     y = args[j++];
     ctx.moveTo(x, y);
     break;
    case OPS.lineTo:
     x = args[j++];
     y = args[j++];
     ctx.lineTo(x, y);
     break;
    case OPS.curveTo:
     x = args[j + 4];
     y = args[j + 5];
     ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
     j += 6;
     break;
    case OPS.curveTo2:
     ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
     x = args[j + 2];
     y = args[j + 3];
     j += 4;
     break;
    case OPS.curveTo3:
     x = args[j + 2];
     y = args[j + 3];
     ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
     j += 4;
     break;
    case OPS.closePath:
     ctx.closePath();
     break;
    }
   }
   current.setCurrentPoint(x, y);
  },
  closePath: function CanvasGraphics_closePath() {
   this.ctx.closePath();
  },
  stroke: function CanvasGraphics_stroke(consumePath) {
   consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
   var ctx = this.ctx;
   var strokeColor = this.current.strokeColor;
   ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR, this.current.lineWidth);
   ctx.globalAlpha = this.current.strokeAlpha;
   if (strokeColor && strokeColor.hasOwnProperty('type') && strokeColor.type === 'Pattern') {
    ctx.save();
    ctx.strokeStyle = strokeColor.getPattern(ctx, this);
    ctx.stroke();
    ctx.restore();
   } else {
    ctx.stroke();
   }
   if (consumePath) {
    this.consumePath();
   }
   ctx.globalAlpha = this.current.fillAlpha;
  },
  closeStroke: function CanvasGraphics_closeStroke() {
   this.closePath();
   this.stroke();
  },
  fill: function CanvasGraphics_fill(consumePath) {
   consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
   var ctx = this.ctx;
   var fillColor = this.current.fillColor;
   var isPatternFill = this.current.patternFill;
   var needRestore = false;
   if (isPatternFill) {
    ctx.save();
    if (this.baseTransform) {
     ctx.setTransform.apply(ctx, this.baseTransform);
    }
    ctx.fillStyle = fillColor.getPattern(ctx, this);
    needRestore = true;
   }
   if (this.pendingEOFill) {
    ctx.fill('evenodd');
    this.pendingEOFill = false;
   } else {
    ctx.fill();
   }
   if (needRestore) {
    ctx.restore();
   }
   if (consumePath) {
    this.consumePath();
   }
  },
  eoFill: function CanvasGraphics_eoFill() {
   this.pendingEOFill = true;
   this.fill();
  },
  fillStroke: function CanvasGraphics_fillStroke() {
   this.fill(false);
   this.stroke(false);
   this.consumePath();
  },
  eoFillStroke: function CanvasGraphics_eoFillStroke() {
   this.pendingEOFill = true;
   this.fillStroke();
  },
  closeFillStroke: function CanvasGraphics_closeFillStroke() {
   this.closePath();
   this.fillStroke();
  },
  closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
   this.pendingEOFill = true;
   this.closePath();
   this.fillStroke();
  },
  endPath: function CanvasGraphics_endPath() {
   this.consumePath();
  },
  clip: function CanvasGraphics_clip() {
   this.pendingClip = NORMAL_CLIP;
  },
  eoClip: function CanvasGraphics_eoClip() {
   this.pendingClip = EO_CLIP;
  },
  beginText: function CanvasGraphics_beginText() {
   this.current.textMatrix = IDENTITY_MATRIX;
   this.current.textMatrixScale = 1;
   this.current.x = this.current.lineX = 0;
   this.current.y = this.current.lineY = 0;
  },
  endText: function CanvasGraphics_endText() {
   var paths = this.pendingTextPaths;
   var ctx = this.ctx;
   if (paths === undefined) {
    ctx.beginPath();
    return;
   }
   ctx.save();
   ctx.beginPath();
   for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    ctx.setTransform.apply(ctx, path.transform);
    ctx.translate(path.x, path.y);
    path.addToPath(ctx, path.fontSize);
   }
   ctx.restore();
   ctx.clip();
   ctx.beginPath();
   delete this.pendingTextPaths;
  },
  setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
   this.current.charSpacing = spacing;
  },
  setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
   this.current.wordSpacing = spacing;
  },
  setHScale: function CanvasGraphics_setHScale(scale) {
   this.current.textHScale = scale / 100;
  },
  setLeading: function CanvasGraphics_setLeading(leading) {
   this.current.leading = -leading;
  },
  setFont: function CanvasGraphics_setFont(fontRefName, size) {
   var fontObj = this.commonObjs.get(fontRefName);
   var current = this.current;
   if (!fontObj) {
    error('Can\'t find font for ' + fontRefName);
   }
   current.fontMatrix = fontObj.fontMatrix ? fontObj.fontMatrix : FONT_IDENTITY_MATRIX;
   if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
    warn('Invalid font matrix for font ' + fontRefName);
   }
   if (size < 0) {
    size = -size;
    current.fontDirection = -1;
   } else {
    current.fontDirection = 1;
   }
   this.current.font = fontObj;
   this.current.fontSize = size;
   if (fontObj.isType3Font) {
    return;
   }
   var name = fontObj.loadedName || 'sans-serif';
   var bold = fontObj.black ? '900' : fontObj.bold ? 'bold' : 'normal';
   var italic = fontObj.italic ? 'italic' : 'normal';
   var typeface = '"' + name + '", ' + fontObj.fallbackName;
   var browserFontSize = size < MIN_FONT_SIZE ? MIN_FONT_SIZE : size > MAX_FONT_SIZE ? MAX_FONT_SIZE : size;
   this.current.fontSizeScale = size / browserFontSize;
   var rule = italic + ' ' + bold + ' ' + browserFontSize + 'px ' + typeface;
   this.ctx.font = rule;
  },
  setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
   this.current.textRenderingMode = mode;
  },
  setTextRise: function CanvasGraphics_setTextRise(rise) {
   this.current.textRise = rise;
  },
  moveText: function CanvasGraphics_moveText(x, y) {
   this.current.x = this.current.lineX += x;
   this.current.y = this.current.lineY += y;
  },
  setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
   this.setLeading(-y);
   this.moveText(x, y);
  },
  setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
   this.current.textMatrix = [
    a,
    b,
    c,
    d,
    e,
    f
   ];
   this.current.textMatrixScale = Math.sqrt(a * a + b * b);
   this.current.x = this.current.lineX = 0;
   this.current.y = this.current.lineY = 0;
  },
  nextLine: function CanvasGraphics_nextLine() {
   this.moveText(0, this.current.leading);
  },
  paintChar: function CanvasGraphics_paintChar(character, x, y) {
   var ctx = this.ctx;
   var current = this.current;
   var font = current.font;
   var textRenderingMode = current.textRenderingMode;
   var fontSize = current.fontSize / current.fontSizeScale;
   var fillStrokeMode = textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
   var isAddToPathSet = !!(textRenderingMode & TextRenderingMode.ADD_TO_PATH_FLAG);
   var addToPath;
   if (font.disableFontFace || isAddToPathSet) {
    addToPath = font.getPathGenerator(this.commonObjs, character);
   }
   if (font.disableFontFace) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    addToPath(ctx, fontSize);
    if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
     ctx.fill();
    }
    if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
     ctx.stroke();
    }
    ctx.restore();
   } else {
    if (fillStrokeMode === TextRenderingMode.FILL || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
     ctx.fillText(character, x, y);
    }
    if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
     ctx.strokeText(character, x, y);
    }
   }
   if (isAddToPathSet) {
    var paths = this.pendingTextPaths || (this.pendingTextPaths = []);
    paths.push({
     transform: ctx.mozCurrentTransform,
     x: x,
     y: y,
     fontSize: fontSize,
     addToPath: addToPath
    });
   }
  },
  get isFontSubpixelAAEnabled() {
   var ctx = this.canvasFactory.create(10, 10).context;
   ctx.scale(1.5, 1);
   ctx.fillText('I', 0, 10);
   var data = ctx.getImageData(0, 0, 10, 10).data;
   var enabled = false;
   for (var i = 3; i < data.length; i += 4) {
    if (data[i] > 0 && data[i] < 255) {
     enabled = true;
     break;
    }
   }
   return shadow(this, 'isFontSubpixelAAEnabled', enabled);
  },
  showText: function CanvasGraphics_showText(glyphs) {
   var current = this.current;
   var font = current.font;
   if (font.isType3Font) {
    return this.showType3Text(glyphs);
   }
   var fontSize = current.fontSize;
   if (fontSize === 0) {
    return;
   }
   var ctx = this.ctx;
   var fontSizeScale = current.fontSizeScale;
   var charSpacing = current.charSpacing;
   var wordSpacing = current.wordSpacing;
   var fontDirection = current.fontDirection;
   var textHScale = current.textHScale * fontDirection;
   var glyphsLength = glyphs.length;
   var vertical = font.vertical;
   var spacingDir = vertical ? 1 : -1;
   var defaultVMetrics = font.defaultVMetrics;
   var widthAdvanceScale = fontSize * current.fontMatrix[0];
   var simpleFillText = current.textRenderingMode === TextRenderingMode.FILL && !font.disableFontFace;
   ctx.save();
   ctx.transform.apply(ctx, current.textMatrix);
   ctx.translate(current.x, current.y + current.textRise);
   if (current.patternFill) {
    ctx.fillStyle = current.fillColor.getPattern(ctx, this);
   }
   if (fontDirection > 0) {
    ctx.scale(textHScale, -1);
   } else {
    ctx.scale(textHScale, 1);
   }
   var lineWidth = current.lineWidth;
   var scale = current.textMatrixScale;
   if (scale === 0 || lineWidth === 0) {
    var fillStrokeMode = current.textRenderingMode & TextRenderingMode.FILL_STROKE_MASK;
    if (fillStrokeMode === TextRenderingMode.STROKE || fillStrokeMode === TextRenderingMode.FILL_STROKE) {
     this.cachedGetSinglePixelWidth = null;
     lineWidth = this.getSinglePixelWidth() * MIN_WIDTH_FACTOR;
    }
   } else {
    lineWidth /= scale;
   }
   if (fontSizeScale !== 1.0) {
    ctx.scale(fontSizeScale, fontSizeScale);
    lineWidth /= fontSizeScale;
   }
   ctx.lineWidth = lineWidth;
   var x = 0, i;
   for (i = 0; i < glyphsLength; ++i) {
    var glyph = glyphs[i];
    if (isNum(glyph)) {
     x += spacingDir * glyph * fontSize / 1000;
     continue;
    }
    var restoreNeeded = false;
    var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
    var character = glyph.fontChar;
    var accent = glyph.accent;
    var scaledX, scaledY, scaledAccentX, scaledAccentY;
    var width = glyph.width;
    if (vertical) {
     var vmetric, vx, vy;
     vmetric = glyph.vmetric || defaultVMetrics;
     vx = glyph.vmetric ? vmetric[1] : width * 0.5;
     vx = -vx * widthAdvanceScale;
     vy = vmetric[2] * widthAdvanceScale;
     width = vmetric ? -vmetric[0] : width;
     scaledX = vx / fontSizeScale;
     scaledY = (x + vy) / fontSizeScale;
    } else {
     scaledX = x / fontSizeScale;
     scaledY = 0;
    }
    if (font.remeasure && width > 0) {
     var measuredWidth = ctx.measureText(character).width * 1000 / fontSize * fontSizeScale;
     if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
      var characterScaleX = width / measuredWidth;
      restoreNeeded = true;
      ctx.save();
      ctx.scale(characterScaleX, 1);
      scaledX /= characterScaleX;
     } else if (width !== measuredWidth) {
      scaledX += (width - measuredWidth) / 2000 * fontSize / fontSizeScale;
     }
    }
    if (glyph.isInFont || font.missingFile) {
     if (simpleFillText && !accent) {
      ctx.fillText(character, scaledX, scaledY);
     } else {
      this.paintChar(character, scaledX, scaledY);
      if (accent) {
       scaledAccentX = scaledX + accent.offset.x / fontSizeScale;
       scaledAccentY = scaledY - accent.offset.y / fontSizeScale;
       this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY);
      }
     }
    }
    var charWidth = width * widthAdvanceScale + spacing * fontDirection;
    x += charWidth;
    if (restoreNeeded) {
     ctx.restore();
    }
   }
   if (vertical) {
    current.y -= x * textHScale;
   } else {
    current.x += x * textHScale;
   }
   ctx.restore();
  },
  showType3Text: function CanvasGraphics_showType3Text(glyphs) {
   var ctx = this.ctx;
   var current = this.current;
   var font = current.font;
   var fontSize = current.fontSize;
   var fontDirection = current.fontDirection;
   var spacingDir = font.vertical ? 1 : -1;
   var charSpacing = current.charSpacing;
   var wordSpacing = current.wordSpacing;
   var textHScale = current.textHScale * fontDirection;
   var fontMatrix = current.fontMatrix || FONT_IDENTITY_MATRIX;
   var glyphsLength = glyphs.length;
   var isTextInvisible = current.textRenderingMode === TextRenderingMode.INVISIBLE;
   var i, glyph, width, spacingLength;
   if (isTextInvisible || fontSize === 0) {
    return;
   }
   this.cachedGetSinglePixelWidth = null;
   ctx.save();
   ctx.transform.apply(ctx, current.textMatrix);
   ctx.translate(current.x, current.y);
   ctx.scale(textHScale, fontDirection);
   for (i = 0; i < glyphsLength; ++i) {
    glyph = glyphs[i];
    if (isNum(glyph)) {
     spacingLength = spacingDir * glyph * fontSize / 1000;
     this.ctx.translate(spacingLength, 0);
     current.x += spacingLength * textHScale;
     continue;
    }
    var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
    var operatorList = font.charProcOperatorList[glyph.operatorListId];
    if (!operatorList) {
     warn('Type3 character \"' + glyph.operatorListId + '\" is not available');
     continue;
    }
    this.processingType3 = glyph;
    this.save();
    ctx.scale(fontSize, fontSize);
    ctx.transform.apply(ctx, fontMatrix);
    this.executeOperatorList(operatorList);
    this.restore();
    var transformed = Util.applyTransform([
     glyph.width,
     0
    ], fontMatrix);
    width = transformed[0] * fontSize + spacing;
    ctx.translate(width, 0);
    current.x += width * textHScale;
   }
   ctx.restore();
   this.processingType3 = null;
  },
  setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {
  },
  setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
   this.ctx.rect(llx, lly, urx - llx, ury - lly);
   this.clip();
   this.endPath();
  },
  getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
   var pattern;
   if (IR[0] === 'TilingPattern') {
    var color = IR[1];
    var baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
    var self = this;
    var canvasGraphicsFactory = {
     createCanvasGraphics: function (ctx) {
      return new CanvasGraphics(ctx, self.commonObjs, self.objs, self.canvasFactory);
     }
    };
    pattern = new TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
   } else {
    pattern = getShadingPatternFromIR(IR);
   }
   return pattern;
  },
  setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
   this.current.strokeColor = this.getColorN_Pattern(arguments);
  },
  setFillColorN: function CanvasGraphics_setFillColorN() {
   this.current.fillColor = this.getColorN_Pattern(arguments);
   this.current.patternFill = true;
  },
  setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
   var color = Util.makeCssRgb(r, g, b);
   this.ctx.strokeStyle = color;
   this.current.strokeColor = color;
  },
  setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
   var color = Util.makeCssRgb(r, g, b);
   this.ctx.fillStyle = color;
   this.current.fillColor = color;
   this.current.patternFill = false;
  },
  shadingFill: function CanvasGraphics_shadingFill(patternIR) {
   var ctx = this.ctx;
   this.save();
   var pattern = getShadingPatternFromIR(patternIR);
   ctx.fillStyle = pattern.getPattern(ctx, this, true);
   var inv = ctx.mozCurrentTransformInverse;
   if (inv) {
    var canvas = ctx.canvas;
    var width = canvas.width;
    var height = canvas.height;
    var bl = Util.applyTransform([
     0,
     0
    ], inv);
    var br = Util.applyTransform([
     0,
     height
    ], inv);
    var ul = Util.applyTransform([
     width,
     0
    ], inv);
    var ur = Util.applyTransform([
     width,
     height
    ], inv);
    var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
    var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
    var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
    var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
    this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
   } else {
    this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
   }
   this.restore();
  },
  beginInlineImage: function CanvasGraphics_beginInlineImage() {
   error('Should not call beginInlineImage');
  },
  beginImageData: function CanvasGraphics_beginImageData() {
   error('Should not call beginImageData');
  },
  paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix, bbox) {
   this.save();
   this.baseTransformStack.push(this.baseTransform);
   if (isArray(matrix) && matrix.length === 6) {
    this.transform.apply(this, matrix);
   }
   this.baseTransform = this.ctx.mozCurrentTransform;
   if (isArray(bbox) && bbox.length === 4) {
    var width = bbox[2] - bbox[0];
    var height = bbox[3] - bbox[1];
    this.ctx.rect(bbox[0], bbox[1], width, height);
    this.clip();
    this.endPath();
   }
  },
  paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
   this.restore();
   this.baseTransform = this.baseTransformStack.pop();
  },
  beginGroup: function CanvasGraphics_beginGroup(group) {
   this.save();
   var currentCtx = this.ctx;
   if (!group.isolated) {
    info('TODO: Support non-isolated groups.');
   }
   if (group.knockout) {
    warn('Knockout groups not supported.');
   }
   var currentTransform = currentCtx.mozCurrentTransform;
   if (group.matrix) {
    currentCtx.transform.apply(currentCtx, group.matrix);
   }
   assert(group.bbox, 'Bounding box is required.');
   var bounds = Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform);
   var canvasBounds = [
    0,
    0,
    currentCtx.canvas.width,
    currentCtx.canvas.height
   ];
   bounds = Util.intersect(bounds, canvasBounds) || [
    0,
    0,
    0,
    0
   ];
   var offsetX = Math.floor(bounds[0]);
   var offsetY = Math.floor(bounds[1]);
   var drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
   var drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
   var scaleX = 1, scaleY = 1;
   if (drawnWidth > MAX_GROUP_SIZE) {
    scaleX = drawnWidth / MAX_GROUP_SIZE;
    drawnWidth = MAX_GROUP_SIZE;
   }
   if (drawnHeight > MAX_GROUP_SIZE) {
    scaleY = drawnHeight / MAX_GROUP_SIZE;
    drawnHeight = MAX_GROUP_SIZE;
   }
   var cacheId = 'groupAt' + this.groupLevel;
   if (group.smask) {
    cacheId += '_smask_' + this.smaskCounter++ % 2;
   }
   var scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
   var groupCtx = scratchCanvas.context;
   groupCtx.scale(1 / scaleX, 1 / scaleY);
   groupCtx.translate(-offsetX, -offsetY);
   groupCtx.transform.apply(groupCtx, currentTransform);
   if (group.smask) {
    this.smaskStack.push({
     canvas: scratchCanvas.canvas,
     context: groupCtx,
     offsetX: offsetX,
     offsetY: offsetY,
     scaleX: scaleX,
     scaleY: scaleY,
     subtype: group.smask.subtype,
     backdrop: group.smask.backdrop,
     transferMap: group.smask.transferMap || null,
     startTransformInverse: null
    });
   } else {
    currentCtx.setTransform(1, 0, 0, 1, 0, 0);
    currentCtx.translate(offsetX, offsetY);
    currentCtx.scale(scaleX, scaleY);
   }
   copyCtxState(currentCtx, groupCtx);
   this.ctx = groupCtx;
   this.setGState([
    [
     'BM',
     'Normal'
    ],
    [
     'ca',
     1
    ],
    [
     'CA',
     1
    ]
   ]);
   this.groupStack.push(currentCtx);
   this.groupLevel++;
   this.current.activeSMask = null;
  },
  endGroup: function CanvasGraphics_endGroup(group) {
   this.groupLevel--;
   var groupCtx = this.ctx;
   this.ctx = this.groupStack.pop();
   if (this.ctx.imageSmoothingEnabled !== undefined) {
    this.ctx.imageSmoothingEnabled = false;
   } else {
    this.ctx.mozImageSmoothingEnabled = false;
   }
   if (group.smask) {
    this.tempSMask = this.smaskStack.pop();
   } else {
    this.ctx.drawImage(groupCtx.canvas, 0, 0);
   }
   this.restore();
  },
  beginAnnotations: function CanvasGraphics_beginAnnotations() {
   this.save();
   this.current = new CanvasExtraState();
   if (this.baseTransform) {
    this.ctx.setTransform.apply(this.ctx, this.baseTransform);
   }
  },
  endAnnotations: function CanvasGraphics_endAnnotations() {
   this.restore();
  },
  beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform, matrix) {
   this.save();
   if (isArray(rect) && rect.length === 4) {
    var width = rect[2] - rect[0];
    var height = rect[3] - rect[1];
    this.ctx.rect(rect[0], rect[1], width, height);
    this.clip();
    this.endPath();
   }
   this.transform.apply(this, transform);
   this.transform.apply(this, matrix);
  },
  endAnnotation: function CanvasGraphics_endAnnotation() {
   this.restore();
  },
  paintJpegXObject: function CanvasGraphics_paintJpegXObject(objId, w, h) {
   var domImage = this.objs.get(objId);
   if (!domImage) {
    warn('Dependent image isn\'t ready yet');
    return;
   }
   this.save();
   var ctx = this.ctx;
   ctx.scale(1 / w, -1 / h);
   ctx.drawImage(domImage, 0, 0, domImage.width, domImage.height, 0, -h, w, h);
   if (this.imageLayer) {
    var currentTransform = ctx.mozCurrentTransformInverse;
    var position = this.getCanvasPosition(0, 0);
    this.imageLayer.appendImage({
     objId: objId,
     left: position[0],
     top: position[1],
     width: w / currentTransform[0],
     height: h / currentTransform[3]
    });
   }
   this.restore();
  },
  paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
   var ctx = this.ctx;
   var width = img.width, height = img.height;
   var fillColor = this.current.fillColor;
   var isPatternFill = this.current.patternFill;
   var glyph = this.processingType3;
   if (COMPILE_TYPE3_GLYPHS && glyph && glyph.compiled === undefined) {
    if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
     glyph.compiled = compileType3Glyph({
      data: img.data,
      width: width,
      height: height
     });
    } else {
     glyph.compiled = null;
    }
   }
   if (glyph && glyph.compiled) {
    glyph.compiled(ctx);
    return;
   }
   var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
   var maskCtx = maskCanvas.context;
   maskCtx.save();
   putBinaryImageMask(maskCtx, img);
   maskCtx.globalCompositeOperation = 'source-in';
   maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
   maskCtx.fillRect(0, 0, width, height);
   maskCtx.restore();
   this.paintInlineImageXObject(maskCanvas.canvas);
  },
  paintImageMaskXObjectRepeat: function CanvasGraphics_paintImageMaskXObjectRepeat(imgData, scaleX, scaleY, positions) {
   var width = imgData.width;
   var height = imgData.height;
   var fillColor = this.current.fillColor;
   var isPatternFill = this.current.patternFill;
   var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
   var maskCtx = maskCanvas.context;
   maskCtx.save();
   putBinaryImageMask(maskCtx, imgData);
   maskCtx.globalCompositeOperation = 'source-in';
   maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
   maskCtx.fillRect(0, 0, width, height);
   maskCtx.restore();
   var ctx = this.ctx;
   for (var i = 0, ii = positions.length; i < ii; i += 2) {
    ctx.save();
    ctx.transform(scaleX, 0, 0, scaleY, positions[i], positions[i + 1]);
    ctx.scale(1, -1);
    ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
    ctx.restore();
   }
  },
  paintImageMaskXObjectGroup: function CanvasGraphics_paintImageMaskXObjectGroup(images) {
   var ctx = this.ctx;
   var fillColor = this.current.fillColor;
   var isPatternFill = this.current.patternFill;
   for (var i = 0, ii = images.length; i < ii; i++) {
    var image = images[i];
    var width = image.width, height = image.height;
    var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas', width, height);
    var maskCtx = maskCanvas.context;
    maskCtx.save();
    putBinaryImageMask(maskCtx, image);
    maskCtx.globalCompositeOperation = 'source-in';
    maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
    maskCtx.fillRect(0, 0, width, height);
    maskCtx.restore();
    ctx.save();
    ctx.transform.apply(ctx, image.transform);
    ctx.scale(1, -1);
    ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
    ctx.restore();
   }
  },
  paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
   var imgData = this.objs.get(objId);
   if (!imgData) {
    warn('Dependent image isn\'t ready yet');
    return;
   }
   this.paintInlineImageXObject(imgData);
  },
  paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
   var imgData = this.objs.get(objId);
   if (!imgData) {
    warn('Dependent image isn\'t ready yet');
    return;
   }
   var width = imgData.width;
   var height = imgData.height;
   var map = [];
   for (var i = 0, ii = positions.length; i < ii; i += 2) {
    map.push({
     transform: [
      scaleX,
      0,
      0,
      scaleY,
      positions[i],
      positions[i + 1]
     ],
     x: 0,
     y: 0,
     w: width,
     h: height
    });
   }
   this.paintInlineImageXObjectGroup(imgData, map);
  },
  paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(imgData) {
   var width = imgData.width;
   var height = imgData.height;
   var ctx = this.ctx;
   this.save();
   ctx.scale(1 / width, -1 / height);
   var currentTransform = ctx.mozCurrentTransformInverse;
   var a = currentTransform[0], b = currentTransform[1];
   var widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
   var c = currentTransform[2], d = currentTransform[3];
   var heightScale = Math.max(Math.sqrt(c * c + d * d), 1);
   var imgToPaint, tmpCanvas;
   if (imgData instanceof HTMLElement || !imgData.data) {
    imgToPaint = imgData;
   } else {
    tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', width, height);
    var tmpCtx = tmpCanvas.context;
    putBinaryImageData(tmpCtx, imgData);
    imgToPaint = tmpCanvas.canvas;
   }
   var paintWidth = width, paintHeight = height;
   var tmpCanvasId = 'prescale1';
   while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
    var newWidth = paintWidth, newHeight = paintHeight;
    if (widthScale > 2 && paintWidth > 1) {
     newWidth = Math.ceil(paintWidth / 2);
     widthScale /= paintWidth / newWidth;
    }
    if (heightScale > 2 && paintHeight > 1) {
     newHeight = Math.ceil(paintHeight / 2);
     heightScale /= paintHeight / newHeight;
    }
    tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
    tmpCtx = tmpCanvas.context;
    tmpCtx.clearRect(0, 0, newWidth, newHeight);
    tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
    imgToPaint = tmpCanvas.canvas;
    paintWidth = newWidth;
    paintHeight = newHeight;
    tmpCanvasId = tmpCanvasId === 'prescale1' ? 'prescale2' : 'prescale1';
   }
   ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, -height, width, height);
   if (this.imageLayer) {
    var position = this.getCanvasPosition(0, -height);
    this.imageLayer.appendImage({
     imgData: imgData,
     left: position[0],
     top: position[1],
     width: width / currentTransform[0],
     height: height / currentTransform[3]
    });
   }
   this.restore();
  },
  paintInlineImageXObjectGroup: function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
   var ctx = this.ctx;
   var w = imgData.width;
   var h = imgData.height;
   var tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', w, h);
   var tmpCtx = tmpCanvas.context;
   putBinaryImageData(tmpCtx, imgData);
   for (var i = 0, ii = map.length; i < ii; i++) {
    var entry = map[i];
    ctx.save();
    ctx.transform.apply(ctx, entry.transform);
    ctx.scale(1, -1);
    ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
    if (this.imageLayer) {
     var position = this.getCanvasPosition(entry.x, entry.y);
     this.imageLayer.appendImage({
      imgData: imgData,
      left: position[0],
      top: position[1],
      width: w,
      height: h
     });
    }
    ctx.restore();
   }
  },
  paintSolidColorImageMask: function CanvasGraphics_paintSolidColorImageMask() {
   this.ctx.fillRect(0, 0, 1, 1);
  },
  paintXObject: function CanvasGraphics_paintXObject() {
   warn('Unsupported \'paintXObject\' command.');
  },
  markPoint: function CanvasGraphics_markPoint(tag) {
  },
  markPointProps: function CanvasGraphics_markPointProps(tag, properties) {
  },
  beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {
  },
  beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(tag, properties) {
  },
  endMarkedContent: function CanvasGraphics_endMarkedContent() {
  },
  beginCompat: function CanvasGraphics_beginCompat() {
  },
  endCompat: function CanvasGraphics_endCompat() {
  },
  consumePath: function CanvasGraphics_consumePath() {
   var ctx = this.ctx;
   if (this.pendingClip) {
    if (this.pendingClip === EO_CLIP) {
     ctx.clip('evenodd');
    } else {
     ctx.clip();
    }
    this.pendingClip = null;
   }
   ctx.beginPath();
  },
  getSinglePixelWidth: function CanvasGraphics_getSinglePixelWidth(scale) {
   if (this.cachedGetSinglePixelWidth === null) {
    this.ctx.save();
    var inverse = this.ctx.mozCurrentTransformInverse;
    this.ctx.restore();
    this.cachedGetSinglePixelWidth = Math.sqrt(Math.max(inverse[0] * inverse[0] + inverse[1] * inverse[1], inverse[2] * inverse[2] + inverse[3] * inverse[3]));
   }
   return this.cachedGetSinglePixelWidth;
  },
  getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
   var transform = this.ctx.mozCurrentTransform;
   return [
    transform[0] * x + transform[2] * y + transform[4],
    transform[1] * x + transform[3] * y + transform[5]
   ];
  }
 };
 for (var op in OPS) {
  CanvasGraphics.prototype[OPS[op]] = CanvasGraphics.prototype[op];
 }
 return CanvasGraphics;
}();
exports.CanvasGraphics = CanvasGraphics;

/***/ }),
/* 11 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var sharedUtil = __w_pdfjs_require__(0);
var assert = sharedUtil.assert;
var bytesToString = sharedUtil.bytesToString;
var string32 = sharedUtil.string32;
var shadow = sharedUtil.shadow;
var warn = sharedUtil.warn;
function FontLoader(docId) {
 this.docId = docId;
 this.styleElement = null;
 this.nativeFontFaces = [];
 this.loadTestFontId = 0;
 this.loadingContext = {
  requests: [],
  nextRequestId: 0
 };
}
FontLoader.prototype = {
 insertRule: function fontLoaderInsertRule(rule) {
  var styleElement = this.styleElement;
  if (!styleElement) {
   styleElement = this.styleElement = document.createElement('style');
   styleElement.id = 'PDFJS_FONT_STYLE_TAG_' + this.docId;
   document.documentElement.getElementsByTagName('head')[0].appendChild(styleElement);
  }
  var styleSheet = styleElement.sheet;
  styleSheet.insertRule(rule, styleSheet.cssRules.length);
 },
 clear: function fontLoaderClear() {
  if (this.styleElement) {
   this.styleElement.remove();
   this.styleElement = null;
  }
  this.nativeFontFaces.forEach(function (nativeFontFace) {
   document.fonts.delete(nativeFontFace);
  });
  this.nativeFontFaces.length = 0;
 }
};
var getLoadTestFont = function () {
 return atob('T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQ' + 'AABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwA' + 'AAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbm' + 'FtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAA' + 'AADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6A' + 'ABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAA' + 'MQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAA' + 'AAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAA' + 'AAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQ' + 'AAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMA' + 'AQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAA' + 'EAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAA' + 'AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAA' + 'AAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgc' + 'A/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWF' + 'hYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQA' + 'AAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAg' + 'ABAAAAAAAAAAAD6AAAAAAAAA==');
};
Object.defineProperty(FontLoader.prototype, 'loadTestFont', {
 get: function () {
  return shadow(this, 'loadTestFont', getLoadTestFont());
 },
 configurable: true
});
FontLoader.prototype.addNativeFontFace = function fontLoader_addNativeFontFace(nativeFontFace) {
 this.nativeFontFaces.push(nativeFontFace);
 document.fonts.add(nativeFontFace);
};
FontLoader.prototype.bind = function fontLoaderBind(fonts, callback) {
 var rules = [];
 var fontsToLoad = [];
 var fontLoadPromises = [];
 var getNativeFontPromise = function (nativeFontFace) {
  return nativeFontFace.loaded.catch(function (e) {
   warn('Failed to load font "' + nativeFontFace.family + '": ' + e);
  });
 };
 var isFontLoadingAPISupported = FontLoader.isFontLoadingAPISupported && !FontLoader.isSyncFontLoadingSupported;
 for (var i = 0, ii = fonts.length; i < ii; i++) {
  var font = fonts[i];
  if (font.attached || font.loading === false) {
   continue;
  }
  font.attached = true;
  if (isFontLoadingAPISupported) {
   var nativeFontFace = font.createNativeFontFace();
   if (nativeFontFace) {
    this.addNativeFontFace(nativeFontFace);
    fontLoadPromises.push(getNativeFontPromise(nativeFontFace));
   }
  } else {
   var rule = font.createFontFaceRule();
   if (rule) {
    this.insertRule(rule);
    rules.push(rule);
    fontsToLoad.push(font);
   }
  }
 }
 var request = this.queueLoadingCallback(callback);
 if (isFontLoadingAPISupported) {
  Promise.all(fontLoadPromises).then(function () {
   request.complete();
  });
 } else if (rules.length > 0 && !FontLoader.isSyncFontLoadingSupported) {
  this.prepareFontLoadEvent(rules, fontsToLoad, request);
 } else {
  request.complete();
 }
};
FontLoader.prototype.queueLoadingCallback = function FontLoader_queueLoadingCallback(callback) {
 function LoadLoader_completeRequest() {
  assert(!request.end, 'completeRequest() cannot be called twice');
  request.end = Date.now();
  while (context.requests.length > 0 && context.requests[0].end) {
   var otherRequest = context.requests.shift();
   setTimeout(otherRequest.callback, 0);
  }
 }
 var context = this.loadingContext;
 var requestId = 'pdfjs-font-loading-' + context.nextRequestId++;
 var request = {
  id: requestId,
  complete: LoadLoader_completeRequest,
  callback: callback,
  started: Date.now()
 };
 context.requests.push(request);
 return request;
};
FontLoader.prototype.prepareFontLoadEvent = function fontLoaderPrepareFontLoadEvent(rules, fonts, request) {
 function int32(data, offset) {
  return data.charCodeAt(offset) << 24 | data.charCodeAt(offset + 1) << 16 | data.charCodeAt(offset + 2) << 8 | data.charCodeAt(offset + 3) & 0xff;
 }
 function spliceString(s, offset, remove, insert) {
  var chunk1 = s.substr(0, offset);
  var chunk2 = s.substr(offset + remove);
  return chunk1 + insert + chunk2;
 }
 var i, ii;
 var canvas = document.createElement('canvas');
 canvas.width = 1;
 canvas.height = 1;
 var ctx = canvas.getContext('2d');
 var called = 0;
 function isFontReady(name, callback) {
  called++;
  if (called > 30) {
   warn('Load test font never loaded.');
   callback();
   return;
  }
  ctx.font = '30px ' + name;
  ctx.fillText('.', 0, 20);
  var imageData = ctx.getImageData(0, 0, 1, 1);
  if (imageData.data[3] > 0) {
   callback();
   return;
  }
  setTimeout(isFontReady.bind(null, name, callback));
 }
 var loadTestFontId = 'lt' + Date.now() + this.loadTestFontId++;
 var data = this.loadTestFont;
 var COMMENT_OFFSET = 976;
 data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
 var CFF_CHECKSUM_OFFSET = 16;
 var XXXX_VALUE = 0x58585858;
 var checksum = int32(data, CFF_CHECKSUM_OFFSET);
 for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
  checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
 }
 if (i < loadTestFontId.length) {
  checksum = checksum - XXXX_VALUE + int32(loadTestFontId + 'XXX', i) | 0;
 }
 data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, string32(checksum));
 var url = 'url(data:font/opentype;base64,' + btoa(data) + ');';
 var rule = '@font-face { font-family:"' + loadTestFontId + '";src:' + url + '}';
 this.insertRule(rule);
 var names = [];
 for (i = 0, ii = fonts.length; i < ii; i++) {
  names.push(fonts[i].loadedName);
 }
 names.push(loadTestFontId);
 var div = document.createElement('div');
 div.setAttribute('style', 'visibility: hidden;' + 'width: 10px; height: 10px;' + 'position: absolute; top: 0px; left: 0px;');
 for (i = 0, ii = names.length; i < ii; ++i) {
  var span = document.createElement('span');
  span.textContent = 'Hi';
  span.style.fontFamily = names[i];
  div.appendChild(span);
 }
 document.body.appendChild(div);
 isFontReady(loadTestFontId, function () {
  document.body.removeChild(div);
  request.complete();
 });
};
FontLoader.isFontLoadingAPISupported = typeof document !== 'undefined' && !!document.fonts;
var isSyncFontLoadingSupported = function isSyncFontLoadingSupported() {
 if (typeof navigator === 'undefined') {
  return true;
 }
 var supported = false;
 var m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
 if (m && m[1] >= 14) {
  supported = true;
 }
 return supported;
};
Object.defineProperty(FontLoader, 'isSyncFontLoadingSupported', {
 get: function () {
  return shadow(FontLoader, 'isSyncFontLoadingSupported', isSyncFontLoadingSupported());
 },
 enumerable: true,
 configurable: true
});
var IsEvalSupportedCached = {
 get value() {
  return shadow(this, 'value', sharedUtil.isEvalSupported());
 }
};
var FontFaceObject = function FontFaceObjectClosure() {
 function FontFaceObject(translatedData, options) {
  this.compiledGlyphs = Object.create(null);
  for (var i in translatedData) {
   this[i] = translatedData[i];
  }
  this.options = options;
 }
 FontFaceObject.prototype = {
  createNativeFontFace: function FontFaceObject_createNativeFontFace() {
   if (!this.data) {
    return null;
   }
   if (this.options.disableFontFace) {
    this.disableFontFace = true;
    return null;
   }
   var nativeFontFace = new FontFace(this.loadedName, this.data, {});
   if (this.options.fontRegistry) {
    this.options.fontRegistry.registerFont(this);
   }
   return nativeFontFace;
  },
  createFontFaceRule: function FontFaceObject_createFontFaceRule() {
   if (!this.data) {
    return null;
   }
   if (this.options.disableFontFace) {
    this.disableFontFace = true;
    return null;
   }
   var data = bytesToString(new Uint8Array(this.data));
   var fontName = this.loadedName;
   var url = 'url(data:' + this.mimetype + ';base64,' + btoa(data) + ');';
   var rule = '@font-face { font-family:"' + fontName + '";src:' + url + '}';
   if (this.options.fontRegistry) {
    this.options.fontRegistry.registerFont(this, url);
   }
   return rule;
  },
  getPathGenerator: function FontFaceObject_getPathGenerator(objs, character) {
   if (!(character in this.compiledGlyphs)) {
    var cmds = objs.get(this.loadedName + '_path_' + character);
    var current, i, len;
    if (this.options.isEvalSupported && IsEvalSupportedCached.value) {
     var args, js = '';
     for (i = 0, len = cmds.length; i < len; i++) {
      current = cmds[i];
      if (current.args !== undefined) {
       args = current.args.join(',');
      } else {
       args = '';
      }
      js += 'c.' + current.cmd + '(' + args + ');\n';
     }
     this.compiledGlyphs[character] = new Function('c', 'size', js);
    } else {
     this.compiledGlyphs[character] = function (c, size) {
      for (i = 0, len = cmds.length; i < len; i++) {
       current = cmds[i];
       if (current.cmd === 'scale') {
        current.args = [
         size,
         -size
        ];
       }
       c[current.cmd].apply(c, current.args);
      }
     };
    }
   }
   return this.compiledGlyphs[character];
  }
 };
 return FontFaceObject;
}();
exports.FontFaceObject = FontFaceObject;
exports.FontLoader = FontLoader;

/***/ }),
/* 12 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var sharedUtil = __w_pdfjs_require__(0);
var displayWebGL = __w_pdfjs_require__(8);
var Util = sharedUtil.Util;
var info = sharedUtil.info;
var isArray = sharedUtil.isArray;
var error = sharedUtil.error;
var WebGLUtils = displayWebGL.WebGLUtils;
var ShadingIRs = {};
ShadingIRs.RadialAxial = {
 fromIR: function RadialAxial_fromIR(raw) {
  var type = raw[1];
  var colorStops = raw[2];
  var p0 = raw[3];
  var p1 = raw[4];
  var r0 = raw[5];
  var r1 = raw[6];
  return {
   type: 'Pattern',
   getPattern: function RadialAxial_getPattern(ctx) {
    var grad;
    if (type === 'axial') {
     grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
    } else if (type === 'radial') {
     grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
    }
    for (var i = 0, ii = colorStops.length; i < ii; ++i) {
     var c = colorStops[i];
     grad.addColorStop(c[0], c[1]);
    }
    return grad;
   }
  };
 }
};
var createMeshCanvas = function createMeshCanvasClosure() {
 function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
  var coords = context.coords, colors = context.colors;
  var bytes = data.data, rowSize = data.width * 4;
  var tmp;
  if (coords[p1 + 1] > coords[p2 + 1]) {
   tmp = p1;
   p1 = p2;
   p2 = tmp;
   tmp = c1;
   c1 = c2;
   c2 = tmp;
  }
  if (coords[p2 + 1] > coords[p3 + 1]) {
   tmp = p2;
   p2 = p3;
   p3 = tmp;
   tmp = c2;
   c2 = c3;
   c3 = tmp;
  }
  if (coords[p1 + 1] > coords[p2 + 1]) {
   tmp = p1;
   p1 = p2;
   p2 = tmp;
   tmp = c1;
   c1 = c2;
   c2 = tmp;
  }
  var x1 = (coords[p1] + context.offsetX) * context.scaleX;
  var y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
  var x2 = (coords[p2] + context.offsetX) * context.scaleX;
  var y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
  var x3 = (coords[p3] + context.offsetX) * context.scaleX;
  var y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
  if (y1 >= y3) {
   return;
  }
  var c1r = colors[c1], c1g = colors[c1 + 1], c1b = colors[c1 + 2];
  var c2r = colors[c2], c2g = colors[c2 + 1], c2b = colors[c2 + 2];
  var c3r = colors[c3], c3g = colors[c3 + 1], c3b = colors[c3 + 2];
  var minY = Math.round(y1), maxY = Math.round(y3);
  var xa, car, cag, cab;
  var xb, cbr, cbg, cbb;
  var k;
  for (var y = minY; y <= maxY; y++) {
   if (y < y2) {
    k = y < y1 ? 0 : y1 === y2 ? 1 : (y1 - y) / (y1 - y2);
    xa = x1 - (x1 - x2) * k;
    car = c1r - (c1r - c2r) * k;
    cag = c1g - (c1g - c2g) * k;
    cab = c1b - (c1b - c2b) * k;
   } else {
    k = y > y3 ? 1 : y2 === y3 ? 0 : (y2 - y) / (y2 - y3);
    xa = x2 - (x2 - x3) * k;
    car = c2r - (c2r - c3r) * k;
    cag = c2g - (c2g - c3g) * k;
    cab = c2b - (c2b - c3b) * k;
   }
   k = y < y1 ? 0 : y > y3 ? 1 : (y1 - y) / (y1 - y3);
   xb = x1 - (x1 - x3) * k;
   cbr = c1r - (c1r - c3r) * k;
   cbg = c1g - (c1g - c3g) * k;
   cbb = c1b - (c1b - c3b) * k;
   var x1_ = Math.round(Math.min(xa, xb));
   var x2_ = Math.round(Math.max(xa, xb));
   var j = rowSize * y + x1_ * 4;
   for (var x = x1_; x <= x2_; x++) {
    k = (xa - x) / (xa - xb);
    k = k < 0 ? 0 : k > 1 ? 1 : k;
    bytes[j++] = car - (car - cbr) * k | 0;
    bytes[j++] = cag - (cag - cbg) * k | 0;
    bytes[j++] = cab - (cab - cbb) * k | 0;
    bytes[j++] = 255;
   }
  }
 }
 function drawFigure(data, figure, context) {
  var ps = figure.coords;
  var cs = figure.colors;
  var i, ii;
  switch (figure.type) {
  case 'lattice':
   var verticesPerRow = figure.verticesPerRow;
   var rows = Math.floor(ps.length / verticesPerRow) - 1;
   var cols = verticesPerRow - 1;
   for (i = 0; i < rows; i++) {
    var q = i * verticesPerRow;
    for (var j = 0; j < cols; j++, q++) {
     drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
     drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
    }
   }
   break;
  case 'triangles':
   for (i = 0, ii = ps.length; i < ii; i += 3) {
    drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
   }
   break;
  default:
   error('illigal figure');
   break;
  }
 }
 function createMeshCanvas(bounds, combinesScale, coords, colors, figures, backgroundColor, cachedCanvases) {
  var EXPECTED_SCALE = 1.1;
  var MAX_PATTERN_SIZE = 3000;
  var BORDER_SIZE = 2;
  var offsetX = Math.floor(bounds[0]);
  var offsetY = Math.floor(bounds[1]);
  var boundsWidth = Math.ceil(bounds[2]) - offsetX;
  var boundsHeight = Math.ceil(bounds[3]) - offsetY;
  var width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
  var height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
  var scaleX = boundsWidth / width;
  var scaleY = boundsHeight / height;
  var context = {
   coords: coords,
   colors: colors,
   offsetX: -offsetX,
   offsetY: -offsetY,
   scaleX: 1 / scaleX,
   scaleY: 1 / scaleY
  };
  var paddedWidth = width + BORDER_SIZE * 2;
  var paddedHeight = height + BORDER_SIZE * 2;
  var canvas, tmpCanvas, i, ii;
  if (WebGLUtils.isEnabled) {
   canvas = WebGLUtils.drawFigures(width, height, backgroundColor, figures, context);
   tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
   tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
   canvas = tmpCanvas.canvas;
  } else {
   tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight, false);
   var tmpCtx = tmpCanvas.context;
   var data = tmpCtx.createImageData(width, height);
   if (backgroundColor) {
    var bytes = data.data;
    for (i = 0, ii = bytes.length; i < ii; i += 4) {
     bytes[i] = backgroundColor[0];
     bytes[i + 1] = backgroundColor[1];
     bytes[i + 2] = backgroundColor[2];
     bytes[i + 3] = 255;
    }
   }
   for (i = 0; i < figures.length; i++) {
    drawFigure(data, figures[i], context);
   }
   tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
   canvas = tmpCanvas.canvas;
  }
  return {
   canvas: canvas,
   offsetX: offsetX - BORDER_SIZE * scaleX,
   offsetY: offsetY - BORDER_SIZE * scaleY,
   scaleX: scaleX,
   scaleY: scaleY
  };
 }
 return createMeshCanvas;
}();
ShadingIRs.Mesh = {
 fromIR: function Mesh_fromIR(raw) {
  var coords = raw[2];
  var colors = raw[3];
  var figures = raw[4];
  var bounds = raw[5];
  var matrix = raw[6];
  var background = raw[8];
  return {
   type: 'Pattern',
   getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
    var scale;
    if (shadingFill) {
     scale = Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
    } else {
     scale = Util.singularValueDecompose2dScale(owner.baseTransform);
     if (matrix) {
      var matrixScale = Util.singularValueDecompose2dScale(matrix);
      scale = [
       scale[0] * matrixScale[0],
       scale[1] * matrixScale[1]
      ];
     }
    }
    var temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords, colors, figures, shadingFill ? null : background, owner.cachedCanvases);
    if (!shadingFill) {
     ctx.setTransform.apply(ctx, owner.baseTransform);
     if (matrix) {
      ctx.transform.apply(ctx, matrix);
     }
    }
    ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
    ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
    return ctx.createPattern(temporaryPatternCanvas.canvas, 'no-repeat');
   }
  };
 }
};
ShadingIRs.Dummy = {
 fromIR: function Dummy_fromIR() {
  return {
   type: 'Pattern',
   getPattern: function Dummy_fromIR_getPattern() {
    return 'hotpink';
   }
  };
 }
};
function getShadingPatternFromIR(raw) {
 var shadingIR = ShadingIRs[raw[0]];
 if (!shadingIR) {
  error('Unknown IR type: ' + raw[0]);
 }
 return shadingIR.fromIR(raw);
}
var TilingPattern = function TilingPatternClosure() {
 var PaintType = {
  COLORED: 1,
  UNCOLORED: 2
 };
 var MAX_PATTERN_SIZE = 3000;
 function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
  this.operatorList = IR[2];
  this.matrix = IR[3] || [
   1,
   0,
   0,
   1,
   0,
   0
  ];
  this.bbox = IR[4];
  this.xstep = IR[5];
  this.ystep = IR[6];
  this.paintType = IR[7];
  this.tilingType = IR[8];
  this.color = color;
  this.canvasGraphicsFactory = canvasGraphicsFactory;
  this.baseTransform = baseTransform;
  this.type = 'Pattern';
  this.ctx = ctx;
 }
 TilingPattern.prototype = {
  createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
   var operatorList = this.operatorList;
   var bbox = this.bbox;
   var xstep = this.xstep;
   var ystep = this.ystep;
   var paintType = this.paintType;
   var tilingType = this.tilingType;
   var color = this.color;
   var canvasGraphicsFactory = this.canvasGraphicsFactory;
   info('TilingType: ' + tilingType);
   var x0 = bbox[0], y0 = bbox[1], x1 = bbox[2], y1 = bbox[3];
   var topLeft = [
    x0,
    y0
   ];
   var botRight = [
    x0 + xstep,
    y0 + ystep
   ];
   var width = botRight[0] - topLeft[0];
   var height = botRight[1] - topLeft[1];
   var matrixScale = Util.singularValueDecompose2dScale(this.matrix);
   var curMatrixScale = Util.singularValueDecompose2dScale(this.baseTransform);
   var combinedScale = [
    matrixScale[0] * curMatrixScale[0],
    matrixScale[1] * curMatrixScale[1]
   ];
   width = Math.min(Math.ceil(Math.abs(width * combinedScale[0])), MAX_PATTERN_SIZE);
   height = Math.min(Math.ceil(Math.abs(height * combinedScale[1])), MAX_PATTERN_SIZE);
   var tmpCanvas = owner.cachedCanvases.getCanvas('pattern', width, height, true);
   var tmpCtx = tmpCanvas.context;
   var graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
   graphics.groupLevel = owner.groupLevel;
   this.setFillAndStrokeStyleToContext(tmpCtx, paintType, color);
   this.setScale(width, height, xstep, ystep);
   this.transformToScale(graphics);
   var tmpTranslate = [
    1,
    0,
    0,
    1,
    -topLeft[0],
    -topLeft[1]
   ];
   graphics.transform.apply(graphics, tmpTranslate);
   this.clipBbox(graphics, bbox, x0, y0, x1, y1);
   graphics.executeOperatorList(operatorList);
   return tmpCanvas.canvas;
  },
  setScale: function TilingPattern_setScale(width, height, xstep, ystep) {
   this.scale = [
    width / xstep,
    height / ystep
   ];
  },
  transformToScale: function TilingPattern_transformToScale(graphics) {
   var scale = this.scale;
   var tmpScale = [
    scale[0],
    0,
    0,
    scale[1],
    0,
    0
   ];
   graphics.transform.apply(graphics, tmpScale);
  },
  scaleToContext: function TilingPattern_scaleToContext() {
   var scale = this.scale;
   this.ctx.scale(1 / scale[0], 1 / scale[1]);
  },
  clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
   if (bbox && isArray(bbox) && bbox.length === 4) {
    var bboxWidth = x1 - x0;
    var bboxHeight = y1 - y0;
    graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
    graphics.clip();
    graphics.endPath();
   }
  },
  setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(context, paintType, color) {
   switch (paintType) {
   case PaintType.COLORED:
    var ctx = this.ctx;
    context.fillStyle = ctx.fillStyle;
    context.strokeStyle = ctx.strokeStyle;
    break;
   case PaintType.UNCOLORED:
    var cssColor = Util.makeCssRgb(color[0], color[1], color[2]);
    context.fillStyle = cssColor;
    context.strokeStyle = cssColor;
    break;
   default:
    error('Unsupported paint type: ' + paintType);
   }
  },
  getPattern: function TilingPattern_getPattern(ctx, owner) {
   var temporaryPatternCanvas = this.createPatternCanvas(owner);
   ctx = this.ctx;
   ctx.setTransform.apply(ctx, this.baseTransform);
   ctx.transform.apply(ctx, this.matrix);
   this.scaleToContext();
   return ctx.createPattern(temporaryPatternCanvas, 'repeat');
  }
 };
 return TilingPattern;
}();
exports.getShadingPatternFromIR = getShadingPatternFromIR;
exports.TilingPattern = TilingPattern;

/***/ }),
/* 13 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
if (typeof PDFJS === 'undefined' || !PDFJS.compatibilityChecked) {
 var globalScope = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this;
 var userAgent = typeof navigator !== 'undefined' && navigator.userAgent || '';
 var isAndroid = /Android/.test(userAgent);
 var isAndroidPre3 = /Android\s[0-2][^\d]/.test(userAgent);
 var isAndroidPre5 = /Android\s[0-4][^\d]/.test(userAgent);
 var isChrome = userAgent.indexOf('Chrom') >= 0;
 var isChromeWithRangeBug = /Chrome\/(39|40)\./.test(userAgent);
 var isIOSChrome = userAgent.indexOf('CriOS') >= 0;
 var isIE = userAgent.indexOf('Trident') >= 0;
 var isIOS = /\b(iPad|iPhone|iPod)(?=;)/.test(userAgent);
 var isOpera = userAgent.indexOf('Opera') >= 0;
 var isSafari = /Safari\//.test(userAgent) && !/(Chrome\/|Android\s)/.test(userAgent);
 var hasDOM = typeof window === 'object' && typeof document === 'object';
 if (typeof PDFJS === 'undefined') {
  globalScope.PDFJS = {};
 }
 PDFJS.compatibilityChecked = true;
 (function checkTypedArrayCompatibility() {
  if (typeof Uint8Array !== 'undefined') {
   if (typeof Uint8Array.prototype.subarray === 'undefined') {
    Uint8Array.prototype.subarray = function subarray(start, end) {
     return new Uint8Array(this.slice(start, end));
    };
    Float32Array.prototype.subarray = function subarray(start, end) {
     return new Float32Array(this.slice(start, end));
    };
   }
   if (typeof Float64Array === 'undefined') {
    globalScope.Float64Array = Float32Array;
   }
   return;
  }
  function subarray(start, end) {
   return new TypedArray(this.slice(start, end));
  }
  function setArrayOffset(array, offset) {
   if (arguments.length < 2) {
    offset = 0;
   }
   for (var i = 0, n = array.length; i < n; ++i, ++offset) {
    this[offset] = array[i] & 0xFF;
   }
  }
  function TypedArray(arg1) {
   var result, i, n;
   if (typeof arg1 === 'number') {
    result = [];
    for (i = 0; i < arg1; ++i) {
     result[i] = 0;
    }
   } else if ('slice' in arg1) {
    result = arg1.slice(0);
   } else {
    result = [];
    for (i = 0, n = arg1.length; i < n; ++i) {
     result[i] = arg1[i];
    }
   }
   result.subarray = subarray;
   result.buffer = result;
   result.byteLength = result.length;
   result.set = setArrayOffset;
   if (typeof arg1 === 'object' && arg1.buffer) {
    result.buffer = arg1.buffer;
   }
   return result;
  }
  globalScope.Uint8Array = TypedArray;
  globalScope.Int8Array = TypedArray;
  globalScope.Uint32Array = TypedArray;
  globalScope.Int32Array = TypedArray;
  globalScope.Uint16Array = TypedArray;
  globalScope.Float32Array = TypedArray;
  globalScope.Float64Array = TypedArray;
 }());
 (function normalizeURLObject() {
  if (!globalScope.URL) {
   globalScope.URL = globalScope.webkitURL;
  }
 }());
 (function checkObjectDefinePropertyCompatibility() {
  if (typeof Object.defineProperty !== 'undefined') {
   var definePropertyPossible = true;
   try {
    if (hasDOM) {
     Object.defineProperty(new Image(), 'id', { value: 'test' });
    }
    var Test = function Test() {
    };
    Test.prototype = {
     get id() {
     }
    };
    Object.defineProperty(new Test(), 'id', {
     value: '',
     configurable: true,
     enumerable: true,
     writable: false
    });
   } catch (e) {
    definePropertyPossible = false;
   }
   if (definePropertyPossible) {
    return;
   }
  }
  Object.defineProperty = function objectDefineProperty(obj, name, def) {
   delete obj[name];
   if ('get' in def) {
    obj.__defineGetter__(name, def['get']);
   }
   if ('set' in def) {
    obj.__defineSetter__(name, def['set']);
   }
   if ('value' in def) {
    obj.__defineSetter__(name, function objectDefinePropertySetter(value) {
     this.__defineGetter__(name, function objectDefinePropertyGetter() {
      return value;
     });
     return value;
    });
    obj[name] = def.value;
   }
  };
 }());
 (function checkXMLHttpRequestResponseCompatibility() {
  if (typeof XMLHttpRequest === 'undefined') {
   return;
  }
  var xhrPrototype = XMLHttpRequest.prototype;
  var xhr = new XMLHttpRequest();
  if (!('overrideMimeType' in xhr)) {
   Object.defineProperty(xhrPrototype, 'overrideMimeType', {
    value: function xmlHttpRequestOverrideMimeType(mimeType) {
    }
   });
  }
  if ('responseType' in xhr) {
   return;
  }
  Object.defineProperty(xhrPrototype, 'responseType', {
   get: function xmlHttpRequestGetResponseType() {
    return this._responseType || 'text';
   },
   set: function xmlHttpRequestSetResponseType(value) {
    if (value === 'text' || value === 'arraybuffer') {
     this._responseType = value;
     if (value === 'arraybuffer' && typeof this.overrideMimeType === 'function') {
      this.overrideMimeType('text/plain; charset=x-user-defined');
     }
    }
   }
  });
  if (typeof VBArray !== 'undefined') {
   Object.defineProperty(xhrPrototype, 'response', {
    get: function xmlHttpRequestResponseGet() {
     if (this.responseType === 'arraybuffer') {
      return new Uint8Array(new VBArray(this.responseBody).toArray());
     }
     return this.responseText;
    }
   });
   return;
  }
  Object.defineProperty(xhrPrototype, 'response', {
   get: function xmlHttpRequestResponseGet() {
    if (this.responseType !== 'arraybuffer') {
     return this.responseText;
    }
    var text = this.responseText;
    var i, n = text.length;
    var result = new Uint8Array(n);
    for (i = 0; i < n; ++i) {
     result[i] = text.charCodeAt(i) & 0xFF;
    }
    return result.buffer;
   }
  });
 }());
 (function checkWindowBtoaCompatibility() {
  if ('btoa' in globalScope) {
   return;
  }
  var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  globalScope.btoa = function (chars) {
   var buffer = '';
   var i, n;
   for (i = 0, n = chars.length; i < n; i += 3) {
    var b1 = chars.charCodeAt(i) & 0xFF;
    var b2 = chars.charCodeAt(i + 1) & 0xFF;
    var b3 = chars.charCodeAt(i + 2) & 0xFF;
    var d1 = b1 >> 2, d2 = (b1 & 3) << 4 | b2 >> 4;
    var d3 = i + 1 < n ? (b2 & 0xF) << 2 | b3 >> 6 : 64;
    var d4 = i + 2 < n ? b3 & 0x3F : 64;
    buffer += digits.charAt(d1) + digits.charAt(d2) + digits.charAt(d3) + digits.charAt(d4);
   }
   return buffer;
  };
 }());
 (function checkWindowAtobCompatibility() {
  if ('atob' in globalScope) {
   return;
  }
  var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  globalScope.atob = function (input) {
   input = input.replace(/=+$/, '');
   if (input.length % 4 === 1) {
    throw new Error('bad atob input');
   }
   for (var bc = 0, bs, buffer, idx = 0, output = ''; buffer = input.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
    buffer = digits.indexOf(buffer);
   }
   return output;
  };
 }());
 (function checkFunctionPrototypeBindCompatibility() {
  if (typeof Function.prototype.bind !== 'undefined') {
   return;
  }
  Function.prototype.bind = function functionPrototypeBind(obj) {
   var fn = this, headArgs = Array.prototype.slice.call(arguments, 1);
   var bound = function functionPrototypeBindBound() {
    var args = headArgs.concat(Array.prototype.slice.call(arguments));
    return fn.apply(obj, args);
   };
   return bound;
  };
 }());
 (function checkDatasetProperty() {
  if (!hasDOM) {
   return;
  }
  var div = document.createElement('div');
  if ('dataset' in div) {
   return;
  }
  Object.defineProperty(HTMLElement.prototype, 'dataset', {
   get: function () {
    if (this._dataset) {
     return this._dataset;
    }
    var dataset = {};
    for (var j = 0, jj = this.attributes.length; j < jj; j++) {
     var attribute = this.attributes[j];
     if (attribute.name.substring(0, 5) !== 'data-') {
      continue;
     }
     var key = attribute.name.substring(5).replace(/\-([a-z])/g, function (all, ch) {
      return ch.toUpperCase();
     });
     dataset[key] = attribute.value;
    }
    Object.defineProperty(this, '_dataset', {
     value: dataset,
     writable: false,
     enumerable: false
    });
    return dataset;
   },
   enumerable: true
  });
 }());
 (function checkClassListProperty() {
  function changeList(element, itemName, add, remove) {
   var s = element.className || '';
   var list = s.split(/\s+/g);
   if (list[0] === '') {
    list.shift();
   }
   var index = list.indexOf(itemName);
   if (index < 0 && add) {
    list.push(itemName);
   }
   if (index >= 0 && remove) {
    list.splice(index, 1);
   }
   element.className = list.join(' ');
   return index >= 0;
  }
  if (!hasDOM) {
   return;
  }
  var div = document.createElement('div');
  if ('classList' in div) {
   return;
  }
  var classListPrototype = {
   add: function (name) {
    changeList(this.element, name, true, false);
   },
   contains: function (name) {
    return changeList(this.element, name, false, false);
   },
   remove: function (name) {
    changeList(this.element, name, false, true);
   },
   toggle: function (name) {
    changeList(this.element, name, true, true);
   }
  };
  Object.defineProperty(HTMLElement.prototype, 'classList', {
   get: function () {
    if (this._classList) {
     return this._classList;
    }
    var classList = Object.create(classListPrototype, {
     element: {
      value: this,
      writable: false,
      enumerable: true
     }
    });
    Object.defineProperty(this, '_classList', {
     value: classList,
     writable: false,
     enumerable: false
    });
    return classList;
   },
   enumerable: true
  });
 }());
 (function checkWorkerConsoleCompatibility() {
  if (typeof importScripts === 'undefined' || 'console' in globalScope) {
   return;
  }
  var consoleTimer = {};
  var workerConsole = {
   log: function log() {
    var args = Array.prototype.slice.call(arguments);
    globalScope.postMessage({
     targetName: 'main',
     action: 'console_log',
     data: args
    });
   },
   error: function error() {
    var args = Array.prototype.slice.call(arguments);
    globalScope.postMessage({
     targetName: 'main',
     action: 'console_error',
     data: args
    });
   },
   time: function time(name) {
    consoleTimer[name] = Date.now();
   },
   timeEnd: function timeEnd(name) {
    var time = consoleTimer[name];
    if (!time) {
     throw new Error('Unknown timer name ' + name);
    }
    this.log('Timer:', name, Date.now() - time);
   }
  };
  globalScope.console = workerConsole;
 }());
 (function checkConsoleCompatibility() {
  if (!hasDOM) {
   return;
  }
  if (!('console' in window)) {
   window.console = {
    log: function () {
    },
    error: function () {
    },
    warn: function () {
    }
   };
   return;
  }
  if (!('bind' in console.log)) {
   console.log = function (fn) {
    return function (msg) {
     return fn(msg);
    };
   }(console.log);
   console.error = function (fn) {
    return function (msg) {
     return fn(msg);
    };
   }(console.error);
   console.warn = function (fn) {
    return function (msg) {
     return fn(msg);
    };
   }(console.warn);
   return;
  }
 }());
 (function checkOnClickCompatibility() {
  function ignoreIfTargetDisabled(event) {
   if (isDisabled(event.target)) {
    event.stopPropagation();
   }
  }
  function isDisabled(node) {
   return node.disabled || node.parentNode && isDisabled(node.parentNode);
  }
  if (isOpera) {
   document.addEventListener('click', ignoreIfTargetDisabled, true);
  }
 }());
 (function checkOnBlobSupport() {
  if (isIE || isIOSChrome) {
   PDFJS.disableCreateObjectURL = true;
  }
 }());
 (function checkNavigatorLanguage() {
  if (typeof navigator === 'undefined') {
   return;
  }
  if ('language' in navigator) {
   return;
  }
  PDFJS.locale = navigator.userLanguage || 'en-US';
 }());
 (function checkRangeRequests() {
  if (isSafari || isAndroidPre3 || isChromeWithRangeBug || isIOS) {
   PDFJS.disableRange = true;
   PDFJS.disableStream = true;
  }
 }());
 (function checkHistoryManipulation() {
  if (!hasDOM) {
   return;
  }
  if (!history.pushState || isAndroidPre3) {
   PDFJS.disableHistory = true;
  }
 }());
 (function checkSetPresenceInImageData() {
  if (!hasDOM) {
   return;
  }
  if (window.CanvasPixelArray) {
   if (typeof window.CanvasPixelArray.prototype.set !== 'function') {
    window.CanvasPixelArray.prototype.set = function (arr) {
     for (var i = 0, ii = this.length; i < ii; i++) {
      this[i] = arr[i];
     }
    };
   }
  } else {
   var polyfill = false, versionMatch;
   if (isChrome) {
    versionMatch = userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    polyfill = versionMatch && parseInt(versionMatch[2]) < 21;
   } else if (isAndroid) {
    polyfill = isAndroidPre5;
   } else if (isSafari) {
    versionMatch = userAgent.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//);
    polyfill = versionMatch && parseInt(versionMatch[1]) < 6;
   }
   if (polyfill) {
    var contextPrototype = window.CanvasRenderingContext2D.prototype;
    var createImageData = contextPrototype.createImageData;
    contextPrototype.createImageData = function (w, h) {
     var imageData = createImageData.call(this, w, h);
     imageData.data.set = function (arr) {
      for (var i = 0, ii = this.length; i < ii; i++) {
       this[i] = arr[i];
      }
     };
     return imageData;
    };
    contextPrototype = null;
   }
  }
 }());
 (function checkRequestAnimationFrame() {
  function fakeRequestAnimationFrame(callback) {
   window.setTimeout(callback, 20);
  }
  if (!hasDOM) {
   return;
  }
  if (isIOS) {
   window.requestAnimationFrame = fakeRequestAnimationFrame;
   return;
  }
  if ('requestAnimationFrame' in window) {
   return;
  }
  window.requestAnimationFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || fakeRequestAnimationFrame;
 }());
 (function checkCanvasSizeLimitation() {
  if (isIOS || isAndroid) {
   PDFJS.maxCanvasPixels = 5242880;
  }
 }());
 (function checkFullscreenSupport() {
  if (!hasDOM) {
   return;
  }
  if (isIE && window.parent !== window) {
   PDFJS.disableFullscreen = true;
  }
 }());
 (function checkCurrentScript() {
  if (!hasDOM) {
   return;
  }
  if ('currentScript' in document) {
   return;
  }
  Object.defineProperty(document, 'currentScript', {
   get: function () {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
   },
   enumerable: true,
   configurable: true
  });
 }());
 (function checkInputTypeNumberAssign() {
  if (!hasDOM) {
   return;
  }
  var el = document.createElement('input');
  try {
   el.type = 'number';
  } catch (ex) {
   var inputProto = el.constructor.prototype;
   var typeProperty = Object.getOwnPropertyDescriptor(inputProto, 'type');
   Object.defineProperty(inputProto, 'type', {
    get: function () {
     return typeProperty.get.call(this);
    },
    set: function (value) {
     typeProperty.set.call(this, value === 'number' ? 'text' : value);
    },
    enumerable: true,
    configurable: true
   });
  }
 }());
 (function checkDocumentReadyState() {
  if (!hasDOM) {
   return;
  }
  if (!document.attachEvent) {
   return;
  }
  var documentProto = document.constructor.prototype;
  var readyStateProto = Object.getOwnPropertyDescriptor(documentProto, 'readyState');
  Object.defineProperty(documentProto, 'readyState', {
   get: function () {
    var value = readyStateProto.get.call(this);
    return value === 'interactive' ? 'loading' : value;
   },
   set: function (value) {
    readyStateProto.set.call(this, value);
   },
   enumerable: true,
   configurable: true
  });
 }());
 (function checkChildNodeRemove() {
  if (!hasDOM) {
   return;
  }
  if (typeof Element.prototype.remove !== 'undefined') {
   return;
  }
  Element.prototype.remove = function () {
   if (this.parentNode) {
    this.parentNode.removeChild(this);
   }
  };
 }());
 (function checkPromise() {
  if (globalScope.Promise) {
   if (typeof globalScope.Promise.all !== 'function') {
    globalScope.Promise.all = function (iterable) {
     var count = 0, results = [], resolve, reject;
     var promise = new globalScope.Promise(function (resolve_, reject_) {
      resolve = resolve_;
      reject = reject_;
     });
     iterable.forEach(function (p, i) {
      count++;
      p.then(function (result) {
       results[i] = result;
       count--;
       if (count === 0) {
        resolve(results);
       }
      }, reject);
     });
     if (count === 0) {
      resolve(results);
     }
     return promise;
    };
   }
   if (typeof globalScope.Promise.resolve !== 'function') {
    globalScope.Promise.resolve = function (value) {
     return new globalScope.Promise(function (resolve) {
      resolve(value);
     });
    };
   }
   if (typeof globalScope.Promise.reject !== 'function') {
    globalScope.Promise.reject = function (reason) {
     return new globalScope.Promise(function (resolve, reject) {
      reject(reason);
     });
    };
   }
   if (typeof globalScope.Promise.prototype.catch !== 'function') {
    globalScope.Promise.prototype.catch = function (onReject) {
     return globalScope.Promise.prototype.then(undefined, onReject);
    };
   }
   return;
  }
  var STATUS_PENDING = 0;
  var STATUS_RESOLVED = 1;
  var STATUS_REJECTED = 2;
  var REJECTION_TIMEOUT = 500;
  var HandlerManager = {
   handlers: [],
   running: false,
   unhandledRejections: [],
   pendingRejectionCheck: false,
   scheduleHandlers: function scheduleHandlers(promise) {
    if (promise._status === STATUS_PENDING) {
     return;
    }
    this.handlers = this.handlers.concat(promise._handlers);
    promise._handlers = [];
    if (this.running) {
     return;
    }
    this.running = true;
    setTimeout(this.runHandlers.bind(this), 0);
   },
   runHandlers: function runHandlers() {
    var RUN_TIMEOUT = 1;
    var timeoutAt = Date.now() + RUN_TIMEOUT;
    while (this.handlers.length > 0) {
     var handler = this.handlers.shift();
     var nextStatus = handler.thisPromise._status;
     var nextValue = handler.thisPromise._value;
     try {
      if (nextStatus === STATUS_RESOLVED) {
       if (typeof handler.onResolve === 'function') {
        nextValue = handler.onResolve(nextValue);
       }
      } else if (typeof handler.onReject === 'function') {
       nextValue = handler.onReject(nextValue);
       nextStatus = STATUS_RESOLVED;
       if (handler.thisPromise._unhandledRejection) {
        this.removeUnhandeledRejection(handler.thisPromise);
       }
      }
     } catch (ex) {
      nextStatus = STATUS_REJECTED;
      nextValue = ex;
     }
     handler.nextPromise._updateStatus(nextStatus, nextValue);
     if (Date.now() >= timeoutAt) {
      break;
     }
    }
    if (this.handlers.length > 0) {
     setTimeout(this.runHandlers.bind(this), 0);
     return;
    }
    this.running = false;
   },
   addUnhandledRejection: function addUnhandledRejection(promise) {
    this.unhandledRejections.push({
     promise: promise,
     time: Date.now()
    });
    this.scheduleRejectionCheck();
   },
   removeUnhandeledRejection: function removeUnhandeledRejection(promise) {
    promise._unhandledRejection = false;
    for (var i = 0; i < this.unhandledRejections.length; i++) {
     if (this.unhandledRejections[i].promise === promise) {
      this.unhandledRejections.splice(i);
      i--;
     }
    }
   },
   scheduleRejectionCheck: function scheduleRejectionCheck() {
    if (this.pendingRejectionCheck) {
     return;
    }
    this.pendingRejectionCheck = true;
    setTimeout(function rejectionCheck() {
     this.pendingRejectionCheck = false;
     var now = Date.now();
     for (var i = 0; i < this.unhandledRejections.length; i++) {
      if (now - this.unhandledRejections[i].time > REJECTION_TIMEOUT) {
       var unhandled = this.unhandledRejections[i].promise._value;
       var msg = 'Unhandled rejection: ' + unhandled;
       if (unhandled.stack) {
        msg += '\n' + unhandled.stack;
       }
       try {
        throw new Error(msg);
       } catch (_) {
        console.warn(msg);
       }
       this.unhandledRejections.splice(i);
       i--;
      }
     }
     if (this.unhandledRejections.length) {
      this.scheduleRejectionCheck();
     }
    }.bind(this), REJECTION_TIMEOUT);
   }
  };
  var Promise = function Promise(resolver) {
   this._status = STATUS_PENDING;
   this._handlers = [];
   try {
    resolver.call(this, this._resolve.bind(this), this._reject.bind(this));
   } catch (e) {
    this._reject(e);
   }
  };
  Promise.all = function Promise_all(promises) {
   var resolveAll, rejectAll;
   var deferred = new Promise(function (resolve, reject) {
    resolveAll = resolve;
    rejectAll = reject;
   });
   var unresolved = promises.length;
   var results = [];
   if (unresolved === 0) {
    resolveAll(results);
    return deferred;
   }
   function reject(reason) {
    if (deferred._status === STATUS_REJECTED) {
     return;
    }
    results = [];
    rejectAll(reason);
   }
   for (var i = 0, ii = promises.length; i < ii; ++i) {
    var promise = promises[i];
    var resolve = function (i) {
     return function (value) {
      if (deferred._status === STATUS_REJECTED) {
       return;
      }
      results[i] = value;
      unresolved--;
      if (unresolved === 0) {
       resolveAll(results);
      }
     };
    }(i);
    if (Promise.isPromise(promise)) {
     promise.then(resolve, reject);
    } else {
     resolve(promise);
    }
   }
   return deferred;
  };
  Promise.isPromise = function Promise_isPromise(value) {
   return value && typeof value.then === 'function';
  };
  Promise.resolve = function Promise_resolve(value) {
   return new Promise(function (resolve) {
    resolve(value);
   });
  };
  Promise.reject = function Promise_reject(reason) {
   return new Promise(function (resolve, reject) {
    reject(reason);
   });
  };
  Promise.prototype = {
   _status: null,
   _value: null,
   _handlers: null,
   _unhandledRejection: null,
   _updateStatus: function Promise__updateStatus(status, value) {
    if (this._status === STATUS_RESOLVED || this._status === STATUS_REJECTED) {
     return;
    }
    if (status === STATUS_RESOLVED && Promise.isPromise(value)) {
     value.then(this._updateStatus.bind(this, STATUS_RESOLVED), this._updateStatus.bind(this, STATUS_REJECTED));
     return;
    }
    this._status = status;
    this._value = value;
    if (status === STATUS_REJECTED && this._handlers.length === 0) {
     this._unhandledRejection = true;
     HandlerManager.addUnhandledRejection(this);
    }
    HandlerManager.scheduleHandlers(this);
   },
   _resolve: function Promise_resolve(value) {
    this._updateStatus(STATUS_RESOLVED, value);
   },
   _reject: function Promise_reject(reason) {
    this._updateStatus(STATUS_REJECTED, reason);
   },
   then: function Promise_then(onResolve, onReject) {
    var nextPromise = new Promise(function (resolve, reject) {
     this.resolve = resolve;
     this.reject = reject;
    });
    this._handlers.push({
     thisPromise: this,
     onResolve: onResolve,
     onReject: onReject,
     nextPromise: nextPromise
    });
    HandlerManager.scheduleHandlers(this);
    return nextPromise;
   },
   catch: function Promise_catch(onReject) {
    return this.then(undefined, onReject);
   }
  };
  globalScope.Promise = Promise;
 }());
 (function checkWeakMap() {
  if (globalScope.WeakMap) {
   return;
  }
  var id = 0;
  function WeakMap() {
   this.id = '$weakmap' + id++;
  }
  WeakMap.prototype = {
   has: function (obj) {
    return !!Object.getOwnPropertyDescriptor(obj, this.id);
   },
   get: function (obj, defaultValue) {
    return this.has(obj) ? obj[this.id] : defaultValue;
   },
   set: function (obj, value) {
    Object.defineProperty(obj, this.id, {
     value: value,
     enumerable: false,
     configurable: true
    });
   },
   delete: function (obj) {
    delete obj[this.id];
   }
  };
  globalScope.WeakMap = WeakMap;
 }());
 (function checkURLConstructor() {
  var hasWorkingUrl = false;
  try {
   if (typeof URL === 'function' && typeof URL.prototype === 'object' && 'origin' in URL.prototype) {
    var u = new URL('b', 'http://a');
    u.pathname = 'c%20d';
    hasWorkingUrl = u.href === 'http://a/c%20d';
   }
  } catch (e) {
  }
  if (hasWorkingUrl) {
   return;
  }
  var relative = Object.create(null);
  relative['ftp'] = 21;
  relative['file'] = 0;
  relative['gopher'] = 70;
  relative['http'] = 80;
  relative['https'] = 443;
  relative['ws'] = 80;
  relative['wss'] = 443;
  var relativePathDotMapping = Object.create(null);
  relativePathDotMapping['%2e'] = '.';
  relativePathDotMapping['.%2e'] = '..';
  relativePathDotMapping['%2e.'] = '..';
  relativePathDotMapping['%2e%2e'] = '..';
  function isRelativeScheme(scheme) {
   return relative[scheme] !== undefined;
  }
  function invalid() {
   clear.call(this);
   this._isInvalid = true;
  }
  function IDNAToASCII(h) {
   if (h === '') {
    invalid.call(this);
   }
   return h.toLowerCase();
  }
  function percentEscape(c) {
   var unicode = c.charCodeAt(0);
   if (unicode > 0x20 && unicode < 0x7F && [
     0x22,
     0x23,
     0x3C,
     0x3E,
     0x3F,
     0x60
    ].indexOf(unicode) === -1) {
    return c;
   }
   return encodeURIComponent(c);
  }
  function percentEscapeQuery(c) {
   var unicode = c.charCodeAt(0);
   if (unicode > 0x20 && unicode < 0x7F && [
     0x22,
     0x23,
     0x3C,
     0x3E,
     0x60
    ].indexOf(unicode) === -1) {
    return c;
   }
   return encodeURIComponent(c);
  }
  var EOF, ALPHA = /[a-zA-Z]/, ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;
  function parse(input, stateOverride, base) {
   function err(message) {
    errors.push(message);
   }
   var state = stateOverride || 'scheme start', cursor = 0, buffer = '', seenAt = false, seenBracket = false, errors = [];
   loop:
    while ((input[cursor - 1] !== EOF || cursor === 0) && !this._isInvalid) {
     var c = input[cursor];
     switch (state) {
     case 'scheme start':
      if (c && ALPHA.test(c)) {
       buffer += c.toLowerCase();
       state = 'scheme';
      } else if (!stateOverride) {
       buffer = '';
       state = 'no scheme';
       continue;
      } else {
       err('Invalid scheme.');
       break loop;
      }
      break;
     case 'scheme':
      if (c && ALPHANUMERIC.test(c)) {
       buffer += c.toLowerCase();
      } else if (c === ':') {
       this._scheme = buffer;
       buffer = '';
       if (stateOverride) {
        break loop;
       }
       if (isRelativeScheme(this._scheme)) {
        this._isRelative = true;
       }
       if (this._scheme === 'file') {
        state = 'relative';
       } else if (this._isRelative && base && base._scheme === this._scheme) {
        state = 'relative or authority';
       } else if (this._isRelative) {
        state = 'authority first slash';
       } else {
        state = 'scheme data';
       }
      } else if (!stateOverride) {
       buffer = '';
       cursor = 0;
       state = 'no scheme';
       continue;
      } else if (EOF === c) {
       break loop;
      } else {
       err('Code point not allowed in scheme: ' + c);
       break loop;
      }
      break;
     case 'scheme data':
      if (c === '?') {
       this._query = '?';
       state = 'query';
      } else if (c === '#') {
       this._fragment = '#';
       state = 'fragment';
      } else {
       if (EOF !== c && '\t' !== c && '\n' !== c && '\r' !== c) {
        this._schemeData += percentEscape(c);
       }
      }
      break;
     case 'no scheme':
      if (!base || !isRelativeScheme(base._scheme)) {
       err('Missing scheme.');
       invalid.call(this);
      } else {
       state = 'relative';
       continue;
      }
      break;
     case 'relative or authority':
      if (c === '/' && input[cursor + 1] === '/') {
       state = 'authority ignore slashes';
      } else {
       err('Expected /, got: ' + c);
       state = 'relative';
       continue;
      }
      break;
     case 'relative':
      this._isRelative = true;
      if ('file' !== this._scheme) {
       this._scheme = base._scheme;
      }
      if (EOF === c) {
       this._host = base._host;
       this._port = base._port;
       this._path = base._path.slice();
       this._query = base._query;
       this._username = base._username;
       this._password = base._password;
       break loop;
      } else if (c === '/' || c === '\\') {
       if (c === '\\') {
        err('\\ is an invalid code point.');
       }
       state = 'relative slash';
      } else if (c === '?') {
       this._host = base._host;
       this._port = base._port;
       this._path = base._path.slice();
       this._query = '?';
       this._username = base._username;
       this._password = base._password;
       state = 'query';
      } else if (c === '#') {
       this._host = base._host;
       this._port = base._port;
       this._path = base._path.slice();
       this._query = base._query;
       this._fragment = '#';
       this._username = base._username;
       this._password = base._password;
       state = 'fragment';
      } else {
       var nextC = input[cursor + 1];
       var nextNextC = input[cursor + 2];
       if ('file' !== this._scheme || !ALPHA.test(c) || nextC !== ':' && nextC !== '|' || EOF !== nextNextC && '/' !== nextNextC && '\\' !== nextNextC && '?' !== nextNextC && '#' !== nextNextC) {
        this._host = base._host;
        this._port = base._port;
        this._username = base._username;
        this._password = base._password;
        this._path = base._path.slice();
        this._path.pop();
       }
       state = 'relative path';
       continue;
      }
      break;
     case 'relative slash':
      if (c === '/' || c === '\\') {
       if (c === '\\') {
        err('\\ is an invalid code point.');
       }
       if (this._scheme === 'file') {
        state = 'file host';
       } else {
        state = 'authority ignore slashes';
       }
      } else {
       if ('file' !== this._scheme) {
        this._host = base._host;
        this._port = base._port;
        this._username = base._username;
        this._password = base._password;
       }
       state = 'relative path';
       continue;
      }
      break;
     case 'authority first slash':
      if (c === '/') {
       state = 'authority second slash';
      } else {
       err('Expected \'/\', got: ' + c);
       state = 'authority ignore slashes';
       continue;
      }
      break;
     case 'authority second slash':
      state = 'authority ignore slashes';
      if ('/' !== c) {
       err('Expected \'/\', got: ' + c);
       continue;
      }
      break;
     case 'authority ignore slashes':
      if ('/' !== c && '\\' !== c) {
       state = 'authority';
       continue;
      } else {
       err('Expected authority, got: ' + c);
      }
      break;
     case 'authority':
      if (c === '@') {
       if (seenAt) {
        err('@ already seen.');
        buffer += '%40';
       }
       seenAt = true;
       for (var i = 0; i < buffer.length; i++) {
        var cp = buffer[i];
        if (cp === '\t' || cp === '\n' || cp === '\r') {
         err('Invalid whitespace in authority.');
         continue;
        }
        if (cp === ':' && this._password === null) {
         this._password = '';
         continue;
        }
        var tempC = percentEscape(cp);
        if (null !== this._password) {
         this._password += tempC;
        } else {
         this._username += tempC;
        }
       }
       buffer = '';
      } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
       cursor -= buffer.length;
       buffer = '';
       state = 'host';
       continue;
      } else {
       buffer += c;
      }
      break;
     case 'file host':
      if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
       if (buffer.length === 2 && ALPHA.test(buffer[0]) && (buffer[1] === ':' || buffer[1] === '|')) {
        state = 'relative path';
       } else if (buffer.length === 0) {
        state = 'relative path start';
       } else {
        this._host = IDNAToASCII.call(this, buffer);
        buffer = '';
        state = 'relative path start';
       }
       continue;
      } else if (c === '\t' || c === '\n' || c === '\r') {
       err('Invalid whitespace in file host.');
      } else {
       buffer += c;
      }
      break;
     case 'host':
     case 'hostname':
      if (c === ':' && !seenBracket) {
       this._host = IDNAToASCII.call(this, buffer);
       buffer = '';
       state = 'port';
       if (stateOverride === 'hostname') {
        break loop;
       }
      } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
       this._host = IDNAToASCII.call(this, buffer);
       buffer = '';
       state = 'relative path start';
       if (stateOverride) {
        break loop;
       }
       continue;
      } else if ('\t' !== c && '\n' !== c && '\r' !== c) {
       if (c === '[') {
        seenBracket = true;
       } else if (c === ']') {
        seenBracket = false;
       }
       buffer += c;
      } else {
       err('Invalid code point in host/hostname: ' + c);
      }
      break;
     case 'port':
      if (/[0-9]/.test(c)) {
       buffer += c;
      } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#' || stateOverride) {
       if ('' !== buffer) {
        var temp = parseInt(buffer, 10);
        if (temp !== relative[this._scheme]) {
         this._port = temp + '';
        }
        buffer = '';
       }
       if (stateOverride) {
        break loop;
       }
       state = 'relative path start';
       continue;
      } else if (c === '\t' || c === '\n' || c === '\r') {
       err('Invalid code point in port: ' + c);
      } else {
       invalid.call(this);
      }
      break;
     case 'relative path start':
      if (c === '\\') {
       err('\'\\\' not allowed in path.');
      }
      state = 'relative path';
      if ('/' !== c && '\\' !== c) {
       continue;
      }
      break;
     case 'relative path':
      if (c === EOF || c === '/' || c === '\\' || !stateOverride && (c === '?' || c === '#')) {
       if (c === '\\') {
        err('\\ not allowed in relative path.');
       }
       var tmp;
       if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
        buffer = tmp;
       }
       if (buffer === '..') {
        this._path.pop();
        if ('/' !== c && '\\' !== c) {
         this._path.push('');
        }
       } else if (buffer === '.' && '/' !== c && '\\' !== c) {
        this._path.push('');
       } else if ('.' !== buffer) {
        if (this._scheme === 'file' && this._path.length === 0 && buffer.length === 2 && ALPHA.test(buffer[0]) && buffer[1] === '|') {
         buffer = buffer[0] + ':';
        }
        this._path.push(buffer);
       }
       buffer = '';
       if (c === '?') {
        this._query = '?';
        state = 'query';
       } else if (c === '#') {
        this._fragment = '#';
        state = 'fragment';
       }
      } else if ('\t' !== c && '\n' !== c && '\r' !== c) {
       buffer += percentEscape(c);
      }
      break;
     case 'query':
      if (!stateOverride && c === '#') {
       this._fragment = '#';
       state = 'fragment';
      } else if (EOF !== c && '\t' !== c && '\n' !== c && '\r' !== c) {
       this._query += percentEscapeQuery(c);
      }
      break;
     case 'fragment':
      if (EOF !== c && '\t' !== c && '\n' !== c && '\r' !== c) {
       this._fragment += c;
      }
      break;
     }
     cursor++;
    }
  }
  function clear() {
   this._scheme = '';
   this._schemeData = '';
   this._username = '';
   this._password = null;
   this._host = '';
   this._port = '';
   this._path = [];
   this._query = '';
   this._fragment = '';
   this._isInvalid = false;
   this._isRelative = false;
  }
  function JURL(url, base) {
   if (base !== undefined && !(base instanceof JURL)) {
    base = new JURL(String(base));
   }
   this._url = url;
   clear.call(this);
   var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
   parse.call(this, input, null, base);
  }
  JURL.prototype = {
   toString: function () {
    return this.href;
   },
   get href() {
    if (this._isInvalid) {
     return this._url;
    }
    var authority = '';
    if ('' !== this._username || null !== this._password) {
     authority = this._username + (null !== this._password ? ':' + this._password : '') + '@';
    }
    return this.protocol + (this._isRelative ? '//' + authority + this.host : '') + this.pathname + this._query + this._fragment;
   },
   set href(href) {
    clear.call(this);
    parse.call(this, href);
   },
   get protocol() {
    return this._scheme + ':';
   },
   set protocol(protocol) {
    if (this._isInvalid) {
     return;
    }
    parse.call(this, protocol + ':', 'scheme start');
   },
   get host() {
    return this._isInvalid ? '' : this._port ? this._host + ':' + this._port : this._host;
   },
   set host(host) {
    if (this._isInvalid || !this._isRelative) {
     return;
    }
    parse.call(this, host, 'host');
   },
   get hostname() {
    return this._host;
   },
   set hostname(hostname) {
    if (this._isInvalid || !this._isRelative) {
     return;
    }
    parse.call(this, hostname, 'hostname');
   },
   get port() {
    return this._port;
   },
   set port(port) {
    if (this._isInvalid || !this._isRelative) {
     return;
    }
    parse.call(this, port, 'port');
   },
   get pathname() {
    return this._isInvalid ? '' : this._isRelative ? '/' + this._path.join('/') : this._schemeData;
   },
   set pathname(pathname) {
    if (this._isInvalid || !this._isRelative) {
     return;
    }
    this._path = [];
    parse.call(this, pathname, 'relative path start');
   },
   get search() {
    return this._isInvalid || !this._query || this._query === '?' ? '' : this._query;
   },
   set search(search) {
    if (this._isInvalid || !this._isRelative) {
     return;
    }
    this._query = '?';
    if (search[0] === '?') {
     search = search.slice(1);
    }
    parse.call(this, search, 'query');
   },
   get hash() {
    return this._isInvalid || !this._fragment || this._fragment === '#' ? '' : this._fragment;
   },
   set hash(hash) {
    if (this._isInvalid) {
     return;
    }
    this._fragment = '#';
    if (hash[0] === '#') {
     hash = hash.slice(1);
    }
    parse.call(this, hash, 'fragment');
   },
   get origin() {
    var host;
    if (this._isInvalid || !this._scheme) {
     return '';
    }
    switch (this._scheme) {
    case 'data':
    case 'file':
    case 'javascript':
    case 'mailto':
     return 'null';
    }
    host = this.host;
    if (!host) {
     return '';
    }
    return this._scheme + '://' + host;
   }
  };
  var OriginalURL = globalScope.URL;
  if (OriginalURL) {
   JURL.createObjectURL = function (blob) {
    return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
   };
   JURL.revokeObjectURL = function (url) {
    OriginalURL.revokeObjectURL(url);
   };
  }
  globalScope.URL = JURL;
 }());
}
/* WEBPACK VAR INJECTION */}.call(exports, __w_pdfjs_require__(6)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";

var pdfjsVersion = '1.7.337';
var pdfjsBuild = '9163a6fb';
var pdfjsSharedUtil = __w_pdfjs_require__(0);
var pdfjsDisplayGlobal = __w_pdfjs_require__(9);
var pdfjsDisplayAPI = __w_pdfjs_require__(3);
var pdfjsDisplayTextLayer = __w_pdfjs_require__(5);
var pdfjsDisplayAnnotationLayer = __w_pdfjs_require__(2);
var pdfjsDisplayDOMUtils = __w_pdfjs_require__(1);
var pdfjsDisplaySVG = __w_pdfjs_require__(4);
exports.PDFJS = pdfjsDisplayGlobal.PDFJS;
exports.build = pdfjsDisplayAPI.build;
exports.version = pdfjsDisplayAPI.version;
exports.getDocument = pdfjsDisplayAPI.getDocument;
exports.PDFDataRangeTransport = pdfjsDisplayAPI.PDFDataRangeTransport;
exports.PDFWorker = pdfjsDisplayAPI.PDFWorker;
exports.renderTextLayer = pdfjsDisplayTextLayer.renderTextLayer;
exports.AnnotationLayer = pdfjsDisplayAnnotationLayer.AnnotationLayer;
exports.CustomStyle = pdfjsDisplayDOMUtils.CustomStyle;
exports.createPromiseCapability = pdfjsSharedUtil.createPromiseCapability;
exports.PasswordResponses = pdfjsSharedUtil.PasswordResponses;
exports.InvalidPDFException = pdfjsSharedUtil.InvalidPDFException;
exports.MissingPDFException = pdfjsSharedUtil.MissingPDFException;
exports.SVGGraphics = pdfjsDisplaySVG.SVGGraphics;
exports.UnexpectedResponseException = pdfjsSharedUtil.UnexpectedResponseException;
exports.OPS = pdfjsSharedUtil.OPS;
exports.UNSUPPORTED_FEATURES = pdfjsSharedUtil.UNSUPPORTED_FEATURES;
exports.isValidUrl = pdfjsDisplayDOMUtils.isValidUrl;
exports.createValidAbsoluteUrl = pdfjsSharedUtil.createValidAbsoluteUrl;
exports.createObjectURL = pdfjsSharedUtil.createObjectURL;
exports.removeNullCharacters = pdfjsSharedUtil.removeNullCharacters;
exports.shadow = pdfjsSharedUtil.shadow;
exports.createBlob = pdfjsSharedUtil.createBlob;
exports.getFilenameFromUrl = pdfjsDisplayDOMUtils.getFilenameFromUrl;
exports.addLinkAttributes = pdfjsDisplayDOMUtils.addLinkAttributes;

/***/ })
/******/ ]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _AppView = __webpack_require__(22);

var _AppView2 = _interopRequireDefault(_AppView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SET youtube API

new _AppView2.default().render("content");

exports.MainBoard = _AppView2.default;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map