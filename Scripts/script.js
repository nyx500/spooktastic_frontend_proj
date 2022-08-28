// FUNCTIONS FOR CHANGING TEXT SIZE

// CHANGE SIZE OF ICONS ON REVIEW PAGES
function changeReviewIconSize(newSize) {
  var reviewIcons = document.getElementsByClassName('media-icon');
  if (reviewIcons.length != 0) {
    for (var j = 0; j < reviewIcons.length; j++) {
      {
        reviewIcons[j].style.width = newSize;
      }
    }
  }
}

// FUNCTION TO CHANGE SIZE OF JUST THE MAIN HEADING (SPOOKTASTIC)
function changeMainHeadingSize(newSize) {
  let mainHeading = document.getElementById('main-heading');
  mainHeading.style.fontSize = newSize;
}

// FUNCTION TO CHANGE TEXT SIZE OF WHOLE PAGE
function changeTextSize(pixels) {

  console.log(pixels);
  console.log(window.innerWidth);
  // Sets local storage with text size in pixels
  localStorage.setItem('textSize', pixels);

  // Change the text size of the whole page (html element) in general
  document.getElementsByTagName('html')[0].style.fontSize = pixels;

  // LARGE TEXT SIZE
  if (pixels == '22px') {
    if (document.getElementsByClassName('img-gallery')) {
      var imageGallery = document.getElementsByClassName('img-gallery');
      imageGallery = Array.from(imageGallery);
      imageGallery.forEach(gallery => {
        gallery.style.gridTemplateColumns = '1fr';
        gallery.style.gridTemplateRows = 'auto';
        gallery.style.justifyItems = 'center';
      })
    }

    if (document.getElementsByClassName('gallery-img')) {
      var galleryImages = document.getElementsByClassName('gallery-img');
      galleryImages = Array.from(galleryImages);
      galleryImages.forEach(img => {
        if (window.innerWidth > 1200) {
          img.style.width = '30rem';
          img.style.height = '16rem';
        }
        else if (window.innerWidth <= 1200 && window.innerWidth > 560) {
          img.style.width = '22rem';
          img.style.height = '12rem';
        }
        else if (window.innerWidth <= 550) {
          img.style.width = '90vw';
          img.style.width = '50vh';
        }
      })
    }

    if (document.getElementsByClassName('travel-location-image')) {
      var travelImages = document.getElementsByClassName('travel-location-image');
      travelImages= Array.from(travelImages);
      travelImages.forEach(img => {
        if (window.innerWidth > 1200) {
          img.style.width = '24rem';
          img.style.height = '14rem';
        }
      })
    }

    // Change main heading size for large screens
    if (window.innerWidth > 768) {
      changeMainHeadingSize('5.2rem');
      // Change size of images on Book/Film review pages
      // Avoids overflow over pages
      changeReviewIconSize('10rem');
    }
    else {
      changeMainHeadingSize('2rem');
      changeReviewIconSize('10rem');
      if (document.getElementsByClassName('reviews-expand')[0]) {
        var bottomArea = document.getElementsByClassName('reviews-expand')[0];
        bottomArea.style.gridTemplateColumns = '1fr';
        bottomArea.style.gridTemplateRows = '1fr 1fr';
        bottomArea.style.gridTemplateAreas = ' "loadbutton" "uparrow"';
        bottomArea.style.justifyContent = 'start';
        bottomArea.style.justifyItems = 'start';
      }
      else if (document.getElementsByClassName('travel-events-expand')[0]) {
        console.log('x');
        var bottomArea = document.getElementsByClassName('travel-events-expand')[0];
        bottomArea.style.gridTemplateColumns = '1fr';
        bottomArea.style.gridTemplateRows = '1fr 1fr';
        bottomArea.style.gridTemplateAreas = ' "loadbutton" "uparrow"';
        bottomArea.style.justifyContent = 'start';
        bottomArea.style.justifyItems = 'start';
      }
    }

  }
  // MEDIUM TEXT SIZE
  else if (pixels == '18px') {
    if (window.innerWidth > 768) {
      changeMainHeadingSize('5rem');
    }
    else {
      changeMainHeadingSize('11vw');
    }

    if (window.innerWidth < 900) {
      if (document.getElementsByClassName('img-gallery')) {
        var imageGallery = document.getElementsByClassName('img-gallery');
        imageGallery = Array.from(imageGallery);
        imageGallery.forEach(gallery => {
          gallery.style.gridTemplateColumns = '1fr';
          gallery.style.gridTemplateRows = 'auto';
          gallery.style.justifyItems = 'center';
        })
      }
    }

    if (window.innerWidth < 425) {
      if (document.getElementsByClassName('gallery-img')) {
        var galleryImages = document.getElementsByClassName('gallery-img');
        galleryImages = Array.from(galleryImages);
        galleryImages.forEach(img => {
          img.style.width = '10rem';
          img.style.height = '6rem';
        })
      }
    }

    changeReviewIconSize('10rem');
  }
  // SMALL TEXT SIZE
  else if (pixels == '14px') {
    if (window.innerWidth > 768) {
      changeMainHeadingSize('5.8rem');
    }
    else {
      changeMainHeadingSize('10vw');
      if (document.getElementsByClassName('img-gallery')) {
        var imageGallery = document.getElementsByClassName('img-gallery');
        imageGallery = Array.from(imageGallery);
        imageGallery.forEach(gallery => {
          gallery.style.gridTemplateColumns = '1fr';
          gallery.style.gridTemplateRows = 'auto';
          gallery.style.justifyItems = 'center';
        })
        if (document.getElementsByClassName('gallery-img')) {
          var galleryImages = document.getElementsByClassName('gallery-img');
          galleryImages = Array.from(galleryImages);
          galleryImages.forEach(img => {
            img.style.width = '70vw';
            img.style.height = '50vh';
          })
        }
      }
    }
    changeReviewIconSize('16rem');
  }
  // EXTRA SMALL TEXT SIZE
  else {
    if (window.innerWidth > 768) {
      changeMainHeadingSize('4.2rem');
    }
    else {
      changeMainHeadingSize('9vw');
    }

    if (window.innerWidth < 600) {
      console.log('x');
      if (document.getElementsByClassName('img-gallery')) {
        var imageGallery = document.getElementsByClassName('img-gallery');
        imageGallery = Array.from(imageGallery);
        imageGallery.forEach(gallery => {
          gallery.style.gridTemplateColumns = '1fr';
          gallery.style.gridTemplateRows = 'auto';
          gallery.style.justifyItems = 'center';
        })

        if (document.getElementsByClassName('gallery-img')) {
          var galleryImages = document.getElementsByClassName('gallery-img');
          galleryImages = Array.from(galleryImages);
          galleryImages.forEach(img => {
            img.style.width = '50vw';
            img.style.height = '30vh';
          })
        }
        changeReviewIconSize('18rem');
      }

    }
  }
}

// ADD EVENT LISTENERS FOR CLICKS ON DIFFERENT TEXTSIZE BUTTONS
// ACCESSIBILITY MENU
function textSizeListeners() {
  // Gets a list of buttons for changing the text size
  var text_options = document.getElementById("text-size-options");
  var text_choice_buttons = text_options.getElementsByTagName("button");

  /* Iterates through the buttons and changes the text-size of the
  HTML page respectively to the selected size */
  for (var i = 0; i < text_choice_buttons.length; i++) {
    if (text_choice_buttons[i].id == "large-text") {
      text_choice_buttons[i].addEventListener('click', function () {
        if (window.innerWidth > 768) {
          changeTextSize('22px');
        }
        else {
          changeTextSize('20px');
        }
      })
    }
    else if (text_choice_buttons[i].id == "medium-text") {
      text_choice_buttons[i].addEventListener('click', function () {
        changeTextSize('18px');
      })
    }
    else if (text_choice_buttons[i].id == "small-text") {
      text_choice_buttons[i].addEventListener('click', function () {
        changeTextSize('14px');
      })
    }
    else if (text_choice_buttons[i].id == "extra-small-text") {
      text_choice_buttons[i].addEventListener('click', function () {
        changeTextSize('12px');
      })
    }
  }
}


//SELECT FORM EVENT LISTENERS
function selectFormEventListeners() {
  if (document.getElementById('subscribe-form')) {
    var form = document.getElementById('subscribe-form');
    var formTextInputs = document.getElementsByClassName('form-text-input');
    formTextInputs = Array.from(formTextInputs);
    formTextInputs.forEach((input) => {
      input.addEventListener('focus', function () {
        // Attribution:
        //  https://stackoverflow.com/questions/61992025/google-chrome-showing-black-border-on-focus-state-for-button-user-agent-styles
        input.style.outline = 'none';
        input.style.border = '2px solid var(--this-red)';
      })
      input.addEventListener('focusout', function () {
        input.style.border = '2px solid var(--off-black)';
      })
    })

    var formCheckboxContainers = document.getElementsByClassName('checkbox-container');
    formCheckBoxContainers = Array.from(formCheckboxContainers);
    formCheckBoxContainers.forEach((container) => {
      // Making the container a variable makes it accessible in eventListener
      var container = container;
      let checkbox = container.getElementsByTagName('input')[0];
      let label = container.getElementsByTagName('label')[0];
      // Attribution:
      // https://stackoverflow.com/questions/9887360/how-can-i-check-if-a-checkbox-is-checked
      checkbox.addEventListener('change', e => {
        if (e.target.checked === true) {
          label.style.fontWeight = 'bolder';
        }
        else {
          label.style.fontWeight = 'normal';
        }
      })
    })



    // Stores form submission button
    var submitButton = document.getElementById('form-submit');
    // When button is clicked, decide whether form is valid
    submitButton.addEventListener('click', (e) => {
      // Counter keeps track of how many input errors the user has made
      var formInputErrors = 0;

      // Deletes all the error messages from previous submit
      if (document.getElementsByClassName('form-error')) {
        var errors = document.getElementsByClassName('form-error');
        errors = Array.from(errors);
        // Attribution: https://www.javascripttutorial.net/javascript-dom/javascript-removechild/
        errors.forEach(err => {
          form.removeChild(err);
        })
      }

      // Prevents automatic reload of page onclick of submit button
      // This is because we have no back-end --> form data is not actually being sent anywhere...
      e.preventDefault();

      for (var i = 0; i < formTextInputs.length; i++) {
        // For all the obligatory (text) inputs in the form, reset border to black
        formTextInputs[i].style.border = '2px solid var(--off-black)';
        // Checks for empty inputs
        // Attribution: https://www.w3resource.com/javascript/form/non-empty-field.php
        if (formTextInputs[i].value.length === 0) {
          // Inserts an error message above the empty input
          var error = document.createElement("div");
          error.innerHTML = 'Please fill in this field!';
          error.className = 'form-error';
          error.id = `error${i + 1}`;
          formTextInputs[i].style.border = '2px solid var(--this-dark-red)';
          // Attribution: https://attacomsian.com/blog/javascript-dom-get-the-parent-of-an-element#:~:text=To%20get%20the%20parent%20node,element%20as%20a%20Node%20object.&text=The%20parentNode%20property%20is%20read,you%20can%20not%20modify%20it.
          form.insertBefore(error, formTextInputs[i].parentNode);
          // Increments the number of errors
          formInputErrors++;
        }
      }

      // Checks for invalid email address --> no '@' symbol in the email
      // Attribution: https://www.w3schools.com/jsref/jsref_includes.asp
      if (document.getElementById('email').value.length > 0 && !document.getElementById('email').value.includes('@')) {
        var error = document.createElement("div");
        error.innerHTML = 'Invalid email address.';
        error.className = 'form-error';
        error.id = `error${4}`;
        document.getElementById('email').style.border = '2px solid var(--this-dark-red)';
        form.insertBefore(error, document.getElementById('email').parentNode);
        // Increments the number of errors
        formInputErrors++;
      }

      // If form is valid, do this
      if (formInputErrors == 0) {
        // Hide form title and form
        var formTitle = document.getElementById('subscribe-form-heading');
        formTitle.style.display = 'none';
        formTitle.style.display = 'none';
        // Replace form with a thank you message and link back to homepage
        form.innerHTML = '<div id="thank-you-message"><h4>Thank you for signing up!</h4> <br> <h5 id="back-link">Back to <a href="index.html">Home</a></h5></div>';
        // Scroll to beginning of thank you message
        scrollToJustAboveElement(document.getElementById('thank-you-message'), 400);
      }
    })
  }
}

function makeHeadingClickable() {
  document.getElementById('main-heading').addEventListener('click', function () {
    console.log('clicked');
    window.location.href = "index.html"; s
  })
}

// When clicked, changes the menu button's icon to a cross
// Attribution: https://www.w3schools.com/howto/howto_css_menu_icon.asp
function rotateMenuButton() {
  let menuButton = document.getElementById('menu-button');
  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('changeIcon');
  })
}

// https://www.w3schools.com/howto/howto_js_lightbox.asp
function expandImages() {
  var galleryImages;
  var singleImages;
  if (document.getElementsByClassName('gallery-img-container')) {
    galleryImages = document.getElementsByClassName('gallery-img-container');
  }

  if (document.getElementsByClassName('review-single-image-container')) {
    singleImages = document.getElementsByClassName('review-single-image-container');
  }

  galleryImages = Array.from(galleryImages);
  singleImages = Array.from(singleImages);

  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      if (image.classList.contains('opened-image')) {
        document.getElementById('close-message').style.display = 'none';
      }
      else {
        document.getElementById('close-message').style.display = 'block';
      }
      image.classList.toggle('opened-image');
    })
  })

  singleImages.forEach(image => {
    image.addEventListener('click', () => {
      if (image.classList.contains('opened-image')) {
        document.getElementById('close-message').style.display = 'none';
      }
      else {
        document.getElementById('close-message').style.display = 'block';
      }
      image.classList.toggle('opened-image');
    })
  })
}



// WAIT UNTIL WINDOW LOADS TO ADD ALL EVENT LISTENERS AND SET LOCAL STORAGE VALUES
window.onload = function () {

  expandImages();
  rotateMenuButton();
  darkLightToggle();
  textSizeListeners();
  selectFormEventListeners();

  if (localStorage.getItem('textSize') == null) {
    localStorage.setItem('textSize', '16px');
  }
  else {
    let textSize = localStorage.getItem('textSize');
    changeTextSize(textSize);
  }


  var colorMode = localStorage.getItem('colorMode');
  /* If color settings exist, make sure they are applied for 
  every other page on the web site, so not lost when navigate to other page */
  if (!colorMode || colorMode == 'light') {
    lightColorSettings();
  }
  else {
    darkColorSettings();
  }

}

// Identifies if page is fully loaded
// If not fully loaded, display the loader icon
// Attribution: https://www.jstips.co/en/javascript/detect-document-ready-in-pure-js/
document.onreadystatechange = () => {
  // Gets the loader icon by class name
  var loader = document.getElementsByClassName('loader')[0];
  // If page finished loading, hide the loader
  if (document.readyState === 'complete') {
    loader.style.display = 'none';
  }
  // If page still loading, display the loader
  else {
    loader.style.display = 'block';
  }

  makeHeadingClickable();
};

// Closes dropdown menu on outside click
document.addEventListener("click", function (event) {
  if (event.target.id != "menu-button" && event.target.className != "dropdown-link-div") {
    if (dropdown.style.display != 'none') {
      dropdown.style.display = 'none';
    }
  }
}
)

// When the user scrolls the page, execute myFunction
// Attribution: Fixed navbar inspired by this W3Schools Tutorial https://www.w3schools.com/howto/howto_js_sticky_header.asp
window.addEventListener("scroll", function () {
  if (window.innerWidth > 768) {
    makeSticky();
  }
});

function changeColor(elem, newColor) {
  elem.style.color = newColor;
}


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeSticky() {

  var nav = document.getElementById("main-navbar");
  // Get the text-size accessibility buttons as an array;
  var textSizeOptions = document.getElementById('text-size-options').children;
  // Attribution: https://www.w3schools.com/jsref/prop_element_children.asp
  // Helpful: .childNodes VS .children --> .children is useful for getting only
  // HTML elements
  // Attribution 2: https://www.geeksforgeeks.org/htmlcollection-for-loop/
  // How to make an array from an HTMLCollection, so that the ForEach() method
  // becomes available for iterating through the collection
  textSizeOptions = Array.from(textSizeOptions);
  var navLinks = document.getElementsByClassName('main-nav-link');
  navLinks = Array.from(navLinks);

  if (window.pageYOffset > nav.offsetTop) {
    nav.classList.add("sticky1");

    var logo = document.getElementById('navbar-logo-text');

    if (localStorage.getItem('colorMode') == 'light') {
      logo.style.color = myBlack;
      nav.style.backgroundColor = myLightGrey;
    }
    else {
      logo.style.color = myWhite;
      nav.style.backgroundColor = myBlack;
    }

    textSizeOptions.forEach(button => {
      // The color of the links for accessibility depends on
      // whether the color mode is set to dark or light mode
      if (localStorage.getItem('colorMode') == 'light') {
        button.style.color = myBlack;
      }
      else {
        button.style.color = myWhite;
      }
    })

    // Gets the anchor tag elem in every li elem and changes its color
    navLinks.forEach(link => {
      if (localStorage.getItem('colorMode') == 'light') {
        link.style.color = myBlack;

        link.addEventListener('mouseout', () => {
          link.style.color = myBlack;
        });
      }
      else {
        link.style.color = myWhite;
        link.addEventListener('mouseout', () => {
          link.style.color = myWhite;
        });
      }
      link.addEventListener('mouseover', () => {
        link.style.color = myRed;
      });
    })
  }
  else {
    nav.style.background = 'none';
    nav.classList.remove("sticky1");
    textSizeOptions.forEach(button => {
      button.style.color = myWhite;
    })

    navLinks.forEach(link => {
      link.style.color = myWhite;
      link.addEventListener('mouseover', () => {
        link.style.color = myRed;
      });
      link.addEventListener('mouseout', () => {
        link.style.color = myWhite;
      })
    })
    document.getElementById('navbar-logo-text').style.color = myWhite;
  }
}



if (document.getElementById('scroll-up-arrow') != null) {
  document.getElementById('scroll-up-arrow').onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}

document.getElementById('menu-button').onclick = function () {
  if (document.getElementById('dropdown').style.display == 'inline-block') {
    document.getElementById('dropdown').style.display = 'none';
  }
  else {
    document.getElementById('dropdown').style.display = 'inline-block';
  }
}

function closeDropdownOnOutsideClick() {
  var myDropdown = document.getElementById('dropdown');

  document.getElementsByTagName('html')[0].addEventListener("click", function (event) {
    if (event.target.id != "menu-button" && event.target.className != "dropdown-link-div") {
      if (myDropdown.style.display != 'none') {
        myDropdown.style.display = 'none';
      }
    }
  }
  )
}
