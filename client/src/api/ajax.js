// Encapsulating the axios that can be used to the whole project

import axios from "axios";

export default function ajax(url, data = {}, type = "GET") {
  return new Promise((resolve, reject) => {
    let promise;
    // execute the ajax requests
    if (type === "GET") {
      // for get request
      promise = axios.get(url, data);
    } else {
      promise = axios.post(url, data);
    }

    // invoke resolve(value) if successes
    promise
      .then(response => {
        resolve(response.data);
      }) // show error messages if fails
      .catch(error => {
        console.log(error);
      });
  });
}
