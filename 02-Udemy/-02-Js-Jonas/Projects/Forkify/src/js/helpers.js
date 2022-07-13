///////// IMPORTING THE CONFIGURATIONS //////////
import {
  API_URL,
  TIMEOUT_SEC,
  RES_PER_PAGE,
  KEY,
  MODAL_CLOSE_SEC,
} from './config.js';

/////////////////////////////////////////////////
/** The waiting time for the loading */
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

/**
 ** Gets the JSON data from the API "URL"
 ** Sends the JSON data to the API "URL, DATA"
 */
export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (error) {
    throw error;
  }
};

// /** Gets the JSON data from the API */
// export const getJSON = async function (url) {
//   try {
//     const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
//     const data = await res.json();
//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// /** Sends the JSON data to the API */
// export const sendJSON = async function (url, uploadData) {
//   try {
//     const fetchPro = fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(uploadData),
//     });

//     const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
//     const data = await res.json();

//     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
