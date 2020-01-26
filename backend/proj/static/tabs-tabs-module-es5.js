function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title\n      ><img\n        alt=\"logo\"\n        height=\"22\"\n        src=\"assets/icon/logo-transparent.png\"\n        class=\"header-logo\"\n      />Login</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"login-logo\">\n    <img src=\"assets/icon/logo-name-transparent.png\" alt=\"VoteR logo\" />\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate class=\"form\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"secondary\">Username</ion-label>\n        <ion-input\n          [(ngModel)]=\"login.username\"\n          name=\"username\"\n          type=\"text\"\n          #username=\"ngModel\"\n          spellcheck=\"false\"\n          autocapitalize=\"off\"\n          required\n        >\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"username.valid || submitted == false\" class=\"ion-padding-start\">\n          Username is required\n        </p>\n      </ion-text>\n\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"secondary\">Password</ion-label>\n        <ion-input\n          [(ngModel)]=\"login.password\"\n          name=\"password\"\n          type=\"password\"\n          #password=\"ngModel\"\n          required\n        >\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Password is required\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\">Login</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"onSignup()\" color=\"light\" expand=\"block\">Signup</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <img alt=\"logo\" height=\"22\" src=\"assets/icon/logo-transparent.png\" class=\"header-logo\" />\n      Map\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #mapCanvas class=\"map-canvas\"></div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <img\n        alt=\"logo\"\n        height=\"22\"\n        src=\"assets/icon/logo-transparent.png\"\n        class=\"header-logo\"\n      />Signup</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"signup-logo\">\n    <img src=\"assets/icon/logo-name-transparent.png\" alt=\"VoteR logo\" />\n  </div>\n  <form #signupForm=\"ngForm\" novalidate class=\"form\">\n    <ion-list>\n      <ion-item>\n        <ion-label color=\"secondary\">Username</ion-label>\n        <ion-input\n          [(ngModel)]=\"signup.username\"\n          name=\"username\"\n          type=\"text\"\n          #username=\"ngModel\"\n          required\n        >\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"username.valid || submitted == false\" class=\"ion-padding-start\">\n          Username is required\n        </p>\n      </ion-text>\n\n      <ion-item>\n        <ion-label color=\"secondary\">Password</ion-label>\n        <ion-input\n          [(ngModel)]=\"signup.password\"\n          name=\"password\"\n          type=\"password\"\n          #password=\"ngModel\"\n          required\n        >\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Password is required\n        </p>\n      </ion-text>\n\n      <ion-item>\n        <ion-label color=\"secondary\">Are you able to drive?</ion-label>\n        <ion-checkbox\n          slot=\"end\"\n          [(ngModel)]=\"signup.role\"\n          name=\"role\"\n          #role=\"ngModel\"\n        ></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color=\"secondary\">Select leave time on the election:</ion-label>\n        <ion-datetime\n          color=\"secondary\"\n          displayFormat=\"HH:mm DD/MM/YYYY\"\n          [(ngModel)]=\"signup.leaveTime\"\n          name=\"leaveTime\"\n          #leaveTime=\"ngModel\"\n        ></ion-datetime>\n      </ion-item>\n    </ion-list>\n\n    <div class=\"ion-padding\">\n      <ion-button (click)=\"onSignup(signupForm)\" type=\"submit\" expand=\"block\">Sign Up</ion-button>\n    </div>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-view/user-view.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-view/user-view.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUserViewUserViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <img alt=\"logo\" height=\"22\" src=\"assets/icon/logo-transparent.png\" class=\"header-logo\" />\n      Your Info\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding-top ion-text-center\">\n    <img src=\"https://www.gravatar.com/avatar?d=mm&s=140\" alt=\"avatar\" />\n    <h2>{{ user.username || 'User' }}</h2>\n\n    <ion-list inset>\n      <ion-item (click)=\"changeVotingLocation()\">\n        <ion-label>{{ user.preferredvotinglocation || 'Grace Lutheran' }}</ion-label>\n        <ion-button color=\"primary\">Change voting location</ion-button>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Paired person: <em>John Doe</em> <br />\n          Departure time: November 6th, 2020 at 3:45pm\n        </ion-label>\n      </ion-item>\n      <ion-item (click)=\"changeUsername()\">Change Username</ion-item>\n      <ion-item (click)=\"changePassword()\">Change Password</ion-item>\n      <ion-item (click)=\"support()\">Support</ion-item>\n      <ion-item (click)=\"logout()\">Logout</ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/voting-info/voting-info.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/voting-info/voting-info.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVotingInfoVotingInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <img alt=\"logo\" height=\"22\" src=\"assets/icon/logo-transparent.png\" class=\"header-logo\" />\n      Voting Info\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"candidates\">\n    <ion-list>\n      <ion-list-header>\n        <ion-label><h1>Links to Ballots</h1></ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let ballot of ballots\">\n        <ion-label (click)=\"goTo(ballot.link)\">\n          <h2>{{ ballot.party }}</h2>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <ion-list>\n      <ion-list-header>\n        <ion-label><h1>Candidates</h1></ion-label>\n      </ion-list-header>\n      <ion-item *ngFor=\"let candidate of candidates\">\n        <ion-label>\n          <ion-icon slot=\"start\" name=\"contact\"></ion-icon>\n          <h2>{{ candidate.name }}</h2>\n          <h4>Party: {{ candidate.party }}</h4>\n          <h4>Office: {{ candidate.office }}</h4>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ng-container>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"you\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>You</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"map\">\n      <ion-icon name=\"map\"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"voting-info\">\n      <ion-icon name=\"help\"></ion-icon>\n      <ion-label>Voting Info</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../providers/auth.service */
    "./src/app/providers/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/login/login.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\n.form {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jyb2Rlbi93b3Jrc3BhY2Uvdm90ZXIvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIiwiLmxvZ2luLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_providers_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/providers/auth.service */
    "./src/app/providers/auth.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.login = {
          username: '',
          password: ''
        };
        this.submitted = false;
      }

      _createClass(LoginComponent, [{
        key: "onLogin",
        value: function onLogin(form) {
          var _this = this;

          this.submitted = true;

          if (form.valid) {
            this.authService.login(this.login).subscribe(function () {
              return _this.router.navigateByUrl('/app/you');
            }, function (err) {
              return console.error(err);
            });
          }
        }
      }, {
        key: "onSignup",
        value: function onSignup() {
          this.router.navigateByUrl('/app/signup');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_providers_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/login/login.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/map/map.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/map/map.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMapMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  -webkit-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jyb2Rlbi93b3Jrc3BhY2Uvdm90ZXIvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLDZCQUFBO0VBRUEsVUFBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcbn1cblxuLnNob3ctbWFwIHtcbiAgb3BhY2l0eTogMTtcbn1cbiIsIi5tYXAtY2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuXG4uc2hvdy1tYXAge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/map/map.component.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/map/map.component.ts ***!
    \********************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppPagesMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _providers_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/location.service */
    "./src/app/providers/location.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MapComponent =
    /*#__PURE__*/
    function () {
      function MapComponent(doc, locationService, platform, route, alertCtrl) {
        _classCallCheck(this, MapComponent);

        this.doc = doc;
        this.locationService = locationService;
        this.platform = platform;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.selectLocation = true;
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.queryParams.subscribe(function (params) {
            _this2.selectLocation = params['selectLocation'];
          });
        }
        /**
         * Sets the location of the user's preference for voting
         * @param markerData - the location to set as the voting place
         */

      }, {
        key: "setLocation",
        value: function setLocation(markerData) {
          if (this.selectLocation) {
            console.log(markerData);
          }
        }
      }, {
        key: "alertLocationSelection",
        value: function alertLocationSelection() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Select Location',
                      buttons: ['Ok'],
                      message: 'Please pick the location at which you want to vote'
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var appEl, style, googleMaps, map, geocoder, observer;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    appEl = this.doc.querySelector('ion-app');
                    style = [];
                    _context2.next = 4;
                    return getGoogleMaps('AIzaSyDAvyXeJn1MTe5NsoKxSwBTufnavgn4AWI');

                  case 4:
                    googleMaps = _context2.sent;
                    this.locationService.getMap().subscribe(function (mapData) {
                      var mapEle = _this3.mapElement.nativeElement;
                      map = new googleMaps.Map(mapEle, {
                        zoom: 14,
                        styles: style
                      });
                      geocoder = new googleMaps.Geocoder();

                      var addLocationMarker = function addLocationMarker(i) {
                        if (i >= mapData.length) {
                          return;
                        }

                        var markerData = mapData[i];
                        var infoWindow = new googleMaps.InfoWindow({
                          content: "<h5>".concat(markerData.location, "</h5><br><p>").concat(markerData.precinct, "</p>")
                        }); // Get the coordinates for the address

                        geocodeAddress(geocoder, markerData.address, function (pos) {
                          var marker = new googleMaps.Marker({
                            position: pos,
                            map: map,
                            title: markerData.location
                          });
                          marker.addListener('click', function () {
                            infoWindow.open(map, marker);

                            _this3.setLocation(markerData);
                          });
                          setTimeout(function () {
                            return addLocationMarker(i + 1);
                          }, 1);
                        });
                      }; // Add a marker for each location


                      addLocationMarker(0); // Tell the user to select a location

                      if (_this3.selectLocation) {
                        _this3.alertLocationSelection();
                      } // Zoom the map on the user's location


                      if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                          var pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                          };
                          map.setCenter(pos);
                        }, function () {
                          console.error('Error with getting current location');
                        });
                      } else {
                        // Browser doesn't support Geolocation
                        console.error('Error with getting current location');
                      }

                      googleMaps.event.addListenerOnce(map, 'idle', function () {
                        mapEle.classList.add('show-map');
                      });
                    });
                    observer = new MutationObserver(function (mutations) {
                      mutations.forEach(function (mutation) {
                        if (mutation.attributeName === 'class') {
                          var el = mutation.target;

                          if (map) {
                            map.setOptions({
                              styles: []
                            });
                          }
                        }
                      });
                    });
                    observer.observe(appEl, {
                      attributes: true
                    });

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _providers_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapCanvas', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MapComponent.prototype, "mapElement", void 0);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.component.scss */
      "./src/app/pages/map/map.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document, _providers_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], MapComponent);

    function getGoogleMaps(apiKey) {
      var win = window;
      var googleModule = win.google;

      if (googleModule && googleModule.maps) {
        return Promise.resolve(googleModule.maps);
      }

      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey);
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = function () {
          var googleModule2 = win.google;

          if (googleModule2 && googleModule2.maps) {
            resolve(googleModule2.maps);
          } else {
            reject('google maps not available');
          }
        };
      });
    }

    function geocodeAddress(geocoder, address, callback) {
      var loc = localStorage.getItem(address);

      if (!loc) {
        geocoder.geocode({
          address: address
        }, function (results, status) {
          if (status === 'OK') {
            localStorage.setItem(address, JSON.stringify(results[0].geometry.location));
            callback(results[0].geometry.location);
          } else {
            console.error('Geocode was not successful for the following reason: ' + status);
          }
        });
      } else {
        callback(JSON.parse(loc));
      }
    }
    /***/

  },

  /***/
  "./src/app/pages/signup/signup.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/signup/signup.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".signup-logo {\n  padding: 20px 0;\n  min-height: 160px;\n  text-align: center;\n}\n\n.signup-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\n.form {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jyb2Rlbi93b3Jrc3BhY2Uvdm90ZXIvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtbG9nbyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWluLWhlaWdodDogMTYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpZ251cC1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIiwiLnNpZ251cC1sb2dvIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtaW4taGVpZ2h0OiAxNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2lnbnVwLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/signup/signup.component.ts ***!
    \**************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppPagesSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");
    /* harmony import */


    var src_app_providers_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/providers/auth.service */
    "./src/app/providers/auth.service.ts");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(router, userData, authService) {
        _classCallCheck(this, SignupComponent);

        this.router = router;
        this.userData = userData;
        this.authService = authService;
        this.signup = {
          username: '',
          password: '',
          role: false,
          leaveTime: ''
        };
        this.submitted = false;
      }

      _createClass(SignupComponent, [{
        key: "onSignup",
        value: function onSignup(form) {
          var _this4 = this;

          this.submitted = true;

          if (form.valid) {
            this.authService.register(this.signup).subscribe(function () {
              return _this4.router.navigateByUrl('/app/map?selectLocation=true');
            }, function (err) {
              console.error('Error in registering:', err);
            });
          }
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]
      }, {
        type: src_app_providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/pages/signup/signup.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"], src_app_providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], SignupComponent);
    /***/
  },

  /***/
  "./src/app/pages/user-view/user-view.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/user-view/user-view.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUserViewUserViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  max-width: 140px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Jyb2Rlbi93b3Jrc3BhY2Uvdm90ZXIvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy91c2VyLXZpZXcvdXNlci12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyLXZpZXcvdXNlci12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci12aWV3L3VzZXItdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIG1heC13aWR0aDogMTQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiIsImltZyB7XG4gIG1heC13aWR0aDogMTQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/user-view/user-view.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/user-view/user-view.component.ts ***!
    \********************************************************/

  /*! exports provided: UserViewComponent */

  /***/
  function srcAppPagesUserViewUserViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserViewComponent", function () {
      return UserViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_app_providers_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/providers/auth.service */
    "./src/app/providers/auth.service.ts");

    var UserViewComponent =
    /*#__PURE__*/
    function () {
      function UserViewComponent(alertCtrl, router, authService) {
        _classCallCheck(this, UserViewComponent);

        this.alertCtrl = alertCtrl;
        this.router = router;
        this.authService = authService;
        this.user = {};
      }

      _createClass(UserViewComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.getUsername();
        }
      }, {
        key: "updatePicture",
        value: function updatePicture() {
          console.log('Clicked to update picture');
        }
      }, {
        key: "changeUsername",
        value: function changeUsername() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: 'Change Username',
                      buttons: ['Cancel', {
                        text: 'Ok',
                        handler: function handler(data) {
                          //this.authService.setUser()
                          _this5.getUsername();
                        }
                      }],
                      inputs: [{
                        type: 'text',
                        name: 'username',
                        value: this.user.username,
                        placeholder: 'username'
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "changeVotingLocation",
        value: function changeVotingLocation() {}
      }, {
        key: "getUsername",
        value: function getUsername() {
          var _this6 = this;

          this.authService.getCurrentUserObs().subscribe(function (user) {
            return _this6.user = user;
          });
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          console.log('Clicked to change password');
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this7 = this;

          this.authService.logout().subscribe(function () {
            _this7.router.navigateByUrl('/app/login');
          });
        }
      }, {
        key: "support",
        value: function support() {
          this.router.navigateByUrl('/support');
        }
      }]);

      return UserViewComponent;
    }();

    UserViewComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    UserViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-view/user-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-view.component.scss */
      "./src/app/pages/user-view/user-view.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], UserViewComponent);
    /***/
  },

  /***/
  "./src/app/pages/voting-info/voting-info.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/voting-info/voting-info.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVotingInfoVotingInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZvdGluZy1pbmZvL3ZvdGluZy1pbmZvLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/voting-info/voting-info.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/voting-info/voting-info.component.ts ***!
    \************************************************************/

  /*! exports provided: VotingInfoComponent */

  /***/
  function srcAppPagesVotingInfoVotingInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VotingInfoComponent", function () {
      return VotingInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_providers_voting_info_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/providers/voting-info-data */
    "./src/app/providers/voting-info-data.ts");

    var VotingInfoComponent =
    /*#__PURE__*/
    function () {
      function VotingInfoComponent(votingInfoData) {
        _classCallCheck(this, VotingInfoComponent);

        this.votingInfoData = votingInfoData;
        this.candidates = [];
        this.ballots = [];
      }

      _createClass(VotingInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          // Fetch the candidates and ballots for the given precint
          this.votingInfoData.getCandidates().subscribe(function (data) {
            return _this8.candidates = data;
          });
          this.votingInfoData.getBallots().subscribe(function (data) {
            return _this8.ballots = data;
          });
        }
      }, {
        key: "goTo",
        value: function goTo(url) {
          window.location.href = url;
        }
      }]);

      return VotingInfoComponent;
    }();

    VotingInfoComponent.ctorParameters = function () {
      return [{
        type: src_app_providers_voting_info_data__WEBPACK_IMPORTED_MODULE_2__["VotingInfoData"]
      }];
    };

    VotingInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-voting-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./voting-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/voting-info/voting-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./voting-info.component.scss */
      "./src/app/pages/voting-info/voting-info.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_voting_info_data__WEBPACK_IMPORTED_MODULE_2__["VotingInfoData"]])], VotingInfoComponent);
    /***/
  },

  /***/
  "./src/app/providers/location.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/providers/location.service.ts ***!
    \***********************************************/

  /*! exports provided: LocationService */

  /***/
  function srcAppProvidersLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationService", function () {
      return LocationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-data */
    "./src/app/providers/user-data.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/providers/auth.service.ts");

    var LocationService =
    /*#__PURE__*/
    function () {
      function LocationService(http, user, authService) {
        _classCallCheck(this, LocationService);

        this.http = http;
        this.user = user;
        this.authService = authService;
      }

      _createClass(LocationService, [{
        key: "load",
        value: function load() {
          if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
          } else {
            return this.http.get('/voter/locations').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.processData, this));
          }
        }
      }, {
        key: "processData",
        value: function processData(data) {
          this.data = data;
          return this.data;
        }
      }, {
        key: "getMap",
        value: function getMap() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "setLocation",
        value: function setLocation(location) {
          var _this9 = this;

          var user = this.authService.getCurrentUserValue();
          user.preferredvotinglocation = location;
          user.currentLocation = location;
          this.http.put('/acounts/user/', user).subscribe(function (user) {
            _this9.authService.setUser(user);
          }, function (err) {
            return console.error(err);
          });
        }
      }]);

      return LocationService;
    }();

    LocationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], LocationService);
    /***/
  },

  /***/
  "./src/app/providers/user-data.ts":
  /*!****************************************!*\
    !*** ./src/app/providers/user-data.ts ***!
    \****************************************/

  /*! exports provided: UserData */

  /***/
  function srcAppProvidersUserDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserData", function () {
      return UserData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var UserData =
    /*#__PURE__*/
    function () {
      function UserData(storage) {
        _classCallCheck(this, UserData);

        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
      }

      _createClass(UserData, [{
        key: "hasFavorite",
        value: function hasFavorite(sessionName) {
          return this._favorites.indexOf(sessionName) > -1;
        }
      }, {
        key: "addFavorite",
        value: function addFavorite(sessionName) {
          this._favorites.push(sessionName);
        }
      }, {
        key: "removeFavorite",
        value: function removeFavorite(sessionName) {
          var index = this._favorites.indexOf(sessionName);

          if (index > -1) {
            this._favorites.splice(index, 1);
          }
        }
      }, {
        key: "login",
        value: function login(username) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.storage.set(this.HAS_LOGGED_IN, true);

                  case 2:
                    this.setUsername(username);
                    return _context4.abrupt("return", window.dispatchEvent(new CustomEvent('user:login')));

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "signup",
        value: function signup(username) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.setUsername(username);
                    _context5.next = 3;
                    return this.storage.set(this.HAS_LOGGED_IN, true);

                  case 3:
                    return _context5.abrupt("return", window.dispatchEvent(new CustomEvent('user:signup')));

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.storage.remove(this.HAS_LOGGED_IN);

                  case 2:
                    _context6.next = 4;
                    return this.storage.remove('username');

                  case 4:
                    window.dispatchEvent(new CustomEvent('user:logout'));

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "setUsername",
        value: function setUsername(username) {
          return this.storage.set('username', username);
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var value;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.storage.get('username');

                  case 2:
                    value = _context7.sent;
                    return _context7.abrupt("return", value);

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var value;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.storage.get(this.HAS_LOGGED_IN);

                  case 2:
                    value = _context8.sent;
                    return _context8.abrupt("return", value === true);

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "checkHasSeenTutorial",
        value: function checkHasSeenTutorial() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var value;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.storage.get(this.HAS_SEEN_TUTORIAL);

                  case 2:
                    value = _context9.sent;
                    return _context9.abrupt("return", value);

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return UserData;
    }();

    UserData.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    UserData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], UserData);
    /***/
  },

  /***/
  "./src/app/providers/voting-info-data.ts":
  /*!***********************************************!*\
    !*** ./src/app/providers/voting-info-data.ts ***!
    \***********************************************/

  /*! exports provided: VotingInfoData */

  /***/
  function srcAppProvidersVotingInfoDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VotingInfoData", function () {
      return VotingInfoData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-data */
    "./src/app/providers/user-data.ts");

    var VotingInfoData =
    /*#__PURE__*/
    function () {
      function VotingInfoData(http, user) {
        _classCallCheck(this, VotingInfoData);

        this.http = http;
        this.user = user;
      }

      _createClass(VotingInfoData, [{
        key: "load",
        value: function load() {
          if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
          } else {
            return this.http.get('assets/data/precincts.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.processData, this));
          }
        }
      }, {
        key: "processData",
        value: function processData(data) {
          this.data = data;
          return this.data;
        }
      }, {
        key: "getCandidates",
        value: function getCandidates() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data[0].candidates;
          }));
        }
      }, {
        key: "getBallots",
        value: function getBallots() {
          return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data[0].ballots;
          }));
        }
      }]);

      return VotingInfoData;
    }();

    VotingInfoData.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]
      }];
    };

    VotingInfoData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])], VotingInfoData);
    /***/
  },

  /***/
  "./src/app/tabs/tabs-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tabs/tabs-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _pages_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../pages/user-view/user-view.component */
    "./src/app/pages/user-view/user-view.component.ts");
    /* harmony import */


    var _pages_map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../pages/map/map.component */
    "./src/app/pages/map/map.component.ts");
    /* harmony import */


    var _pages_voting_info_voting_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../pages/voting-info/voting-info.component */
    "./src/app/pages/voting-info/voting-info.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../pages/signup/signup.component */
    "./src/app/pages/signup/signup.component.ts");

    var routes = [{
      path: 'app',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'you',
        component: _pages_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_4__["UserViewComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
      }, {
        path: 'map',
        component: _pages_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
      }, {
        path: 'voting-info',
        component: _pages_voting_info_voting_info_component__WEBPACK_IMPORTED_MODULE_6__["VotingInfoComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
      }, {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
      }, {
        path: 'signup',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"]
      }]
    }, {
      path: '',
      redirectTo: '/app/login',
      pathMatch: 'full'
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _pages_voting_info_voting_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../pages/voting-info/voting-info.component */
    "./src/app/pages/voting-info/voting-info.component.ts");
    /* harmony import */


    var _pages_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../pages/user-view/user-view.component */
    "./src/app/pages/user-view/user-view.component.ts");
    /* harmony import */


    var _pages_map_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../pages/map/map.component */
    "./src/app/pages/map/map.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../pages/signup/signup.component */
    "./src/app/pages/signup/signup.component.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"], _pages_voting_info_voting_info_component__WEBPACK_IMPORTED_MODULE_7__["VotingInfoComponent"], _pages_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_8__["UserViewComponent"], _pages_map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabsPage = function TabsPage() {
      _classCallCheck(this, TabsPage);
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map