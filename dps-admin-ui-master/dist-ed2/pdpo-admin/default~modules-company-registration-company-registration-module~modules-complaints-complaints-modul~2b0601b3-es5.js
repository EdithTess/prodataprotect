(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-company-registration-company-registration-module~modules-complaints-complaints-modul~2b0601b3"], {
    /***/
    "QMK6":
    /*!**********************************************************!*\
      !*** ./src/@fury/shared/highlightjs/highlight.module.ts ***!
      \**********************************************************/

    /*! exports provided: HighlightModule */

    /***/
    function QMK6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HighlightModule", function () {
        return HighlightModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _highlight_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./highlight.directive */
      "yH/G");

      var HighlightModule = function HighlightModule() {
        _classCallCheck(this, HighlightModule);
      };

      HighlightModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HighlightModule
      });
      HighlightModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function HighlightModule_Factory(t) {
          return new (t || HighlightModule)();
        },
        imports: [[]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HighlightModule, {
          declarations: [_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightDirective"]],
          exports: [_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightDirective"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [],
            declarations: [_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightDirective"]],
            exports: [_highlight_directive__WEBPACK_IMPORTED_MODULE_1__["HighlightDirective"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zqeb":
    /*!********************************************!*\
      !*** ./src/@fury/services/util.service.ts ***!
      \********************************************/

    /*! exports provided: UtilService */

    /***/
    function zqeb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilService", function () {
        return UtilService;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR"); // import { environment } from 'src/environments/environment';


      var UtilService = /*#__PURE__*/function () {
        function UtilService() {
          _classCallCheck(this, UtilService);
        }

        _createClass(UtilService, [{
          key: "addMonthToDate",
          value: function addMonthToDate(nMonths) {
            var month = new Date().getMonth();
            var day = new Date().getDate();
            var year = new Date().getFullYear();

            if (month + nMonths > 12) {
              if ((month + nMonths) % 12 === 2) {
                if (day > 29) {
                  day = 28;
                }
              }

              return new Date(year + 1, (month + nMonths) % 12, day);
            } else {
              if (month + nMonths === 2) {
                if (day > 29) {
                  day = 28;
                }
              }

              return new Date(year, month + nMonths, day);
            }
          }
        }, {
          key: "convertToNumber",
          value: function convertToNumber(numberInputField) {
            return numberInputField && numberInputField !== '' ? +numberInputField : null;
          }
        }, {
          key: "transformDate",
          value: function transformDate(dateString) {
            return dateString && dateString !== null + '' ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(dateString, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultServerDateFormat, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultLocale) : null;
          }
        }, {
          key: "transformDateTime",
          value: function transformDateTime(dateString) {
            if (dateString && dateString !== null + '') {
              return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(dateString, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultServerDateTimeFormat, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultLocale, '+0300');
            } else {
              return null;
            }
          }
        }, {
          key: "formatDecimal",
          value: function formatDecimal(value, digitalInfo) {
            var digitalFormat = digitalInfo ? digitalInfo : _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultDigitalInfo;
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatNumber"])(value, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].defaultLocale, digitalFormat);
          } // setSelectedText(event, targetField: string, document: any) {
          //   const target = event.source.selected._element.nativeElement;
          //   let text = target.innerText.trim();
          //   const arrayText = text.split('|');
          //
          //   if (arrayText.length > 1) {
          //     text = arrayText[1];
          //   } else {
          //     text = arrayText[0];
          //   }
          //
          //   if (document) {
          //     document[targetField] = text;
          //   }
          // }

        }, {
          key: "setSelectedText",
          value: function setSelectedText(event, targetField, document, fieldControl) {
            var target = event.source.selected._element.nativeElement;
            var text = target.innerText.trim();
            var arrayText = text.split('|');

            if (arrayText.length > 1) {
              text = arrayText[1];
            } else {
              text = arrayText[0];
            }

            if (document) {
              document[targetField] = text.trim();
            }

            if (fieldControl) {
              fieldControl.setValue(text.trim());
            }
          }
          /**
           * Get text of mat-select option selected
           */

        }, {
          key: "setSelectedOptionText",
          value: function setSelectedOptionText(event) {
            var selectedData = {
              text: event.source.selected.viewValue,
              value: event.source.value
            };
            var arrayText = selectedData.text.split('|');
            return arrayText.length > 1 ? arrayText[1] : arrayText[0];
          }
        }, {
          key: "getGenericDDL",
          value: function getGenericDDL(items, pattern, addDefaultOption) {
            var itemsResult = [];

            if (addDefaultOption === undefined || addDefaultOption === true) {
              itemsResult.push({
                key: '',
                value: 'Select an option',
                disabled: true
              });
            }

            items.forEach(function (item) {
              itemsResult.push({
                key: item[pattern.key],
                value: item[pattern.label],
                disabled: false,
                rawData: item
              });
            });
            return itemsResult;
          }
        }, {
          key: "getContentType",
          value: function getContentType(fileName) {
            var extensionArray = fileName.split('.');
            var extension = extensionArray[extensionArray.length - 1].toLowerCase();
            var contentType;

            switch (extension) {
              case 'pdf':
                contentType = 'application/pdf';
                break;

              case 'gif':
                contentType = 'image/gif';
                break;

              case 'png':
                contentType = 'image/png';
                break;

              case 'jpg':
                contentType = 'image/jpg';
                break;

              case 'doc':
                contentType = 'application/msword';
                break;

              case 'docx':
                contentType = 'application/msword';
                break;

              default:
                contentType = 'application/octet-stream ';
                break;
            }

            return contentType;
          }
        }, {
          key: "formatString",
          value: function formatString(str) {
            for (var index = 0; index < (arguments.length <= 1 ? 0 : arguments.length - 1); index++) {
              str = str.replace("{".concat(index, "}"), index + 1 < 1 || arguments.length <= index + 1 ? undefined : arguments[index + 1]);
            }

            return str;
          }
        }, {
          key: "makeRandom",
          value: function makeRandom(lengthOfCode) {
            var possible = 'abcdefghijklmnopqrstuvwxyz1234567890';
            var text = '';

            for (var i = 0; i < lengthOfCode; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text;
          }
        }, {
          key: "getRandomInt",
          value: function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max)) + 1;
          }
        }, {
          key: "isNotEmpty",
          value: function isNotEmpty(entity) {
            return entity !== undefined && entity !== null;
          }
        }, {
          key: "getDateFromString",
          value: function getDateFromString(stringDate) {
            if (stringDate) {
              return new Date(stringDate);
            } else {
              return null;
            }
          }
        }, {
          key: "formatCatalogRequest",
          value: function formatCatalogRequest(catalogRequest) {
            var searchRequest = Object.assign({}, catalogRequest);

            if (catalogRequest) {
              if (catalogRequest.viewColumn) {
                searchRequest.viewColumn = JSON.stringify(catalogRequest.viewColumn);
              }

              if (catalogRequest.criteria) {
                // we must send the search criteria array as a string
                searchRequest.criteria = JSON.stringify(catalogRequest.criteria);
              }
            }

            return searchRequest;
          }
        }, {
          key: "formatSearchRequest",
          value: function formatSearchRequest(searchRequest) {
            var jsonRequest = Object.assign({}, {
              q: searchRequest
            });
            jsonRequest.q = JSON.stringify(searchRequest);
            return jsonRequest;
          }
        }, {
          key: "getSearchRequest",
          value: function getSearchRequest(includeTotals, excludeRecords, pagination, viewColumns, criteria, sortBy) {
            return {
              includeTotals: includeTotals,
              excludeRecords: excludeRecords,
              pagination: pagination,
              viewColumns: viewColumns,
              criteria: criteria,
              sortBy: sortBy
            };
          }
        }, {
          key: "enumToLookupValue",
          value: function enumToLookupValue(enumClass) {
            var list = [];
            Object.keys(enumClass).forEach(function (key) {
              list.push({
                key: key,
                value: enumClass[key]
              });
            });
            return list;
          }
        }, {
          key: "setLookupValues",
          value: function setLookupValues(items, pattern) {
            var itemsResult = [];
            items.forEach(function (item) {
              itemsResult.push({
                key: item[pattern.key],
                value: item[pattern.label]
              });
            });
            return itemsResult;
          }
        }, {
          key: "getListOptionsFromEnum",
          value: function getListOptionsFromEnum(enumClass) {
            var _this = this;

            var itemsResult = [{
              key: '',
              value: 'Select an option',
              disabled: true
            }];
            Object.keys(enumClass).forEach(function (key) {
              itemsResult.push({
                key: key,
                value: _this.constantNameToDescription(enumClass[key]),
                disabled: false,
                rawData: key
              });
            });
            return itemsResult;
          }
        }, {
          key: "constantNameToDescription",
          value: function constantNameToDescription(constantName) {
            if (!constantName || constantName.trim() === '') {
              return 'N/A';
            }

            var stringFormatted = '';
            var words = constantName.split('_');
            words.forEach(function (word) {
              if (word.length === 1) {
                word = word.toUpperCase();
              } else {
                word = word.substring(0, 1).toUpperCase().concat(word.substr(1).toLowerCase());
              }

              stringFormatted += word + ' ';
            });
            return stringFormatted.trim();
          }
        }, {
          key: "buildSearchRequest",
          value: function buildSearchRequest(order, columns, pagination, criteria) {
            var searchRequest = {
              q: {
                includeTotals: true,
                excludeRecords: false
              }
            };

            if (order) {
              searchRequest.q.sortBy = order;
            }

            if (columns) {
              searchRequest.q.viewColumns = columns;
            }

            if (pagination) {
              searchRequest.q.pagination = pagination;
            }

            if (criteria) {
              searchRequest.q.criteria = criteria;
            }

            var searchRequestEncoded = Object.assign({}, searchRequest); // Prepare json string to be sent

            searchRequestEncoded.q = JSON.stringify(searchRequest.q); // Return

            return searchRequestEncoded;
          }
        }, {
          key: "resolveAccessObject",
          value: function resolveAccessObject(path, obj) {
            return path.split('.').reduce(function (prev, curr) {
              return prev ? prev[curr] : null;
            }, obj || self);
          }
        }]);

        return UtilService;
      }();

      UtilService.ɵfac = function UtilService_Factory(t) {
        return new (t || UtilService)();
      };

      UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UtilService,
        factory: UtilService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UtilService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~modules-company-registration-company-registration-module~modules-complaints-complaints-modul~2b0601b3-es5.js.map