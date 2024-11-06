import scss from "./sass/main.scss";

const getThemeOption = (option) => {
  try {
    if (
      typeof fs_theme_options !== "undefined" &&
      fs_theme_options.hasOwnProperty(option)
    ) {
      return fs_theme_options[option];
    }
  } catch (error) {
    console.warn("Error getting theme option:", error);
  }
  return null;
};

const setEFTMessage = () => {
  try {
    const message = getThemeOption("eft_message");
    if (message) {
      const eftButtonWrapper = document.querySelector(
        ".at-eft-button-wrapper label"
      );
      if (eftButtonWrapper) {
        document.body.classList.add("has-eft-message");
        const messageMarkup = `<div class="eft-message">${message}</div>`;
        eftButtonWrapper.insertAdjacentHTML("afterend", messageMarkup);
      }
    }
  } catch (error) {
    console.warn("Error setting EFT message:", error);
  }
};

const setFrequencyListeners = () => {
  try {
    const frequencies = document.querySelectorAll(
      'input[name="SelectedFrequency"]'
    );
    frequencies.forEach((frequency) => {
      frequency.addEventListener("change", updatePaymentMethods);
    });
  } catch (error) {
    console.warn("Error setting frequency listeners:", error);
  }
};

const updatePaymentMethods = () => {
  try {
    const eftField = document.querySelector(".at-eft-button-wrapper");
    if (eftField) {
      const selectedFrequency = document.querySelector(
        'input[name="SelectedFrequency"]:checked'
      );
      eftField.style.display =
        selectedFrequency && selectedFrequency.value === "0" ? "none" : "block";
    }
  } catch (error) {
    console.warn("Error updating payment methods:", error);
  }
};

const mobileImage = () => {
  try {
    const img = document.querySelector(".responsive-hero img");
    if (img && !img.getAttribute("src")) {
      img.style.display = "none";
    }
  } catch (error) {
    console.warn("Error handling mobile image:", error);
  }
};

const displayAccordion = () => {
  console.log("displayAccordion running");
  try {
    // Select all accordion containers
    const accordionContainers = document.querySelectorAll(".accordions");

    if (accordionContainers.length > 0) {
      accordionContainers.forEach((container) => {
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
            const panel = event.target.nextElementSibling;
            if (panel && panel.classList.contains("panel")) {
              // Toggle the display property of the panel
              panel.style.display =
                panel.style.display === "block" ? "none" : "block";
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

const bgImage = () => {
  try {
    const mainImage = getThemeOption("main_background_image_url");
    if (mainImage) {
      const bgImage = document.querySelector(".bg-image");
      if (bgImage) {
        bgImage.style.cssText = `background: url('${mainImage}'); background-repeat: no-repeat; background-size: cover; background-position: center center; background-color: #f7f7f7`;
      }
    }
  } catch (error) {
    console.warn("Error setting background image:", error);
  }
};

const selectAmount = () => {
  try {
    const labelAmount = document.querySelectorAll(".label-amount");
    const labelOtheramount = document.querySelector(".edit-otheramount");

    // Initialize the active label based on the selected radio button
    let activeFound = false;
    labelAmount.forEach((label) => {
      const radio = label.querySelector('input[type="radio"]');
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

    labelAmount.forEach((label) => {
      const radio = label.querySelector('input[type="radio"]');
      radio.addEventListener("change", handleLabelAmountChange);
    });
  } catch (error) {
    console.warn("Error handling select amount:", error);
  }
};

const handleLabelAmountChange = (e) => {
  const labelAmount = document.querySelectorAll(".label-amount");
  labelAmount.forEach((label) => {
    const radio = label.querySelector('input[type="radio"]');
    if (radio === e.target) {
      label.classList.add("active");
    } else {
      label.classList.remove("active");
    }
  });

  // Clear the other amount value if a predefined amount is selected
  const labelOtheramount = document.querySelector(".edit-otheramount");
  if (labelOtheramount) {
    labelOtheramount.value = "";
  }
};

const handleOtherAmountFocus = (e) => {
  const labelAmount = document.querySelectorAll(".label-amount");
  labelAmount.forEach((label) => {
    label.classList.remove("active");
    const radio = label.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = false;
    }
  });

  // Add active class to the other amount input
  e.currentTarget.parentNode.classList.add("active");
  e.currentTarget.previousElementSibling.checked = true;
};

const insertPremiums = () => {
  try {
    const premiums = getThemeOption("premiums");
    if (Array.isArray(premiums)) {
      const contributionInformation = document.querySelector(
        ".ContributionInformation"
      );
      if (contributionInformation) {
        premiums.forEach((premium) => {
          if (premium.color && premium.body && premium.title) {
            const imageMarkup = premium.image_url
              ? `<div class="premium-image"><img src="${premium.image_url}" border="0" alt="" title="" decoding="async" width="230" height="230" /></div>`
              : ``;
            const premiumMarkup = `
              <div class="premium color-${premium.color}">
                ${imageMarkup}
                <div class="premium-content">
                  <h2>${premium.title}</h2>
                  <p>${premium.body}</p>
                </div>
              </div>
            `;
            contributionInformation.insertAdjacentHTML(
              "beforeend",
              premiumMarkup
            );
          }
        });
      }
    }
  } catch (error) {
    console.warn("Error inserting premiums:", error);
  }
};

const moveRadiosElements = () => {
  try {
    const selectedFrequency = document.querySelector(
      ".form-item-selectedfrequency"
    );
    if (!selectedFrequency) return;

    const radios = selectedFrequency.querySelector(".radios");
    const radioDescription = document.querySelector(".radio-description");
    const frequencyInputs = selectedFrequency.querySelectorAll("label input");
    const giveMonthly = document.querySelector(".at-radio-label-4");

    // Move Radio description outside radios div
    selectedFrequency.appendChild(radioDescription);

    // Move inputs outside label and add id/for
    frequencyInputs.forEach((input, index) => {
      const label = input.parentNode;
      input.setAttribute("id", `id-${index}`);
      label.setAttribute("for", `id-${index}`);
      label.parentNode.insertBefore(input, label);
    });

    giveMonthly.textContent = "Give Monthly";

    // Add radios indicator div
    radios.insertAdjacentHTML(
      "beforeend",
      '<div class="radios__indicator"></div>'
    );
  } catch (error) {
    console.warn("Error moving radio elements:", error);
  }
};

const checkboxRadiobutton = () => {
  try {
    // Add checkmark to checkboxes
    const checkboxes = document.querySelectorAll("label.at-check");
    checkboxes.forEach((checkbox) => {
      checkbox.insertAdjacentHTML("beforeend", '<div class="checkmark"></div>');
    });

    // Add checkmark to radio buttons
    const radioButtons = document.querySelectorAll("[class^='at-radio']");
    radioButtons.forEach((radio) => {
      radio.insertAdjacentHTML("beforeend", '<div class="checkmark"></div>');
    });
  } catch (error) {
    console.warn("Error handling checkbox and radio buttons:", error);
  }
};

const isViewport = () => {
  try {
    const takeAction = document.querySelector(".take-action");
    if (!takeAction) return;

    if (takeAction.innerHTML.trim() !== "") {
      const target = document.querySelector(
        ".FastAction, .ContributionInformation"
      );
      const config = { rootMargin: "0px", threshold: 1.0 };
      const callback = (entries, observer) => {
        entries.forEach((entry) => {
          takeAction.style.display =
            entry.isIntersecting || entry.boundingClientRect.top <= 0
              ? "none"
              : "";
        });
      };
      const observer = new IntersectionObserver(callback, config);
      observer.observe(target);
    } else {
      takeAction.style.display = "none";
    }
  } catch (error) {
    console.warn("Error handling viewport intersection:", error);
  }
};

const takeActionScroll = () => {
  try {
    const takeAction = document.querySelector(".take-action");
    if (!takeAction) return;

    if (takeAction.innerHTML.trim() !== "") {
      takeAction.addEventListener("click", function (e) {
        e.preventDefault();
        document
          .querySelector(".ContributionInformation")
          .scrollIntoView({ behavior: "smooth" });
      });
    }
  } catch (error) {
    console.warn("Error handling take action scroll:", error);
  }
};

const nextButton = () => {
  try {
    const nextButton = document.querySelector(".nextStep");
    if (nextButton) {
      nextButton.innerHTML = "Continue";
    }
  } catch (error) {
    console.warn("Error updating next button:", error);
  }
};

const photoCredit = () => {
  try {
    const bgImage = document.querySelector(".bg-image");
    const responsiveHero = document.querySelector(".responsive-hero");

    if (!responsiveHero || !bgImage) return;

    const responsiveHeroImage = responsiveHero.querySelector("img");
    if (responsiveHeroImage && responsiveHeroImage.hasAttribute("title")) {
      // Get the attribute and replace any escape characters
      let photoAttribute = responsiveHeroImage.getAttribute("title").replace(/\\/g, "");
      const creditMarkup = `<div class="photoCredit">${photoAttribute}</div>`;

      if (!bgImage.querySelector(".photoCredit")) {
        bgImage.insertAdjacentHTML("beforeend", creditMarkup);
      }

      if (!responsiveHero.querySelector(".photoCredit")) {
        responsiveHero.insertAdjacentHTML("beforeend", creditMarkup);
      }
    }
  } catch (error) {
    console.warn("Error adding photo credit:", error);
  }
};

const createObserver = (target, callback, config) => {
  try {
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
    return observer;
  } catch (error) {
    console.warn("Error creating observer:", error);
  }
};

const emptyBonterraGridInlineCSS = () => {
  console.log("Running emptyBonterraGridInlineCSS");
  try {
    const styles = document.querySelectorAll(
      "style[data-bonterragridinlinecss]"
    );
    styles.forEach((style) => {
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
let initExecuted = false;

// Add init to the postRender array
if (!nvtag_callbacks.postRender.includes(init)) {
  console.log("Adding init to nvtag_callbacks.postRender");
  nvtag_callbacks.postRender.push(init);
}

// Function to execute postRender callbacks
function executePostRenderCallbacks() {
  if (typeof nvtag_callbacks.postRender !== "undefined") {
    nvtag_callbacks.postRender.forEach((callback) => {
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
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0) {
        console.log(
          "Content added to .ngp-form, executing postRender callbacks"
        );
        observer.disconnect();
        executePostRenderCallbacks();
      }
    });
  });
  observer.observe(ngpForm, { childList: true, subtree: true });
}

// Function to initialize after DOMContentLoaded
function initializeAfterDOMLoaded() {
  console.log("DOMContentLoaded event fired or document already loaded");
  const ngpForm = document.querySelector(".ngp-form");
  if (ngpForm) {
    console.log(".ngp-form found, checking for content");
    if (ngpForm.innerHTML.trim() !== "") {
      console.log(
        ".ngp-form already has content, executing postRender callbacks"
      );
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
  const existingStyles = document.querySelectorAll(
    "style[data-bonterragridcss]"
  );
  if (existingStyles.length > 0) {
    existingStyles.forEach((node) => {
      console.log("Found existing <style> element:", node);
      document.body.appendChild(node);
      console.log(
        "Moved existing <style> element with data-bonterragridcss to the end of <body>"
      );
    });
  } else {
    console.log("No existing <style> elements with data-bonterragridcss found");
  }

  // Create a MutationObserver to watch for new additions
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeType === 1 &&
            node.tagName === "STYLE" &&
            node.hasAttribute("data-bonterragridcss")
          ) {
            console.log("Found new <style> element:", node);
            document.body.appendChild(node);
            console.log(
              "Moved new <style> element with data-bonterragridcss to the end of <body>"
            );
          }
        });
      }
    }
  });

  const config = { childList: true, subtree: true };
  observer.observe(document.head, config);
  console.log("MutationObserver is now observing the <head> for changes");
}

function setEmbeddedAttributeBasedOnURL() {
  const currentURL = window.location.href;
  const isEmbedded = !currentURL.includes("everyaction.com");

  if (isEmbedded) {
    document.body.setAttribute("data-embedded", "true");
    console.log(
      'Set data-embedded="true" on <body> because the URL is not everyaction.com'
    );
  } else {
    document.body.setAttribute("data-embedded", "false");
    console.log(
      'Set data-embedded="false" on <body> because the URL is everyaction.com'
    );
  }
}

const handleRecurringCheckbox = () => {
  // Select the checkbox element
  const recurringCheckbox = document.querySelector(
    'input[type="checkbox"][name="IsRecurring"]'
  );

  if (recurringCheckbox) {
    // Function to update the data attribute and label text based on the checkbox state
    const updateRecurringDataAttribute = () => {
      const labels = document.querySelectorAll("label.label-amount");
      labels.forEach((label) => {
        const input = label.querySelector(
          'input[type="radio"][name="SelectAmount"]'
        );
        if (input) {
          const amountElement = input.nextSibling; // The text node containing the dollar amount
          if (amountElement && amountElement.nodeType === Node.TEXT_NODE) {
            let updatedText = amountElement.textContent.trim();
            if (recurringCheckbox.checked) {
              document.body.setAttribute("data-is-recurring", "Y");
              updatedText = updatedText.endsWith("/mo")
                ? updatedText
                : updatedText + "/mo";
            } else {
              document.body.removeAttribute("data-is-recurring");
              updatedText = updatedText.replace("/mo", "").trim();
            }

            amountElement.textContent = updatedText;

            // Update the "long" class based on text length and label-otheramount exclusion
            if (
              updatedText.length >= 7 &&
              !label.classList.contains("label-otheramount")
            ) {
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

const formatLabelInputs = () => {
  try {
    document
      .querySelectorAll('.SelectAmount label[title^="/"]')
      .forEach((label) => {
        try {
          const title = label.getAttribute("title");

          // Check if the title matches the pattern for recurring frequencies with an optional description
          const frequencyMatch = title.match(
            /^\/(mo|yr)(?: - ([\w\s]+))? \(\$([\d.]+)\)$/
          );

          if (frequencyMatch) {
            const frequency = frequencyMatch[1]; // 'mo' or 'yr'
            const description = frequencyMatch[2] || ""; // Optional description
            const amount = frequencyMatch[3]; // Amount like '25'

            // Create the formatted label
            const formattedLabel = description
              ? `$${amount}/${frequency} - ${description}`
              : `$${amount}/${frequency}`;

            // Update the label's text node without affecting the input's value
            label.childNodes.forEach((node) => {
              if (
                node.nodeType === Node.TEXT_NODE &&
                node.textContent.trim().startsWith("/")
              ) {
                node.textContent = formattedLabel;
              }
            });
          }
        } catch (error) {
          console.error("An error occurred while processing a label:", error);
        }
      });
  } catch (error) {
    console.error("An error occurred while selecting labels:", error);
  }
};

const updateCurrentYear = () => {
  try {
    const currentYearSpan = document.getElementById("current-year");
    if (currentYearSpan) {
      const currentYear = new Date().getFullYear();
      currentYearSpan.textContent = `${currentYear} `;
    } else {
      console.error('Element with id "current-year" not found.');
    }
  } catch (error) {
    console.error("An error occurred while updating the current year:", error);
  }
};

// Call the function
updateCurrentYear();

function init(args) {
  console.log("init function started");
  try {
    // Check if functions are defined before calling them
    if (typeof setEmbeddedAttributeBasedOnURL === "function")
      setEmbeddedAttributeBasedOnURL();
    if (typeof formatLabelInputs === "function") formatLabelInputs();
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
    if (typeof handleRecurringCheckbox === "function")
      handleRecurringCheckbox();
    if (typeof updateCurrentYear === "function") updateCurrentYear();
    if (typeof emptyBonterraGridInlineCSS === "function")
      emptyBonterraGridInlineCSS();
    if (typeof moveBonterraGridCSS === "function") moveBonterraGridCSS();

    const target = document.querySelector(".form-item-selectamount");
    if (target) {
      const config = { attributes: false, childList: true, subtree: true };
      createObserver(target, selectAmount, config);
      console.log("Observer created for .form-item-selectamount");
    }
  } catch (error) {
    console.warn("Initialization error:", error);
  }
}
