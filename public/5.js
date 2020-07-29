(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardToolbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CardToolbar',
  props: {
    isMobile: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/ReportsIndex.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Reports/ReportsIndex.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_ModalBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ModalBox */ "./resources/js/components/ModalBox.vue");
/* harmony import */ var _components_TitleBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/TitleBar */ "./resources/js/components/TitleBar.vue");
/* harmony import */ var _components_HeroBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/HeroBar */ "./resources/js/components/HeroBar.vue");
/* harmony import */ var _components_CardToolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/CardToolbar */ "./resources/js/components/CardToolbar.vue");
/* harmony import */ var _components_ModalTrashBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ModalTrashBox */ "./resources/js/components/ModalTrashBox.vue");
/* harmony import */ var _components_Tiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Tiles */ "./resources/js/components/Tiles.vue");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_9__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ReportsFormsIndex",
  components: {
    ModalTrashBox: _components_ModalTrashBox__WEBPACK_IMPORTED_MODULE_6__["default"],
    CardToolbar: _components_CardToolbar__WEBPACK_IMPORTED_MODULE_5__["default"],
    HeroBar: _components_HeroBar__WEBPACK_IMPORTED_MODULE_4__["default"],
    TitleBar: _components_TitleBar__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalBox: _components_ModalBox__WEBPACK_IMPORTED_MODULE_2__["default"],
    Tiles: _components_Tiles__WEBPACK_IMPORTED_MODULE_7__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isModalActive: false,
      trashObject: null,
      forms: [],
      isLoading: false,
      isLoadingPDFCSV: false,
      paginated: false,
      perPage: 10,
      selectedForm: null,
      formData: {},
      report: null,
      isOpen: true,
      isReportOpen: true,
      exportbutton: null,
      company: [],
      isScrollable: true,
      maxHeight: 200,
      m3: [],
      prod: [],
      selected: '',
      isActive: false,
      selectedReport: '',
      isReportLoading: false,
      isCodeLoading: false,
      isFullPage: false,
      onPDF: false,
      onCSV: false,
      checkUserAccess: []
    };
  },
  watch: {
    selectedForm: function selectedForm() {
      this.formData = {};
      this.report = null;
      this.isOpen = true;
      this.exportbutton = null;
    },
    $route: function $route(to, from) {
      // react to route changes...
      if (to !== from) {
        location.reload();
      }
    }
  },
  computed: {},
  created: function created() {
    this.getCompanies();
    this.getM3();
    this.getProd();
    this.getForms();
  },
  props: {
    id: {
      "default": null
    }
  },
  methods: {
    pdf: function pdf() {
      var _this = this;

      this.isLoadingPDFCSV = true;
      var p_head_division = this.formData["p_head_division"];
      var p_branch = this.formData["p_branch"];
      var p_head_branch = this.formData["p_head_branch"];
      var p_company = this.formData["p_company"];
      var p_division = this.formData["p_division"];
      var p_head_cono = this.formData["p_head_cono"];
      var p_df = this.formData["p_df"];
      var p_dt = this.formData["p_dt"];
      var p_customer_code = this.formData["p_customer_code"];
      var extURL = "p_df=".concat(this.format_date(p_df), "&p_dt=").concat(this.format_date(p_dt), "&p_branch=").concat(p_branch, "&p_company=").concat(p_company, "&p_division=").concat(p_division, "&p_head_cono=").concat(p_head_cono, "&p_head_division=").concat(p_head_division, "&p_head_branch=").concat(p_head_branch, "&p_customer_code=").concat(p_customer_code);
      axios.get("/reports/forms/".concat(this.selectedForm.id, "/exportpdf?").concat(extURL), {
        responseType: 'arraybuffer'
      }).then(function (r) {
        var blob = new Blob([r.data], {
          type: 'application/pdf'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = _this.selectedForm.title + '.pdf';
        link.click();
      })["catch"](function (err) {
        _this.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: "is-danger",
          queue: false
        });
      })["finally"](function (r) {
        _this.isLoadingPDFCSV = false;
      });
    },
    csv: function csv() {
      var _this2 = this;

      this.isLoadingPDFCSV = true;
      var p_head_division = this.formData["p_head_division"];
      var p_branch = this.formData["p_branch"];
      var p_head_branch = this.formData["p_head_branch"];
      var p_company = this.formData["p_company"];
      var p_division = this.formData["p_division"];
      var p_head_cono = this.formData["p_head_cono"];
      var p_df = this.formData["p_df"];
      var p_dt = this.formData["p_dt"];
      var p_customer_code = this.formData["p_customer_code"];
      var extURL = "p_df=".concat(this.format_date(p_df), "&p_dt=").concat(this.format_date(p_dt), "&p_branch=").concat(p_branch, "&p_company=").concat(p_company, "&p_division=").concat(p_division, "&p_head_cono=").concat(p_head_cono, "&p_head_division=").concat(p_head_division, "&p_head_branch=").concat(p_head_branch, "&p_customer_code=").concat(p_customer_code);
      axios.get("/reports/forms/".concat(this.selectedForm.id, "/exportcsv?").concat(extURL), {
        responseType: 'arraybuffer'
      }).then(function (r) {
        console.log(r.data);
        var blob = new Blob([r.data], {
          type: 'text/csv'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = _this2.selectedForm.title + '.csv';
        link.click();
      })["catch"](function (err) {
        _this2.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: "is-danger",
          queue: false
        });
      })["finally"](function (r) {
        _this2.isLoadingPDFCSV = false;
      });
    },
    appendLeadingZeroes: function appendLeadingZeroes(n) {
      if (n <= 9) {
        return "0" + n;
      }

      return n;
    },
    format_date: function format_date(value) {
      if (value) {
        return moment__WEBPACK_IMPORTED_MODULE_8___default()(String(value)).format('YYYYMMDD');
      }
    },
    submit: function submit() {
      var _this3 = this;

      this.isLoading = true;
      this.report = null;
      var p_head_division = this.formData["p_head_division"];
      var p_branch = this.formData["p_branch"];
      var p_head_branch = this.formData["p_head_branch"];
      var p_company = this.formData["p_company"];
      var p_division = this.formData["p_division"];
      var p_head_cono = this.formData["p_head_cono"];
      var p_df = this.formData["p_df"];
      var p_dt = this.formData["p_dt"];
      var p_customer_code = this.formData["p_customer_code"];
      var extURL = "p_df=".concat(this.format_date(p_df), "&p_dt=").concat(this.format_date(p_dt), "&p_branch=").concat(p_branch, "&p_company=").concat(p_company, "&p_division=").concat(p_division, "&p_head_cono=").concat(p_head_cono, "&p_head_division=").concat(p_head_division, "&p_head_branch=").concat(p_head_branch, "&p_customer_code=").concat(p_customer_code);
      axios.post("/reports/forms/".concat(this.selectedForm.id, "/generate?").concat(extURL), null).then(function (r) {
        if (r.data && r.data.data) {
          _this3.report = r.data.data;
          _this3.isOpen = false;
          _this3.exportbutton = true;
          _this3.vpdf = null;
        }
      })["catch"](function (err) {
        _this3.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: "is-danger",
          queue: false
        });
      })["finally"](function (r) {
        _this3.isLoading = false;
      });
    },
    getForms: function getForms() {
      var _this4 = this;

      this.isLoading = true;
      axios.get("/reports/forms").then(function (r) {
        _this4.isLoading = false;

        if (r.data && r.data.data) {
          _this4.forms = r.data.data; // console.log(Object.keys(Object.assign({}, this.forms)))
          // console.log(this.forms);

          _this4.fetchMessages(_this4.forms);
        }
      })["catch"](function (err) {
        _this4.isLoading = false;

        _this4.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: "is-danger",
          queue: false
        });
      });
    },
    getCompanies: function getCompanies() {
      var _this5 = this;

      this.isCodeLoading = true;
      axios.get("/company").then(function (r) {
        _this5.isCodeLoading = false;

        if (r.data && r.data.data) {
          _this5.company = r.data.data;
        }
      })["catch"](function (err) {
        _this5.isCodeLoading = false;

        _this5.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: "is-danger",
          queue: false
        });
      });
    },
    getM3: function getM3() {
      var _this6 = this;

      this.isReportLoading = true;
      axios.get("/reports/forms/m3").then(function (r) {
        _this6.isReportLoading = false;

        if (r.data && r.data.data) {
          _this6.m3 = r.data.data;
        }
      })["catch"](function (err) {
        _this6.isReportLoading = false;

        _this6.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: "is-danger",
          queue: false
        });
      });
    },
    getProd: function getProd() {
      var _this7 = this;

      this.isReportLoading = true;
      axios.get("/reports/forms/prod").then(function (r) {
        _this7.isReportLoading = false;

        if (r.data && r.data.data) {
          _this7.prod = r.data.data;
        }
      })["catch"](function (err) {
        _this7.isReportLoading = false;

        _this7.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: "is-danger",
          queue: false
        });
      });
    },
    fetchMessages: function fetchMessages(form) {
      this.selectedForm = form[this.$route.query.form];
    },
    getUserAccess: function getUserAccess() {
      var _this8 = this;

      axios.get("/access").then(function (r) {
        if (r.data && r.data.data) {
          _this8.checkUserAccess = r.data.data;
          var i; // let route;

          for (i = 0; i < _this8.checkUserAccess.length; i++) {
            if (_this8.checkUserAccess[i] === 'App\\Http\\Controllers\\Reports\\ReportsFormsController@exportpdf') {
              _this8.onPDF = 'true';
              console.log('PDF');
            } else if (_this8.checkUserAccess[i] === 'App\\Http\\Controllers\\Reports\\ReportsFormsController@exportcsv') {
              _this8.onCSV = 'true';
              console.log('CSV');
            }
          }
        }
      })["catch"](function (err) {
        _this8.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: "is-danger"
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/ReportsIndex.vue?vue&type=style&index=0&id=2e0140e2&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Reports/ReportsIndex.vue?vue&type=style&index=0&id=2e0140e2&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.report[data-v-2e0140e2] {\n  padding: 1rem;\n  background-color: #fff;\n  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid #ccc;\n  text-align: center;\n  overflow-x: auto;\n}\n.export[data-v-2e0140e2]{\n  text-align: right;\n  padding: 1rem;\n}\n.company[data-v-2e0140e2]{\n  padding: 0 0 1em 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/ReportsIndex.vue?vue&type=style&index=0&id=2e0140e2&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Reports/ReportsIndex.vue?vue&type=style&index=0&id=2e0140e2&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsIndex.vue?vue&type=style&index=0&id=2e0140e2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/ReportsIndex.vue?vue&type=style&index=0&id=2e0140e2&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "notification is-card-toolbar" }, [
    _c("div", { staticClass: "level", class: { "is-mobile": _vm.isMobile } }, [
      _c("div", { staticClass: "level-left" }, [
        _c("div", { staticClass: "level-item" }, [_vm._t("left")], 2)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "level-right" }, [
        _c("div", { staticClass: "level-item" }, [_vm._t("right")], 2)
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/ReportsIndex.vue?vue&type=template&id=2e0140e2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Reports/ReportsIndex.vue?vue&type=template&id=2e0140e2&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("title-bar", {
        attrs: { "title-stack": ["Admin", "Reports", "Manage Forms"] }
      }),
      _vm._v(" "),
      _c("hero-bar", [_vm._v("Browse Reports")]),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section is-main-section" },
        [
          _c(
            "b-field",
            { attrs: { label: "Select Report" } },
            [
              _c("b-autocomplete", {
                attrs: {
                  "keep-first": true,
                  "open-on-focus": true,
                  data: _vm.forms,
                  field: "title"
                },
                on: {
                  select: function(option) {
                    return (_vm.selectedForm = option)
                  }
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm.selectedForm != null
            ? _c(
                "b-collapse",
                {
                  staticClass: "card",
                  attrs: { animation: "slide", open: _vm.isOpen },
                  on: {
                    "update:open": function($event) {
                      _vm.isOpen = $event
                    }
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "trigger",
                        fn: function(props) {
                          return _c(
                            "div",
                            {
                              staticClass: "card-header",
                              attrs: { role: "button" }
                            },
                            [
                              _c("p", { staticClass: "card-header-title" }, [
                                _vm._v("Filters")
                              ]),
                              _vm._v(" "),
                              _c(
                                "a",
                                { staticClass: "card-header-icon" },
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      icon: props.open ? "menu-down" : "menu-up"
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          )
                        }
                      }
                    ],
                    null,
                    false,
                    3792207361
                  )
                },
                [
                  _vm._v(" "),
                  _c("div", { staticClass: "card-content" }, [
                    _c("div", { staticClass: "content" }, [
                      _c(
                        "form",
                        {
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.submit($event)
                            }
                          }
                        },
                        [
                          _vm._l(_vm.selectedForm.fields, function(field, i) {
                            return _c(
                              "b-field",
                              {
                                key: i,
                                attrs: { label: field.label, horizontal: "" }
                              },
                              [
                                field.type == "text"
                                  ? _c("b-input", {
                                      attrs: { required: "" },
                                      model: {
                                        value: _vm.formData[field.alias],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.formData,
                                            field.alias,
                                            $$v
                                          )
                                        },
                                        expression: "formData[field.alias]"
                                      }
                                    })
                                  : field.type == "select"
                                  ? _c(
                                      "b-select",
                                      {
                                        attrs: { required: "" },
                                        model: {
                                          value: _vm.formData[field.alias],
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formData,
                                              field.alias,
                                              $$v
                                            )
                                          },
                                          expression: "formData[field.alias]"
                                        }
                                      },
                                      _vm._l(field.options, function(option) {
                                        return _c(
                                          "option",
                                          {
                                            key: option.value,
                                            domProps: { value: option.value }
                                          },
                                          [_vm._v(_vm._s(option.text))]
                                        )
                                      }),
                                      0
                                    )
                                  : field.type == "date"
                                  ? _c("b-datepicker", {
                                      attrs: {
                                        placeholder: "",
                                        icon: "calendar-today",
                                        "trap-focus": "",
                                        editable: "",
                                        required: "",
                                        "date-formatter": function(date) {
                                          return (
                                            date.getFullYear() +
                                            "" +
                                            _vm.appendLeadingZeroes(
                                              date.getMonth() + 1
                                            ) +
                                            "" +
                                            _vm.appendLeadingZeroes(
                                              date.getDate()
                                            )
                                          )
                                        }
                                      },
                                      model: {
                                        value: _vm.formData[field.alias],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.formData,
                                            field.alias,
                                            $$v
                                          )
                                        },
                                        expression: "formData[field.alias]"
                                      }
                                    })
                                  : _vm._e()
                              ],
                              1
                            )
                          }),
                          _vm._v(" "),
                          _c(
                            "b-field",
                            { attrs: { horizontal: "" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    type: "is-primary",
                                    loading: _vm.isLoading,
                                    "native-type": "submit"
                                  }
                                },
                                [_vm._v("Submit")]
                              )
                            ],
                            1
                          )
                        ],
                        2
                      )
                    ])
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.exportbutton
            ? _c(
                "div",
                { staticClass: "export" },
                [
                  _c(
                    "b-dropdown",
                    {
                      attrs: { "aria-role": "list" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "trigger",
                            fn: function(ref) {
                              var active = ref.active
                              return _c(
                                "b-button",
                                {
                                  staticClass: "button is-info",
                                  attrs: { loading: _vm.isLoadingPDFCSV }
                                },
                                [
                                  _c("span", [_vm._v("Export")]),
                                  _vm._v(" "),
                                  _c("b-icon", {
                                    attrs: {
                                      icon: active ? "menu-up" : "menu-down"
                                    }
                                  })
                                ],
                                1
                              )
                            }
                          }
                        ],
                        null,
                        false,
                        3801267340
                      )
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        {
                          attrs: {
                            tag: "button",
                            "aria-role": "listitem",
                            disabled: _vm.onPDF !== "true"
                          },
                          on: { click: _vm.pdf }
                        },
                        [_vm._v("PDF")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        {
                          attrs: {
                            tag: "button",
                            "aria-role": "listitem",
                            disabled: _vm.onCSV !== "true"
                          },
                          on: { click: _vm.csv }
                        },
                        [_vm._v("EXCEL")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.report != null
            ? _c("div", {
                ref: "content",
                staticClass: "report",
                attrs: { id: "report" },
                domProps: { innerHTML: _vm._s(_vm.report) }
              })
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/CardToolbar.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/CardToolbar.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardToolbar.vue?vue&type=template&id=46e0f3b0& */ "./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&");
/* harmony import */ var _CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardToolbar.vue?vue&type=script&lang=js& */ "./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CardToolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CardToolbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CardToolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CardToolbar.vue?vue&type=template&id=46e0f3b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Reports/ReportsIndex.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/Reports/ReportsIndex.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportsIndex_vue_vue_type_template_id_2e0140e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportsIndex.vue?vue&type=template&id=2e0140e2&scoped=true& */ "./resources/js/views/Reports/ReportsIndex.vue?vue&type=template&id=2e0140e2&scoped=true&");
/* harmony import */ var _ReportsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportsIndex.vue?vue&type=script&lang=js& */ "./resources/js/views/Reports/ReportsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReportsIndex_vue_vue_type_style_index_0_id_2e0140e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportsIndex.vue?vue&type=style&index=0&id=2e0140e2&scoped=true&lang=css& */ "./resources/js/views/Reports/ReportsIndex.vue?vue&type=style&index=0&id=2e0140e2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportsIndex_vue_vue_type_template_id_2e0140e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportsIndex_vue_vue_type_template_id_2e0140e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2e0140e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Reports/ReportsIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Reports/ReportsIndex.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Reports/ReportsIndex.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/ReportsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Reports/ReportsIndex.vue?vue&type=style&index=0&id=2e0140e2&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/Reports/ReportsIndex.vue?vue&type=style&index=0&id=2e0140e2&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsIndex_vue_vue_type_style_index_0_id_2e0140e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsIndex.vue?vue&type=style&index=0&id=2e0140e2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/ReportsIndex.vue?vue&type=style&index=0&id=2e0140e2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsIndex_vue_vue_type_style_index_0_id_2e0140e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsIndex_vue_vue_type_style_index_0_id_2e0140e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsIndex_vue_vue_type_style_index_0_id_2e0140e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsIndex_vue_vue_type_style_index_0_id_2e0140e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsIndex_vue_vue_type_style_index_0_id_2e0140e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Reports/ReportsIndex.vue?vue&type=template&id=2e0140e2&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/Reports/ReportsIndex.vue?vue&type=template&id=2e0140e2&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsIndex_vue_vue_type_template_id_2e0140e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsIndex.vue?vue&type=template&id=2e0140e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/ReportsIndex.vue?vue&type=template&id=2e0140e2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsIndex_vue_vue_type_template_id_2e0140e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsIndex_vue_vue_type_template_id_2e0140e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);