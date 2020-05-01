// landing pagr
let landingPage =  document.querySelector('.landing-page');

// create empty erray
let imagesArray = [];

// loop for push the array
for(i=1; i<=5; i++) {
    let l = '0' + i + '.jpg';
    imagesArray.push(l);
}


// change the images
setInterval(() => {
    // get random number
    let randomInt = Math.floor(Math.random() * imagesArray.length);

    // change the background image
    landingPage.style.backgroundImage = `url('images/header/${imagesArray[randomInt]}')`;

}, 5000);
