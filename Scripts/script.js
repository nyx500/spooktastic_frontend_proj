var myDropdown = document.getElementById('dropdown');
var myBlack = 'var(--off-black)';
var myWhite = 'var(--off-white)';
var myRed = 'var(--this-red)';
var myLightGrey = 'var(--this-light-grey)';
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



function lightColorSettings()
{
  var stickyNav = document.getElementsByClassName('sticky1')[0];

  document.getElementsByTagName('main')[0].style.backgroundColor = myWhite;
  document.getElementsByTagName('main')[0].style.color = myBlack;
  document.getElementsByTagName('footer')[0].style.backgroundColor = myLightGrey;
  document.getElementsByTagName('footer')[0].style.color = myBlack;

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

function darkColorSettings() {
  var stickyNav = document.getElementsByClassName('sticky1')[0];
  document.getElementsByTagName('main')[0].style.backgroundColor = myBlack;
  document.getElementsByTagName('main')[0].style.color = myWhite;

  document.getElementsByTagName('footer')[0].style.backgroundColor = 'black';
  document.getElementsByTagName('footer')[0].style.color = myWhite;

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

function changeColorMode(){
  if (localStorage.getItem('colorMode') == 'light')
  {
    darkColorSettings();
    localStorage.setItem('colorMode', 'dark');
  }
  else
  {
    lightColorSettings();
    localStorage.setItem('colorMode', 'light');
  }
}

// toggles from dark to light mode
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

window.onload = function(){
  document.getElementsByTagName('html')[0].style.fontSize = localStorage.getItem('textSize');
  
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

function changeImageSize(newSizeString)
{
  var reviewIcons = document.getElementsByClassName('media-icon');
  if (reviewIcons.length != 0)
  {
    for (var j = 0; j < reviewIcons.length; j++)
    {
      {
        reviewIcons[j].style.width = newSizeString;
      }
    }
  }
}


// functionality for choosing text size
var text_options = document.getElementById("text-size-options");

var text_choice_buttons = text_options.getElementsByTagName("button");

for (var i = 0; i < text_choice_buttons.length; i++)
{
  if (text_choice_buttons[i].id == "large-text")
    { 
      text_choice_buttons[i].addEventListener('click', function()
      {
        localStorage.setItem('textSize', '22px');
        document.getElementsByTagName('html')[0].style.fontSize = "22px";
        
         // Tablets screen
         /* If large text option is selected, then decrease image size
         for book/film icons if on the reviews listing page */
        if (window.innerWidth <= 900 && window.innerWidth >= 600)
        { 
          changeImageSize('14rem');
        }
        /* For smaller computer screens, make the accessibility menu one column
        with a few rows of options, instead of them all in one long row --> because when
        all buttons are in one long row, there is no space for the text-size buttons
        to be all in one line, so the different 'A' letters become vertically spread out
        and are not all together in one section.
        */
        // if (window.innerWidth >= 1200 && window.innerWidth <= 1565)
        // { 
        //   var accessibilityMenu = document.getElementById('accessibility-options');
        //   accessibilityMenu.style.gridTemplateColumns = '1fr';
        //   accessibilityMenu.style.gridTemplateRows = '1fr 1 fr';
        //   accessibilityMenu.style.gridTemplateAreas = '"darkbutton""textsizes"';
        // }
      })
    }
    else if (text_choice_buttons[i].id == "medium-text")
    { 
      text_choice_buttons[i].addEventListener('click', function()
      {
        localStorage.setItem('textSize', '16px');
        document.getElementsByTagName('html')[0].style.fontSize = "16px";
      })
    }
    else if (text_choice_buttons[i].id == "small-text")
    { 
      text_choice_buttons[i].addEventListener('click', function()
      {
        localStorage.setItem('textSize', '14px');
        document.getElementsByTagName('html')[0].style.fontSize = "14px";
      })
    }
    else if (text_choice_buttons[i].id == "extra-small-text")
    { 
      text_choice_buttons[i].addEventListener('click', function()
      {
        localStorage.setItem('textSize', '12px');
        document.getElementsByTagName('html')[0].style.fontSize = "12px";
      })
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
