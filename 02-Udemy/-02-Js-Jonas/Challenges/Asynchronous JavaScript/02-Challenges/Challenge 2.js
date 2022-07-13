'use strict';

/////////////////////////////////////////////////////////
/////////////////// Coding Challenge 2 //////////////////
/////////////////////////////////////////////////////////

///////////////////////////////////////
////////// Coding Challenge 2 /////////
///////////// MY SOLUTION /////////////
///////////////////////////////////////
 
const images = document.querySelector('.images');
const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.setAttribute('src', imgPath);
    images.appendChild(img);
    resolve(images.lastChild);
    reject(() => new Error('Could not load the image!'));
  });
};

createImage('./img/img-1.jpg')
  .then(res => {
    wait(2).then(() => {
      res.style.display = 'none';
    });
    return res;
  })
  .then(res => {
    wait(4).then(() => {
      res.src = './img/img-2.jpg';
      res.style.display = 'inline';
    });
    return res;
  })
  .then(res => {
    wait(6).then(() => {
      res.style.display = 'none';
    });
    return res;
  })
  .then(res => {
    wait(8).then(() => {
      res.src = './img/img-3.jpg';
      res.style.display = 'inline';
    });
    return res;
  })
  .then(res => {
    wait(10).then(() => {
      res.style.display = 'none';
    });
    return res;
  })
  .catch(err => console.error(err));
 

///////////////////////////////////////
////////// Coding Challenge 2 /////////
/////////// JONAS' SOLUTION ///////////
///////////////////////////////////////
/* 
const imgContainer = document.querySelector('.images');
const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.appendChild(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(() => new Error('Image not found!'));
    });
  });
};

let currentImage;
createImage('./img/img-1.jpg')
  .then(img => {
    currentImage = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return wait(2);
  })
  .then(() => createImage('./img/img-2.jpg'))
  .then(img => {
    currentImage = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return wait(2);
  })
  .then(() => createImage('./img/img-3.jpg'))
  .then(img => {
    currentImage = img;
    console.log('Image 3 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
  })
  .catch(err => console.error(err));
 */
