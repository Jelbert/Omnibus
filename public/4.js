(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/Role/ReportRoleForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Reports/Role/ReportRoleForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ReportRoleForm",
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
      role: this.getClearFormObject(),
      roleAccessData: [],
      createdReadable: null,
      forms: [],
      // role_access: [],
      item: null,
      // form: this.getClearFormObject(),
      roleArray: [],
      // checkbox: false,
      checkUserAccess: []
    };
  },
  computed: {
    titleStack: function titleStack() {
      var lastCrumb;

      if (this.isProfileExists) {
        lastCrumb = this.role.name;
      } else {
        lastCrumb = "New Role";
      }

      return ["Admin", "Role", lastCrumb];
    },
    heroTitle: function heroTitle() {
      if (this.isProfileExists) {
        return this.role.name;
      } else {
        return "Create Role";
      }
    },
    formCardTitle: function formCardTitle() {
      if (this.isProfileExists) {
        return "Edit Role";
      } else {
        return "New Role";
      }
    },
    isProfileExists: function isProfileExists() {
      return !!this.item;
    }
  },
  created: function created() {
    this.getRoleAccess();
    this.getData(); // this.getUserAccess();
  },
  methods: {
    getRoleAccess: function getRoleAccess() {
      var _this = this;

      axios.get('roleroute').then(function (r) {
        _this.roleArray = r.data.ReportsFormsController; // console.log(this.roleArray)
      })["catch"](function (err) {
        _this.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: "is-danger",
          queue: false
        });
      });
    },
    getClearFormObject: function getClearFormObject() {
      return {
        id: null,
        name: null,
        description: null,
        role_access: []
      };
    },
    getData: function getData() {
      var _this2 = this;

      if (this.id) {
        axios.get("/reports/role/".concat(this.id)).then(function (r) {
          _this2.role = r.data.data;
          _this2.roleAccessData = r.data.roleAccess;
          _this2.item = lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(r.data.data); // this.form.created_date = new Date(r.data.data.created_mm_dd_yyyy);
        })["catch"](function (e) {
          _this2.item = null;

          _this2.$buefy.toast.open({
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
      var _this3 = this;

      this.isLoading = true;
      var method = "post";
      var url = "/reports/role/store";

      if (this.id) {
        method = "patch";
        url = "/reports/role/".concat(this.id);
      }

      axios({
        method: method,
        url: url,
        data: this.role
      }).then(function (r) {
        _this3.isLoading = false;

        if (!_this3.id && r.data.data.id) {
          _this3.$router.push({
            title: "reports.role.edit",
            params: {
              id: r.data.data.id
            }
          });

          _this3.$buefy.snackbar.open({
            message: "Created",
            queue: false
          });
        } else {
          _this3.item = r.data.data;

          _this3.$buefy.snackbar.open({
            message: "Updated",
            queue: false
          });
        }
      })["catch"](function (e) {
        _this3.isLoading = false;

        _this3.$buefy.toast.open({
          message: "Error: ".concat(e.message),
          type: "is-danger",
          queue: false
        });
      });
    }
  },
  watch: {
    id: function id(newValue) {
      this.role = this.getClearFormObject();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/Role/ReportRoleForm.vue?vue&type=template&id=1a7f8f70&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Reports/Role/ReportRoleForm.vue?vue&type=template&id=1a7f8f70&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
              attrs: { slot: "right", to: "/reports/role/index" },
              slot: "right"
            },
            [_vm._v("Roles")]
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
                        { attrs: { label: "Name", horizontal: "" } },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.role.name,
                              callback: function($$v) {
                                _vm.$set(_vm.role, "name", $$v)
                              },
                              expression: "role.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        { attrs: { label: "Description", horizontal: "" } },
                        [
                          _c("b-input", {
                            attrs: { required: "" },
                            model: {
                              value: _vm.role.description,
                              callback: function($$v) {
                                _vm.$set(_vm.role, "description", $$v)
                              },
                              expression: "role.description"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticClass: "columns" }, [
                        _c("div", { staticClass: "column" }, [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                margin: ".5rem",
                                "text-align": "start"
                              }
                            },
                            [
                              _c("b-field", {
                                attrs: {
                                  label: "REPORT ACCESS",
                                  horizontal: ""
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "column" },
                          [
                            _vm._l(_vm.roleArray["actions"], function(
                              route,
                              i
                            ) {
                              return _c(
                                "div",
                                { key: i },
                                [
                                  route["controller_action"] === "index"
                                    ? _c(
                                        "b-field",
                                        {
                                          attrs: {
                                            label: route["controller_action"],
                                            horizontal: ""
                                          }
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.role.role_access,
                                                expression: "role.role_access"
                                              }
                                            ],
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              value: route["controller"],
                                              checked: Array.isArray(
                                                _vm.role.role_access
                                              )
                                                ? _vm._i(
                                                    _vm.role.role_access,
                                                    route["controller"]
                                                  ) > -1
                                                : _vm.role.role_access
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = _vm.role.role_access,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = route["controller"],
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        _vm.role,
                                                        "role_access",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        _vm.role,
                                                        "role_access",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(
                                                    _vm.role,
                                                    "role_access",
                                                    $$c
                                                  )
                                                }
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.roleArray["actions"], function(
                              route,
                              i
                            ) {
                              return _c(
                                "div",
                                { key: i },
                                [
                                  route["controller_action"] === "store"
                                    ? _c(
                                        "b-field",
                                        {
                                          attrs: {
                                            label: route["controller_action"],
                                            horizontal: ""
                                          }
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.role.role_access,
                                                expression: "role.role_access"
                                              }
                                            ],
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              value: route["controller"],
                                              checked: Array.isArray(
                                                _vm.role.role_access
                                              )
                                                ? _vm._i(
                                                    _vm.role.role_access,
                                                    route["controller"]
                                                  ) > -1
                                                : _vm.role.role_access
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = _vm.role.role_access,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = route["controller"],
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        _vm.role,
                                                        "role_access",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        _vm.role,
                                                        "role_access",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(
                                                    _vm.role,
                                                    "role_access",
                                                    $$c
                                                  )
                                                }
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "column" },
                          [
                            _vm._l(_vm.roleArray["actions"], function(
                              route,
                              i
                            ) {
                              return _c(
                                "div",
                                { key: i },
                                [
                                  route["controller_action"] === "update"
                                    ? _c(
                                        "b-field",
                                        {
                                          attrs: {
                                            label: route["controller_action"],
                                            horizontal: ""
                                          }
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.role.role_access,
                                                expression: "role.role_access"
                                              }
                                            ],
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              value: route["controller"],
                                              checked: Array.isArray(
                                                _vm.role.role_access
                                              )
                                                ? _vm._i(
                                                    _vm.role.role_access,
                                                    route["controller"]
                                                  ) > -1
                                                : _vm.role.role_access
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = _vm.role.role_access,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = route["controller"],
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        _vm.role,
                                                        "role_access",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        _vm.role,
                                                        "role_access",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(
                                                    _vm.role,
                                                    "role_access",
                                                    $$c
                                                  )
                                                }
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.roleArray["actions"], function(
                              route,
                              i
                            ) {
                              return _c(
                                "div",
                                { key: i },
                                [
                                  route["controller_action"] === "destroy"
                                    ? _c(
                                        "b-field",
                                        {
                                          attrs: {
                                            label: route["controller_action"],
                                            horizontal: ""
                                          }
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.role.role_access,
                                                expression: "role.role_access"
                                              }
                                            ],
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              value: route["controller"],
                                              checked: Array.isArray(
                                                _vm.role.role_access
                                              )
                                                ? _vm._i(
                                                    _vm.role.role_access,
                                                    route["controller"]
                                                  ) > -1
                                                : _vm.role.role_access
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = _vm.role.role_access,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = route["controller"],
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        _vm.role,
                                                        "role_access",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        _vm.role,
                                                        "role_access",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(
                                                    _vm.role,
                                                    "role_access",
                                                    $$c
                                                  )
                                                }
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "column" },
                          [
                            _vm._l(_vm.roleArray["actions"], function(
                              route,
                              i
                            ) {
                              return _c(
                                "div",
                                { key: i },
                                [
                                  route["controller_action"] === "exportpdf"
                                    ? _c(
                                        "b-field",
                                        {
                                          attrs: {
                                            label: route["controller_action"],
                                            horizontal: ""
                                          }
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.role.role_access,
                                                expression: "role.role_access"
                                              }
                                            ],
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              value: route["controller"],
                                              checked: Array.isArray(
                                                _vm.role.role_access
                                              )
                                                ? _vm._i(
                                                    _vm.role.role_access,
                                                    route["controller"]
                                                  ) > -1
                                                : _vm.role.role_access
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = _vm.role.role_access,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = route["controller"],
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        _vm.role,
                                                        "role_access",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        _vm.role,
                                                        "role_access",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(
                                                    _vm.role,
                                                    "role_access",
                                                    $$c
                                                  )
                                                }
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.roleArray["actions"], function(
                              route,
                              i
                            ) {
                              return _c(
                                "div",
                                { key: i },
                                [
                                  route["controller_action"] === "exportcsv"
                                    ? _c(
                                        "b-field",
                                        {
                                          attrs: {
                                            label: route["controller_action"],
                                            horizontal: ""
                                          }
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.role.role_access,
                                                expression: "role.role_access"
                                              }
                                            ],
                                            attrs: { type: "checkbox" },
                                            domProps: {
                                              value: route["controller"],
                                              checked: Array.isArray(
                                                _vm.role.role_access
                                              )
                                                ? _vm._i(
                                                    _vm.role.role_access,
                                                    route["controller"]
                                                  ) > -1
                                                : _vm.role.role_access
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$a = _vm.role.role_access,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = route["controller"],
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      _vm.$set(
                                                        _vm.role,
                                                        "role_access",
                                                        $$a.concat([$$v])
                                                      )
                                                  } else {
                                                    $$i > -1 &&
                                                      _vm.$set(
                                                        _vm.role,
                                                        "role_access",
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          )
                                                      )
                                                  }
                                                } else {
                                                  _vm.$set(
                                                    _vm.role,
                                                    "role_access",
                                                    $$c
                                                  )
                                                }
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            })
                          ],
                          2
                        )
                      ]),
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

/***/ "./resources/js/views/Reports/Role/ReportRoleForm.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/Reports/Role/ReportRoleForm.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportRoleForm_vue_vue_type_template_id_1a7f8f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportRoleForm.vue?vue&type=template&id=1a7f8f70&scoped=true& */ "./resources/js/views/Reports/Role/ReportRoleForm.vue?vue&type=template&id=1a7f8f70&scoped=true&");
/* harmony import */ var _ReportRoleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportRoleForm.vue?vue&type=script&lang=js& */ "./resources/js/views/Reports/Role/ReportRoleForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportRoleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportRoleForm_vue_vue_type_template_id_1a7f8f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportRoleForm_vue_vue_type_template_id_1a7f8f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a7f8f70",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Reports/Role/ReportRoleForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Reports/Role/ReportRoleForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Reports/Role/ReportRoleForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportRoleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportRoleForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/Role/ReportRoleForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportRoleForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Reports/Role/ReportRoleForm.vue?vue&type=template&id=1a7f8f70&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/Reports/Role/ReportRoleForm.vue?vue&type=template&id=1a7f8f70&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportRoleForm_vue_vue_type_template_id_1a7f8f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportRoleForm.vue?vue&type=template&id=1a7f8f70&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports/Role/ReportRoleForm.vue?vue&type=template&id=1a7f8f70&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportRoleForm_vue_vue_type_template_id_1a7f8f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportRoleForm_vue_vue_type_template_id_1a7f8f70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);