const okUrl = "http://localhost:3000/photos?_page=1&_limit=100";
const notFoundErrorUrl = "https://httpstat.us/404";
const forbiddenErrorUrl = "https://httpstat.us/403";
const serverErrorUrl = "https://httpstat.us/500";
// const urls here

//axios api version

// axios
//   .get(okUrl)
//   .then((response) => response.data)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// axios
//   .get(notFoundErrorUrl)
//   .then((response) => response.data)
//   .then((data) => console.log(data));

// axios
//   .get(forbiddenErrorUrl)
//   .then((response) => response.data)
//   .then((data) => console.log(data));

// axios
//   .get(serverErrorUrl)
//   .then((response) => response.data)
//   .then((data) => console.log(data));

//fetch api version

// fetch(okUrl)
//   .then((response) => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response;
//   })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetch(notFoundErrorUrl)
//   .then((response) => {
//     console.log(response);
//     return response;
//   })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetch(forbiddenErrorUrl)
//   .then((response) => {
//     console.log(response);
//     return response;
//   })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetch(serverErrorUrl)
//   .then((response) => {
//     console.log(response);
//     return response;
//   })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

fetch(okUrl)
  .then((response) => {
    console.log(response);
    return response;
  })
  .then(handleErrors)
  .then(parseJSON)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

function handleErrors(response) {
  if (!response.ok) throw new Error(response.statusText);
  return response;
}

function parseJSON(response) {
  return response.json();
}
