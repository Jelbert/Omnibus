(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notification.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notification.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Notification',
  data: function data() {
    return {
      isDismissed: false
    };
  },
  methods: {
    dismiss: function dismiss() {
      this.isDismissed = true;
      this.$buefy.snackbar.open({
        message: 'Dismissed',
        queue: false
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/Forms/ReportsFormsForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Reports/Forms/ReportsFormsForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TitleBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/TitleBar */ "./resources/js/components/TitleBar.vue");
/* harmony import */ var _components_HeroBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/HeroBar */ "./resources/js/components/HeroBar.vue");
/* harmony import */ var _components_Tiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Tiles */ "./resources/js/components/Tiles.vue");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_Notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Notification */ "./resources/js/components/Notification.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_6__);
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
  name: "ReportsFormsForm",
  components: {
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_4__["default"],
    Tiles: _components_Tiles__WEBPACK_IMPORTED_MODULE_3__["default"],
    HeroBar: _components_HeroBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    TitleBar: _components_TitleBar__WEBPACK_IMPORTED_MODULE_1__["default"],
    Notification: _components_Notification__WEBPACK_IMPORTED_MODULE_5__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  props: {
    id: {
      "default": null
    }
  },
  data: function data() {
    return {
      isLoading: false,
      item: null,
      form: this.getClearFormObject(),
      createdReadable: null,
      categories: [],
      selected: ''
    };
  },
  computed: {
    titleStack: function titleStack() {
      var lastCrumb;

      if (this.isProfileExists) {
        lastCrumb = this.form.title;
      } else {
        lastCrumb = "New Form";
      }

      return ["Admin", "Reports", lastCrumb];
    },
    heroTitle: function heroTitle() {
      if (this.isProfileExists) {
        return this.form.title;
      } else {
        return "Create Form";
      }
    },
    formCardTitle: function formCardTitle() {
      if (this.isProfileExists) {
        return "Edit Form";
      } else {
        return "New Form";
      }
    },
    isProfileExists: function isProfileExists() {
      return !!this.item;
    }
  },
  created: function created() {
    this.getData();
    this.getCategory();
  },
  methods: {
    addField: function addField() {
      this.form.fields.push({
        label: null,
        alias: null,
        type: null,
        options: []
      });
    },
    getClearFormObject: function getClearFormObject() {
      return {
        id: null,
        title: null,
        category_id: null,
        path: '',
        pentaho_id: null,
        fields: []
      };
    },
    getData: function getData() {
      var _this = this;

      if (this.id) {
        axios.get("/reports/forms/".concat(this.id)).then(function (r) {
          _this.form = r.data.data;
          _this.item = lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(r.data.data);
          _this.form.created_date = new Date(r.data.data.created_mm_dd_yyyy);
        })["catch"](function (e) {
          _this.item = null;

          _this.$buefy.toast.open({
            message: "Error: ".concat(e.message),
            type: "is-danger",
            queue: false
          });
        });
      }
    },
    input: function input(v) {//this.createdReadable = moment(v).format('MMM D, Y').toString()
    },
    onChange: function onChange(event) {
      var data = event.target.value;
      console.log(data);
    },
    submit: function submit() {
      var _this2 = this;

      var method = "post";
      var url = "/reports/forms/store";

      if (this.id) {
        method = "patch";
        url = "/reports/forms/".concat(this.id);
      }

      this.isLoading = true;
      axios({
        method: method,
        url: url,
        data: this.form
      }).then(function (r) {
        _this2.isLoading = false;

        if (!_this2.id && r.data.data.id) {
          _this2.$router.push({
            name: "reprots.forms.edit",
            params: {
              id: r.data.data.id
            }
          });

          _this2.$buefy.snackbar.open({
            message: "Created",
            queue: false
          });
        } else {
          _this2.item = r.data.data;

          _this2.$buefy.snackbar.open({
            message: "Updated",
            queue: false
          });
        }
      })["catch"](function (e) {
        _this2.isLoading = false;

        _this2.$buefy.toast.open({
          message: "Error: ".concat(e.message),
          type: "is-danger",
          queue: false
        });
      });
    },
    getCategory: function getCategory() {
      var _this3 = this;

      this.isLoading = true;
      axios.get("/category").then(function (r) {
        _this3.isLoading = false;

        if (r.data && r.data.data) {
          _this3.categories = r.data.data;
        }
      })["catch"](function (err) {
        _this3.isLoading = false;

        _this3.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: "is-danger",
          queue: false
        });
      });
    }
  },
  watch: {
    id: function id(newValue) {
      this.form = this.getClearFormObject();
      this.item = null;

      if (newValue) {
        this.getData();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return !_vm.isDismissed
    ? _c("div", { staticClass: "notification" }, [
        _c("div", { staticClass: "level" }, [
          _c("div", { staticClass: "level-left" }, [
            _c("div", { staticClass: "level-item" }, [_vm._t("default")], 2)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "level-right" }, [
            _c(
              "button",
              {
                staticClass: "button is-small is-white",
                attrs: { type: "button" },
                on: { click: _vm.dismiss }
              },
              [_vm._v("Dismiss")]
            )
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/Forms/ReportsFormsForm.vue?vue&type=template&id=e04fcc3a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Reports/Forms/ReportsFormsForm.vue?vue&type=template&id=e04fcc3a& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c("title-bar", { attrs: { "title-stack": _vm.titleStack } }),
      _vm._v(" "),
      _c(
        "hero-bar",
        [
          _vm._v("\n      " + _vm._s(_vm.heroTitle) + "\n      "),
          _c(
            "router-link",
            {
              staticClass: "button",
              attrs: { slot: "right", to: "/reports/forms/index" },
              slot: "right"
            },
            [_vm._v("Forms")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section is-main-section" },
        [
          _c(
            "tiles",
            [
              _c(
                "card-component",
                {
                  staticClass: "tile is-child",
                  attrs: { title: _vm.formCardTitle, icon: "account-edit" }
                },
                [
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
                      _vm.id
                        ? [
                            _c(
                              "b-field",
                              { attrs: { label: "ID", horizontal: "" } },
                              [
                                _c("b-input", {
                                  attrs: {
                                    value: _vm.id,
                                    "custom-class": "is-static",
                                    readonly: ""
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("hr")
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Title", horizontal: "" } },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.title,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "title", $$v)
                              },
                              expression: "form.title"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: { label: "Pentaho Filename", horizontal: "" }
                        },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.form.pentaho_id,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "pentaho_id", $$v)
                              },
                              expression: "form.pentaho_id"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Category", horizontal: "" } },
                        [
                          _c(
                            "b-select",
                            {
                              attrs: {
                                placeholder: "Select a Category",
                                rounded: ""
                              },
                              model: {
                                value: _vm.form.category_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "category_id", $$v)
                                },
                                expression: "form.category_id"
                              }
                            },
                            _vm._l(_vm.categories, function(option) {
                              return _c(
                                "option",
                                {
                                  key: option.id,
                                  domProps: { value: option.id }
                                },
                                [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(option.name) +
                                      "\n                "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Fields", horizontal: "" } },
                        [
                          _c(
                            "div",
                            [
                              _c(
                                "draggable",
                                {
                                  attrs: { draggable: ".field" },
                                  model: {
                                    value: _vm.form.fields,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "fields", $$v)
                                    },
                                    expression: "form.fields"
                                  }
                                },
                                _vm._l(_vm.form.fields, function(field, i) {
                                  return _c(
                                    "b-collapse",
                                    {
                                      key: i,
                                      staticClass: "card field",
                                      staticStyle: {
                                        "margin-bottom": "1.5rem"
                                      },
                                      attrs: { animation: "slide" },
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
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "card-header-title"
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            field.label ||
                                                              "Field"
                                                          ) +
                                                          "\n                      "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "card-header-icon"
                                                    },
                                                    [
                                                      _c("b-icon", {
                                                        attrs: {
                                                          icon: props.open
                                                            ? "menu-down"
                                                            : "menu-up"
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
                                        true
                                      )
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "card-content" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "content" },
                                            [
                                              _c(
                                                "b-field",
                                                {
                                                  staticStyle: {
                                                    "margin-bottom": "1.5rem"
                                                  },
                                                  attrs: {
                                                    label: "Label",
                                                    horizontal: ""
                                                  }
                                                },
                                                [
                                                  _c("b-input", {
                                                    attrs: { required: "" },
                                                    model: {
                                                      value: field.label,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          field,
                                                          "label",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "field.label"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-field",
                                                {
                                                  staticStyle: {
                                                    "margin-bottom": "1.5rem"
                                                  },
                                                  attrs: {
                                                    label: "Alias",
                                                    horizontal: ""
                                                  }
                                                },
                                                [
                                                  _c("b-input", {
                                                    attrs: { required: "" },
                                                    model: {
                                                      value: field.alias,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          field,
                                                          "alias",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "field.alias"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-field",
                                                {
                                                  staticStyle: {
                                                    "margin-bottom": "1.5rem"
                                                  },
                                                  attrs: {
                                                    label: "Type",
                                                    horizontal: ""
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "b-select",
                                                    {
                                                      attrs: { required: "" },
                                                      model: {
                                                        value: field.type,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            field,
                                                            "type",
                                                            $$v
                                                          )
                                                        },
                                                        expression: "field.type"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "text"
                                                          }
                                                        },
                                                        [_vm._v("Text")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "date"
                                                          }
                                                        },
                                                        [_vm._v("Date")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            value: "select"
                                                          }
                                                        },
                                                        [_vm._v("Select")]
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              field.type == "select"
                                                ? _c(
                                                    "b-field",
                                                    {
                                                      staticStyle: {
                                                        "margin-bottom":
                                                          "1.5rem"
                                                      },
                                                      attrs: {
                                                        label: "Options",
                                                        horizontal: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "div",
                                                        [
                                                          _c(
                                                            "draggable",
                                                            {
                                                              attrs: {
                                                                draggable:
                                                                  ".option"
                                                              },
                                                              model: {
                                                                value:
                                                                  field.options,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    field,
                                                                    "options",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "field.options"
                                                              }
                                                            },
                                                            _vm._l(
                                                              field.options,
                                                              function(
                                                                option,
                                                                j
                                                              ) {
                                                                return _c(
                                                                  "b-field",
                                                                  {
                                                                    key: j,
                                                                    staticClass:
                                                                      "option",
                                                                    staticStyle: {
                                                                      "margin-bottom":
                                                                        ".5rem"
                                                                    },
                                                                    attrs: {
                                                                      grouped:
                                                                        ""
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "b-input",
                                                                      {
                                                                        attrs: {
                                                                          placeholder:
                                                                            "Value",
                                                                          expanded:
                                                                            ""
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            option.value,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              option,
                                                                              "value",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "option.value"
                                                                        }
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "b-input",
                                                                      {
                                                                        attrs: {
                                                                          placeholder:
                                                                            "Text",
                                                                          expanded:
                                                                            ""
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            option.text,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              option,
                                                                              "text",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "option.text"
                                                                        }
                                                                      }
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "b-button",
                                                                      {
                                                                        attrs: {
                                                                          type:
                                                                            "is-danger",
                                                                          "icon-right":
                                                                            "delete"
                                                                        },
                                                                        on: {
                                                                          click: function(
                                                                            $event
                                                                          ) {
                                                                            return field.options.splice(
                                                                              j,
                                                                              1
                                                                            )
                                                                          }
                                                                        }
                                                                      }
                                                                    )
                                                                  ],
                                                                  1
                                                                )
                                                              }
                                                            ),
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "b-button",
                                                            {
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return field.options.push(
                                                                    {
                                                                      value: null,
                                                                      text: null
                                                                    }
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Add option"
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "footer",
                                        { staticClass: "card-footer" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "card-footer-item",
                                              on: {
                                                click: function($event) {
                                                  return _vm.form.fields.splice(
                                                    i,
                                                    1
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("Delete")]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                }),
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.addField()
                                    }
                                  }
                                },
                                [_vm._v("Add field")]
                              )
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("hr"),
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
                ]
              )
            ],
            1
          )
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

/***/ "./resources/js/components/Notification.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Notification.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.vue?vue&type=template&id=6a4ce154& */ "./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154&");
/* harmony import */ var _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification.vue?vue&type=script&lang=js& */ "./resources/js/components/Notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Notification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Notification.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Notification.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=template&id=6a4ce154& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notification.vue?vue&type=template&id=6a4ce154&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_6a4ce154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Reports/Forms/ReportsFormsForm.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/Reports/Forms/ReportsFormsForm.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportsFormsForm_vue_vue_type_template_id_e04fcc3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportsFormsForm.vue?vue&type=template&id=e04fcc3a& */ "./resources/js/views/Reports/Forms/ReportsFormsForm.vue?vue&type=template&id=e04fcc3a&");
/* harmony import */ var _ReportsFormsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportsFormsForm.vue?vue&type=script&lang=js& */ "./resources/js/views/Reports/Forms/ReportsFormsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportsFormsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportsFormsForm_vue_vue_type_template_id_e04fcc3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportsFormsForm_vue_vue_type_template_id_e04fcc3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Reports/Forms/ReportsFormsForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Reports/Forms/ReportsFormsForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/Reports/Forms/ReportsFormsForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsFormsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsFormsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/Forms/ReportsFormsForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsFormsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Reports/Forms/ReportsFormsForm.vue?vue&type=template&id=e04fcc3a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/Reports/Forms/ReportsFormsForm.vue?vue&type=template&id=e04fcc3a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsFormsForm_vue_vue_type_template_id_e04fcc3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportsFormsForm.vue?vue&type=template&id=e04fcc3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/Forms/ReportsFormsForm.vue?vue&type=template&id=e04fcc3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsFormsForm_vue_vue_type_template_id_e04fcc3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsFormsForm_vue_vue_type_template_id_e04fcc3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);