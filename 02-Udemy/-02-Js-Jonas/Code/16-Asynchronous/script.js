'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Create and add the country info
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} M</p>
        <p class="country__row"><span>🗣️</span>${Object.values(
          data.languages
        )}</p>
        <p class="country__row"><span>💰</span>${
          data.currencies[Object.keys(data.currencies)].name
        }</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// Create and add an Error message.
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// To get the location Coords from the browser
const getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

const whereAmIAsync = async function () {
  // Clear the error messages
  countriesContainer.textContent = '';
  try {
    // Geolocation => [latitude, longitude]
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const url = `https://geocode.xyz/${lat},${lng}?geoit=json&auth=629516855935306387680x114446`;
    // const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;

    // Reverse Geocoding => [Country name]
    const geoRes = await fetch(url);
    if (!geoRes.ok) throw new Error('Problem getting location data!');
    const geoData = await geoRes.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${geoData.country}`
    );
    if (!res.ok) throw new Error('Problem getting Country!');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${geoData.city}, ${geoData.country}`;
  } catch (err) {
    console.error(`💥 ${err.message} 💥`);
    renderError(`💥 ${err.message} 💥`);

    // Reject promise returned from async function
    throw err;
  }
};

const renderLocation = async function () {
  // If we have the country already return
  if (countriesContainer.childElementCount) return;

  try {
    console.clear();
    console.log('1: Will get location');
    const city = await whereAmIAsync();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: 💥 ${err.message} 💥`);
  }
  console.log('3: Finished getting location');
};
btn.addEventListener('click', renderLocation);

///////////////////////////////////////
/////////////// OLD WAY ///////////////
///////////////////////////////////////
/* 
const getCountry = country => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    renderCountry(data);
  });
};

getCountry('Egypt');
getCountry('Portugal');
 */

// CALLBACK HELL
/* 
// AJAX call country 1
const getCountryAndNeighbour = country => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render Country 1
    renderCountry(data);

    // Get Neighbour country (2)
    const neighbour = data.borders?.[0];
    console.log(neighbour);
    // AJAX call country 2
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request.send();

    request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      renderCountry(data, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('Portugal');
getCountryAndNeighbour('USA');
 */

///////////////////////////////////////
/////////////// NEW WAYs //////////////
///////////////////////////////////////

///////////////////////////////////////
//////// PROMISES AND FETCH API ///////
///////////////////////////////////////
/* 
const getCountry = country => {
  // fetch(`https://restcountries.com/v3.1/name/${country}`)
  //   .then(response => {
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(...data);
  //     // return response.json();
  //     renderCountry(data[0]);
  //   });
 
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

getCountry('Egypt');
 */

/* 
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
    return res.json();
  });
};
 */

/* const getCountryAndNeighbour = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}; */

/* 
const getCountryAndNeighbour = country => {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Neighbour country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => getCountryAndNeighbour('USA'));
 */

/* 
const getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      const url = `https://geocode.xyz/${lat},${lng}?geoit=json&auth=629516855935306387680x114446`;
      // const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
      return fetch(url);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding (${res.status})`);
      return res.json();
    })
    .then(res => {
      console.log(`You are in ${res.city}, ${res.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${res.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥💥💥`));
};

btn.addEventListener('click', whereAmI);
 */

// btn.addEventListener('click', () => {
//   const getCoords = pos => {
//     const { latitude, longitude } = pos.coords;
//     whereAmI(latitude, longitude);
//   };
//   navigator.geolocation.getCurrentPosition(getCoords, err =>
//     console.error(err)
//   );
// });

// The Event Loop in Practice
/* 
console.log('Test Start');
setTimeout(() => console.log('0 Sec timer'), 0);
Promise.resolve('Resolved promise 1 ').then(res => console.log(res));

Promise.resolve('Resolved promise 2 ').then(res => {
  for (let i = 0; i < 10000000; i++) {}
  console.log(res);
});
console.log('Test End');
 */

//// Building a Simple Promise ////
/* 
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You Win $$');
    } else {
      reject(new Error('You lost your money 😆'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

wait(1)
  .then(() => {
    console.log('I waited for 1 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 4 seconds'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).then(x => console.log(x));
 */

/////////////////////////////////////////////////////////
/////////////////// Coding Challenge 2 //////////////////
/////////////////////////////////////////////////////////

///////////////////////////////////////
////////// Coding Challenge 2 /////////
///////////// MY SOLUTION /////////////
///////////////////////////////////////
/* 
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
 */

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

///////////////////////////////////////////////////////
///////// Consuming Promises with Async/Await /////////
///////////////////////////////////////////////////////
/* 
const getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

const whereAmIAsync = async function () {
  // If we have the country already return
  if (countriesContainer.childElementCount) return;
  // Clear the error messages
  countriesContainer.textContent = '';
  try {
    // Geolocation => [latitude, longitude]
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // const url = `https://geocode.xyz/${lat},${lng}?geoit=json&auth=629516855935306387680x114446`;
    const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;

    // Reverse Geocoding => [Country name]
    const geoRes = await fetch(url);
    if (!geoRes.ok) throw new Error('Problem getting location data!');
    const geoData = await geoRes.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${geoData.country}`
    );
    if (!res.ok) throw new Error('Problem getting Country!');
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${geoData.city}, ${geoData.country}`;
  } catch (err) {
    console.error(`💥 ${err.message} 💥`);
    renderError(`💥 ${err.message} 💥`);

    // Reject promise returned from async function
    throw err;
  }
};
const renderLocation = async function () {
  try {
    console.log('1: Will get location');
    const city = await whereAmIAsync();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: 💥 ${err.message} 💥`);
  }
  console.log('3: Finished getting location');
};
btn.addEventListener('click', renderLocation);
 */

// console.log('1: Will get location');
// const city = whereAmIAsync();
// console.log(city);

// whereAmIAsync()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: 💥 ${err.message} 💥`))
//   .finally(() => console.log('3: Finished getting location'));

// IIFE (Immediately-invoked function expressions)
// (async function () {
//   try {
//     const city = await whereAmIAsync();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: 💥 ${err.message} 💥`);
//   }
//   console.log('3: Finished getting location');
// })();

///////////////////////////////////////////////////////
//////////// Running Promises in Parallel /////////////
///////////////////////////////////////////////////////
/* 
const getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
    return res.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    ////////// BAD PRACTICE => successively //////////
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([...data1.capital, ...data2.capital, ...data3.capital]);

    ////////// GOOD PRACTICE => IN PARALLEL //////////
    // If one fail, all fail.
    const data = await Promise.all([
      await getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      await getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      await getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    // console.log(data.map(c => c[0].capital[0]));
    console.log(data.flat().map(c => c.capital[0]));
  } catch (err) {
    console.error(`💥 ${err.message} 💥`);
    renderError(`💥 ${err.message} 💥`);
  }
};
// get3Countries('Egypt', 'USA', 'Canada');
 */
/* 
/////////////////////////////////////////////////////////
// Other Promise Combinators: race, allSettled and any //
/////////////////////////////////////////////////////////

//////////////////////////////////
////////// Promise.race //////////
//////////////////////////////////
// (async function () {
//   // Will only get one result: the fastest one.
//   const res = await Promise.race([
//     await getJSON(`https://restcountries.com/v3.1/name/Egypt`),
//     await getJSON(`https://restcountries.com/v3.1/name/Italy`),
//     await getJSON(`https://restcountries.com/v3.1/name/USA`),
//   ]);
//   console.log(...res);
// })();

const timeout = function (seconds) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('request tool too long ⏳'));
    }, seconds * 1000);
  });
};

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/Egypt`),
//     timeout(0.5),
//   ]);
//   console.log(...res);
// })();

//////////////////////////////////
/////// Promise.allSettled ///////
//////////////////////////////////
// Will return all the requests with its state.
// (async function () {
//   try {
//     const res = await Promise.allSettled([
//       getJSON(`https://restcountries.com/v3.1/name/Egypts`),
//       getJSON(`https://restcountries.com/v3.1/name/Italy`),
//       getJSON(`https://restcountries.com/v3.1/name/USA`),
//     ]);
//     console.log(res);
//   } catch (error) {
//     console.error(error);
//   }
// })();

//////////////////////////////////
////////// Promise.any ///////////
//////////////////////////////////
// Will return the first working one
// (async function () {
//   try {
//     const res = await Promise.any([
//       getJSON(`https://restcountries.com/v3.1/name/Egypt`),
//       getJSON(`https://restcountries.com/v3.1/name/Italy`),
//       getJSON(`https://restcountries.com/v3.1/name/USA`),
//     ]);
//     console.log(...res);
//   } catch (error) {
//     console.error(error);
//   }
// })();
 */

/////////////////////////////////////////////////////////
/////////////////// Coding Challenge 3 //////////////////
/////////////////////////////////////////////////////////
/* 
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
 */
