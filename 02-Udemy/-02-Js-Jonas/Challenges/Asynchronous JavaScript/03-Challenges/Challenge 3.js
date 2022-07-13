'use strict';

/////////////////////////////////////////////////////////
/////////////////// Coding Challenge 3 //////////////////
/////////////////////////////////////////////////////////
const testData = ['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg'];
const imgContainer = document.querySelector('.images');
const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.setAttribute('src', imgPath);
    // img.style.display = 'none';
    imgContainer.appendChild(img);
    resolve(img);
    reject(() => new Error('Could not load the image!'));
  });
};

// PART 1
const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('./img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';
    await wait(2);

    // Load image 2
    img = await createImage('./img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
    await wait(2);

    // Load image 3
    img = await createImage('./img/img-3.jpg');
    console.log('Image 3 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {}
};
// loadNPause();

//  PART 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async path => await createImage(path));
    const imgsEl = await Promise.all(imgs);

    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.error(error);
  }
};
loadAll(testData);
