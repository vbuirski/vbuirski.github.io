(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemons/pokemons.component */ "./src/app/pokemons/pokemons.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
    { path: 'pokemons', component: _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_2__["PokemonsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Container holding the image and the text */\n.header {\n    position: relative;\n    top: -50%;\n    text-align: center;\n    color: white;\n\n}\n/* Top left text */\n.top-left {\n    position: absolute;\n    top: 50px;\n    left: 50px;\n    font-family: pokemon;\n    font-size: 300%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <img width=100% alt=\"Pokemon Hero Background\" src=\"assets/img/hero-background.jpg\">\n  <div class=\"top-left\">{{ title }}</div>\n</div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Pokemon Gallery';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pokemons/pokemons.component */ "./src/app/pokemons/pokemons.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/index */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pokemons_pokemons_component__WEBPACK_IMPORTED_MODULE_4__["PokemonsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [
                _services_index__WEBPACK_IMPORTED_MODULE_7__["PagerService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model/pokemon.ts":
/*!**********************************!*\
  !*** ./src/app/model/pokemon.ts ***!
  \**********************************/
/*! exports provided: Pokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pokemon", function() { return Pokemon; });
var Pokemon = /** @class */ (function () {
    function Pokemon(url, name) {
        // Capture the last digits of URL as Pokemon ID
        this.idFromUrlPattern = /^.*\/(\d+)\/$/;
        this.url = url;
        this.name = name;
        var parsedValue = url.replace(this.idFromUrlPattern, "$1");
        this.id = parseInt(parsedValue);
    }
    return Pokemon;
}());



/***/ }),

/***/ "./src/app/pokemons/pokemons.component.css":
/*!*************************************************!*\
  !*** ./src/app/pokemons/pokemons.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*PokemonComponent's private CSS styles */\nbody {\n  font-family: Sans-Serif;\n}\na {\n  cursor: pointer;\n  padding: 5px;\n  align-content: center;\n}\nimg {\n  display: block;\n  margin: 0 auto;\n}\n.search-label {\n  color: rgb(143, 79, 79);\n  font-size: 120%;\n}\n.disabled {\n  color: lightgray;\n  cursor: pointer;\n}\n.enabled {\n  color: grey;\n  cursor: pointer;\n\n}\n.active {\n  background-color: grey;\n  color: white;\n  cursor: pointer;\n}\n.pokerow {\n\talign-items: center;\n\ttext-align: center;\n}\n.id {\n  color: rgb(143, 79, 79);\n  text-align: center;\n}\n.pagination {\n  padding-top: 5px;\n  padding-left:10px;\n}\n.row { /* IE10 */\n    display: flex; /* IE10 */\n    flex-wrap: wrap;\n    padding: 0 4px;\n  }\n/* Create four equal columns that sits next to each other */\n.column { /* IE10 */\n    flex: 25%;\n    max-width: 25%;\n    padding: 0 4px;\n  }\n.column img {\n    margin-top: 8px;\n    vertical-align: middle;\n  }\n.centered {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n#search-box {\n    margin-left: 20px;\n    color: rgb(39, 39, 39);\n  }\n/* Responsive layout - makes a two column-layout instead of four columns */\n@media screen and (max-width: 800px) {\n    .column {\n        flex: 50%;\n        max-width: 50%;\n    }\n  }\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n    .column {\n      flex: 100%;\n      max-width: 100%;\n    }\n  }\n "

/***/ }),

/***/ "./src/app/pokemons/pokemons.component.html":
/*!**************************************************!*\
  !*** ./src/app/pokemons/pokemons.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n    <hr>\n    <div class=\"row justify-content-center\">\n        <label class=\"search-label\" for=\"search-box\">Find Your Pokemon!</label>\n        <input #searchBox id=\"search-box\" [(ngModel)]=\"searchText\" (keyup)=\"search(searchBox.value)\" />     \n    </div>\n  \n    <hr>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-6 col-xl-3\" *ngFor=\"let pokemon of pokemons\">\n                <div class=\"container\">\n                    <div class=\"row pokerow\">\n                        <div class=\"col-6 col-md-12 col-xl-12\">\n                            <img src=\"../assets/img/{{pokemon.id}}.png\" />\n                        </div>\n                        <div class=\"id col-6 col-md-12 col-xl-12\">\n                            <div>#{{pokemon.id}}</div>\n                            <div>{{pokemon.name}}</div>\n                        </div>\n                        <div class=\"col-12\">\n                            <br/>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    \n    <!-- pager -->\n    <div class=\"container\">\n        <hr>\n        <div class=\"row justify-content-center\">\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\"> \n                <li [ngClass]=\"{disabled: isFirstPage(), enabled: !isFirstPage()}\">\n                    <a (click)=\"setPage(1)\"> first </a>\n                </li>\n                <li [ngClass]=\"{disabled: isFirstPage(), enabled: !isFirstPage()}\">\n                    <a (click)=\"setPage(pager.currentPage - 1)\"> prev </a>\n                </li>\n                <li *ngFor=\"let page of pager.pages\" \n                    [ngClass]=\"{active: isActive(page), enabled: !isActive(page)}\">\n                    \n                    <a (click)=\"setPage(page)\">{{page}}</a>\n                </li>\n                <li [ngClass]=\"{disabled: isLastPage(), enabled: !isLastPage()}\">\n                    <a (click)=\"setPage(pager.currentPage + 1)\"> next </a>\n                </li>\n                <li [ngClass]=\"{disabled: isLastPage(), enabled: !isLastPage()}\">\n                    <a (click)=\"setPage(pager.totalPages)\"> last </a>\n                </li>\n            </ul>\n        </div>\n        <hr>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/pokemons/pokemons.component.ts":
/*!************************************************!*\
  !*** ./src/app/pokemons/pokemons.component.ts ***!
  \************************************************/
/*! exports provided: PokemonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonsComponent", function() { return PokemonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/index */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PokemonsComponent = /** @class */ (function () {
    function PokemonsComponent(pokemonService, pagerService) {
        this.pokemonService = pokemonService;
        this.pagerService = pagerService;
        // pager object
        this.pager = {};
    }
    PokemonsComponent.prototype.ngOnInit = function () {
        this.searchText = "";
        this.getPokemons();
    };
    PokemonsComponent.prototype.getPokemons = function () {
        var _this = this;
        this.pokemonService.getPokemons()
            .subscribe(function (pokemons) {
            _this.allPokemons = pokemons;
            _this.updateFilteredPokemons();
            _this.setPage(1);
        });
    };
    PokemonsComponent.prototype.updateFilteredPokemons = function () {
        var _this = this;
        this.filteredPokemons =
            this.allPokemons
                .filter(function (pokemon) { return pokemon.name.match(new RegExp(_this.searchText, 'i')); });
        this.updateDisplayedPokemons();
        this.setPage(1);
    };
    PokemonsComponent.prototype.updateDisplayedPokemons = function () {
        this.pokemons = this.filteredPokemons;
    };
    PokemonsComponent.prototype.setPage = function (page) {
        if (page < 1) {
            return;
        }
        this.pager = this.pagerService.getPager(this.filteredPokemons.length, page);
        this.pokemons = this.filteredPokemons.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    PokemonsComponent.prototype.search = function (keyword) {
        this.searchText = keyword;
        this.updateFilteredPokemons();
        this.setPage(1);
    };
    PokemonsComponent.prototype.isFirstPage = function () {
        return this.pager.currentPage === 1;
    };
    PokemonsComponent.prototype.isLastPage = function () {
        return this.pager.currentPage === this.pager.totalPages;
    };
    PokemonsComponent.prototype.isActive = function (page) {
        return this.pager.currentPage === page;
    };
    PokemonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pokemons',
            template: __webpack_require__(/*! ./pokemons.component.html */ "./src/app/pokemons/pokemons.component.html"),
            styles: [__webpack_require__(/*! ./pokemons.component.css */ "./src/app/pokemons/pokemons.component.css")]
        }),
        __metadata("design:paramtypes", [_services_pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["PagerService"]])
    ], PokemonsComponent);
    return PokemonsComponent;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pager.service */ "./src/app/services/pager.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return _pager_service__WEBPACK_IMPORTED_MODULE_0__["PagerService"]; });




/***/ }),

/***/ "./src/app/services/pager.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/pager.service.ts ***!
  \*******************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 5) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            }
            else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            }
            else {
                if ((totalPages - (currentPage - 2)) === 5) {
                    startPage = currentPage - 1;
                    endPage = currentPage + 3;
                }
                else {
                    startPage = currentPage - 2;
                    endPage = currentPage + 2;
                }
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());



/***/ }),

/***/ "./src/app/services/pokemon.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/pokemon.service.ts ***!
  \*********************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_pokemon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/pokemon */ "./src/app/model/pokemon.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PokemonService = /** @class */ (function () {
    function PokemonService(http) {
        this.http = http;
        this.pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    }
    /** GET pokemons from the server */
    PokemonService.prototype.getPokemons = function () {
        var convertToPokemonArray = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
            var objList = value['results'];
            var pokemons = objList.map(function (pokemon, index) {
                return new _model_pokemon__WEBPACK_IMPORTED_MODULE_4__["Pokemon"](pokemon.url, pokemon.name);
            });
            return pokemons.slice(0, 151);
        });
        return convertToPokemonArray(this.http.get(this.pokemonsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPokemons', []))));
    };
    /** GET hero by id. Return `undefined` when id not found */
    PokemonService.prototype.getPokemonsNo404 = function (id) {
        var url = this.pokemonsUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (pokemons) { return pokemons[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getPokemon id=" + id)));
    };
    /** GET pokemon by id. Will 404 if id not found */
    PokemonService.prototype.getPokemon = function (id) {
        var url = this.pokemonsUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getPokemon id=" + id)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    PokemonService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(operation + ': ' + error); // log to console
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    PokemonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PokemonService);
    return PokemonService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vbuirski/Documents/angular/angular-pokemon-gallery/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map