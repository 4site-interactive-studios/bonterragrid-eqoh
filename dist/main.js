/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var getThemeOption = function getThemeOption(option) {
  try {
    if (typeof fs_theme_options !== "undefined" && fs_theme_options.hasOwnProperty(option)) {
      return fs_theme_options[option];
    }
  } catch (error) {
    console.warn("Error getting theme option:", error);
  }
  return null;
};
var setEFTMessage = function setEFTMessage() {
  try {
    var message = getThemeOption("eft_message");
    if (message) {
      var eftButtonWrapper = document.querySelector(".at-eft-button-wrapper label");
      if (eftButtonWrapper) {
        document.body.classList.add("has-eft-message");
        var messageMarkup = "<div class=\"eft-message\">".concat(message, "</div>");
        eftButtonWrapper.insertAdjacentHTML("afterend", messageMarkup);
      }
    }
  } catch (error) {
    console.warn("Error setting EFT message:", error);
  }
};
var setFrequencyListeners = function setFrequencyListeners() {
  try {
    var frequencies = document.querySelectorAll('input[name="SelectedFrequency"]');
    frequencies.forEach(function (frequency) {
      frequency.addEventListener("change", updatePaymentMethods);
    });
  } catch (error) {
    console.warn("Error setting frequency listeners:", error);
  }
};
var updatePaymentMethods = function updatePaymentMethods() {
  try {
    var eftField = document.querySelector(".at-eft-button-wrapper");
    if (eftField) {
      var selectedFrequency = document.querySelector('input[name="SelectedFrequency"]:checked');
      eftField.style.display = selectedFrequency && selectedFrequency.value === "0" ? "none" : "block";
    }
  } catch (error) {
    console.warn("Error updating payment methods:", error);
  }
};
var mobileImage = function mobileImage() {
  try {
    var img = document.querySelector(".responsive-hero img");
    if (img && !img.getAttribute("src")) {
      img.style.display = "none";
    }
  } catch (error) {
    console.warn("Error handling mobile image:", error);
  }
};
var displayAccordion = function displayAccordion() {
  console.log("displayAccordion running");
  try {
    // Select all accordion containers
    var accordionContainers = document.querySelectorAll(".accordions");
    if (accordionContainers.length > 0) {
      accordionContainers.forEach(function (container) {
        container.addEventListener("click", function (event) {
          // Ensure the clicked element is an accordion button
          if (event.target.classList.contains("accordion")) {
            console.log("Accordion clicked:", event.target);

            // Prevent multiple toggles by stopping the event propagation
            event.stopPropagation();

            // Toggle the 'active' class
            event.target.classList.toggle("active");
            console.log("Toggled active class:", event.target.classList);

            // Find the corresponding panel
            var panel = event.target.nextElementSibling;
            if (panel && panel.classList.contains("panel")) {
              // Toggle the display property of the panel
              panel.style.display = panel.style.display === "block" ? "none" : "block";
              console.log("Panel display style set to:", panel.style.display);
            } else {
              console.warn("No panel found for", event.target);
            }
          }
        });
      });
    } else {
      console.warn("Accordion containers not found");
    }
  } catch (error) {
    console.warn("Error displaying accordion:", error);
  }
};
var bgImage = function bgImage() {
  try {
    var mainImage = getThemeOption("main_background_image_url");
    if (mainImage) {
      var _bgImage = document.querySelector(".bg-image");
      if (_bgImage) {
        _bgImage.style.cssText = "background: url('".concat(mainImage, "'); background-repeat: no-repeat; background-size: cover; background-position: center center; background-color: #f7f7f7");
      }
    }
  } catch (error) {
    console.warn("Error setting background image:", error);
  }
};
var selectAmount = function selectAmount() {
  try {
    var labelAmount = document.querySelectorAll(".label-amount");
    var labelOtheramount = document.querySelector(".edit-otheramount");

    // Initialize the active label based on the selected radio button
    var activeFound = false;
    labelAmount.forEach(function (label) {
      var radio = label.querySelector('input[type="radio"]');
      if (radio.checked) {
        label.classList.add("active");
        activeFound = true;
      } else {
        label.classList.remove("active");
      }
    });

    // If no radio button is selected, set the first one as active by default
    if (!activeFound && labelAmount.length > 0) {
      labelAmount[0].classList.add("active");
      labelAmount[0].querySelector('input[type="radio"]').checked = true;
    }
    labelOtheramount.removeAttribute("required");
    labelOtheramount.value = "";
    labelOtheramount.addEventListener("focus", handleOtherAmountFocus);
    labelAmount.forEach(function (label) {
      var radio = label.querySelector('input[type="radio"]');
      radio.addEventListener("change", handleLabelAmountChange);
    });
  } catch (error) {
    console.warn("Error handling select amount:", error);
  }
};
var handleLabelAmountChange = function handleLabelAmountChange(e) {
  var labelAmount = document.querySelectorAll(".label-amount");
  labelAmount.forEach(function (label) {
    var radio = label.querySelector('input[type="radio"]');
    if (radio === e.target) {
      label.classList.add("active");
    } else {
      label.classList.remove("active");
    }
  });

  // Clear the other amount value if a predefined amount is selected
  var labelOtheramount = document.querySelector(".edit-otheramount");
  if (labelOtheramount) {
    labelOtheramount.value = "";
  }
};
var handleOtherAmountFocus = function handleOtherAmountFocus(e) {
  var labelAmount = document.querySelectorAll(".label-amount");
  labelAmount.forEach(function (label) {
    label.classList.remove("active");
    var radio = label.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = false;
    }
  });

  // Add active class to the other amount input
  e.currentTarget.parentNode.classList.add("active");
  e.currentTarget.previousElementSibling.checked = true;
};
var insertPremiums = function insertPremiums() {
  try {
    var premiums = getThemeOption("premiums");
    if (Array.isArray(premiums)) {
      var contributionInformation = document.querySelector(".ContributionInformation");
      if (contributionInformation) {
        premiums.forEach(function (premium) {
          if (premium.color && premium.body && premium.title) {
            var imageMarkup = premium.image_url ? "<div class=\"premium-image\"><img src=\"".concat(premium.image_url, "\" border=\"0\" alt=\"\" title=\"\" decoding=\"async\" width=\"230\" height=\"230\" /></div>") : "";
            var premiumMarkup = "\n              <div class=\"premium color-".concat(premium.color, "\">\n                ").concat(imageMarkup, "\n                <div class=\"premium-content\">\n                  <h2>").concat(premium.title, "</h2>\n                  <p>").concat(premium.body, "</p>\n                </div>\n              </div>\n            ");
            contributionInformation.insertAdjacentHTML("beforeend", premiumMarkup);
          }
        });
      }
    }
  } catch (error) {
    console.warn("Error inserting premiums:", error);
  }
};
var moveRadiosElements = function moveRadiosElements() {
  try {
    var selectedFrequency = document.querySelector(".form-item-selectedfrequency");
    if (!selectedFrequency) return;
    var radios = selectedFrequency.querySelector(".radios");
    var radioDescription = document.querySelector(".radio-description");
    var frequencyInputs = selectedFrequency.querySelectorAll("label input");
    var giveMonthly = document.querySelector(".at-radio-label-4");

    // Move Radio description outside radios div
    selectedFrequency.appendChild(radioDescription);

    // Move inputs outside label and add id/for
    frequencyInputs.forEach(function (input, index) {
      var label = input.parentNode;
      input.setAttribute("id", "id-".concat(index));
      label.setAttribute("for", "id-".concat(index));
      label.parentNode.insertBefore(input, label);
    });
    giveMonthly.textContent = "Give Monthly";

    // Add radios indicator div
    radios.insertAdjacentHTML("beforeend", '<div class="radios__indicator"></div>');
  } catch (error) {
    console.warn("Error moving radio elements:", error);
  }
};
var checkboxRadiobutton = function checkboxRadiobutton() {
  try {
    // Add checkmark to checkboxes
    var checkboxes = document.querySelectorAll("label.at-check");
    checkboxes.forEach(function (checkbox) {
      checkbox.insertAdjacentHTML("beforeend", '<div class="checkmark"></div>');
    });

    // Add checkmark to radio buttons
    var radioButtons = document.querySelectorAll("[class^='at-radio']");
    radioButtons.forEach(function (radio) {
      radio.insertAdjacentHTML("beforeend", '<div class="checkmark"></div>');
    });
  } catch (error) {
    console.warn("Error handling checkbox and radio buttons:", error);
  }
};
var isViewport = function isViewport() {
  try {
    var takeAction = document.querySelector(".take-action");
    if (!takeAction) return;
    if (takeAction.innerHTML.trim() !== "") {
      var target = document.querySelector(".FastAction, .ContributionInformation");
      var config = {
        rootMargin: "0px",
        threshold: 1.0
      };
      var callback = function callback(entries, observer) {
        entries.forEach(function (entry) {
          takeAction.style.display = entry.isIntersecting || entry.boundingClientRect.top <= 0 ? "none" : "";
        });
      };
      var observer = new IntersectionObserver(callback, config);
      observer.observe(target);
    } else {
      takeAction.style.display = "none";
    }
  } catch (error) {
    console.warn("Error handling viewport intersection:", error);
  }
};
var takeActionScroll = function takeActionScroll() {
  try {
    var takeAction = document.querySelector(".take-action");
    if (!takeAction) return;
    if (takeAction.innerHTML.trim() !== "") {
      takeAction.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".ContributionInformation").scrollIntoView({
          behavior: "smooth"
        });
      });
    }
  } catch (error) {
    console.warn("Error handling take action scroll:", error);
  }
};
var nextButton = function nextButton() {
  try {
    var _nextButton = document.querySelector(".nextStep");
    if (_nextButton) {
      _nextButton.innerHTML = "Continue";
    }
  } catch (error) {
    console.warn("Error updating next button:", error);
  }
};
var photoCredit = function photoCredit() {
  try {
    var _bgImage2 = document.querySelector(".bg-image");
    var responsiveHero = document.querySelector(".responsive-hero");
    if (!responsiveHero || !_bgImage2) return;
    var responsiveHeroImage = responsiveHero.querySelector("img");
    if (responsiveHeroImage && responsiveHeroImage.hasAttribute("title")) {
      var photoAttribute = responsiveHeroImage.getAttribute("title");
      var creditMarkup = "<div class=\"photoCredit\">".concat(photoAttribute, "</div>");
      if (!_bgImage2.querySelector(".photoCredit")) {
        _bgImage2.insertAdjacentHTML("beforeend", creditMarkup);
      }
      if (!responsiveHero.querySelector(".photoCredit")) {
        responsiveHero.insertAdjacentHTML("beforeend", creditMarkup);
      }
    }
  } catch (error) {
    console.warn("Error adding photo credit:", error);
  }
};
var createObserver = function createObserver(target, callback, config) {
  try {
    var observer = new MutationObserver(callback);
    observer.observe(target, config);
    return observer;
  } catch (error) {
    console.warn("Error creating observer:", error);
  }
};
var emptyBonterraGridInlineCSS = function emptyBonterraGridInlineCSS() {
  console.log("Running emptyBonterraGridInlineCSS");
  try {
    var styles = document.querySelectorAll("style[data-bonterragridinlinecss]");
    styles.forEach(function (style) {
      style.innerHTML = "";
      style.setAttribute("data-bonterragridinlinecss", "emptied");
      console.log("Emptied emptyBonterraGridInlineCSS");
      document.body.classList.add("showBody");
    });
  } catch (error) {
    console.warn("Error emptyBonterraGridInlineCSS:", error);
  }
};

// Global nvtag_callbacks handling
window.nvtag_callbacks = window.nvtag_callbacks || {};
var nvtag_callbacks = window.nvtag_callbacks;
nvtag_callbacks.postRender = nvtag_callbacks.postRender || [];

// Flag to prevent multiple `init` executions
var initExecuted = false;

// Add init to the postRender array
if (!nvtag_callbacks.postRender.includes(init)) {
  console.log("Adding init to nvtag_callbacks.postRender");
  nvtag_callbacks.postRender.push(init);
}

// Function to execute postRender callbacks
function executePostRenderCallbacks() {
  if (typeof nvtag_callbacks.postRender !== "undefined") {
    nvtag_callbacks.postRender.forEach(function (callback) {
      if (callback === init && !initExecuted) {
        moveBonterraGridCSS();
        callback();
        initExecuted = true; // Set flag after init has run
      } else if (callback !== init) {
        callback();
      }
    });
  } else {
    console.warn("nvtag_callbacks.postRender is undefined");
  }
}

// Function to observe changes in .ngp-form
function observeNgpForm(ngpForm) {
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.addedNodes.length > 0) {
        console.log("Content added to .ngp-form, executing postRender callbacks");
        observer.disconnect();
        executePostRenderCallbacks();
      }
    });
  });
  observer.observe(ngpForm, {
    childList: true,
    subtree: true
  });
}

// Function to initialize after DOMContentLoaded
function initializeAfterDOMLoaded() {
  console.log("DOMContentLoaded event fired or document already loaded");
  var ngpForm = document.querySelector(".ngp-form");
  if (ngpForm) {
    console.log(".ngp-form found, checking for content");
    if (ngpForm.innerHTML.trim() !== "") {
      console.log(".ngp-form already has content, executing postRender callbacks");
      executePostRenderCallbacks();
    } else {
      console.log(".ngp-form is empty, setting up MutationObserver");
      observeNgpForm(ngpForm);
    }
  } else {
    console.warn(".ngp-form not found");
  }
}

// Ensure init runs after DOM is fully loaded or immediately if already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeAfterDOMLoaded);
} else {
  initializeAfterDOMLoaded();
}
function moveBonterraGridCSS() {
  // Check for existing <style> elements with data-bonterragridcss and move them
  var existingStyles = document.querySelectorAll("style[data-bonterragridcss]");
  if (existingStyles.length > 0) {
    existingStyles.forEach(function (node) {
      console.log("Found existing <style> element:", node);
      document.body.appendChild(node);
      console.log("Moved existing <style> element with data-bonterragridcss to the end of <body>");
    });
  } else {
    console.log("No existing <style> elements with data-bonterragridcss found");
  }

  // Create a MutationObserver to watch for new additions
  var observer = new MutationObserver(function (mutationsList) {
    var _iterator = _createForOfIteratorHelper(mutationsList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach(function (node) {
            if (node.nodeType === 1 && node.tagName === "STYLE" && node.hasAttribute("data-bonterragridcss")) {
              console.log("Found new <style> element:", node);
              document.body.appendChild(node);
              console.log("Moved new <style> element with data-bonterragridcss to the end of <body>");
            }
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  var config = {
    childList: true,
    subtree: true
  };
  observer.observe(document.head, config);
  console.log("MutationObserver is now observing the <head> for changes");
}
function setEmbeddedAttributeBasedOnURL() {
  var currentURL = window.location.href;
  var isEmbedded = !currentURL.includes("everyaction.com");
  if (isEmbedded) {
    document.body.setAttribute("data-embedded", "true");
    console.log('Set data-embedded="true" on <body> because the URL is not everyaction.com');
  } else {
    document.body.setAttribute("data-embedded", "false");
    console.log('Set data-embedded="false" on <body> because the URL is everyaction.com');
  }
}
var handleRecurringCheckbox = function handleRecurringCheckbox() {
  // Select the checkbox element
  var recurringCheckbox = document.querySelector('input[type="checkbox"][name="IsRecurring"]');
  if (recurringCheckbox) {
    // Function to update the data attribute and label text based on the checkbox state
    var updateRecurringDataAttribute = function updateRecurringDataAttribute() {
      var labels = document.querySelectorAll("label.label-amount");
      labels.forEach(function (label) {
        var input = label.querySelector('input[type="radio"][name="SelectAmount"]');
        if (input) {
          var amountElement = input.nextSibling; // The text node containing the dollar amount
          if (amountElement && amountElement.nodeType === Node.TEXT_NODE) {
            var updatedText = amountElement.textContent.trim();
            if (recurringCheckbox.checked) {
              document.body.setAttribute("data-is-recurring", "Y");
              updatedText = updatedText.endsWith("/mo") ? updatedText : updatedText + "/mo";
            } else {
              document.body.removeAttribute("data-is-recurring");
              updatedText = updatedText.replace("/mo", "").trim();
            }
            amountElement.textContent = updatedText;

            // Update the "long" class based on text length and label-otheramount exclusion
            if (updatedText.length >= 7 && !label.classList.contains("label-otheramount")) {
              label.classList.add("long");
            } else {
              label.classList.remove("long");
            }
          }
        }
      });
    };

    // Initial update on page load
    updateRecurringDataAttribute();

    // Add event listener to update on state change
    recurringCheckbox.addEventListener("change", updateRecurringDataAttribute);
  } else {
    console.warn("Recurring checkbox not found");
  }
};
function init(args) {
  console.log("init function started");
  try {
    // Check if functions are defined before calling them
    if (typeof setEmbeddedAttributeBasedOnURL === "function") setEmbeddedAttributeBasedOnURL();
    if (typeof displayAccordion === "function") displayAccordion();
    if (typeof mobileImage === "function") mobileImage();
    if (typeof bgImage === "function") bgImage();
    if (typeof moveRadiosElements === "function") moveRadiosElements();
    if (typeof isViewport === "function") isViewport();
    if (typeof insertPremiums === "function") insertPremiums();
    if (typeof checkboxRadiobutton === "function") checkboxRadiobutton();
    if (typeof takeActionScroll === "function") takeActionScroll();
    if (typeof selectAmount === "function") selectAmount();
    if (typeof nextButton === "function") nextButton();
    if (typeof photoCredit === "function") photoCredit();
    if (typeof setFrequencyListeners === "function") setFrequencyListeners();
    if (typeof setEFTMessage === "function") setEFTMessage();
    if (typeof updatePaymentMethods === "function") updatePaymentMethods();
    if (typeof handleRecurringCheckbox === "function") handleRecurringCheckbox();
    if (typeof emptyBonterraGridInlineCSS === "function") emptyBonterraGridInlineCSS();
    if (typeof moveBonterraGridCSS === "function") moveBonterraGridCSS();
    var target = document.querySelector(".form-item-selectamount");
    if (target) {
      var config = {
        attributes: false,
        childList: true,
        subtree: true
      };
      createObserver(target, selectAmount, config);
      console.log("Observer created for .form-item-selectamount");
    }
  } catch (error) {
    console.warn("Initialization error:", error);
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {"attributes":{"data-bonterragridcss":""}};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:rgba(0,0,0,0)}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body{margin:0;padding:0;width:100%;font-family:\"Open Sans\",sans-serif;font-size:16px}body:not([data-embedded=true]):before{z-index:0;content:\"\";width:100vw;height:100vh;position:fixed;background:#fff;background:linear-gradient(180deg, rgb(255, 255, 255) 60%, rgb(240, 241, 242) 40%)}.at{position:initial}body[data-embedded=true] .multistep-layout.split-layout{max-width:1170px;min-width:initial}body[data-embedded=true] .multistep-layout.split-layout form{width:60%}body[data-embedded=true] .form-item-selectedfrequency .radios{margin-top:0 !important}body[data-embedded=true] .step-prevNext{padding-bottom:0}body[data-embedded=true] .at .btn-at{margin-bottom:0}body[data-embedded=true] .step-prevNext{gap:0 1rem}body[data-embedded=true] .secure-processing-div{margin-top:1rem}body[data-embedded=true] .at-inner{display:flex;gap:3rem;margin:0 -3rem}@media screen and (max-width: 960px){body[data-embedded=true] .at-inner{flex-direction:column;margin:-1rem 0;gap:1rem}body[data-embedded=true] .HeaderHtml,body[data-embedded=true] form{width:100% !important}}.bg-image,.responsive-hero{background-color:#f7f7f7}body.showBody .bonterragrid-container{opacity:1;transition:opacity .3s ease-in-out}img{max-width:100%;height:auto}h2{font-size:22px}.at{font-family:\"Open Sans\",sans-serif !important}.at-checkbox-title-container{padding-left:0 !important}.at input[type=checkbox]+span:before,.at input[type=checkbox]:checked+span:after{display:none !important}.at select{height:auto !important;font-size:14px !important;background-color:#f8f9f9 !important}header.at-title{display:none}.bonterragrid-container{display:flex}.multistep-layout .HeaderHtml p:first-of-type{padding-top:0px}.content-wrap{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;font-family:\"Open Sans\";font-weight:400;line-height:24px;z-index:50;max-width:640px;background-color:#fff}.bonterragrid-content{padding:20px 10px}@media(min-width: 382px){.bonterragrid-content{padding:20px}}@media(min-width: 412px){.bonterragrid-content{padding:21px 35px}}@media(min-width: 485px){.bonterragrid-content{padding:42px 70px}}.bonterragrid-content .multistep-layout .HeaderHtml p,.bonterragrid-content p{margin:16px 0;font-size:18px;line-height:24px;font-weight:400}.bonterragrid-footer{background-color:#f0f1f2;width:100%;padding:42px 70px;box-sizing:border-box}.bonterragrid-footer img{filter:grayscale(1);mix-blend-mode:darken}.bonterragrid-footer p{display:flex;gap:.25rem 1rem;flex-wrap:wrap}.bonterragrid-footer p>strong{min-width:max-content;display:block}.bonterragrid-footer p>strong a{text-decoration:none;font-family:\"Open Sans\";font-size:16px;font-weight:600;line-height:18px;color:#000}.bonterragrid-footer p>em{font-family:\"Open Sans\";font-size:14px;font-style:italic;font-weight:400;line-height:24px;letter-spacing:.01em;text-align:left}@media(max-width: 640px){.bonterragrid-footer{max-width:100%}}div[id^=nb-field-] div.nb-feedback div .nb-poweredby{display:none !important}.grecaptcha-badge{visibility:hidden}.responsive-hero{position:relative;display:flex;flex-direction:column}.responsive-hero .separator{width:auto;height:8px;background-image:url(\"data:image/svg+xml;charset=UTF-8, <svg width='457' height='3' viewBox='0 0 457 3' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(%23clip0)'><path d='M162.41 138.787L182.006 157.234L392.519 -40.9392L372.923 -59.3861L162.41 138.787Z' fill='white'/><path d='M182.006 157.234L201.602 175.681L412.115 -22.4917L392.519 -40.9387L182.006 157.234Z' fill='%232DC3E9'/><path d='M201.602 175.681L221.198 194.128L431.711 -4.04542L412.115 -22.4924L201.602 175.681Z' fill='%236A3A10'/><path d='M221.198 194.128L240.793 212.574L471.548 -4.65336L451.952 -23.1003L221.198 194.128Z' fill='%23402611'/><path d='M142.815 120.339L162.41 138.786L372.923 -59.3867L353.328 -77.8336L142.815 120.339Z' fill='%23F490B3'/><path d='M123.219 101.893L142.815 120.339L353.328 -77.8335L333.732 -96.2804L123.219 101.893Z' fill='%23EE2B77'/><path d='M103.623 83.4462L123.219 101.893L333.732 -96.2798L314.137 -114.727L103.623 83.4462Z' fill='%23F99D25'/><path d='M84.0282 64.9994L103.624 83.4463L314.137 -114.727L294.541 -133.174L84.0282 64.9994Z' fill='%23FFD200'/><path d='M84.028 64.9994L64.4322 46.5525L274.945 -151.62L294.541 -133.173L84.028 64.9994Z' fill='%2388C540'/><path d='M44.8366 28.105L64.4322 46.5519L274.945 -151.621L255.35 -170.068L44.8366 28.105Z' fill='%230080C0'/><path d='M25.2411 9.65864L44.8367 28.1056L255.35 -170.067L235.754 -188.514L25.2411 9.65864Z' fill='%230072BC'/><path d='M-9.96941 5.91096L9.62622 24.3579L235.754 -188.515L216.159 -206.962L-9.96941 5.91096Z' fill='%23643695'/></g><defs><clipPath id='clip0'><rect width='2.99998' height='457' fill='white' transform='translate(0 3.00006) rotate(-90)'/></clipPath></defs></svg>\");background-repeat:repeat-x;background-position:left bottom;margin-top:-5px}@media(min-width: 641px){.responsive-hero{display:none}}.bg-image{position:fixed;right:0;top:0;height:100vh;display:flex;width:calc(100vw - 640px)}@media(max-width: 640px){.bg-image{display:none}}@media(min-width: 641px){.bg-image:after{background-image:url(\"data:image/svg+xml;charset=UTF-8, <svg width='5' height='762' viewBox='0 0 5 762' fill='none' xmlns='http://www.w3.org/2000/svg'><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -257.058 303.476)' fill='white'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -287.804 336.15)' fill='%232DC3E9'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -318.548 368.824)' fill='%236A3A10'/><rect width='44.8646' height='528.317' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -349.293 401.498)' fill='%23402611'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -226.312 270.802)' fill='%23F490B3'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -195.567 238.129)' fill='%23EE2B77'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -164.823 205.455)' fill='%23F99D25'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -134.078 172.782)' fill='%23FFD200'/><path d='M-103.333 140.108L-72.5879 107.434L257.702 458.443L226.957 491.116L-103.333 140.108Z' fill='%2388C540'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -72.5869 107.434)' fill='%230080C0'/><rect width='44.8646' height='481.974' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -41.8428 74.7606)' fill='%230072BC'/><rect width='44.8646' height='517.725' transform='matrix(0.685287 -0.728273 0.685287 0.728273 -35.5967 16.0507)' fill='%23643695'/></svg>\");background-repeat:repeat-y;background-position:left top;content:\"\";display:block;width:5px}}.photoCredit{position:absolute;bottom:0;right:0;font-size:12px;font-family:\"Open Sans\",sans-serif;background:rgba(0,38,52,.24);color:#fff;padding:8px 42px}@media screen and (max-width: 641px){.photoCredit{bottom:3px}}.logo{max-width:100%;margin:0 4px;object-fit:contain}h1,h2,h3,h4,h5,h6{font-family:\"Montserrat\",sans-serif !important}h1{font-size:54px;line-height:50px;margin:36px 0px 6px 0px;font-weight:500}.accordions{margin:0 4px;box-sizing:border-box}.accordions .accordion{font-family:\"Open Sans\";font-size:18px;line-height:26px;position:relative;background:#fff;color:#000;cursor:pointer;padding:10px 18px 10px 0;text-align:left;border:0;outline:none;transition:background-color .2s ease-in-out;background-image:linear-gradient(to right, #000000 33%, rgba(255, 255, 255, 0) 0%);background-position:bottom;background-size:4px 1px;background-repeat:repeat-x}.accordions .accordion.hide-on-expand.active{display:none}.accordions .accordion::after{position:absolute;right:10px;content:url(\"data:image/svg+xml;charset=UTF-8, <svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none' viewBox='0 0 10 6'><path fill='%23002634' d='M5.2 6l4.548-4.536c.336-.335.336-.878 0-1.213-.336-.335-.88-.335-1.216 0L5.2 3.574 1.868.251c-.336-.335-.88-.335-1.216 0-.336.335-.336.878 0 1.213L5.2 6z'/></svg>\")}.accordions .active::after{position:absolute;right:10px;content:url(\"data:image/svg+xml;charset=UTF-8, <svg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.1999 -8.39259e-07L0.651743 4.53607C0.315953 4.87097 0.315958 5.41395 0.651753 5.74884C0.987541 6.08372 1.53195 6.08372 1.86773 5.74883L5.1999 2.42551L8.53208 5.74883C8.86786 6.08372 9.41227 6.08372 9.74805 5.74884C10.0839 5.41395 10.0839 4.87097 9.74806 4.53607L5.1999 -8.39259e-07Z' fill='%23002634'/></svg>\")}.accordions .panel{padding:0;display:none;overflow:hidden}.take-action{position:fixed;bottom:24px;left:24px;right:24px;width:auto;height:auto;padding:24px;background:#ee2b77;z-index:52;border-radius:0px;text-align:center;color:#fff;font-size:24px;font-family:\"Montserrat\",sans-serif;font-weight:700;cursor:pointer;max-width:calc(100% - 30vw);margin:0 auto}.take-action::after{position:absolute;right:24px;content:url(\"data:image/svg+xml;charset=UTF-8, <svg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.33439 8.93812L2.3344 8.93813L7.08801 13.2918L7.08801 1.34746C7.08801 1.09859 7.30578 0.91 7.55739 0.91L8.44261 0.91C8.69421 0.91 8.91198 1.09859 8.91198 1.34746L8.91198 13.2918L13.6656 8.93813C13.8482 8.77094 14.1412 8.77095 14.3237 8.93812L14.3237 8.93813L14.9497 9.5114C15.1368 9.68276 15.1368 9.96415 14.9497 10.1355L14.9497 10.1355L8.32907 16.1991C8.14651 16.3663 7.85354 16.3663 7.67096 16.1991L7.67096 16.1991L1.05035 10.1355C0.863217 9.96416 0.863214 9.68276 1.05035 9.5114C1.05035 9.5114 1.05035 9.5114 1.05036 9.5114L1.67629 8.93813C1.85884 8.77094 2.15182 8.77095 2.33439 8.93812Z' fill='white' stroke='white' stroke-width='0.18'/></svg>\")}@media(min-width: 641px){.take-action{display:none}}.premium{border-radius:0px;display:flex;margin:16px 4px 24px 4px;overflow:hidden}.premium.color-yellow{background-color:#f2e59f}.premium.color-teal{background-color:#0080c0}.premium.color-teal h2,.premium.color-teal p{color:#fff}.premium.color-pink{background-color:#ee2b77}.premium.color-pink h2,.premium.color-pink p{color:#fff}.premium.color-black{background-color:#002634}.premium.color-black h2,.premium.color-black p{color:#fff}.premium.color-blue{background-color:#0072bc}.premium.color-blue h2,.premium.color-blue p{color:#fff}.premium.color-purple{background-color:#dad0e7}.premium.color-purple h2,.premium.color-purple p{color:#000}.premium.color-ltgray{background-color:#8d939e}.premium.color-ltgray h2,.premium.color-ltgray p{color:#fff}.premium.color-dkgray{background-color:#555f6b}.premium.color-dkgray h2,.premium.color-dkgray p{color:#fff}.premium.color-brown{background-color:#6a3a10}.premium.color-brown h2,.premium.color-brown p{color:#fff}.premium .premium-image{flex:1 1 50%}.premium .premium-image img{height:100%;object-fit:cover}.premium .premium-content{padding:45px 22px 45px 14px;flex:1 1 50%}.premium .premium-content h2{font-family:\"Open Sans\";font-size:18px;font-weight:600;line-height:24px;text-align:left}.premium h2{margin:0 0 18px 0}.premium p{margin:0 !important}.premium img{width:230px}@media(max-width: 641px){.premium{justify-content:center;flex-wrap:wrap;flex-direction:column}.premium .premium-image{align-self:center}.premium .premium-image img{width:100%}.premium .premium-content{padding:1rem}}.at-form-submit{padding:0 !important;margin:0}.at-row>[class^=at-]{margin:0 !important;min-width:0 !important}.at-credit-card-button-wrapper .at-btn-radio,.at-eft-button-wrapper .at-btn-radio{background:#ee2b77 !important;padding:16px 74px !important;border-radius:0px !important;text-align:center !important;color:#fff !important;font-size:24px !important;font-family:\"Montserrat\",sans-serif !important;font-weight:700 !important;cursor:pointer !important;border:0 !important}.step-prevNext{display:grid;grid-template-columns:min-content auto;grid-template-rows:min-content min-content;grid-auto-rows:min-content;gap:1rem;grid-auto-flow:row;grid-template-areas:\"prev next\" \"secure-processing-div secure-processing-div\";justify-content:flex-end;align-items:center;padding-bottom:0}.step-prevNext .secure-processing-div{justify-self:center;align-self:center;grid-area:secure-processing-div}.step-prevNext .secure-processing-div label{text-align:center}.step-prevNext .prev{justify-self:center;align-self:center;grid-area:prev}.step-prevNext .prev a{padding-left:0;padding-right:0}.step-prevNext .next{justify-self:center;align-self:center;grid-area:next;max-width:320px}.step-prevNext .submitStep{position:relative !important}.prevStep{font-size:20px !important;font-family:\"Montserrat\",sans-serif !important;font-weight:normal !important;color:#8d939e !important}.at .btn-at{margin-bottom:0px}.at .btn-at-primary{background:#ee2b77 !important;padding:16px min(max(60px,2ch + 30px),max(5vw,2ch + 30px)) 16px min(60px,12vw) !important;border-radius:0px !important;text-align:center !important;color:#fff !important;font-size:24px !important;font-family:\"Montserrat\",sans-serif !important;font-weight:700 !important;cursor:pointer !important}.at .btn-at-primary::after{position:absolute;margin-left:1ch;top:calc(50% - 14px);content:url(\"data:image/svg+xml;charset=UTF-8, <svg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M8.81898 13.6656L8.81899 13.6656L13.1726 8.91199L1.22832 8.91199C0.979446 8.91199 0.79086 8.69422 0.79086 8.44261L0.790861 7.55739C0.790861 7.30579 0.979447 7.08802 1.22832 7.08802L13.1726 7.08802L8.81899 2.33438C8.6518 2.15183 8.65181 1.85885 8.81898 1.67628L8.81899 1.67627L9.39226 1.05033C9.56363 0.863222 9.84501 0.863232 10.0164 1.05032L10.0164 1.05033L16.0799 7.67094C16.2471 7.85349 16.2471 8.14646 16.0799 8.32904L16.0799 8.32905L10.0164 14.9496C9.84502 15.1368 9.56362 15.1368 9.39226 14.9497C9.39226 14.9497 9.39226 14.9496 9.39226 14.9496L8.81899 14.3237C8.6518 14.1412 8.65181 13.8482 8.81898 13.6656Z' fill='white' stroke='white' stroke-width='0.18'/></svg>\")}input:not(.edit-otheramount):focus-visible{outline:none !important;background:#fff !important;border:1px solid #80d1d5 !important}fieldset{padding:0;margin:0 4px 0 4px !important;border:0}.at .at-fieldset{padding:0 !important;min-width:0 !important}.at label{font-size:16px;font-weight:400;line-height:24px}label small:first-child{position:absolute;margin-left:1ch;font-weight:600 !important}.form-item-inhonororinmemoryof{display:flex;flex-direction:column}.form-item-inhonororinmemoryof label{display:none !important}label.at-text,label.at-select,label.at-area{font-family:\"Open Sans\";font-size:16px !important;font-weight:600 !important;line-height:18px !important}label.at-select>*{font-weight:400}.at select,.at .select2-selection,.at .select2-selection--single{display:flex;border-radius:0px;padding:14px 20px;border:1px solid #d6d8dc;width:100%;font-size:16px;box-sizing:border-box;height:48px !important;background-color:#f8f9f9;border-radius:0px;height:48px;box-sizing:border-box;margin-top:.25rem}.multistep-layout .HeaderHtml{padding:0 !important}.RecipientInfoHeaderHtml{margin-bottom:16px}input[type=tel][class*=intl-phone]{padding-left:46px !important}.fastAction{padding:0 4px !important}.FastAction{padding:0 !important}.at input[type=text],.at input[type=password],.at input[type=date],.at input[type=datetime],.at input[type=datetime-local],.at input[type=month],.at input[type=week],.at input[type=email],.at input[type=number],.at input[type=search],.at input[type=tel],.at input[type=time],.at input[type=url],.at input[type=color],.at textarea{display:flex;border-radius:0px;padding:14px 20px;border:1px solid #d6d8dc;width:100%;height:100%;font-size:16px;box-sizing:border-box;background:#f8f9f9;color:rgba(0,0,0,.75);margin-top:.25rem}.at input[type=radio]+label{color:#000 !important}.at input[type=radio]:checked+label{color:#fff !important}.intl-tel-input{margin-top:.25rem}.at input[type=number].edit-otheramount{margin-top:0 !important}.fa-lead{font-size:16px}.at-ecards .at-ecard{height:auto}input[type=radio][name=ecard]{display:none !important}.at-recurring{margin-left:4px;margin-right:4px;margin-bottom:.5rem}.FooterHtml{display:block !important;padding-bottom:0}.FooterHtml ul{margin-left:1.3rem !important}.FooterHtml p,.FooterHtml li{font-size:18px !important;line-height:24px;color:#000 !important}.FooterHtml em,.FooterHtml u,.FooterHtml strong{font-size:18px !important;color:#000 !important}.FooterHtml a{font-size:18px !important;color:#228ae6 !important;word-break:break-word}.FooterHtml p{margin:16px 0 !important}.vgs-cc-iframe-wrapper,.vgs-ccexpiration-iframe-wrapper{margin-top:.25rem}fieldset legend,.at-steps{display:none !important}fieldset.ContributionInformation{margin:0 !important}.form-item-selectedfrequency{margin:0}@media only screen and (max-width: 40em){.at form .label-amount:nth-child(2n+2){margin-right:4px !important}}.form-item-selectedfrequency .radios{position:relative;display:flex;align-items:center;padding:0 4px;margin:36px auto 8px auto !important;font-size:24px;color:#000;height:70px;background:#e5f4fa;border-radius:0px}.form-item-selectedfrequency .radios label{display:inline-block;width:50%;flex:0 1 auto;padding:1rem;text-align:center;cursor:pointer;transition:color 200ms ease-out;z-index:51;color:inherit !important;font-family:\"Montserrat\",sans-serif !important;text-shadow:none !important;font-size:20px !important;line-height:24px;font-weight:700}@media(min-width: 550px){.form-item-selectedfrequency .radios label{font-size:24px !important}}.form-item-selectedfrequency .radios__indicator{content:\"\";z-index:50;width:50%;height:62px;position:absolute;left:0;background:#0080c0;border-radius:0px;transition:transform 600ms cubic-bezier(0.02, 0.94, 0.09, 0.97),background 300ms cubic-bezier(0.17, 0.67, 0.14, 1.03);transform:translate3d(4px, 0, 0)}.form-item-selectedfrequency .radios input#id-0:checked~.radios__indicator{background:#0080c0;transform:translate3d(4px, 0, 0)}.form-item-selectedfrequency .radios input#id-1:checked~.radios__indicator{background:#0080c0;transform:translate3d(calc(100% - 4px), 0, 0)}.form-item-selectedfrequency .radios input[type=radio]:not(:checked),.form-item-selectedfrequency .radios input[type=radio]:checked{display:none}.radio-description{display:flex;font-family:\"Open Sans\",sans-serif;font-style:italic;margin-bottom:1rem;color:#000;font-size:14px;font-style:italic;font-weight:400;line-height:24px;letter-spacing:.01em}.radio-description::before{display:flex;margin-right:10px;content:url(\"data:image/svg+xml;charset=UTF-8, <svg width='12' height='30' viewBox='0 0 12 30' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M4.2 5.9038C1.86724 8.53428 0.444421 11.9797 0.444421 15.761C0.444422 21.789 4.04311 26.9766 9.22659 29.357C10.1163 29.7655 11.123 29.2508 11.4325 28.322C11.7453 27.3834 11.2249 26.3814 10.3426 25.9339C6.60875 24.0396 4.05558 20.1991 4.05558 15.761C4.05558 12.9661 5.09558 10.4285 6.77833 8.4485L10.2966 11.9306C10.928 12.5556 12 12.1083 12 11.2199L12 0.750003L1.42953 0.750004C0.536472 0.750004 0.0912864 1.8316 0.725585 2.46026L4.2 5.9038Z' fill='%230080C0'/></svg>\")}.form-item-selectamount .at-radios{display:flex;flex-direction:row;flex-wrap:wrap}.form-item-selectamount .at-radios .label-amount.active{color:#fff;transition:color .2s ease-in-out}.form-item-selectamount .at-radios .label-amount:nth-child(4n+4){margin-right:4px !important}.form-item-selectamount .at-radios .label-amount{display:flex;flex:1 1 25%;justify-content:center;align-items:center;color:#000;font-size:24px;line-height:26px !important;font-weight:700;padding:16px 20px;cursor:pointer;text-align:center;position:relative;margin:0 4px 8px 4px;font-family:\"Montserrat\",sans-serif;text-shadow:none !important}.form-item-selectamount .at-radios .label-amount .long{line-height:26px}@media(min-width: 641px){.form-item-selectamount .at-radios .label-amount{max-width:calc(25% - 8px)}}.form-item-selectamount .at-radios .label-amount a{position:absolute;top:0;right:0;height:100%;left:0;display:block;border:1px solid #0080c0;color:#fff;background-color:#fff;border-radius:0px;z-index:-1;transition:all .2s ease-in-out}.form-item-selectamount .at-radios .label-amount:hover{color:#fff}.form-item-selectamount .at-radios .label-amount:hover>a{background-color:#0080c0;border-color:#0080c0;transition:all .2s ease-in-out}.form-item-selectamount .at-radios .label-amount input[type=radio]{position:absolute !important;height:1px;width:1px;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);width:100% !important;font-size:.9375rem;margin-left:0;height:50px;min-height:0;padding:7px 10px 7px 1.5rem;outline:none;border:1px solid #d6d8dc;border-radius:4px;background-color:#fff;font-size:24px;line-height:1.428571429;font-weight:400;letter-spacing:-0.03em;max-width:100%;margin-bottom:0}.form-item-selectamount .at-radios .label-amount input[type=radio]:checked+a{background-color:#0080c0;border-color:#0080c0;transition:all .2s ease-in-out}.form-item-selectamount .at-radios .label-amount:has(input[type=radio]:checked){color:#fff}.form-item-selectamount .at-radios .label-otheramount{position:relative;background-color:rgba(0,0,0,0);font-size:0;padding:0;flex:auto;width:20% !important;max-width:none;height:66px;margin:0 4px 8px 4px !important}.form-item-selectamount .at-radios .label-otheramount.error{flex-flow:wrap}.form-item-selectamount .at-radios .label-otheramount.error .label-otheramount-prefix{color:#fff}.form-item-selectamount .at-radios .label-otheramount.active.error small.error{padding:.5rem;background:#fa5252;color:#fff}.form-item-selectamount .at-radios .label-otheramount.active input[type=number]{background-color:#0080c0;border-color:#0080c0;color:#fff}.form-item-selectamount .at-radios .label-otheramount input.edit-otheramount{border-radius:0px;padding:16px 27px;border:1px solid #d6d8dc;width:100%;height:100%;font-size:22px;box-sizing:border-box;background:#f8f9f9}.form-item-selectamount .at-radios .label-otheramount input.edit-otheramount::placeholder{color:#d4d7da}.form-item-selectamount .at-radios .label-otheramount input.edit-otheramount:focus{background-color:#0080c0;border-color:#0080c0;color:#fff}.form-item-selectamount .at-radios .label-otheramount input+.label-otheramount-prefix{display:block;position:absolute;color:#000;left:0;top:15px;font-size:15px;line-height:1.42857;padding:7px 0 7px 10px;border:1px solid rgba(0,0,0,0);text-shadow:none;font-size:20px;line-height:26px;padding-top:4px}.form-item-selectamount .at-radios .label-otheramount input:required{background-color:#0080c0;border-color:#0080c0;color:#fff;box-shadow:none}.at-check.CoverCostsAmount{margin-left:4px;margin-right:4px}.TributeGift .radios{display:flex !important}.TributeGift .HonoreeName{width:100%}.TributeGift .HonoreeName input{display:flex;border-radius:0px;padding:14px 20px;border:1px solid #d6d8dc;width:100%;height:100%;font-size:16px;box-sizing:border-box;background:#f8f9f9}.TributeGift label[class^=at-radio]{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;user-select:none;margin-right:12px}.TributeGift label[class^=at-radio] input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.TributeGift .checkmark{position:absolute;top:0;left:0;height:24px;width:24px;background-color:#fff;border:1px solid #d6d8dc;border-radius:50%}.TributeGift label[class^=at-radio] input:checked~.checkmark{background-color:#0080c0;border:1px solid #0080c0}.TributeGift .checkmark:after{content:\"\";position:absolute;display:none}.TributeGift label[class^=at-radio] input:checked~.checkmark:after{display:block}.TributeGift label[class^=at-radio] .checkmark:after{top:8px;left:8px;width:6px;height:6px;border-radius:50%;background:#fff}.at-recipient-info .at-row{flex-direction:column}.RecipientInfoHeaderHtml{flex-basis:100% !important}.at-check{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;user-select:none}.at-check input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.at-check .checkmark{position:absolute;top:0;left:0;height:22px;width:22px;background-color:#fff;border:1px solid #0080c0;border-radius:0px}.at-check input:checked~.checkmark{background-color:#0080c0;border:1px solid #0080c0}.at-check .checkmark:after{content:url(\"data:image/svg+xml;charset=UTF-8, <svg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M11.6485 2.11306L5.31801 8.63755C4.84923 9.12082 4.08879 9.12082 3.61956 8.63755L0.351719 5.26908C-0.11724 4.78581 -0.11724 4.00193 0.351719 3.51856C0.820766 3.03511 1.58114 3.03511 2.04998 3.51838L4.46904 6.01177L9.94997 0.362453C10.419 -0.121001 11.1795 -0.120635 11.6483 0.362453C12.1172 0.845816 12.1172 1.62943 11.6485 2.11306Z' fill='white'/></svg>\");position:absolute;top:-3px;left:4px;display:none;width:12px;height:9px}.at-check input:checked~.checkmark:after{display:block}.RecipientInformation{margin-bottom:50px}.RecipientInformation .at-recipient-info .at-title{font-size:22px !important;margin:0 !important}.RecipientInformation .RecipientEmailAddress,.RecipientInformation .NotificationMessage{width:100%}.RecipientInformation .RecipientEmailAddress input,.RecipientInformation .RecipientEmailAddress textarea,.RecipientInformation .NotificationMessage input,.RecipientInformation .NotificationMessage textarea{display:flex;border-radius:0px;padding:16px 20px;border:1px solid #d6d8dc;width:100%;height:100%;font-size:22px;box-sizing:border-box;background:#f8f9f9}.RecipientInformation .RecipientEmailAddress textarea,.RecipientInformation .NotificationMessage textarea{resize:vertical;font-size:16px}.RecipientInformation .at-row.at-row-solo.NotificationMessage{margin:0 !important}.PaymentMethodSection .at-radio-set-buttons input[type=radio]{display:none}.PaymentMethodSection .at-credit-card-button-wrapper,.PaymentMethodSection .at-eft-button-wrapper{display:flex;text-align:center;font-size:24px}.PaymentMethodSection .at-credit-card-button-wrapper .at-btn-radio,.PaymentMethodSection .at-eft-button-wrapper .at-btn-radio{background-color:#ee2b77;color:#fff;padding:19px 24px;border-radius:0px;width:100%}.PaymentMethodSection .eft-message{font-size:14px;line-height:24px;font-family:\"Open Sans\",sans-serif;font-style:italic;font-weight:400;margin-bottom:1rem;color:#0080c0;margin-bottom:20px !important}.has-eft-message .at-eft-button-wrapper label{margin-bottom:0px !important;padding-bottom:0px}.ContactInformation .at-fields .at-row,.RecipientInformation .at-fields .at-row{display:flex}.ContactInformation .at-fields .at-row label,.RecipientInformation .at-fields .at-row label{flex:1}.ContactInformation .at-fields .at-row label:not(:last-child),.RecipientInformation .at-fields .at-row label:not(:last-child){margin-right:8px !important}.ContactInformation .at-fields .at-row label.RecipientFirstName:not(:last-child),.ContactInformation .at-fields .at-row label.RecipientCountry:not(:last-child),.ContactInformation .at-fields .at-row label.RecipientPostalCode:not(:last-child),.ContactInformation .at-fields .at-row label.RecipientCity:not(:last-child),.RecipientInformation .at-fields .at-row label.RecipientFirstName:not(:last-child),.RecipientInformation .at-fields .at-row label.RecipientCountry:not(:last-child),.RecipientInformation .at-fields .at-row label.RecipientPostalCode:not(:last-child),.RecipientInformation .at-fields .at-row label.RecipientCity:not(:last-child){margin-right:0px !important}.ContactInformation .at-fields .at-row label.error input,.RecipientInformation .at-fields .at-row label.error input{outline:none !important;background:#fffbfc !important;border:1px solid #fcdde9 !important}.ContactInformation .at-fields .at-row label.error small.error,.RecipientInformation .at-fields .at-row label.error small.error{color:#ee2b77}.ContactInformation .at-fields .at-row input,.ContactInformation .at-fields .at-row select,.RecipientInformation .at-fields .at-row input,.RecipientInformation .at-fields .at-row select{display:flex;border-radius:0px;padding:14px 20px;border:1px solid #d6d8dc;width:100%;font-size:16px;box-sizing:border-box}.ContactInformation .at-fields .at-row input,.RecipientInformation .at-fields .at-row input{background:#f8f9f9;height:48px}.ContactInformation .at-fields .at-row select,.RecipientInformation .at-fields .at-row select{height:48px !important}.ContactInformation .at-fields .at-row.PostalCode.City.StateProvince,.RecipientInformation .at-fields .at-row.PostalCode.City.StateProvince{justify-content:flex-start}.ContactInformation .at-fields .at-row.PostalCode.City.StateProvince label,.RecipientInformation .at-fields .at-row.PostalCode.City.StateProvince label{flex:1 1 0px !important}.PaymentInformation label{font-size:14px}.PaymentInformation .vgs-cc-iframe-wrapper iframe,.PaymentInformation .vgs-ccexpiration-iframe-wrapper iframe{display:flex;border-radius:0px;border:1px solid #d6d8dc;width:100%;font-size:16px;box-sizing:border-box;background:#fff}.PaymentInformation .at-cc-number{margin-right:8px !important}.PaymentInformation .css-kaihww{background-color:#f8f9f9 !important}.button-pink .at-credit-card-button-wrapper .at-btn-radio,.button-pink .at-eft-button-wrapper .at-btn-radio{background:#ee2b77 !important}.button-pink .prevNext .submitStep,.button-pink .prevNext .nextStep{background:#ee2b77 !important}.button-pink .take-action{background:#ee2b77 !important}.button-pink input[type=submit]{background:#ee2b77 !important}.button-teal .at-credit-card-button-wrapper .at-btn-radio,.button-teal .at-eft-button-wrapper .at-btn-radio{background:#0080c0 !important}.button-teal .prevNext .submitStep,.button-teal .prevNext .nextStep{background:#0080c0 !important}.button-teal .take-action{background:#0080c0 !important}.button-teal input[type=submit]{background:#0080c0 !important}.button-black .at-credit-card-button-wrapper .at-btn-radio,.button-black .at-eft-button-wrapper .at-btn-radio{background:#002634 !important}.button-black .prevNext .submitStep,.button-black .prevNext .nextStep{background:#002634 !important}.button-black .take-action{background:#002634 !important}.button-black input[type=submit]{background:#002634 !important}.button-blue .at-credit-card-button-wrapper .at-btn-radio,.button-blue .at-eft-button-wrapper .at-btn-radio{background:#0072bc !important}.button-blue .prevNext .submitStep,.button-blue .prevNext .nextStep{background:#0072bc !important}.button-blue .take-action{background:#0072bc !important}.button-blue input[type=submit]{background:#0072bc !important}.button-purple .at-credit-card-button-wrapper .at-btn-radio,.button-purple .at-eft-button-wrapper .at-btn-radio{background:#643695 !important}.button-purple .prevNext .submitStep,.button-purple .prevNext .nextStep{background:#643695 !important}.button-purple .take-action{background:#643695 !important}.button-purple input[type=submit]{background:#643695 !important}.button-ltgray .at-credit-card-button-wrapper .at-btn-radio,.button-ltgray .at-eft-button-wrapper .at-btn-radio{background:#8d939e !important}.button-ltgray .prevNext .submitStep,.button-ltgray .prevNext .nextStep{background:#8d939e !important}.button-ltgray .take-action{background:#8d939e !important}.button-ltgray input[type=submit]{background:#8d939e !important}.button-dkgray .at-credit-card-button-wrapper .at-btn-radio,.button-dkgray .at-eft-button-wrapper .at-btn-radio{background:#555f6b !important}.button-dkgray .prevNext .submitStep,.button-dkgray .prevNext .nextStep{background:#555f6b !important}.button-dkgray .take-action{background:#555f6b !important}.button-dkgray input[type=submit]{background:#555f6b !important}.button-brown .at-credit-card-button-wrapper .at-btn-radio,.button-brown .at-eft-button-wrapper .at-btn-radio{background:#6a3a10 !important}.button-brown .prevNext .submitStep,.button-brown .prevNext .nextStep{background:#6a3a10 !important}.button-brown .take-action{background:#6a3a10 !important}.button-brown input[type=submit]{background:#6a3a10 !important}@font-face{font-family:\"Montserrat\";font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRxC7m0dR9pBOi.woff2) format(\"woff2\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:\"Montserrat\";font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRzS7m0dR9pBOi.woff2) format(\"woff2\");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:\"Montserrat\";font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRxi7m0dR9pBOi.woff2) format(\"woff2\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:\"Montserrat\";font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRxy7m0dR9pBOi.woff2) format(\"woff2\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:\"Montserrat\";font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUQjIg1_i6t8kCHKm459WxRyS7m0dR9pA.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:\"Montserrat\";font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format(\"woff2\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:\"Montserrat\";font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format(\"woff2\");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:\"Montserrat\";font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format(\"woff2\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:\"Montserrat\";font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format(\"woff2\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:\"Open Sans\";font-style:italic;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWtE6FxZCJgvAQ.woff2) format(\"woff2\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:\"Open Sans\";font-style:italic;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWvU6FxZCJgvAQ.woff2) format(\"woff2\");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:\"Open Sans\";font-style:italic;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWtU6FxZCJgvAQ.woff2) format(\"woff2\");unicode-range:U+1F00-1FFF}@font-face{font-family:\"Open Sans\";font-style:italic;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWuk6FxZCJgvAQ.woff2) format(\"woff2\");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:\"Open Sans\";font-style:italic;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWu06FxZCJgvAQ.woff2) format(\"woff2\");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:\"Open Sans\";font-style:italic;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWxU6FxZCJgvAQ.woff2) format(\"woff2\");unicode-range:U+0302-0303,U+0305,U+0307-0308,U+0330,U+0391-03A1,U+03A3-03A9,U+03B1-03C9,U+03D1,U+03D5-03D6,U+03F0-03F1,U+03F4-03F5,U+2034-2037,U+2057,U+20D0-20DC,U+20E1,U+20E5-20EF,U+2102,U+210A-210E,U+2110-2112,U+2115,U+2119-211D,U+2124,U+2128,U+212C-212D,U+212F-2131,U+2133-2138,U+213C-2140,U+2145-2149,U+2190,U+2192,U+2194-21AE,U+21B0-21E5,U+21F1-21F2,U+21F4-2211,U+2213-2214,U+2216-22FF,U+2308-230B,U+2310,U+2319,U+231C-2321,U+2336-237A,U+237C,U+2395,U+239B-23B6,U+23D0,U+23DC-23E1,U+2474-2475,U+25AF,U+25B3,U+25B7,U+25BD,U+25C1,U+25CA,U+25CC,U+25FB,U+266D-266F,U+27C0-27FF,U+2900-2AFF,U+2B0E-2B11,U+2B30-2B4C,U+2BFE,U+FF5B,U+FF5D,U+1D400-1D7FF,U+1EE00-1EEFF}@font-face{font-family:\"Open Sans\";font-style:italic;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqW106FxZCJgvAQ.woff2) format(\"woff2\");unicode-range:U+0001-000C,U+000E-001F,U+007F-009F,U+20DD-20E0,U+20E2-20E4,U+2150-218F,U+2190,U+2192,U+2194-2199,U+21AF,U+21E6-21F0,U+21F3,U+2218-2219,U+2299,U+22C4-22C6,U+2300-243F,U+2440-244A,U+2460-24FF,U+25A0-27BF,U+2800-28FF,U+2921-2922,U+2981,U+29BF,U+29EB,U+2B00-2BFF,U+4DC0-4DFF,U+FFF9-FFFB,U+10140-1018E,U+10190-1019C,U+101A0,U+101D0-101FD,U+102E0-102FB,U+10E60-10E7E,U+1D2C0-1D2D3,U+1D2E0-1D37F,U+1F000-1F0FF,U+1F100-1F1AD,U+1F1E6-1F1FF,U+1F30D-1F30F,U+1F315,U+1F31C,U+1F31E,U+1F320-1F32C,U+1F336,U+1F378,U+1F37D,U+1F382,U+1F393-1F39F,U+1F3A7-1F3A8,U+1F3AC-1F3AF,U+1F3C2,U+1F3C4-1F3C6,U+1F3CA-1F3CE,U+1F3D4-1F3E0,U+1F3ED,U+1F3F1-1F3F3,U+1F3F5-1F3F7,U+1F408,U+1F415,U+1F41F,U+1F426,U+1F43F,U+1F441-1F442,U+1F444,U+1F446-1F449,U+1F44C-1F44E,U+1F453,U+1F46A,U+1F47D,U+1F4A3,U+1F4B0,U+1F4B3,U+1F4B9,U+1F4BB,U+1F4BF,U+1F4C8-1F4CB,U+1F4D6,U+1F4DA,U+1F4DF,U+1F4E3-1F4E6,U+1F4EA-1F4ED,U+1F4F7,U+1F4F9-1F4FB,U+1F4FD-1F4FE,U+1F503,U+1F507-1F50B,U+1F50D,U+1F512-1F513,U+1F53E-1F54A,U+1F54F-1F5FA,U+1F610,U+1F650-1F67F,U+1F687,U+1F68D,U+1F691,U+1F694,U+1F698,U+1F6AD,U+1F6B2,U+1F6B9-1F6BA,U+1F6BC,U+1F6C6-1F6CF,U+1F6D3-1F6D7,U+1F6E0-1F6EA,U+1F6F0-1F6F3,U+1F6F7-1F6FC,U+1F700-1F7FF,U+1F800-1F80B,U+1F810-1F847,U+1F850-1F859,U+1F860-1F887,U+1F890-1F8AD,U+1F8B0-1F8B1,U+1F900-1F90B,U+1F93B,U+1F946,U+1F984,U+1F996,U+1F9E9,U+1FA00-1FA6F,U+1FA70-1FA7C,U+1FA80-1FA88,U+1FA90-1FABD,U+1FABF-1FAC5,U+1FACE-1FADB,U+1FAE0-1FAE8,U+1FAF0-1FAF8,U+1FB00-1FBFF}@font-face{font-family:\"Open Sans\";font-style:italic;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWtk6FxZCJgvAQ.woff2) format(\"woff2\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:\"Open Sans\";font-style:italic;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWt06FxZCJgvAQ.woff2) format(\"woff2\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:\"Open Sans\";font-style:normal;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSKmu0SC55K5gw.woff2) format(\"woff2\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:\"Open Sans\";font-style:normal;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSumu0SC55K5gw.woff2) format(\"woff2\");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:\"Open Sans\";font-style:normal;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSOmu0SC55K5gw.woff2) format(\"woff2\");unicode-range:U+1F00-1FFF}@font-face{font-family:\"Open Sans\";font-style:normal;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSymu0SC55K5gw.woff2) format(\"woff2\");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:\"Open Sans\";font-style:normal;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS2mu0SC55K5gw.woff2) format(\"woff2\");unicode-range:U+0590-05FF,U+200C-2010,U+20AA,U+25CC,U+FB1D-FB4F}@font-face{font-family:\"Open Sans\";font-style:normal;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTVOmu0SC55K5gw.woff2) format(\"woff2\");unicode-range:U+0302-0303,U+0305,U+0307-0308,U+0330,U+0391-03A1,U+03A3-03A9,U+03B1-03C9,U+03D1,U+03D5-03D6,U+03F0-03F1,U+03F4-03F5,U+2034-2037,U+2057,U+20D0-20DC,U+20E1,U+20E5-20EF,U+2102,U+210A-210E,U+2110-2112,U+2115,U+2119-211D,U+2124,U+2128,U+212C-212D,U+212F-2131,U+2133-2138,U+213C-2140,U+2145-2149,U+2190,U+2192,U+2194-21AE,U+21B0-21E5,U+21F1-21F2,U+21F4-2211,U+2213-2214,U+2216-22FF,U+2308-230B,U+2310,U+2319,U+231C-2321,U+2336-237A,U+237C,U+2395,U+239B-23B6,U+23D0,U+23DC-23E1,U+2474-2475,U+25AF,U+25B3,U+25B7,U+25BD,U+25C1,U+25CA,U+25CC,U+25FB,U+266D-266F,U+27C0-27FF,U+2900-2AFF,U+2B0E-2B11,U+2B30-2B4C,U+2BFE,U+FF5B,U+FF5D,U+1D400-1D7FF,U+1EE00-1EEFF}@font-face{font-family:\"Open Sans\";font-style:normal;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTUGmu0SC55K5gw.woff2) format(\"woff2\");unicode-range:U+0001-000C,U+000E-001F,U+007F-009F,U+20DD-20E0,U+20E2-20E4,U+2150-218F,U+2190,U+2192,U+2194-2199,U+21AF,U+21E6-21F0,U+21F3,U+2218-2219,U+2299,U+22C4-22C6,U+2300-243F,U+2440-244A,U+2460-24FF,U+25A0-27BF,U+2800-28FF,U+2921-2922,U+2981,U+29BF,U+29EB,U+2B00-2BFF,U+4DC0-4DFF,U+FFF9-FFFB,U+10140-1018E,U+10190-1019C,U+101A0,U+101D0-101FD,U+102E0-102FB,U+10E60-10E7E,U+1D2C0-1D2D3,U+1D2E0-1D37F,U+1F000-1F0FF,U+1F100-1F1AD,U+1F1E6-1F1FF,U+1F30D-1F30F,U+1F315,U+1F31C,U+1F31E,U+1F320-1F32C,U+1F336,U+1F378,U+1F37D,U+1F382,U+1F393-1F39F,U+1F3A7-1F3A8,U+1F3AC-1F3AF,U+1F3C2,U+1F3C4-1F3C6,U+1F3CA-1F3CE,U+1F3D4-1F3E0,U+1F3ED,U+1F3F1-1F3F3,U+1F3F5-1F3F7,U+1F408,U+1F415,U+1F41F,U+1F426,U+1F43F,U+1F441-1F442,U+1F444,U+1F446-1F449,U+1F44C-1F44E,U+1F453,U+1F46A,U+1F47D,U+1F4A3,U+1F4B0,U+1F4B3,U+1F4B9,U+1F4BB,U+1F4BF,U+1F4C8-1F4CB,U+1F4D6,U+1F4DA,U+1F4DF,U+1F4E3-1F4E6,U+1F4EA-1F4ED,U+1F4F7,U+1F4F9-1F4FB,U+1F4FD-1F4FE,U+1F503,U+1F507-1F50B,U+1F50D,U+1F512-1F513,U+1F53E-1F54A,U+1F54F-1F5FA,U+1F610,U+1F650-1F67F,U+1F687,U+1F68D,U+1F691,U+1F694,U+1F698,U+1F6AD,U+1F6B2,U+1F6B9-1F6BA,U+1F6BC,U+1F6C6-1F6CF,U+1F6D3-1F6D7,U+1F6E0-1F6EA,U+1F6F0-1F6F3,U+1F6F7-1F6FC,U+1F700-1F7FF,U+1F800-1F80B,U+1F810-1F847,U+1F850-1F859,U+1F860-1F887,U+1F890-1F8AD,U+1F8B0-1F8B1,U+1F900-1F90B,U+1F93B,U+1F946,U+1F984,U+1F996,U+1F9E9,U+1FA00-1FA6F,U+1FA70-1FA7C,U+1FA80-1FA88,U+1FA90-1FABD,U+1FABF-1FAC5,U+1FACE-1FADB,U+1FAE0-1FAE8,U+1FAF0-1FAF8,U+1FB00-1FBFF}@font-face{font-family:\"Open Sans\";font-style:normal;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSCmu0SC55K5gw.woff2) format(\"woff2\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:\"Open Sans\";font-style:normal;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/opensans/v40/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu0SC55K5gw.woff2) format(\"woff2\");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:\"Montserrat\";font-style:normal;font-weight:100 900;font-display:swap;src:url(https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/28241/images/4Site%20EQOH/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:\"Open Sans\";font-style:normal;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/28241/images/4Site%20EQOH/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-mu0SC55I.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:\"Open Sans\";font-style:italic;font-weight:300 800;font-stretch:100%;font-display:swap;src:url(https://nvlupin.blob.core.windows.net/images/van/AV/AVEA/1/28241/images/4Site%20EQOH/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWuU6FxZCJgg.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ })
/******/ ]);