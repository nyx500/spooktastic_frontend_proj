// CODE JUST FOR BOOKS/MOVIES/MUSIC REVIEWS PAGES

/* Adds an event listener when the LoadMore button is
 clicked to show/hide more elements in main container */
hideItems();
createEventListenerForShowMoreButton();

let imageObject = {
    className: 'media-icon',
    largeTextSize : {
        smallScreenWidth: '12rem',
        smallScreenHeight: '14rem',
        midScreenWidth: '14rem',
        midScreenHeight: '16rem',
        largeScreenWidth: '11rem',
        largeScreenHeight: '14rem'
    },
    midTextSize : {
        smallScreenWidth: '12rem',
        smallScreenHeight: '16rem',
        midScreenWidth: '14rem',
        midScreenHeight: '18rem',
        largeScreenWidth: '10rem',
        largeScreenHeight: '14rem',
    },
    smallTextSize: {
        smallScreenWidth: '10rem',
        smallScreenHeight: '14rem',
        midScreenWidth: '12rem',
        midScreenHeight: '16rem',
        largeScreenWidth: '12rem',
        largeScreenHeight: '16rem'
    },
    extraSmallTextSize: {
        smallScreenWidth: '9rem',
        smallScreenHeight: '12rem',
        midScreenWidth: '12rem',
        midScreenHeight: '16rem',
        largeScreenWidth: '10rem',
        largeScreenHeight: '14rem'
    }
}
kindsofImageObject = [];
kindsofImageObject.push(imageObject);