let mainContentContainer = document.getElementsByClassName('travel-events-content')[0];
toggleHidden(mainContentContainer, 'not-hidden');

// Stores image sizes in objects for different screen-sizes and fonts for travel/events reviews pages
function setTravelEventsIconsImageParameters() {
    let array = [];
    let imageObject = {
        // Set width using view width units which adapts to the screen size to prevent overflowing
        className: 'travel-location-image',
        largeTextSize : {
            smallScreenWidth: '80vw',
            smallScreenHeight: '60vw',
            midScreenWidth: '90vw',
            midScreenHeight: '50vw',
            largeScreenWidth: '42vw',
            largeScreenHeight: '30vw'
        },
        midTextSize : {
            smallScreenWidth: '70vw',
            smallScreenHeight: '40vw',
            midScreenWidth: '75vw',
            midScreenHeight: '45vw',
            largeScreenWidth: '40vw',
            largeScreenHeight: '25vw',
        },
        smallTextSize: {
            smallScreenWidth: '80vw',
            smallScreenHeight: 'auto',
            midScreenWidth: '70vw',
            midScreenHeight: '40vw',
            largeScreenWidth: '40vw',
            largeScreenHeight: '20vw',
        },
        extraSmallTextSize: {
            smallScreenWidth: '18rem',
            smallScreenHeight: '8rem',
            midScreenWidth: '65vw',
            midScreenHeight: '35vw',
            largeScreenWidth: '40vw',
            largeScreenHeight: '18vw',
        }
    }
    array.push(imageObject);
    return array;
}
