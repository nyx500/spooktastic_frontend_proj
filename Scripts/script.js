var myDropdown = document.getElementById('dropdown');
var myBlack = 'var(--off-black)';
var myWhite = 'var(--off-white)';
var myRed = 'var(--this-red)';
var myLightGrey = 'var(--this-light-grey)';
var linearGradientLight = 'linear-gradient(var(--this-mid-grey), var(--off-black), var(--this-mid-grey))';
var linearGradientDark = 'linear-gradient(var(--this-light-grey), var(--off-white), var(--this-light-grey))';
// FREQUENTLY USED (FOR DARK/LIGHT MODE) HTML ELEMENTS THAT MUST CHANGE COLOR
// Links and buttons on the left of the navbar
var leftHandMenuLinks = [
  document.getElementById('large-text'),
  document.getElementById('medium-text'),
  document.getElementById('small-text'),
  document.getElementById('extra-small-text'),
  document.getElementById('navbar-logo-text')
]
// Link list on the right of the navbar
var rightHandMenuLinks = [
  document.getElementById('main-nav-home-link'),
  document.getElementById('main-nav-books-link'),
  document.getElementById('main-nav-films-link'),
  document.getElementById('main-nav-music-link'),
  document.getElementById('main-nav-travel-link'),
  document.getElementById('main-nav-events-link'),
  document.getElementById('main-nav-about-link'),
  document.getElementById('main-nav-write-link')
]
// Links on the right of the footer
var footerLinks = [
  document.getElementById('footer-nav-home-link'),
  document.getElementById('footer-nav-books-link'),
  document.getElementById('footer-nav-films-link'),
  document.getElementById('footer-nav-music-link'),
  document.getElementById('footer-nav-travel-link'),
  document.getElementById('footer-nav-events-link'),
  document.getElementById('footer-nav-about-link'),
  document.getElementById('footer-nav-write-link')
]


// SETS COLOR OF HTML ELEMENTS WHEN NOT IN "DARK MODE"
function lightColorSettings()
{
  var stickyNav = document.getElementsByClassName('sticky1')[0];

  document.getElementsByTagName('main')[0].style.backgroundColor = myWhite;
  document.getElementsByTagName('main')[0].style.color = myBlack;
  document.getElementsByTagName('footer')[0].style.backgroundColor = myLightGrey;
  document.getElementsByTagName('footer')[0].style.color = myBlack;
  if (document.getElementsByClassName('load-more'))
  { 
    var loadMoreButtons = document.getElementsByClassName('load-more');
    for (var i = 0; i < loadMoreButtons; i++)
    {
      loadMoreButtons[i].style.backgroundImage = linearGradientLight;
      loadMoreButtons[i].style.color = myWhite;
    }
  }
  if (document.getElementById('read-more'))
  {
    document.getElementById('read-more').style.backgroundImage = linearGradientLight;
    document.getElementById('read-more').style.color = myWhite;
  }

  if (document.getElementById('aside-reviews'))
  {
    document.getElementById('aside-reviews').style.backgroundColor = myLightGrey;
    document.getElementById('aside-reviews').style.color = myBlack;
  }

  document.getElementById('dropdown').style.backgroundColor = myLightGrey;
  document.getElementById('dropdown').style.color = myBlack;

  for (var i = 0; i < footerLinks.length; i++)
  {
    footerLinks[i].style.color = myBlack;
  }

  if (stickyNav != undefined)
  {
    stickyNav.style.backgroundColor = myLightGrey;
    stickyNav.style.color = myBlack;

    for(var i = 0; i < leftHandMenuLinks.length; i++)
    {
      leftHandMenuLinks[i].style.color = myBlack;
    }

    for(var i = 0; i < rightHandMenuLinks.length; i++)
    {
      rightHandMenuLinks[i].style.color = myBlack;
    }
  }
  else
  {
    for(var i = 0; i < leftHandMenuLinks.length; i++)
    {
      leftHandMenuLinks[i].style.color = myWhite;
    }
  }
}

// SETS COLOR OF HTML ELEMENTS IN "DARK MODE"
function darkColorSettings() {
  var stickyNav = document.getElementsByClassName('sticky1')[0];
  document.getElementsByTagName('main')[0].style.backgroundColor = myBlack;
  document.getElementsByTagName('main')[0].style.color = myWhite;

  document.getElementsByTagName('footer')[0].style.backgroundColor = 'black';
  document.getElementsByTagName('footer')[0].style.color = myWhite;

  if (document.getElementsByClassName('load-more'))
  { 
    var loadMoreButtons = document.getElementsByClassName('load-more');
    for (var i = 0; i < loadMoreButtons; i++)
    {
      loadMoreButtons[i].style.backgroundImage = linearGradientDark;
      loadMoreButtons[i].style.color = myBlack;
    }
  }

  if (document.getElementById('read-more'))
  {
    document.getElementById('read-more').style.backgroundImage = linearGradientDark;
    document.getElementById('read-more').style.color = myBlack;
  }

  if (document.getElementById('aside-reviews'))
  {
    document.getElementById('aside-reviews').style.backgroundColor = myBlack;
    document.getElementById('aside-reviews').style.color = myWhite;

  }

  document.getElementById('dropdown').style.backgroundColor = myBlack;
  document.getElementById('dropdown').style.color = myWhite;

  for (var i = 0; i < footerLinks.length; i++)
  {
    footerLinks[i].style.color = myWhite;
  }

  if (stickyNav != undefined)
  {
    stickyNav.style.backgroundColor = myBlack;
    stickyNav.style.color = myWhite;

    for(var i = 0; i < leftHandMenuLinks.length; i++)
    {
      leftHandMenuLinks[i].style.color = myWhite;
    }
    for(var i = 0; i < rightHandMenuLinks.length; i++)
    {
      rightHandMenuLinks[i].style.color = myWhite;
    }
  }
  else
  {
    for(var i = 0; i < leftHandMenuLinks.length; i++)
    {
      leftHandMenuLinks[i].style.color = myWhite;
    }
  }
}

// SETS LOCAL STORAGE FOR DARK AND LIGHT MODE
function changeColorMode(){
  var darkLightButton = document.getElementById('dark-mode');
  if (localStorage.getItem('colorMode') == 'light')
  {
    darkColorSettings();
    darkLightButton.innerHTML = 'Light Mode';
    localStorage.setItem('colorMode', 'dark');
  }
  else
  {
    lightColorSettings();
    darkLightButton.innerHTML = 'Dark Mode';
    localStorage.setItem('colorMode', 'light');
  }
}

// CHANGES COLOR MODE WHEN COLOR MODE BUTTON IS PRESSED
function darkLightToggle()
{
  var darkLightButton = document.getElementById('dark-mode');

  darkLightButton.addEventListener('click', function() {

    if (!localStorage.getItem('colorMode'))
    {
      localStorage.setItem('colorMode', 'light');
    }
    changeColorMode();
  }) 
}

// FUNCTIONS FOR HIDING AND EXPANDING CONTENT ON THE PAGE
/* Takes 3 args: the element whose children are to be
displayed/hidden, the maximum number of columns these children
take up on the screen, the class name of these child elements
when they are NOT hidden */
function hideItems(element, maxColumnNum, notHiddenClassName)
{ 
  var articles = element.children;
  if (maxColumnNum == 3)
  {
    if (window.innerWidth > 1200)
    {
      for (var i = 3; i < articles.length; i++)
      {
        articles[i].classList.remove(notHiddenClassName);
        articles[i].classList.add('hidden');
      }
    }
    else
    {
      for (var i = 4; i < articles.length; i++)
      {
        articles[i].classList.remove(notHiddenClassName);
        articles[i].classList.add('hidden');
      }
    }
  }
  else if (maxColumnNum == 2)
  { 
    for (var i = 4; i < articles.length; i++)
    { 
      articles[i].classList.remove(notHiddenClassName);
      articles[i].classList.add('hidden');
    }
  }
}

function showItems(element, notHiddenClassName)
{ 
  var articles = element.children;
  for (var i = 0; i < articles.length; i++)
    {
      if (articles[i].classList.contains('hidden'))
      {
        articles[i].classList.remove('hidden');
        articles[i].classList.add(notHiddenClassName);
      }
    }
}
// Attribution: https://stackoverflow.com/questions/52570291/scrollintoview-20px-above-element
// SCROLL JUST ABOVE SELECTED ELEMENT
function scrollToJustAboveElement (element, marginAbove){
  var dimensions = element.getBoundingClientRect();
  window.scrollTo(window.scrollX, dimensions.top - marginAbove + window.scrollY);
}

// Creates an event listener on click of the show/hide more button
/* Takes 6 args: the button to add the event listener to,
 the variable name in localStorage to store whether the page's
 items are hidden or displayed, the element whose children
 are to be shown or hidden, the element to scroll to
 after the items are hidden (usually at top of main part of page),
 the maximum number of columns of items (for the
 largest screen size) on the respective page, e.g. book reviews
 have 3 columns on large screens, travel and events have 2,
 and finally the class name of the elements to-be-hidden
 when they are NOT being hidden (so that this class name 
 can be toggled)*/
function createEventListenerForShowMoreButton(
  targetButton, storageName, targetElement, scrollElement, maxColNum,
  notHiddenClassName
  )
{ 
  // Checks if the target button exists
  if (targetButton)
  { 
    // Event listener - when click on the "load more/hide" button
    targetButton.addEventListener('click', function() {
      // If items hidden, then show them
      if (localStorage.getItem(storageName) == 'hidden')
      { 
        showItems(targetElement, notHiddenClassName);
        localStorage.setItem(storageName, 'visible');
        targetButton.innerHTML = 'Hide';
      }
      else
      {
        // If items shown, then hide them
        hideItems(targetElement, maxColNum, notHiddenClassName);
        localStorage.setItem(storageName, 'hidden');
        scrollToJustAboveElement(scrollElement, 200);
        targetButton.innerHTML = 'Load More...';
      }
    })
  }
}

// Adds event listeners for all the buttons that show/hide various pages' content
function addShowExtraItemsListeners(){

  // Books reviews page load more button
  if (document.getElementById('load-more-books'))
  { 
    createEventListenerForShowMoreButton(
      document.getElementById('load-more-books'),
      'bottom_books_elements',
      document.getElementById('review-articles-books'),
      document.getElementsByClassName('reviews-title')[0],
      3,
      'not-hidden'
    )
  }

  
  // Films page load more button
  if (document.getElementById('load-more-films'))
  { 
    createEventListenerForShowMoreButton(
      document.getElementById('load-more-films'),
      'bottom_films_elements',
      document.getElementById('review-articles-films'),
      document.getElementsByClassName('reviews-title')[0],
      3,
      'travel-not-hidden'
    )
  }

  // Travel page load more button
  if (document.getElementById('load-more-travel'))
  { 
    createEventListenerForShowMoreButton(
      document.getElementById('load-more-travel'),
      'bottom_travel_elements',
      document.getElementById('travel-content'),
      document.getElementById('travel-content'),
      2,
      'travel-not-hidden'
    )
  }

  // Events page load more button
  if (document.getElementById('load-more-events'))
  { 
    createEventListenerForShowMoreButton(
      document.getElementById('load-more-events'),
      'bottom_events_elements',
      document.getElementById('events-content'),
      document.getElementById('events-content'),
      2,
      'event-not-hidden'
    )
  }

  

}

// FUNCTIONS FOR CHANGING TEXT SIZE

// CHANGE SIZE OF ICONS ON REVIEW PAGES
function changeReviewIconSize(newSizeInPixels)
{
  var reviewIcons = document.getElementsByClassName('media-icon');
  if (reviewIcons.length != 0)
  {
    for (var j = 0; j < reviewIcons.length; j++)
    {
      {
        reviewIcons[j].style.width = newSizeInPixels;
      }
    }
  }
}

// FUNCTION TO CHANGE SIZE OF JUST THE MAIN HEADING (SPOOKTASTIC)
function changeMainHeadingSize(newSize)
{
  let mainHeading = document.getElementById('main-heading');
  mainHeading.style.fontSize = newSize;
}

// FUNCTION TO CHANGE TEXT SIZE OF WHOLE PAGE
function changeTextSize(pixels) {

  // Sets local storage with text size in pixels
  localStorage.setItem('textSize', pixels);

  // Change the text size of the whole page (html element) in general
  document.getElementsByTagName('html')[0].style.fontSize = pixels;

  // LARGE TEXT SIZE
  if (pixels == '22px')
  { 
    // Change main heading size for large screens
    if (window.innerWidth > 768)
    {
      changeMainHeadingSize('5.2rem');
    }
    // Change main heading size for small screens
    else
    {
      changeMainHeadingSize('12vw');
    }
    // Change size of images on Book/Film review pages
    // Avoids overflow over pages
    changeReviewIconSize('11rem');
  }
  // MEDIUM TEXT SIZE
  else if (pixels == '18px')
  { 
    if (window.innerWidth > 768)
    {
      changeMainHeadingSize('4.8rem');
    }
    else
    {
      changeMainHeadingSize('11vw');
    }
    changeReviewIconSize('10rem');
  }
  // SMALL TEXT SIZE
  else if (pixels == '14px')
  { 
    if (window.innerWidth > 768)
    {
      changeMainHeadingSize('4.3rem');
    }
    else
    {
      changeMainHeadingSize('10vw');
    }
    changeReviewIconSize('16rem');
  }
  // EXTRA SMALL TEXT SIZE
  else
  { 
    if (window.innerWidth > 768)
    {
      changeMainHeadingSize('4.2rem');
    }
    else
    {
      mainHeading.style.fontSize = '10vw';
    }
    changeMainHeadingSize('18rem');
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
  for (var i = 0; i < text_choice_buttons.length; i++)
  { 
    if (text_choice_buttons[i].id == "large-text")
      { 
        text_choice_buttons[i].addEventListener('click', function()
        {
          changeTextSize('22px');
        })
      }
      else if (text_choice_buttons[i].id == "medium-text")
      { 
        text_choice_buttons[i].addEventListener('click', function()
        {
          changeTextSize('18px');
        })
      }
      else if (text_choice_buttons[i].id == "small-text")
      { 
        text_choice_buttons[i].addEventListener('click', function()
        {
          changeTextSize('14px');
        })
      }
      else if (text_choice_buttons[i].id == "extra-small-text")
      { 
        text_choice_buttons[i].addEventListener('click', function()
        {
          changeTextSize('12px');
        })
      }
  }
} 


// WAIT UNTIL WINDOW LOADS TO ADD ALL EVENT LISTENERS AND SET LOCAL STORAGE VALUES
window.onload = function(){

  if (localStorage.getItem('textSize') == null)
  {
    localStorage.setItem('textSize', '18px');
  }
  else
  { 
    let textSize = localStorage.getItem('textSize');
    changeTextSize(textSize);
  }


  var colorMode = localStorage.getItem('colorMode');
  /* If color settings exist, make sure they are applied for 
  every other page on the web site, so not lost when navigate to other page */
  if (!colorMode || colorMode == 'light')
  {
    lightColorSettings();
  }
  else{
    darkColorSettings();
  }
  darkLightToggle();

  var repeatedElementsContainer;

  if (document.getElementById('review-articles-books'))
  {
    repeatedElementsContainer = document.getElementById('review-articles-books');
    hideItems(repeatedElementsContainer, 3, 'books-not-hidden');
    localStorage.setItem('bottom_books_elements', 'hidden');
  }

  if (document.getElementById('review-articles-films'))
  {
    repeatedElementsContainer = document.getElementById('review-articles-films');
    hideItems(repeatedElementsContainer, 3, 'films-not-hidden');
    localStorage.setItem('bottom_films_elements', 'hidden');
  }

  if (document.getElementById('travel-content'))
  { 
    repeatedElementsContainer = document.getElementsById('travel-content');
    hideItems(repeatedElementsContainer, 2, 'travel-not-hidden');
    localStorage.setItem('bottom_travel_elements', 'hidden');
  }

  if (document.getElementById('events-content'))
  { 
    repeatedElementsContainer = document.getElementById('events-content');
    hideItems(repeatedElementsContainer, 2, 'event-not-hidden');
    localStorage.setItem('bottom_events_elements', 'hidden');
  }


  addShowExtraItemsListeners();

  textSizeListeners();

}

// Closes dropdown menu on outside click
document.addEventListener("click", function(event){
  if(event.target.id != "menu-button" && event.target.className != "dropdown-link-div")
  {
    if(myDropdown.style.display != 'none')
    {
      myDropdown.style.display = 'none';
    }
  }
}
)

// When the user scrolls the page, execute myFunction
// Attribution: Fixed navbar inspired by this W3Schools Tutorial https://www.w3schools.com/howto/howto_js_sticky_header.asp
window.addEventListener("scroll", function() {
    if(window.innerWidth > 768)
    {
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
    var navLinks = document.getElementById('main-navbar-list').children;
    navLinks = Array.from(navLinks);
        
    if (window.pageYOffset > nav.offsetTop) 
    {
      nav.classList.add("sticky1");

      var logo = document.getElementById('navbar-logo-text');

      if (localStorage.getItem('colorMode') == 'light')
      {
        logo.style.color = myBlack;
        nav.style.backgroundColor = myLightGrey;
      }
      else
      {
        logo.style.color = myWhite;
        nav.style.backgroundColor = myBlack;
      }

      textSizeOptions.forEach(button => {
        // The color of the links for accessibility depends on
        // whether the color mode is set to dark or light mode
        if (localStorage.getItem('colorMode') == 'light')
        {
          button.style.color = myBlack;
        }
        else
        {
          button.style.color = myWhite;
        }
      })

      // Gets the anchor tag elem in every li elem and changes its color
      navLinks.forEach(link => {
        if (localStorage.getItem('colorMode') == 'light')
        { 
          link.children[0].style.color = myBlack;
          
          link.children[0].addEventListener('mouseout', () => {
          link.children[0].style.color = myBlack;
          });
        }
        else
        {
          link.children[0].style.color = myWhite;
          link.children[0].addEventListener('mouseout', () => {
            link.children[0].style.color = myWhite;
            });
        }
        link.children[0].addEventListener('mouseover', () => {
          link.children[0].style.color = myRed;
        });
    })
  }
    else
    { 
      nav.style.background = 'none';
      nav.classList.remove("sticky1");
      textSizeOptions.forEach(button => {
        button.style.color = myWhite;
      })
      
      navLinks.forEach(link => {
        link.children[0].style.color = myWhite;
        link.children[0].addEventListener('mouseover', () => {
          link.children[0].style.color = myRed;
        });
        link.children[0].addEventListener('mouseout', () => {
          link.children[0].style.color = myWhite;
        })
      })
      document.getElementById('navbar-logo-text').style.color = myWhite;
    }
}



if (document.getElementById('scroll-up-arrow') != null)
{
  document.getElementById('scroll-up-arrow').onclick = function(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}

document.getElementById('menu-button').onclick = function(){
  if (document.getElementById('dropdown').style.display == 'inline-block')
  {
    document.getElementById('dropdown').style.display = 'none';
  }
  else
  {
    document.getElementById('dropdown').style.display = 'inline-block';
  }
}

function closeDropdownOnOutsideClick()
{
  var myDropdown = document.getElementById('dropdown');

  document.getElementsByTagName('html')[0].addEventListener("click", function(event){
      if(event.target.id != "menu-button" && event.target.className != "dropdown-link-div")
      {
        if(myDropdown.style.display != 'none')
        {
          myDropdown.style.display = 'none';
        }
      }
    }
  )
}