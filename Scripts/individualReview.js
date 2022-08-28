// FUNCTIONS JUST FOR INDIVIDUAL REVIEW PAGES
let articleContainer = document.getElementById('article-text');
toggleHidden(articleContainer, 'review-article-section');

// Stores image classNames for these web pages and sizing parameters in a global
// Will use this to resize images on font changing size for accessibility
var singleImageObject = {
    className: 'review-single-image',
    largeTextSize : {
        smallScreenWidth: '20rem',
        smallScreenHeight: 'auto',
        midScreenWidth: '20rem',
        midScreenHeight: 'auto',
        largeScreenWidth: '24rem',
        largeScreenHeight: 'auto'
    },
    midTextSize : {
        smallScreen: '20rem',
        smallScreenHeight: 'auto',
        midScreenWidth: '20rem',
        midScreenHeight: 'auto',
        largeScreenWidth: '24rem',
        largeScreenHeight: 'auto'
    },
    smallTextSize: {
        smallScreenWidth: '16rem',
        smallScreenHeight: 'auto',
        midScreenWidth: '30rem',
        midScreenHeight: 'auto',
        largeScreenWidth: '24rem',
        largeScreenHeight: 'auto'
    },
    extraSmallTextSize: {
        smallScreenWidth: '16rem',
        smallScreenHeight: 'auto',
        midScreenWidth: '30rem',
        midScreenHeight: 'auto',
        largeScreenWidth: '24rem',
        largeScreenHeight: 'auto'
    }
}

var galleryImageObject = {
    className: 'gallery-img',
    largeTextSize : {
        smallScreenWidth: '12rem',
        smallScreenHeight: 'auto',
        midScreenWidth: '20rem',
        midScreenHeight: 'auto',
        largeScreenWidth: '12rem', 
        largeScreenHeight: '8rem'
    },
    midTextSize : {
        smallScreenWidth: '12rem',
        smallScreenHeight: 'auto',
        midScreenWidth: '16rem',
        midScreenHeight: 'auto',
        largeScreenWidth: '14rem',
        largeScreenHeight: '8rem'
    },
    smallTextSize: {
        smallScreenWidth: '12rem',
        smallScreenHeight: 'auto',
        midScreenWidth: '18rem',
        midScreenHeight: 'auto',
        largeScreenWidth: '16rem',
        largeScreenHeight: '9rem'
    },
    extraSmallTextSize: {
        smallScreenWidth: '12rem',
        smallScreenHeight: 'auto',
        midScreenWidth: '16rem',
        midScreenHeight: 'auto',
        largeScreenWidth: '16rem',
        largeScreenHeight: '9rem'
    }
}

kindsofImageObject = [];
kindsofImageObject.push(singleImageObject);
kindsofImageObject.push(galleryImageObject);