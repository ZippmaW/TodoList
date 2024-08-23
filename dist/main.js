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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n\n\n\nconst display = document.querySelector(\".content\");\n\nconst appArray = [];\n\nconst addNewProject = (project) => appArray.push(project);\nconst removeProject = (project) =>\n  appArray.splice(\n    appArray.findIndex((a) => a.title === project.title),\n    1\n  );\nconst addNewTask = (project, task) => project.tasks.push(task);\nconst removeTask = (project) => {\n  const test = project.tasks[1].title;\n  project.tasks.splice(\n    project.tasks.findIndex((a) => a.title === test),\n    1\n  );\n};\n\nconst proj1 = new _modules_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Supa1\", \"Very supah\");\nconst proj2 = new _modules_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Bombastic1\", \"Extra bombastic1\");\nconst proj3 = new _modules_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Bombastic2\", \"Extra bombastic2\");\nconst task1 = new _modules_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Titla1\", \"Mucho supah\", \"02.04.2026\", \"Top\");\nconst task2 = new _modules_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Titla2\", \"Mucho supah\", \"02.04.2026\", \"Top\");\nconst task3 = new _modules_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Titla3\", \"Mucho supah\", \"02.04.2026\", \"Top\");\n/* const taskTest = appArray[0].tasks[1].getTitle(); */\n\naddNewProject(proj1);\naddNewProject(proj2);\naddNewProject(proj3);\naddNewTask(appArray[0], task1);\naddNewTask(appArray[0], task2);\naddNewTask(appArray[0], task3);\nremoveTask(appArray[0]);\n\nconsole.table(appArray);\nconsole.table(appArray[0].tasks);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdDO0FBQ047O0FBRWxDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHdEQUFPO0FBQ3pCLGtCQUFrQix3REFBTztBQUN6QixrQkFBa0Isd0RBQU87QUFDekIsa0JBQWtCLHFEQUFJO0FBQ3RCLGtCQUFrQixxREFBSTtBQUN0QixrQkFBa0IscURBQUk7QUFDdEIscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL21vZHVsZXMvdGFza1wiO1xuXG5jb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG5jb25zdCBhcHBBcnJheSA9IFtdO1xuXG5jb25zdCBhZGROZXdQcm9qZWN0ID0gKHByb2plY3QpID0+IGFwcEFycmF5LnB1c2gocHJvamVjdCk7XG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+XG4gIGFwcEFycmF5LnNwbGljZShcbiAgICBhcHBBcnJheS5maW5kSW5kZXgoKGEpID0+IGEudGl0bGUgPT09IHByb2plY3QudGl0bGUpLFxuICAgIDFcbiAgKTtcbmNvbnN0IGFkZE5ld1Rhc2sgPSAocHJvamVjdCwgdGFzaykgPT4gcHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuY29uc3QgcmVtb3ZlVGFzayA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRlc3QgPSBwcm9qZWN0LnRhc2tzWzFdLnRpdGxlO1xuICBwcm9qZWN0LnRhc2tzLnNwbGljZShcbiAgICBwcm9qZWN0LnRhc2tzLmZpbmRJbmRleCgoYSkgPT4gYS50aXRsZSA9PT0gdGVzdCksXG4gICAgMVxuICApO1xufTtcblxuY29uc3QgcHJvajEgPSBuZXcgUHJvamVjdChcIlN1cGExXCIsIFwiVmVyeSBzdXBhaFwiKTtcbmNvbnN0IHByb2oyID0gbmV3IFByb2plY3QoXCJCb21iYXN0aWMxXCIsIFwiRXh0cmEgYm9tYmFzdGljMVwiKTtcbmNvbnN0IHByb2ozID0gbmV3IFByb2plY3QoXCJCb21iYXN0aWMyXCIsIFwiRXh0cmEgYm9tYmFzdGljMlwiKTtcbmNvbnN0IHRhc2sxID0gbmV3IFRhc2soXCJUaXRsYTFcIiwgXCJNdWNobyBzdXBhaFwiLCBcIjAyLjA0LjIwMjZcIiwgXCJUb3BcIik7XG5jb25zdCB0YXNrMiA9IG5ldyBUYXNrKFwiVGl0bGEyXCIsIFwiTXVjaG8gc3VwYWhcIiwgXCIwMi4wNC4yMDI2XCIsIFwiVG9wXCIpO1xuY29uc3QgdGFzazMgPSBuZXcgVGFzayhcIlRpdGxhM1wiLCBcIk11Y2hvIHN1cGFoXCIsIFwiMDIuMDQuMjAyNlwiLCBcIlRvcFwiKTtcbi8qIGNvbnN0IHRhc2tUZXN0ID0gYXBwQXJyYXlbMF0udGFza3NbMV0uZ2V0VGl0bGUoKTsgKi9cblxuYWRkTmV3UHJvamVjdChwcm9qMSk7XG5hZGROZXdQcm9qZWN0KHByb2oyKTtcbmFkZE5ld1Byb2plY3QocHJvajMpO1xuYWRkTmV3VGFzayhhcHBBcnJheVswXSwgdGFzazEpO1xuYWRkTmV3VGFzayhhcHBBcnJheVswXSwgdGFzazIpO1xuYWRkTmV3VGFzayhhcHBBcnJheVswXSwgdGFzazMpO1xucmVtb3ZlVGFzayhhcHBBcnJheVswXSk7XG5cbmNvbnNvbGUudGFibGUoYXBwQXJyYXkpO1xuY29uc29sZS50YWJsZShhcHBBcnJheVswXS50YXNrcyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(title, description) {\n    this.title = title;\n    this.description = description;\n    this.tasks = [];\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcz9lYThhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/project.js\n");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n  getTitle() {\n    return this.title;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzPzdjNmYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/task.js\n");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;