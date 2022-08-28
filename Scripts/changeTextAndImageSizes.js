// FUNCTIONS FOR CHANGING TEXT AND IMAGE SIZE
// FULFILLING THE ACCESSIBILITY REQUIREMENT ENABLING LARGER FONT SIZE

// Changes image size depending on the content of the kindsOfImageObject global array
function changeImageSize() {

    console.log('change image size');
    // If there are image types in the kindsofImageObject array, then do this:
    if (kindsOfImageObject.length > 0) {
      // Iterate through the kinds of images (they all have a className property)
      for (var i = 0; i < kindsOfImageObject.length; i++) {
  
        /* Store the images referred to by the object with a class name
         which exists on the current page, stored in the imageObjects array of objects
         that store information about each kind of image */
        let imgs = document.getElementsByClassName(kindsOfImageObject[i].className);
        // Make an array from the images
        imgs = Array.from(imgs);
  
        /* Creates a variable that will store an object from the imageObjects array.
        This object will store information about what size to make the
        current images on the screen for the font size currently selected
        by the user */
        let sizeObject;
        
        // Possible pixel font sizes user can select
        switch (localStorage.getItem('textSize')) {
          case '22px':
            sizeObject = imageObjects[i].largeTextSize;
            break;
  
          case '18px':
            sizeObject = imageObjects[i].midTextSize;
            break;
  
          case '14px':
            sizeObject = imageObjects[i].smallTextSize;
            break;
  
          case '12px':
            sizeObject = imageObjects[i].extraSmallTextSize;
            break;
        }
        
        /* Changes the heights and widths of the existing images based
        on the values of the properties stored in the sizeObject in the image Object
        that is stored in the global kindsOfImageObject array */
        for (var j = 0; j < imgs.length; j++) {
          if (window.innerWidth > 900) {
            console.log('big screen');
            imgs[j].style.width = sizeObject.largeScreenWidth;
            imgs[j].style.height = sizeObject.largeScreenHeight;
          }
          else if (window.innerWidth <= 900 && window.innerWidth >= 500) {
            imgs[j].style.width = sizeObject.midScreenWidth;
            imgs[j].style.height = sizeObject.midScreenHeight;
          }
          else {
            imgs[j].style.width = sizeObject.smallScreenWidth;
            imgs[j].style.height = sizeObject.smallScreenHeight;
          }
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
    changeImageSize();
  
    // Sets local storage with text size in pixels
    localStorage.setItem('textSize', pixels);
  
    // Change the text size of the whole page (html element) in general
    document.getElementsByTagName('html')[0].style.fontSize = pixels;
  
    // LARGE TEXT SIZE
    if (pixels == '22px') {
      // Change main heading size for large screens
      if (window.innerWidth > 768) {
        changeMainHeadingSize('5.2rem');
      }
      /* For small screens, change the formatting and grid layout of the bottom area
      (where the Load button and the Scroll up arrow are)
      so that it is all in one column when screen not large enough to display a row*/
      else {
        changeMainHeadingSize('2rem');
        if (document.getElementsByClassName('reviews-expand')[0]) {
          let bottomArea = document.getElementsByClassName('reviews-expand')[0];
          bottomArea.style.gridTemplateColumns = '1fr';
          bottomArea.style.gridTemplateRows = '1fr 1fr';
          bottomArea.style.gridTemplateAreas = ' "loadbutton" "uparrow"';
          bottomArea.style.justifyContent = 'start';
          bottomArea.style.justifyItems = 'start';
        }
        else if (document.getElementsByClassName('travel-events-expand')[0]) {
          let bottomArea = document.getElementsByClassName('travel-events-expand')[0];
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
    }
    // SMALL TEXT SIZE
    else if (pixels == '14px') {
      if (window.innerWidth > 768) {
        changeMainHeadingSize('5.8rem');
      }
    }
    // EXTRA SMALL TEXT SIZE
    else {
      if (window.innerWidth > 768) {
        changeMainHeadingSize('4.2rem');
      }
      else {
        changeMainHeadingSize('9vw');
      }
    }
  }
  
  // ADD EVENT LISTENERS FOR CLICKS ON DIFFERENT TEXTSIZE BUTTONS
  // ACCESSIBILITY MENU
  function textSizeListeners() {
  
    // Gets a list of buttons for changing the text size
    let text_options = document.getElementById("text-size-options");
    let text_choice_buttons = text_options.getElementsByTagName("button");
    text_choice_buttons = Array.from(text_choice_buttons);
  
    text_choice_buttons.forEach((button) => {
      // Stores new font size for whole doc
      let newTextSize;
      if (button.id == "large-text")
      {
        newTextSize = '22px';
      }
      else if (button.id == "medium-text")
      {
        newTextSize = '18px';
      }
      else if (button.id == "small-text")
      {
        newTextSize = '14px';
      }
      else
      {
        newTextSize = '12px';
      }
      button.addEventListener('click', function() {
        console.log('clicked');
        changeTextSize(newTextSize);
      })
    })
  }
  
  