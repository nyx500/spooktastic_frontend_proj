// FREQUENTLY-ACCESSED HTML ELEMENTS

// GLOBALS FOR COMMONLY-ACCESSED ELEMENTS EXISTING ON EVERY ONE OF THE HTML PAGES
var dropdown = document.getElementById('dropdown');
// Store common CSS color values for changing color when toggling dark to light modes
var myBlack = 'var(--off-black)';
var myWhite = 'var(--off-white)';
var myRed = 'var(--this-red)';
var myLightGrey = 'var(--this-light-grey)';
var myMidGrey = 'var(--this-mid-grey)';
// Stores common linear gradient CSS colors when changing BUTTON color when toggling dark/light modes
var linearGradientLight = 'linear-gradient(var(--this-mid-grey), var(--off-black), var(--this-mid-grey))';
var linearGradientDark = 'linear-gradient(var(--this-mid-grey), var(--off-white), var(--this-mid-grey))';

// ELEMENTS COMMON TO ALL HTML PAGES
// TEXT-SIZE OPTIONS LINKS (TOP-LEFT HEADER) & LOGO
var leftHandMenuLinks = [
  document.getElementById('large-text'),
  document.getElementById('medium-text'),
  document.getElementById('small-text'),
  document.getElementById('extra-small-text'),
  document.getElementById('navbar-logo-text')
]

// MAIN NAVBAR (TOP-RIGHT HEADER) LINKS
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

// FOOTER LINKS
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

// BUTTON WHICH TOGGLES BETWEEN LIGHT AND DARK MODE
var darkLightButton = document.getElementById('dark-mode');

// INDIVIDUAL ELEMENTS WHOSE COLOR DEPENDS ON DARK/LIGHT MODE SETTINGS
var mainContainer = document.getElementsByTagName('main')[0];
var footer = document.getElementsByTagName('footer')[0];




/* ELEMENTS WHICH MIGHT NOT EXIST ON EVERY HTML PAGE THAT HAVE TO CHANGE COLOR DEPENDING
ON THE COLOR MODE WHICH IS SELECTED */

// IF "LOAD MORE"/EXPAND CONTENT BUTTON EXISTS, STORE IT AS GLOBAL
// ELSE, STORE THE GLOBAL TO 'NULL'
var loadMoreButton;
if (document.getElementsByClassName('load-more')[0]) {
  loadMoreButton = document.getElementsByClassName('load-more')[0];
}
else {
  loadMoreButton = null;
}

// IF AN ASIDE MENU EXISTS, STORE IT HERE
// ELSE, SET THE ASIDE VARIABLE TO NULL
var aside;
if (document.getElementsByTagName('aside')[0]) {
  aside = document.getElementsByTagName('aside')[0];
}
else {
  aside = null;
}


/* An array storing which kinds of image class are on the currently-loaded page,
as well as their size parameters
*/
var kindsOfImageObject = [];