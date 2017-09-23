webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pet-shop/pet-shop.module": [
		"../../../../../src/app/pet-shop/pet-shop.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http_testing__ = __webpack_require__("../../../http/@angular/http/testing.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mocks_mock_products_api_service__ = __webpack_require__("../../../../../src/app/mocks/mock-products-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mocks_mock_pets_api_service__ = __webpack_require__("../../../../../src/app/mocks/mock-pets-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pet_shop_pet_shop_module__ = __webpack_require__("../../../../../src/app/pet-shop/pet-shop.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_config__ = __webpack_require__("../../../../../src/app/router.config.ts");
/* unused harmony export HttpFactoryDev */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










function HttpFactoryDev(backend, options) {
    return new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */](backend, options);
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
        ],
        imports: [
            // BrowserModule,
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__pet_shop_pet_shop_module__["PetShopModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__router_config__["a" /* routeConfig */])
        ],
        providers: [
            // Mock Backend
            __WEBPACK_IMPORTED_MODULE_5__mocks_mock_products_api_service__["a" /* MockProductsAPI */],
            __WEBPACK_IMPORTED_MODULE_6__mocks_mock_pets_api_service__["a" /* MockPetsAPI */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http_testing__["a" /* MockBackend */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* BaseRequestOptions */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http_testing__["a" /* MockBackend */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* BaseRequestOptions */]],
                useFactory: HttpFactoryDev
            },
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/mocks/mock-pets-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http_testing__ = __webpack_require__("../../../http/@angular/http/testing.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockPetsAPI; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



const listOfPets = () => {
    return [
        {
            name: 'Dog',
            isVegetarian: false,
        },
        {
            name: 'Cat',
            isVegetarian: false,
        },
        {
            name: 'Snack',
            isVegetarian: false,
        },
        {
            name: 'Hedgehog',
            isVegetarian: true,
        },
        {
            name: 'Parrot',
            isVegetarian: true,
        },
        {
            name: 'Fish',
            isVegetarian: true,
        },
        {
            name: 'Iguana',
            isVegetarian: true,
        },
        {
            name: 'Lizard',
            isVegetarian: true,
        }
    ];
};
let MockPetsAPI = class MockPetsAPI {
    constructor(backend) {
        this.backend = backend;
    }
    handleRequest() {
        this.backend.connections.subscribe((connection) => {
            const req = connection.request;
            const baseUrl = `/pets/`;
            // Get pets
            if (req.method === __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Get && new RegExp(`${baseUrl}`).test(req.url)) {
                setTimeout(() => {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* ResponseOptions */]({
                        body: listOfPets()
                    })));
                }, 500);
            }
        });
    }
};
MockPetsAPI = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http_testing__["a" /* MockBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http_testing__["a" /* MockBackend */]) === "function" && _a || Object])
], MockPetsAPI);

var _a;
//# sourceMappingURL=mock-pets-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/mocks/mock-products-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http_testing__ = __webpack_require__("../../../http/@angular/http/testing.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockProductsAPI; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



const listOfProducts = () => {
    return [
        {
            name: 'Bonzo',
            price: 10,
            pets: ['Dog'],
            imageUrl: "http://www.askmumu.com/cmsfiles/products_06/bonzo.jpg",
        },
        {
            name: 'Instinct Chicken',
            price: 14.7,
            pets: ['Dog', 'Cat'],
            imageUrl: "https://www.naturalinstinct.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/n/a/natural_instinct_natural_dog_food_chicken_1kg.png"
        },
        {
            name: 'Kiki Sunflower',
            price: 3.5,
            pets: ['Cat', 'Parrot'],
            imageUrl: "https://nz.miscota.com/media/1/photos/products/049478/49478-mta311-kiki-pipas-girasol-extra-gruesas-500gr_1_g.jpg"
        },
        {
            name: 'Red Green Granulat',
            price: 7.5,
            pets: ['Fish'],
            imageUrl: "https://pbs.twimg.com/media/CjH3p4_XIAE_6H6.jpg"
        },
        {
            name: 'Calcium Exo',
            price: 12,
            pets: ['Snack', 'Lizard', 'Cat', 'Dog'],
            imageUrl: "http://www.drsfostersmith.com/images/Categoryimages/normal/p-73503-91346R_006.jpg"
        },
        {
            name: 'Grested Exo Terra',
            price: 11,
            pets: ['Iguana', 'Lizard'],
            imageUrl: "http://www.exo-terra.com/download/high_res/products/images/MOCK-UP_Crested%20Gecko-Food_NA_PT3260.jpg"
        },
        {
            name: 'Ultra Blend Select',
            price: 8.99,
            pets: ['Hedgehog'],
            imageUrl: "https://pv-web-01t.s3.amazonaws.com/images/50298.jpg"
        }
    ];
};
let MockProductsAPI = class MockProductsAPI {
    constructor(backend) {
        this.backend = backend;
    }
    handleRequest() {
        this.backend.connections.subscribe((connection) => {
            const req = connection.request;
            const baseUrl = `/products/`;
            // Get products for 'products view'
            if (req.method === __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get && new RegExp(`${baseUrl}`).test(req.url)) {
                setTimeout(() => {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* ResponseOptions */]({
                        body: listOfProducts()
                    })));
                }, 500);
            }
        });
    }
};
MockProductsAPI = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http_testing__["a" /* MockBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http_testing__["a" /* MockBackend */]) === "function" && _a || Object])
], MockProductsAPI);

var _a;
//# sourceMappingURL=mock-products-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/add-to-card-dialog/add-to-card-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-to-card-dialog\">\n  <div md-dialog-content>\n    <section class=\"mat-typography\">\n      <p>Do you really want to add <span class=\"add-to-card-dialog__name\">{{data.name}}</span> to cart?</p>\n    </section>\n\n    <md-form-field>\n      <input mdInput placeholder=\"Count\" class=\"add-to-card-dialog__input\" tabindex=\"1\" [(ngModel)]=\"data.count\">\n    </md-form-field>\n  </div>\n  <div md-dialog-actions class=\"add-to-card-dialog__actions\">\n    <button md-raised-button [md-dialog-close]=\"data.count\" tabindex=\"2\">Ok</button>\n    <button md-raised-button color=\"primary\" (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pet-shop/add-to-card-dialog/add-to-card-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-to-card-dialog__name {\n  font-weight: 700; }\n\n.add-to-card-dialog__actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.add-to-card-dialog__input {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet-shop/add-to-card-dialog/add-to-card-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToCardDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let AddToCardDialogComponent = class AddToCardDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
AddToCardDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-add-to-card-dialog',
        template: __webpack_require__("../../../../../src/app/pet-shop/add-to-card-dialog/add-to-card-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pet-shop/add-to-card-dialog/add-to-card-dialog.component.scss")]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */]) === "function" && _a || Object, Object])
], AddToCardDialogComponent);

var _a;
//# sourceMappingURL=add-to-card-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/models/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Product {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Product;

//# sourceMappingURL=product.model.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/models/productExtended.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_model__ = __webpack_require__("../../../../../src/app/pet-shop/models/product.model.ts");

class ProductExtended extends __WEBPACK_IMPORTED_MODULE_0__product_model__["a" /* Product */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductExtended;

//# sourceMappingURL=productExtended.model.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/pet-list-filter/pet-list-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pet-list-filter\">\n  <div class=\"pet-list-filter__filter\">\n    <div class=\"pet-list-filter__filter-select\">\n      <md-select placeholder=\"Pet\" [(ngModel)]=\"selectedPet\" (ngModelChange)=\"selectPet()\">\n        <md-option\n          *ngFor=\"let pet of pets | vegetarianFilter:isVegetarianOnly\"\n          [value]=\"pet\"\n          >\n          {{ pet.name }}\n        </md-option>\n      </md-select>\n    </div>\n    <div class=\"pet-list-filter__filter-toggle-wrapper\">\n      <span class=\"pet-list-filter__filter-toggle-label\">All</span>\n      <div class=\"pet-list-filter__filter-toggler\">\n        <md-slide-toggle\n          [(ngModel)]=\"isVegetarianOnly\"\n          (ngModelChange)=\"vegetarianToggled()\"\n        >\n        </md-slide-toggle>\n      </div>\n\n      <span class=\"pet-list-filter__filter-toggle-label\">Vegetarian only</span>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pet-shop/pet-list-filter/pet-list-filter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pet-list-filter__filter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.pet-list-filter__filter-select {\n  padding: 10px 10px; }\n\n.pet-list-filter__filter-toggle-wrapper {\n  padding: 26px 10px 10px 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.pet-list-filter__filter-toggle-label {\n  padding: 10px 10px; }\n\n.pet-list-filter__filter-toggler {\n  margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet-shop/pet-list-filter/pet-list-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vegetarian_filter_pipe__ = __webpack_require__("../../../../../src/app/pet-shop/pet-list-filter/vegetarian-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__("../../../../../src/app/pet-shop/services/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetListFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PetListFilterComponent = class PetListFilterComponent {
    constructor(vegetarianFilterPipe, storageService) {
        this.vegetarianFilterPipe = vegetarianFilterPipe;
        this.storageService = storageService;
        this.onPetsChosen = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* EventEmitter */]();
        this.isVegetarianOnly = false;
    }
    ngOnInit() {
        this.storageService.getPetsObservable().subscribe((pets) => {
            this.pets = pets;
        });
    }
    selectPet() {
        this.onPetsChosen.emit([this.selectedPet]);
    }
    vegetarianToggled() {
        if (this.selectedPet) {
            if (this.isVegetarianOnly && !this.selectedPet.isVegetarian) {
                this.selectedPet = null;
                this.updatePets();
            }
        }
        else {
            this.updatePets();
        }
    }
    updatePets() {
        const newPets = this.vegetarianFilterPipe.transform(this.pets, this.isVegetarianOnly);
        this.onPetsChosen.emit(newPets);
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Output */])(),
    __metadata("design:type", Object)
], PetListFilterComponent.prototype, "onPetsChosen", void 0);
PetListFilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-pet-list-filter',
        template: __webpack_require__("../../../../../src/app/pet-shop/pet-list-filter/pet-list-filter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pet-shop/pet-list-filter/pet-list-filter.component.scss")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__vegetarian_filter_pipe__["a" /* VegetarianFilterPipe */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vegetarian_filter_pipe__["a" /* VegetarianFilterPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vegetarian_filter_pipe__["a" /* VegetarianFilterPipe */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], PetListFilterComponent);

var _a, _b;
//# sourceMappingURL=pet-list-filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/pet-list-filter/vegetarian-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VegetarianFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let VegetarianFilterPipe = class VegetarianFilterPipe {
    transform(pets, args) {
        return !args ? pets : pets.filter(pet => pet.isVegetarian);
    }
};
VegetarianFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
        name: 'vegetarianFilter'
    })
], VegetarianFilterPipe);

//# sourceMappingURL=vegetarian-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/pet-shop.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/pet-shop/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_card_product_card_component__ = __webpack_require__("../../../../../src/app/pet-shop/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/pet-shop/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_header_header_component__ = __webpack_require__("../../../../../src/app/pet-shop/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pet_shop_pet_shop_component__ = __webpack_require__("../../../../../src/app/pet-shop/pet-shop/pet-shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router_config__ = __webpack_require__("../../../../../src/app/pet-shop/router.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_page_heading_page_heading_component__ = __webpack_require__("../../../../../src/app/pet-shop/shared/page-heading/page-heading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pet_list_filter_pet_list_filter_component__ = __webpack_require__("../../../../../src/app/pet-shop/pet-list-filter/pet-list-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pet_list_filter_vegetarian_filter_pipe__ = __webpack_require__("../../../../../src/app/pet-shop/pet-list-filter/vegetarian-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__product_list_product_by_pet_pipe__ = __webpack_require__("../../../../../src/app/pet-shop/product-list/product-by-pet.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_to_card_dialog_add_to_card_dialog_component__ = __webpack_require__("../../../../../src/app/pet-shop/add-to-card-dialog/add-to-card-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_pets_api_service__ = __webpack_require__("../../../../../src/app/pet-shop/services/pets-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_storage_service__ = __webpack_require__("../../../../../src/app/pet-shop/services/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetShopModule", function() { return PetShopModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















let PetShopModule = class PetShopModule {
};
PetShopModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__router_config__["a" /* routeConfig */]),
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MdSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["j" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MdTableModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_3__product_card_product_card_component__["a" /* ProductCardComponent */],
            __WEBPACK_IMPORTED_MODULE_4__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
            __WEBPACK_IMPORTED_MODULE_5__shared_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pet_shop_pet_shop_component__["a" /* PetShopComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shared_page_heading_page_heading_component__["a" /* PageHeadingComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pet_list_filter_pet_list_filter_component__["a" /* PetListFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pet_list_filter_vegetarian_filter_pipe__["a" /* VegetarianFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_14__product_list_product_by_pet_pipe__["a" /* ProductByPetPipe */],
            __WEBPACK_IMPORTED_MODULE_15__add_to_card_dialog_add_to_card_dialog_component__["a" /* AddToCardDialogComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__pet_shop_pet_shop_component__["a" /* PetShopComponent */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__add_to_card_dialog_add_to_card_dialog_component__["a" /* AddToCardDialogComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__services_pets_api_service__["a" /* PetsApiService */],
            __WEBPACK_IMPORTED_MODULE_17__services_storage_service__["a" /* StorageService */]
        ]
    })
], PetShopModule);

//# sourceMappingURL=pet-shop.module.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/pet-shop/pet-shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pet-shop\">\n  <div class=\"pet-shop__container\">\n\n    <div class=\"pet-shop__header\">\n      <app-header></app-header>\n    </div>\n\n    <div class=\"pet-shop__content mat-elevation-z4\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pet-shop/pet-shop/pet-shop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pet-shop {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .pet-shop__container {\n    max-width: 1200px;\n    width: 100%;\n    padding: 0 20px 20px 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .pet-shop__content {\n    background: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet-shop/pet-shop/pet-shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/pet-shop/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__("../../../../../src/app/pet-shop/services/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetShopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PetShopComponent = class PetShopComponent {
    constructor() { }
    ngOnInit() {
    }
};
PetShopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-pet-shop',
        template: __webpack_require__("../../../../../src/app/pet-shop/pet-shop/pet-shop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pet-shop/pet-shop/pet-shop.component.scss")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */]
        ]
    }),
    __metadata("design:paramtypes", [])
], PetShopComponent);

//# sourceMappingURL=pet-shop.component.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"product-card\" *ngIf=\"allDataFetched\">\n  <app-page-heading [heading]=\"'Product card'\"> </app-page-heading>\n\n  <div class=\"product-card__card\">\n    <div class=\"product-card__image-wrapper\">\n      <img md-card-image class=\"product-card__image\" [src]=\"product.imageUrl\" [alt]=\"product.name\">\n    </div>\n    <div class=\"product-card__card-description\">\n      <div class=\"product-card__card-name mat-headline\">{{product.name}}</div>\n      <div class=\"mat-subheading-2\">\n        For\n        <span *ngFor=\"let pet of product.pets; last as isLast\">{{pet}}{{isLast ? '' : ', '}}</span>\n      </div>\n      <div class=\"mat-subheading-2\">\n        Price: ${{product.price}}\n      </div>\n      <div class=\"mat-subheading-2\">\n        Vegetarian:\n        <span *ngIf=\"product.isForVegetarians\">Yes</span>\n        <span *ngIf=\"!product.isForVegetarians\">No</span>\n      </div>\n\n      <div class=\"product-card__actions\">\n        <button md-raised-button color=\"primary\" (click)=\"addToCart()\">Add to Cart</button>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pet-shop/product-card/product-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-card__card {\n  padding: 0 20px 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.product-card__image {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  margin-top: 0 !important; }\n\n.product-card__card-description {\n  padding: 20px; }\n\n.product-card__image-wrapper {\n  height: 400px;\n  margin-bottom: 25px; }\n\n.product-card__image {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto; }\n\n.product-card__actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet-shop/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_to_card_dialog_add_to_card_dialog_component__ = __webpack_require__("../../../../../src/app/pet-shop/add-to-card-dialog/add-to-card-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/pet-shop/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_storage_service__ = __webpack_require__("../../../../../src/app/pet-shop/services/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let ProductCardComponent = class ProductCardComponent {
    constructor(dialog, route, shoppingCartService, storageService) {
        this.dialog = dialog;
        this.route = route;
        this.shoppingCartService = shoppingCartService;
        this.storageService = storageService;
        this.allDataFetched = false;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const name = params['name'];
            this.loadProducts(name);
        });
    }
    addToCart() {
        const dialogParams = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MdDialogConfig */]();
        dialogParams.width = '250px';
        dialogParams.data = {
            name: this.product.name,
            count: 1
        };
        this.openDialog(dialogParams);
    }
    openDialog(dialogParams) {
        const dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__add_to_card_dialog_add_to_card_dialog_component__["a" /* AddToCardDialogComponent */], dialogParams);
        dialogRef.afterClosed().subscribe(count => {
            if (!count) {
                return;
            }
            this.shoppingCartService.addToCart({ product: this.product, count: count });
        });
    }
    loadProducts(name) {
        this.storageService.getProductsObservable().subscribe((products) => {
            this.product = products.find(product => product.name === name);
            this.allDataFetched = true;
        });
    }
};
ProductCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-product-card',
        template: __webpack_require__("../../../../../src/app/pet-shop/product-card/product-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pet-shop/product-card/product-card.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_storage_service__["a" /* StorageService */]) === "function" && _d || Object])
], ProductCardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=product-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/product-list/product-by-pet.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductByPetPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ProductByPetPipe = class ProductByPetPipe {
    transform(products, args) {
        return !args || !args.length ? products : products.filter(product => this.isProductForPet(product, args));
    }
    isProductForPet(product, pets) {
        return product.pets.some(petName => pets.some(pet => pet.name === petName));
    }
};
ProductByPetPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
        name: 'productByPet'
    })
], ProductByPetPipe);

//# sourceMappingURL=product-by-pet.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"product-list\">\n  <app-page-heading [heading]=\"'Products'\"> </app-page-heading>\n\n  <div class=\"product-list__filter\">\n    <app-pet-list-filter (onPetsChosen)=\"onPetsChosen($event)\"></app-pet-list-filter>\n  </div>\n\n  <md-nav-list class=\"product-list__list\">\n    <a md-list-item class=\"product-list__list-item\" *ngFor=\"let product of products | productByPet:chosenPets\" [routerLink]=\"['/product/', product.name]\">\n      <img mdListAvatar [src]=\"product.imageUrl\" alt=\"{{product}}\">\n      <h4 md-line>{{product.name}}</h4>\n      <p md-line>\n        <span *ngFor=\"let pet of product.pets; last as isLast\">{{pet}}{{isLast ? '' : ', '}}</span>\n      </p>\n      <p class=\"product-list__list-item-price\">\n        <span>${{product.price}}</span>\n      </p>\n    </a>\n  </md-nav-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pet-shop/product-list/product-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-list__list-item-price {\n  position: absolute;\n  right: 20px;\n  top: 0;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0;\n  margin: 0; }\n\n.product-list__list-item {\n  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet-shop/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_storage_service__ = __webpack_require__("../../../../../src/app/pet-shop/services/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ProductListComponent = class ProductListComponent {
    constructor(storageService) {
        this.storageService = storageService;
    }
    ngOnInit() {
        this.storageService.getProductsObservable().subscribe((products) => {
            this.products = products;
        });
    }
    onPetsChosen(pets) {
        this.chosenPets = pets;
    }
};
ProductListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/pet-shop/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pet-shop/product-list/product-list.component.scss")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_storage_service__["a" /* StorageService */]) === "function" && _a || Object])
], ProductListComponent);

var _a;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/router.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_card_product_card_component__ = __webpack_require__("../../../../../src/app/pet-shop/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shopping_cart_shopping_cart_component__ = __webpack_require__("../../../../../src/app/pet-shop/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/pet-shop/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pet_shop_pet_shop_component__ = __webpack_require__("../../../../../src/app/pet-shop/pet-shop/pet-shop.component.ts");




const routeConfig = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__pet_shop_pet_shop_component__["a" /* PetShopComponent */],
        children: [
            {
                path: '',
                redirectTo: 'product-list',
                pathMatch: 'prefix'
            },
            {
                path: 'product-list',
                component: __WEBPACK_IMPORTED_MODULE_2__product_list_product_list_component__["a" /* ProductListComponent */]
            },
            {
                path: 'product/:name',
                component: __WEBPACK_IMPORTED_MODULE_0__product_card_product_card_component__["a" /* ProductCardComponent */]
            },
            {
                path: 'cart',
                component: __WEBPACK_IMPORTED_MODULE_1__shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */]
            },
            {
                path: 'product',
                redirectTo: 'product-list',
                pathMatch: 'prefix'
            }
        ]
    }
];
/* harmony export (immutable) */ __webpack_exports__["a"] = routeConfig;

//# sourceMappingURL=router.config.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/services/pets-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_mock_pets_api_service__ = __webpack_require__("../../../../../src/app/mocks/mock-pets-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mocks_mock_products_api_service__ = __webpack_require__("../../../../../src/app/mocks/mock-products-api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetsApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let PetsApiService = class PetsApiService {
    constructor(http, mockPetsAPI, mockProductsAPI) {
        this.http = http;
        this.mockPetsAPI = mockPetsAPI;
        this.mockProductsAPI = mockProductsAPI;
        this.mockPetsAPI.handleRequest(); // Execute the mock
        this.mockProductsAPI.handleRequest(); // Execute the mock
    }
    // Get an observable of pets
    getPets() {
        return this.http.get(this.getPetsUrl).map((response) => {
            const petsList = response.json();
            return petsList;
        });
    }
    // Get an observable of pets
    getProducts() {
        return this.http.get(this.getProductsUrl).map((response) => {
            const productsList = response.json();
            return productsList;
        });
    }
    get getPetsUrl() {
        return `/pets/`;
    }
    get getProductsUrl() {
        return `/products/`;
    }
};
PetsApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__mocks_mock_pets_api_service__["a" /* MockPetsAPI */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mocks_mock_pets_api_service__["a" /* MockPetsAPI */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__mocks_mock_products_api_service__["a" /* MockProductsAPI */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__mocks_mock_products_api_service__["a" /* MockProductsAPI */]) === "function" && _c || Object])
], PetsApiService);

var _a, _b, _c;
//# sourceMappingURL=pets-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/services/shopping-cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class ShoppingCartMessage {
}
/* unused harmony export ShoppingCartMessage */

let ShoppingCartService = class ShoppingCartService {
    constructor() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.cart = [];
    }
    getObservable() {
        return this.subject;
    }
    addToCart(message) {
        this.cart.push(message);
        this.sendMessage(message);
    }
    getCart() {
        return this.cart;
    }
    sendMessage(message) {
        this.subject.next(message);
    }
};
ShoppingCartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ShoppingCartService);

//# sourceMappingURL=shopping-cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_productExtended_model__ = __webpack_require__("../../../../../src/app/pet-shop/models/productExtended.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pets_api_service__ = __webpack_require__("../../../../../src/app/pet-shop/services/pets-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let StorageService = class StorageService {
    constructor(petsApiService) {
        this.petsApiService = petsApiService;
        this.products = [];
        this.pets = [];
        this.productsObservable = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.petsObservable = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]
            .forkJoin(this.petsApiService.getProducts(), this.petsApiService.getPets())
            .subscribe((results) => {
            /**
             * I wanted to use this code,
             * this.setData(...results);
             * but sometimes it throws ERROR
             * `ERROR in .../src/app/pet-shop/services/storage.service.ts (29,9): Supplied parameters do not match any signature of call target.
             */
            this.setData(results[0], results[1]);
        });
    }
    getProductsObservable() {
        return this.products.length ? __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.products) : this.productsObservable;
    }
    getPetsObservable() {
        return this.pets.length ? __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.pets) : this.petsObservable;
    }
    setData(products, pets) {
        this.pets = pets;
        this.products = products.map(product => {
            const extendedProduct = new __WEBPACK_IMPORTED_MODULE_1__models_productExtended_model__["a" /* ProductExtended */]();
            Object.assign(extendedProduct, product);
            extendedProduct.isForVegetarians = product.pets.every(this.isPetVegetarian.bind(this));
            return extendedProduct;
        });
        this.productsObservable.next(this.products);
        this.petsObservable.next(this.pets);
    }
    isPetVegetarian(petName) {
        const foundedPet = this.pets.find(pet => pet.name === petName);
        return foundedPet.isVegetarian;
    }
};
StorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__pets_api_service__["a" /* PetsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pets_api_service__["a" /* PetsApiService */]) === "function" && _a || Object])
], StorageService);

var _a;
//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <md-toolbar color=\"primary\">\n    <a class=\"header__logo\" >\n      <span>Pet shop</span>\n    </a>\n    <!--<a md-button routerLink=\"/pet-shop/product-list\">Product list</a>-->\n    <a md-button routerLink=\"/product-list\">Product list</a>\n\n    <span class=\"header__spacer\"></span>\n\n    <a md-button class=\"header__cart-button\" routerLink=\"/cart\">\n      <span class=\"header__cart-button-content\">\n\n        <md-icon class=\"md-24\" aria-label=\"Example icon-button with a heart icon\">add_shopping_cart</md-icon>\n        <span class=\"header__button-text\">{{count}} Items</span>\n      </span>\n    </a>\n  </md-toolbar>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pet-shop/shared/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header__spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.header__icon {\n  padding: 0 14px; }\n\n.header__logo {\n  font-size: 24px;\n  color: #fff;\n  text-decoration: none;\n  padding: 0 20px; }\n\n.header__cart-button-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 70px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet-shop/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/pet-shop/services/shopping-cart.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let HeaderComponent = class HeaderComponent {
    constructor(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.count = 0;
    }
    ngOnInit() {
        this.shoppingCartService.getObservable().subscribe((res) => {
            this.count++;
        });
    }
};
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/pet-shop/shared/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pet-shop/shared/header/header.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/shared/page-heading/page-heading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-heading\">\n  <h4 class=\"page-heading__heading mat-headline\">{{heading}}</h4>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pet-shop/shared/page-heading/page-heading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-heading {\n  padding: 20px; }\n  .page-heading__heading {\n    margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet-shop/shared/page-heading/page-heading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PageHeadingComponent = class PageHeadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], PageHeadingComponent.prototype, "heading", void 0);
PageHeadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-page-heading',
        template: __webpack_require__("../../../../../src/app/pet-shop/shared/page-heading/page-heading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pet-shop/shared/page-heading/page-heading.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PageHeadingComponent);

//# sourceMappingURL=page-heading.component.js.map

/***/ }),

/***/ "../../../../../src/app/pet-shop/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shopping-cart\">\n  <app-page-heading [heading]=\"'Shopping cart'\"> </app-page-heading>\n\n\n  <md-nav-list class=\"shopping-cart__list\">\n    <md-list-item *ngFor=\"let cartItem of cart\" class=\"shopping-cart__item\">\n\n        <span class=\"shopping-cart__item-count\">{{cartItem.count}}</span>\n        <span class=\"shopping-cart__count-spacer\">X</span>\n        <span class=\"shopping-cart__item-name\">{{cartItem.product.name}}</span>\n        <span class=\"shopping-cart__spacer\"></span>\n        <span class=\"shopping-cart__item-price\">${{cartItem.product.price}}</span>\n\n    </md-list-item>\n    <md-list-item class=\"shopping-cart__item\">\n      <h4 md-line class=\"shopping-cart__total-line\">\n        <span class=\"shopping-cart__item-total\">Total: ${{total}}</span>\n      </h4>\n    </md-list-item>\n  </md-nav-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pet-shop/shopping-cart/shopping-cart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shopping-cart__item-total {\n  font-weight: 700; }\n\n.shopping-cart__item {\n  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2); }\n\n.shopping-cart__total-line {\n  text-align: right; }\n\n.shopping-cart__spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.shopping-cart__item-heading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  white-space: nowrap; }\n\n.shopping-cart__count-spacer {\n  padding: 0 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pet-shop/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__ = __webpack_require__("../../../../../src/app/pet-shop/services/shopping-cart.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ShoppingCartComponent = class ShoppingCartComponent {
    constructor(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
        this.cart = [];
        this.total = 0;
    }
    ngOnInit() {
        this.cart = this.shoppingCartService.getCart();
        this.cart.forEach(cartItem => {
            this.total += cartItem.product.price * cartItem.count;
        });
    }
};
ShoppingCartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-shopping-cart',
        template: __webpack_require__("../../../../../src/app/pet-shop/shopping-cart/shopping-cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pet-shop/shopping-cart/shopping-cart.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__["a" /* ShoppingCartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__["a" /* ShoppingCartService */]) === "function" && _a || Object])
], ShoppingCartComponent);

var _a;
//# sourceMappingURL=shopping-cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/router.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const routeConfig = [
    {
        path: '',
        loadChildren: "./pet-shop/pet-shop.module#PetShopModule"
    }
];
/* harmony export (immutable) */ __webpack_exports__["a"] = routeConfig;

//# sourceMappingURL=router.config.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map