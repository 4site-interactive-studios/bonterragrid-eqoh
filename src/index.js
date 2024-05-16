// Importing CSS and SCSS
import scss from "./sass/main.scss";

// Global nvtag_callbacks handling
window.nvtag_callbacks = window.nvtag_callbacks || {};
var nvtag_callbacks = window.nvtag_callbacks;
nvtag_callbacks.postRender = nvtag_callbacks.postRender || [];
nvtag_callbacks.postRender.push(init);

function init(args) {
  try {
    displayAccordion();
    mobileImage();
    bgImage();
    moveRadiosElements();
    isViewport();
    insertPremiums();
    checkboxRadiobutton();
    takeActionScroll();
    selectAmount();
    nextButton();
    photoCredit();
    setFrequencyListeners();
    setEFTMessage();
    updatePaymentMethods();
    showBody();

    const target = document.querySelector(".form-item-selectamount");
    const config = { attributes: false, childList: true, subtree: true };
    createObserver(target, selectAmount, config);
  } catch (error) {
    console.error("Initialization error:", error);
  }
}

const getThemeOption = (option) => {
  try {
    if (
      typeof fs_theme_options !== "undefined" &&
      fs_theme_options.hasOwnProperty(option)
    ) {
      return fs_theme_options[option];
    }
  } catch (error) {
    console.error("Error getting theme option:", error);
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
    console.error("Error setting EFT message:", error);
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
    console.error("Error setting frequency listeners:", error);
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
    console.error("Error updating payment methods:", error);
  }
};

const mobileImage = () => {
  try {
    const img = document.querySelector(".responsive-hero img");
    if (img && !img.getAttribute("src")) {
      img.style.display = "none";
    }
  } catch (error) {
    console.error("Error handling mobile image:", error);
  }
};

const showBody = () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("showBody");
  }, 750);
};

const displayAccordion = () => {
  try {
    document.body.addEventListener("click", function (event) {
      if (event.target.classList.contains("accordion")) {
        event.target.classList.toggle("active");
        const panel = event.target.nextElementSibling;
        panel.style.display =
          panel.style.display === "block" ? "none" : "block";
      }
    });
  } catch (error) {
    console.error("Error displaying accordion:", error);
  }
};

const bgImage = () => {
  try {
    const mainImage = getThemeOption("main_background_image_url");
    if (mainImage) {
      const bgImage = document.querySelector(".bg-image");
      if (bgImage) {
        bgImage.style.cssText = `background: url('${mainImage}'); background-repeat: no-repeat; background-size: cover; background-position: center center;`;
      }
    }
  } catch (error) {
    console.error("Error setting background image:", error);
  }
};

const selectAmount = () => {
  try {
    const labelAmount = document.querySelectorAll(".label-amount");
    const labelOtheramount = document.querySelector(".edit-otheramount");

    labelOtheramount.addEventListener("focus", handleClick);

    labelAmount.forEach((label, index) => {
      if (index === 0) {
        label.classList.add("active");
        label.querySelector('input[type="radio"]').checked = true;
        labelOtheramount.removeAttribute("required");
        labelOtheramount.value = "";
      }
      label.addEventListener("change", handleClick);
    });
  } catch (error) {
    console.error("Error handling select amount:", error);
  }
};

const handleClick = (e) => {
  e.preventDefault();
  const labelAmount = document.querySelectorAll(".label-amount");
  labelAmount.forEach((label) => {
    const radio = label.querySelector('input[type="radio"]');
    label.classList.remove("active");
    radio.checked =
      e.currentTarget.parentNode.classList.contains("label-otheramount") &&
      radio.classList.contains("radio-other");
  });
  if (e.currentTarget.parentNode.classList.contains("label-otheramount")) {
    e.currentTarget.parentNode.classList.add("active");
  } else {
    e.currentTarget.classList.add("active");
  }
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
              ? `<div class="premium-image"><img src="${premium.image_url}" border="0" alt="" title="" decoding="async" loading="lazy" /></div>`
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
    console.error("Error inserting premiums:", error);
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
    console.error("Error moving radio elements:", error);
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
    console.error("Error handling checkbox and radio buttons:", error);
  }
};

const isViewport = () => {
  try {
    const takeAction = document.querySelector(".take-action");
    if (!takeAction) return;

    if (takeAction.innerHTML.trim() !== "") {
      const target = document.querySelector(".ContributionInformation .radios");
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
    console.error("Error handling viewport intersection:", error);
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
    console.error("Error handling take action scroll:", error);
  }
};

const nextButton = () => {
  try {
    const nextButton = document.querySelector(".nextStep");
    if (nextButton) {
      nextButton.innerHTML = "Continue";
    }
  } catch (error) {
    console.error("Error updating next button:", error);
  }
};

const photoCredit = () => {
  try {
    const bgImage = document.querySelector(".bg-image");
    const responsiveHero = document.querySelector(".responsive-hero");

    if (!responsiveHero || !bgImage) return;

    const responsiveHeroImage = responsiveHero.querySelector("img");
    if (responsiveHeroImage && responsiveHeroImage.hasAttribute("title")) {
      const photoAttribute = responsiveHeroImage.getAttribute("title");
      const creditMarkup = `<div class="photoCredit">${photoAttribute}</div>`;
      bgImage.insertAdjacentHTML("beforeend", creditMarkup);
      responsiveHero.insertAdjacentHTML("beforeend", creditMarkup);
    }
  } catch (error) {
    console.error("Error adding photo credit:", error);
  }
};

const createObserver = (target, callback, config) => {
  try {
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
    return observer;
  } catch (error) {
    console.error("Error creating observer:", error);
  }
};
