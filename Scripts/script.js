// WINDOW/DOCUMENT EVENT LISTENER FUNCTIONS
window.onload = function () {

  // Updates image size based on screen size/font-size chosen by user
  changeImageSize() 
  // Rotates the menu bars on menu button onclick and turns them into an 'X' symbol
  rotateMenuButton();
  // Implements functionality for Light/Dark mode
  darkLightToggle();
  // Let user change text size
  textSizeListeners();
  // Lets user click on images inside articles to make them fill up the screen
  expandImages();
  // Let user navigate to index.html page when clicks on main heading
  makeHeadingClickable();
  // Dropdown menu functionality on clicking the menu button
  openDropdown();
  closeDropdownOnOutsideClick();

  // If on the Form web page, run the form validation code
  if (document.getElementById('subscribe-form') != undefined) {
    subscribeFormEventListeners();
  }

  // Sets default root-font-size to 14px
  if (localStorage.getItem('textSize') == null) {
    localStorage.setItem('textSize', '14px');
  }
  else {
    let textSize = localStorage.getItem('textSize');
    changeTextSize(textSize);
  }

  // Sets dark or light color mode
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
};

// When the user scrolls the page, make the main header fixed
// Attribution: Fixed navbar inspired by this W3Schools Tutorial https://www.w3schools.com/howto/howto_js_sticky_header.asp
window.addEventListener("scroll", function () {
  if (window.innerWidth > 768) {
    makeSticky();
  }
});

//  GENERAL FUNCTIONS NECESSARY FOR THE FUNCTIONALITY OF ALL THE WEB PAGES IN THE SITE

// When user clicks on main heading, redirect them to the index page
function makeHeadingClickable() {
  document.getElementById('main-heading').addEventListener('click', function () {
    window.location.href = "index.html";
  })
}

// When clicked, animates the menu button's icon to a cross
// Attribution: https://www.w3schools.com/howto/howto_css_menu_icon.asp
function rotateMenuButton() {
  let menuButton = document.getElementById('menu-button');
  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('changeIcon');
  })
}

// Changes color of a random element
function changeColor(elem, newColor) {
  elem.style.color = newColor;
}


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeSticky() {
  var nav = document.getElementById("main-navbar");
  // Get the text-size accessibility buttons as an array;
  var textSizeOptions = document.getElementById('text-size-options').children;
  // Attribution: https://www.w3schools.com/jsref/prop_element_children.asp
  // Helpful: .childNodes VS .children --> .children is useful for getting HTML only
  // Attribution 2: https://www.geeksforgeeks.org/htmlcollection-for-loop/
  // How to make an array from an HTMLCollection, so that the ForEach() method
  // becomes available for iterating through the collection
  textSizeOptions = Array.from(textSizeOptions);
  // Gets all main links in navbar and creates array out of them
  var navLinks = document.getElementsByClassName('main-nav-link');
  navLinks = Array.from(navLinks);

  // When the user scrolls down vertically, add the sticky navbar
  if (window.pageYOffset > nav.offsetTop) {
    nav.classList.add("sticky1");

    let logo = document.getElementById('navbar-logo-text');
    if (localStorage.getItem('colorMode') == 'light') {
      logo.style.color = myBlack;
      nav.style.backgroundColor = myLightGrey;
    }
    else {
      logo.style.color = myWhite;
      nav.style.backgroundColor = myBlack;
    }

    // Change the color of the buttons in the navbar if a sticky is made
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
    // Resets the colors of the navbar if the sticky menu has disappeared
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


// If page has a scroll-up arrow, go to top of page when click it
if (document.getElementById('scroll-up-arrow') != null) {
  document.getElementById('scroll-up-arrow').onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}

// When click on menu button, open the dropdown menu
function openDropdown() {
  document.getElementById('menu-button').onclick = function () {
    if (dropdown.style.display == 'inline-block') {
      dropdown.style.display = 'none';
    }
    else {
      dropdown.style.display = 'inline-block';
    }
  }
}


// Closes dropdown if clicked outside it
function closeDropdownOnOutsideClick() {
  document.getElementsByTagName('html')[0].addEventListener("click", function (event) {
    if (event.target.id != "menu-button" && event.target.className != "dropdown-link-div") {
      if (dropdown.style.display != 'none') {
        dropdown.style.display = 'none';
      }
    }
  }
  )
}

// https://www.w3schools.com/howto/howto_js_lightbox.asp
// ADDS AND EVENT LISTENER TO IMAGES IN THE SINGLE REVIEW PAGE
// If an image is clicked on, expand it and add a message saying to click again to close
function expandImages() {
  // Gets arrays of images
  // Images that are in a gallery
  let galleryImages;
  // Single images in a line
  let singleImages;
  if (document.getElementsByClassName('gallery-img-container')) {
    galleryImages = document.getElementsByClassName('gallery-img-container');
  }
  if (document.getElementsByClassName('review-single-image-container')) {
    singleImages = document.getElementsByClassName('review-single-image-container');
  }
  galleryImages = Array.from(galleryImages);
  singleImages = Array.from(singleImages);

  // Adds event listeners to images that changes the size by adding a class
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