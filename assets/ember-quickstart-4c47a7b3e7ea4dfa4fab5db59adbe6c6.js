"use strict";define("ember-quickstart/app",["exports","ember","ember-quickstart/resolver","ember-load-initializers","ember-quickstart/config/environment"],function(e,t,r,n,a){var i=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,i=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:r.default}),(0,n.default)(i,a.default.modulePrefix),e.default=i}),define("ember-quickstart/components/app-version",["exports","ember-cli-app-version/components/app-version","ember-quickstart/config/environment"],function(e,t,r){var n=r.default.APP.name,a=r.default.APP.version;e.default=t.default.extend({version:a,name:n})}),define("ember-quickstart/components/people-list",["exports","ember"],function(e,t){e.default=t.default.Component.extend({})}),define("ember-quickstart/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("ember-quickstart/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("ember-quickstart/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-quickstart/config/environment"],function(e,t,r){e.default={name:"App Version",initialize:(0,t.default)(r.default.APP.name,r.default.APP.version)}}),define("ember-quickstart/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-quickstart/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("ember-quickstart/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,r){e.default={name:"ember-data",initialize:t.default}}),define("ember-quickstart/initializers/export-application-global",["exports","ember","ember-quickstart/config/environment"],function(e,t,r){function n(){var e=arguments[1]||arguments[0];if(r.default.exportApplicationGlobal!==!1){var n,a=r.default.exportApplicationGlobal;n="string"==typeof a?a:t.default.String.classify(r.default.modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("ember-quickstart/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("ember-quickstart/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("ember-quickstart/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("ember-quickstart/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("ember-quickstart/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("ember-quickstart/router",["exports","ember","ember-quickstart/config/environment"],function(e,t,r){var n=t.default.Router.extend({location:"hash",baseURL:"/ember-quickstart"});n.map(function(){this.route("scientists"),this.route("programmers")}),e.default=n}),define("ember-quickstart/routes/programmers",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return["Programmer 1","Programmer 2","Programmer 3"]}})}),define("ember-quickstart/routes/scientists",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return["Marie Curie","Mae Jemison","Albert Hofmann"]}})}),define("ember-quickstart/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-quickstart/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.6.2",loc:{source:null,start:{line:1,column:0},end:{line:3,column:10}},moduleName:"ember-quickstart/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("h2"),n=e.createTextNode("PeopleTracker");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createComment("");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,2,2,r),e.insertBoundary(t,null),n},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("ember-quickstart/templates/components/people-list",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.6.2",loc:{source:null,start:{line:4,column:2},end:{line:6,column:2}},moduleName:"ember-quickstart/templates/components/people-list.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("    ");e.appendChild(t,r);var r=e.createElement("li"),n=e.createComment("");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[1]),0,0),n},statements:[["content","person",["loc",[null,[5,8],[5,18]]]]],locals:["person"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.6.2",loc:{source:null,start:{line:1,column:0},end:{line:9,column:0}},moduleName:"ember-quickstart/templates/components/people-list.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("h2"),n=e.createComment("");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("ul"),n=e.createTextNode("\n");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(3);return n[0]=e.createMorphAt(e.childAt(t,[0]),0,0),n[1]=e.createMorphAt(e.childAt(t,[2]),1,1),n[2]=e.createMorphAt(t,4,4,r),n},statements:[["content","title",["loc",[null,[1,4],[1,13]]]],["block","each",[["get","people",["loc",[null,[4,10],[4,16]]]]],[],0,null,["loc",[null,[4,2],[6,11]]]],["content","yield",["loc",[null,[8,0],[8,9]]]]],locals:[],templates:[e]}}())}),define("ember-quickstart/templates/programmers",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.6.2",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"ember-quickstart/templates/programmers.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(2);return n[0]=e.createMorphAt(t,0,0,r),n[1]=e.createMorphAt(t,2,2,r),e.insertBoundary(t,0),n},statements:[["inline","people-list",[],["title","List of Programmers","people",["subexpr","@mut",[["get","model",["loc",[null,[1,49],[1,54]]]]],[],[]]],["loc",[null,[1,0],[1,56]]]],["content","outlet",["loc",[null,[2,0],[2,10]]]]],locals:[],templates:[]}}())}),define("ember-quickstart/templates/scientists",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.6.2",loc:{source:null,start:{line:1,column:0},end:{line:3,column:0}},moduleName:"ember-quickstart/templates/scientists.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(2);return n[0]=e.createMorphAt(t,0,0,r),n[1]=e.createMorphAt(t,2,2,r),e.insertBoundary(t,0),n},statements:[["inline","people-list",[],["title","List of Scientists","people",["subexpr","@mut",[["get","model",["loc",[null,[1,48],[1,53]]]]],[],[]]],["loc",[null,[1,0],[1,55]]]],["content","outlet",["loc",[null,[2,0],[2,10]]]]],locals:[],templates:[]}}())}),define("ember-quickstart/config/environment",["ember"],function(e){var t="ember-quickstart";try{var r=t+"/config/environment",n=e.default.$('meta[name="'+r+'"]').attr("content"),a=JSON.parse(unescape(n));return{default:a}}catch(e){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("ember-quickstart/app").default.create({name:"ember-quickstart",version:"0.0.0+69d25e1c"});