// FUNCTIONS THAT ALLOW HTML ELEMENTS TO CHANGE COLOR WHEN THE DARK/LIGHT MODE BUTTON IS PRESSED

// Checks if the sticky navbar is open/exists
// If so, change colors of sticky and links inside it to the ones specified in the arguments
function checkForStickyNavBarAndChangeStyle(navbarBackground, textColor, rightMenuColorOnClose) {
    console.log('change');  
    // CHECKS IF STICKY NAVBAR EXISTS:
    // If so, define stickyNav variable as the HTML sticky element
    // If not, set stickyNav to 'null'
    var stickyNav;
    if (document.getElementsByClassName('sticky1')[0]) {
        stickyNav = document.getElementsByClassName('sticky1')[0];
    }
    else {
        stickyNav = null;
    }

    // If sticky navbar does exist, change its color to light grey
    if (stickyNav != null) {
        // Light mode: myLightGrey
        stickyNav.style.backgroundColor = navbarBackground;
        // Light mode: myBlack
        stickyNav.style.color = textColor;

        // Light mode navbar border
        if (textColor == myBlack)
        {
             stickyNav.style.border = '2px solid var(--this-mid-grey)';
        }
        // Dark mode navbar border
        else
        {
            stickyNav.style.border = '2px solid var(--this-dark-red)';
        }

        // Changes color of the links in the header if a sticky navbar is open
        for (var i = 0; i < leftHandMenuLinks.length; i++) {
            leftHandMenuLinks[i].style.color = textColor;
        }

        for (var i = 0; i < rightHandMenuLinks.length; i++) {
            rightHandMenuLinks[i].style.color = textColor;
        }
    }
    // If the sticky navbar is closed, change link color in header back to previous color
    else {
        // MyWhite
        for (var i = 0; i < leftHandMenuLinks.length; i++) {
            leftHandMenuLinks[i].style.color = myWhite;
        }
    }
}


// CHANGES THE COLOR OF SPECIFIC HTML ELEMENTS WHENEVER "LIGHT MODE" IS SELECTED
function lightColorSettings() {
    darkLightButton.innerHTML = "Dark Mode";

    mainContainer.style.backgroundColor = myWhite;
    mainContainer.style.color = myBlack;
    footer.style.backgroundColor = myLightGrey;
    footer.style.color = myBlack;

    // Changes color styling of the loadMoreButton on Reviews pages in Light Mode
    if (loadMoreButton != null) {
        loadMoreButton.style.backgroundImage = linearGradientLight;
        loadMoreButton.style.color = myWhite;
        loadMoreButton.style.border = '2px solid var(--off-black)';
        // When mouse goes over the loadMore button, create a box-shadow in grey
        loadMoreButton.addEventListener('mouseover', function (e) {
            e.target.style.boxShadow = '5px 5px var(--this-light-grey)';
        })
        // When the mouse is not over the loadMore button, remove the grey box-shadow
        loadMoreButton.addEventListener('mouseout', function (e) {
            e.target.style.boxShadow = 'none';
        })
    }

    // If there exists an aside element, make its background lighter
    if (aside != null) {
        aside.style.backgroundColor = myLightGrey;
        aside.style.color = myBlack;
        aside.style.border = '4px solid var(--this-mid-grey)';
    }

    // Changes color of dropdown menu's background to light grey
    dropdown.style.backgroundColor = myLightGrey;
    dropdown.style.color = myBlack;

    // Changes color of footer links to black
    for (var i = 0; i < footerLinks.length; i++) {
        footerLinks[i].style.color = myBlack;
    }

    // Deals with the cases of when there isn't/is a sticky navbar
    checkForStickyNavBarAndChangeStyle(myLightGrey, myBlack, myWhite);
}


// SETS COLOR OF SPECIFIC HTML ELEMENTS IN "DARK MODE"
function darkColorSettings() {

    darkLightButton.innerHTML = "Light Mode";

    mainContainer.style.backgroundColor = myBlack;
    mainContainer.style.color = myWhite;

    footer.style.backgroundColor = 'black';
    footer.style.color = myWhite;

    if (loadMoreButton != null) {
        loadMoreButton.style.backgroundImage = linearGradientDark;
        loadMoreButton.style.color = myBlack;
        // Adds dark grey box-shadow to LoadMore button on mouse over event
        loadMoreButton.addEventListener('mouseover', function (e) {
            e.target.style.boxShadow = '5px 5px var(--this-mid-grey)';
        })
        loadMoreButton.addEventListener('mouseout', function (e) {
            e.target.style.boxShadow = 'none';
        })
    }

    if (aside != null) {
        aside.style.backgroundColor = myBlack;
        aside.style.color = myWhite;
        aside.style.border = '4px solid var(--this-dark-red)';
    }

    dropdown.style.backgroundColor = myBlack;
    dropdown.style.color = myWhite;

    for (var i = 0; i < footerLinks.length; i++) {
        footerLinks[i].style.color = myWhite;
    }

    checkForStickyNavBarAndChangeStyle('black', myWhite, myWhite);

}

// SETS LOCAL STORAGE FOR DARK AND LIGHT MODE
function changeColorMode() {
    if (localStorage.getItem('colorMode') == 'light') {
        darkColorSettings();
        localStorage.setItem('colorMode', 'dark');
    }
    else {
        lightColorSettings();
        localStorage.setItem('colorMode', 'light');
    }
}

// ADDS CHANGE COLOR MODE FUNCTION TO DARK/LIGHT BUTTON EVENT LISTENER ON CLICK
function darkLightToggle() {
    darkLightButton.addEventListener('click', function () {
        if (!localStorage.getItem('colorMode')) {
            console.log(localStorage.getItem('colorMode'));
            localStorage.setItem('colorMode', 'light');
        }
        changeColorMode();
    })
}
