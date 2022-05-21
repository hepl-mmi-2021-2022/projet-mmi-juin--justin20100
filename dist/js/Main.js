/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Canvas.ts":
/*!**************************!*\
  !*** ./src/ts/Canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar Pillar_1 = __webpack_require__(/*! ./elements/Pillar */ \"./src/ts/elements/Pillar.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/ts/settings.ts\");\n\nvar Canvas = function () {\n  function Canvas() {\n    this.htmlCanvasElement = document.getElementById(settings_1.settings.canvas.id);\n    this.ctx = this.htmlCanvasElement.getContext(settings_1.settings.canvas.CanvasRenderingContext);\n    this.drawables = [];\n    this.pillars = [];\n\n    for (var i = 0; i < settings_1.settings.pillar.maxCount; i++) {\n      this.pillars.push(new Pillar_1.Pillar(this.htmlCanvasElement, this.ctx, {\n        x: settings_1.settings.pillar.startPosition.x,\n        y: settings_1.settings.pillar.startPosition.y\n      }, Math.trunc(settings_1.settings.pillar.width.min + Math.random() * (settings_1.settings.pillar.width.max - settings_1.settings.pillar.width.min))));\n    }\n\n    this.addEventListeners();\n    this.loadDrawable();\n    this.draw();\n  }\n\n  ;\n\n  Canvas.prototype.addEventListeners = function () {\n    this.htmlCanvasElement.addEventListener('mousedown', function () {});\n    this.htmlCanvasElement.addEventListener('mouseup', function () {});\n  };\n\n  ;\n\n  Canvas.prototype.draw = function () {\n    this.clear();\n    this.drawables.forEach(function (drawable) {\n      drawable.draw();\n    });\n  };\n\n  ;\n\n  Canvas.prototype.update = function () {\n    this.drawables.forEach(function (drawable) {\n      drawable.update();\n      drawable.draw();\n    });\n  };\n\n  ;\n\n  Canvas.prototype.loadDrawable = function () {\n    var _this = this;\n\n    this.pillars.forEach(function (pillar) {\n      _this.drawables.push(pillar);\n    });\n  };\n\n  Canvas.prototype.clear = function () {\n    this.ctx.clearRect(0, 0, this.htmlCanvasElement.width, this.htmlCanvasElement.height);\n  };\n\n  ;\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFNSTtBQUNJLFNBQUtBLGlCQUFMLEdBQXlCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JDLG9CQUFTQyxNQUFULENBQWdCQyxFQUF4QyxDQUF6QjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLTixpQkFBTCxDQUF1Qk8sVUFBdkIsQ0FBa0NKLG9CQUFTQyxNQUFULENBQWdCSSxzQkFBbEQsQ0FBWDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsRUFBZjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdSLG9CQUFTUyxNQUFULENBQWdCQyxRQUFwQyxFQUE4Q0YsQ0FBQyxFQUEvQyxFQUFrRDtBQUM5QyxXQUFLRCxPQUFMLENBQWFJLElBQWIsQ0FBbUIsSUFBSUMsZUFBSixDQUNmLEtBQUtmLGlCQURVLEVBRWYsS0FBS00sR0FGVSxFQUdmO0FBQUNVLFNBQUMsRUFBQ2Isb0JBQVNTLE1BQVQsQ0FBZ0JLLGFBQWhCLENBQThCRCxDQUFqQztBQUFvQ0UsU0FBQyxFQUFFZixvQkFBU1MsTUFBVCxDQUFnQkssYUFBaEIsQ0FBOEJDO0FBQXJFLE9BSGUsRUFJZkMsSUFBSSxDQUFDQyxLQUFMLENBQVdqQixvQkFBU1MsTUFBVCxDQUFnQlMsS0FBaEIsQ0FBc0JDLEdBQXRCLEdBQTRCSCxJQUFJLENBQUNJLE1BQUwsTUFBaUJwQixvQkFBU1MsTUFBVCxDQUFnQlMsS0FBaEIsQ0FBc0JHLEdBQXRCLEdBQTRCckIsb0JBQVNTLE1BQVQsQ0FBZ0JTLEtBQWhCLENBQXNCQyxHQUFuRSxDQUF2QyxDQUplLENBQW5CO0FBTUg7O0FBQ0QsU0FBS0csaUJBQUw7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsSUFBTDtBQUNIOztBQUFBOztBQUNEQztBQUNJLFNBQUs1QixpQkFBTCxDQUF1QjZCLGdCQUF2QixDQUF3QyxXQUF4QyxFQUFxRCxhQUVwRCxDQUZEO0FBR0EsU0FBSzdCLGlCQUFMLENBQXVCNkIsZ0JBQXZCLENBQXdDLFNBQXhDLEVBQW1ELGFBRWxELENBRkQ7QUFHSCxHQVBEOztBQU9DOztBQUVERDtBQUNJLFNBQUtFLEtBQUw7QUFDQSxTQUFLckIsU0FBTCxDQUFlc0IsT0FBZixDQUF1QixVQUFDQyxRQUFELEVBQW9CO0FBQ3ZDQSxjQUFRLENBQUNMLElBQVQ7QUFDSCxLQUZEO0FBR0gsR0FMRDs7QUFLQzs7QUFFREM7QUFDSSxTQUFLbkIsU0FBTCxDQUFlc0IsT0FBZixDQUF1QixVQUFDQyxRQUFELEVBQW9CO0FBQ3ZDQSxjQUFRLENBQUNDLE1BQVQ7QUFDQUQsY0FBUSxDQUFDTCxJQUFUO0FBQ0gsS0FIRDtBQUlILEdBTEQ7O0FBS0M7O0FBRURDO0FBQUE7O0FBQ0ksU0FBS2xCLE9BQUwsQ0FBYXFCLE9BQWIsQ0FBcUIsVUFBQ25CLE1BQUQsRUFBZTtBQUNoQ3NCLFdBQUksQ0FBQ3pCLFNBQUwsQ0FBZUssSUFBZixDQUFvQkYsTUFBcEI7QUFDSCxLQUZEO0FBR0gsR0FKRDs7QUFNQWdCO0FBQ0ksU0FBS3RCLEdBQUwsQ0FBUzZCLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS25DLGlCQUFMLENBQXVCcUIsS0FBaEQsRUFBdUQsS0FBS3JCLGlCQUFMLENBQXVCb0MsTUFBOUU7QUFDSCxHQUZEOztBQUVDO0FBQ0w7QUFBQyxDQXZERDs7QUFBYUMsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0NhbnZhcy50cz84NWE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SURyYXdhYmxlfSBmcm9tIFwiLi9JbnRlcmZhY2VzL0lEcmF3YWJsZVwiO1xuaW1wb3J0IHtQaWxsYXJ9IGZyb20gXCIuL2VsZW1lbnRzL1BpbGxhclwiO1xuaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIENhbnZhcyB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBodG1sQ2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIGRyYXdhYmxlczogSURyYXdhYmxlW107XG4gICAgcHVibGljIHBpbGxhcnM6IFBpbGxhcltdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaHRtbENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZXR0aW5ncy5jYW52YXMuaWQpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuaHRtbENhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dChzZXR0aW5ncy5jYW52YXMuQ2FudmFzUmVuZGVyaW5nQ29udGV4dCkgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgICAgICB0aGlzLmRyYXdhYmxlcyA9IFtdO1xuICAgICAgICB0aGlzLnBpbGxhcnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXR0aW5ncy5waWxsYXIubWF4Q291bnQ7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLnBpbGxhcnMucHVzaCggbmV3IFBpbGxhcihcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWxDYW52YXNFbGVtZW50LFxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LFxuICAgICAgICAgICAgICAgIHt4OnNldHRpbmdzLnBpbGxhci5zdGFydFBvc2l0aW9uLngsIHk6IHNldHRpbmdzLnBpbGxhci5zdGFydFBvc2l0aW9uLnl9LFxuICAgICAgICAgICAgICAgIE1hdGgudHJ1bmMoc2V0dGluZ3MucGlsbGFyLndpZHRoLm1pbiArIE1hdGgucmFuZG9tKCkgKiAoc2V0dGluZ3MucGlsbGFyLndpZHRoLm1heCAtIHNldHRpbmdzLnBpbGxhci53aWR0aC5taW4pKVxuICAgICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMubG9hZERyYXdhYmxlKCk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH07XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuaHRtbENhbnZhc0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gZmFpcmUgZ3JhbmRpciBsZSBicmlkZ2VcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5odG1sQ2FudmFzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gZmFpcmUgdG9tYmVyIGxlIGJyaWRnZVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZHJhd2FibGVzLmZvckVhY2goKGRyYXdhYmxlOiBJRHJhd2FibGUpID0+IHtcbiAgICAgICAgICAgIGRyYXdhYmxlLmRyYXcoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5kcmF3YWJsZXMuZm9yRWFjaCgoZHJhd2FibGU6IElEcmF3YWJsZSkgPT4ge1xuICAgICAgICAgICAgZHJhd2FibGUudXBkYXRlKCk7XG4gICAgICAgICAgICBkcmF3YWJsZS5kcmF3KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsb2FkRHJhd2FibGUoKSB7XG4gICAgICAgIHRoaXMucGlsbGFycy5mb3JFYWNoKChwaWxsYXI6IFBpbGxhcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcmF3YWJsZXMucHVzaChwaWxsYXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuaHRtbENhbnZhc0VsZW1lbnQud2lkdGgsIHRoaXMuaHRtbENhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcbiAgICB9O1xufSJdLCJuYW1lcyI6WyJodG1sQ2FudmFzRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXR0aW5nc18xIiwiY2FudmFzIiwiaWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiQ2FudmFzUmVuZGVyaW5nQ29udGV4dCIsImRyYXdhYmxlcyIsInBpbGxhcnMiLCJpIiwicGlsbGFyIiwibWF4Q291bnQiLCJwdXNoIiwiUGlsbGFyXzEiLCJ4Iiwic3RhcnRQb3NpdGlvbiIsInkiLCJNYXRoIiwidHJ1bmMiLCJ3aWR0aCIsIm1pbiIsInJhbmRvbSIsIm1heCIsImFkZEV2ZW50TGlzdGVuZXJzIiwibG9hZERyYXdhYmxlIiwiZHJhdyIsIkNhbnZhcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhciIsImZvckVhY2giLCJkcmF3YWJsZSIsInVwZGF0ZSIsIl90aGlzIiwiY2xlYXJSZWN0IiwiaGVpZ2h0IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/ts/Canvas.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.canvas = new Canvas_1.Canvas();\n  }\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7QUFHSTtBQUNJLFNBQUtBLE1BQUwsR0FBYyxJQUFJQyxlQUFKLEVBQWQ7QUFDSDs7QUFDTDtBQUFDLENBTkQ7O0FBT0EsSUFBSUMsSUFBSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvTWFpbi50cz80ODhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi9DYW52YXNcIjtcblxuY2xhc3MgTWFpbiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjYW52YXM6IENhbnZhcztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcbiAgICB9XG59XG5uZXcgTWFpbigpOyJdLCJuYW1lcyI6WyJjYW52YXMiLCJDYW52YXNfMSIsIk1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/elements/Pillar.ts":
/*!***********************************!*\
  !*** ./src/ts/elements/Pillar.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Pillar = void 0;\n\nvar Tools_1 = __webpack_require__(/*! ./Tools */ \"./src/ts/elements/Tools.ts\");\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Pillar = function (_super) {\n  __extends(Pillar, _super);\n\n  function Pillar(canvas, ctx, position, width) {\n    var _this = _super.call(this, canvas, ctx, position) || this;\n\n    _this.draw();\n\n    return _this;\n  }\n\n  Pillar.prototype.draw = function () {\n    this.ctx.fillStyle = \"black\";\n    this.ctx.fillRect(this.position.x, this.position.y, this.width, settings_1.settings.pillar.height);\n  };\n\n  Pillar.prototype.update = function () {};\n\n  return Pillar;\n}(Tools_1.Tools);\n\nexports.Pillar = Pillar;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvZWxlbWVudHMvUGlsbGFyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBO0FBQTRCQTs7QUFHeEIsa0JBQVlDLE1BQVosRUFBdUNDLEdBQXZDLEVBQXNFQyxRQUF0RSxFQUEwR0MsS0FBMUcsRUFBc0g7QUFBdEgsZ0JBQ0lDLGtCQUFNSixNQUFOLEVBQWNDLEdBQWQsRUFBbUJDLFFBQW5CLEtBQTRCLElBRGhDOztBQUVJRyxTQUFJLENBQUNDLElBQUw7OztBQUNIOztBQUNEQztBQUNJLFNBQUtOLEdBQUwsQ0FBU08sU0FBVCxHQUFxQixPQUFyQjtBQUNBLFNBQUtQLEdBQUwsQ0FBU1EsUUFBVCxDQUFrQixLQUFLUCxRQUFMLENBQWNRLENBQWhDLEVBQWtDLEtBQUtSLFFBQUwsQ0FBY1MsQ0FBaEQsRUFBa0QsS0FBS1IsS0FBdkQsRUFBNkRTLG9CQUFTQyxNQUFULENBQWdCQyxNQUE3RTtBQUNILEdBSEQ7O0FBSUFQLHlDQUNDLENBREQ7O0FBRUo7QUFBQyxDQWJELENBQTRCUSxhQUE1Qjs7QUFBYUMsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL2VsZW1lbnRzL1BpbGxhci50cz9mNjEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VG9vbHN9IGZyb20gXCIuL1Rvb2xzXCI7XG5pbXBvcnQge0lEcmF3YWJsZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSURyYXdhYmxlXCI7XG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIFBpbGxhciBleHRlbmRzIFRvb2xzIGltcGxlbWVudHMgSURyYXdhYmxle1xuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIHdpZHRoOm51bWJlcikge1xuICAgICAgICBzdXBlcihjYW52YXMsIGN0eCwgcG9zaXRpb24pO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdygpe1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCx0aGlzLnBvc2l0aW9uLnksdGhpcy53aWR0aCxzZXR0aW5ncy5waWxsYXIuaGVpZ2h0KTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgIH1cbn0iXSwibmFtZXMiOlsiX19leHRlbmRzIiwiY2FudmFzIiwiY3R4IiwicG9zaXRpb24iLCJ3aWR0aCIsIl9zdXBlciIsIl90aGlzIiwiZHJhdyIsIlBpbGxhciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieCIsInkiLCJzZXR0aW5nc18xIiwicGlsbGFyIiwiaGVpZ2h0IiwiVG9vbHNfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/elements/Pillar.ts\n");

/***/ }),

/***/ "./src/ts/elements/Tools.ts":
/*!**********************************!*\
  !*** ./src/ts/elements/Tools.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Tools = void 0;\n\nvar Tools = function () {\n  function Tools(canvas, ctx, position) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.position = position;\n  }\n\n  return Tools;\n}();\n\nexports.Tools = Tools;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvZWxlbWVudHMvVG9vbHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUtJLGlCQUFZQSxNQUFaLEVBQXVDQyxHQUF2QyxFQUFzRUMsUUFBdEUsRUFBd0c7QUFDcEcsU0FBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDs7QUFDTDtBQUFDLENBVkQ7O0FBQWFDLGFBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9lbGVtZW50cy9Ub29scy50cz84ZmZlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUb29sc3tcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiB7eDpudW1iZXIseTpudW1iZXJ9O1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgfVxufSJdLCJuYW1lcyI6WyJjYW52YXMiLCJjdHgiLCJwb3NpdGlvbiIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/elements/Tools.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  pillar: {\n    height: 10,\n    width: {\n      min: 10,\n      max: 10\n    },\n    startPosition: {\n      x: 10,\n      y: 10\n    },\n    maxCount: 2\n  },\n  hero: {\n    startPosition: 60\n  },\n  Bridge: {\n    width: 10\n  },\n  canvas: {\n    id: 'my-canvas',\n    CanvasRenderingContext: '2d'\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsUUFBTSxFQUFFO0FBQ0pDLFVBQU0sRUFBRSxFQURKO0FBRUpDLFNBQUssRUFBQztBQUFDQyxTQUFHLEVBQUMsRUFBTDtBQUFRQyxTQUFHLEVBQUM7QUFBWixLQUZGO0FBR0pDLGlCQUFhLEVBQUU7QUFBQ0MsT0FBQyxFQUFDLEVBQUg7QUFBTUMsT0FBQyxFQUFDO0FBQVIsS0FIWDtBQUlKQyxZQUFRLEVBQUM7QUFKTCxHQURZO0FBT3BCQyxNQUFJLEVBQUU7QUFDRkosaUJBQWEsRUFBRTtBQURiLEdBUGM7QUFVcEJLLFFBQU0sRUFBRTtBQUNKUixTQUFLLEVBQUM7QUFERixHQVZZO0FBYXBCUyxRQUFNLEVBQUU7QUFDSkMsTUFBRSxFQUFFLFdBREE7QUFFSkMsMEJBQXNCLEVBQUU7QUFGcEI7QUFiWSxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9zZXR0aW5ncy50cz83NGFhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBwaWxsYXI6IHtcbiAgICAgICAgaGVpZ2h0OiAxMCxcbiAgICAgICAgd2lkdGg6e21pbjoxMCxtYXg6MTB9LFxuICAgICAgICBzdGFydFBvc2l0aW9uOiB7eDoxMCx5OjEwfSxcbiAgICAgICAgbWF4Q291bnQ6MixcbiAgICB9LFxuICAgIGhlcm86IHtcbiAgICAgICAgc3RhcnRQb3NpdGlvbjogNjAsXG4gICAgfSxcbiAgICBCcmlkZ2U6IHtcbiAgICAgICAgd2lkdGg6MTAsXG4gICAgfSxcbiAgICBjYW52YXM6IHtcbiAgICAgICAgaWQ6ICdteS1jYW52YXMnLFxuICAgICAgICBDYW52YXNSZW5kZXJpbmdDb250ZXh0OiAnMmQnXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJwaWxsYXIiLCJoZWlnaHQiLCJ3aWR0aCIsIm1pbiIsIm1heCIsInN0YXJ0UG9zaXRpb24iLCJ4IiwieSIsIm1heENvdW50IiwiaGVybyIsIkJyaWRnZSIsImNhbnZhcyIsImlkIiwiQ2FudmFzUmVuZGVyaW5nQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktemplate_projet_examen"] = self["webpackChunktemplate_projet_examen"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;