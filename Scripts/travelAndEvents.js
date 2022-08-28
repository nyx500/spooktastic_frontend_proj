let mainContentContainer = document.getElementsByClassName('travel-events-content')[0];
toggleHidden(mainContentContainer, 'not-hidden');


let imageObject = {
    className: 'travel-location-image',
    largeTextSize : {
        smallScreenWidth: '80vw',
        smallScreenHeight: 'auto',
        midScreenWidth: '20rem',
        midScreenHeight: '14rem',
        largeScreenWidth: '20rem',
        largeScreenHeight: '14rem'
    },
    midTextSize : {
        smallScreenWidth: '12rem',
        smallScreenHeight: '10rem',
        midScreenWidth: '18rem',
        midScreenHeight: '14rem',
        largeScreenWidth: '24rem',
        largeScreenHeight: '14rem',
    },
    smallTextSize: {
        smallScreenWidth: '80vw',
        smallScreenHeight: 'auto',
        midScreenWidth: '16rem',
        midScreenHeight: '12rem',
        largeScreenWidth: '28rem',
        largeScreenHeight: '16rem',
    },
    extraSmallTextSize: {
        smallScreenWidth: '20rem',
        smallScreenHeight: '10rem',
        midScreenWidth: '16rem',
        midScreenHeight: 'auto',
        largeScreenWidth: '24rem',
        largeScreenHeight: '14rem',
    }
}
kindsofImageObject = [];
kindsofImageObject.push(imageObject);