// FUNCTIONS FOR HIDING AND EXPANDING CONTENT ON THE REVIEWS PAGES

/* SIMPLE HIDE/SHOW TOGGLE FOR PAGES WHOSE MAIN CONTAINERS
HAVE AN EASY NUMBER OF COLUMNS TO MANAGE (1 OR 2) */
function toggleHidden(containerElem, notHiddenClassName) {
    let containerChildren = containerElem.children;
    // When click on the LoadMore button on the page, do this
    loadMoreButton.addEventListener('click', function () {
        // After the first 2 HTML elements, toggle the Hidden ClassName on and off
        for (var i = 2; i < containerChildren.length; i++) {
            containerChildren[i].classList.toggle(notHiddenClassName);
            containerChildren[i].classList.toggle('hidden');
        }
        /* Toggles the text in the expansion button between 'Hide'
        and 'Load'/'Read' more items by setting a local storage variable
        for the HTML content of the button when it is NOT set to
        'Hide' */
        if (loadMoreButton.innerHTML != 'Hide') {
            localStorage.setItem('buttonHTML', loadMoreButton.innerHTML);
            loadMoreButton.innerHTML = 'Hide';
        }
        else {
            loadMoreButton.innerHTML = localStorage.getItem('buttonHTML');
        }
    })
}



// MORE COMPLEX FUNCTIONALITY FOR WEB PAGES WHICH HAVE THEIR CONTENT
// ORGANIZED IN A VARIABLE NUMBER OF COLUMNS, WITH SOMETIMES HAVING
// 3 COLUMNS ON THE PAGE

function hideItems() {
    // Gets the children elements of the parent element
    var articles = document.getElementsByClassName('reviews-content')[0].children;

    // On smaller screens, hide all the elements from the fourth one onwards
    if (window.innerWidth > 1200) {
        for (var i = 3; i < articles.length; i++) {
            articles[i].classList.remove('not-hidden');
            articles[i].classList.add('hidden');
        }
    }
    // For larger screens, hide all the elements from the fifth element onwards
    else {
        for (var i = 4; i < articles.length; i++) {
            articles[i].classList.remove('not-hidden');
            articles[i].classList.add('hidden');
        }
    }
}

// Displays all the 'hidden' elements by changing their className properties
function showItems() {
    // Gets main child elements in parent container
    var articles = document.getElementsByClassName('reviews-content')[0].children;

    // Iterates over child elements and removes their 'hidden' class
    for (var i = 0; i < articles.length; i++) {
        if (articles[i].classList.contains('hidden')) {
            articles[i].classList.remove('hidden');
            articles[i].classList.add('not-hidden');
        }
    }
}

// Attribution: https://stackoverflow.com/questions/52570291/scrollintoview-20px-above-element
// Scrolls to a position on the screen just above a selected element
function scrollToJustAboveElement(element, marginAbove) {
    var dimensions = element.getBoundingClientRect();
    window.scrollTo(window.scrollX, dimensions.top - marginAbove + window.scrollY);
}


// Creates an event listener on click of the show/hide more button
// On the click event, hides or displays the items in the main container of a Reviews page
function createEventListenerForShowMoreButton() {
    let title = document.getElementsByClassName('reviews-title')[0];
    // Adds a click event listener to the button
    loadMoreButton.addEventListener('click', function () {
        // If local storage variable is set to 'hidden', then change this and show the items
        if (localStorage.getItem('areHidden') == 'hidden') {
            showItems();
            // Set localStorage variable to visible
            localStorage.setItem('areHidden', 'visible');
            // Change text of button attached to Event Listener
            loadMoreButton.innerHTML = 'Hide';
        }
        else {
            // If on click, the items are displayed, then hide them
            hideItems();
            // Set localStorage variable to hidden
            localStorage.setItem('areHidden', 'hidden');
            // Scroll above the element selected in the arguments
            scrollToJustAboveElement(title, 200);
            // Change text of button attached to Event Listener
            loadMoreButton.innerHTML = 'Load More...';
        }
    })
}