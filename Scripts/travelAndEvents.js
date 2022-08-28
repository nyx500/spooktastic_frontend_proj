let mainContentContainer = document.getElementsByClassName('travel-events-content')[0];
toggleHidden(mainContentContainer, 'not-hidden');

// Stores image sizes in objects for different screen-sizes and fonts for travel/events reviews pages
function setTravelEventsIconsImageParameters() {
    let array = [];
    let imageObject = {
        className: 'travel-location-image',
        largeTextSize : {
            smallScreenWidth: '12rem',
            smallScreenHeight: '10rem',
            midScreenWidth: '21rem',
            midScreenHeight: '15rem',
            largeScreenWidth: '20rem',
            largeScreenHeight: '14rem'
        },
        midTextSize : {
            smallScreenWidth: '14rem',
            smallScreenHeight: '10rem',
            midScreenWidth: '22rem',
            midScreenHeight: '18rem',
            largeScreenWidth: '22rem',
            largeScreenHeight: '12rem',
        },
        smallTextSize: {
            smallScreenWidth: '80vw',
            smallScreenHeight: 'auto',
            midScreenWidth: '30rem',
            midScreenHeight: '16rem',
            largeScreenWidth: '27rem',
            largeScreenHeight: '15rem',
        },
        extraSmallTextSize: {
            smallScreenWidth: '18rem',
            smallScreenHeight: '8rem',
            midScreenWidth: '28rem',
            midScreenHeight: '18rem',
            largeScreenWidth: '25rem',
            largeScreenHeight: '16rem',
        }
    }
    array.push(imageObject);
    return array;
}
